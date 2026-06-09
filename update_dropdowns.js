const fs = require('fs');
const path = require('path');

const transPath = path.join(__dirname, 'app', 'lib', 'translations.ts');
let transContent = fs.readFileSync(transPath, 'utf8');

const newKeys = {
  id: `    tp_liburan: "Liburan/Rekreasi",
    tp_pekerjaan: "Pekerjaan/Bisnis",
    tp_transit: "Fasilitas Transit",
    tp_medis: "Perawatan Medis",
    tp_agama: "Keagamaan",
    tp_pendidikan: "Pendidikan/Pelatihan",
    tp_konferensi: "Konferensi/Seminar",
    tp_olahraga: "Olahraga",
    tp_budaya: "Kegiatan Budaya/Seni",
    tp_keluarga: "Mengunjungi Keluarga",
    tp_lainnya: "Lainnya",
    acc_rumah: "Rumah",
    acc_hotel: "Hotel",
    acc_transit: "Transit",
    tanggalLainnya: "Tanggal Lainnya...",
    karantinaHewan: "HEWAN",
    karantinaIkan: "IKAN",
    karantinaTumbuhan: "TUMBUHAN",
    karantinaAnjing: "ANJING",
    karantinaKucing: "KUCING",
    karantinaMonyet: "MONYET",
    karantinaUnggas: "UNGGAS",
    karantinaBabi: "BABI",
    karantinaReptil: "REPTIL",
    karantinaHewanLainnya: "HEWAN LAINNYA",
    karantinaProdukSegar: "PRODUK SEGAR",
    karantinaBenih: "BENIH",
    karantinaBibit: "BIBIT",
    karantinaTanamanHias: "TANAMAN HIAS",
    karantinaBungaPotong: "BUNGA POTONG",
    karantinaBuahSayur: "BUAH & SAYUR",
    karantinaTumbuhanLainnya: "TUMBUHAN LAINNYA",
    karantinaSampai2Kg: "SAMPAI DENGAN 2 KG",
    karantinaLebih2Kg: "LEBIH DARI 2 KG",
    dokumenDimiliki: "Pilih Dokumen Yang Anda Miliki",`,
  en: `    tp_liburan: "Holiday/Recreation",
    tp_pekerjaan: "Work/Business",
    tp_transit: "Transit Facility",
    tp_medis: "Medical Treatment",
    tp_agama: "Religious",
    tp_pendidikan: "Education/Training",
    tp_konferensi: "Conference/Seminar",
    tp_olahraga: "Sports",
    tp_budaya: "Cultural/Art Activities",
    tp_keluarga: "Visiting Family",
    tp_lainnya: "Others",
    acc_rumah: "House",
    acc_hotel: "Hotel",
    acc_transit: "Transit",
    tanggalLainnya: "Other Dates...",
    karantinaHewan: "ANIMALS",
    karantinaIkan: "FISH",
    karantinaTumbuhan: "PLANTS",
    karantinaAnjing: "DOG",
    karantinaKucing: "CAT",
    karantinaMonyet: "MONKEY",
    karantinaUnggas: "POULTRY",
    karantinaBabi: "PIG",
    karantinaReptil: "REPTILE",
    karantinaHewanLainnya: "OTHER ANIMALS",
    karantinaProdukSegar: "FRESH PRODUCTS",
    karantinaBenih: "SEEDS",
    karantinaBibit: "SEEDLINGS",
    karantinaTanamanHias: "ORNAMENTAL PLANTS",
    karantinaBungaPotong: "CUT FLOWERS",
    karantinaBuahSayur: "FRUITS & VEGETABLES",
    karantinaTumbuhanLainnya: "OTHER PLANTS",
    karantinaSampai2Kg: "UP TO 2 KG",
    karantinaLebih2Kg: "MORE THAN 2 KG",
    dokumenDimiliki: "Select Owned Document",`,
  ja: `    tp_liburan: "休日/レクリエーション",
    tp_pekerjaan: "仕事/ビジネス",
    tp_transit: "乗り継ぎ施設",
    tp_medis: "医療/治療",
    tp_agama: "宗教",
    tp_pendidikan: "教育/トレーニング",
    tp_konferensi: "会議/セミナー",
    tp_olahraga: "スポーツ",
    tp_budaya: "文化/芸術活動",
    tp_keluarga: "家族訪問",
    tp_lainnya: "その他",
    acc_rumah: "住宅",
    acc_hotel: "ホテル",
    acc_transit: "乗り継ぎ",
    tanggalLainnya: "その他の日付...",
    karantinaHewan: "動物",
    karantinaIkan: "魚類",
    karantinaTumbuhan: "植物",
    karantinaAnjing: "犬",
    karantinaKucing: "猫",
    karantinaMonyet: "猿",
    karantinaUnggas: "家禽",
    karantinaBabi: "豚",
    karantinaReptil: "爬虫類",
    karantinaHewanLainnya: "その他の動物",
    karantinaProdukSegar: "生鮮食品",
    karantinaBenih: "種子",
    karantinaBibit: "苗",
    karantinaTanamanHias: "観葉植物",
    karantinaBungaPotong: "切り花",
    karantinaBuahSayur: "果物と野菜",
    karantinaTumbuhanLainnya: "その他の植物",
    karantinaSampai2Kg: "2KGまで",
    karantinaLebih2Kg: "2KG以上",
    dokumenDimiliki: "所持している書類を選択",`,
  zh: `    tp_liburan: "度假/休闲",
    tp_pekerjaan: "工作/商务",
    tp_transit: "过境设施",
    tp_medis: "医疗",
    tp_agama: "宗教",
    tp_pendidikan: "教育/培训",
    tp_konferensi: "会议/研讨会",
    tp_olahraga: "体育",
    tp_budaya: "文化/艺术活动",
    tp_keluarga: "探亲",
    tp_lainnya: "其他",
    acc_rumah: "住宅",
    acc_hotel: "酒店",
    acc_transit: "过境",
    tanggalLainnya: "其他日期...",
    karantinaHewan: "动物",
    karantinaIkan: "鱼类",
    karantinaTumbuhan: "植物",
    karantinaAnjing: "狗",
    karantinaKucing: "猫",
    karantinaMonyet: "猴子",
    karantinaUnggas: "家禽",
    karantinaBabi: "猪",
    karantinaReptil: "爬行动物",
    karantinaHewanLainnya: "其他动物",
    karantinaProdukSegar: "生鲜产品",
    karantinaBenih: "种子",
    karantinaBibit: "幼苗",
    karantinaTanamanHias: "观赏植物",
    karantinaBungaPotong: "切花",
    karantinaBuahSayur: "水果和蔬菜",
    karantinaTumbuhanLainnya: "其他植物",
    karantinaSampai2Kg: "2公斤以下",
    karantinaLebih2Kg: "2公斤以上",
    dokumenDimiliki: "选择持有的文件",`,
  ar: `    tp_liburan: "عطلة/ترفيه",
    tp_pekerjaan: "عمل/تجارة",
    tp_transit: "مرفق عبور",
    tp_medis: "علاج طبي",
    tp_agama: "ديني",
    tp_pendidikan: "تعليم/تدريب",
    tp_konferensi: "مؤتمر/ندوة",
    tp_olahraga: "رياضة",
    tp_budaya: "أنشطة ثقافية/فنية",
    tp_keluarga: "زيارة عائلية",
    tp_lainnya: "أخرى",
    acc_rumah: "منزل",
    acc_hotel: "فندق",
    acc_transit: "عبور",
    tanggalLainnya: "تواريخ أخرى...",
    karantinaHewan: "حيوانات",
    karantinaIkan: "أسماك",
    karantinaTumbuhan: "نباتات",
    karantinaAnjing: "كلب",
    karantinaKucing: "قطة",
    karantinaMonyet: "قرد",
    karantinaUnggas: "دواجن",
    karantinaBabi: "خنزير",
    karantinaReptil: "زواحف",
    karantinaHewanLainnya: "حيوانات أخرى",
    karantinaProdukSegar: "منتجات طازجة",
    karantinaBenih: "بذور",
    karantinaBibit: "شتلات",
    karantinaTanamanHias: "نباتات زينة",
    karantinaBungaPotong: "زهور مقطوفة",
    karantinaBuahSayur: "فواكه وخضروات",
    karantinaTumbuhanLainnya: "نباتات أخرى",
    karantinaSampai2Kg: "حتى 2 كجم",
    karantinaLebih2Kg: "أكثر من 2 كجم",
    dokumenDimiliki: "اختر المستند المملوك",`,
  ru: `    tp_liburan: "Отпуск/Отдых",
    tp_pekerjaan: "Работа/Бизнес",
    tp_transit: "Транзитное сооружение",
    tp_medis: "Медицинское лечение",
    tp_agama: "Религия",
    tp_pendidikan: "Образование/Обучение",
    tp_konferensi: "Конференция/Семинар",
    tp_olahraga: "Спорт",
    tp_budaya: "Культурные/Искусственные мероприятия",
    tp_keluarga: "Посещение семьи",
    tp_lainnya: "Другое",
    acc_rumah: "Дом",
    acc_hotel: "Отель",
    acc_transit: "Транзит",
    tanggalLainnya: "Другие даты...",
    karantinaHewan: "ЖИВОТНЫЕ",
    karantinaIkan: "РЫБА",
    karantinaTumbuhan: "РАСТЕНИЯ",
    karantinaAnjing: "СОБАКА",
    karantinaKucing: "КОШКА",
    karantinaMonyet: "ОБЕЗЬЯНА",
    karantinaUnggas: "ДОМАШНЯЯ ПТИЦА",
    karantinaBabi: "СВИНЬЯ",
    karantinaReptil: "РЕПТИЛИЯ",
    karantinaHewanLainnya: "ДРУГИЕ ЖИВОТНЫЕ",
    karantinaProdukSegar: "СВЕЖИЕ ПРОДУКТЫ",
    karantinaBenih: "СЕМЕНА",
    karantinaBibit: "РАССАДА",
    karantinaTanamanHias: "ДЕКОРАТИВНЫЕ РАСТЕНИЯ",
    karantinaBungaPotong: "СРЕЗАННЫЕ ЦВЕТЫ",
    karantinaBuahSayur: "ФРУКТЫ И ОВОЩИ",
    karantinaTumbuhanLainnya: "ДРУГИЕ РАСТЕНИЯ",
    karantinaSampai2Kg: "ДО 2 КГ",
    karantinaLebih2Kg: "БОЛЕЕ 2 КГ",
    dokumenDimiliki: "Выберите имеющийся документ",`,
  ko: `    tp_liburan: "휴가/레크리에이션",
    tp_pekerjaan: "업무/비즈니스",
    tp_transit: "환승 시설",
    tp_medis: "의료 치료",
    tp_agama: "종교",
    tp_pendidikan: "교육/훈련",
    tp_konferensi: "회의/세미나",
    tp_olahraga: "스포츠",
    tp_budaya: "문화/예술 활동",
    tp_keluarga: "가족 방문",
    tp_lainnya: "기타",
    acc_rumah: "주택",
    acc_hotel: "호텔",
    acc_transit: "환승",
    tanggalLainnya: "다른 날짜...",
    karantinaHewan: "동물",
    karantinaIkan: "생선",
    karantinaTumbuhan: "식물",
    karantinaAnjing: "개",
    karantinaKucing: "고양이",
    karantinaMonyet: "원숭이",
    karantinaUnggas: "가금류",
    karantinaBabi: "돼지",
    karantinaReptil: "파충류",
    karantinaHewanLainnya: "기타 동물",
    karantinaProdukSegar: "신선 제품",
    karantinaBenih: "씨앗",
    karantinaBibit: "묘목",
    karantinaTanamanHias: "관상용 식물",
    karantinaBungaPotong: "절화",
    karantinaBuahSayur: "과일 및 채소",
    karantinaTumbuhanLainnya: "기타 식물",
    karantinaSampai2Kg: "최대 2KG",
    karantinaLebih2Kg: "2KG 초과",
    dokumenDimiliki: "소지한 문서 선택",`
};

for (const lang of Object.keys(newKeys)) {
  const marker = new RegExp("(" + lang + ": \\{)");
  if (transContent.match(marker)) {
    transContent = transContent.replace(marker, "$1\n" + newKeys[lang]);
  }
}

fs.writeFileSync(transPath, transContent, 'utf8');

const pagePath = path.join(__dirname, 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// Also extract `language` from useLanguage
pageContent = pageContent.replace(/const \{ t \} = useLanguage\(\);/, 'const { t, language } = useLanguage();\\n  const getLocale = (lang: string) => { const map: Record<string, string> = { id: "id-ID", en: "en-US", ja: "ja-JP", zh: "zh-CN", ar: "ar-SA", ru: "ru-RU", ko: "ko-KR" }; return map[lang] || "id-ID"; };');

// Update dates
pageContent = pageContent.replace(/label: new Date\(\)\.toLocaleDateString\(\\n\s*"id-ID",/g, 'label: new Date().toLocaleDateString(\\n                                    getLocale(language),');
pageContent = pageContent.replace(/label: tomorrow\.toLocaleDateString\(\\n\s*"id-ID",/g, 'label: tomorrow.toLocaleDateString(\\n                                    getLocale(language),');
pageContent = pageContent.replace(/label: "Tanggal Lainnya\.\.\."/g, 'label: t("tanggalLainnya")');

// Replace mapping for travelPurposes
pageContent = pageContent.replace(/options=\{travelPurposes\}/, 'options={travelPurposes.map(opt => ({ ...opt, label: t("tp_" + opt.value) || opt.label }))}');

// Replace mapping for accommodationTypes
pageContent = pageContent.replace(/options=\{accommodationTypes\}/, 'options={accommodationTypes.map(opt => ({ ...opt, label: t("acc_" + opt.value) || opt.label }))}');

// Replace Piih Dokumen Yang Anda Miliki
pageContent = pageContent.replace(/t\("Piih Dokumen Yang Anda Miliki"\) \|\|\s*"Dokumen yang dimiliki"/, 't("dokumenDimiliki")');

// Replace HEWAN, IKAN, TUMBUHAN
pageContent = pageContent.replace(/\{ value: "HEWAN", label: "HEWAN" \}/g, '{ value: "HEWAN", label: t("karantinaHewan") || "HEWAN" }');
pageContent = pageContent.replace(/\{ value: "IKAN", label: "IKAN" \}/g, '{ value: "IKAN", label: t("karantinaIkan") || "IKAN" }');
pageContent = pageContent.replace(/\{ value: "TUMBUHAN", label: "TUMBUHAN" \}/g, '{ value: "TUMBUHAN", label: t("karantinaTumbuhan") || "TUMBUHAN" }');

pageContent = pageContent.replace(/label: "ANJING"/g, 'label: t("karantinaAnjing") || "ANJING"');
pageContent = pageContent.replace(/label: "KUCING"/g, 'label: t("karantinaKucing") || "KUCING"');
pageContent = pageContent.replace(/label: "MONYET"/g, 'label: t("karantinaMonyet") || "MONYET"');
pageContent = pageContent.replace(/label: "UNGGAS"/g, 'label: t("karantinaUnggas") || "UNGGAS"');
pageContent = pageContent.replace(/label: "BABI"/g, 'label: t("karantinaBabi") || "BABI"');
pageContent = pageContent.replace(/label: "REPTIL"/g, 'label: t("karantinaReptil") || "REPTIL"');
pageContent = pageContent.replace(/label: "HEWAN LAINNYA"/g, 'label: t("karantinaHewanLainnya") || "HEWAN LAINNYA"');

pageContent = pageContent.replace(/label: "PRODUK SEGAR"/g, 'label: t("karantinaProdukSegar") || "PRODUK SEGAR"');
pageContent = pageContent.replace(/label: "BENIH"/g, 'label: t("karantinaBenih") || "BENIH"');
pageContent = pageContent.replace(/label: "BIBIT"/g, 'label: t("karantinaBibit") || "BIBIT"');
pageContent = pageContent.replace(/label: "TANAMAN HIAS"/g, 'label: t("karantinaTanamanHias") || "TANAMAN HIAS"');
pageContent = pageContent.replace(/label: "BUNGA POTONG"/g, 'label: t("karantinaBungaPotong") || "BUNGA POTONG"');
pageContent = pageContent.replace(/label: "BUAH \& SAYUR"/g, 'label: t("karantinaBuahSayur") || "BUAH & SAYUR"');
pageContent = pageContent.replace(/label: "TUMBUHAN LAINNYA"/g, 'label: t("karantinaTumbuhanLainnya") || "TUMBUHAN LAINNYA"');

pageContent = pageContent.replace(/label: "SAMPAI DENGAN 2 KG"/g, 'label: t("karantinaSampai2Kg") || "SAMPAI DENGAN 2 KG"');
pageContent = pageContent.replace(/label: "LEBIH DARI 2 KG"/g, 'label: t("karantinaLebih2Kg") || "LEBIH DARI 2 KG"');

fs.writeFileSync(pagePath, pageContent, 'utf8');
console.log("Dropdown labels and typos updated.");
