const fs = require('fs');
let content = fs.readFileSync('app/lib/translations.ts', 'utf8');

// There are duplicates. The easiest fix is to find `pilihTanggalKedatangan: "...",` immediately followed by `opt_quar_hewan:` and just remove the `pilihTanggalKedatangan:` line in the appended block.
content = content.replace(/pilihTanggalKedatangan:\s*"[^"]*",\s*opt_quar_hewan:/g, 'opt_quar_hewan:');

fs.writeFileSync('app/lib/translations.ts', content, 'utf8');
console.log('Duplicates fixed!');
