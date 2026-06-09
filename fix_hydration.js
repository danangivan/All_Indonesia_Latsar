const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the invalid <p> structure with <div>
content = content.replace(
  /<p className="text-sm text-green-700 font-medium flex items-center gap-2">\s*<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">([\s\S]*?)<\/div>\s*Visa aktif ditemukan\s*<\/p>/g,
  '<div className="text-sm text-green-700 font-medium flex items-center gap-2">\n                                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">$1</div>\n                                  Visa aktif ditemukan\n                                </div>'
);

content = content.replace(
  /<p className="text-sm text-blue-700 font-medium flex items-center gap-2">\s*<div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">([\s\S]*?)<\/div>\s*Pengajuan visa selesai\s*<\/p>/g,
  '<div className="text-sm text-blue-700 font-medium flex items-center gap-2">\n                                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">$1</div>\n                                  Pengajuan visa selesai\n                                </div>'
);

content = content.replace(
  /<p className="text-sm text-green-700 font-medium flex items-center gap-2">\s*<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">([\s\S]*?)<\/div>\s*Dokumen valid\s*<\/p>/g,
  '<div className="text-sm text-green-700 font-medium flex items-center gap-2">\n                                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">$1</div>\n                                  Dokumen valid\n                                </div>'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Fixed hydration errors.");
