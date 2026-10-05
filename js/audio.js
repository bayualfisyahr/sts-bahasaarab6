/**
 * AUDIO ENGINE: Web Speech API (Arabic TTS) & Web Audio API (Synthesized SFX)
 * Zero external audio files required - works offline and lightweight for GitHub Pages.
 */

class AudioEngine {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.arabicVoice = null;
    this.speechRate = 0.85; // Default nyaman untuk murid SD
    this.isPlaying = false;
    this.currentUtterance = null;
    this.onSentenceStart = null;
    this.onSentenceEnd = null;
    this.onWordBoundary = null;
    
    // Audio Context untuk efek suara (SFX)
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = AudioCtx ? new AudioCtx() : null;

    this.initVoices();
    if (this.synth && this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = () => this.initVoices();
    }
  }

  // Temukan voice bahasa Arab terbaik di perangkat jika tersedia
  initVoices() {
    if (!this.synth) return;
    try {
      const voices = this.synth.getVoices() || [];
      if (!voices.length) return;
      this.arabicVoice = voices.find(v => {
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
  }

  // Putar teks bahasa Arab dengan Web Speech API bawaan perangkat
  speakArabic(text, onStart, onEnd, onBoundary) {
    if (!this.synth) {
      console.warn("Speech Synthesis tidak didukung pada browser ini.");
      if (onEnd) onEnd();
      return;
    }

    this.stopSpeech();

    const cleanText = (text || "").trim();
    if (!cleanText) {
      if (onEnd) onEnd();
      return;
    }

    // Pastikan voices ter-refresh jika belum terdeteksi
    if (!this.arabicVoice) {
      this.initVoices();
    }

    // Mengatasi bug Chrome di mana speechSynthesis terjebak dalam status paused
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
      utterance.onboundary = (e) => {
        onBoundary(e);
      };
    }

    // Simpan referensi ke variabel instance dan global window
    // untuk mencegah bug Garbage Collection di iOS Safari & Chrome
    this.currentUtterance = utterance;
    window._activeUtterance = utterance;

    try {
      this.synth.speak(utterance);
    } catch (err) {
      console.warn("Gagal memanggil synth.speak:", err);
      this.isPlaying = false;
      if (onEnd) onEnd();
    }
  }

  stopSpeech() {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
      this.isPlaying = false;
      this.currentUtterance = null;
      window._activeUtterance = null;
    }
  }

  // ==========================================
  // SYNTHESIZED SOUND EFFECTS (Web Audio API)
  // ==========================================

  resumeAudioCtx() {
    try {
      if (!this.audioCtx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.audioCtx = new AudioCtx();
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
