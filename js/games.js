/**
 * GAMES MODULE: 3 Permainan Edukatif Bahasa Arab
 * 1. Susun Kata Cepat
 * 2. Pasangan Kata (Mufrodat Match) - dengan jeda hafalan 6 detik
 * 3. Kuis Kaidah Laisa - dengan feedback penjelasan benar/salah
 */

class MiniGamesHub {
  constructor() {
    this.activeGame = "menu"; // 'menu' | 'rush' | 'memory' | 'laisa'
    this.timer = null;
    this.previewTimer = null;
    this.timeLeft = 0;
    this.score = 0;

    // State Game 1: Rush
    this.rushIndex = 0;
    this.rushSelected = [];
    this.rushPool = [];
    this.rushChapter = "all"; // 'all' | '1' | '2' | '3'
    this.rushList = [];

    // State Game 2: Memory
    this.memoryFlippedCards = [];
    this.matchedPairs = 0;
    this.moves = 0;
    this.isPreviewing = false;
    this.previewTimeLeft = 6;

    // State Game 3: Kuis Kaidah Laisa
    this.laisaIndex = 0;
    this.isLaisaAnswered = false;
  }

  init() {
    this.renderMenu();
  }

  renderMenu() {
    this.clearTimer();
    this.closeRushModal();
    this.activeGame = "menu";
    const container = document.getElementById("games-container");
    if (!container) return;

    const rushHigh = localStorage.getItem("game_rush_high") || 0;
    const memoryBest = localStorage.getItem("game_memory_best") || "-";
    const laisaHigh = localStorage.getItem("game_laisa_high") || 0;

    container.innerHTML = `
      <div class="games-hub-header">
        <h2 class="hub-title">Permainan Bahasa Arab</h2>
        <p class="hub-subtitle">Latih kemampuan kosakata dan kaidah tata bahasa melalui permainan interaktif.</p>
      </div>

      <div class="games-cards-grid">
        <!-- Game 1 -->
        <div class="game-hub-card glass-card" onclick="window.miniGames.showRushInfoModal()">
          <div class="game-badge">Latihan Kalimat</div>
          <div class="game-icon">⚡</div>
          <h3 class="game-name">Susun Kata Cepat</h3>
          <p class="game-desc">Susun kata Arab sebelum waktu habis! Benar dapat +5 dtk, salah dikurangi 1 dtk.</p>
          <div class="game-stat">Skor Terbaik: ${rushHigh} Poin</div>
          <button class="btn-primary btn-play-game" onclick="event.stopPropagation(); window.miniGames.showRushInfoModal();">Mulai Permainan</button>
        </div>

        <!-- Game 2 -->
        <div class="game-hub-card glass-card" onclick="window.miniGames.startMemoryGame()">
          <div class="game-badge">Kosakata</div>
          <div class="game-icon">🃏</div>
          <h3 class="game-name">Pasangan Kata (Mufrodat)</h3>
          <p class="game-desc">Lihat dan hafalkan posisi kartu selama 6 detik, lalu temukan pasangannya.</p>
          <div class="game-stat">Langkah Terbaik: ${memoryBest} langkah</div>
          <button class="btn-primary btn-play-game">Mulai Permainan</button>
        </div>

        <!-- Game 3 -->
        <div class="game-hub-card glass-card" onclick="window.miniGames.startLaisaQuiz()">
          <div class="game-badge">Kaidah Bahasa</div>
          <div class="game-icon">📝</div>
          <h3 class="game-name">Kuis Kaidah Laisa</h3>
          <p class="game-desc">Lengkapi kalimat rumpang dengan bentuk kata penegasan (لَيْسَ / لَسْتُ / لَسْنَا) yang tepat sesuai dhomir.</p>
          <div class="game-stat">Skor Terbaik: ${laisaHigh} Poin</div>
          <button class="btn-primary btn-play-game">Mulai Permainan</button>
        </div>
      </div>
    `;
  }

  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    if (this.previewTimer) {
      clearInterval(this.previewTimer);
      this.previewTimer = null;
    }
  }

  // ==========================================
  // GAME 1: SUSUN KATA CEPAT (RUSH)
  // Info Modal, Tambahan Waktu +5s, Pengurangan -1s
  // ==========================================

  showRushInfoModal() {
    window.audioEngine.playTap();
    this.closeRushModal();

    const allSentences = (window.APP_DATA && window.APP_DATA.gamesData && window.APP_DATA.gamesData.scrambleWords) || [];
    const allCount = allSentences.length;
    const b1Count = allSentences.filter(s => s.chapter === 1).length;
    const b2Count = allSentences.filter(s => s.chapter === 2).length;
    const b3Count = allSentences.filter(s => s.chapter === 3).length;

    const modalBackdrop = document.createElement("div");
    modalBackdrop.className = "modal-backdrop animate-pop";
    modalBackdrop.id = "rush-info-modal";
    modalBackdrop.onclick = (e) => {
      if (e.target === modalBackdrop) this.closeRushModal();
    };

    modalBackdrop.innerHTML = `
      <div class="game-info-modal-card">
        <div class="modal-header">
          <div class="modal-badge-group">
            <span class="modal-title-tag">⚡ Latihan Kalimat</span>
            <span class="modal-info-pill">Tantangan Cepat</span>
          </div>
          <button class="btn-close-modal" onclick="window.miniGames.closeRushModal()" aria-label="Tutup">✕</button>
        </div>

        <div class="rush-modal-hero">
          <div class="rush-modal-icon">⚡</div>
          <h3 class="rush-modal-title">Petunjuk Susun Kata Cepat</h3>
          <p class="rush-modal-desc">Susun potongan kata Arab menjadi kalimat yang sempurna sebelum waktu habis.</p>
        </div>

        <div class="rush-rules-box">
          <div class="rush-rule-item">
            <span class="rush-rule-icon">⏱️</span>
            <div class="rush-rule-text">
              <div class="rush-rule-title">Waktu Mulai: 60 Detik</div>
              <div class="rush-rule-sub">Permainan dimulai dengan batas waktu <strong>60 detik</strong>.</div>
            </div>
          </div>
          <div class="rush-rule-item highlight-green">
            <span class="rush-rule-icon">✅</span>
            <div class="rush-rule-text">
              <div class="rush-rule-title">Jawaban Benar: +5 Detik & +50 Poin</div>
              <div class="rush-rule-sub">Tiap kalimat yang benar memberimu <strong>+50 poin</strong> dan <strong>tambahan waktu +5 detik</strong>!</div>
            </div>
          </div>
          <div class="rush-rule-item highlight-red">
            <span class="rush-rule-icon">⚠️</span>
            <div class="rush-rule-text">
              <div class="rush-rule-title">Jawaban Salah: Pengurangan -1 Detik</div>
              <div class="rush-rule-sub">Hati-hati! Jika susunan salah, waktumu langsung <strong>dikurangi 1 detik</strong>.</div>
            </div>
          </div>
        </div>

        <div class="rush-ch-select-wrap">
          <label class="rush-ch-label">Pilih Materi Kalimat:</label>
          <div class="rush-ch-chips">
            <button class="rush-ch-chip ${this.rushChapter === 'all' ? 'active' : ''}" onclick="window.miniGames.setRushChapter('all', this)">
              <span>🌟 Semua Bab</span>
              <span class="rush-chip-sub">${allCount} Variasi Kalimat</span>
            </button>
            <button class="rush-ch-chip ${this.rushChapter === '1' ? 'active' : ''}" onclick="window.miniGames.setRushChapter('1', this)">
              <span>🏫 Bab 1: Sekolahku</span>
              <span class="rush-chip-sub">${b1Count} Kalimat</span>
            </button>
            <button class="rush-ch-chip ${this.rushChapter === '2' ? 'active' : ''}" onclick="window.miniGames.setRushChapter('2', this)">
              <span>🔢 Bab 2: Bilangan</span>
              <span class="rush-chip-sub">${b2Count} Kalimat</span>
            </button>
            <button class="rush-ch-chip ${this.rushChapter === '3' ? 'active' : ''}" onclick="window.miniGames.setRushChapter('3', this)">
              <span>👨‍👩‍👧‍👦 Bab 3: Keluarga</span>
              <span class="rush-chip-sub">${b3Count} Kalimat</span>
            </button>
          </div>
        </div>

        <div class="rush-modal-actions">
          <button class="btn-primary btn-start-rush" onclick="window.miniGames.confirmStartSentenceRush()">
            Mulai Permainan 🚀
          </button>
          <button class="btn-secondary btn-cancel-rush" onclick="window.miniGames.closeRushModal()">
            Batal
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modalBackdrop);
  }

  setRushChapter(ch, btn) {
    window.audioEngine.playTap();
    this.rushChapter = ch;
    document.querySelectorAll(".rush-ch-chip").forEach(el => el.classList.remove("active"));
    if (btn) btn.classList.add("active");
  }

  closeRushModal() {
    const el = document.getElementById("rush-info-modal");
    if (el) el.remove();
  }

  confirmStartSentenceRush() {
    window.audioEngine.playTap();
    this.closeRushModal();

    let pool = (window.APP_DATA && window.APP_DATA.gamesData && window.APP_DATA.gamesData.scrambleWords) || [];
    if (this.rushChapter !== "all") {
      const chNum = parseInt(this.rushChapter);
      pool = pool.filter(s => s.chapter === chNum);
    }

    if (pool.length === 0) {
      pool = (window.APP_DATA && window.APP_DATA.gamesData && window.APP_DATA.gamesData.scrambleWords) || [];
    }

    // Acak kalimat agar urutan variatif setiap kali main
    this.rushList = [...pool].sort(() => Math.random() - 0.5);
    this.clearTimer();
    this.activeGame = "rush";
    this.score = 0;
    this.timeLeft = 60; // 60 detik awal
    this.rushIndex = 0;
    this.renderRushBoard();

    this.timer = setInterval(() => {
      this.timeLeft--;
      const timerEl = document.getElementById("rush-timer-val");
      if (timerEl) timerEl.innerText = this.timeLeft;

      if (this.timeLeft <= 0) {
        this.clearTimer();
        this.endSentenceRush();
      }
    }, 1000);
  }

  startSentenceRush() {
    this.showRushInfoModal();
  }

  renderRushBoard() {
    if (!this.rushList || this.rushList.length === 0) {
      this.rushList = [...(window.APP_DATA.gamesData.scrambleWords || [])];
    }
    const current = this.rushList[this.rushIndex % this.rushList.length];
    const sourceTokens = current.tokens || current.letters || (current.target ? current.target.split(" ") : []);
    this.rushPool = [...sourceTokens].sort(() => Math.random() - 0.5);
    this.rushSelected = [];

    const container = document.getElementById("games-container");
    if (!container) return;

    const questionText = current.question || `Susun Kalimat: "${current.meaning || current.target}"`;
    const chLabel = current.chapter ? `Bab ${current.chapter}` : `Latihan`;

    container.innerHTML = `
      <div class="game-active-wrapper glass-card">
        <div class="game-top-bar">
          <button class="btn-back-hub" onclick="window.miniGames.renderMenu()">← Keluar</button>
          <div class="timer-pill" id="rush-timer-pill">
            ⏱️ Waktu: <span id="rush-timer-val">${this.timeLeft}</span> dtk
            <span id="rush-time-badge" class="time-delta-badge hidden"></span>
          </div>
          <div class="score-pill">Skor: <span id="rush-score-val">${this.score}</span></div>
        </div>

        <div class="rush-prompt-box">
          <div class="rush-meta-bar">
            <span class="rush-round-badge">Soal ${(this.rushIndex % this.rushList.length) + 1} dari ${this.rushList.length}</span>
            <span class="rush-ch-badge">${chLabel}</span>
          </div>
          <span class="game-sub-title">${questionText}</span>
          <div class="rush-dropzone font-arabic" id="rush-answer-box" dir="rtl">
            <span class="placeholder-text">Ketuk kata Arab untuk menyusun kalimat</span>
          </div>
        </div>

        <div class="rush-pool font-arabic" id="rush-pool-box" dir="rtl">
          ${this.rushPool.map((word, i) => `
            <button class="word-tile-btn font-arabic" onclick="window.miniGames.tapRushTile(${i})">${word}</button>
          `).join("")}
        </div>

        <div class="rush-action-bar">
          <button class="btn-secondary" onclick="window.miniGames.resetRushCurrent()">Ulangi</button>
          <button class="btn-primary" onclick="window.miniGames.checkRushAnswer()">Periksa</button>
        </div>
      </div>
    `;
  }

  showTimeDeltaBadge(text, typeClass) {
    const badge = document.getElementById("rush-time-badge");
    if (!badge) return;
    badge.className = `time-delta-badge ${typeClass}`;
    badge.innerText = text;
    badge.classList.remove("hidden");

    setTimeout(() => {
      badge.classList.add("hidden");
    }, 850);
  }

  tapRushTile(poolIdx) {
    window.audioEngine.playTap();
    const word = this.rushPool[poolIdx];
    if (!word) return;

    this.rushPool.splice(poolIdx, 1);
    this.rushSelected.push(word);
    this.updateRushUI();
  }

  unselectRushTile(selIdx) {
    window.audioEngine.playTap();
    const word = this.rushSelected[selIdx];
    if (!word) return;

    this.rushSelected.splice(selIdx, 1);
    this.rushPool.push(word);
    this.updateRushUI();
  }

  resetRushCurrent() {
    window.audioEngine.playTap();
    if (!this.rushList || this.rushList.length === 0) return;
    const current = this.rushList[this.rushIndex % this.rushList.length];
    const sourceTokens = current.tokens || current.letters || (current.target ? current.target.split(" ") : []);
    this.rushPool = [...sourceTokens];
    this.rushSelected = [];
    this.updateRushUI();
  }

  updateRushUI() {
    const answerBox = document.getElementById("rush-answer-box");
    const poolBox = document.getElementById("rush-pool-box");
    if (!answerBox || !poolBox) return;

    if (this.rushSelected.length === 0) {
      answerBox.innerHTML = `<span class="placeholder-text">Ketuk kata Arab untuk menyusun kalimat</span>`;
    } else {
      answerBox.innerHTML = this.rushSelected.map((w, idx) => `
        <button class="word-tile-btn in-answer font-arabic" onclick="window.miniGames.unselectRushTile(${idx})">
          ${w} ✕
        </button>
      `).join(" ");
    }

    poolBox.innerHTML = this.rushPool.map((w, idx) => `
      <button class="word-tile-btn font-arabic" onclick="window.miniGames.tapRushTile(${idx})">
        ${w}
      </button>
    `).join(" ");
  }

  checkRushAnswer() {
    if (!this.rushList || this.rushList.length === 0) return;
    const current = this.rushList[this.rushIndex % this.rushList.length];
    const userAns = this.rushSelected.join(" ").trim();
    const correctAns = Array.isArray(current.correct) 
      ? current.correct.join(" ").trim() 
      : (Array.isArray(current.tokens) ? current.tokens.join(" ").trim() : (current.target || "").trim());

    if (userAns === correctAns || (current.target && userAns === current.target.trim())) {
      window.audioEngine.playCorrect();
      this.score += 50;
      this.timeLeft += 5; // Bonus waktu +5 detik
      this.rushIndex++;

      const scoreEl = document.getElementById("rush-score-val");
      if (scoreEl) scoreEl.innerText = this.score;

      const timerEl = document.getElementById("rush-timer-val");
      if (timerEl) timerEl.innerText = this.timeLeft;

      this.showTimeDeltaBadge("+5 dtk", "badge-gain");

      const answerBox = document.getElementById("rush-answer-box");
      if (answerBox) {
        answerBox.classList.add("flash-green");
        setTimeout(() => this.renderRushBoard(), 400);
      } else {
        this.renderRushBoard();
      }
    } else {
      window.audioEngine.playWrong();
      // Pengurangan waktu 1 detik jika salah
      this.timeLeft = Math.max(0, this.timeLeft - 1);

      const timerEl = document.getElementById("rush-timer-val");
      if (timerEl) timerEl.innerText = this.timeLeft;

      this.showTimeDeltaBadge("-1 dtk", "badge-loss");

      const answerBox = document.getElementById("rush-answer-box");
      if (answerBox) {
        answerBox.classList.add("shake-red");
        setTimeout(() => answerBox.classList.remove("shake-red"), 500);
      }

      if (this.timeLeft <= 0) {
        this.clearTimer();
        setTimeout(() => this.endSentenceRush(), 300);
      }
    }
  }

  endSentenceRush() {
    window.audioEngine.playFanfare();
    const currentHigh = parseInt(localStorage.getItem("game_rush_high") || "0");
    if (this.score > currentHigh) {
      localStorage.setItem("game_rush_high", this.score);
    }

    const container = document.getElementById("games-container");
    if (!container) return;

    container.innerHTML = `
      <div class="completion-card glass-card text-center animate-pop">
        <h3 class="comp-title">Waktu Selesai!</h3>
        <p class="comp-subtitle">Permainan Susun Kata Cepat telah berakhir.</p>

        <div class="score-summary-box">
          <div class="score-number">${this.score}</div>
          <div class="score-label">Total Skor (${this.rushIndex} Kalimat Tersusun)</div>
        </div>

        <div class="comp-buttons">
          <button class="btn-primary" onclick="window.miniGames.showRushInfoModal()">Main Lagi</button>
          <button class="btn-secondary" onclick="window.miniGames.renderMenu()">Kembali ke Menu Permainan</button>
        </div>
      </div>
    `;
  }

  // ==========================================
  // GAME 2: PASANGAN KATA (MEMORY MATCH)
  // Jeda 6 detik kartu diperlihatkan sebelum mulai
  // ==========================================

  startMemoryGame() {
    this.clearTimer();
    this.activeGame = "memory";
    this.matchedPairs = 0;
    this.moves = 0;
    this.memoryFlippedCards = [];
    this.isPreviewing = true;
    this.previewTimeLeft = 6;

    const rawCards = window.APP_DATA.gamesData.memoryCards;
    this.shuffledCards = [...rawCards].sort(() => Math.random() - 0.5);

    const container = document.getElementById("games-container");
    if (!container) return;

    container.innerHTML = `
      <div class="game-active-wrapper glass-card">
        <div class="game-top-bar">
          <button class="btn-back-hub" onclick="window.miniGames.renderMenu()">← Kembali</button>
          <div class="moves-pill">Langkah: <span id="memory-moves-val">0</span></div>
          <div class="pairs-pill">Pasangan: <span id="memory-pairs-val">0 / 6</span></div>
        </div>

        <!-- Banner Countdown Jeda Hafalan 6 Detik -->
        <div class="memory-preview-banner" id="mem-preview-banner">
          <span class="preview-icon">👁️</span>
          <div class="preview-text-col">
            <span class="preview-title">Perhatikan & hafalkan posisi kartu!</span>
            <span class="preview-countdown">Permainan dimulai dalam <span class="preview-seconds-badge" id="preview-seconds">6</span> detik...</span>
          </div>
        </div>

        <div class="memory-grid" id="memory-grid-box">
          ${this.shuffledCards.map((card, idx) => `
            <div class="memory-card preview-flipped" id="mem-card-${idx}" data-idx="${idx}" onclick="window.miniGames.flipCard(${idx})">
              <div class="card-inner">
                <div class="card-front">?</div>
                <div class="card-back ${card.type === 'ar' ? 'font-arabic ar-card-text' : 'id-card-text'}">
                  ${card.text}
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    // Mulai hitung mundur 6 detik
    this.previewTimer = setInterval(() => {
      this.previewTimeLeft--;
      const secEl = document.getElementById("preview-seconds");
      if (secEl) secEl.innerText = this.previewTimeLeft;

      if (this.previewTimeLeft <= 0) {
        clearInterval(this.previewTimer);
        this.previewTimer = null;
        this.endPreviewAndStart();
      }
    }, 1000);
  }

  endPreviewAndStart() {
    this.isPreviewing = false;

    // Balik semua kartu kembali tertutup
    document.querySelectorAll(".memory-card").forEach(c => {
      c.classList.remove("preview-flipped");
    });

    // Perbarui banner menjadi notifikasi mulai
    const banner = document.getElementById("mem-preview-banner");
    if (banner) {
      banner.style.animation = "none";
      banner.style.background = "#ECFDF5";
      banner.style.borderColor = "#A7F3D0";
      banner.innerHTML = `
        <span class="preview-icon">✨</span>
        <div class="preview-text-col">
          <span class="preview-title" style="color: #047857;">Waktu menghafal selesai! Silakan cari pasangan kartu.</span>
        </div>
      `;
      setTimeout(() => {
        if (banner) banner.classList.add("hidden");
      }, 2500);
    }
  }

  flipCard(index) {
    // Abaikan klik jika masih dalam masa jeda 6 detik
    if (this.isPreviewing) return;
    if (this.memoryFlippedCards.length >= 2) return;

    const cardEl = document.getElementById(`mem-card-${index}`);
    if (!cardEl || cardEl.classList.contains("flipped") || cardEl.classList.contains("matched")) return;

    window.audioEngine.playTap();
    cardEl.classList.add("flipped");
    this.memoryFlippedCards.push({ index, data: this.shuffledCards[index] });

    if (this.memoryFlippedCards.length === 2) {
      this.moves++;
      const movesEl = document.getElementById("memory-moves-val");
      if (movesEl) movesEl.innerText = this.moves;

      const [c1, c2] = this.memoryFlippedCards;
      if (c1.data.pairId === c2.data.pairId) {
        window.audioEngine.playCorrect();
        this.matchedPairs++;
        const pairsEl = document.getElementById("memory-pairs-val");
        if (pairsEl) pairsEl.innerText = `${this.matchedPairs} / 6`;

        setTimeout(() => {
          document.getElementById(`mem-card-${c1.index}`).classList.add("matched");
          document.getElementById(`mem-card-${c2.index}`).classList.add("matched");
          this.memoryFlippedCards = [];

          if (this.matchedPairs === 6) {
            this.endMemoryGame();
          }
        }, 500);
      } else {
        window.audioEngine.playWrong();
        setTimeout(() => {
          document.getElementById(`mem-card-${c1.index}`).classList.remove("flipped");
          document.getElementById(`mem-card-${c2.index}`).classList.remove("flipped");
          this.memoryFlippedCards = [];
        }, 900);
      }
    }
  }

  endMemoryGame() {
    window.audioEngine.playFanfare();
    const currentBest = localStorage.getItem("game_memory_best");
    if (!currentBest || this.moves < parseInt(currentBest)) {
      localStorage.setItem("game_memory_best", this.moves);
    }

    const container = document.getElementById("games-container");
    if (!container) return;

    container.innerHTML = `
      <div class="completion-card glass-card text-center animate-pop">
        <h3 class="comp-title">Semua Pasangan Ditemukan!</h3>
        <p class="comp-subtitle">Alhamdulillah, seluruh kartu kata berhasil dicocokkan.</p>

        <div class="score-summary-box">
          <div class="score-number">${this.moves}</div>
          <div class="score-label">Jumlah Langkah Percobaan</div>
        </div>

        <div class="comp-buttons">
          <button class="btn-primary" onclick="window.miniGames.startMemoryGame()">Main Lagi</button>
          <button class="btn-secondary" onclick="window.miniGames.renderMenu()">Kembali ke Menu Permainan</button>
        </div>
      </div>
    `;
  }

  // ==========================================
  // GAME 3: KUIS KAIDAH LAISA
  // Tidak langsung lompat, memberikan feedback benar/salah & penjelasan
  // ==========================================

  startLaisaQuiz() {
    this.clearTimer();
    this.activeGame = "laisa";
    this.score = 0;
    this.laisaIndex = 0;
    this.renderLaisaQuestion();
  }

  renderLaisaQuestion() {
    const questions = window.APP_DATA.gamesData.laisaQuiz;
    if (!questions || this.laisaIndex >= questions.length) {
      this.endLaisaQuiz();
      return;
    }

    this.isLaisaAnswered = false;
    const q = questions[this.laisaIndex];
    const container = document.getElementById("games-container");
    if (!container) return;

    const dhomirTag = q.dhomir || q.subject || "";

    container.innerHTML = `
      <div class="game-active-wrapper glass-card">
        <div class="game-top-bar">
          <button class="btn-back-hub" onclick="window.miniGames.renderMenu()">← Kembali</button>
          <div class="score-pill">Skor: <span id="laisa-score-val">${this.score}</span></div>
          <div class="round-pill">Soal ${this.laisaIndex + 1} dari ${questions.length}</div>
        </div>

        <div class="quiz-case-box">
          ${dhomirTag ? `<div class="quiz-dhomir-tag">Subjek / Dhomir: <strong>${dhomirTag}</strong></div>` : ""}
          <div class="case-sentence font-arabic" dir="rtl">${q.sentence}</div>
        </div>

        <p class="quiz-instruction">Pilih bentuk kata penegasan negasi (لَيْسَ) yang tepat:</p>

        <div class="quiz-options-grid font-arabic" dir="rtl" id="laisa-options-container">
          ${q.options.map((opt) => `
            <button class="quiz-option-btn font-arabic" onclick="window.miniGames.answerLaisaQuiz('${opt}')">
              ${opt}
            </button>
          `).join("")}
        </div>

        <!-- Box Feedback Jawaban Benar / Salah & Penjelasan -->
        <div class="feedback-container hidden" id="laisa-feedback-container"></div>
      </div>
    `;
  }

  answerLaisaQuiz(selectedOption) {
    if (this.isLaisaAnswered) return;

    const questions = window.APP_DATA.gamesData.laisaQuiz;
    const q = questions[this.laisaIndex];
    const target = q.target || (q.options && q.correctIndex !== undefined ? q.options[q.correctIndex] : "");
    const isCorrect = (selectedOption.trim() === target.trim());
    const feedbackBox = document.getElementById("laisa-feedback-container");

    if (isCorrect) {
      // Jika benar, kunci semua tombol dan beri warna hijau
      this.isLaisaAnswered = true;
      document.querySelectorAll(".quiz-option-btn").forEach(btn => {
        btn.disabled = true;
        if (btn.innerText.trim() === selectedOption.trim()) {
          btn.classList.add("btn-correct");
        }
      });

      window.audioEngine.playCorrect();
      this.score += 25;
      const scoreVal = document.getElementById("laisa-score-val");
      if (scoreVal) scoreVal.innerText = this.score;

      if (feedbackBox) {
        feedbackBox.classList.remove("hidden");
        feedbackBox.className = "feedback-container feedback-success animate-pop";
        const explanation = q.explanation || q.hint || "Bentuk kata yang kamu pilih tepat sesuai kaidah nahwu.";
        feedbackBox.innerHTML = `
          <div class="feedback-badge">Benar! (+25 Poin)</div>
          <p class="feedback-msg">Jawabanmu tepat.</p>
          <div class="feedback-exp">💡 <strong>Penjelasan:</strong> ${explanation}</div>
          <button class="btn-primary btn-next-ex" onclick="window.miniGames.nextLaisaQuestion()">
            Lanjut ke Soal Berikutnya ➔
          </button>
        `;
        if (typeof feedbackBox.scrollIntoView === "function") {
          feedbackBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    } else {
      // Jika salah, HANYA nonaktifkan & tandai merah tombol yang dipilih, jangan beritahu jawaban yang benar
      document.querySelectorAll(".quiz-option-btn").forEach(btn => {
        if (btn.innerText.trim() === selectedOption.trim()) {
          btn.classList.add("btn-wrong");
          btn.disabled = true;
        }
      });

      window.audioEngine.playWrong();

      if (feedbackBox) {
        feedbackBox.classList.remove("hidden");
        feedbackBox.className = "feedback-container feedback-error animate-shake";
        const clue = q.clue || q.hint || "Perhatikan kata ganti (dhomir) subjek dalam kalimat.";
        feedbackBox.innerHTML = `
          <div class="feedback-badge">Kurang Tepat</div>
          <p class="feedback-msg">Pilihanmu belum tepat. Silakan coba opsi lain!</p>
          <div class="feedback-exp">💡 <strong>Petunjuk:</strong> ${clue}</div>
        `;
        if (typeof feedbackBox.scrollIntoView === "function") {
          feedbackBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    }
  }

  nextLaisaQuestion() {
    window.audioEngine.playTap();
    this.isLaisaAnswered = false;
    this.laisaIndex++;
    this.renderLaisaQuestion();
  }

  endLaisaQuiz() {
    window.audioEngine.playFanfare();
    const currentHigh = parseInt(localStorage.getItem("game_laisa_high") || "0");
    if (this.score > currentHigh) {
      localStorage.setItem("game_laisa_high", this.score);
    }

    const container = document.getElementById("games-container");
    if (!container) return;

    container.innerHTML = `
      <div class="completion-card glass-card text-center animate-pop">
        <h3 class="comp-title">Kuis Kaidah Laisa Selesai!</h3>
        <p class="comp-subtitle">Alhamdulillah, seluruh soal kaidah telah dijawab.</p>

        <div class="score-summary-box">
          <div class="score-number">${this.score}</div>
          <div class="score-label">Total Skor yang Diperoleh</div>
        </div>

        <div class="comp-buttons">
          <button class="btn-primary" onclick="window.miniGames.startLaisaQuiz()">Main Lagi</button>
          <button class="btn-secondary" onclick="window.miniGames.renderMenu()">Kembali ke Menu Permainan</button>
        </div>
      </div>
    `;
  }
}

window.miniGames = new MiniGamesHub();
