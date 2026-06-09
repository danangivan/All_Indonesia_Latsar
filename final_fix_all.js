const fs = require('fs');
const path = require('path');

// 1. UPDATE translations.ts
const transPath = path.join(__dirname, 'app', 'lib', 'translations.ts');
let transContent = fs.readFileSync(transPath, 'utf8');

const additions = {
  id: `    karantinaKelinci: "KELINCI",
    karantinaBurung: "BURUNG",
    karantinaIkanHias: "IKAN HIAS",
    karantinaIkanKonsumsi: "IKAN KONSUMSI",
    karantinaUdang: "UDANG",
    karantinaKerang: "KERANG",
    karantinaIkanLainnya: "IKAN LAINNYA",
    karantinaBuah: "BUAH",
    karantinaSayur: "SAYUR",
    karantinaKayu: "KAYU",
    karantinaProdukOlahan: "PRODUK OLAHAN",
    karantinaProdukBeku: "PRODUK BEKU",
    karantinaHidup: "HIDUP",
    karantinaSampai2Ekor: "SAMPAI DENGAN 2 EKOR",
    karantinaLebih2Ekor: "LEBIH DARI 2 EKOR",
    karantinaSampai2L: "SAMPAI DENGAN 2 L",
    karantinaLebih2L: "LEBIH DARI 2 L",`,
  en: `    karantinaKelinci: "RABBIT",
    karantinaBurung: "BIRD",
    karantinaIkanHias: "ORNAMENTAL FISH",
    karantinaIkanKonsumsi: "CONSUMPTION FISH",
    karantinaUdang: "SHRIMP",
    karantinaKerang: "SHELLFISH",
    karantinaIkanLainnya: "OTHER FISH",
    karantinaBuah: "FRUITS",
    karantinaSayur: "VEGETABLES",
    karantinaKayu: "WOOD",
    karantinaProdukOlahan: "PROCESSED PRODUCTS",
    karantinaProdukBeku: "FROZEN PRODUCTS",
    karantinaHidup: "LIVE",
    karantinaSampai2Ekor: "UP TO 2 PCS",
    karantinaLebih2Ekor: "MORE THAN 2 PCS",
    karantinaSampai2L: "UP TO 2 L",
    karantinaLebih2L: "MORE THAN 2 L",`,
  ja: `    karantinaKelinci: "ウサギ",
    karantinaBurung: "鳥",
    karantinaIkanHias: "観賞魚",
    karantinaIkanKonsumsi: "食用魚",
    karantinaUdang: "エビ",
    karantinaKerang: "貝類",
    karantinaIkanLainnya: "その他の魚",
    karantinaBuah: "果物",
    karantinaSayur: "野菜",
    karantinaKayu: "木材",
    karantinaProdukOlahan: "加工品",
    karantinaProdukBeku: "冷凍食品",
    karantinaHidup: "生体",
    karantinaSampai2Ekor: "2匹まで",
    karantinaLebih2Ekor: "2匹以上",
    karantinaSampai2L: "2Lまで",
    karantinaLebih2L: "2L以上",`,
  zh: `    karantinaKelinci: "兔子",
    karantinaBurung: "鸟",
    karantinaIkanHias: "观赏鱼",
    karantinaIkanKonsumsi: "食用鱼",
    karantinaUdang: "虾",
    karantinaKerang: "贝类",
    karantinaIkanLainnya: "其他鱼类",
    karantinaBuah: "水果",
    karantinaSayur: "蔬菜",
    karantinaKayu: "木材",
    karantinaProdukOlahan: "加工产品",
    karantinaProdukBeku: "冷冻产品",
    karantinaHidup: "活体",
    karantinaSampai2Ekor: "最多2只",
    karantinaLebih2Ekor: "超过2只",
    karantinaSampai2L: "最多2升",
    karantinaLebih2L: "超过2升",`,
  ar: `    karantinaKelinci: "أرنب",
    karantinaBurung: "طائر",
    karantinaIkanHias: "أسماك الزينة",
    karantinaIkanKonsumsi: "أسماك الاستهلاك",
    karantinaUdang: "جمبري",
    karantinaKerang: "محار",
    karantinaIkanLainnya: "أسماك أخرى",
    karantinaBuah: "فواكه",
    karantinaSayur: "خضروات",
    karantinaKayu: "خشب",
    karantinaProdukOlahan: "منتجات مصنعة",
    karantinaProdukBeku: "منتجات مجمدة",
    karantinaHidup: "حي",
    karantinaSampai2Ekor: "حتى 2 قطعة",
    karantinaLebih2Ekor: "أكثر من 2 قطعة",
    karantinaSampai2L: "حتى 2 لتر",
    karantinaLebih2L: "أكثر من 2 لتر",`,
  ru: `    karantinaKelinci: "КРОЛИК",
    karantinaBurung: "ПТИЦА",
    karantinaIkanHias: "ДЕКОРАТИВНАЯ РЫБА",
    karantinaIkanKonsumsi: "РЫБА ДЛЯ ПОТРЕБЛЕНИЯ",
    karantinaUdang: "КРЕВЕТКИ",
    karantinaKerang: "МОЛЛЮСКИ",
    karantinaIkanLainnya: "ДРУГАЯ РЫБА",
    karantinaBuah: "ФРУКТЫ",
    karantinaSayur: "ОВОЩИ",
    karantinaKayu: "ДЕРЕВО",
    karantinaProdukOlahan: "ПЕРЕРАБОТАННЫЕ ПРОДУКТЫ",
    karantinaProdukBeku: "ЗАМОРОЖЕННЫЕ ПРОДУКТЫ",
    karantinaHidup: "ЖИВЫЕ",
    karantinaSampai2Ekor: "ДО 2 ШТ",
    karantinaLebih2Ekor: "БОЛЕЕ 2 ШТ",
    karantinaSampai2L: "ДО 2 Л",
    karantinaLebih2L: "БОЛЕЕ 2 Л",`,
  ko: `    karantinaKelinci: "토끼",
    karantinaBurung: "새",
    karantinaIkanHias: "관상어",
    karantinaIkanKonsumsi: "식용 생선",
    karantinaUdang: "새우",
    karantinaKerang: "조개류",
    karantinaIkanLainnya: "기타 생선",
    karantinaBuah: "과일",
    karantinaSayur: "채소",
    karantinaKayu: "목재",
    karantinaProdukOlahan: "가공품",
    karantinaProdukBeku: "냉동 제품",
    karantinaHidup: "살아있는",
    karantinaSampai2Ekor: "최대 2마리",
    karantinaLebih2Ekor: "2마리 초과",
    karantinaSampai2L: "최대 2L",
    karantinaLebih2L: "2L 초과",`
};

for (const lang of Object.keys(additions)) {
  // Safe replacement
  transContent = transContent.replace(lang + ": {", lang + ": {\n" + additions[lang]);
}

fs.writeFileSync(transPath, transContent, 'utf8');

// 2. UPDATE page.tsx
const pagePath = path.join(__dirname, 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

const replacements = {
  'label: "SAMPAI DENGAN 2 EKOR"': 'label: t("karantinaSampai2Ekor") || "SAMPAI DENGAN 2 EKOR"',
  'label: "LEBIH DARI 2 EKOR"': 'label: t("karantinaLebih2Ekor") || "LEBIH DARI 2 EKOR"',
  'label: "SAMPAI DENGAN 2 L"': 'label: t("karantinaSampai2L") || "SAMPAI DENGAN 2 L"',
  'label: "LEBIH DARI 2 L"': 'label: t("karantinaLebih2L") || "LEBIH DARI 2 L"'
};

for (const [search, replace] of Object.entries(replacements)) {
  pageContent = pageContent.split(search).join(replace);
}

fs.writeFileSync(pagePath, pageContent, 'utf8');
console.log("Translations added properly.");
