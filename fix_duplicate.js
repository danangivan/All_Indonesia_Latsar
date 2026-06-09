const fs = require('fs');
const path = require('path');
const transPath = path.join(__dirname, 'app', 'lib', 'translations.ts');
let transContent = fs.readFileSync(transPath, 'utf8');

// I inserted it as `dokumenDimiliki: "Pilih Dokumen Yang Anda Miliki",` and `dokumenDimiliki: "Select Owned Document",` etc.
// But earlier I had `dokumenDimiliki: "Dokumen yang dimiliki",` etc.
// I will just remove the FIRST occurrence in each block.
transContent = transContent.replace(/dokumenDimiliki: "[^"]*",\n/, ''); // ID
transContent = transContent.replace(/dokumenDimiliki: "[^"]*",\n/, ''); // EN
transContent = transContent.replace(/dokumenDimiliki: "[^"]*",\n/, ''); // JA
transContent = transContent.replace(/dokumenDimiliki: "[^"]*",\n/, ''); // ZH
transContent = transContent.replace(/dokumenDimiliki: "[^"]*",\n/, ''); // AR
transContent = transContent.replace(/dokumenDimiliki: "[^"]*",\n/, ''); // RU
transContent = transContent.replace(/dokumenDimiliki: "[^"]*",\n/, ''); // KO

fs.writeFileSync(transPath, transContent, 'utf8');
console.log("Removed duplicate keys.");
