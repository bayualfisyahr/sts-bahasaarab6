# 📖 Al Maahyrah: Web Pembelajaran Bahasa Arab (Kelas 6 Zaid bin Tsabit)

> **Aplikasi Edukasi Interaktif Mobile-First Bahasa Arab Berbasis Web (Zero-Backend & GitHub Pages Ready)**  
> SDIT Al Maahyrah • Kelas 6 Zaid bin Tsabit

---

## 🌟 Fitur Utama Aplikasi

1. **Pemaparan Materi Per Bab**:
   - **Bab 1 (الدَّرْسُ الأَوَّلُ)**: *مَدْرَسَتِيْ (Sekolahku)* — Pengenalan lingkungan sekolah, fasilitas kelas, dan jumlah murid.
   - **Bab 2 (الدَّرْسُ الثَّانِيْ)**: *اَلْأَعْدَادُ ١١-٢٠ (Angka 11-20 Mudzakkar)* — Kaidah bilangan 11 sampai 20 dengan percakapan benda (jam, penggaris, HP).
   - **Bab 3 (الدَّرْسُ الثَّالِثُ)**: *أُسْرَتِيْ وَقَاعِدَةُ لَيْسَ (Keluargaku & Kaidah Laisa)* — Cerita keluarga, tabel tashrif lengkap kata penegasan negasi (لَيْسَ / لَسْتُ / لَسْنَا), dan aturan harakat manshub.

2. **Multisensori Audio (Bisa Dibaca & Didengar)**:
   - Floating audio bar dengan kendali kecepatan ucapan (`0.8x` untuk pemula, `1.0x` standar).
   - Menggunakan **Web Speech API** bahasa Arab (`ar-SA`) bawaan perangkat, ringan tanpa file audio berat.
   - Efek suara interaktif (*Web Audio API*) saat menjawab benar (*chime* ceria), salah (*buzzer* lembut), perayaan kemenangan (*fanfare*), dan ketukan kartu.

3. **Terjemah Perkata & Per Kalimat**:
   - **Terjemah Perkata**: Ketuk kata bahasa Arab apa saja untuk membuka pop-up kartu kata (Arab, latin, arti bahasa Indonesia, jenis kata, dan tombol dengar suara kata tersebut).
   - **Terjemah Per Kalimat**: Tombol accordion yang bisa dibuka-tutup untuk menguji kemandirian siswa.

4. **Latihan Interaktif Variatif**:
   - **Susun Kalimat Mufidah**: Ketuk kepingan kata acak untuk menyusun kalimat sempurna (dengan tombol reset & periksa).
   - **Pemilih Harakat & Tashrif Laisa**: Memilih bentuk kata ganti dan harakat akhir manshub (`خَادِمًا` vs `خَادِمٌ`).
   - **Adad & Ma'dud**: Memasangkan angka Arab 11-20 dengan kata bendanya.
   - **Pemahaman Cerita & Reverse Q&A**: Membuat pertanyaan dari jawaban yang sudah ada.
   - Skor bintang (⭐ 1-3 bintang) dan evaluasi yang tersimpan otomatis di perangkat.

5. **3 Mini Games Edukatif**:
   - ⚡ **Susun Kata Kilat**: Pacu waktu 45 detik untuk menyusun potongan kata Arab menjadi kalimat dengan kombo skor.
   - 🃏 **Pasangkan Kata (Memory Match)**: Menghafal posisi kartu selama 6 detik di awal, lalu membalik kartu mencari pasangan kata Arab dan artinya.
   - 🎯 **Kuis Kaidah Laisa**: Memilih kata negasi yang cocok untuk melengkapi kalimat dengan petunjuk kaidah nahwu.

6. **Kamus Kosakata (Mufrodat)**:
   - Pencarian cerdas (ketik Arab atau arti bahasa Indonesia).
   - Filter perkategori bab (Bab 1, 2, atau 3).

7. **Desain Mobile-First & PWA**:
   - Tata letak dioptimalkan untuk layar genggam smartphone.
   - Font Arab **Amiri** & **Noto Naskh Arabic** berharakat tajam dan tebal.
   - Progressive Web App (PWA): dapat diinstal langsung ke homescreen Android & iPhone (*Add to Home Screen*).

---

## 🚀 Cara Menjalankan Secara Lokal

Aplikasi ini dibuat murni menggunakan teknologi standar web (HTML5, CSS3, JavaScript ES6) tanpa perlu build tools yang rumit:

### Opsi 1: Menggunakan Python (Sangat Mudah)
Jalankan perintah berikut di terminal folder proyek:
```bash
python -m http.server 5173
```
Buka browser dan akses: `http://localhost:5173`

### Opsi 2: Menggunakan Node.js / npx serve
```bash
npx serve .
```

### Opsi 3: Buka Langsung File HTML
Klik dua kali file `index.html` pada File Explorer untuk membukanya langsung di browser (Chrome, Edge, Safari, Firefox).

---

## 🌐 Panduan Deploy ke GitHub Pages (Gratis & Cepat)

Karena aplikasi ini adalah **100% Client-Side Static App**, Anda dapat meng-host aplikasi ini secara gratis di GitHub Pages dengan langkah-langkah berikut:

### Langkah 1: Inisialisasi Git & Commit
Buka terminal di folder ini (`d:\Bayu\Project\B_Arab_AlMaahyrah\kelas6`), lalu jalankan:
```bash
git init
git add .
git commit -m "feat: inisialisasi aplikasi interaktif bahasa arab kelas 6"
```

### Langkah 2: Buat Repository di GitHub
1. Buka [GitHub.com](https://github.com) dan buat repository baru (misal: `bahasa-arab-kelas6`).
2. Jangan centang "Initialize this repository with a README" karena kita sudah memilikinya.

### Langkah 3: Hubungkan Remote & Push
Ganti `username` dengan username GitHub Anda:
```bash
git remote add origin https://github.com/username/bahasa-arab-kelas6.git
git branch -M main
git push -u origin main
```

### Langkah 4: Aktifkan GitHub Pages
1. Masuk ke halaman repository Anda di GitHub.
2. Klik tab **Settings** ➡️ **Pages** (di bilah kiri).
3. Pada bagian **Build and deployment**:
   - **Source**: Pilih `Deploy from a branch`.
   - **Branch**: Pilih `main` dan folder `/(root)`.
4. Klik **Save**.
5. Tunggu sekitar 1-2 menit, GitHub akan menampilkan URL aktif Anda, contoh:  
   `https://username.github.io/bahasa-arab-kelas6/`

Aplikasi web sekarang aktif dan dapat diakses oleh seluruh siswa dan guru dari smartphone masing-masing!

---

## 📁 Struktur Direktori

```
kelas6/
├── index.html              # Antarmuka utama aplikasi (Single Page App)
├── manifest.json           # Konfigurasi PWA (Add to Home Screen)
├── sw.js                   # Service Worker untuk akses offline
├── RANCANGAN_APLIKASI.md   # Dokumen arsitektur & rancangan lengkap
├── README.md               # Panduan teknis & cara deploy
│
├── css/
│   └── style.css           # Desain sistem Mobile-First, font Arab, glassmorphism
│
├── js/
│   ├── data.js             # Database materi Bab 1-3, perkata, latihan, dan games
│   ├── audio.js            # Engine Web Speech API Arab & synthesizer efek suara
│   ├── reader.js           # Engine naskah cerita, audio bar, modal perkata
│   ├── exercises.js        # Engine latihan interaktif (susun kalimat, harakat, Q&A)
│   ├── games.js            # Engine 3 mini games interaktif
│   └── app.js              # Router bottom navigation & kamus mufrodat
│
└── assets/
    └── icon.svg            # Ikon grafis aplikasi beresolusi tinggi
```

---

## 🛠️ Menambahkan Bab Baru (Mudah & Modular)

Untuk menambahkan Bab 4 atau materi berikutnya, Anda cukup membuka berkas `js/data.js` dan menambahkan objek baru ke dalam array `chapters`:
```javascript
{
  id: "bab-4",
  number: 4,
  badge: "Pelajaran 4",
  titleArabic: "الدَّرْسُ الرَّابِعُ",
  titleLatin: "Pelajaran Keempat",
  themeArabic: "فِي الْمَقْصَفِ",
  themeLatin: "Di Kantin Sekolah",
  story: { ... },
  exercises: [ ... ]
}
```
Aplikasi akan secara otomatis membuat pill bab baru, merender naskah cerita, menyediakan fitur audio, dan memuat latihan tanpa perlu mengubah kode antarmuka HTML/CSS!
