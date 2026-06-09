const fs = require('fs');
const path = require('path');
const pagePath = path.join(__dirname, 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

const replacements = {
  'label: "KELINCI"': 'label: t("karantinaKelinci") || "KELINCI"',
  'label: "BURUNG"': 'label: t("karantinaBurung") || "BURUNG"',
  'label: "IKAN HIAS"': 'label: t("karantinaIkanHias") || "IKAN HIAS"',
  'label: "IKAN KONSUMSI"': 'label: t("karantinaIkanKonsumsi") || "IKAN KONSUMSI"',
  'label: "UDANG"': 'label: t("karantinaUdang") || "UDANG"',
  'label: "KERANG"': 'label: t("karantinaKerang") || "KERANG"',
  'label: "IKAN LAINNYA"': 'label: t("karantinaIkanLainnya") || "IKAN LAINNYA"',
  'label: "BUAH"': 'label: t("karantinaBuah") || "BUAH"',
  'label: "SAYUR"': 'label: t("karantinaSayur") || "SAYUR"',
  'label: "KAYU"': 'label: t("karantinaKayu") || "KAYU"',
  'label: "PRODUK OLAHAN"': 'label: t("karantinaProdukOlahan") || "PRODUK OLAHAN"',
  'label: "PRODUK BEKU"': 'label: t("karantinaProdukBeku") || "PRODUK BEKU"',
  'label: "HIDUP"': 'label: t("karantinaHidup") || "HIDUP"'
};

for (const [search, replace] of Object.entries(replacements)) {
  // Use split/join to guarantee global replacement without regex escaping issues
  pageContent = pageContent.split(search).join(replace);
}

fs.writeFileSync(pagePath, pageContent, 'utf8');
console.log("Labels successfully updated.");
