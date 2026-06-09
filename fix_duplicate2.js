const fs = require('fs');
const path = require('path');
const transPath = path.join(__dirname, 'app', 'lib', 'translations.ts');
let transContent = fs.readFileSync(transPath, 'utf8');

// The original ones were probably not exactly `dokumenDimiliki: "[^"]*",\n` but maybe had different endings or were `dokumenDimiliki: "...",\n`
// Let's replace the duplicates by removing `dokumenDimiliki: "[^"]+",\n` only if there's a duplicate.
// We can just use a regex that matches `dokumenDimiliki` and replaces it with empty string, but we only want to do it for AR, RU, KO.
transContent = transContent.replace(/dokumenDimiliki: "المستند المملوك",\n/, ''); // AR
transContent = transContent.replace(/dokumenDimiliki: "Имеющийся документ",\n/, ''); // RU
transContent = transContent.replace(/dokumenDimiliki: "소지한 문서",\n/, ''); // KO

fs.writeFileSync(transPath, transContent, 'utf8');
