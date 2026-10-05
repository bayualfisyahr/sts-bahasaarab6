/**
 * READER MODULE: Render Naskah Cerita, Terjemah Perkata, Terjemah Per Kalimat, dan Audio Narasi
 */

class StoryReader {
  constructor() {
    this.currentChapterIndex = 0;
    this.activeSentenceIndex = null;
    this.isFullStoryPlaying = false;
    this.modalWord = null;
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // Event delegation untuk kata Arab yang disentuh (terjemah perkata)
    document.addEventListener("click", (e) => {
      const chip = e.target.closest(".word-chip");
      if (chip) {
        window.audioEngine.playTap();
        const chIdx = parseInt(chip.dataset.chapter);
        const sIdx = parseInt(chip.dataset.sentence);
        const wIdx = parseInt(chip.dataset.word);
        this.openWordModal(chIdx, sIdx, wIdx);
      }
    });

    // Modal Close Button
    const closeBtn = document.getElementById("close-word-modal");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closeWordModal());
    }

    const modalBackdrop = document.getElementById("word-modal-backdrop");
    if (modalBackdrop) {
      modalBackdrop.addEventListener("click", (e) => {
        if (e.target === modalBackdrop) this.closeWordModal();
      });
    }

    // Modal Speak Button
    const modalSpeakBtn = document.getElementById("modal-speak-btn");
    if (modalSpeakBtn) {
      modalSpeakBtn.addEventListener("click", () => {
        if (this.modalWord) {
          window.audioEngine.speakArabic(this.modalWord.ar);
        }
      });
    }
  }

  // Render konten bacaan bab
  renderChapter(chapterIndex) {
    this.currentChapterIndex = chapterIndex;
    window.audioEngine.stopSpeech();
    this.isFullStoryPlaying = false;

    const chapter = window.APP_DATA.chapters[chapterIndex];
    const container = document.getElementById("reader-container");
    if (!container) return;

    let specialContentHtml = "";

    // Konten Khusus Bab 2 (Tabel Angka 11 - 20)
    if (chapter.number === 2 && chapter.numberChart) {
      specialContentHtml = `
        <div class="special-card number-chart-card">
          <div class="card-header-tag">
            <span class="tag-icon">🔢</span> Kaidah Bilangan 11 - 20 (Mudzakkar)
          </div>
          <p class="card-desc">Angka 11 sampai 20 berpasangan dengan kata benda (ma'dud) mufrad berharakat fathatain (manshub):</p>
          <div class="numbers-grid">
            ${chapter.numberChart.map((n) => `
              <div class="num-item" onclick="window.audioEngine.speakArabic('${n.arText}')">
                <div class="num-badge">${n.num} • ${n.arNum}</div>
                <div class="num-ar font-arabic">${n.arText}</div>
                <div class="num-tr">${n.tr}</div>
                <div class="num-id">${n.meaning}</div>
                <button class="mini-audio-btn" title="Dengarkan Suara">🔊</button>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    // Konten Khusus Bab 3 (Tabel Tashrif Laisa)
    if (chapter.number === 3 && chapter.laisaTable) {
      specialContentHtml = `
        <div class="special-card laisa-card">
          <div class="card-header-tag">
            <span class="tag-icon">⚖️</span> Kaidah Kata Penegasan / Negasi (لَيْسَ)
          </div>
          <p class="card-desc">Bentuk kata <strong> لَيْسَ</strong> dapat berubah menyesuaikan dengan kata ganti (dhomir) dan khabar setelahnya berharakat fathatain (manshub):</p>
          <div class="laisa-table-wrap">
            <table class="laisa-table">
              <thead>
                <tr>
                  <th>Kata Ganti</th>
                  <th>Bentuk Laisa</th>
                  <th>Contoh Kalimat</th>
                </tr>
              </thead>
              <tbody>
                ${chapter.laisaTable.map(item => `
                  <tr onclick="window.audioEngine.speakArabic('${item.example}')">
                    <td class="font-arabic fw-bold">${item.pronoun}</td>
                    <td class="font-arabic laisa-form">${item.form}</td>
                    <td>
                      <div class="font-arabic ar-example">${item.example}</div>
                      <div class="example-meaning">${item.meaning}</div>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>

          <div class="rule-notes">
            <h4>Catatan Kaidah:</h4>
            <ul>
              ${chapter.specialRuleNotes.map(note => `<li>${note}</li>`).join("")}
            </ul>
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <!-- Audio Player Bar -->
      <div class="audio-control-bar glass-card">
        <div class="audio-main-action">
          <button id="btn-play-all" class="btn-audio-primary" onclick="window.storyReader.togglePlayFullStory()">
            <span class="icon" id="play-all-icon">▶️</span>
            <span id="play-all-label">Dengarkan Cerita</span>
          </button>
          <button class="btn-audio-stop" onclick="window.storyReader.stopAllAudio()" title="Hentikan Audio">
            ⏹️
          </button>
        </div>
      </div>

      <!-- Teks Naskah Cerita -->
      <div class="story-section">
        <div class="section-title-wrap">
          <h3 class="section-title">
            <span>📖</span> Naskah Cerita: ${chapter.story.titleLatin}
          </h3>
          <span class="sub-hint">Ketuk kata Arab mana saja untuk melihat arti dan mendengarkan lafaznya</span>
        </div>

        <div class="sentences-list">
          ${chapter.story.sentences.map((sent, sIdx) => `
            <div class="sentence-card glass-card" id="sent-card-${sIdx}">
              <div class="sentence-top">
                <span class="sent-number">${sIdx + 1}</span>
                <button class="btn-sent-audio" onclick="window.storyReader.playSentence(${chapterIndex}, ${sIdx})" title="Dengarkan Kalimat Ini">
                  🔊 Dengarkan
                </button>
              </div>

              <!-- Baris Kata Arab Berharakat -->
              <div class="arabic-words-flow font-arabic" dir="rtl">
                ${sent.words.map((w, wIdx) => `
                  <span class="word-chip" 
                        data-chapter="${chapterIndex}" 
                        data-sentence="${sIdx}" 
                        data-word="${wIdx}"
                        title="Klik untuk arti perkata">
                    ${w.ar}
                  </span>
                `).join(" ")}
              </div>

              <!-- Accordion Terjemahan Lengkap Kalimat -->
              <div class="translation-accordion">
                <button class="btn-toggle-trans" onclick="window.storyReader.toggleTranslation(${sIdx})">
                  <span class="trans-label" id="trans-label-${sIdx}">Lihat Terjemahan</span>
                  <span class="arrow-indicator" id="arrow-${sIdx}">▼</span>
                </button>
                <div class="trans-content hidden" id="trans-content-${sIdx}">
                  <p class="trans-text">${sent.translation}</p>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Konten Khusus (Bila Ada) -->
      ${specialContentHtml}

      <!-- Tombol Lanjut ke Latihan Bab Ini -->
      <div class="reading-finish-row">
        <button class="btn-primary btn-jump-exercises" onclick="window.appRouter.switchChapterSection('exercises')">
          ✍️ Lanjut Kerjakan Latihan Bab Ini ➔
        </button>
      </div>
    `;
  }

  // Toggle Play / Pause Full Story
  togglePlayFullStory() {
    const playBtn = document.getElementById("btn-play-all");
    const playIcon = document.getElementById("play-all-icon");
    const playLabel = document.getElementById("play-all-label");

    if (this.isFullStoryPlaying) {
      window.audioEngine.stopSpeech();
      this.isFullStoryPlaying = false;
      if (playIcon) playIcon.innerText = "▶️";
      if (playLabel) playLabel.innerText = "Dengarkan Cerita";
      if (playBtn) playBtn.classList.remove("playing");
      this.clearHighlights();
    } else {
      this.isFullStoryPlaying = true;
      if (playIcon) playIcon.innerText = "⏸️";
      if (playLabel) playLabel.innerText = "Membaca...";
      if (playBtn) playBtn.classList.add("playing");

      this.playSentenceSequentially(0);
    }
  }

  playSentenceSequentially(index) {
    const chapter = window.APP_DATA.chapters[this.currentChapterIndex];
    if (index >= chapter.story.sentences.length || !this.isFullStoryPlaying) {
      this.stopAllAudio();
      return;
    }

    this.highlightSentence(index);
    const sent = chapter.story.sentences[index];

    window.audioEngine.speakArabic(
      sent.audioText,
      null,
      () => {
        if (this.isFullStoryPlaying) {
          setTimeout(() => {
            this.playSentenceSequentially(index + 1);
          }, 400);
        }
      }
    );
  }

  playSentence(chapterIndex, sentenceIndex) {
    this.stopAllAudio();
    const chapter = window.APP_DATA.chapters[chapterIndex];
    const sent = chapter.story.sentences[sentenceIndex];
    this.highlightSentence(sentenceIndex);

    window.audioEngine.speakArabic(
      sent.audioText,
      null,
      () => {
        this.clearHighlights();
      }
    );
  }

  stopAllAudio() {
    window.audioEngine.stopSpeech();
    this.isFullStoryPlaying = false;
    const playIcon = document.getElementById("play-all-icon");
    const playLabel = document.getElementById("play-all-label");
    const playBtn = document.getElementById("btn-play-all");
    if (playIcon) playIcon.innerText = "▶️";
    if (playLabel) playLabel.innerText = "Dengarkan Cerita";
    if (playBtn) playBtn.classList.remove("playing");
    this.clearHighlights();
  }

  highlightSentence(idx) {
    this.clearHighlights();
    const card = document.getElementById(`sent-card-${idx}`);
    if (card) {
      card.classList.add("active-reading");
      card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  clearHighlights() {
    document.querySelectorAll(".sentence-card").forEach(el => {
      el.classList.remove("active-reading");
    });
  }

  changeSpeed(rate, btnElement) {
    window.audioEngine.setRate(rate);
    document.querySelectorAll(".rate-chip").forEach(c => c.classList.remove("active"));
    if (btnElement) btnElement.classList.add("active");
  }

  toggleTranslation(sIdx) {
    const content = document.getElementById(`trans-content-${sIdx}`);
    const label = document.getElementById(`trans-label-${sIdx}`);
    const arrow = document.getElementById(`arrow-${sIdx}`);
    if (!content) return;

    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
      label.innerText = "Sembunyikan Terjemahan";
      arrow.innerText = "▲";
    } else {
      content.classList.add("hidden");
      label.innerText = "Lihat Terjemahan";
      arrow.innerText = "▼";
    }
  }

  // Buka Modal Detail Kata (Terjemah Perkata)
  openWordModal(chIdx, sIdx, wIdx) {
    const chapter = window.APP_DATA.chapters[chIdx];
    const sentence = chapter.story.sentences[sIdx];
    const word = sentence.words[wIdx];
    this.modalWord = word;

    const modal = document.getElementById("word-modal-backdrop");
    const arEl = document.getElementById("modal-word-arabic");
    const trEl = document.getElementById("modal-word-translit");
    const typeEl = document.getElementById("modal-word-type");

    if (arEl) arEl.innerText = word.ar;
    if (trEl) trEl.innerText = word.tr || "";
    if (typeEl) typeEl.innerText = word.type || "Kosakata";

    // Pastikan modal hanya menampilkan div terjemah perkata saja
    const detailsGrid = document.querySelector(".modal-details-grid");
    if (detailsGrid) {
      detailsGrid.innerHTML = `
        <div class="detail-col">
          <div class="detail-label">Arti Perkata</div>
          <div class="detail-val" id="modal-word-meaning">${word.id || ""}</div>
        </div>
      `;
    } else {
      const idEl = document.getElementById("modal-word-meaning");
      if (idEl) idEl.innerText = word.id || "";
    }

    if (modal) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }

    // Putar suara kata secara otomatis saat dibuka
    window.audioEngine.speakArabic(word.ar);
  }

  closeWordModal() {
    const modal = document.getElementById("word-modal-backdrop");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
    this.modalWord = null;
  }
}

window.storyReader = new StoryReader();
