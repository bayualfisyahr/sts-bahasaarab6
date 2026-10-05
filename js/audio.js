/**
 * AUDIO ENGINE: Pre-packaged Offline Audio Player & Web Speech API Fallback
 * 
 * Fitur Utama:
 * 1. Prioritas Utama: Memutar file audio MP3 lokal berkualitas tinggi dari ./assets/audio/
 *    - 100% Otomatis bersuara di SEMUA jenis HP (Android Xiaomi, Oppo, Vivo, Samsung, iPhone, PC)
 *    - Tidak memerlukan pengaturan Text-to-Speech apapun di HP siswa
 *    - Bekerja secara OFFLINE tanpa kuota internet
 * 2. Fallback: Web Speech API native jika ada teks dinamis di luar manifest
 * 3. Web Audio API untuk efek suara kuis (benar, salah, tap, menang)
 */

class AudioEngine {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.arabicVoice = null;
    this.speechRate = 0.85; // Kecepatan nyaman untuk murid SD
    this.isPlaying = false;
    this.currentUtterance = null;
    
    // HTML5 Audio Player untuk memutar file MP3 lokal
    this.audioPlayer = new Audio();
    this.audioPlayer.preload = "auto";

    // Audio Context untuk efek suara (SFX)
    this.audioCtx = null;
    this.initAudioContext();

    this.initVoices();
    if (this.synth && this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = () => this.initVoices();
    }

    // Unlocking gesture untuk autoplay policy di HP (iOS & Android)
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
        this.audioPlayer.load();
      }
      if (this.synth && this.synth.paused) {
        this.synth.resume();
      }
      this.initVoices();
    };

    ["touchstart", "touchend", "click", "keydown"].forEach((evt) => {
      document.addEventListener(evt, unlock, { once: true, capture: true });
    });
  }

  initVoices() {
    if (!this.synth) return;
    try {
      const voices = this.synth.getVoices() || [];
      if (!voices.length) return;
      this.arabicVoice = voices.find((v) => {
        const lang = (v.lang || "").toLowerCase();
        const name = (v.name || "").toLowerCase();
        return lang.startsWith("ar-") || lang === "ar" || name.includes("arabic") || name.includes("العربية");
      }) || null;
    } catch (e) {
      console.warn("initVoices error:", e);
    }
  }

  setRate(rate) {
    this.speechRate = parseFloat(rate) || 0.85;
    if (this.audioPlayer) {
      this.audioPlayer.playbackRate = this.speechRate;
    }
  }

  cleanArabic(text) {
    if (!text) return "";
    return text.replace(/[،؟!.؛:\"']/g, "").trim();
  }

  /**
   * Cari file audio MP3 lokal di AUDIO_MANIFEST
   */
  getAudioFile(text) {
    if (!window.AUDIO_MANIFEST) return null;
    if (!text) return null;

    const raw = text.trim();
    if (window.AUDIO_MANIFEST[raw]) {
      return window.AUDIO_MANIFEST[raw];
    }

    const clean = this.cleanArabic(text);
    if (window.AUDIO_MANIFEST[clean]) {
      return window.AUDIO_MANIFEST[clean];
    }

    return null;
  }

  /**
   * Main Method: Putar audio bahasa Arab
   * Otomatis memutar MP3 lokal jika tersedia, atau Web Speech API jika tidak ada file.
   */
  speakArabic(text, onStart, onEnd, onBoundary) {
    this.stopSpeech();

    if (!text) {
      if (onEnd) onEnd();
      return;
    }

    // 1. Cek apakah ada file audio MP3 lokal di manifest
    const audioFilePath = this.getAudioFile(text);

    if (audioFilePath) {
      // Putar file MP3 lokal (100% otomatis bersuara di SEMUA HP)
      this.playLocalAudioFile(audioFilePath, onStart, onEnd, text, onBoundary);
    } else {
      // Fallback ke Web Speech API jika teks tidak ada dalam manifest
      this.speakViaWebSpeech(text, onStart, onEnd, onBoundary);
    }
  }

  // Putar file MP3 lokal
  playLocalAudioFile(filePath, onStart, onEnd, originalText, onBoundary) {
    try {
      this.isPlaying = true;
      this.audioPlayer.pause();
      this.audioPlayer.currentTime = 0;
      this.audioPlayer.src = filePath;
      this.audioPlayer.playbackRate = this.speechRate;

      this.audioPlayer.onplay = () => {
        this.isPlaying = true;
        if (onStart) onStart();
      };

      this.audioPlayer.onended = () => {
        this.isPlaying = false;
        if (onEnd) onEnd();
      };

      this.audioPlayer.onerror = (e) => {
        console.warn(`File ${filePath} gagal diputar, beralih ke TTS:`, e);
        this.isPlaying = false;
        this.speakViaWebSpeech(originalText, onStart, onEnd, onBoundary);
      };

      const playPromise = this.audioPlayer.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("audioPlayer.play() dicegah browser:", err);
          this.isPlaying = false;
          // Coba sekali lagi dengan Web Speech
          this.speakViaWebSpeech(originalText, onStart, onEnd, onBoundary);
        });
      }
    } catch (err) {
      console.warn("Exception saat memutar audio lokal:", err);
      this.speakViaWebSpeech(originalText, onStart, onEnd, onBoundary);
    }
  }

  // Fallback: Web Speech API
  speakViaWebSpeech(text, onStart, onEnd, onBoundary) {
    if (!this.synth) {
      if (onEnd) onEnd();
      return;
    }

    const cleanText = (text || "").trim();
    if (!cleanText) {
      if (onEnd) onEnd();
      return;
    }

    if (!this.arabicVoice) {
      this.initVoices();
    }

    try {
      if (this.synth.paused) {
        this.synth.resume();
      }
    } catch (e) {}

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = "ar-SA";
    utterance.rate = this.speechRate;
    utterance.pitch = 1.0;

    if (this.arabicVoice) {
      utterance.voice = this.arabicVoice;
    }

    utterance.onstart = () => {
      this.isPlaying = true;
      if (onStart) onStart();
    };

    utterance.onend = () => {
      this.isPlaying = false;
      this.currentUtterance = null;
      window._activeUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      console.warn("Speech Synthesis error:", e);
      this.isPlaying = false;
      this.currentUtterance = null;
      window._activeUtterance = null;
      if (onEnd) onEnd();
    };

    if (onBoundary) {
      utterance.onboundary = (e) => onBoundary(e);
    }

    this.currentUtterance = utterance;
    window._activeUtterance = utterance;

    try {
      this.synth.speak(utterance);
    } catch (err) {
      console.warn("Gagal synth.speak:", err);
      this.isPlaying = false;
      if (onEnd) onEnd();
    }
  }

  stopSpeech() {
    // Hentikan player audio MP3
    if (this.audioPlayer) {
      try {
        this.audioPlayer.pause();
        this.audioPlayer.currentTime = 0;
        this.audioPlayer.onplay = null;
        this.audioPlayer.onended = null;
        this.audioPlayer.onerror = null;
      } catch (e) {}
    }

    // Hentikan Web Speech API
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
      this.currentUtterance = null;
      window._activeUtterance = null;
    }

    this.isPlaying = false;
  }

  // ==========================================
  // SYNTHESIZED SOUND EFFECTS (Web Audio API)
  // ==========================================

  resumeAudioCtx() {
    try {
      if (!this.audioCtx) {
        this.initAudioContext();
      }
      if (this.audioCtx && this.audioCtx.state === "suspended") {
        this.audioCtx.resume().catch(() => {});
      }
    } catch (e) {}
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
