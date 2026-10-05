/**
 * MAIN APP CONTROLLER & ROUTER
 * Arsitektur Navigasi Terintegrasi per Bab (Tanpa sliding tab ganda)
 */

class AppStore {
  constructor() {
    this.storageKey = "al_maahirah_kelas6_state";
    this.state = this.loadState();
  }

  loadState() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn("Gagal memuat local state", e);
    }
    return {
      totalStars: 0,
      chapterProgress: {
        "bab-1": { stars: 0, completed: false },
        "bab-2": { stars: 0, completed: false },
        "bab-3": { stars: 0, completed: false }
      }
    };
  }

  saveChapterStars(chapterId, stars, score) {
    if (!this.state.chapterProgress[chapterId]) {
      this.state.chapterProgress[chapterId] = { stars: 0, completed: false };
    }
    const prevStars = this.state.chapterProgress[chapterId].stars || 0;
    if (stars > prevStars) {
      this.state.chapterProgress[chapterId].stars = stars;
      this.state.chapterProgress[chapterId].completed = true;
      this.state.totalStars = Object.values(this.state.chapterProgress).reduce((acc, cur) => acc + (cur.stars || 0), 0);
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.state));
      } catch (e) {}
    }
    this.updateHeaderUI();
  }

  updateHeaderUI() {
    const starEl = document.getElementById("header-total-stars");
    if (starEl) starEl.innerText = this.state.totalStars;
  }
}

class AppRouter {
  constructor() {
    this.currentTab = "lessons"; // 'lessons' | 'games' | 'dictionary'
    this.currentChapterIndex = 0;
    this.currentChapterSection = "reader"; // 'reader' | 'exercises'
    this.dictFilterChapter = "all";
    this.dictSearchQuery = "";
  }

  init() {
    window.appStore = new AppStore();
    window.appStore.updateHeaderUI();

    this.bindEvents();
    this.showLessonsList();
  }

  bindEvents() {
    // Navigasi Bottom Nav (3 Tab Utama)
    document.querySelectorAll(".nav-item").forEach(item => {
      item.addEventListener("click", () => {
        window.audioEngine.playTap();
        const tab = item.dataset.tab;
        this.switchTab(tab);
      });
    });
  }

  switchTab(tabName) {
    this.currentTab = tabName;
    window.audioEngine.stopSpeech();

    // Perbarui active state pada navigasi bawah
    document.querySelectorAll(".nav-item").forEach(item => {
      item.classList.toggle("active", item.dataset.tab === tabName);
    });

    // Sembunyikan semua tab view
    document.querySelectorAll(".tab-view").forEach(view => {
      view.classList.add("hidden");
    });

    // Tampilkan view yang dipilih
    const targetView = document.getElementById(`view-${tabName}`);
    if (targetView) targetView.classList.remove("hidden");

    if (tabName === "lessons") {
      this.showLessonsList();
    } else if (tabName === "games") {
      window.miniGames.init();
    } else if (tabName === "dictionary") {
      this.renderDictionary();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ==========================================
  // MODUL PELAJARAN (MATERI & LATIHAN TERPADU)
  // ==========================================

  // Tampilkan Daftar Bab
  showLessonsList() {
    window.audioEngine.stopSpeech();
    const listView = document.getElementById("lessons-list-view");
    const detailView = document.getElementById("chapter-detail-view");
    const container = document.getElementById("lessons-cards-container");

    if (listView) listView.classList.remove("hidden");
    if (detailView) detailView.classList.add("hidden");

    if (!container) return;

    container.innerHTML = window.APP_DATA.chapters.map((ch, idx) => {
      const progress = window.appStore.state.chapterProgress[ch.id] || { stars: 0 };
      const starsCount = progress.stars || 0;

      return `
        <div class="lesson-chapter-card glass-card" onclick="window.appRouter.openChapter(${idx})">
          <div class="card-accent-bar" style="background: ${ch.color}"></div>
          <div class="lesson-card-body">
            <div class="card-meta-row">
              <span class="lesson-badge">${ch.badge}</span>
              <div class="card-stars">
                <span class="${starsCount >= 1 ? 'star-on' : 'star-off'}">⭐</span>
                <span class="${starsCount >= 2 ? 'star-on' : 'star-off'}">⭐</span>
                <span class="${starsCount >= 3 ? 'star-on' : 'star-off'}">⭐</span>
              </div>
            </div>

            <div class="card-titles-row">
              <div class="card-ar font-arabic" dir="rtl">${ch.themeArabic}</div>
              <h3 class="card-latin">${ch.themeLatin}</h3>
            </div>

            <p class="card-snippet">${ch.description}</p>

            <div class="card-action-row">
              <span class="action-label" style="color: ${ch.color}">Buka Pelajaran ➔</span>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // Buka Bab Tertentu
  openChapter(idx) {
    window.audioEngine.playTap();
    this.currentChapterIndex = idx;
    const chapter = window.APP_DATA.chapters[idx];

    const listView = document.getElementById("lessons-list-view");
    const detailView = document.getElementById("chapter-detail-view");
    const headerBox = document.getElementById("chapter-header-box");

    if (listView) listView.classList.add("hidden");
    if (detailView) detailView.classList.remove("hidden");

    // Render Header Info Bab
    if (headerBox) {
      headerBox.innerHTML = `
        <div class="chapter-hero-banner" style="--ch-theme: ${chapter.color}; --ch-bg: ${chapter.bgLight}">
          <div class="hero-badge-row">
            <span class="hero-badge">${chapter.badge}</span>
            <span class="hero-ar-title font-arabic">${chapter.titleArabic}</span>
          </div>
          <h2 class="hero-main-ar font-arabic">${chapter.themeArabic}</h2>
          <div class="hero-main-latin">${chapter.themeLatin}</div>
          <p class="hero-desc">${chapter.description}</p>
        </div>
      `;
    }

    // Default ke Bacaan Naskah
    this.switchChapterSection("reader");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Beralih antara Bacaan dan Latihan dalam Bab yang sama
  switchChapterSection(section) {
    window.audioEngine.playTap();
    this.currentChapterSection = section;

    const btnReader = document.getElementById("seg-btn-reader");
    const btnExercises = document.getElementById("seg-btn-exercises");
    const secReader = document.getElementById("chapter-reader-section");
    const secExercises = document.getElementById("chapter-exercise-section");

    if (section === "reader") {
      if (btnReader) btnReader.classList.add("active");
      if (btnExercises) btnExercises.classList.remove("active");
      if (secReader) secReader.classList.remove("hidden");
      if (secExercises) secExercises.classList.add("hidden");

      window.storyReader.renderChapter(this.currentChapterIndex);
    } else {
      window.audioEngine.stopSpeech();
      if (btnReader) btnReader.classList.remove("active");
      if (btnExercises) btnExercises.classList.add("active");
      if (secReader) secReader.classList.add("hidden");
      if (secExercises) secExercises.classList.remove("hidden");

      window.exerciseEngine.renderChapterExercises(this.currentChapterIndex);
    }
  }

  // ==========================================
  // MODUL KAMUS KOSAKATA (DICTIONARY VIEW)
  // ==========================================

  renderDictionary() {
    const container = document.getElementById("dictionary-container");
    if (!container) return;

    let items = window.APP_DATA.mufrodatDictionary;

    // Filter Bab
    if (this.dictFilterChapter !== "all") {
      const chNum = parseInt(this.dictFilterChapter);
      items = items.filter(i => i.chapter === chNum);
    }

    // Filter Pencarian
    if (this.dictSearchQuery.trim()) {
      const q = this.dictSearchQuery.toLowerCase().trim();
      items = items.filter(i => 
        i.ar.includes(q) || 
        (i.tr && i.tr.toLowerCase().includes(q)) || 
        (i.id && i.id.toLowerCase().includes(q))
      );
    }

    container.innerHTML = `
      <div class="dict-header-wrap">
        <h2 class="dict-title">Kamus Kosakata (Mufrodat)</h2>
        <p class="dict-desc">Daftar kata penting dari Pelajaran 1 sampai 3. Ketuk kata untuk mendengarkan pelafalannya.</p>

        <!-- Search Input -->
        <div class="dict-search-box">
          <span class="search-icon">🔍</span>
          <input type="text" id="dict-search-input" 
                 placeholder="Cari kata Arab atau terjemahan..." 
                 value="${this.dictSearchQuery}" 
                 oninput="window.appRouter.onDictSearch(this.value)" />
          ${this.dictSearchQuery ? `<button class="btn-clear-search" onclick="window.appRouter.onDictSearch('')">✕</button>` : ""}
        </div>

        <!-- Filter Pilihan Bab (Bukan sliding tab) -->
        <div class="dict-filter-chips">
          <button class="filter-chip ${this.dictFilterChapter === 'all' ? 'active' : ''}" onclick="window.appRouter.onDictFilter('all')">Semua (${window.APP_DATA.mufrodatDictionary.length})</button>
          <button class="filter-chip ${this.dictFilterChapter === '1' ? 'active' : ''}" onclick="window.appRouter.onDictFilter('1')">Bab 1</button>
          <button class="filter-chip ${this.dictFilterChapter === '2' ? 'active' : ''}" onclick="window.appRouter.onDictFilter('2')">Bab 2</button>
          <button class="filter-chip ${this.dictFilterChapter === '3' ? 'active' : ''}" onclick="window.appRouter.onDictFilter('3')">Bab 3</button>
        </div>
      </div>

      <div class="dict-grid">
        ${items.length === 0 ? `
          <div class="empty-state">
            <span class="empty-icon">🔎</span>
            <p>Tidak ada kata yang sesuai dengan pencarian "${this.dictSearchQuery}".</p>
          </div>
        ` : items.map(item => `
          <div class="dict-card glass-card" onclick="window.audioEngine.speakArabic('${item.ar}')">
            <div class="dict-top">
              <span class="dict-ch-badge">Bab ${item.chapter}</span>
              <button class="dict-sound-btn" title="Dengarkan Suara">🔊</button>
            </div>
            <div class="dict-arabic font-arabic" dir="rtl">${item.ar}</div>
            <div class="dict-translit">${item.tr}</div>
            <div class="dict-meaning">${item.id}</div>
          </div>
        `).join("")}
      </div>
    `;
  }

  onDictSearch(val) {
    this.dictSearchQuery = val;
    this.renderDictionary();
    const input = document.getElementById("dict-search-input");
    if (input) {
      input.focus();
      input.selectionStart = input.selectionEnd = input.value.length;
    }
  }

  onDictFilter(filter) {
    window.audioEngine.playTap();
    this.dictFilterChapter = filter;
    this.renderDictionary();
  }
}

// Inisialisasi saat DOM siap
document.addEventListener("DOMContentLoaded", () => {
  window.storyReader.init();
  window.appRouter = new AppRouter();
  window.appRouter.init();
});
