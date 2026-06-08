const fs = require('fs');

const extraTranslations = {
  id: {
    pilihTanggalKedatangan: 'Pilih Tanggal Kedatangan',
    opt_quar_hewan: 'HEWAN',
    opt_quar_ikan: 'IKAN',
    opt_quar_tumbuhan: 'TUMBUHAN',
    opt_quar_anjing: 'ANJING',
    opt_quar_kucing: 'KUCING',
    opt_quar_kelinci: 'KELINCI',
    opt_quar_burung: 'BURUNG',
    opt_quar_reptil: 'REPTIL',
    opt_quar_hewan_lainnya: 'HEWAN LAINNYA',
    opt_quar_ikan_hias: 'IKAN HIAS',
    opt_quar_ikan_konsumsi: 'IKAN KONSUMSI',
    opt_quar_udang: 'UDANG',
    opt_quar_kerang: 'KERANG',
    opt_quar_ikan_lainnya: 'IKAN LAINNYA',
    opt_quar_buah: 'BUAH',
    opt_quar_sayur: 'SAYUR',
    opt_quar_benih: 'BENIH',
    opt_quar_tanaman_hias: 'TANAMAN HIAS',
    opt_quar_kayu: 'KAYU',
    opt_quar_tumbuhan_lainnya: 'TUMBUHAN LAINNYA',
    opt_quar_produk_segar: 'PRODUK SEGAR',
    opt_quar_produk_olahan: 'PRODUK OLAHAN',
    opt_quar_produk_beku: 'PRODUK BEKU',
    opt_quar_hidup: 'HIDUP',
    opt_quar_sampai_2kg: 'SAMPAI DENGAN 2 KG',
    opt_quar_lebih_2kg: 'LEBIH DARI 2 KG',
    opt_quar_sampai_2ekor: 'SAMPAI DENGAN 2 EKOR',
    opt_quar_lebih_2ekor: 'LEBIH DARI 2 EKOR',
    opt_quar_sampai_2l: 'SAMPAI DENGAN 2 L',
    opt_quar_lebih_2l: 'LEBIH DARI 2 L'
  },
  en: {
    pilihTanggalKedatangan: 'Select Arrival Date',
    opt_quar_hewan: 'ANIMAL',
    opt_quar_ikan: 'FISH',
    opt_quar_tumbuhan: 'PLANT',
    opt_quar_anjing: 'DOG',
    opt_quar_kucing: 'CAT',
    opt_quar_kelinci: 'RABBIT',
    opt_quar_burung: 'BIRD',
    opt_quar_reptil: 'REPTILE',
    opt_quar_hewan_lainnya: 'OTHER ANIMALS',
    opt_quar_ikan_hias: 'ORNAMENTAL FISH',
    opt_quar_ikan_konsumsi: 'CONSUMPTION FISH',
    opt_quar_udang: 'SHRIMP',
    opt_quar_kerang: 'CLAM/SHELLFISH',
    opt_quar_ikan_lainnya: 'OTHER FISH',
    opt_quar_buah: 'FRUIT',
    opt_quar_sayur: 'VEGETABLE',
    opt_quar_benih: 'SEED',
    opt_quar_tanaman_hias: 'ORNAMENTAL PLANT',
    opt_quar_kayu: 'WOOD',
    opt_quar_tumbuhan_lainnya: 'OTHER PLANTS',
    opt_quar_produk_segar: 'FRESH PRODUCT',
    opt_quar_produk_olahan: 'PROCESSED PRODUCT',
    opt_quar_produk_beku: 'FROZEN PRODUCT',
    opt_quar_hidup: 'ALIVE',
    opt_quar_sampai_2kg: 'UP TO 2 KG',
    opt_quar_lebih_2kg: 'MORE THAN 2 KG',
    opt_quar_sampai_2ekor: 'UP TO 2 PIECES/ANIMALS',
    opt_quar_lebih_2ekor: 'MORE THAN 2 PIECES/ANIMALS',
    opt_quar_sampai_2l: 'UP TO 2 L',
    opt_quar_lebih_2l: 'MORE THAN 2 L'
  },
  ja: {
    pilihTanggalKedatangan: '到着日を選択',
    opt_quar_hewan: '動物',
    opt_quar_ikan: '魚',
    opt_quar_tumbuhan: '植物',
    opt_quar_anjing: '犬',
    opt_quar_kucing: '猫',
    opt_quar_kelinci: 'ウサギ',
    opt_quar_burung: '鳥',
    opt_quar_reptil: '爬虫類',
    opt_quar_hewan_lainnya: 'その他の動物',
    opt_quar_ikan_hias: '観賞魚',
    opt_quar_ikan_konsumsi: '食用魚',
    opt_quar_udang: 'エビ',
    opt_quar_kerang: '貝',
    opt_quar_ikan_lainnya: 'その他の魚',
    opt_quar_buah: '果物',
    opt_quar_sayur: '野菜',
    opt_quar_benih: '種',
    opt_quar_tanaman_hias: '観賞植物',
    opt_quar_kayu: '木材',
    opt_quar_tumbuhan_lainnya: 'その他の植物',
    opt_quar_produk_segar: '生鮮食品',
    opt_quar_produk_olahan: '加工食品',
    opt_quar_produk_beku: '冷凍食品',
    opt_quar_hidup: '生きている',
    opt_quar_sampai_2kg: '2 KGまで',
    opt_quar_lebih_2kg: '2 KG以上',
    opt_quar_sampai_2ekor: '2匹/頭まで',
    opt_quar_lebih_2ekor: '2匹/頭以上',
    opt_quar_sampai_2l: '2 Lまで',
    opt_quar_lebih_2l: '2 L以上'
  },
  zh: {
    pilihTanggalKedatangan: '选择抵达日期',
    opt_quar_hewan: '动物',
    opt_quar_ikan: '鱼类',
    opt_quar_tumbuhan: '植物',
    opt_quar_anjing: '狗',
    opt_quar_kucing: '猫',
    opt_quar_kelinci: '兔子',
    opt_quar_burung: '鸟',
    opt_quar_reptil: '爬行动物',
    opt_quar_hewan_lainnya: '其他动物',
    opt_quar_ikan_hias: '观赏鱼',
    opt_quar_ikan_konsumsi: '食用鱼',
    opt_quar_udang: '虾',
    opt_quar_kerang: '贝类',
    opt_quar_ikan_lainnya: '其他鱼类',
    opt_quar_buah: '水果',
    opt_quar_sayur: '蔬菜',
    opt_quar_benih: '种子',
    opt_quar_tanaman_hias: '观赏植物',
    opt_quar_kayu: '木材',
    opt_quar_tumbuhan_lainnya: '其他植物',
    opt_quar_produk_segar: '新鲜产品',
    opt_quar_produk_olahan: '加工产品',
    opt_quar_produk_beku: '冷冻产品',
    opt_quar_hidup: '活体',
    opt_quar_sampai_2kg: '不超过 2 KG',
    opt_quar_lebih_2kg: '超过 2 KG',
    opt_quar_sampai_2ekor: '不超过 2 只',
    opt_quar_lebih_2ekor: '超过 2 只',
    opt_quar_sampai_2l: '不超过 2 L',
    opt_quar_lebih_2l: '超过 2 L'
  },
  ar: {
    pilihTanggalKedatangan: 'اختر تاريخ الوصول',
    opt_quar_hewan: 'حيوان',
    opt_quar_ikan: 'أسماك',
    opt_quar_tumbuhan: 'نبات',
    opt_quar_anjing: 'كلب',
    opt_quar_kucing: 'قطة',
    opt_quar_kelinci: 'أرنب',
    opt_quar_burung: 'طائر',
    opt_quar_reptil: 'زواحف',
    opt_quar_hewan_lainnya: 'حيوانات أخرى',
    opt_quar_ikan_hias: 'أسماك الزينة',
    opt_quar_ikan_konsumsi: 'أسماك الاستهلاك',
    opt_quar_udang: 'روبيان',
    opt_quar_kerang: 'محار/صدف',
    opt_quar_ikan_lainnya: 'أسماك أخرى',
    opt_quar_buah: 'فاكهة',
    opt_quar_sayur: 'خضروات',
    opt_quar_benih: 'بذور',
    opt_quar_tanaman_hias: 'نباتات زينة',
    opt_quar_kayu: 'خشب',
    opt_quar_tumbuhan_lainnya: 'نباتات أخرى',
    opt_quar_produk_segar: 'منتج طازج',
    opt_quar_produk_olahan: 'منتج مصنع',
    opt_quar_produk_beku: 'منتج مجمد',
    opt_quar_hidup: 'حي',
    opt_quar_sampai_2kg: 'حتى 2 كجم',
    opt_quar_lebih_2kg: 'أكثر من 2 كجم',
    opt_quar_sampai_2ekor: 'حتى 2 قطعة/حيوان',
    opt_quar_lebih_2ekor: 'أكثر من 2 قطعة/حيوان',
    opt_quar_sampai_2l: 'حتى 2 لتر',
    opt_quar_lebih_2l: 'أكثر من 2 لتر'
  },
  ru: {
    pilihTanggalKedatangan: 'Выберите дату прибытия',
    opt_quar_hewan: 'ЖИВОТНОЕ',
    opt_quar_ikan: 'РЫБА',
    opt_quar_tumbuhan: 'РАСТЕНИЕ',
    opt_quar_anjing: 'СОБАКА',
    opt_quar_kucing: 'КОШКА',
    opt_quar_kelinci: 'КРОЛИК',
    opt_quar_burung: 'ПТИЦА',
    opt_quar_reptil: 'РЕПТИЛИЯ',
    opt_quar_hewan_lainnya: 'ДРУГИЕ ЖИВОТНЫЕ',
    opt_quar_ikan_hias: 'ДЕКОРАТИВНАЯ РЫБА',
    opt_quar_ikan_konsumsi: 'ПРОМЫСЛОВАЯ РЫБА',
    opt_quar_udang: 'КРЕВЕТКА',
    opt_quar_kerang: 'МОЛЛЮСК/РАКУШКА',
    opt_quar_ikan_lainnya: 'ДРУГАЯ РЫБА',
    opt_quar_buah: 'ФРУКТ',
    opt_quar_sayur: 'ОВОЩ',
    opt_quar_benih: 'СЕМЕНА',
    opt_quar_tanaman_hias: 'ДЕКОРАТИВНОЕ РАСТЕНИЕ',
    opt_quar_kayu: 'ДЕРЕВО',
    opt_quar_tumbuhan_lainnya: 'ДРУГИЕ РАСТЕНИЯ',
    opt_quar_produk_segar: 'СВЕЖИЙ ПРОДУКТ',
    opt_quar_produk_olahan: 'ОБРАБОТАННЫЙ ПРОДУКТ',
    opt_quar_produk_beku: 'ЗАМОРОЖЕННЫЙ ПРОДУКТ',
    opt_quar_hidup: 'ЖИВОЙ',
    opt_quar_sampai_2kg: 'ДО 2 КГ',
    opt_quar_lebih_2kg: 'БОЛЕЕ 2 КГ',
    opt_quar_sampai_2ekor: 'ДО 2 ШТ/ЖИВОТНЫХ',
    opt_quar_lebih_2ekor: 'БОЛЕЕ 2 ШТ/ЖИВОТНЫХ',
    opt_quar_sampai_2l: 'ДО 2 Л',
    opt_quar_lebih_2l: 'БОЛЕЕ 2 Л'
  },
  ko: {
    pilihTanggalKedatangan: '도착일 선택',
    opt_quar_hewan: '동물',
    opt_quar_ikan: '물고기',
    opt_quar_tumbuhan: '식물',
    opt_quar_anjing: '개',
    opt_quar_kucing: '고양이',
    opt_quar_kelinci: '토끼',
    opt_quar_burung: '새',
    opt_quar_reptil: '파충류',
    opt_quar_hewan_lainnya: '기타 동물',
    opt_quar_ikan_hias: '관상어',
    opt_quar_ikan_konsumsi: '식용어',
    opt_quar_udang: '새우',
    opt_quar_kerang: '조개',
    opt_quar_ikan_lainnya: '기타 물고기',
    opt_quar_buah: '과일',
    opt_quar_sayur: '채소',
    opt_quar_benih: '씨앗',
    opt_quar_tanaman_hias: '관상 식물',
    opt_quar_kayu: '목재',
    opt_quar_tumbuhan_lainnya: '기타 식물',
    opt_quar_produk_segar: '신선 제품',
    opt_quar_produk_olahan: '가공 제품',
    opt_quar_produk_beku: '냉동 제품',
    opt_quar_hidup: '살아있음',
    opt_quar_sampai_2kg: '최대 2 KG',
    opt_quar_lebih_2kg: '2 KG 초과',
    opt_quar_sampai_2ekor: '최대 2 마리/개',
    opt_quar_lebih_2ekor: '2 마리/개 초과',
    opt_quar_sampai_2l: '최대 2 L',
    opt_quar_lebih_2l: '2 L 초과'
  }
};

let content = fs.readFileSync('app/lib/translations.ts', 'utf8');

// The easiest way to append these is right before the closing } of each language block.
// Since the file is well-structured, we can insert our new keys before the next language block,
// or before the final `};` if it's the last one.

let newContent = content;

// To do this reliably without regex matching the exact end of block, 
// we will find `  lang:` and the next `  lang2:` and insert right before the closing `  },`
for (const lang of Object.keys(extraTranslations)) {
  const langBlockStart = newContent.indexOf("  " + lang + ": {");
  if (langBlockStart !== -1) {
    // Find the end of this block
    // Assuming each language block ends with `  },` or `  }` for the last one
    // Let's find the first `  },` or `  }` AFTER the langBlockStart.
    let searchIndex = langBlockStart;
    let blockEndIndex = -1;
    let braceCount = 0;
    
    // Simple brace counting to find the closing brace of the language object
    for (let i = searchIndex; i < newContent.length; i++) {
      if (newContent[i] === '{') braceCount++;
      if (newContent[i] === '}') {
        braceCount--;
        if (braceCount === 0) {
          blockEndIndex = i;
          break;
        }
      }
    }
    
    if (blockEndIndex !== -1) {
      // Build the string to insert
      const toInsertObj = extraTranslations[lang];
      let insertStr = '';
      for (const key of Object.keys(toInsertObj)) {
        insertStr += '    ' + key + ': "' + toInsertObj[key] + '",\n';
      }
      
      // Check if the previous line ended with a comma, if not, we should probably add one, 
      // but `translations.ts` usually has a comma on the last item. If not, it's fine.
      
      // Insert right before the closing brace
      newContent = newContent.substring(0, blockEndIndex) + insertStr + newContent.substring(blockEndIndex);
    }
  }
}

fs.writeFileSync('app/lib/translations.ts', newContent, 'utf8');
console.log('Extra translations appended successfully.');
