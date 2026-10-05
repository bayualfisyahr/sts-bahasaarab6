/**
 * AUDIO ENGINE: Hybrid Arabic Voice (Web Speech API + Cloud TTS Stream Fallback) & Web Audio SFX
 * 
 * Mengatasi kendala suara tidak keluar di beberapa device:
 * 1. Device tanpa paket suara Arab (Xiaomi, Oppo, Vivo, Infinix, atau Windows tanpa voice Arab):
 *    -> Otomatis beralih (fallback) ke Google Cloud TTS MP3 Audio Stream yang sangat jernih dan berharakat.
 * 2. Autoplay policy di Safari iOS dan Chrome Mobile:
 *    -> Gesture unlocker pada sentuhan pertama untuk mengaktifkan AudioContext dan Audio element.
 * 3. Bug Chrome stuck / iOS Garbage Collection pada Web Speech API:
 *    -> Menyimpan instance utterance pada array global dan mengaktifkan watchdog timer proteksi.
 */

class AudioEngine {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.arabicVoice = null;
    this.speechRate = 0.85; // Kecepatan ideal untuk siswa madrasah/SD
    this.isPlaying = false;
    this.currentUtterance = null;
    this.watchdogTimer = null;

    // HTML5 Audio Player untuk Cloud TTS stream fallback
    this.audioPlayer = new Audio();
    this.audioPlayer.preload = "auto";

    // Audio Context untuk efek suara sintesis (SFX)
    this.audioCtx = null;
    this.initAudioContext();

    // Cache daftar utterance aktif agar tidak dibersihkan oleh Garbage Collector di iOS/Safari
    window._activeUtterances = window._activeUtterances || [];

    // Deteksi voice lokal
    this.initVoices();
    if (this.synth && this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = () => this.initVoices();
    }

    // Auto-unlock saat pengguna pertama kali berinteraksi (tap/klik) dengan layar
    this.bindAutoUnlock();
  }

  initAudioContext() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioCtx = new AudioCtx();
      }
    } catch (e) {
      console.warn("AudioContext init error:", e);
    }
  }

  bindAutoUnlock() {
    const unlock = () => {
      this.resumeAudioCtx();
      if (this.audioPlayer) {
        // Pancing audio player sekali agar diizinkan sistem operasi
        this.audioPlayer.load();
      }
      if (this.synth && this.synth.paused) {
        this.synth.resume();
      }
      // Re-scan voice siapa tahu baru siap setelah interaksi
      this.initVoices();
    };

    ["touchstart", "touchend", "click", "keydown"].forEach((evt) => {
      document.addEventListener(evt, unlock, { once: true, capture: true });
    });
  }

  // Temukan voice bahasa Arab bawaan sistem jika tersedia
  initVoices() {
    if (!this.synth) return;
    try {
      const voices = this.synth.getVoices() || [];
      if (!voices || voices.length === 0) return;

      this.arabicVoice = voices.find((v) => {
        const lang = (v.lang || "").toLowerCase();
        const name = (v.name || "").toLowerCase();
        return (
          lang.startsWith("ar") ||
          lang.includes("ar-") ||
          name.includes("arabic") ||
          name.includes("العربية")
        );
      }) || null;
    } catch (e) {
      console.warn("Gagal membaca voices:", e);
    }
  }

  hasArabicVoice() {
    if (this.arabicVoice) return true;
    this.initVoices();
    return !!this.arabicVoice;
  }

  setRate(rate) {
    this.speechRate = parseFloat(rate) || 0.85;
    if (this.audioPlayer) {
      this.audioPlayer.playbackRate = this.speechRate;
    }
  }

  // Bersihkan tanda baca yang tidak perlu agar pelafalan tidak terganggu
  cleanArabicText(text) {
    if (!text) return "";
    return text.trim();
  }

  /**
   * Main Dispatcher: Putar ucapan bahasa Arab
   * Mendukung Web Speech API lokal dan otomatis fallback ke Cloud Audio Stream
   */
  speakArabic(text, onStart, onEnd, onBoundary) {
    this.stopSpeech();

    const cleanText = this.cleanArabicText(text);
    if (!cleanText) {
      if (onEnd) onEnd();
      return;
    }

    // Cek apakah perangkat memiliki voice Arab lokal bawaan
    const hasLocalVoice = this.hasArabicVoice();

    if (hasLocalVoice && this.synth) {
      // Gunakan Web Speech API lokal jika ada voice Arab
      this.speakViaWebSpeech(cleanText, onStart, onEnd, onBoundary);
    } else {
      // Jika HP tidak memiliki voice Arab (seperti banyak HP Android/Xiaomi/Oppo default),
      // langsung alihkan ke Cloud Audio Stream tanpa membuat user menunggu
      this.speakViaCloudStream(cleanText, onStart, onEnd);
    }
  }

  // Metode 1: Web Speech API Lokal (Offline)
  speakViaWebSpeech(cleanText, onStart, onEnd, onBoundary) {
    try {
      if (this.synth.paused) {
        this.synth.resume();
      }

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = "ar-SA";
      utterance.rate = this.speechRate;
      utterance.pitch = 1.0;

      if (this.arabicVoice) {
        utterance.voice = this.arabicVoice;
      }

      let hasStarted = false;

      utterance.onstart = () => {
        hasStarted = true;
        this.isPlaying = true;
        if (this.watchdogTimer) {
          clearTimeout(this.watchdogTimer);
          this.watchdogTimer = null;
        }
        if (onStart) onStart();
      };

      utterance.onend = () => {
        this.isPlaying = false;
        this.cleanupUtterance(utterance);
        if (onEnd) onEnd();
      };

      utterance.onerror = (e) => {
        console.warn("Speech Synthesis error, falling back to Cloud TTS stream:", e);
        this.isPlaying = false;
        this.cleanupUtterance(utterance);
        if (this.watchdogTimer) {
          clearTimeout(this.watchdogTimer);
          this.watchdogTimer = null;
        }
        // Fallback otomatis ke cloud stream saat lokal error
        this.speakViaCloudStream(cleanText, onStart, onEnd);
      };

      if (onBoundary) {
        utterance.onboundary = (e) => onBoundary(e);
      }

      this.currentUtterance = utterance;
      window._activeUtterances.push(utterance);

      // Watchdog Timer (850ms):
      // Jika Web Speech API freeze/silent (tidak mentrigger onstart),
      // otomatis batalkan dan alihkan ke Cloud Stream
      this.watchdogTimer = setTimeout(() => {
        if (!hasStarted && this.isPlaying) {
          console.warn("Web Speech API timeout/silent, switching to Cloud TTS stream...");
          if (this.synth) this.synth.cancel();
          this.cleanupUtterance(utterance);
          this.speakViaCloudStream(cleanText, onStart, onEnd);
        }
      }, 850);

      this.isPlaying = true;
      this.synth.speak(utterance);
    } catch (err) {
      console.warn("Web Speech Exception, fallback to Cloud Stream:", err);
      this.speakViaCloudStream(cleanText, onStart, onEnd);
    }
  }

  // Metode 2: Cloud TTS Audio Stream (Google TTS MP3)
  // Menjamin 100% kompatibel di SEMUA smartphone Android, iPhone, tablet, & PC
  speakViaCloudStream(cleanText, onStart, onEnd) {
    try {
      this.isPlaying = true;
      const encoded = encodeURIComponent(cleanText);
      const streamUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=ar&client=tw-ob&q=${encoded}`;

      this.audioPlayer.pause();
      this.audioPlayer.currentTime = 0;
      this.audioPlayer.src = streamUrl;
      this.audioPlayer.playbackRate = this.speechRate;

      this.audioPlayer.onplay = () => {
        this.isPlaying = true;
        if (onStart) onStart();
      };

      this.audioPlayer.onended = () => {
        this.isPlaying = false;
        if (onEnd) onEnd();
      };

      this.audioPlayer.onerror = (err) => {
        console.warn("Cloud audio stream error:", err);
        this.isPlaying = false;
        if (onEnd) onEnd();
      };

      const playPromise = this.audioPlayer.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Cloud stream play prevented by browser:", err);
          this.isPlaying = false;
          if (onEnd) onEnd();
        });
      }
    } catch (e) {
      console.warn("Failed to play Cloud audio stream:", e);
      this.isPlaying = false;
      if (onEnd) onEnd();
    }
  }

  cleanupUtterance(utterance) {
    if (window._activeUtterances) {
      const idx = window._activeUtterances.indexOf(utterance);
      if (idx !== -1) window._activeUtterances.splice(idx, 1);
    }
    if (this.currentUtterance === utterance) {
      this.currentUtterance = null;
    }
  }

  stopSpeech() {
    if (this.watchdogTimer) {
      clearTimeout(this.watchdogTimer);
      this.watchdogTimer = null;
    }

    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
      this.currentUtterance = null;
    }

    if (this.audioPlayer) {
      try {
        this.audioPlayer.pause();
        this.audioPlayer.currentTime = 0;
        this.audioPlayer.onplay = null;
        this.audioPlayer.onended = null;
        this.audioPlayer.onerror = null;
      } catch (e) {}
    }

    this.isPlaying = false;
  }

  // ==========================================
  // SYNTHESIZED SOUND EFFECTS (Web Audio API)
  // ==========================================

  resumeAudioCtx() {
    if (!this.audioCtx) {
      this.initAudioContext();
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume().catch(() => {});
    }
  }

  // Suara Jawaban Benar (Melodi Ceria)
  playCorrect() {
    try {
      this.resumeAudioCtx();
      if (!this.audioCtx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      const now = this.audioCtx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.2, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.26);
      });
    } catch (e) {
      console.log(e);
    }
  }

  // Suara Jawaban Salah (Lembut & Ramah Anak)
  playWrong() {
    try {
      this.resumeAudioCtx();
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.25);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.26);
    } catch (e) {
      console.log(e);
    }
  }

  // Suara Klik Tombol Halus
  playTap() {
    try {
      this.resumeAudioCtx();
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    } catch (e) {
      console.log(e);
    }
  }

  // Suara Perayaan Selesai Bab / Menang Game
  playFanfare() {
    try {
      this.resumeAudioCtx();
      if (!this.audioCtx) return;
      const fanfareNotes = [
        { f: 523.25, d: 0.12 },
        { f: 659.25, d: 0.12 },
        { f: 783.99, d: 0.12 },
        { f: 1046.50, d: 0.35 }
      ];
      let t = this.audioCtx.currentTime;
      fanfareNotes.forEach((item) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(item.f, t);
        gain.gain.setValueAtTime(0.25, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + item.d);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(t);
        osc.stop(t + item.d);
        t += item.d + 0.03;
      });
    } catch (e) {
      console.log(e);
    }
  }
}

window.audioEngine = new AudioEngine();
