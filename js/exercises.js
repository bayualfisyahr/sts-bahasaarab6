/**
 * EXERCISE MODULE: Engine Latihan Interaktif Variatif
 * Mendukung: Susun Kalimat (Reorder), Pemilih Harakat/Tashrif Laisa, Q&A Pemahaman, Adad Ma'dud
 */

class ExerciseEngine {
  constructor() {
    this.currentChapterIndex = 0;
    this.currentExerciseIndex = 0;
    this.userScore = 0;
    this.reorderState = {
      pool: [],
      selected: []
    };
  }

  init() {
    //
  }

  renderChapterExercises(chapterIndex) {
    this.currentChapterIndex = chapterIndex;
    this.currentExerciseIndex = 0;
    this.userScore = 0;

    const chapter = window.APP_DATA.chapters[chapterIndex];
    const container = document.getElementById("exercise-container");
    if (!container) return;

    if (!chapter.exercises || chapter.exercises.length === 0) {
      container.innerHTML = `<div class="empty-state">Belum ada latihan untuk bab ini.</div>`;
      return;
    }

    this.renderCurrentQuestion();
  }

  renderCurrentQuestion() {
    const chapter = window.APP_DATA.chapters[this.currentChapterIndex];
    const exercises = chapter.exercises;
    const container = document.getElementById("exercise-container");
    if (!container) return;

    // Jika latihan telah selesai semua
    if (this.currentExerciseIndex >= exercises.length) {
      this.renderCompletionScreen();
      return;
    }

    const ex = exercises[this.currentExerciseIndex];
    const progressPercent = Math.round(((this.currentExerciseIndex) / exercises.length) * 100);

    let exerciseBodyHtml = "";

    // 1. Tipe Soal: Menyusun Kalimat (Reorder Word Chips)
    if (ex.type === "reorder") {
      this.reorderState = {
        pool: [...ex.scrambled],
        selected: []
      };

      exerciseBodyHtml = `
        <div class="ex-box reorder-box">
          <div class="instruction-badge">${ex.instruction || "Susunlah kata-kata berikut menjadi kalimat sempurna:"}</div>
          
          <!-- Area Jawaban yang Tersusun -->
          <div class="reorder-dropzone font-arabic" id="reorder-answer-zone" dir="rtl">
            <span class="placeholder-text" id="dropzone-placeholder">Ketuk kata-kata di bawah untuk menyusun di sini...</span>
          </div>

          <!-- Pilihan Kata Acak -->
          <div class="reorder-pool font-arabic" id="reorder-pool-zone" dir="rtl">
            ${this.reorderState.pool.map((word, idx) => `
              <button class="word-tile-btn font-arabic" data-idx="${idx}" onclick="window.exerciseEngine.selectTile(${idx})">
                ${word}
              </button>
            `).join("")}
          </div>

          <div class="ex-actions-row">
            <button class="btn-secondary" onclick="window.exerciseEngine.resetReorder()">Reset</button>
            <button class="btn-primary" id="btn-check-reorder" onclick="window.exerciseEngine.checkReorder()">Periksa Jawaban</button>
          </div>
        </div>
      `;
    }

    // 2. Tipe Soal: Pilihan Ganda (Tashrif Laisa, Harakat, Pemahaman Cerita, Adad Ma'dud)
    else {
      let promptHtml = "";
      if (ex.sentenceArabic) {
        promptHtml += `<div class="prompt-arabic font-arabic" dir="rtl">${ex.sentenceArabic}</div>`;
      }
      if (ex.questionArabic) {
        promptHtml += `<div class="prompt-arabic font-arabic" dir="rtl">${ex.questionArabic}</div>`;
      }
      if (ex.targetText) {
        promptHtml += `<div class="prompt-arabic font-arabic" dir="rtl">${ex.targetText}</div>`;
      }
      if (ex.givenAnswer) {
        promptHtml += `
          <div class="given-answer-card">
            <span class="label">Jawaban yang tersedia:</span>
            <div class="font-arabic font-answer" dir="rtl">${ex.givenAnswer}</div>
          </div>
        `;
      }
      if (ex.questionLatin || ex.meaning || ex.question) {
        promptHtml += `<div class="prompt-latin">${ex.questionLatin || ex.meaning || ex.question}</div>`;
      }

      exerciseBodyHtml = `
        <div class="ex-box choice-box">
          ${promptHtml}
          <div class="options-list">
            ${ex.options.map((opt, oIdx) => `
              <button class="option-btn font-arabic" id="opt-btn-${oIdx}" onclick="window.exerciseEngine.selectOption(${oIdx})">
                <span class="opt-letter">${String.fromCharCode(65 + oIdx)}</span>
                <span class="opt-text" dir="rtl">${opt}</span>
              </button>
            `).join("")}
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="exercise-wrapper glass-card">
        <!-- Progress Bar & Info -->
        <div class="ex-header-bar">
          <div class="ex-info">
            <span class="ex-badge">${chapter.badge} • Soal ${this.currentExerciseIndex + 1} dari ${exercises.length}</span>
            <span class="ex-title">${ex.title || "Latihan"}</span>
          </div>
          <div class="ex-score-pill">⭐ ${this.userScore} Poin</div>
        </div>

        <div class="progress-track">
          <div class="progress-fill" style="width: ${progressPercent}%"></div>
        </div>

        <!-- Exercise Content -->
        ${exerciseBodyHtml}

        <!-- Feedback Container (Benar/Salah) -->
        <div class="feedback-container hidden" id="exercise-feedback"></div>
      </div>
    `;
  }

  // Interaksi Drag/Tap Tile Susun Kata
  selectTile(poolIndex) {
    window.audioEngine.playTap();
    const word = this.reorderState.pool[poolIndex];
    if (!word) return;

    this.reorderState.pool.splice(poolIndex, 1);
    this.reorderState.selected.push(word);
    this.updateReorderUI();
  }

  unselectTile(selectedIndex) {
    window.audioEngine.playTap();
    const word = this.reorderState.selected[selectedIndex];
    if (!word) return;

    this.reorderState.selected.splice(selectedIndex, 1);
    this.reorderState.pool.push(word);
    this.updateReorderUI();
  }

  resetReorder() {
    window.audioEngine.playTap();
    const chapter = window.APP_DATA.chapters[this.currentChapterIndex];
    const ex = chapter.exercises[this.currentExerciseIndex];
    this.reorderState.pool = [...ex.scrambled];
    this.reorderState.selected = [];
    this.updateReorderUI();
    const fb = document.getElementById("exercise-feedback");
    if (fb) fb.classList.add("hidden");
  }

  updateReorderUI() {
    const answerZone = document.getElementById("reorder-answer-zone");
    const poolZone = document.getElementById("reorder-pool-zone");
    if (!answerZone || !poolZone) return;

    if (this.reorderState.selected.length === 0) {
      answerZone.innerHTML = `<span class="placeholder-text">Ketuk kata-kata di bawah untuk menyusun di sini...</span>`;
    } else {
      answerZone.innerHTML = this.reorderState.selected.map((w, idx) => `
        <button class="word-tile-btn in-answer font-arabic" onclick="window.exerciseEngine.unselectTile(${idx})">
          ${w} ✕
        </button>
      `).join(" ");
    }

    poolZone.innerHTML = this.reorderState.pool.map((w, idx) => `
      <button class="word-tile-btn font-arabic" onclick="window.exerciseEngine.selectTile(${idx})">
        ${w}
      </button>
    `).join(" ");
  }

  // Periksa Jawaban Susun Kalimat
  checkReorder() {
    const chapter = window.APP_DATA.chapters[this.currentChapterIndex];
    const ex = chapter.exercises[this.currentExerciseIndex];
    const userSentence = this.reorderState.selected.join(" ").trim();
    const correctSentence = ex.correctOrder.join(" ").trim();

    const isCorrect = (userSentence === correctSentence);
    this.showFeedback(isCorrect, ex.explanation || "");
  }

  // Periksa Jawaban Pilihan Ganda
  selectOption(selectedIndex) {
    const chapter = window.APP_DATA.chapters[this.currentChapterIndex];
    const ex = chapter.exercises[this.currentExerciseIndex];
    const isCorrect = (selectedIndex === ex.correctIndex);
    const selectedBtn = document.getElementById(`opt-btn-${selectedIndex}`);

    if (isCorrect) {
      // Jika benar, kunci semua opsi dan tandai hijau
      document.querySelectorAll(".option-btn").forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === ex.correctIndex) {
          btn.classList.add("btn-correct");
        }
      });
      this.showFeedback(true, ex.explanation);
    } else {
      // Jika salah, HANYA tandai merah pada opsi yang dipilih dan nonaktifkan opsi tersebut
      if (selectedBtn) {
        selectedBtn.classList.add("btn-wrong");
        selectedBtn.disabled = true;
      }
      this.showFeedback(false, null);
    }
  }

  showFeedback(isCorrect, explanation) {
    const fb = document.getElementById("exercise-feedback");
    if (!fb) return;

    fb.classList.remove("hidden");

    if (isCorrect) {
      window.audioEngine.playCorrect();
      this.userScore += 20;
      fb.className = "feedback-container feedback-success animate-pop";
      fb.innerHTML = `
        <div class="feedback-badge">Benar!</div>
        <p class="feedback-msg">Jawabanmu tepat (+20 Poin).</p>
        ${explanation ? `<div class="feedback-exp">💡 <strong>Penjelasan:</strong> ${explanation}</div>` : ""}
        <button class="btn-primary btn-next-ex" onclick="window.exerciseEngine.nextQuestion()">
          Lanjut Soal Berikutnya ➔
        </button>
      `;
    } else {
      window.audioEngine.playWrong();
      fb.className = "feedback-container feedback-error animate-shake";
      
      const chapter = window.APP_DATA.chapters[this.currentChapterIndex];
      const ex = chapter.exercises[this.currentExerciseIndex];

      if (ex.type === "reorder") {
        fb.innerHTML = `
          <div class="feedback-badge">Kurang Tepat</div>
          <p class="feedback-msg">Susunan kalimat belum tepat. Silakan ketuk tombol <strong>Reset</strong> di atas lalu coba susun kembali.</p>
        `;
      } else {
        fb.innerHTML = `
          <div class="feedback-badge">Kurang Tepat</div>
          <p class="feedback-msg">Jawabanmu belum tepat. Silakan coba pilih opsi jawaban yang lain!</p>
        `;
      }
    }

    fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  nextQuestion() {
    window.audioEngine.playTap();
    this.currentExerciseIndex++;
    this.renderCurrentQuestion();
  }

  // Layar Evaluasi Selesai Latihan
  renderCompletionScreen() {
    window.audioEngine.playFanfare();
    const chapter = window.APP_DATA.chapters[this.currentChapterIndex];
    const totalExercises = chapter.exercises.length;
    const maxScore = totalExercises * 20;
    const stars = this.userScore >= maxScore * 0.8 ? 3 : this.userScore >= maxScore * 0.5 ? 2 : 1;

    // Simpan progres ke LocalStorage
    if (window.appStore) {
      window.appStore.saveChapterStars(chapter.id, stars, this.userScore);
    }

    const container = document.getElementById("exercise-container");
    if (!container) return;

    container.innerHTML = `
      <div class="completion-card glass-card text-center animate-pop">
        <h3 class="comp-title">Alhamdulillah, Latihan Selesai!</h3>
        <p class="comp-subtitle">Kamu telah menyelesaikan seluruh latihan untuk ${chapter.badge}.</p>

        <div class="stars-awarded">
          <span class="star-item ${stars >= 1 ? "filled" : ""}">⭐</span>
          <span class="star-item ${stars >= 2 ? "filled" : ""}">⭐</span>
          <span class="star-item ${stars >= 3 ? "filled" : ""}">⭐</span>
        </div>

        <div class="score-summary-box">
          <div class="score-number">${this.userScore}</div>
          <div class="score-label">Total Poin yang Diperoleh (Maksimal: ${maxScore})</div>
        </div>

        <div class="comp-buttons">
          <button class="btn-secondary" onclick="window.exerciseEngine.renderChapterExercises(${this.currentChapterIndex})">
            🔄 Ulangi Latihan
          </button>
          <button class="btn-secondary" onclick="window.appRouter.switchChapterSection('reader')">
            📖 Kembali ke Bacaan
          </button>
          <button class="btn-primary" onclick="window.appRouter.showLessonsList()">
            📋 Daftar Pelajaran
          </button>
        </div>
      </div>
    `;
  }
}

window.exerciseEngine = new ExerciseEngine();
