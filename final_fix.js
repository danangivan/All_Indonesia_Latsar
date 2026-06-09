const fs = require('fs');
const path = require('path');

// 1. UPDATE translations.ts
const transPath = path.join(__dirname, 'app', 'lib', 'translations.ts');
let transContent = fs.readFileSync(transPath, 'utf8');

const repairs = {
  id: `    dokumenDimiliki: "Pilih Dokumen Yang Anda Miliki",
    air_komersial: "Penerbangan Komersial",
    air_pemerintah: "Penerbangan Pemerintah",
    air_carter: "Penerbangan Carter/Charter",
    ship_yacht: "Yacht",
    ship_feri: "Feri",
    ship_pesiar: "Kapal Pesiar",
    ship_kargo: "Kargo/Tanker",`,
  en: `    dokumenDimiliki: "Select Owned Document",
    air_komersial: "Commercial Flight",
    air_pemerintah: "Government Flight",
    air_carter: "Charter Flight",
    ship_yacht: "Yacht",
    ship_feri: "Ferry",
    ship_pesiar: "Cruise Ship",
    ship_kargo: "Cargo/Tanker",`,
  ja: `    dokumenDimiliki: "所持している書類を選択",
    air_komersial: "商用便",
    air_pemerintah: "政府便",
    air_carter: "チャーター便",
    ship_yacht: "ヨット",
    ship_feri: "フェリー",
    ship_pesiar: "クルーズ船",
    ship_kargo: "貨物船/タンカー",`,
  zh: `    dokumenDimiliki: "选择持有的文件",
    air_komersial: "商业航班",
    air_pemerintah: "政府航班",
    air_carter: "包机",
    ship_yacht: "游艇",
    ship_feri: "渡轮",
    ship_pesiar: "游轮",
    ship_kargo: "货船/油轮",`,
  ar: `    dokumenDimiliki: "اختر المستند المملوك",
    air_komersial: "رحلة تجارية",
    air_pemerintah: "رحلة حكومية",
    air_carter: "رحلة طيران عارض",
    ship_yacht: "يخت",
    ship_feri: "عبّارة",
    ship_pesiar: "سفينة سياحية",
    ship_kargo: "سفينة شحن/ناقلة",`,
  ru: `    dokumenDimiliki: "Выберите имеющийся документ",
    air_komersial: "Коммерческий рейс",
    air_pemerintah: "Правительственный рейс",
    air_carter: "Чартерный рейс",
    ship_yacht: "Яхта",
    ship_feri: "Паром",
    ship_pesiar: "Круизное судно",
    ship_kargo: "Грузовое судно/Танкер",`,
  ko: `    dokumenDimiliki: "소지한 문서 선택",
    air_komersial: "상업 항공편",
    air_pemerintah: "정부 항공편",
    air_carter: "전세기",
    ship_yacht: "요트",
    ship_feri: "페리",
    ship_pesiar: "유람선",
    ship_kargo: "화물선/유조선",`
};

for (const lang of Object.keys(repairs)) {
  // Replace missing translations directly
  transContent = transContent.replace(lang + ": {", lang + ": {\n" + repairs[lang]);
}

fs.writeFileSync(transPath, transContent, 'utf8');

// 2. UPDATE page.tsx
const pagePath = path.join(__dirname, 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// Add mapping for airTransportTypes
pageContent = pageContent.replace(/options=\{airTransportTypes\}/, 'options={airTransportTypes.map(opt => ({ ...opt, label: t("air_" + opt.value) || opt.label }))}');

// Add mapping for shipTypes
pageContent = pageContent.replace(/options=\{shipTypes\}/, 'options={shipTypes.map(opt => ({ ...opt, label: t("ship_" + opt.value) || opt.label }))}');

fs.writeFileSync(pagePath, pageContent, 'utf8');
console.log("Translations added.");
