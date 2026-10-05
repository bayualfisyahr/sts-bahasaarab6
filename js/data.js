/**
 * DATA KURIKULUM & MATERI MULTI-MATA PELAJARAN
 * SDIT Al Maahyrah - Kelas 6 Zaid bin Tsabit
 * 
 * Mencakup:
 * 1. Bahasa Arab (Materi Per Bab, Percakapan, Angka 11-20, Kaidah Laisa)
 * 2. Sirah Nabawiyah & Tarikh Islam (Imam Abu Hanifah + Evaluasi STS)
 * 3. Akidah Akhlak & Hadits (Hadits Istiqamah, Manisnya Iman, Shalat Tiang Agama + STS)
 * 4. Fiqih Ibadah (Segera Hadir)
 */

window.APP_DATA = {
  appTitle: "Al Maahyrah",
  appSubtitle: "Kelas 6 Zaid bin Tsabit",
  currentSubjectId: "b-arab", // 'b-arab' | 'sirah' | 'akhlak' | 'fiqih'

  // Master Mata Pelajaran
  subjects: [
    {
      id: "b-arab",
      name: "Bahasa Arab",
      icon: "📖",
      color: "#0D9488",
      accent: "#14B8A6",
      bgLight: "#F0FDFA",
      gradient: "linear-gradient(135deg, #0d9488 0%, #115e59 100%)",
      badge: "3 Bab Materi",
      desc: "Mufrodat, percakapan harian, bilangan 11-20, dan kaidah kalimat negasi laisa.",
      chapters: [
      {
        id: "bab-1",
      number: 1,
      badge: "Pelajaran 1",
      titleArabic: "الدَّرْسُ الأَوَّلُ",
      titleLatin: "Pelajaran Pertama",
      themeArabic: "مَدْرَسَتِيْ",
      themeLatin: "Sekolahku",
      color: "#0D9488",
      accent: "#14B8A6",
      bgLight: "#F0FDFA",
      description: "Mengenal lingkungan sekolah, fasilitas kelas, dan jumlah murid dalam bahasa Arab.",
      story: {
        titleArabic: "مَدْرَسَتِيْ",
        titleLatin: "Sekolahku",
        fullAudioText: "هَذِهِ مَدْرَسَتِي، مَدْرَسَتِي فِي الْقَرْيَةِ. مَدْرَسَتِي كَبِيرَةٌ وَوَاسِعَةٌ، فِيْهَا تَلَامِيْذُ كَثِيْرُوْنَ. فِي مَدْرَسَتِي سِتَّةُ فُصُوْلٍ، فِي كُلِّ فَصْلٍ سَبُّوْرَةٌ وَخِزَانَةٌ وَمَكَاتِبُ وَ كَرَاسِيُّ. فِي فَصْلِي عَشَرَةُ مَكَاتِبَ وَعِشْرُوْنَ كُرْسِيًّا، فِيْهِ عَشَرَةُ أَوْلَادٍ وَ عَشْرُ بَنَاتٍ، عَلَى كُلِّ كُرْسِيٍّ وَلَدٌ وَاحِدٌ أَوْ بِنْتٌ وَاحِدَةٌ.",
        sentences: [
          {
            id: "b1-s1",
            arabic: "هَذِهِ مَدْرَسَتِي، مَدْرَسَتِي فِي الْقَرْيَةِ",
            translation: "Ini sekolahku, sekolahku berada di desa.",
            audioText: "هَذِهِ مَدْرَسَتِي، مَدْرَسَتِي فِي الْقَرْيَةِ",
            words: [
              { ar: "هَذِهِ", tr: "hâdzihi", id: "ini (kata tunjuk muannats)", type: "Isim Isyarah" },
              { ar: "مَدْرَسَتِي", tr: "madrasatî", id: "sekolahku", type: "Isim + Ya Mutakallim" },
              { ar: "مَدْرَسَتِي", tr: "madrasatî", id: "sekolahku", type: "Isim + Ya Mutakallim" },
              { ar: "فِي", tr: "fî", id: "di / di dalam", type: "Harf Jar" },
              { ar: "الْقَرْيَةِ", tr: "al-qaryati", id: "desa", type: "Isim Majrur" }
            ]
          },
          {
            id: "b1-s2",
            arabic: "مَدْرَسَتِي كَبِيرَةٌ وَوَاسِعَةٌ، فِيْهَا تَلَامِيْذُ كَثِيْرُوْنَ",
            translation: "Sekolahku besar dan luas, di dalamnya terdapat banyak murid.",
            audioText: "مَدْرَسَتِي كَبِيرَةٌ وَوَاسِعَةٌ، فِيْهَا تَلَامِيْذُ كَثِيْرُوْنَ",
            words: [
              { ar: "مَدْرَسَتِي", tr: "madrasatî", id: "sekolahku", type: "Isim" },
              { ar: "كَبِيرَةٌ", tr: "kabîratun", id: "besar", type: "Kata Sifat (Na'at)" },
              { ar: "وَوَاسِعَةٌ", tr: "wa-wâsi'atun", id: "dan luas", type: "Wawu Athaf + Sifat" },
              { ar: "فِيْهَا", tr: "fîhâ", id: "di dalamnya (sekolah)", type: "Jar wa Majrur" },
              { ar: "تَلَامِيْذُ", tr: "talâmîdzu", id: "murid-murid", type: "Isim Jama' Taksir" },
              { ar: "كَثِيْرُوْنَ", tr: "katsîrûna", id: "banyak", type: "Kata Sifat Jama'" }
            ]
          },
          {
            id: "b1-s3",
            arabic: "فِي مَدْرَسَتِي سِتَّةُ فُصُوْلٍ، فِي كُلِّ فَصْلٍ سَبُّوْرَةٌ وَخِزَانَةٌ وَمَكَاتِبُ وَ كَرَاسِيُّ",
            translation: "Di sekolahku ada enam kelas, di setiap kelas ada papan tulis, lemari, meja-meja, dan kursi-kursi.",
            audioText: "فِي مَدْرَسَتِي سِتَّةُ فُصُوْلٍ، فِي كُلِّ فَصْلٍ سَبُّوْرَةٌ وَخِزَانَةٌ وَمَكَاتِبُ وَ كَرَاسِيُّ",
            words: [
              { ar: "فِي", tr: "fî", id: "di / pada", type: "Harf Jar" },
              { ar: "مَدْرَسَتِي", tr: "madrasatî", id: "sekolahku", type: "Isim" },
              { ar: "سِتَّةُ", tr: "sittatu", id: "enam", type: "Bilangan ('Adad)" },
              { ar: "فُصُوْلٍ", tr: "fushûlin", id: "kelas-kelas", type: "Benda yang dihitung (Ma'dud)" },
              { ar: "فِي", tr: "fî", id: "di", type: "Harf Jar" },
              { ar: "كُلِّ", tr: "kulli", id: "setiap / masing-masing", type: "Isim" },
              { ar: "فَصْلٍ", tr: "fashlin", id: "kelas", type: "Mudhaf Ilaih" },
              { ar: "سَبُّوْرَةٌ", tr: "sabbûratun", id: "papan tulis", type: "Isim" },
              { ar: "وَخِزَانَةٌ", tr: "wa-khizânatun", id: "dan lemari", type: "Isim" },
              { ar: "وَمَكَاتِبُ", tr: "wa-makâtibu", id: "dan meja-meja", type: "Jama' maktab" },
              { ar: "وَكَرَاسِيُّ", tr: "wa-karâsiyyu", id: "dan kursi-kursi", type: "Jama' kursiy" }
            ]
          },
          {
            id: "b1-s4",
            arabic: "فِي فَصْلِي عَشَرَةُ مَكَاتِبَ وَعِشْرُوْنَ كُرْسِيًّا، فِيْهِ عَشَرَةُ أَوْلَادٍ وَ عَشْرُ بَنَاتٍ، عَلَى كُلِّ كُرْسِيٍّ وَلَدٌ وَاحِدٌ أَوْ بِنْتٌ وَاحِدَةٌ",
            translation: "Di kelasku ada sepuluh meja dan dua puluh kursi, di dalamnya ada sepuluh anak laki-laki dan sepuluh anak perempuan, di setiap kursi ada satu anak laki-laki atau satu anak perempuan.",
            audioText: "فِي فَصْلِي عَشَرَةُ مَكَاتِبَ وَعِشْرُوْنَ كُرْسِيًّا، فِيْهِ عَشَرَةُ أَوْلَادٍ وَ عَشْرُ بَنَاتٍ، عَلَى كُلِّ كُرْسِيٍّ وَلَدٌ وَاحِدٌ أَوْ بِنْتٌ وَاحِدَةٌ",
            words: [
              { ar: "فِي فَصْلِي", tr: "fî fashlî", id: "di kelasku", type: "Jar wa Majrur" },
              { ar: "عَشَرَةُ", tr: "‘asyaratu", id: "sepuluh", type: "Bilangan ('Adad)" },
              { ar: "مَكَاتِبَ", tr: "makâtiba", id: "meja-meja", type: "Ma'dud Jama'" },
              { ar: "وَعِشْرُوْنَ", tr: "wa-'isyrûna", id: "dan dua puluh", type: "Bilangan puluhan" },
              { ar: "كُرْسِيًّا", tr: "kursiyyan", id: "kursi", type: "Tamyiz manshub" },
              { ar: "فِيْهِ", tr: "fîhi", id: "di dalam kelas itu", type: "Jar wa Majrur" },
              { ar: "عَشَرَةُ أَوْلَادٍ", tr: "‘asyaratu awlâdin", id: "sepuluh anak laki-laki", type: "Adad Ma'dud" },
              { ar: "وَعَشْرُ بَنَاتٍ", tr: "wa-'asyru banâtin", id: "dan sepuluh anak perempuan", type: "Adad Ma'dud" },
              { ar: "عَلَى", tr: "‘alâ", id: "di atas", type: "Harf Jar" },
              { ar: "كُلِّ كُرْسِيٍّ", tr: "kulli kursiyyin", id: "setiap kursi", type: "Mudhaf + Mudhaf Ilaih" },
              { ar: "وَلَدٌ وَاحِدٌ", tr: "waladun wâhidun", id: "satu anak laki-laki", type: "Mubtada/Na'at" },
              { ar: "أَوْ", tr: "aw", id: "atau", type: "Harf Athaf" },
              { ar: "بِنْتٌ وَاحِدَةٌ", tr: "bintun wâhidatun", id: "satu anak perempuan", type: "Ma'thuf" }
            ]
          }
        ]
      },
      exercises: [
        {
          id: "b1-ex-1",
          type: "qa",
          title: "Pertanyaan Pemahaman Cerita",
          questionArabic: "أَيْنَ مَدْرَسَتُكَ؟",
          questionLatin: "Di mana sekolahmu?",
          options: [
            "مَدْرَسَتِي فِي الْقَرْيَةِ",
            "مَدْرَسَتِي فِي الْمَدِيْنَةِ",
            "مَدْرَسَتِي فِي السُّوْقِ"
          ],
          correctIndex: 0,
          explanation: "Sesuai naskah: هَذِهِ مَدْرَسَتِي، مَدْرَسَتِي فِي الْقَرْيَةِ (Sekolahku di desa)."
        },
        {
          id: "b1-ex-2",
          type: "qa",
          title: "Jumlah Ruang Kelas",
          questionArabic: "كَمْ فَصْلًا فِي مَدْرَسَتِكَ؟",
          questionLatin: "Berapa kelas yang ada di sekolahmu?",
          options: [
            "فِي مَدْرَسَتِي خَمْسَةُ فُصُوْلٍ",
            "فِي مَدْرَسَتِي سِتَّةُ فُصُوْلٍ",
            "فِي مَدْرَسَتِي عَشَرَةُ فُصُوْلٍ"
          ],
          correctIndex: 1,
          explanation: "Dalam teks tertulis: فِي مَدْرَسَتِي سِتَّةُ فُصُوْلٍ (Di sekolahku ada 6 kelas)."
        },
        {
          id: "b1-ex-3",
          type: "reorder",
          title: "Susun Kata Menjadi Kalimat Sempurna",
          instruction: "Ketuk kata-kata berikut sesuai urutan yang tepat:",
          scrambled: ["الْقَرْيَةِ", "فِي", "مَدْرَسَتِي", "هَذِهِ"],
          correctOrder: ["هَذِهِ", "مَدْرَسَتِي", "فِي", "الْقَرْيَةِ"],
          translation: "Ini sekolahku di desa."
        },
        {
          id: "b1-ex-4",
          type: "reorder",
          title: "Susun Kalimat Jumlah Kursi",
          instruction: "Susun potongan kata berikut:",
          scrambled: ["كُرْسِيًّا", "فِي", "فَصْلِي", "عِشْرُوْنَ"],
          correctOrder: ["فِي", "فَصْلِي", "عِشْرُوْنَ", "كُرْسِيًّا"],
          translation: "Di kelasku ada dua puluh kursi."
        },
        {
          id: "b1-ex-5",
          type: "reverse_qa",
          title: "Buat Pertanyaan untuk Jawaban Ini",
          givenAnswer: "نَعَمْ، أَنَا تِلْمِيْذٌ فِي الْمَدْرَسَةِ",
          instruction: "Pilih pertanyaan yang tepat untuk jawaban di atas:",
          options: [
            "هَلْ أَنْتَ تِلْمِيْذٌ فِي الْمَدْرَسَةِ؟",
            "أَيْنَ أَنْتَ يَا تِلْمِيْذُ؟",
            "كَمْ تِلْمِيْذًا فِي الْمَدْرَسَةِ؟"
          ],
          correctIndex: 0,
          explanation: "Jawaban diawali 'Na'am' (Ya), maka pertanyaannya menggunakan kata tanya 'Hal' (Apakah kamu seorang murid di sekolah?)."
        },
        {
          id: "b1-ex-6",
          type: "reverse_qa",
          title: "Buat Pertanyaan untuk Jawaban Ini",
          givenAnswer: "لَهُ بَابَانِ اثْنَانِ",
          instruction: "Pilih pertanyaan yang tepat:",
          options: [
            "كَمْ بَابًا لَهُ؟",
            "أَيْنَ الْبَابُ؟",
            "مَا هَذَا الْبَابُ؟"
          ],
          correctIndex: 0,
          explanation: "Jawaban menyatakan jumlah pintu (Dua pintu), sehingga kata tanya yang sesuai adalah 'Kam' (Berapa pintu yang ia miliki?)."
        }
      ]
    },
    {
      id: "bab-2",
      number: 2,
      badge: "Pelajaran 2",
      titleArabic: "الدَّرْسُ الثَّانِيْ",
      titleLatin: "Pelajaran Kedua",
      themeArabic: "اَلْأَعْدَادُ ١١-٢٠ وَالْأَدَوَاتُ",
      themeLatin: "Bilangan 11-20 & Benda Sekitar",
      color: "#0284C7",
      accent: "#38BDF8",
      bgLight: "#F0F9FF",
      description: "Mempelajari kaidah bilangan 11 sampai 20 untuk kata benda mudzakkar serta penerapannya pada jam, penggaris, dan HP.",
      numberChart: [
        { num: 11, arNum: "١١", arText: "أَحَدَ عَشَرَ قَلَمًا", tr: "ahada 'asyara qalaman", meaning: "11 pena" },
        { num: 12, arNum: "١٢", arText: "اِثْنَا عَشَرَ قَلَمًا", tr: "itsnâ 'asyara qalaman", meaning: "12 pena" },
        { num: 13, arNum: "١٣", arText: "ثَلَاثَةَ عَشَرَ قَلَمًا", tr: "tsalâtsata 'asyara qalaman", meaning: "13 pena" },
        { num: 14, arNum: "١٤", arText: "أَرْبَعَةَ عَشَرَ قَلَمًا", tr: "arba'ata 'asyara qalaman", meaning: "14 pena" },
        { num: 15, arNum: "١٥", arText: "خَمْسَةَ عَشَرَ قَلَمًا", tr: "khamsata 'asyara qalaman", meaning: "15 pena" },
        { num: 16, arNum: "١٦", arText: "سِتَّةَ عَشَرَ قَلَمًا", tr: "sittata 'asyara qalaman", meaning: "16 pena" },
        { num: 17, arNum: "١٧", arText: "سَبْعَةَ عَشَرَ قَلَمًا", tr: "sab'ata 'asyara qalaman", meaning: "17 pena" },
        { num: 18, arNum: "١٨", arText: "ثَمَانِيَةَ عَشَرَ قَلَمًا", tr: "tsamâniyata 'asyara qalaman", meaning: "18 pena" },
        { num: 19, arNum: "١٩", arText: "تِسْعَةَ عَشَرَ قَلَمًا", tr: "tis'ata 'asyara qalaman", meaning: "19 pena" },
        { num: 20, arNum: "٢٠", arText: "عِشْرُوْنَ قَلَمًا", tr: "'isyrûna qalaman", meaning: "20 pena" }
      ],
      story: {
        titleArabic: "اَلْأَدَوَاتُ وَالْأَرْقَامُ",
        titleLatin: "Benda-Benda & Angka",
        fullAudioText: "مَا هَذِهِ؟ هَذِهِ سَاعَةٌ. مَاذَا لِلسَّاعَةِ؟ لِلسَّاعَةِ رَقْمٌ. كَمْ رَقْمًا لِلسَّاعَةِ؟ لَهَا اثْنَا عَشَرَ رَقْمًا. مَا هَذِهِ؟ هَذِهِ مِسْطَرَةٌ. هَلْ لِلْمِسْطَرَةِ رَقْمٌ كَذَلِكَ؟ نَعَمْ، لَهَا رَقْمٌ كَذَلِكَ. كَمْ رَقْمًا لِلْمِسْطَرَةِ؟ لَهَا أَرْقَامٌ كَثِيْرَةٌ. مَا هَذَا؟ هَذَا جَوَّالٌ. هَلْ لِلْجَوَّالِ رَقْمٌ؟ نَعَمْ لَهُ رَقْمٌ. كَمْ رَقْمًا لِلْجَوَّالِ؟ لَهُ عَشَرَةُ أَرْقَامٍ.",
        sentences: [
          {
            id: "b2-s1",
            arabic: "مَا هَذِهِ؟ هَذِهِ سَاعَةٌ. لِلسَّاعَةِ اثْنَا عَشَرَ رَقْمًا",
            translation: "Apa ini? Ini jam dinding. Jam dinding memiliki 12 angka.",
            audioText: "مَا هَذِهِ؟ هَذِهِ سَاعَةٌ. لِلسَّاعَةِ اثْنَا عَشَرَ رَقْمًا",
            words: [
              { ar: "مَا", tr: "mâ", id: "apa", type: "Kata Tanya" },
              { ar: "هَذِهِ", tr: "hâdzihi", id: "ini (muannats)", type: "Isim Isyarah" },
              { ar: "سَاعَةٌ", tr: "sâ'atun", id: "jam", type: "Isim" },
              { ar: "لِلسَّاعَةِ", tr: "lis-sâ'ati", id: "bagi jam / jam memiliki", type: "Jar wa Majrur" },
              { ar: "اثْنَا عَشَرَ", tr: "itsnâ 'asyara", id: "dua belas", type: "Adad 12" },
              { ar: "رَقْمًا", tr: "raqman", id: "angka", type: "Tamyiz (Ma'dud)" }
            ]
          },
          {
            id: "b2-s2",
            arabic: "مَا هَذِهِ؟ هَذِهِ مِسْطَرَةٌ. لَهَا أَرْقَامٌ كَثِيْرَةٌ",
            translation: "Apa ini? Ini penggaris. Penggaris memiliki banyak angka.",
            audioText: "مَا هَذِهِ؟ هَذِهِ مِسْطَرَةٌ. لَهَا أَرْقَامٌ كَثِيْرَةٌ",
            words: [
              { ar: "مِسْطَرَةٌ", tr: "mistharatun", id: "penggaris", type: "Isim Muannats" },
              { ar: "لَهَا", tr: "lahâ", id: "ia memiliki", type: "Jar wa Majrur" },
              { ar: "أَرْقَامٌ", tr: "arqâmun", id: "angka-angka", type: "Jama' dari raqm" },
              { ar: "كَثِيْرَةٌ", tr: "katsîratun", id: "banyak", type: "Kata Sifat" }
            ]
          },
          {
            id: "b2-s3",
            arabic: "مَا هَذَا؟ هَذَا جَوَّالٌ. لَهُ عَشَرَةُ أَرْقَامٍ",
            translation: "Apa ini? Ini handphone. Handphone memiliki 10 tombol angka.",
            audioText: "مَا هَذَا؟ هَذَا جَوَّالٌ. لَهُ عَشَرَةُ أَرْقَامٍ",
            words: [
              { ar: "هَذَا", tr: "hâdzâ", id: "ini (mudzakkar)", type: "Isim Isyarah" },
              { ar: "جَوَّالٌ", tr: "jawwâlun", id: "handphone", type: "Isim Mudzakkar" },
              { ar: "لَهُ", tr: "lahu", id: "ia memiliki", type: "Jar wa Majrur" },
              { ar: "عَشَرَةُ أَرْقَامٍ", tr: "‘asyaratu arqâmin", id: "sepuluh angka", type: "Adad Ma'dud" }
            ]
          }
        ]
      },
      exercises: [
        {
          id: "b2-ex-1",
          type: "number_match",
          title: "Pasangkan Bilangan dengan Ma'dud",
          question: "Lengkapi kalimat berikut dengan bilangan yang tepat:",
          targetText: "كُرْسِيًّا ..... (11)",
          options: ["أَحَدَ عَشَرَ", "إِحْدَى عَشْرَةَ", "عَشَرَةُ"],
          correctIndex: 0,
          explanation: "Karena 'kursiyyan' (كُرْسِيًّا) adalah isim mudzakkar, maka bilangan 11 yang digunakan adalah أَحَدَ عَشَرَ."
        },
        {
          id: "b2-ex-2",
          type: "number_match",
          title: "Adad untuk Mudzakkar 12",
          question: "Jam dinding memiliki 12 angka:",
          targetText: "لِلسَّاعَةِ ..... رَقْمًا (12)",
          options: ["اثْنَا عَشَرَ", "اثْنَتَا عَشْرَةَ", "ثَلَاثَةَ عَشَرَ"],
          correctIndex: 0,
          explanation: "Raqman (رَقْمًا) berbentuk mudzakkar, maka menggunakan اثْنَا عَشَرَ."
        },
        {
          id: "b2-ex-3",
          type: "reorder",
          title: "Susun Kalimat: Jam & Angka",
          instruction: "Susun kata-kata berikut menjadi kalimat sempurna:",
          scrambled: ["رَقْمًا", "اِثْنَا عَشَرَ", "لِتِلْكَ", "السَّاعَةِ"],
          correctOrder: ["لِتِلْكَ", "السَّاعَةِ", "اِثْنَا عَشَرَ", "رَقْمًا"],
          translation: "Jam itu memiliki dua belas angka."
        },
        {
          id: "b2-ex-4",
          type: "reorder",
          title: "Susun Kalimat: Piring di Rak",
          instruction: "Susun kata-kata dari latihan hal. 7 buku:",
          scrambled: ["الرَّفِّ", "صَحْنًا", "عَلَى", "ثَلَاثَةَ عَشَرَ"],
          correctOrder: ["عَلَى", "الرَّفِّ", "ثَلَاثَةَ عَشَرَ", "صَحْنًا"],
          translation: "Di atas rak terdapat tiga belas piring."
        },
        {
          id: "b2-ex-5",
          type: "reorder",
          title: "Susun Kalimat: Kebun di Belakang Rumah",
          instruction: "Susun kata-kata berikut:",
          scrambled: ["فِيْهِ", "أَشْجَارٍ", "وَرَاءَ الْبَيْتِ", "بُسْتَانٌ", "ثَلَاثَةُ"],
          correctOrder: ["وَرَاءَ الْبَيْتِ", "بُسْتَانٌ", "فِيْهِ", "ثَلَاثَةُ", "أَشْجَارٍ"],
          translation: "Di belakang rumah ada kebun, di dalamnya terdapat tiga pohon."
        }
      ]
    },
    {
      id: "bab-3",
      number: 3,
      badge: "Pelajaran 3",
      titleArabic: "الدَّرْسُ الثَّالِثُ",
      titleLatin: "Pelajaran Ketiga",
      themeArabic: "أُسْرَتِيْ وَقَاعِدَةُ لَيْسَ",
      themeLatin: "Keluargaku & Kaidah Laisa",
      color: "#E11D48",
      accent: "#FB7185",
      bgLight: "#FFF1F2",
      description: "Menceritakan anggota keluarga dan profesi, serta menguasai kaidah kata peniadaan / negasi (لَيْسَ) sesuai dhomir.",
      laisaTable: [
        { pronoun: "هُوَ (Dia lk)", form: "لَيْسَ", example: "مُحَمَّدٌ فِي الْفَصْلِ وَلَيْسَ فِي السُّوْقِ", meaning: "Muhammad di kelas dan bukan di pasar" },
        { pronoun: "هِيَ (Dia pr)", form: "لَيْسَتْ", example: "فَاطِمَةُ فِي الْمَدْرَسَةِ وَلَيْسَتْ فِي الْمَطْبَخِ", meaning: "Fatimah di sekolah dan bukan di dapur" },
        { pronoun: "أَنْتَ (Kamu lk)", form: "لَسْتَ", example: "أَنْتَ فِي الْمَصْنَعِ وَلَسْتَ فِي الْمَدْرَسَةِ", meaning: "Kamu di pabrik dan bukan di sekolah" },
        { pronoun: "أَنْتِ (Kamu pr)", form: "لَسْتِ", example: "أَنْتِ فِي الْمَطْبَخِ وَلَسْتِ فِي الْمَدْرَسَةِ", meaning: "Kamu di dapur dan bukan di sekolah" },
        { pronoun: "أَنَا (Saya)", form: "لَسْتُ", example: "أَنَا أَمَامَ الْفَصْلِ وَلَسْتُ فِي الْمَسْجِدِ", meaning: "Saya di depan kelas dan bukan di masjid" },
        { pronoun: "نَحْنُ (Kami/Kita)", form: "لَسْنَا", example: "نَحْنُ فِي الْمَدْرَسَةِ وَلَسْنَا فِي الْمَيْدَانِ", meaning: "Kita di sekolah dan bukan di lapangan" }
      ],
      specialRuleNotes: [
        "Kata لَيْسَ dan tashrif (perubahan)-nya digunakan untuk menegasikan kalimat (mengubah positif menjadi negatif).",
        "Kata benda / khabar setelah لَيْسَ dibaca manshub (berharakat fathah / fathatain), contoh: وَلَيْسَ خَادِمًا (bukan pelayan).",
        "Khusus untuk kepunyaan atau tempat, tetap menggunakan لَيْسَ, contoh: لَيْسَ لِيْ قَلَمٌ (Saya tidak punya pena), BUKAN لَسْتُ لِيْ قَلَمٌ."
      ],
      story: {
        titleArabic: "أُسْرَتِيْ",
        titleLatin: "Keluargaku",
        fullAudioText: "هَذِهِ صُوْرَةُ أُسْرَتِي، هَذَا أَبِي وَ بِجَانِبِهِ أُمِّي. أَنَا وَ أُخْتِي الصَّغِيْرَةُ أَمَامَ وَالِدَيْنَا. أَبِي مُدَرِّسٌ فِي الْمَدْرَسَةِ، وَلَيْسَ خَادِمًا. وَأُمِّي رَبَّةُ الْبَيْتِ وَلَيْسَتْ خَادِمَةً. أَنَا تِلْمِيْذٌ فِي الْمَدْرَسَةِ الْإِبْتِدَائِيَّةِ وَلَسْتُ تِلْمِيْذًا فِي الْمَدْرَسَةِ الثَّانَوِيَّةِ. وَأُخْتِي الصَّغِيْرَةُ لَيْسَتْ تِلْمِيْذَةً، هِيَ صَغِيْرَةٌ، عُمْرُهَا ثَلَاثُ سَنَوَاتٍ.",
        sentences: [
          {
            id: "b3-s1",
            arabic: "هَذِهِ صُوْرَةُ أُسْرَتِي، هَذَا أَبِي وَ بِجَانِبِهِ أُمِّي",
            translation: "Ini foto keluargaku, ini ayahku dan di sampingnya adalah ibuku.",
            audioText: "هَذِهِ صُوْرَةُ أُسْرَتِي، هَذَا أَبِي وَ بِجَانِبِهِ أُمِّي",
            words: [
              { ar: "هَذِهِ", tr: "hâdzihi", id: "ini (muannats)", type: "Isim Isyarah" },
              { ar: "صُوْرَةُ", tr: "shûratu", id: "foto / gambar", type: "Isim" },
              { ar: "أُسْرَتِي", tr: "usratî", id: "keluargaku", type: "Mudhaf Ilaih" },
              { ar: "هَذَا", tr: "hâdzâ", id: "ini (mudzakkar)", type: "Isim Isyarah" },
              { ar: "أَبِي", tr: "abî", id: "ayahku", type: "Isim" },
              { ar: "وَبِجَانِبِهِ", tr: "wa-bijânibihi", id: "dan di sampingnya", type: "Zharaf Makan" },
              { ar: "أُمِّي", tr: "ummî", id: "ibuku", type: "Isim" }
            ]
          },
          {
            id: "b3-s2",
            arabic: "أَنَا وَ أُخْتِي الصَّغِيْرَةُ أَمَامَ وَالِدَيْنَا",
            translation: "Saya dan adik perempuanku yang kecil berada di depan kedua orang tua kami.",
            audioText: "أَنَا وَ أُخْتِي الصَّغِيْرَةُ أَمَامَ وَالِدَيْنَا",
            words: [
              { ar: "أَنَا", tr: "anâ", id: "saya", type: "Dhomir Munfashil" },
              { ar: "وَأُخْتِي", tr: "wa-ukhtî", id: "dan saudara/adik perempuanku", type: "Isim" },
              { ar: "الصَّغِيْرَةُ", tr: "ash-shaghîratu", id: "yang kecil", type: "Na'at / Sifat" },
              { ar: "أَمَامَ", tr: "amâma", id: "di depan", type: "Zharaf Makan" },
              { ar: "وَالِدَيْنَا", tr: "wâlidaynâ", id: "kedua orang tua kami", type: "Mudhaf Ilaih" }
            ]
          },
          {
            id: "b3-s3",
            arabic: "أَبِي مُدَرِّسٌ فِي الْمَدْرَسَةِ، وَلَيْسَ خَادِمًا",
            translation: "Ayahku seorang guru di sekolah, dan bukan seorang pelayan.",
            audioText: "أَبِي مُدَرِّسٌ فِي الْمَدْرَسَةِ، وَلَيْسَ خَادِمًا",
            words: [
              { ar: "أَبِي", tr: "abî", id: "ayahku", type: "Mubtada" },
              { ar: "مُدَرِّسٌ", tr: "mudarrisun", id: "seorang guru (lk)", type: "Khabar" },
              { ar: "فِي الْمَدْرَسَةِ", tr: "fîl-madrasati", id: "di sekolah", type: "Jar wa Majrur" },
              { ar: "وَلَيْسَ", tr: "wa-laysa", id: "dan dia bukan", type: "Fi'il Madhi Naqis" },
              { ar: "خَادِمًا", tr: "khâdiman", id: "seorang pelayan (manshub)", type: "Khabar Laisa" }
            ]
          },
          {
            id: "b3-s4",
            arabic: "وَأُمِّي رَبَّةُ الْبَيْتِ وَلَيْسَتْ خَادِمَةً",
            translation: "Dan ibuku seorang ibu rumah tangga dan bukan seorang pembantu.",
            audioText: "وَأُمِّي رَبَّةُ الْبَيْتِ وَلَيْسَتْ خَادِمَةً",
            words: [
              { ar: "وَأُمِّي", tr: "wa-ummî", id: "dan ibuku", type: "Mubtada" },
              { ar: "رَبَّةُ الْبَيْتِ", tr: "rabbatu-albayti", id: "ibu rumah tangga", type: "Idhafah" },
              { ar: "وَلَيْسَتْ", tr: "wa-laysat", id: "dan dia (pr) bukan", type: "Laisa Muannats" },
              { ar: "خَادِمَةً", tr: "khâdimatan", id: "seorang pembantu (manshub)", type: "Khabar Laisa" }
            ]
          },
          {
            id: "b3-s5",
            arabic: "أَنَا تِلْمِيْذٌ فِي الْمَدْرَسَةِ الْإِبْتِدَائِيَّةِ وَلَسْتُ تِلْمِيْذًا فِي الْمَدْرَسَةِ الثَّانَوِيَّةِ",
            translation: "Saya seorang murid di MI / SD dan saya bukan seorang murid di SMP / MTs.",
            audioText: "أَنَا تِلْمِيْذٌ فِي الْمَدْرَسَةِ الْإِبْتِدَائِيَّةِ وَلَسْتُ تِلْمِيْذًا فِي الْمَدْرَسَةِ الثَّانَوِيَّةِ",
            words: [
              { ar: "أَنَا", tr: "anâ", id: "saya", type: "Dhomir" },
              { ar: "تِلْمِيْذٌ", tr: "tilmîdzun", id: "seorang murid", type: "Khabar" },
              { ar: "الْإِبْتِدَائِيَّةِ", tr: "al-ibtidâ'iyyah", id: "tingkat dasar (MI/SD)", type: "Sifat" },
              { ar: "وَلَسْتُ", tr: "wa-lastu", id: "dan saya bukan", type: "Laisa + Dhomir Ana" },
              { ar: "تِلْمِيْذًا", tr: "tilmîdzan", id: "murid (manshub fathatain)", type: "Khabar Laisa" },
              { ar: "الثَّانَوِيَّةِ", tr: "ats-tsânawiyyah", id: "tingkat menengah (SMP/MTs)", type: "Sifat" }
            ]
          },
          {
            id: "b3-s6",
            arabic: "وَأُخْتِي الصَّغِيْرَةُ لَيْسَتْ تِلْمِيْذَةً، هِيَ صَغِيْرَةٌ، عُمْرُهَا ثَلَاثُ سَنَوَاتٍ",
            translation: "Dan adik perempuanku bukan seorang murid, dia masih kecil, umurnya baru tiga tahun.",
            audioText: "وَأُخْتِي الصَّغِيْرَةُ لَيْسَتْ تِلْمِيْذَةً، هِيَ صَغِيْرَةٌ، عُمْرُهَا ثَلَاثُ سَنَوَاتٍ",
            words: [
              { ar: "وَأُخْتِي", tr: "wa-ukhtî", id: "dan adik/saudari perempuanku", type: "Mubtada" },
              { ar: "لَيْسَتْ", tr: "laysat", id: "dia (pr) bukan", type: "Laisa Muannats" },
              { ar: "تِلْمِيْذَةً", tr: "tilmîdzatan", id: "seorang murid pr (manshub)", type: "Khabar Laisa" },
              { ar: "عُمْرُهَا", tr: "‘umruhâ", id: "umurnya", type: "Mubtada" },
              { ar: "ثَلَاثُ سَنَوَاتٍ", tr: "tsalâtsu sanawâtin", id: "tiga tahun", type: "Adad Ma'dud" }
            ]
          }
        ]
      },
      exercises: [
        {
          id: "b3-ex-1",
          type: "laisa_selector",
          title: "Pilih Tashrif Laisa yang Tepat",
          sentenceArabic: "فَاطِمَةُ فِي الْمَدْرَسَةِ وَ ..... فِي الْمَطْبَخِ",
          meaning: "Fatimah berada di sekolah dan ... di dapur.",
          options: ["لَيْسَتْ", "لَيْسَ", "لَسْتِ"],
          correctIndex: 0,
          explanation: "Fatimah adalah orang ketiga perempuan tunggal (Dhomir Hiya), maka menggunakan 'Laysat' (لَيْسَتْ)."
        },
        {
          id: "b3-ex-2",
          type: "laisa_selector",
          title: "Tashrif untuk Dhomir Ana (Saya)",
          sentenceArabic: "أَنَا أَمَامَ الْفَصْلِ وَ ..... فِي الْمَسْجِدِ",
          meaning: "Saya berada di depan kelas dan ... di dalam masjid.",
          options: ["لَسْتُ", "لَيْسَ", "لَسْنَا"],
          correctIndex: 0,
          explanation: "Untuk dhomir 'Ana' (أَنَا / Saya), bentuk kata laisa adalah 'Lastu' (لَسْتُ)."
        },
        {
          id: "b3-ex-3",
          type: "laisa_selector",
          title: "Tashrif untuk Nahnu (Kami/Kita)",
          sentenceArabic: "نَحْنُ الْآنَ فِي الْمَدْرَسَةِ وَ ..... فِي الْمَيْدَانِ",
          meaning: "Kita sekarang di sekolah dan ... di lapangan.",
          options: ["لَسْنَا", "لَسْتُمْ", "لَيْسُوْا"],
          correctIndex: 0,
          explanation: "Untuk dhomir 'Nahnu' (نَحْنُ / Kami/Kita), kata penegasannya adalah 'Lasna' (لَسْنَا)."
        },
        {
          id: "b3-ex-4",
          type: "harakat_selector",
          title: "Pilih Harakat Akhir Khabar Laisa",
          sentenceArabic: "أَبِي مُدَرِّسٌ فِي الْمَدْرَسَةِ وَلَيْسَ .....",
          meaning: "Ayahku guru di sekolah dan bukan pelayan.",
          options: ["خَادِمًا", "خَادِمٌ", "خَادِمٍ"],
          correctIndex: 0,
          explanation: "Khabar laisa harus selalu dalam keadaan Manshub (berharakat fathatain ً): خَادِمًا."
        },
        {
          id: "b3-ex-5",
          type: "laisa_selector",
          title: "Kaidah Kepemilikan (Pena)",
          sentenceArabic: "..... لِيْ قَلَمٌ",
          meaning: "Saya tidak memiliki pena.",
          options: ["لَيْسَ", "لَسْتُ", "لَسْنَا"],
          correctIndex: 0,
          explanation: "Catatan khusus buku hal. 13: Pernyataan kepunyaan / tempat selalu menggunakan 'Laisa' (لَيْسَ لِيْ قَلَمٌ), bukan 'Lastu'."
        }
      ]
    }
  ],
  mufrodatDictionary: [
    { ar: "مَدْرَسَةٌ", tr: "madrasatun", id: "sekolah", chapter: 1 },
    { ar: "قَرْيَةٌ", tr: "qaryatun", id: "desa", chapter: 1 },
    { ar: "كَبِيْرَةٌ", tr: "kabîratun", id: "besar", chapter: 1 },
    { ar: "وَاسِعَةٌ", tr: "wâsi'atun", id: "luas", chapter: 1 },
    { ar: "فَصْلٌ (ج: فُصُوْلٌ)", tr: "fashlun (fushûlun)", id: "ruang kelas", chapter: 1 },
    { ar: "سَبُّوْرَةٌ", tr: "sabbûratun", id: "papan tulis", chapter: 1 },
    { ar: "خِزَانَةٌ", tr: "khizânatun", id: "lemari", chapter: 1 },
    { ar: "مَكْتَبٌ (ج: مَكَاتِبُ)", tr: "maktabun (makâtibu)", id: "meja", chapter: 1 },
    { ar: "كُرْسِيٌّ (ج: كَرَاسِيُّ)", tr: "kursiyyun (karâsiyyu)", id: "kursi", chapter: 1 },
    { ar: "وَلَدٌ (ج: أَوْلَادٌ)", tr: "waladun (awlâdun)", id: "anak laki-laki", chapter: 1 },
    { ar: "بِنْتٌ (ج: بَنَاتٌ)", tr: "bintun (banâtun)", id: "anak perempuan", chapter: 1 },
    { ar: "سَاعَةٌ", tr: "sâ'atun", id: "jam dinding / jam", chapter: 2 },
    { ar: "مِسْطَرَةٌ", tr: "mistharatun", id: "penggaris", chapter: 2 },
    { ar: "جَوَّالٌ", tr: "jawwâlun", id: "handphone / telepon genggam", chapter: 2 },
    { ar: "رَقْمٌ (ج: أَرْقَامٌ)", tr: "raqmun (arqâmun)", id: "angka / nomor", chapter: 2 },
    { ar: "أَحَدَ عَشَرَ", tr: "ahada 'asyara", id: "sebelas (11)", chapter: 2 },
    { ar: "اِثْنَا عَشَرَ", tr: "itsnâ 'asyara", id: "dua belas (12)", chapter: 2 },
    { ar: "عِشْرُوْنَ", tr: "'isyrûna", id: "dua puluh (20)", chapter: 2 },
    { ar: "أُسْرَةٌ", tr: "usratun", id: "keluarga", chapter: 3 },
    { ar: "أَبٌ", tr: "abun", id: "ayah", chapter: 3 },
    { ar: "أُمٌّ", tr: "ummun", id: "ibu", chapter: 3 },
    { ar: "أُخْتٌ صَغِيْرَةٌ", tr: "ukhtun shaghîratun", id: "adik perempuan kecil", chapter: 3 },
    { ar: "رَبَّةُ الْبَيْتِ", tr: "rabbatu al-bayti", id: "ibu rumah tangga", chapter: 3 },
    { ar: "مُدَرِّسٌ", tr: "mudarrisun", id: "guru (laki-laki)", chapter: 3 },
    { ar: "خَادِمٌ / خَادِمَةٌ", tr: "khâdimun / khâdimatun", id: "pelayan / pembantu", chapter: 3 },
    { ar: "لَيْسَ / لَيْسَتْ", tr: "laysa / laysat", id: "bukan / tidak (kata negasi)", chapter: 3 }
      ]
    },
    {
      id: "sirah",
      name: "Sirah Nabawiyah",
      icon: "🕌",
      color: "#B45309",
      accent: "#D97706",
      bgLight: "#FFFBEB",
      gradient: "linear-gradient(135deg, #d97706 0%, #92400e 100%)",
      badge: "Imam Abu Hanifah",
      desc: "Kisah perjalanan ilmu, budi pekerti, keteguhan memegang sunnah, menolak jabatan, & STS Sirah.",
      chapters: [
    {
      id: "sirah-1",
      number: 1,
      badge: "Bagian 1",
      titleArabic: "نَسَبُهُ وَطَلَبُ الْعِلْمِ",
      titleLatin: "Kelahiran & Perjalanan Menuntut Ilmu",
      themeArabic: "الإِمَامُ أَبُو حَنِيفَةَ",
      themeLatin: "Kisah Menuntut Ilmu Imam Abu Hanifah",
      color: "#B45309",
      accent: "#D97706",
      bgLight: "#FFFBEB",
      description: "Mengenal silsilah keturunan Persia, lahir di Kufah 80 H, berguru fikih 18 tahun, dan mimpi menggali hadits Rasulullah.",
      story: {
        titleArabic: "رِحْلَةُ الإِمَامِ أَبِي حَنِيفَةَ فِي طَلَبِ الْعِلْمِ",
        titleLatin: "Perjalanan Menuntut Ilmu Imam Abu Hanifah",
        fullAudioText: "Imam Abu Hanifah bernama asli An-Nu'man bin Tsabit bin Zutha al-Kufi. Lahir di Kota Kufah, Irak pada tahun 80 Hijriyah di masa Khalifah Abdul Malik bin Marwan. Kakeknya bernama Zutha dari Kota Kabul Afganistan. Ayahnya, Tsabit, pernah didoakan keberkahan oleh Khalifah Ali bin Abi Thalib. Imam Abu Hanifah belajar fikih selama 18 tahun kepada Hammad bin Sulaiman, lalu mendalami hadits pada usia 20 tahun.",
        sentences: [
          {
            id: "s1-s1",
            arabic: "الإِمَامُ أَبُو حَنِيفَةَ: النُّعْمَانُ بْنُ ثَابِتٍ بْنِ زُوطَى الكُوفِيُّ",
            translation: "Beliau adalah Imam Abu Hanifah, nama aslinya An-Nu'man bin Tsabit bin Zutha al-Kufi, dari keturunan bangsa Persia.",
            audioText: "Al-Imamu Abu Hanifah: An-Nu'man bin Tsabit bin Zutha al-Kufi",
            words: [
              { ar: "الإِمَامُ", tr: "al-Imâm", id: "panutan / pemimpin ilmu", type: "Julukan Kehormatan" },
              { ar: "أَبُو حَنِيفَةَ", tr: "Abû Hanîfah", id: "kunyah terkenal beliau", type: "Nama Panggilan" },
              { ar: "النُّعْمَانُ", tr: "An-Nu'mân", id: "nama asli beliau", type: "Nama Asli" },
              { ar: "بْنُ ثَابِتٍ", tr: "ibnu Tsâbit", id: "putra Tsabit", type: "Nasab Ayah" },
              { ar: "بْنِ زُوطَى", tr: "ibni Zûthâ", id: "cucu Zutha (asal Kabul)", type: "Nasab Kakek" }
            ]
          },
          {
            id: "s1-s2",
            arabic: "وُلِدَ فِي الكُوفَةِ سَنَةَ ٨٠ هـ فِي خِلاَفَةِ عَبْدِ المَلِكِ بْنِ مَرْوَانَ",
            translation: "Lahir di Kota Kufah, Irak pada tahun 80 H pada masa pemerintahan Khalifah Abdul Malik bin Marwan (Khilafah Bani Umayyah).",
            audioText: "Wulida fil-Kufati sanata tsamanina hijriyyah fi khilafati Abdul Malik bin Marwan",
            words: [
              { ar: "وُلِدَ", tr: "wulida", id: "dilahirkan", type: "Fi'il Madhi Majhul" },
              { ar: "فِي الكُوفَةِ", tr: "fîl-Kûfah", id: "di Kota Kufah, Irak", type: "Keterangan Tempat" },
              { ar: "سَنَةَ ٨٠ هـ", tr: "sanata 80 H", id: "tahun 80 Hijriyah", type: "Keterangan Waktu" },
              { ar: "خِلاَفَةِ", tr: "khilâfati", id: "kekhalifahan", type: "Pemerintahan" }
            ]
          },
          {
            id: "s1-s3",
            arabic: "تَعَلَّمَ الفِقْهَ ١٨ سَنَةً عَلَى شَيْخِهِ حَمَّادِ بْنِ سُلَيْمَانَ",
            translation: "Beliau bertekad menetap dan menuntut ilmu fikih selama 18 tahun penuh kepada guru besarnya, Hammad bin Sulaiman.",
            audioText: "Ta'allamal-fiqha tsamaniyata 'asyara sanatan 'ala syaikhihi Hammad bin Sulaiman",
            words: [
              { ar: "تَعَلَّمَ", tr: "ta'allama", id: "mempelajari / menuntut ilmu", type: "Fi'il Madhi" },
              { ar: "الفِقْهَ", tr: "al-fiqha", id: "ilmu fikih (tata cara ibadah lahiriah)", type: "Maf'ul Bih" },
              { ar: "١٨ سَنَةً", tr: "18 sanatan", id: "selama 18 tahun", type: "Lama Belajar" },
              { ar: "حَمَّادِ", tr: "Hammâd", id: "Hammad bin Sulaiman (guru fikih)", type: "Nama Guru" }
            ]
          },
          {
            id: "s1-s4",
            arabic: "رُؤْيَا حَفْرِ القَبْرِ: إِحْيَاءُ سُنَّةِ الرَّسُولِ ﷺ وَنَشْرُ أَحَادِيثِهِ",
            translation: "Mimpi beliau menggali kubur Nabi ditafsirkan ulama Muhammad bin Sirin: bahwa beliau akan menggali dan menghidupkan hadits-hadits Rasulullah shallallahu 'alaihi wasallam.",
            audioText: "Ru'ya hafril-qabr: ihya'u sunnatir-Rasul sallallahu 'alaihi wasallam wa nasyru ahaditsihi",
            words: [
              { ar: "رُؤْيَا", tr: "ru'yâ", id: "mimpi yang baik", type: "Isim" },
              { ar: "مُحَمَّدُ بْنُ سِيرِينَ", tr: "Muhammad bin Sîrîn", id: "ulama ahli tafsir mimpi", type: "Tokoh Ulama" },
              { ar: "إِحْيَاءُ", tr: "ihyâ'u", id: "menghidupkan / menggali", type: "Makna Tafsir" },
              { ar: "الأَحَادِيثِ", tr: "al-ahâdîtsi", id: "hadits-hadits Nabi", type: "Jama' Hadits" }
            ]
          }
        ]
      },
      kamusKecil: [
        { term: "Imam (الإِمَامُ)", meaning: "Julukan dari bahasa Arab bermakna 'panutan' yang biasa diberikan kepada ulama agung yang diteladani banyak orang." },
        { term: "Fikih (الفِقْهُ)", meaning: "Pemahaman agama, khususnya ilmu yang membahas amalan lahiriah seperti wudhu, shalat, adab makan, dan jual beli." },
        { term: "Perawi Hadits", meaning: "Orang yang menukilkan hadits dari gurunya dengan jalan sanad penukilan yang bersambung." }
      ],
      tanyaRenungan: [
        { q: "Sebutkan satu keutamaan ilmu bagi pemiliknya?", a: "Allah mengangkat derajat orang-orang yang beriman dan berilmu beberapa derajat (QS. Al-Mujadilah: 11)." },
        { q: "Mencari ilmu membutuhkan waktu yang lama. Mana yang menunjukkan hal itu?", a: "Imam Abu Hanifah tekun belajar dan menetap bersama gurunya, Hammad bin Sulaiman, selama 18 tahun!" }
      ],
      exercises: [
        {
          id: "s1-ex-1",
          type: "choice",
          title: "Nama Asli Imam Abu Hanifah",
          question: "Siapa nama asli Imam Abu Hanifah?",
          options: ["An-Nu'aim", "An-Nu'man", "An-Na'im", "Tsabit"],
          answerIndex: 1,
          clue: "💡 Clue: Nama asli beliau berawalan huruf Nun berharakat dhammah (النُّعْمَانُ)."
        },
        {
          id: "s1-ex-2",
          type: "choice",
          title: "Kota Kelahiran",
          question: "Di kota manakah Imam Abu Hanifah dilahirkan?",
          options: ["Bashrah", "Kufah", "Persia", "Madinah"],
          answerIndex: 1,
          clue: "💡 Clue: Kota di Irak yang diawali huruf K, pusat peradaban ilmu pada masa itu."
        },
        {
          id: "s1-ex-3",
          type: "choice",
          title: "Guru Besar Fikih",
          question: "Imam Abu Hanifah belajar fikih selama 18 tahun kepada guru besarnya bernama ...",
          options: ["Humaid bin Sulaiman", "Hamid bin Sulaiman", "Hammad bin Sulaiman", "Muhammad bin Sulaiman"],
          answerIndex: 2,
          clue: "💡 Clue: Perhatikan ejaan nama guru fikih beliau, menggunakan tasydid pada huruf mim (حَمَّاد)."
        },
        {
          id: "s1-ex-4",
          type: "choice",
          title: "Tafsir Mimpi Menggali Kubur",
          question: "Siapakah ulama ahli tafsir mimpi yang menafsirkan mimpi Imam Abu Hanifah bahwa beliau akan menggali hadits Rasulullah?",
          options: ["Hasan al-Bashri", "Muhammad bin Sirin", "Sufyan ats-Tsauri", "Malik bin Anas"],
          answerIndex: 1,
          clue: "💡 Clue: Ulama tabi'in kenamaan yang masyhur dengan keahlian ta'bir (tafsir) mimpi."
        }
      ]
    },
    {
      id: "sirah-2",
      number: 2,
      badge: "Bagian 2",
      titleArabic: "أَخْلاَقُهُ وَالتَّمَسُّكُ بِالسُّنَّةِ",
      titleLatin: "Akhlak Mulia, Ibadah & Memegang Sunnah",
      themeArabic: "أَخْلاَقُهُ وَعِبَادَتُهُ",
      themeLatin: "Keteladanan Budi Pekerti & Ibadah",
      color: "#D97706",
      accent: "#B45309",
      bgLight: "#FFFBEB",
      description: "Penampilan rapi dan wangi, hadiah baju 5 dinar, shalat tahajud sepanjang malam, dan larangan fanatik buta.",
      story: {
        titleArabic: "أَخْلاَقُ الإِمَامِ أَبِي حَنِيفَةَ وَعِبَادَتُهُ",
        titleLatin: "Akhlak dan Ibadah Imam Abu Hanifah",
        fullAudioText: "Imam Abu Hanifah berwajah tampan, berpakaian bagus, harum wewangian, dan berwibawa. Beliau menghadiahkan pakaian seharga 5 dinar emas kepada seseorang yang membutuhkan. Beliau gemar shalat tahajud dan tilawah Al-Quran sepanjang malam. Jika diingatkan bertakwalah kepada Allah, tubuhnya seketika bergemetar karena takut kepada Allah. Beliau menegur muridnya Ya'qub agar tidak fanatik mencatat semua pendapat tanpa merujuk hadits shahih.",
        sentences: [
          {
            id: "s2-s1",
            arabic: "حُسْنُ المَظْهَرِ وَالكَرَمُ: ثَوْبٌ قِيمَتُهُ خَمْسَةُ دَنَانِيرَ لِمُحْتَاجٍ",
            translation: "Beliau berpenampilan rapi dan dermawan: pernah memberikan pakaian bagus senilai 5 dinar emas kepada an-Nadhr bin Muhammad yang membutuhkan.",
            audioText: "Husnul-mazhhari wal-karamu: tsaubun qimatuhu khamsatu dananira limuhtaj",
            words: [
              { ar: "حُسْنُ المَظْهَرِ", tr: "husnul-mazh-har", id: "penampilan rapi & wangi", type: "Sifat Mulia" },
              { ar: "الكَرَمُ", tr: "al-karam", id: "kedermawanan", type: "Akhlak" },
              { ar: "خَمْسَةُ دَنَانِيرَ", tr: "khamsatu danânîra", id: "5 keping dinar emas (sangat mahal)", type: "Nilai Sedekah" }
            ]
          },
          {
            id: "s2-s2",
            arabic: "رَجُلٌ عَابِدٌ: قِيَامُ اللَّيْلِ وَتِلاَوَةُ القُرْآنِ حَتَّى مَاتَ",
            translation: "Beliau gemar beribadah: shalat tahajud dan membaca Al-Quran sepanjang malam hingga beliau menghembuskan napas terakhir.",
            audioText: "Rajulun 'abid: qiyamul-laili wa tilawatul-Qur'ani hatta mata",
            words: [
              { ar: "عَابِدٌ", tr: "'âbidun", id: "ahli ibadah", type: "Gelar Kesalehan" },
              { ar: "قِيَامُ اللَّيْلِ", tr: "qiyâmul-lail", id: "shalat malam / tahajud", type: "Ibadah Sunnah" },
              { ar: "ثَمَرَةُ العِلْمِ", tr: "tsamaratul-'ilmi", id: "buah dari ilmu adalah amal", type: "Kaidah Hikmah" }
            ]
          },
          {
            id: "s2-s3",
            arabic: "الخَوْفُ مِنَ اللهِ: ارْتِعَادُ جَسَدِهِ عِنْدَ قَوْلِ: اتَّقِ اللهَ!",
            translation: "Rasa takut kepada Allah: seketika tubuh beliau bergetar, kulit menjadi pucat, dan menunduk saat ada orang menegurnya: Bertakwalah kepada Allah!",
            audioText: "Al-khaufu minallah: irti'adu jasadihi 'inda qauli: ittaqillah!",
            words: [
              { ar: "ارْتِعَادُ", tr: "irti'âdu", id: "gemetar seketika", type: "Reaksi Fisik" },
              { ar: "اتَّقِ اللهَ", tr: "ittaqillâh", id: "Bertakwalah kepada Allah!", type: "Teguran Nasihat" },
              { ar: "جَزَاكَ اللهُ خَيْرًا", tr: "jazâkallâhu khairan", id: "semoga Allah membalas kebaikanmu", type: "Doa Syukur" }
            ]
          },
          {
            id: "s2-s4",
            arabic: "التَّمَسُّكُ بِالسُّنَّةِ: تَقْدِيمُ حَدِيثِ رَسُولِ اللهِ ﷺ عَلَى الرَّأْيِ",
            translation: "Keteguhan memegang sunnah: selalu mendahulukan hadits shahih Rasulullah shallallahu 'alaihi wasallam di atas segala timbangan akal pikiran.",
            audioText: "At-tamassuku bis-sunnah: taqdimu haditsi Rasulillahi sallallahu 'alaihi wasallam 'alar-ra'yi",
            words: [
              { ar: "التَّمَسُّكُ", tr: "at-tamassuku", id: "berpegang teguh", type: "Prinsip Utama" },
              { ar: "السُّنَّةُ", tr: "as-sunnah", id: "ajaran Rasulullah shallallahu 'alaihi wasallam", type: "Pedoman Pokok" },
              { ar: "يَعْقُوبُ (أَبُو يُوسُفَ)", tr: "Ya'qûb (Abû Yûsuf)", id: "murid utama yang ditegur sang Imam", type: "Murid Beliau" }
            ]
          }
        ]
      },
      kamusKecil: [
        { term: "Sunnah (السُّنَّةُ)", meaning: "Segala ajaran, perkataan, dan perbuatan yang diajarkan oleh Rasulullah shallallahu 'alaihi wasallam." },
        { term: "Ibrah / Pelajaran", meaning: "Hikmah berharga yang dapat dipetik dari kisah para ulama untuk diamalkan dalam kehidupan sehari-hari." }
      ],
      tanyaRenungan: [
        { q: "Apa tanda-tanda ilmu yang bermanfaat?", a: "Rasa takut kepada Allah (khosyyah), tubuh gemetar saat diingatkan bertakwa, dan gemar shalat tahajud serta beramal saleh." },
        { q: "Bagaimana sikap Imam Abu Hanifah ketika ditegur untuk bertakwa?", a: "Beliau tidak marah sama sekali, justru berterima kasih dan mendoakan 'Jazakallahu khairan' kepada penegurnya." }
      ],
      exercises: [
        {
          id: "s2-ex-1",
          type: "choice",
          title: "Tanda Ilmu Bermanfaat",
          question: "Berdasarkan keteladanan Imam Abu Hanifah, apa tanda ilmu yang bermanfaat?",
          options: ["Mendapatkan jabatan kerajaan", "Takut saat mendapat teguran agar bertakwa", "Mendapatkan banyak kekayaan", "Merasa lebih pintar dari orang lain"],
          answerIndex: 1,
          clue: "💡 Clue: Ilmu yang bermanfaat melahirkan rasa takut (khasyyah) kepada Allah Ta'ala."
        },
        {
          id: "s2-ex-2",
          type: "choice",
          title: "Kedermawanan Abu Hanifah",
          question: "Imam Abu Hanifah pernah menghadiahkan pakaian kepada an-Nadhr bin Muhammad yang nilainya mencapai ...",
          options: ["5 dirham", "5 dinar", "50 dinar", "500 dirham"],
          answerIndex: 1,
          clue: "💡 Clue: 5 keping uang emas (dinar)."
        },
        {
          id: "s2-ex-3",
          type: "choice",
          title: "Perumpamaan Al-Quran",
          question: "Dalam surah Al-Jumu'ah ayat 5, Allah mengumpamakan orang yang berilmu namun tidak mengamalkan ilmunya seperti ...",
          options: ["Burung yang terbang tanpa arah", "Keledai yang membawa kitab-kitab tebal", "Pohon tanpa buah", "Batu yang keras di padang pasir"],
          answerIndex: 1,
          clue: "💡 Clue: Hewan yang membawa beban buku di punggungnya tanpa mengerti kandungannya."
        },
        {
          id: "s2-ex-4",
          type: "choice",
          title: "Murid yang Ditegur",
          question: "Imam Abu Hanifah menegur muridnya agar tidak fanatik mencatat setiap pendapat yang mungkin esok diralat. Siapa nama murid tersebut?",
          options: ["Ahmad bin Hanbal", "Ya'qub (Abu Yusuf)", "Imam Syafi'i", "Zufar"],
          answerIndex: 1,
          clue: "💡 Clue: Murid kesayangan beliau yang memiliki nama panggilan Abu Yusuf."
        }
      ]
    },
    {
      id: "sirah-3",
      number: 3,
      badge: "Bagian 3",
      titleArabic: "مِحْنَةُ القَضَاءِ وَالوَفَاةُ",
      titleLatin: "Menolak Jabatan Hakim & Wafat di Penjara",
      themeArabic: "الثَّبَاتُ عَلَى الحَقِّ",
      themeLatin: "Keteguhan Prinsip Menolak Jabatan",
      color: "#92400E",
      accent: "#B45309",
      bgLight: "#FFFBEB",
      description: "Kisah penolakan sumpah Khalifah Al-Manshur, kaffarah sumpah, hukuman cambuk, dan wafat di penjara Baghdad tahun 150 H.",
      story: {
        titleArabic: "مِحْنَةُ الإِمَامِ أَبِي حَنِيفَةَ مَعَ الخَلِيفَةِ المَنْصُورِ",
        titleLatin: "Ujian Keteguhan Imam Abu Hanifah dengan Khalifah Al-Manshur",
        fullAudioText: "Khalifah Abu Ja'far Al-Manshur memaksa dan bersumpah agar Imam Abu Hanifah mau menjabat sebagai hakim kerajaan. Namun beliau menolak dengan tegas karena zuhud dan khawatir tidak adil. Beliau berkata: Jika aku jujur tidak pantas, maka aku memang tidak pantas. Jika aku bohong, seorang pembohong juga tidak pantas jadi hakim. Karena penolakan itu, beliau dihukum cambuk dan dipenjara hingga wafat di Baghdad pada tahun 150 H.",
        sentences: [
          {
            id: "s3-s1",
            arabic: "رَفْضُ القَضَاءِ: الخَلِيفَةُ المَنْصُورُ يُلْزِمُ أَبَا حَنِيفَةَ بِالقَضَاءِ فَيَرْفُضُ",
            translation: "Penolakan jabatan hakim: Khalifah Al-Manshur memaksa dan bersumpah meminta beliau menjadi hakim kerajaan, namun sang Imam menolak dengan tegas.",
            audioText: "Rafdhul-qadha': Al-Khalifatul-Manshur yulzimu Aba Hanifah bil-qadha'i fa yarfudh",
            words: [
              { ar: "رَفْضُ", tr: "rafdhu", id: "penolakan tegas", type: "Sikap Zuhud" },
              { ar: "القَضَاءِ", tr: "al-qadhâ'", id: "jabatan hakim kerajaan", type: "Amanah Berat" },
              { ar: "المَنْصُورُ", tr: "Al-Manshûr", id: "Khalifah Dinasti Abbasiyah", type: "Penguasa" }
            ]
          },
          {
            id: "s3-s2",
            arabic: "حُجَّةُ الإِمَامِ: إِنْ كُنْتُ صَادِقًا فَلَسْتُ أَهْلاً، وَإِنْ كُنْتُ كَاذِبًا فَلاَ يَصْلُحُ الكَاذِبُ قَاضِيًا",
            translation: "Logika penolakan sang Imam: Jika aku jujur aku tidak pantas, maka aku memang tidak pantas. Jika aku berbohong, maka seorang pembohong tidak layak menjadi hakim.",
            audioText: "Hujjatul-Imam: in kuntu shadiqan fa lastu ahla, wa in kuntu kadziban fala yashluhul-kadzibu qadhiya",
            words: [
              { ar: "حُجَّةٌ", tr: "hujjah", id: "alasan / argumentasi logis", type: "Logika Tajam" },
              { ar: "صَادِقًا", tr: "shâdiqan", id: "jujur", type: "Sifat Mulia" },
              { ar: "كَافِي القَضَاءِ", tr: "kâfîl-qadhâ'", id: "kelayakan hakim", type: "Syarat Hakim" }
            ]
          },
          {
            id: "s3-s3",
            arabic: "السِّجْنُ وَالجَلْدُ: ثَبَاتُ الإِمَامِ رَغْمَ التَّعْذِيبِ فِي سَبِيلِ الحَقِّ",
            translation: "Penjara dan cambukan: Sang Imam menerima siksaan berupa dera cambuk dan kurungan penjara dengan penuh kesabaran.",
            audioText: "As-sijnu wal-jaldu: tsabatul-Imami raghmat-ta'dzibi fi sabilil-haqq",
            words: [
              { ar: "السِّجْنُ", tr: "as-sijnu", id: "penjara", type: "Ujian Kesabaran" },
              { ar: "الجَلْدُ", tr: "al-jaldu", id: "hukuman cambukan", type: "Ujian Fisik" },
              { ar: "الثَّبَاتُ", tr: "ats-tsabâtu", id: "keteguhan di atas kebenaran", type: "Karakter Ulama" }
            ]
          },
          {
            id: "s3-s4",
            arabic: "الوَفَاةُ: سَنَةَ ١٥٠ هـ فِي بَغْدَادَ عَنْ عُمُرٍ يُنَاهِزُ ٧٠ عَامًا",
            translation: "Wafat: Pada tahun 150 H di dalam penjara Kota Baghdad, Irak, dalam usia sekitar 70 tahun.",
            audioText: "Al-wafatu: sanata mi'ah wa khamsina hijriyyah fi Baghdada 'an 'umurin yunahizu sab'ina 'ama",
            words: [
              { ar: "الوَفَاةُ", tr: "al-wafâtu", id: "wafat menghadap Allah", type: "Akhir Hayat" },
              { ar: "سَنَةَ ١٥٠ هـ", tr: "sanata 150 H", id: "tahun 150 Hijriyah", type: "Tahun Wafat" },
              { ar: "بَغْدَادَ", tr: "Baghdâd", id: "Kota Baghdad, Irak", type: "Tempat Wafat" }
            ]
          }
        ]
      },
      kamusKecil: [
        { term: "Kaffarah Sumpah", meaning: "Tebusan wajib bagi orang yang melanggar sumpah (membebaskan budak, memberi makan 10 orang miskin, atau puasa 3 hari)." },
        { term: "Zuhud", meaning: "Hati yang tidak tamak pada gemerlap dunia dan jabatan, demi menjaga kemurnian agama." }
      ],
      tanyaRenungan: [
        { q: "Mengapa Abu Hanifah tidak mau menerima jabatan hakim kerajaan?", a: "Karena beliau sangat berhati-hati dalam hukum agama, takut berbuat zalim, dan memegang prinsip zuhud." },
        { q: "Berapa usia Imam Abu Hanifah saat wafat pada tahun 150 H?", a: "Sekitar 70 tahun (lahir 80 H - wafat 150 H = 70 tahun)." }
      ],
      exercises: [
        {
          id: "s3-ex-1",
          type: "choice",
          title: "Khalifah yang Memaksa",
          question: "Imam Abu Hanifah dipaksa menjadi hakim kerajaan oleh Khalifah ...",
          options: ["Al-Manshur", "Al-Masyhur", "Al-Mutawakkil", "Umar bin Abdul Aziz"],
          answerIndex: 0,
          clue: "💡 Clue: Khalifah kedua Dinasti Abbasiyah yang bergelar Abu Ja'far Al-Manshur."
        },
        {
          id: "s3-ex-2",
          type: "choice",
          title: "Tahun Wafat Sang Imam",
          question: "Pada tahun berapakah Imam Abu Hanifah menghembuskan napas terakhirnya?",
          options: ["130 H", "140 H", "150 H", "160 H"],
          answerIndex: 2,
          clue: "💡 Clue: Lahir tahun 80 H dan wafat pada usia 70 tahun (80 + 70 = ...)."
        },
        {
          id: "s3-ex-3",
          type: "choice",
          title: "Tempat Wafat",
          question: "Di kota manakah Imam Abu Hanifah meninggal dunia di dalam penjara?",
          options: ["Kufah", "Bashrah", "Baghdad", "Damaskus"],
          answerIndex: 2,
          clue: "💡 Clue: Ibukota kekhalifahan di Irak yang terkenal dengan julukan Kota Seribu Satu Malam."
        },
        {
          id: "s3-ex-4",
          type: "choice",
          title: "Tebusan Pelanggaran Sumpah",
          question: "Tebusan wajib yang harus dibayar seseorang jika ia bersumpah atas nama Allah lalu melanggarnya disebut ...",
          options: ["Fidyah", "Kaffarah sumpah", "Diyat", "Zakat fitrah"],
          answerIndex: 1,
          clue: "💡 Clue: Istilah tebusan wajib sumpah yang tercantum dalam surat Al-Ma'idah."
        }
      ]
    },
    {
      id: "sirah-4",
      number: 4,
      badge: "Evaluasi STS",
      titleArabic: "اخْتِبَارُ نِصْفِ الفَصْلِ لِلسِّيرَةِ",
      titleLatin: "Latihan Resmi STS Sirah Nabawiyah",
      themeArabic: "المُرَاجَعَةُ الشَّامِلَةُ",
      themeLatin: "Evaluasi Komprehensif Imam Abu Hanifah",
      color: "#78350F",
      accent: "#B45309",
      bgLight: "#FFFBEB",
      description: "Kumpulan 10 soal pilihan ganda resmi dari buku teks halaman 15-16 dan pemantapan materi STS.",
      story: {
        titleArabic: "خُلاَصَةُ سِيرَةِ الإِمَامِ أَبِي حَنِيفَةَ",
        titleLatin: "Rangkuman Keteguhan Imam Abu Hanifah",
        fullAudioText: "Mari uji pemahamanmu terhadap seluruh materi Sirah Nabawiyah tentang perjalanan ilmu dan keteguhan Imam Abu Hanifah! Kerjakan 10 soal evaluasi resmi di tab Latihan Soal.",
        sentences: [
          {
            id: "s4-s1",
            arabic: "الإِمَامُ أَبُو حَنِيفَةَ: قُدْوَةٌ فِي طَلَبِ العِلْمِ وَالثَّبَاتِ عَلَى الحَقِّ",
            translation: "Imam Abu Hanifah adalah teladan agung dalam kegigihan menuntut ilmu dan keteguhan memegang kebenaran.",
            audioText: "Al-Imamu Abu Hanifah: qudwatun fi thalabil-'ilmi wats-tsabati 'alal-haqq",
            words: [
              { ar: "قُدْوَةٌ", tr: "qudwah", id: "panutan / teladan", type: "Predikat Mulia" },
              { ar: "طَلَبُ العِلْمِ", tr: "thalabul-'ilmi", id: "menuntut ilmu", type: "Kewajiban Muslim" },
              { ar: "الثَّبَاتُ عَلَى الحَقِّ", tr: "ats-tsabâtu 'alal-haqq", id: "teguh di atas kebenaran", type: "Prinsip Hidup" }
            ]
          }
        ]
      },
      exercises: [
        {
          id: "s4-ex-1",
          type: "choice",
          title: "Soal 1 (Buku Hal 15)",
          question: "Siapa nama Imam Abu Hanifah?",
          options: ["An-Nu'aim", "An-Nu'man", "An-Na'im", "Tsabit"],
          answerIndex: 1,
          clue: "💡 Clue: Nama asli beliau adalah An-Nu'man bin Tsabit."
        },
        {
          id: "s4-ex-2",
          type: "choice",
          title: "Soal 2 (Buku Hal 15)",
          question: "Imam Abu Hanifah lahir di kota ...",
          options: ["Bashrah", "Kufah", "Persia", "Romawi"],
          answerIndex: 1,
          clue: "💡 Clue: Kota di Irak yang menjadi salah satu pusat ilmu fikih."
        },
        {
          id: "s4-ex-3",
          type: "choice",
          title: "Soal 3 (Buku Hal 15)",
          question: "Imam Abu Hanifah belajar fikih kepada ...",
          options: ["Humaid bin Sulaiman", "Hamid bin Sulaiman", "Hammad bin Sulaiman", "Muhammad bin Sulaiman"],
          answerIndex: 2,
          clue: "💡 Clue: Belajar selama 18 tahun kepada Hammad bin Sulaiman."
        },
        {
          id: "s4-ex-4",
          type: "choice",
          title: "Soal 4 (Buku Hal 15)",
          question: "Perawi hadits adalah orang yang ...",
          options: ["Membaca riwayat hadits", "Menghafal riwayat hadits", "Mendengar riwayat hadits", "Menukil riwayat hadits"],
          answerIndex: 3,
          clue: "💡 Clue: Sesuai definisi Kamus Kecil, perawi adalah orang yang menukilkan hadits dari gurunya secara bersambung."
        },
        {
          id: "s4-ex-5",
          type: "choice",
          title: "Soal 5 (Buku Hal 15)",
          question: "Tanda ilmu yang bermanfaat adalah ...",
          options: ["Mendapatkan jabatan kerajaan", "Takut saat mendapat teguran agar bertakwa", "Mendapatkan harta untuk kebutuhan hidup", "Berbuat maksiat dan tidak takut dosa"],
          answerIndex: 1,
          clue: "💡 Clue: Takut kepada teguran takwa kepada Allah sebagaimana reaksi tubuh sang Imam."
        },
        {
          id: "s4-ex-6",
          type: "choice",
          title: "Soal 6 (Buku Hal 16)",
          question: "Imam Abu Hanifah sangat kuat dalam memegang ...",
          options: ["Pendapatnya", "Ajaran al-Quran dan Sunnah", "Pendapat gurunya", "Ilmu fikihnya"],
          answerIndex: 1,
          clue: "💡 Clue: Beliau selalu mendahulukan ajaran Al-Quran dan Sunnah Nabi."
        },
        {
          id: "s4-ex-7",
          type: "choice",
          title: "Soal 7 (Buku Hal 16)",
          question: "Imam Abu Hanifah meninggal pada tahun ...",
          options: ["130 H", "140 H", "150 H", "160 H"],
          answerIndex: 2,
          clue: "💡 Clue: Wafat pada tahun 150 Hijriyah di Baghdad."
        },
        {
          id: "s4-ex-8",
          type: "choice",
          title: "Soal 8 (Buku Hal 16)",
          question: "Imam Abu Hanifah dipaksa menjadi hakim kerajaan oleh khalifah ...",
          options: ["Al-Manshur", "Al-Masyhur", "Al-Mutawakkil", "Umar bin Abdul Aziz"],
          answerIndex: 0,
          clue: "💡 Clue: Khalifah Abu Ja'far Al-Manshur."
        },
        {
          id: "s4-ex-9",
          type: "choice",
          title: "Soal 9 (Buku Hal 16)",
          question: "Imam Abu Hanifah mulai mencari hadits saat berusia ...",
          options: ["20 tahun", "30 tahun", "40 tahun", "50 tahun"],
          answerIndex: 0,
          clue: "💡 Clue: Pada tahun 100 H, saat beliau berusia 20 tahun."
        },
        {
          id: "s4-ex-10",
          type: "choice",
          title: "Soal 10 (Buku Hal 16)",
          question: "Abu Hanifah lahir pada masa khilafah ...",
          options: ["Ali bin Abi Thalib", "Mu'awiyah bin Abi Sufyan", "Abdul Malik bin Marwan", "Umar bin Abdul Aziz"],
          answerIndex: 2,
          clue: "💡 Clue: Khalifah Bani Umayyah bernama Abdul Malik bin Marwan (tahun 80 H)."
        }
      ]
    }
  ]
    },
    {
      id: "akhlak",
      name: "Akidah Akhlak & Hadits",
      icon: "✨",
      color: "#4F46E5",
      accent: "#6366F1",
      bgLight: "#EEF2FF",
      gradient: "linear-gradient(135deg, #6366f1 0%, #3730a3 100%)",
      badge: "3 Hadits Pilihan",
      desc: "Hadits Istiqamah, Hadits Manisnya Iman, dan Hadits Shalat tiang agama + latihan STS.",
      chapters: [
    {
      id: "akhlak-1",
      number: 1,
      badge: "Hadits 1",
      titleArabic: "حَدِيثُ الإِيمَانِ وَالاِسْتِقَامَةِ",
      titleLatin: "Hadits Iman dan Istiqamah",
      themeArabic: "الإِيمَانُ وَالاِسْتِقَامَةُ",
      themeLatin: "Kewajiban Iman & Istiqamah",
      color: "#4F46E5",
      accent: "#6366F1",
      bgLight: "#EEF2FF",
      description: "Meneladani hadits Sufyan bin Abdillah: Katakanlah aku beriman kepada Allah, kemudian istiqamahlah! (HR. Muslim).",
      story: {
        titleArabic: "حَدِيثُ سُفْيَانَ بْنِ عَبْدِ اللهِ رَضِيَ اللهُ عَنْهُ",
        titleLatin: "Hadits Riwayat Muslim dari Sufyan bin Abdillah",
        fullAudioText: "عَنْ سُفْيَانَ بْنِ عَبْدِ اللهِ قَالَ: قُلْتُ: يَا رَسُوْلَ اللهِ، قُلْ لِي فِي الإِسْلاَمِ قَوْلاً لاَ أَسْأَلُ عَنْهُ أَحَدًا بَعْدَكَ، قَالَ: قُلْ آمَنْتُ بِاللهِ ثُمَّ اسْتَقِمْ. رَوَاهُ مُسْلِمٌ. Dari Sufyan bin Abdillah radhiyallahu 'anhu, ia berkata: Aku berkata, Wahai Rasulullah, katakanlah kepadaku suatu perkataan dalam Islam yang aku tidak perlu bertanya tentangnya kepada seorang pun setelahmu! Beliau bersabda: Katakanlah, Aku beriman kepada Allah, kemudian istiqamahlah! Hadits Riwayat Muslim.",
        sentences: [
          {
            id: "ak1-s1",
            arabic: "عَنْ سُفْيَانَ بْنِ عَبْدِ اللهِ قَالَ: قُلْتُ: يَا رَسُوْلَ اللهِ",
            translation: "Dari Sufyan bin Abdillah radhiyallahu 'anhu, ia berkata: Aku berkata: Wahai Rasulullah!",
            audioText: "'An Sufyana bin 'Abdillah qala: qultu ya Rasulallah",
            words: [
              { ar: "عَنْ سُفْيَانَ", tr: "'an Sufyâna", id: "dari Sufyan", type: "Nama Sahabat Perawi" },
              { ar: "بْنِ عَبْدِ اللهِ", tr: "ibni 'Abdillâh", id: "putra Abdillah (ats-Tsaqafi)", type: "Nasab" },
              { ar: "قُلْتُ", tr: "qultu", id: "aku berkata", type: "Fi'il Madhi" },
              { ar: "يَا رَسُوْلَ اللهِ", tr: "yâ Rasûlallâh", id: "wahai Rasulullah", type: "Panggilan Hormat" }
            ]
          },
          {
            id: "ak1-s2",
            arabic: "قُلْ لِي فِي الإِسْلاَمِ قَوْلاً لاَ أَسْأَلُ عَنْهُ أَحَدًا بَعْدَكَ",
            translation: "Katakanlah kepadaku tentang Islam sebuah ucapan yang aku tidak akan bertanya kepada seorang pun setelahmu.",
            audioText: "Qul li fil-islami qaulan la as-alu 'anhu ahadan ba'daka",
            words: [
              { ar: "قُلْ لِي", tr: "qul lî", id: "katakanlah kepadaku", type: "Fi'il Amr (Perintah)" },
              { ar: "فِي الإِسْلاَمِ", tr: "fîl-Islâm", id: "tentang agama Islam", type: "Jar wa Majrur" },
              { ar: "قَوْلاً", tr: "qaulan", id: "suatu perkataan menyeluruh", type: "Maf'ul Bih" },
              { ar: "لاَ أَسْأَلُ عَنْهُ", tr: "lâ as-alu 'anhu", id: "aku tidak perlu lagi bertanya", type: "Fi'il Mudhari' Manfi" }
            ]
          },
          {
            id: "ak1-s3",
            arabic: "قَالَ: «قُلْ آمَنْتُ بِاللهِ ثُمَّ اسْتَقِمْ»",
            translation: "Rasulullah ﷺ menjawab: Katakanlah: Aku beriman kepada Allah, kemudian istiqamahlah! (HR. Muslim).",
            audioText: "Qala: qul amantu billahi tsummas-taqim",
            words: [
              { ar: "قُلْ", tr: "qul", id: "katakanlah", type: "Fi'il Amr" },
              { ar: "آمَنْتُ", tr: "âmantu", id: "aku beriman", type: "Fi'il Madhi" },
              { ar: "بِاللهِ", tr: "billâh", id: "kepada Allah", type: "Rukun Iman Utama" },
              { ar: "ثُمَّ", tr: "tsumma", id: "kemudian", type: "Harf Athaf" },
              { ar: "اسْتَقِمْ", tr: "istaqim", id: "istiqamahlah (konsisten dalam ketaatan)", type: "Fi'il Amr Istiqamah" }
            ]
          }
        ]
      },
      kamusKecil: [
        { term: "Istiqamah (الاِسْتِقَامَةُ)", meaning: "Terus-menerus teguh melaksanakan perintah Allah dan konsisten menjauhi segala larangan-Nya." },
        { term: "Perawi Sufyan ats-Tsaqafi", meaning: "Sahabat Nabi yang pernah dipercaya Khalifah Umar bin Al-Khattab sebagai amil pengelola zakat di Kota Thaif." }
      ],
      tanyaRenungan: [
        { q: "Apa janji Allah bagi orang yang beriman dan beristiqamah dalam surat Al-Ahqaf ayat 13?", a: "Tidak ada rasa khawatir (takut) pada diri mereka dan mereka tidak pula bersedih hati." },
        { q: "Mengapa hadits ini sangat penting?", a: "Karena mewajibkan kita menggabungkan antara iman dalam hati dan istiqamah dalam amal saleh nyata." }
      ],
      exercises: [
        {
          id: "ak1-ex-1",
          type: "choice",
          title: "Perintah Utama dalam Hadits",
          question: "Saat Sufyan bin Abdillah meminta wasiat ringkas dalam Islam, Rasulullah ﷺ memerintahkan untuk ...",
          options: ["Memperbanyak puasa sunnah", "Katakanlah aku beriman kepada Allah kemudian istiqamahlah", "Mencari harta sebanyak mungkin", "Menghafal seluruh hadits"],
          answerIndex: 1,
          clue: "💡 Clue: Menggabungkan antara pengakuan iman (آمَنْتُ بِاللهِ) dan istiqamah (اسْتَقِمْ)."
        },
        {
          id: "ak1-ex-2",
          type: "choice",
          title: "Lawan dari Berkata Baik",
          question: "Anak yang istiqamah membiasakan diri berkata baik. Perbuatan yang menjadi lawannya adalah ...",
          options: ["Menolong teman", "Mengucapkan perkataan kotor dan dusta", "Membaca Al-Quran", "Mendengarkan nasihat"],
          answerIndex: 1,
          clue: "💡 Clue: Perbuatan lisan tercela yang dilarang dalam Islam."
        },
        {
          id: "ak1-ex-3",
          type: "choice",
          title: "Tanda Istiqamah Menuntut Ilmu",
          question: "Contoh sikap yang mencerminkan istiqamah dalam menuntut ilmu adalah ...",
          options: ["Bermalas-malasan pergi ke sekolah", "Bersemangat dan antusias dalam belajar", "Hanya belajar saat akan ujian", "Sering menunda tugas PR"],
          answerIndex: 1,
          clue: "💡 Clue: Sikap sungguh-sungguh dan antusias meneladani para sahabat Nabi."
        },
        {
          id: "ak1-ex-4",
          type: "choice",
          title: "Biografi Sufyan ats-Tsaqafi",
          question: "Sahabat perawi hadits ini, Sufyan bin Abdillah, pernah diangkat oleh Khalifah Umar bin Al-Khattab sebagai ...",
          options: ["Panglima perang", "Amil zakat di Thaif", "Gubernur Madinah", "Hakim di Syam"],
          answerIndex: 1,
          clue: "💡 Clue: Pengurus zakat di kota yang terkenal dengan udaranya yang sejuk (Thaif)."
        }
      ]
    },
    {
      id: "akhlak-2",
      number: 2,
      badge: "Hadits 2",
      titleArabic: "حَدِيثُ حَلاَوَةِ الإِيمَانِ",
      titleLatin: "Hadits Manisnya Iman",
      themeArabic: "حَلاَوَةُ الإِيمَانِ",
      themeLatin: "Tiga Perkara Manisnya Iman",
      color: "#6366F1",
      accent: "#4F46E5",
      bgLight: "#EEF2FF",
      description: "Tiga perkara merasakan halawatul iman, biografi Anas bin Malik, hadits shalawat, dan hadits ketaatan surga.",
      story: {
        titleArabic: "حَدِيثُ أَنَسِ بْنِ مَالِكٍ رَضِيَ اللهُ عَنْهُ",
        titleLatin: "Hadits Riwayat Bukhari dan Muslim dari Anas bin Malik",
        fullAudioText: "عَنْ أَنَسٍ عَنِ النَّبِيِّ ﷺ قَالَ: ثَلاَثٌ مَنْ كُنَّ فِيهِ وَجَدَ بِهِنَّ حَلاَوَةَ الإِيمَانِ: مَنْ كَانَ اللهُ وَرَسُولُهُ أَحَبَّ إِلَيْهِ مِمَّا سِوَاهُمَا، وَأَنْ يُحِبَّ المَرْءَ لاَ يُحِبُّهُ إِلاَّ لِلَّهِ، وَأَنْ يَكْرَهَ أَنْ يَعُودَ فِي الكُفْرِ بَعْدَ أَنْ أَنْقَذَهُ اللهُ مِنْهُ كَمَا يَكْرَهُ أَنْ يُقْذَفَ فِي النَّارِ. Tiga perkara yang barangsiapa terdapat pada dirinya, niscaya ia akan merasakan manisnya iman: Menjadikan Allah dan Rasul-Nya lebih ia cintai dari selain keduanya; Mencintai seseorang semata-mata karena Allah; dan Benci untuk kembali kepada kekafiran setelah diselamatkan Allah sebagaimana ia benci dilempar ke dalam api neraka.",
        sentences: [
          {
            id: "ak2-s1",
            arabic: "ثَلاَثٌ مَنْ كُنَّ فِيهِ وَجَدَ بِهِنَّ حَلاَوَةَ الإِيمَانِ",
            translation: "Tiga perkara yang barangsiapa terdapat pada dirinya, niscaya dia akan merasakan manisnya iman (Halawatul Iman).",
            audioText: "Tsalatsun man kunna fihi wajada bihinna halawatal-iman",
            words: [
              { ar: "ثَلاَثٌ", tr: "tsalâtsun", id: "tiga perangai / sifat utama", type: "Bilangan" },
              { ar: "حَلاَوَةَ", tr: "halâwata", id: "lezat / manisnya (ketenangan batin)", type: "Rasa Nikmat Iman" },
              { ar: "الإِيمَانِ", tr: "al-îmân", id: "keimanan kepada Allah", type: "Hati" }
            ]
          },
          {
            id: "ak2-s2",
            arabic: "مَنْ كَانَ اللهُ وَرَسُولُهُ أَحَبَّ إِلَيْهِ مِمَّا سِوَاهُمَا",
            translation: "Syarat 1: Barangsiapa yang Allah dan Rasul-Nya lebih ia cintai melebihi dari segala sesuatu selain keduanya.",
            audioText: "Man kanallahu wa rasuluhu ahabba ilaihi mimma siwahuma",
            words: [
              { ar: "أَحَبَّ", tr: "ahabba", id: "lebih dicintai", type: "Isim Tafdhil" },
              { ar: "مِمَّا سِوَاهُمَا", tr: "mimmâ siwâhumâ", id: "daripada selain keduanya", type: "Prioritas Cinta Tertinggi" }
            ]
          },
          {
            id: "ak2-s3",
            arabic: "وَأَنْ يُحِبَّ المَرْءَ لاَ يُحِبُّهُ إِلاَّ لِلَّهِ",
            translation: "Syarat 2: Hendaklah ia mencintai seseorang semata-mata karena Allah, bukan karena kepentingan duniawi.",
            audioText: "Wa an yuhibbal-mar'a la yuhibbuhu illa lillah",
            words: [
              { ar: "يُحِبَّ المَرْءَ", tr: "yuhibbal-mar'a", id: "mencintai saudaranya", type: "Ukhuwah" },
              { ar: "إِلاَّ لِلَّهِ", tr: "illâ lillâh", id: "semata-mata ikhlas karena Allah", type: "Syarat Keikhlasan" }
            ]
          },
          {
            id: "ak2-s4",
            arabic: "وَأَنْ يَكْرَهَ الرُّجُوعَ فِي الكُفْرِ كَمَا يَكْرَهُ أَنْ يُقْذَفَ فِي النَّارِ",
            translation: "Syarat 3: Dan ia sangat benci untuk kembali kepada kekafiran sebagaimana ia benci jika dilemparkan ke dalam kobaran api neraka.",
            audioText: "Wa an yakrahar-ruju'a fil-kufri kama yakrahu an yuqzafa fin-nar",
            words: [
              { ar: "يَكْرَهَ", tr: "yakraha", id: "ia sangat membenci", type: "Sikap Tegas" },
              { ar: "الكُفْرِ", tr: "al-kufri", id: "kekafiran / kesyirikan", type: "Bahaya Terbesar" },
              { ar: "يُقْذَفَ فِي النَّارِ", tr: "yuqzafa fin-nâr", id: "dilemparkan ke dalam api", type: "Permisalan Dahsyat" }
            ]
          }
        ]
      },
      kamusKecil: [
        { term: "Halawatul Iman (حَلاَوَةُ الإِيمَانِ)", meaning: "Manisnya iman, yaitu kelapangan jiwa, ketenangan hati, dan kelezatan saat mengerjakan ketaatan kepada Allah." },
        { term: "Anas bin Malik al-Anshari", meaning: "Pelayan Rasulullah ﷺ sejak usia 10 tahun. Didoakan panjang umur dan barakah. Wafat paling terakhir di Bashrah tahun 93 H pada usia 103 tahun." }
      ],
      tanyaRenungan: [
        { q: "Apa balasan bagi orang yang bershalawat kepada Nabi Muhammad ﷺ satu kali?", a: "Allah akan membalas bershalawat untuknya sebanyak 10 kali (HR. Muslim no. 384)." },
        { q: "Apa jaminan bagi orang yang menaati ajaran Rasulullah ﷺ?", a: "Dijamin kelak akan masuk ke dalam surga (HR. Bukhari no. 6851)." }
      ],
      exercises: [
        {
          id: "ak2-ex-1",
          type: "choice",
          title: "Jumlah Perkara Manisnya Iman",
          question: "Menurut hadits riwayat Anas bin Malik, ada berapa perkara yang membuat seseorang merasakan manisnya iman?",
          options: ["2 perkara", "3 perkara", "4 perkara", "5 perkara"],
          answerIndex: 1,
          clue: "💡 Clue: Perhatikan lafaz awal hadits: ثَلاَثٌ (tsalâtsun)."
        },
        {
          id: "ak2-ex-2",
          type: "choice",
          title: "Cinta Karena Allah",
          question: "Ketika seorang muslim membangun ikatan persahabatan, ia mencintai temannya semata-mata karena ...",
          options: ["Kekayaan temannya", "Allah Ta'ala", "Kepentingan tugas sekolah", "Popularitas"],
          answerIndex: 1,
          clue: "💡 Clue: Ikhlas karena Allah (لاَ يُحِبُّهُ إِلاَّ لِلَّهِ)."
        },
        {
          id: "ak2-ex-3",
          type: "choice",
          title: "Pahala Bershalawat",
          question: "Jika kita bershalawat satu kali kepada Rasulullah ﷺ, berapa kali Allah akan membalas bershalawat untuk kita?",
          options: ["1 kali", "5 kali", "10 kali", "70 kali"],
          answerIndex: 2,
          clue: "💡 Clue: Sesuai hadits riwayat Muslim: صَلَّى اللهُ عَلَيْهِ بِهَا عَشْرًا (sepuluh kali)."
        },
        {
          id: "ak2-ex-4",
          type: "choice",
          title: "Biografi Anas bin Malik",
          question: "Sahabat Anas bin Malik mulai menjadi pelayan (khadim) Rasulullah ﷺ semenjak berumur ...",
          options: ["7 tahun", "10 tahun", "15 tahun", "20 tahun"],
          answerIndex: 1,
          clue: "💡 Clue: Sejak beliau masih kanak-kanak berusia 10 tahun."
        }
      ]
    },
    {
      id: "akhlak-3",
      number: 3,
      badge: "Hadits 3",
      titleArabic: "حَدِيثُ الصَّلاَةِ عِمَادُ الدِّينِ",
      titleLatin: "Hadits Shalat Pembatas Kekufuran",
      themeArabic: "أَهَمِّيَّةُ الصَّلاَةِ",
      themeLatin: "Keagungan Shalat & Pencegah Dosa",
      color: "#4338CA",
      accent: "#4F46E5",
      bgLight: "#EEF2FF",
      description: "Hadits Jabir bin Abdillah tentang pembeda kemusyrikan, permisalan mandi di sungai 5 kali, dan kedisiplinan shalat.",
      story: {
        titleArabic: "حَدِيثُ جَابِرِ بْنِ عَبْدِ اللهِ رَضِيَ اللهُ عَنْهُ",
        titleLatin: "Hadits Riwayat Muslim dari Jabir bin Abdillah",
        fullAudioText: "عَنْ جَابِرِ بْنِ عَبْدِ اللهِ قَالَ: سَمِعْتُ رَسُولَ اللهِ ﷺ يَقُولُ: إِنَّ بَيْنَ الرَّجُلِ وَبَيْنَ الشِّرْكِ وَالكُفْرِ تَرْكَ الصَّلاَةِ. رَوَاهُ مُسْلِمٌ. Sesungguhnya pembeda antara seseorang dengan kesyirikan dan kekufuran adalah meninggalkan shalat. Shalat lima waktu diumpamakan seperti sungai yang mengalir di depan rumah, seseorang mandi di situ 5 kali sehari sehingga bersih dari kotoran dosa.",
        sentences: [
          {
            id: "ak3-s1",
            arabic: "عَنْ جَابِرِ بْنِ عَبْدِ اللهِ قَالَ: سَمِعْتُ رَسُولَ اللهِ ﷺ يَقُولُ",
            translation: "Dari Jabir bin Abdillah radhiyallahu 'anhu, ia berkata: Aku mendengar Rasulullah ﷺ bersabda:",
            audioText: "'An Jabir bin 'Abdillah qala: sami'tu Rasulallahi sallallahu 'alaihi wasallam yaqul",
            words: [
              { ar: "جَابِرُ بْنُ عَبْدِ اللهِ", tr: "Jâbir bin 'Abdillâh", id: "sahabat mulia perawi hadits", type: "Perawi" },
              { ar: "سَمِعْتُ", tr: "sami'tu", id: "aku mendengar langsung", type: "Metode Periwayatan" }
            ]
          },
          {
            id: "ak3-s2",
            arabic: "إِنَّ بَيْنَ الرَّجُلِ وَبَيْنَ الشِّرْكِ وَالكُفْرِ تَرْكَ الصَّلاَةِ",
            translation: "Sesungguhnya pembeda antara seseorang dengan kesyirikan dan kekufuran adalah meninggalkan shalat. (HR. Muslim).",
            audioText: "Inna bainar-rajuli wa bainasy-syirki wal-kufri tarkash-shalah",
            words: [
              { ar: "إِنَّ بَيْنَ", tr: "inna baina", id: "sesungguhnya batas antara", type: "Penegasan" },
              { ar: "الشِّرْكِ وَالكُفْرِ", tr: "asy-syirki wal-kufri", id: "kemusyrikan dan kekafiran", type: "Dosa Terbesar" },
              { ar: "تَرْكَ الصَّلاَةِ", tr: "tarkash-shalâh", id: "meninggalkan shalat wajib", type: "Pembeda Pokok" }
            ]
          },
          {
            id: "ak3-s3",
            arabic: "مَثَلُ الصَّلَوَاتِ الخَمْسِ كَنَهْرٍ جَارٍ يَغْتَسِلُ مِنْهُ كُلَّ يَوْمٍ خَمْسَ مَرَّاتٍ",
            translation: "Permisalan shalat lima waktu seperti sungai mengalir, ia mandi di dalamnya lima kali setiap hari hingga bersih suci dari noda dosa.",
            audioText: "Matsalus-shalawatil-khamsi kanahrin jarin yaghtasilu minhu kulla yaumin khamsa marrat",
            words: [
              { ar: "نَهْرٍ جَارٍ", tr: "nahrin jârin", id: "sungai yang mengalir jernih", type: "Permisalan Indah" },
              { ar: "يَغْتَسِلُ", tr: "yaghtasilu", id: "mandi membersihkan diri", type: "Penyucian Dosa" },
              { ar: "خَمْسَ مَرَّاتٍ", tr: "khamsa marrât", id: "sebanyak 5 kali sehari", type: "Jumlah Shalat Wajib" }
            ]
          }
        ]
      },
      kamusKecil: [
        { term: "Tarkush Shalah (تَرْكُ الصَّلاَةِ)", meaning: "Meninggalkan ibadah shalat wajib. Amalan yang pertama kali dihisab pada hari kiamat adalah shalat." },
        { term: "Jabir bin Abdillah al-Anshari", meaning: "Sahabat Nabi yang ikut Bai'at Aqabah saat kecil, Perang Khandaq, dan Bai'at Ridwan. Wafat di Madinah tahun 74 H." }
      ],
      tanyaRenungan: [
        { q: "Apa yang harus segera dilakukan seorang muslim saat mendengar azan berkumandang?", a: "Menghentikan semua permainan atau aktivitas dan bergegas menuju masjid untuk shalat berjamaah." },
        { q: "Bagaimana cara mengatasi bangun kesiangan shalat Subuh?", a: "Tidak begadang bermain game, segera tidur di awal malam, dan memasang alarm." }
      ],
      exercises: [
        {
          id: "ak3-ex-1",
          type: "choice",
          title: "Amalan Pertama yang Dihisab",
          question: "Ketaatan tertinggi dan amalan ibadah yang pertama kali akan ditanya dan dihisab pada hari kiamat adalah ...",
          options: ["Sedekah", "Shalat lima waktu", "Puasa sunnah", "Haji"],
          answerIndex: 1,
          clue: "💡 Clue: Tiang agama Islam yang dikerjakan 5 kali sehari semalam."
        },
        {
          id: "ak3-ex-2",
          type: "choice",
          title: "Pembeda Syirik dan Kufur",
          question: "Dalam hadits riwayat Jabir bin Abdillah, pembeda antara seseorang dengan kesyirikan dan kekufuran adalah ...",
          options: ["Menunda sedekah", "Meninggalkan shalat", "Kurang tidur malam", "Tidak membaca buku"],
          answerIndex: 1,
          clue: "💡 Clue: Lafaz hadits: تَرْكُ الصَّلاَةِ (meninggalkan shalat)."
        },
        {
          id: "ak3-ex-3",
          type: "choice",
          title: "Permisalan Shalat 5 Waktu",
          question: "Rasulullah ﷺ mengumpamakan shalat lima waktu seperti mandi di sungai mengalir di depan rumah sebanyak ...",
          options: ["3 kali sehari", "5 kali sehari", "7 kali sehari", "10 kali sehari"],
          answerIndex: 1,
          clue: "💡 Clue: Sama dengan jumlah shalat fardhu dalam sehari semalam."
        },
        {
          id: "ak3-ex-4",
          type: "choice",
          title: "Mengatasi Malas Shalat",
          question: "Salah satu penyebab pemuda bermalas-malasan shalat adalah kebiasaan bergadang bermain game. Cara tepat mengatasinya adalah ...",
          options: ["Tidur larut malam", "Berhenti bermain game saat azan dan pasang alarm tidur cepat", "Menunggu selesai main baru shalat", "Minta izin shalat di rumah saja"],
          answerIndex: 1,
          clue: "💡 Clue: Disiplin waktu dan segera memprioritaskan panggilan azan shalat."
        }
      ]
    },
    {
      id: "akhlak-4",
      number: 4,
      badge: "Evaluasi STS",
      titleArabic: "اخْتِبَارُ نِصْفِ الفَصْلِ لِلأَخْلاَقِ",
      titleLatin: "Latihan Resmi STS Akidah Akhlak & Hadits",
      themeArabic: "المُرَاجَعَةُ الشَّامِلَةُ",
      themeLatin: "Evaluasi Komprehensif 3 Hadits Pilihan",
      color: "#3730A3",
      accent: "#4338CA",
      bgLight: "#EEF2FF",
      description: "Latihan pemantapan materi STS Akidah Akhlak & Hadits merangkum Hadits 1, Hadits 2, dan Hadits 3.",
      story: {
        titleArabic: "خُلاَصَةُ الأَحَادِيثِ الشَّرِيفَةِ",
        titleLatin: "Rangkuman Hadits Akhlak Kelas 6",
        fullAudioText: "Tiga pilar hadits akhlak kelas 6: Istiqamah di atas iman, merasakan manisnya iman dengan mendahulukan Allah dan Rasul-Nya, serta menjaga shalat lima waktu sebagai tiang penopang agama.",
        sentences: [
          {
            id: "ak4-s1",
            arabic: "الإِسْلاَمُ يَقُومُ عَلَى الإِيمَانِ، وَحَلاَوَةُ الإِيمَانِ فِي طَاعَةِ الرَّسُولِ، وَالصَّلاَةُ عِمَادُ الدِّينِ",
            translation: "Islam tegak di atas pondasi keimanan, kelezatan iman dirasakan dengan ketaatan kepada Rasul, dan shalat adalah tiang agama.",
            audioText: "Al-islamu yaqumu 'alal-iman, wa halawatul-imani fi tha'atir-rasul, wash-shalatu 'imadud-din",
            words: [
              { ar: "عِمَادُ الدِّينِ", tr: "'imâdud-dîn", id: "tiang penopang agama", type: "Status Shalat" },
              { ar: "طَاعَةُ الرَّسُولِ", tr: "thâ'atur-Rasûl", id: "menaati tuntunan Nabi ﷺ", type: "Jalan Surga" }
            ]
          }
        ]
      },
      exercises: [
        {
          id: "ak4-ex-1",
          type: "choice",
          title: "Pengertian Istiqamah",
          question: "Pengertian istiqamah secara syar'i adalah ...",
          options: ["Menuntut ilmu saat dekat ujian saja", "Terus-menerus melaksanakan ketaatan perintah Allah dan menjauhi segala larangan-Nya", "Beribadah hanya ketika dilihat orang lain", "Mengerjakan shalat sesempatnya"],
          answerIndex: 1,
          clue: "💡 Clue: Konsisten (kontinu) dalam berbuat taat dan meninggalkan maksiat."
        },
        {
          id: "ak4-ex-2",
          type: "choice",
          title: "Rukun Iman ke-5",
          question: "Dalam urutan rukun iman yang wajib diyakini setelah iman kepada rasul-rasul Allah adalah rukun iman ke-5, yaitu iman kepada ...",
          options: ["Kitab-kitab Allah", "Malaikat-malaikat Allah", "Hari Kiamat", "Takdir baik dan buruk"],
          answerIndex: 2,
          clue: "💡 Clue: Hari akhir penimbangan amal dan hisab seluruh manusia."
        },
        {
          id: "ak4-ex-3",
          type: "choice",
          title: "Contoh Mendahulukan Allah & Rasul",
          question: "Contoh nyata mendahulukan kecintaan kepada Allah dan Rasul-Nya dibanding hawa nafsu dunia dalam kehidupan sehari-hari adalah ...",
          options: ["Meneruskan main game saat azan berkumandang", "Menghentikan permainan saat mendengar azan lalu bergegas menuju masjid", "Menunda shalat demi menonton video", "Tidur larut malam untuk browsing"],
          answerIndex: 1,
          clue: "💡 Clue: Memilih taat kepada panggilan adzan daripada menuruti hawa nafsu santai."
        },
        {
          id: "ak4-ex-4",
          type: "choice",
          title: "Status Orang yang Meninggalkan Shalat",
          question: "Karena sangat agungnya kedudukan shalat sebagai tiang agama, orang yang sengaja meninggalkannya disamakan keadaannya seperti ...",
          options: ["Orang yang sakit", "Orang kafir", "Orang yang musafir", "Orang yang tertidur"],
          answerIndex: 1,
          clue: "💡 Clue: Sesuai hadits riwayat Muslim: إِنَّ بَيْنَ الرَّجُلِ وَبَيْنَ الشِّرْكِ وَالكُفْرِ تَرْكَ الصَّلاَةِ."
        }
      ]
    }
  ]
    },
    {
      id: "fiqih",
      name: "Fiqih Ibadah",
      icon: "⚖️",
      color: "#0284C7",
      accent: "#38BDF8",
      bgLight: "#F0F9FF",
      gradient: "linear-gradient(135deg, #0284c7 0%, #075985 100%)",
      badge: "Segera Hadir",
      desc: "Tata cara ibadah praktis, shalat berjamaah, bersuci, dan hukum Islam sehari-hari.",
      isUpcoming: true,
      chapters: []
    }
  ],

  // Getter otomatis untuk kompatibilitas kode yang memanggil window.APP_DATA.chapters
  get chapters() {
    const currentSubj = this.subjects.find(s => s.id === this.currentSubjectId) || this.subjects[0];
    return currentSubj.chapters;
  },

  // Data Permainan Edukatif
  gamesData: {
    scrambleWords: [
      { target: "مَدْرَسَتِي", meaning: "Sekolahku", letters: ["مَ", "دْ", "رَ", "سَ", "تِي"], hint: "Tempat kita menuntut ilmu" },
      { target: "سَبُّورَةٌ", meaning: "Papan Tulis", letters: ["سَ", "بُّوْ", "رَ", "ةٌ"], hint: "Fasilitas kelas untuk menulis pelajaran" },
      { target: "تَلَامِيذُ", meaning: "Murid-murid", letters: ["تَ", "لَا", "مِيْ", "ذُ"], hint: "Anak-anak yang belajar di sekolah" },
      { target: "خِزَانَةٌ", meaning: "Lemari", letters: ["خِ", "زَا", "نَ", "ةٌ"], hint: "Tempat menyimpan buku dan arsip" },
      { target: "أُسْرَتِي", meaning: "Keluargaku", letters: ["أُ", "سْ", "رَ", "تِي"], hint: "Ayah, ibu, kakak, dan adik" },
      { target: "طَالِبٌ", meaning: "Murid Laki-laki", letters: ["طَا", "لِ", "بٌ"], hint: "Penuntut ilmu laki-laki" },
      { target: "إِمَامٌ", meaning: "Panutan / Pemimpin", letters: ["إِ", "مَا", "مٌ"], hint: "Gelar kehormatan ulama panutan" },
      { target: "اِسْتِقَامَةٌ", meaning: "Teguh dalam ketaatan", letters: ["اِسْ", "تِ", "قَا", "مَ", "ةٌ"], hint: "Konsisten melaksanakan perintah Allah" }
    ],
    memoryCards: [
      { id: 1, pairId: 101, text: "مَدْرَسَةٌ", type: "ar" },
      { id: 2, pairId: 101, text: "Sekolah", type: "id" },
      { id: 3, pairId: 102, text: "سَبُّوْرَةٌ", type: "ar" },
      { id: 4, pairId: 102, text: "Papan Tulis", type: "id" },
      { id: 5, pairId: 103, text: "سَاعَةٌ", type: "ar" },
      { id: 6, pairId: 103, text: "Jam Dinding", type: "id" },
      { id: 7, pairId: 104, text: "مِسْطَرَةٌ", type: "ar" },
      { id: 8, pairId: 104, text: "Penggaris", type: "id" },
      { id: 9, pairId: 105, text: "جَوَّالٌ", type: "ar" },
      { id: 10, pairId: 105, text: "Handphone", type: "id" },
      { id: 11, pairId: 106, text: "أُسْرَةٌ", type: "ar" },
      { id: 12, pairId: 106, text: "Keluarga", type: "id" }
    ],
    laisaQuiz: [
      {
        sentence: "فَاطِمَةُ ... بِمُهْمِلَةٍ",
        subject: "Fatimah (هِيَ)",
        options: ["لَيْسَ", "لَيْسَتْ", "لَسْتُ", "لَسْتَ"],
        correctIndex: 1,
        hint: "💡 Penjelasan: Subjek adalah Fatimah (kata ganti هِيَ / dia perempuan)."
      },
      {
        sentence: "حَسَنٌ ... بِمَرِيضٍ",
        subject: "Hasan (هُوَ)",
        options: ["لَيْسَ", "لَيْسَتْ", "لَسْنَا", "لَسْتُمْ"],
        correctIndex: 0,
        hint: "💡 Penjelasan: Subjek adalah Hasan (kata ganti هُوَ / dia laki-laki tunggal)."
      },
      {
        sentence: "أَنَا ... بِمُتَأَخِّرٍ",
        subject: "Saya (أَنَا)",
        options: ["لَيْسَ", "لَيْسَتْ", "لَسْتُ", "لَسْتَ"],
        correctIndex: 2,
        hint: "💡 Penjelasan: Subjek adalah saya (أَنَا / mutakallim wahdah)."
      },
      {
        sentence: "أَنْتَ ... بِكَسْلَانَ",
        subject: "Kamu Laki-laki (أَنْتَ)",
        options: ["لَيْسَ", "لَسْتَ", "لَسْتِ", "لَسْتُمْ"],
        correctIndex: 1,
        hint: "💡 Penjelasan: Subjek adalah kamu laki-laki tunggal (أَنْتَ)."
      },
      {
        sentence: "نَحْنُ ... بِمُقَصِّرِينَ",
        subject: "Kami / Kita (نَحْنُ)",
        options: ["لَسْنَا", "لَيْسُوا", "لَسْتُنَّ", "لَيْسَ"],
        correctIndex: 0,
        hint: "💡 Penjelasan: Subjek adalah kami / kita (نَحْنُ / mutakallim ma'al ghair)."
      }
    ]
  },

  // Kamus Kosakata & Istilah Terpadu
  mufrodatDictionary: [
    // Bahasa Arab
    { chapter: 1, category: "b-arab", ar: "مَدْرَسَةٌ", tr: "madrasatun", id: "Sekolah" },
    { chapter: 1, category: "b-arab", ar: "مَدْرَسَتِي", tr: "madrasatî", id: "Sekolahku" },
    { chapter: 1, category: "b-arab", ar: "قَرْيَةٌ", tr: "qaryatun", id: "Desa" },
    { chapter: 1, category: "b-arab", ar: "كَبِيرَةٌ", tr: "kabîratun", id: "Besar" },
    { chapter: 1, category: "b-arab", ar: "وَاسِعَةٌ", tr: "wâsi'atun", id: "Luas" },
    { chapter: 1, category: "b-arab", ar: "تَلَامِيذُ", tr: "talâmîdzu", id: "Murid-murid" },
    { chapter: 1, category: "b-arab", ar: "فَصْلٌ", tr: "fashlun", id: "Ruang Kelas" },
    { chapter: 1, category: "b-arab", ar: "سَبُّورَةٌ", tr: "sabbûratun", id: "Papan Tulis" },
    { chapter: 1, category: "b-arab", ar: "خِزَانَةٌ", tr: "khizânatun", id: "Lemari" },
    { chapter: 1, category: "b-arab", ar: "مَكْتَبٌ", tr: "maktabun", id: "Meja Belajar" },
    { chapter: 1, category: "b-arab", ar: "كُرْسِيٌّ", tr: "kursiyyun", id: "Kursi" },
    { chapter: 2, category: "b-arab", ar: "أَحَدَ عَشَرَ", tr: "ahada 'asyara", id: "Sebelas (11)" },
    { chapter: 2, category: "b-arab", ar: "اِثْنَا عَشَرَ", tr: "itsnâ 'asyara", id: "Dua Belas (12)" },
    { chapter: 2, category: "b-arab", ar: "ثَلَاثَةَ عَشَرَ", tr: "tsalâtsata 'asyara", id: "Tiga Belas (13)" },
    { chapter: 2, category: "b-arab", ar: "عِشْرُونَ", tr: "'isyrûna", id: "Dua Puluh (20)" },
    { chapter: 3, category: "b-arab", ar: "أُسْرَةٌ", tr: "usratun", id: "Keluarga" },
    { chapter: 3, category: "b-arab", ar: "أُسْرَتِي", tr: "usratî", id: "Keluargaku" },
    { chapter: 3, category: "b-arab", ar: "طَبِيبٌ", tr: "thabîbun", id: "Dokter" },
    { chapter: 3, category: "b-arab", ar: "مُدَرِّسٌ", tr: "mudarrisun", id: "Guru" },
    { chapter: 3, category: "b-arab", ar: "لَيْسَ", tr: "laisa", id: "Tidak / Bukan (Dhomir Huwa)" },
    { chapter: 3, category: "b-arab", ar: "لَيْسَتْ", tr: "laisat", id: "Bukan (Dhomir Hiya)" },
    { chapter: 3, category: "b-arab", ar: "لَسْتُ", tr: "lastu", id: "Bukan (Dhomir Ana)" },
    // Sirah Nabawiyah
    { chapter: 1, category: "sirah", ar: "الإِمَامُ", tr: "al-imâm", id: "Pemimpin / panutan yang diikuti ilmunya" },
    { chapter: 1, category: "sirah", ar: "الفِقْهُ", tr: "al-fiqhu", id: "Pemahaman ilmu ibadah dan hukum amalan lahiriah" },
    { chapter: 1, category: "sirah", ar: "الرَّأْيُ وَالقِيَاسُ", tr: "ar-ra'yu wal-qiyâs", id: "Timbangan akal / analogi hukum" },
    { chapter: 1, category: "sirah", ar: "رَاوِي الحَدِيثِ", tr: "râwîl-hadîts", id: "Perawi yang menukil hadits bersambung" },
    { chapter: 2, category: "sirah", ar: "السُّنَّةُ", tr: "as-sunnah", id: "Ajaran dan teladan Rasulullah shallallahu 'alaihi wasallam" },
    { chapter: 2, category: "sirah", ar: "التَّقْوَى", tr: "at-taqwâ", id: "Rasa takut dan taat kepada Allah Ta'ala" },
    { chapter: 3, category: "sirah", ar: "الزُّهْدُ", tr: "az-zuhdu", id: "Tidak tergiur kemewahan dan kedudukan duniawi" },
    { chapter: 3, category: "sirah", ar: "كَفَّارَةُ اليَمِينِ", tr: "kaffâratul-yamîn", id: "Tebusan wajib bagi pelanggar sumpah" },
    // Akidah Akhlak & Hadits
    { chapter: 1, category: "akhlak", ar: "الاِسْتِقَامَةُ", tr: "al-istiqâmah", id: "Konsisten melaksanakan perintah Allah & menjauhi larangan-Nya" },
    { chapter: 2, category: "akhlak", ar: "حَلاَوَةُ الإِيمَانِ", tr: "halâwatul-îmân", id: "Manisnya iman dan kelapangan jiwa dalam ketaatan" },
    { chapter: 2, category: "akhlak", ar: "الصَّلاَةُ عَلَى النَّبِيِّ", tr: "ash-shalâtu 'alan-nabiyy", id: "Bershalawat atas Nabi Muhammad shallallahu 'alaihi wasallam" },
    { chapter: 3, category: "akhlak", ar: "عِمَادُ الدِّينِ", tr: "'imâdud-dîn", id: "Tiang penyangga utama tegaknya agama Islam" },
    { chapter: 3, category: "akhlak", ar: "تَرْكُ الصَّلاَةِ", tr: "tarkush-shalâh", id: "Meninggalkan shalat (pembeda muslim dan kafir)" }
  ]
};
