const fs = require('fs');
const path = require('path');

const transPath = path.join(__dirname, 'app', 'lib', 'translations.ts');
let transContent = fs.readFileSync(transPath, 'utf8');

transContent = transContent.replace(/\{\\n/g, '{\n');

fs.writeFileSync(transPath, transContent, 'utf8');
