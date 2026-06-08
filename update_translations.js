const fs = require('fs');
let content = fs.readFileSync('app/lib/translations.ts', 'utf8');

const translations = {
  ja: {
    dekKesehatanTitle: '健康申告',
    dekKesehatanDesc: 'インドネシアの国家保健プロトコルに従い、公衆衛生の監視と感染症の蔓延防止を支援するため、健康申告書に記入してください。',
    dekKesehatanQ1: '以下の症状がありますか：発熱、咳、風邪、息切れ、喉の痛み、または皮膚の病変/発疹？',
    dekKesehatanPilihGejala: '症状を選択してください（複数選択可）',
    dekKesehatanBatuk: '咳',
    dekKesehatanDemam: '発熱',
    dekKesehatanLesi: '病変 / 発疹 / 皮膚の斑点',
    dekKesehatanPilek: '風邪',
    dekKesehatanTenggorokan: '喉の痛み',
    dekKesehatanSesak: '息切れ',
    dekKesehatanTidakAda: '症状なし',
    dekKesehatanGejalaTerpilih: '選択された症状:',
    dekKesehatanQ2: 'インドネシア出発前の21日間に訪問した出発国、経由地、その他の国（複数選択可）',
    dekKarantinaTitle: '検疫申告',
    dekKarantinaDesc: '現在の状況に応じて検疫申告書に記入してください。これは検疫官によって確認されます。',
    dekKarantinaQ1: '動物、魚、植物、および/または加工品を携帯していますか？',
    dekKarantinaDescKomoditas: '携帯している商品の説明',
    dekKarantinaKategori: 'カテゴリー',
    dekKarantinaSubKategori: 'サブカテゴリー',
    dekKarantinaKomoditasTerpilih: '選択された商品:',
    dekKarantinaBentukJenis: '商品の形態または種類を指定',
    dekKarantinaJumlah: '携帯している商品の数量',
    dekKarantinaQ2: '商品に検疫証明書（植物検疫証明書/動物健康証明書）が添付されていますか？',
    dekKarantinaDariNegara: 'どの国から商品を入手しましたか？',
    dekKarantinaPhDariNegara: '国を選択'
  },
  zh: {
    dekKesehatanTitle: '健康申报',
    dekKesehatanDesc: '根据印度尼西亚国家卫生协议，请填写健康申报表，以支持公共卫生监测并防止传染病传播。',
    dekKesehatanQ1: '您是否有以下症状：发热、咳嗽、感冒、呼吸急促、喉咙痛或皮肤损伤/皮疹？',
    dekKesehatanPilihGejala: '选择您的症状（可多选）',
    dekKesehatanBatuk: '咳嗽',
    dekKesehatanDemam: '发热',
    dekKesehatanLesi: '损伤 / 皮疹 / 皮肤斑点',
    dekKesehatanPilek: '感冒',
    dekKesehatanTenggorokan: '喉咙痛',
    dekKesehatanSesak: '呼吸急促',
    dekKesehatanTidakAda: '无症状',
    dekKesehatanGejalaTerpilih: '已选症状:',
    dekKesehatanQ2: '前往印度尼西亚前21天内访问过的出发国、过境国及其他国家（可多选）',
    dekKarantinaTitle: '检疫申报',
    dekKarantinaDesc: '请根据您的当前情况填写检疫申报表，检疫人员将对此进行核实。',
    dekKarantinaQ1: '您是否携带动物、鱼类、植物和/或加工产品？',
    dekKarantinaDescKomoditas: '携带物品说明',
    dekKarantinaKategori: '类别',
    dekKarantinaSubKategori: '子类别',
    dekKarantinaKomoditasTerpilih: '已选物品:',
    dekKarantinaBentukJenis: '注明物品的形态或类型',
    dekKarantinaJumlah: '携带物品数量',
    dekKarantinaQ2: '该物品是否附有检疫证书（植物检疫证书/动物健康证书）？',
    dekKarantinaDariNegara: '您从哪个国家获得该物品？',
    dekKarantinaPhDariNegara: '选择国家'
  },
  ar: {
    dekKesehatanTitle: 'الإقرار الصحي',
    dekKesehatanDesc: 'وفقًا للبروتوكول الصحي الوطني في إندونيسيا، يرجى إكمال نموذج الإقرار الصحي لدعم مراقبة الصحة العامة ومنع انتشار الأمراض المعدية.',
    dekKesehatanQ1: 'هل تعاني من الأعراض التالية: حمى، سعال، زكام، ضيق في التنفس، التهاب في الحلق، أو آفات جلدية/طفح جلدي؟',
    dekKesehatanPilihGejala: 'اختر الأعراض (يمكنك اختيار أكثر من واحد)',
    dekKesehatanBatuk: 'سعال',
    dekKesehatanDemam: 'حمى',
    dekKesehatanLesi: 'آفات / طفح جلدي / بقع جلدية',
    dekKesehatanPilek: 'زكام',
    dekKesehatanTenggorokan: 'التهاب الحلق',
    dekKesehatanSesak: 'ضيق في التنفس',
    dekKesehatanTidakAda: 'لا توجد أعراض',
    dekKesehatanGejalaTerpilih: 'الأعراض المحددة:',
    dekKesehatanQ2: 'بلد المغادرة، العبور، والدول الأخرى التي زرتها خلال 21 يومًا قبل المغادرة إلى إندونيسيا (يمكنك اختيار أكثر من واحد)',
    dekKarantinaTitle: 'إقرار الحجر الصحي',
    dekKarantinaDesc: 'يرجى ملء إقرار الحجر الصحي وفقًا لحالتك الحالية، والذي سيتم التحقق منه من قبل مسؤولي الحجر الصحي.',
    dekKarantinaQ1: 'هل تحمل حيوانات، أسماك، نباتات، و/أو منتجات مصنعة؟',
    dekKarantinaDescKomoditas: 'وصف السلع المحمولة',
    dekKarantinaKategori: 'الفئة',
    dekKarantinaSubKategori: 'الفئة الفرعية',
    dekKarantinaKomoditasTerpilih: 'السلع المحددة:',
    dekKarantinaBentukJenis: 'حدد شكل أو نوع السلعة',
    dekKarantinaJumlah: 'كمية السلع المحمولة',
    dekKarantinaQ2: 'هل السلعة مصحوبة بشهادة حجر صحي (شهادة صحة نباتية/شهادة صحة حيوانية)؟',
    dekKarantinaDariNegara: 'من أي بلد حصلت على السلعة؟',
    dekKarantinaPhDariNegara: 'اختر البلد'
  },
  ru: {
    dekKesehatanTitle: 'Декларация о здоровье',
    dekKesehatanDesc: 'В соответствии с национальным протоколом здравоохранения Индонезии, пожалуйста, заполните форму декларации о здоровье.',
    dekKesehatanQ1: 'Есть ли у вас следующие симптомы: лихорадка, кашель, насморк, одышка, боль в горле или кожные поражения/сыпь?',
    dekKesehatanPilihGejala: 'Выберите ваши симптомы (можно выбрать несколько)',
    dekKesehatanBatuk: 'КАШЕЛЬ',
    dekKesehatanDemam: 'ЛИХОРАДКА',
    dekKesehatanLesi: 'ПОРАЖЕНИЕ / СЫПЬ / ПЯТНА НА КОЖЕ',
    dekKesehatanPilek: 'НАСМОРК',
    dekKesehatanTenggorokan: 'БОЛЬ В ГОРЛЕ',
    dekKesehatanSesak: 'ОДЫШКА',
    dekKesehatanTidakAda: 'БЕЗ СИМПТОМОВ',
    dekKesehatanGejalaTerpilih: 'Выбранные симптомы:',
    dekKesehatanQ2: 'Страна отправления, транзита и другие страны, которые вы посетили в течение 21 дня до вылета в Индонезию (можно выбрать несколько)',
    dekKarantinaTitle: 'Карантинная декларация',
    dekKarantinaDesc: 'Пожалуйста, заполните карантинную декларацию в соответствии с вашим текущим состоянием, которое будет проверено карантинными офицерами.',
    dekKarantinaQ1: 'Везёте ли вы животных, рыб, растения и/или продукты их переработки?',
    dekKarantinaDescKomoditas: 'Описание перевозимых товаров',
    dekKarantinaKategori: 'Категория',
    dekKarantinaSubKategori: 'Подкатегория',
    dekKarantinaKomoditasTerpilih: 'Выбранные товары:',
    dekKarantinaBentukJenis: 'Укажите форму или тип товара',
    dekKarantinaJumlah: 'Количество перевозимых товаров',
    dekKarantinaQ2: 'Сопровождается ли товар карантинным сертификатом (фитосанитарный сертификат/ветеринарный сертификат)?',
    dekKarantinaDariNegara: 'Из какой страны вы получили товар?',
    dekKarantinaPhDariNegara: 'Выберите страну'
  },
  ko: {
    dekKesehatanTitle: '건강 상태 질문서',
    dekKesehatanDesc: '인도네시아의 국가 보건 프로토콜에 따라, 공중 보건 모니터링을 지원하고 전염병 확산을 방지하기 위해 건강 상태 질문서를 작성해 주십시오.',
    dekKesehatanQ1: '다음과 같은 증상이 있습니까: 발열, 기침, 감기, 호흡 곤란, 인후통 또는 피부 병변/발진?',
    dekKesehatanPilihGejala: '증상을 선택하십시오 (복수 선택 가능)',
    dekKesehatanBatuk: '기침',
    dekKesehatanDemam: '발열',
    dekKesehatanLesi: '병변 / 발진 / 피부 반점',
    dekKesehatanPilek: '감기',
    dekKesehatanTenggorokan: '인후통',
    dekKesehatanSesak: '호흡 곤란',
    dekKesehatanTidakAda: '증상 없음',
    dekKesehatanGejalaTerpilih: '선택된 증상:',
    dekKesehatanQ2: '인도네시아 출발 전 21일 이내에 방문한 출발국, 경유국 및 기타 국가 (복수 선택 가능)',
    dekKarantinaTitle: '검역 신고서',
    dekKarantinaDesc: '현재 상태에 따라 검역 신고서를 작성해 주십시오. 이는 검역관이 확인할 것입니다.',
    dekKarantinaQ1: '동물, 물고기, 식물 및/또는 가공품을 소지하고 있습니까?',
    dekKarantinaDescKomoditas: '휴대 물품 설명',
    dekKarantinaKategori: '카테고리',
    dekKarantinaSubKategori: '하위 카테고리',
    dekKarantinaKomoditasTerpilih: '선택된 물품:',
    dekKarantinaBentukJenis: '물품의 형태나 유형을 명시하십시오',
    dekKarantinaJumlah: '휴대 물품 수량',
    dekKarantinaQ2: '해당 물품에 검역 증명서(식물 검역 증명서/동물 위생 증명서)가 첨부되어 있습니까?',
    dekKarantinaDariNegara: '어느 국가에서 해당 물품을 얻었습니까?',
    dekKarantinaPhDariNegara: '국가 선택'
  }
};

let lines = content.split('\n');

for (const lang of Object.keys(translations)) {
  const langObj = translations[lang];
  let inLangBlock = false;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('  ' + lang + ': {')) {
      inLangBlock = true;
    } else if (inLangBlock && lines[i].startsWith('  },')) {
      inLangBlock = false;
    }
    
    if (inLangBlock) {
      for (const key of Object.keys(langObj)) {
        if (lines[i].includes('    ' + key + ':')) {
          let j = i;
          let foundComma = false;
          while (j < lines.length && !foundComma) {
            if (lines[j].trim().endsWith(',')) {
              foundComma = true;
            }
            j++;
          }
          lines[i] = '    ' + key + ': \"' + langObj[key] + '\",';
          for (let k = i + 1; k < j; k++) {
            lines[k] = ''; // clear it
          }
          break; // break the inner loop so we don't double process
        }
      }
    }
  }
}

lines = lines.filter(line => line !== '');
fs.writeFileSync('app/lib/translations.ts', lines.join('\n'), 'utf8');
console.log('Translations updated.');
