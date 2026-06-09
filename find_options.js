const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

const matches = pageContent.matchAll(/options=\{([\s\S]*?)\}/g);
for (const match of matches) {
  if (match[1].includes('value:')) {
    console.log("--- Found options block ---");
    console.log(match[1].substring(0, 300) + (match[1].length > 300 ? "..." : ""));
  }
}
