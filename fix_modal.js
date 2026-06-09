const fs = require('fs');
const path = require('path');

// 1. UPDATE translations.ts
const transPath = path.join(__dirname, 'app', 'lib', 'translations.ts');
let transContent = fs.readFileSync(transPath, 'utf8');

const modalTranslations = {
  id: `    modalDetailBarang: "Masukkan detail barang yang Anda bawa ke Indonesia.",
    uraianBarang: "Uraian Barang",
    phUraianBarang: "Masukkan Uraian Barang",
    jumlah: "Jumlah",
    phJumlah: "Masukkan Jumlah",
    jenisMataUang: "Jenis Mata Uang",
    nilai: "Nilai",
    phNilai: "Masukkan Nilai",
    batal: "Batal",
    simpan: "Simpan",`,
  en: `    modalDetailBarang: "Enter details of the goods you bring to Indonesia.",
    uraianBarang: "Description of Goods",
    phUraianBarang: "Enter Description of Goods",
    jumlah: "Quantity",
    phJumlah: "Enter Quantity",
    jenisMataUang: "Currency",
    nilai: "Value",
    phNilai: "Enter Value",
    batal: "Cancel",
    simpan: "Save",`,
  ja: `    modalDetailBarang: "インドネシアに持ち込む物品の詳細を入力してください。",
    uraianBarang: "物品の説明",
    phUraianBarang: "物品の説明を入力",
    jumlah: "数量",
    phJumlah: "数量を入力",
    jenisMataUang: "通貨",
    nilai: "金額",
    phNilai: "金額を入力",
    batal: "キャンセル",
    simpan: "保存",`,
  zh: `    modalDetailBarang: "输入您带入印尼的物品详情。",
    uraianBarang: "物品描述",
    phUraianBarang: "输入物品描述",
    jumlah: "数量",
    phJumlah: "输入数量",
    jenisMataUang: "货币",
    nilai: "价值",
    phNilai: "输入价值",
    batal: "取消",
    simpan: "保存",`,
  ar: `    modalDetailBarang: "أدخل تفاصيل البضائع التي تحضرها إلى إندونيسيا.",
    uraianBarang: "وصف البضائع",
    phUraianBarang: "أدخل وصف البضائع",
    jumlah: "الكمية",
    phJumlah: "أدخل الكمية",
    jenisMataUang: "العملة",
    nilai: "القيمة",
    phNilai: "أدخل القيمة",
    batal: "إلغاء",
    simpan: "حفظ",`,
  ru: `    modalDetailBarang: "Введите данные о товарах, которые вы ввозите в Индонезию.",
    uraianBarang: "Описание товаров",
    phUraianBarang: "Введите описание",
    jumlah: "Количество",
    phJumlah: "Введите количество",
    jenisMataUang: "Валюта",
    nilai: "Стоимость",
    phNilai: "Введите стоимость",
    batal: "Отмена",
    simpan: "Сохранить",`,
  ko: `    modalDetailBarang: "인도네시아로 반입하는 물품의 세부 정보를 입력하세요.",
    uraianBarang: "물품 설명",
    phUraianBarang: "물품 설명 입력",
    jumlah: "수량",
    phJumlah: "수량 입력",
    jenisMataUang: "통화",
    nilai: "가치",
    phNilai: "가치 입력",
    batal: "취소",
    simpan: "저장",`
};

for (const lang of Object.keys(modalTranslations)) {
  transContent = transContent.replace(lang + ": {", lang + ": {\n" + modalTranslations[lang]);
}

fs.writeFileSync(transPath, transContent, 'utf8');

// 2. UPDATE page.tsx
const pagePath = path.join(__dirname, 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// Add helper function
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
    "TUMBUHAN_LAINNYA": t("karantinaTumbuhanLainnya") || "TUMBUHAN LAINNYA"
  };
  return map[value] || value.replace(/_/g, " ");
};

export default function Page() {`;
pageContent = pageContent.replace('export default function Page() {', helperFunc);

// Replace tag render
pageContent = pageContent.replace('{commodity.replace(/_/g, " ")}', '{getCommodityLabel(commodity, t)}');

// Replace modal texts
pageContent = pageContent.replace('Masukkan detail barang yang Anda bawa ke Indonesia.', '{t("modalDetailBarang") || "Masukkan detail barang yang Anda bawa ke Indonesia."}');
pageContent = pageContent.replace('label="Uraian Barang"', 'label={t("uraianBarang") || "Uraian Barang"}');
pageContent = pageContent.replace('placeholder="Masukkan Uraian Barang"', 'placeholder={t("phUraianBarang") || "Masukkan Uraian Barang"}');
pageContent = pageContent.replace('label="Jumlah"', 'label={t("jumlah") || "Jumlah"}');
pageContent = pageContent.replace('placeholder="Masukkan Jumlah"', 'placeholder={t("phJumlah") || "Masukkan Jumlah"}');
pageContent = pageContent.replace('label="Jenis Mata Uang"', 'label={t("jenisMataUang") || "Jenis Mata Uang"}');
pageContent = pageContent.replace('label="Nilai"', 'label={t("nilai") || "Nilai"}');
pageContent = pageContent.replace('placeholder="Masukkan Nilai"', 'placeholder={t("phNilai") || "Masukkan Nilai"}');

// Replace exactly the Batal and Simpan inside the modal.
// They are around lines 3235 and 3279, between >Batal< and >Simpan<
pageContent = pageContent.replace(/>\s*Batal\s*</g, '>{t("batal") || "Batal"}<');
pageContent = pageContent.replace(/>\s*Simpan\s*</g, '>{t("simpan") || "Simpan"}<');

fs.writeFileSync(pagePath, pageContent, 'utf8');
console.log("Modal texts and tags updated.");
