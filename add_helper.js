const fs = require('fs');
const path = require('path');
const pagePath = path.join(__dirname, 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

const helperFunc = `
const getCommodityLabel = (value: string, t: any) => {
  const map: Record<string, string> = {
    "ANJING": t("karantinaAnjing") || "ANJING",
    "KUCING": t("karantinaKucing") || "KUCING",
    "KELINCI": t("karantinaKelinci") || "KELINCI",
    "BURUNG": t("karantinaBurung") || "BURUNG",
    "REPTIL": t("karantinaReptil") || "REPTIL",
    "HEWAN_LAINNYA": t("karantinaHewanLainnya") || "HEWAN LAINNYA",
    "IKAN_HIAS": t("karantinaIkanHias") || "IKAN HIAS",
    "IKAN_KONSUMSI": t("karantinaIkanKonsumsi") || "IKAN KONSUMSI",
    "UDANG": t("karantinaUdang") || "UDANG",
    "KERANG": t("karantinaKerang") || "KERANG",
    "IKAN_LAINNYA": t("karantinaIkanLainnya") || "IKAN LAINNYA",
    "BUAH": t("karantinaBuah") || "BUAH",
    "SAYUR": t("karantinaSayur") || "SAYUR",
    "BENIH": t("karantinaBenih") || "BENIH",
    "TANAMAN_HIAS": t("karantinaTanamanHias") || "TANAMAN HIAS",
    "KAYU": t("karantinaKayu") || "KAYU",
    "TUMBUHAN_LAINNYA": t("karantinaTumbuhanLainnya") || "TUMBUHAN LAINNYA",
    "PRODUK_SEGAR": t("karantinaProdukSegar") || "PRODUK SEGAR",
    "PRODUK_OLAHAN": t("karantinaProdukOlahan") || "PRODUK OLAHAN",
    "PRODUK_BEKU": t("karantinaProdukBeku") || "PRODUK BEKU",
    "HIDUP": t("karantinaHidup") || "HIDUP"
  };
  return map[value] || value.replace(/_/g, " ");
};

export default function Home() {`;

pageContent = pageContent.replace('export default function Home() {', helperFunc);

fs.writeFileSync(pagePath, pageContent, 'utf8');
console.log("Helper function added.");
