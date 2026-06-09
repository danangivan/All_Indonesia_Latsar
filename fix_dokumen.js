const fs = require('fs');
const path = require('path');
const transPath = path.join(__dirname, 'app', 'lib', 'translations.ts');
let transContent = fs.readFileSync(transPath, 'utf8');

// I will append `dokumenDimiliki` directly into the `id: {`, `en: {`, etc blocks.
const repairs = {
  id: `    dokumenDimiliki: "Pilih Dokumen Yang Anda Miliki",`,
  en: `    dokumenDimiliki: "Select Owned Document",`,
  ja: `    dokumenDimiliki: "所持している書類を選択",`,
  zh: `    dokumenDimiliki: "选择持有的文件",`,
  ar: `    dokumenDimiliki: "اختر المستند المملوك",`,
  ru: `    dokumenDimiliki: "Выберите имеющийся документ",`,
  ko: `    dokumenDimiliki: "소지한 문서 선택",`
};

for (const lang of Object.keys(repairs)) {
  // if it's missing, add it.
  const marker = new RegExp("(" + lang + ": \\{)");
  // First, check if `dokumenDimiliki` is already present. If so, remove it to avoid duplicates.
  // Actually, we'll just replace `dokumenDimiliki: "[^"]*",?\n` with empty string globally within that block? No, just globally remove it all first.
  const re = new RegExp('dokumenDimiliki: "[^"]*",?\\n?', 'g');
  transContent = transContent.replace(re, '');

  if (transContent.match(marker)) {
    transContent = transContent.replace(marker, "$1\n" + repairs[lang] + "\n");
  }
}

fs.writeFileSync(transPath, transContent, 'utf8');
console.log("Restored dokumenDimiliki.");
