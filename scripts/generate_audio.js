const https = require('https');
const fs = require('fs');
const path = require('path');

// Mock browser window for data.js
global.window = global;
require('../js/data.js');

const app = window.APP_DATA;
const audioDir = path.join(__dirname, '..', 'assets', 'audio');
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

// Koleksi semua teks audio
const items = [];
const textToId = new Map();

function cleanText(t) {
  if (!t) return '';
  return t.replace(/[،؟!.؛:\"']/g, '').trim();
}

// 1. Sentences
app.chapters.forEach(ch => {
  ch.story.sentences.forEach(s => {
    const raw = s.audioText || s.arabic;
    items.push({ id: s.id, text: raw, type: 'sentence' });
  });
});

// 2. Numbers (Bab 2)
if (app.chapters[1] && app.chapters[1].numberChart) {
  app.chapters[1].numberChart.forEach((n, idx) => {
    items.push({ id: `adad-${n.num || (11 + idx)}`, text: n.arText, type: 'number' });
  });
}

// 3. Laisa Examples (Bab 3)
if (app.chapters[2] && app.chapters[2].laisaTable) {
  app.chapters[2].laisaTable.forEach((l, idx) => {
    items.push({ id: `laisa-${idx + 1}`, text: l.example, type: 'laisa' });
  });
}

// 4. Story Words & Mufrodat
let wordCounter = 1;
const uniqueWords = new Set();

app.chapters.forEach(ch => {
  ch.story.sentences.forEach(s => {
    s.words.forEach(w => {
      const c = cleanText(w.ar);
      if (c && !uniqueWords.has(c)) {
        uniqueWords.add(c);
        items.push({ id: `w_${wordCounter++}`, text: c, type: 'word' });
      }
    });
  });
});

app.mufrodatDictionary.forEach(m => {
  const c = cleanText(m.ar);
  if (c && !uniqueWords.has(c)) {
    uniqueWords.add(c);
    items.push({ id: `w_${wordCounter++}`, text: c, type: 'word' });
  }
});

console.log(`Total audio items to download: ${items.length}`);

// Download helper with retry
function downloadAudio(item) {
  return new Promise((resolve) => {
    const filePath = path.join(audioDir, `${item.id}.mp3`);
    
    // Jika sudah ada file dan ukurannya > 1000 bytes, lewati
    if (fs.existsSync(filePath) && fs.statSync(filePath).size > 1000) {
      // console.log(`Skipping existing: ${item.id}`);
      return resolve(true);
    }

    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=ar&client=tw-ob&q=${encodeURIComponent(item.text)}`;

    const req = https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.warn(`Failed ${item.id} (Status ${res.statusCode}): ${item.text}`);
        return resolve(false);
      }

      const file = fs.createWriteStream(filePath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(true);
      });
      file.on('error', (err) => {
        console.warn(`File write error for ${item.id}:`, err);
        resolve(false);
      });
    });

    req.on('error', (err) => {
      console.warn(`Request error for ${item.id}:`, err.message);
      resolve(false);
    });

    req.setTimeout(10000, () => {
      req.destroy();
      console.warn(`Timeout for ${item.id}`);
      resolve(false);
    });
  });
}

async function run() {
  let successCount = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const ok = await downloadAudio(item);
    if (ok) successCount++;
    if ((i + 1) % 15 === 0 || i === items.length - 1) {
      console.log(`Progress: ${i + 1}/${items.length} (${successCount} succeeded)`);
    }
    // Polite delay
    await new Promise(r => setTimeout(r, 120));
  }

  // Buat audio-manifest.js
  const manifest = {};
  items.forEach(item => {
    const normalizedKey = cleanText(item.text);
    manifest[normalizedKey] = `./assets/audio/${item.id}.mp3`;
    // Simpan juga versi raw jika berbeda
    const rawKey = item.text.trim();
    if (rawKey !== normalizedKey) {
      manifest[rawKey] = `./assets/audio/${item.id}.mp3`;
    }
  });

  const manifestContent = `/**
 * AUDIO MANIFEST: Pemetaan teks bahasa Arab ke file rekaman audio MP3 lokal
 * Memastikan 100% otomatis bersuara di SEMUA jenis HP/tablet/laptop tanpa perlu setting apapun!
 */
window.AUDIO_MANIFEST = ${JSON.stringify(manifest, null, 2)};
`;

  fs.writeFileSync(path.join(__dirname, '..', 'js', 'audio-manifest.js'), manifestContent, 'utf8');
  console.log('Successfully generated js/audio-manifest.js and downloaded audio files!');
}

run();
