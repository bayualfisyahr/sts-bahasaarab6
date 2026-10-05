/**
 * DATA KURIKULUM & MATERI BAHASA ARAB KELAS 6
 * SDIT Al Maahyrah - Kelas 6 Zaid bin Tsabit
 * 
 * 1. Pelajaran 1: مَدْرَسَتِيْ (Sekolahku)
 * 2. Pelajaran 2: اَلْأَعْدَادُ ١١-٢٠ (Bilangan 11-20)
 * 3. Pelajaran 3: أُسْرَتِيْ وَقَاعِدَةُ لَيْسَ (Keluargaku & Kaidah Laisa)
 */

window.APP_DATA = {
  appTitle: "Al Maahyrah",
  appSubtitle: "Kelas 6 Zaid bin Tsabit",
  subjectName: "Bahasa Arab",

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
            arabic: "مَا هَذِهِ؟ هَذِهِ سَاعَةٌ. مَاذَا لِلسَّاعَةِ؟ لِلسَّاعَةِ رَقْمٌ. كَمْ رَقْمًا لِلسَّاعَةِ؟ لَهَا اثْنَا عَشَرَ رَقْمًا.",
            translation: "Apa ini? Ini jam dinding. Apa yang ada pada jam dinding? Jam dinding memiliki angka. Berapa angka pada jam dinding? Jam dinding memiliki 12 angka.",
            audioText: "مَا هَذِهِ؟ هَذِهِ سَاعَةٌ. مَاذَا لِلسَّاعَةِ؟ لِلسَّاعَةِ رَقْمٌ. كَمْ رَقْمًا لِلسَّاعَةِ؟ لَهَا اثْنَا عَشَرَ رَقْمًا.",
            words: [
              { ar: "مَا", tr: "mâ", id: "apa", type: "Kata Tanya" },
              { ar: "هَذِهِ", tr: "hâdzihi", id: "ini (kata tunjuk perempuan)", type: "Isim Isyarah" },
              { ar: "هَذِهِ", tr: "hâdzihi", id: "ini (kata tunjuk perempuan)", type: "Isim Isyarah" },
              { ar: "سَاعَةٌ", tr: "sâ'atun", id: "jam dinding", type: "Isim Muannats" },
              { ar: "مَاذَا", tr: "mâdzâ", id: "apa yang / apakah", type: "Kata Tanya" },
              { ar: "لِلسَّاعَةِ", tr: "lis-sâ'ati", id: "bagi jam / pada jam", type: "Jar wa Majrur" },
              { ar: "لِلسَّاعَةِ", tr: "lis-sâ'ati", id: "bagi jam / pada jam", type: "Jar wa Majrur" },
              { ar: "رَقْمٌ", tr: "raqmun", id: "angka / nomor", type: "Isim" },
              { ar: "كَمْ", tr: "kam", id: "berapa", type: "Kata Tanya" },
              { ar: "رَقْمًا", tr: "raqman", id: "angka", type: "Tamyiz (Ma'dud)" },
              { ar: "لِلسَّاعَةِ", tr: "lis-sâ'ati", id: "bagi jam / pada jam", type: "Jar wa Majrur" },
              { ar: "لَهَا", tr: "lahâ", id: "ia memiliki", type: "Jar wa Majrur" },
              { ar: "اثْنَا عَشَرَ", tr: "itsnâ 'asyara", id: "dua belas (12)", type: "Bilangan / Adad" },
              { ar: "رَقْمًا", tr: "raqman", id: "angka", type: "Tamyiz (Ma'dud)" }
            ]
          },
          {
            id: "b2-s2",
            arabic: "مَا هَذِهِ؟ هَذِهِ مِسْطَرَةٌ. هَلْ لِلْمِسْطَرَةِ رَقْمٌ كَذَلِكَ؟ نَعَمْ، لَهَا رَقْمٌ كَذَلِكَ. كَمْ رَقْمًا لِلْمِسْطَرَةِ؟ لَهَا أَرْقَامٌ كَثِيْرَةٌ.",
            translation: "Apa ini? Ini penggaris. Apakah penggaris memiliki angka juga? Ya, ia memiliki angka juga. Berapa angka pada penggaris? Penggaris memiliki banyak angka.",
            audioText: "مَا هَذِهِ؟ هَذِهِ مِسْطَرَةٌ. هَلْ لِلْمِسْطَرَةِ رَقْمٌ كَذَلِكَ؟ نَعَمْ، لَهَا رَقْمٌ كَذَلِكَ. كَمْ رَقْمًا لِلْمِسْطَرَةِ؟ لَهَا أَرْقَامٌ كَثِيْرَةٌ.",
            words: [
              { ar: "مَا", tr: "mâ", id: "apa", type: "Kata Tanya" },
              { ar: "هَذِهِ", tr: "hâdzihi", id: "ini (kata tunjuk perempuan)", type: "Isim Isyarah" },
              { ar: "هَذِهِ", tr: "hâdzihi", id: "ini (kata tunjuk perempuan)", type: "Isim Isyarah" },
              { ar: "مِسْطَرَةٌ", tr: "mistharatun", id: "penggaris", type: "Isim Muannats" },
              { ar: "هَلْ", tr: "hal", id: "apakah", type: "Huruf Istifham" },
              { ar: "لِلْمِسْطَرَةِ", tr: "lil-mistharati", id: "bagi penggaris", type: "Jar wa Majrur" },
              { ar: "رَقْمٌ", tr: "raqmun", id: "angka", type: "Isim" },
              { ar: "كَذَلِكَ", tr: "kadzâlika", id: "demikian pula / juga", type: "Keterangan" },
              { ar: "نَعَمْ", tr: "na'am", id: "ya", type: "Huruf Jawab" },
              { ar: "لَهَا", tr: "lahâ", id: "ia memiliki", type: "Jar wa Majrur" },
              { ar: "رَقْمٌ", tr: "raqmun", id: "angka", type: "Isim" },
              { ar: "كَذَلِكَ", tr: "kadzâlika", id: "demikian pula / juga", type: "Keterangan" },
              { ar: "كَمْ", tr: "kam", id: "berapa", type: "Kata Tanya" },
              { ar: "رَقْمًا", tr: "raqman", id: "angka", type: "Tamyiz (Ma'dud)" },
              { ar: "لِلْمِسْطَرَةِ", tr: "lil-mistharati", id: "bagi penggaris", type: "Jar wa Majrur" },
              { ar: "لَهَا", tr: "lahâ", id: "ia memiliki", type: "Jar wa Majrur" },
              { ar: "أَرْقَامٌ", tr: "arqâmun", id: "angka-angka", type: "Jama' Taksir" },
              { ar: "كَثِيْرَةٌ", tr: "katsîratun", id: "banyak", type: "Kata Sifat (Na'at)" }
            ]
          },
          {
            id: "b2-s3",
            arabic: "مَا هَذَا؟ هَذَا جَوَّالٌ. هَلْ لِلْجَوَّالِ رَقْمٌ؟ نَعَمْ، لَهُ رَقْمٌ. كَمْ رَقْمًا لِلْجَوَّالِ؟ لَهُ عَشَرَةُ أَرْقَامٍ.",
            translation: "Apa ini? Ini handphone. Apakah handphone memiliki angka? Ya, ia memiliki angka. Berapa angka pada handphone? Handphone memiliki 10 angka.",
            audioText: "مَا هَذَا؟ هَذَا جَوَّالٌ. هَلْ لِلْجَوَّالِ رَقْمٌ؟ نَعَمْ، لَهُ رَقْمٌ. كَمْ رَقْمًا لِلْجَوَّالِ؟ لَهُ عَشَرَةُ أَرْقَامٍ.",
            words: [
              { ar: "مَا", tr: "mâ", id: "apa", type: "Kata Tanya" },
              { ar: "هَذَا", tr: "hâdzâ", id: "ini (kata tunjuk laki-laki)", type: "Isim Isyarah Mudzakkar" },
              { ar: "هَذَا", tr: "hâdzâ", id: "ini (kata tunjuk laki-laki)", type: "Isim Isyarah Mudzakkar" },
              { ar: "جَوَّالٌ", tr: "jawwâlun", id: "handphone / HP", type: "Isim Mudzakkar" },
              { ar: "هَلْ", tr: "hal", id: "apakah", type: "Huruf Istifham" },
              { ar: "لِلْجَوَّالِ", tr: "lil-jawwâli", id: "bagi handphone", type: "Jar wa Majrur" },
              { ar: "رَقْمٌ", tr: "raqmun", id: "angka / nomor", type: "Isim" },
              { ar: "نَعَمْ", tr: "na'am", id: "ya", type: "Huruf Jawab" },
              { ar: "لَهُ", tr: "lahu", id: "ia memiliki", type: "Jar wa Majrur" },
              { ar: "رَقْمٌ", tr: "raqmun", id: "angka / nomor", type: "Isim" },
              { ar: "كَمْ", tr: "kam", id: "berapa", type: "Kata Tanya" },
              { ar: "رَقْمًا", tr: "raqman", id: "angka", type: "Tamyiz (Ma'dud)" },
              { ar: "لِلْجَوَّالِ", tr: "lil-jawwâli", id: "bagi handphone", type: "Jar wa Majrur" },
              { ar: "لَهُ", tr: "lahu", id: "ia memiliki", type: "Jar wa Majrur" },
              { ar: "عَشَرَةُ", tr: "'asyaratu", id: "sepuluh (10)", type: "Bilangan / Adad" },
              { ar: "أَرْقَامٍ", tr: "arqâmin", id: "angka-angka", type: "Ma'dud Jamak Majrur" }
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

  // Data Permainan Edukatif Bahasa Arab
  gamesData: {
    scrambleWords: [
      {
        question: "Susun Kalimat: \"Ini sekolahku di desa\"",
        tokens: ["هَذِهِ", "مَدْرَسَتِي", "فِي", "الْقَرْيَةِ"],
        correct: ["هَذِهِ", "مَدْرَسَتِي", "فِي", "الْقَرْيَةِ"],
        target: "هَذِهِ مَدْرَسَتِي فِي الْقَرْيَةِ",
        meaning: "Ini sekolahku di desa",
        hint: "Pelajaran 1: Lingkungan sekolah"
      },
      {
        question: "Susun Kalimat: \"Sekolahku besar dan luas\"",
        tokens: ["مَدْرَسَتِي", "كَبِيرَةٌ", "وَوَاسِعَةٌ"],
        correct: ["مَدْرَسَتِي", "كَبِيرَةٌ", "وَوَاسِعَةٌ"],
        target: "مَدْرَسَتِي كَبِيرَةٌ وَوَاسِعَةٌ",
        meaning: "Sekolahku besar dan luas",
        hint: "Pelajaran 1: Sifat sekolah"
      },
      {
        question: "Susun Kalimat: \"Di dalam kelasku ada 10 meja\"",
        tokens: ["فِي", "فَصْلِي", "عَشَرَةُ", "مَكَاتِبَ"],
        correct: ["فِي", "فَصْلِي", "عَشَرَةُ", "مَكَاتِبَ"],
        target: "فِي فَصْلِي عَشَرَةُ مَكَاتِبَ",
        meaning: "Di dalam kelasku ada 10 meja",
        hint: "Pelajaran 1: Fasilitas kelas"
      },
      {
        question: "Susun Kalimat: \"Saya mempunyai 15 pulpen\"",
        tokens: ["عِنْدِي", "خَمْسَةَ", "عَشَرَ", "قَلَمًا"],
        correct: ["عِنْدِي", "خَمْسَةَ", "عَشَرَ", "قَلَمًا"],
        target: "عِنْدِي خَمْسَةَ عَشَرَ قَلَمًا",
        meaning: "Saya mempunyai 15 pulpen",
        hint: "Pelajaran 2: Angka 11-20"
      },
      {
        question: "Susun Kalimat: \"Di dalam tas ada 12 buku\"",
        tokens: ["فِي", "الْحَقِيبَةِ", "اثْنَا", "عَشَرَ", "كِتَابًا"],
        correct: ["فِي", "الْحَقِيبَةِ", "اثْنَا", "عَشَرَ", "كِتَابًا"],
        target: "فِي الْحَقِيبَةِ اثْنَا عَشَرَ كِتَابًا",
        meaning: "Di dalam tas ada 12 buku",
        hint: "Pelajaran 2: Bilangan 12"
      },
      {
        question: "Susun Kalimat: \"Ayahku bukan seorang pelayan\"",
        tokens: ["أَبِي", "لَيْسَ", "بِخَادِمٍ"],
        correct: ["أَبِي", "لَيْسَ", "بِخَادِمٍ"],
        target: "أَبِي لَيْسَ بِخَادِمٍ",
        meaning: "Ayahku bukan seorang pelayan",
        hint: "Pelajaran 3: Kaidah Laisa"
      },
      {
        question: "Susun Kalimat: \"Ibuku bukan seorang dokter\"",
        tokens: ["أُمِّي", "لَيْسَتْ", "بِطَبِيبَةٍ"],
        correct: ["أُمِّي", "لَيْسَتْ", "بِطَبِيبَةٍ"],
        target: "أُمِّي لَيْسَتْ بِطَبِيبَةٍ",
        meaning: "Ibuku bukan seorang dokter",
        hint: "Pelajaran 3: Dhomir Hiya"
      },
      {
        question: "Susun Kalimat: \"Kami bukan anak-anak pemalas\"",
        tokens: ["نَحْنُ", "لَسْنَا", "بِكَسَالَى"],
        correct: ["نَحْنُ", "لَسْنَا", "بِكَسَالَى"],
        target: "نَحْنُ لَسْنَا بِكَسَالَى",
        meaning: "Kami bukan anak-anak pemalas",
        hint: "Pelajaran 3: Dhomir Nahnu"
      }
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
        dhomir: "Fatimah (هِيَ)",
        options: ["لَيْسَ", "لَيْسَتْ", "لَسْتُ", "لَسْتَ"],
        correctIndex: 1,
        target: "لَيْسَتْ",
        hint: "Subjek adalah Fatimah (kata ganti هِيَ / dia perempuan).",
        explanation: "Subjek adalah Fatimah (kata ganti هِيَ / dia perempuan), maka menggunakan لَيْسَتْ.",
        clue: "Perhatikan bahwa subjek perempuan tunggal (هِيَ) berpasangan dengan bentuk kata berakhiran ta' sukun (تْ)."
      },
      {
        sentence: "حَسَنٌ ... بِمَرِيضٍ",
        subject: "Hasan (هُوَ)",
        dhomir: "Hasan (هُوَ)",
        options: ["لَيْسَ", "لَيْسَتْ", "لَسْنَا", "لَسْتُمْ"],
        correctIndex: 0,
        target: "لَيْسَ",
        hint: "Subjek adalah Hasan (kata ganti هُوَ / dia laki-laki tunggal).",
        explanation: "Subjek adalah Hasan (kata ganti هُوَ / dia laki-laki tunggal), maka menggunakan bentuk dasar لَيْسَ.",
        clue: "Subjek adalah laki-laki tunggal orang ketiga (هُوَ / dia)."
      },
      {
        sentence: "أَنَا ... بِمُتَأَخِّرٍ",
        subject: "Saya (أَنَا)",
        dhomir: "Saya (أَنَا)",
        options: ["لَيْسَ", "لَسْتَ", "لَسْتُ", "لَسْنَا"],
        correctIndex: 2,
        target: "لَسْتُ",
        hint: "Subjek adalah saya (أَنَا / orang pertama tunggal).",
        explanation: "Subjek adalah saya (أَنَا), maka kata penegasannya menggunakan akhiran tu dhommah (لَسْتُ).",
        clue: "Kata ganti أَنَا (saya) berpasangan dengan bentuk yang berakhiran 'tu' (تُ)."
      },
      {
        sentence: "أَنْتَ ... بِكَسْلَانَ",
        subject: "Kamu Laki-laki (أَنْتَ)",
        dhomir: "Kamu Laki-laki (أَنْتَ)",
        options: ["لَيْسَ", "لَسْتَ", "لَسْتِ", "لَسْتُمْ"],
        correctIndex: 1,
        target: "لَسْتَ",
        hint: "Subjek adalah kamu laki-laki tunggal (أَنْتَ).",
        explanation: "Subjek adalah kamu laki-laki tunggal (أَنْتَ), maka berpasangan dengan akhiran fathah (لَسْتَ).",
        clue: "Perhatikan harakat pada dhomir أَنْتَ (fathah), bentuk laisa mengikutinya."
      },
      {
        sentence: "نَحْنُ ... بِمُقَصِّرِينَ",
        subject: "Kami / Kita (نَحْنُ)",
        dhomir: "Kami / Kita (نَحْنُ)",
        options: ["لَسْنَا", "لَيْسُوا", "لَسْتُنَّ", "لَيْسَ"],
        correctIndex: 0,
        target: "لَسْنَا",
        hint: "Subjek adalah kami / kita (نَحْنُ / mutakallim ma'al ghair).",
        explanation: "Subjek adalah kami / kita (نَحْنُ), maka berpasangan dengan akhiran nun alif (لَسْنَا).",
        clue: "Kata ganti نَحْنُ berpasangan dengan bentuk kata yang berakhiran 'na' panjang (نَا)."
      }
    ]
  },

  // Kamus Kosakata (Mufrodat) Bahasa Arab Kelas 6 Lengkap
  mufrodatDictionary: [
    // Pelajaran 1: مَدْرَسَتِيْ (Sekolahku)
    { chapter: 1, category: "b-arab", ar: "مَدْرَسَةٌ", tr: "madrasatun", id: "Sekolah" },
    { chapter: 1, category: "b-arab", ar: "مَدْرَسَتِي", tr: "madrasatî", id: "Sekolahku" },
    { chapter: 1, category: "b-arab", ar: "قَرْيَةٌ", tr: "qaryatun", id: "Desa" },
    { chapter: 1, category: "b-arab", ar: "كَبِيرَةٌ", tr: "kabîratun", id: "Besar" },
    { chapter: 1, category: "b-arab", ar: "وَاسِعَةٌ", tr: "wâsi'atun", id: "Luas" },
    { chapter: 1, category: "b-arab", ar: "تَلَامِيذُ", tr: "talâmîdzu", id: "Murid-murid" },
    { chapter: 1, category: "b-arab", ar: "فَصْلٌ", tr: "fashlun", id: "Ruang Kelas" },
    { chapter: 1, category: "b-arab", ar: "فُصُولٌ", tr: "fushûlun", id: "Kelas-kelas (Jamak)" },
    { chapter: 1, category: "b-arab", ar: "سَبُّورَةٌ", tr: "sabbûratun", id: "Papan Tulis" },
    { chapter: 1, category: "b-arab", ar: "خِزَانَةٌ", tr: "khizânatun", id: "Lemari" },
    { chapter: 1, category: "b-arab", ar: "مَكْتَبٌ", tr: "maktabun", id: "Meja Belajar" },
    { chapter: 1, category: "b-arab", ar: "مَكَاتِبُ", tr: "makâtibu", id: "Meja-meja (Jamak)" },
    { chapter: 1, category: "b-arab", ar: "كُرْسِيٌّ", tr: "kursiyyun", id: "Kursi" },
    { chapter: 1, category: "b-arab", ar: "كَرَاسِيُّ", tr: "karâsiyyu", id: "Kursi-kursi (Jamak)" },
    { chapter: 1, category: "b-arab", ar: "وَلَدٌ", tr: "waladun", id: "Anak Laki-laki" },
    { chapter: 1, category: "b-arab", ar: "أَوْلَادٌ", tr: "awlâdun", id: "Anak-anak Laki-laki (Jamak)" },
    { chapter: 1, category: "b-arab", ar: "بِنْتٌ", tr: "bintun", id: "Anak Perempuan" },
    { chapter: 1, category: "b-arab", ar: "بَنَاتٌ", tr: "banâtun", id: "Anak-anak Perempuan (Jamak)" },
    { chapter: 1, category: "b-arab", ar: "سِتَّةُ فُصُولٍ", tr: "sittatu fushûlin", id: "Enam Kelas" },
    { chapter: 1, category: "b-arab", ar: "عَشَرَةُ مَكَاتِبَ", tr: "'asyrata makâtiba", id: "Sepuluh Meja" },
    { chapter: 1, category: "b-arab", ar: "عِشْرُونَ كُرْسِيًّا", tr: "'isyrûna kursiyyan", id: "Dua Puluh Kursi" },

    // Pelajaran 2: اَلْأَعْدَادُ ١١-٢٠ (Bilangan 11-20 & Benda)
    { chapter: 2, category: "b-arab", ar: "سَاعَةٌ", tr: "sâ'atun", id: "Jam Dinding / Arloji" },
    { chapter: 2, category: "b-arab", ar: "مِسْطَرَةٌ", tr: "mistharatun", id: "Penggaris" },
    { chapter: 2, category: "b-arab", ar: "جَوَّالٌ", tr: "jawwâlun", id: "Handphone / Telepon Seluler" },
    { chapter: 2, category: "b-arab", ar: "قَلَمٌ", tr: "qalamun", id: "Pulpen / Pena" },
    { chapter: 2, category: "b-arab", ar: "كِتَابٌ", tr: "kitâbun", id: "Buku Paket / Kitab" },
    { chapter: 2, category: "b-arab", ar: "حَقِيبَةٌ", tr: "haqîbatun", id: "Tas Sekolah" },
    { chapter: 2, category: "b-arab", ar: "رَقْمٌ", tr: "raqmun", id: "Nomor / Angka" },
    { chapter: 2, category: "b-arab", ar: "أَحَدَ عَشَرَ", tr: "ahada 'asyara", id: "Sebelas (11)" },
    { chapter: 2, category: "b-arab", ar: "اِثْنَا عَشَرَ", tr: "itsnâ 'asyara", id: "Dua Belas (12)" },
    { chapter: 2, category: "b-arab", ar: "ثَلَاثَةَ عَشَرَ", tr: "tsalâtsata 'asyara", id: "Tiga Belas (13)" },
    { chapter: 2, category: "b-arab", ar: "أَرْبَعَةَ عَشَرَ", tr: "arba'ata 'asyara", id: "Empat Belas (14)" },
    { chapter: 2, category: "b-arab", ar: "خَمْسَةَ عَشَرَ", tr: "khamsata 'asyara", id: "Lima Belas (15)" },
    { chapter: 2, category: "b-arab", ar: "سِتَّةَ عَشَرَ", tr: "sittata 'asyara", id: "Enam Belas (16)" },
    { chapter: 2, category: "b-arab", ar: "سَبْعَةَ عَشَرَ", tr: "sab'ata 'asyara", id: "Tujuh Belas (17)" },
    { chapter: 2, category: "b-arab", ar: "ثَمَانِيَةَ عَشَرَ", tr: "tsamâniyata 'asyara", id: "Delapan Belas (18)" },
    { chapter: 2, category: "b-arab", ar: "تِسْعَةَ عَشَرَ", tr: "tis'ata 'asyara", id: "Sembilan Belas (19)" },
    { chapter: 2, category: "b-arab", ar: "عِشْرُونَ", tr: "'isyrûna", id: "Dua Puluh (20)" },

    // Pelajaran 3: أُسْرَتِيْ وَقَاعِدَةُ لَيْسَ (Keluargaku & Kaidah Laisa)
    { chapter: 3, category: "b-arab", ar: "أُسْرَةٌ", tr: "usratun", id: "Keluarga" },
    { chapter: 3, category: "b-arab", ar: "أُسْرَتِي", tr: "usratî", id: "Keluargaku" },
    { chapter: 3, category: "b-arab", ar: "أَبٌ", tr: "abun", id: "Ayah" },
    { chapter: 3, category: "b-arab", ar: "أُمٌّ", tr: "ummun", id: "Ibu" },
    { chapter: 3, category: "b-arab", ar: "أَخٌ كَبِيرٌ", tr: "akhun kabîrun", id: "Kakak Laki-laki" },
    { chapter: 3, category: "b-arab", ar: "أُخْتٌ صَغِيرَةٌ", tr: "ukhtun shaghîratun", id: "Adik Perempuan" },
    { chapter: 3, category: "b-arab", ar: "جَدٌّ", tr: "jaddun", id: "Kakek" },
    { chapter: 3, category: "b-arab", ar: "جَدَّةٌ", tr: "jaddatun", id: "Nenek" },
    { chapter: 3, category: "b-arab", ar: "طَبِيبٌ", tr: "thabîbun", id: "Dokter" },
    { chapter: 3, category: "b-arab", ar: "مُدَرِّسٌ", tr: "mudarrisun", id: "Guru" },
    { chapter: 3, category: "b-arab", ar: "رَبَّةُ الْبَيْتِ", tr: "rabbatu al-bayti", id: "Ibu Rumah Tangga" },
    { chapter: 3, category: "b-arab", ar: "خَادِمٌ", tr: "khâdimun", id: "Pelayan / Pembantu" },
    { chapter: 3, category: "b-arab", ar: "لَيْسَ", tr: "laisa", id: "Tidak / Bukan (Dhomir Huwa)" },
    { chapter: 3, category: "b-arab", ar: "لَيْسَتْ", tr: "laisat", id: "Tidak / Bukan (Dhomir Hiya)" },
    { chapter: 3, category: "b-arab", ar: "لَسْتَ", tr: "lasta", id: "Tidak / Bukan (Dhomir Anta)" },
    { chapter: 3, category: "b-arab", ar: "لَسْتِ", tr: "lasti", id: "Tidak / Bukan (Dhomir Anti)" },
    { chapter: 3, category: "b-arab", ar: "لَسْتُ", tr: "lastu", id: "Tidak / Bukan (Dhomir Ana)" },
    { chapter: 3, category: "b-arab", ar: "لَسْنَا", tr: "lasnâ", id: "Tidak / Bukan (Dhomir Nahnu)" },
    { chapter: 3, category: "b-arab", ar: "مَرِيضٌ", tr: "marîdhun", id: "Sakit" },
    { chapter: 3, category: "b-arab", ar: "كَسْلَانُ", tr: "kaslânu", id: "Malas" },
    { chapter: 3, category: "b-arab", ar: "مُهْمِلٌ", tr: "muhmilun", id: "Lalai / Menyepelekan" }
  ]
};
