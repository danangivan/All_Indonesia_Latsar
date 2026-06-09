const fs = require('fs');
const path = require('path');
const transPath = path.join(__dirname, 'app', 'lib', 'translations.ts');
let transContent = fs.readFileSync(transPath, 'utf8');

const additionalKeys = {
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
    karantinaHidup: "HIDUP",`,
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
    karantinaHidup: "LIVE",`,
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
    karantinaHidup: "生体",`,
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
    karantinaHidup: "活体",`,
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
    karantinaHidup: "حي",`,
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
    karantinaHidup: "ЖИВЫЕ",`,
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
    karantinaHidup: "살아있는",`
};

for (const lang of Object.keys(additionalKeys)) {
  const marker = new RegExp("(" + lang + ": \\{)");
  if (transContent.match(marker)) {
    transContent = transContent.replace(marker, "$1\n" + additionalKeys[lang]);
  }
}

fs.writeFileSync(transPath, transContent, 'utf8');

const pagePath = path.join(__dirname, 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// Replace in page.tsx
pageContent = pageContent.replace(/label: "KELINCI"/g, 'label: t("karantinaKelinci") || "KELINCI"');
pageContent = pageContent.replace(/label: "BURUNG"/g, 'label: t("karantinaBurung") || "BURUNG"');
pageContent = pageContent.replace(/label: "IKAN HIAS"/g, 'label: t("karantinaIkanHias") || "IKAN HIAS"');
pageContent = pageContent.replace(/label: "IKAN KONSUMSI"/g, 'label: t("karantinaIkanKonsumsi") || "IKAN KONSUMSI"');
pageContent = pageContent.replace(/label: "UDANG"/g, 'label: t("karantinaUdang") || "UDANG"');
pageContent = pageContent.replace(/label: "KERANG"/g, 'label: t("karantinaKerang") || "KERANG"');
pageContent = pageContent.replace(/label: "IKAN LAINNYA"/g, 'label: t("karantinaIkanLainnya") || "IKAN LAINNYA"');
pageContent = pageContent.replace(/label: "BUAH"/g, 'label: t("karantinaBuah") || "BUAH"');
pageContent = pageContent.replace(/label: "SAYUR"/g, 'label: t("karantinaSayur") || "SAYUR"');
pageContent = pageContent.replace(/label: "KAYU"/g, 'label: t("karantinaKayu") || "KAYU"');
pageContent = pageContent.replace(/label: "PRODUK OLAHAN"/g, 'label: t("karantinaProdukOlahan") || "PRODUK OLAHAN"');
pageContent = pageContent.replace(/label: "PRODUK BEKU"/g, 'label: t("karantinaProdukBeku") || "PRODUK BEKU"');
pageContent = pageContent.replace(/label: "HIDUP"/g, 'label: t("karantinaHidup") || "HIDUP"');

fs.writeFileSync(pagePath, pageContent, 'utf8');
console.log("Secondary dropdowns mapped.");
