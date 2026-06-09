const fs = require('fs');
const path = require('path');

const transPath = path.join(__dirname, 'app', 'lib', 'translations.ts');
let transContent = fs.readFileSync(transPath, 'utf8');

const additionalKeys = {
  id: `    silakanAjukanVisa: "Silakan ajukan visa untuk melanjutkan perjalanan Anda ke Indonesia.",
    okMengerti: "OK Mengerti",
    pengajuanVisaTitle: "Pengajuan Visa",
    pilihJenisVisaDesc: "Pilih jenis visa yang ingin Anda ajukan:",
    bebasVisaKunjungan: "Bebas Visa Kunjungan",
    visaOnArrivalTitle: "Visa on Arrival",
    visaKunjunganSaatKedatangan: "Visa Kunjungan Saat Kedatangan",
    batalkanPengajuan: "Batalkan Pengajuan",`,
  en: `    silakanAjukanVisa: "Please apply for a visa to continue your journey to Indonesia.",
    okMengerti: "OK Understood",
    pengajuanVisaTitle: "Visa Application",
    pilihJenisVisaDesc: "Choose the type of visa you want to apply for:",
    bebasVisaKunjungan: "Visa Exemption for Visit",
    visaOnArrivalTitle: "Visa on Arrival",
    visaKunjunganSaatKedatangan: "Visit Visa on Arrival",
    batalkanPengajuan: "Cancel Application",`,
  ja: `    silakanAjukanVisa: "インドネシアへの旅行を続けるにはビザを申請してください。",
    okMengerti: "OK、了解しました",
    pengajuanVisaTitle: "ビザ申請",
    pilihJenisVisaDesc: "申請するビザの種類を選択してください:",
    bebasVisaKunjungan: "訪問ビザ免除",
    visaOnArrivalTitle: "到着ビザ",
    visaKunjunganSaatKedatangan: "到着時訪問ビザ",
    batalkanPengajuan: "申請をキャンセル",`,
  zh: `    silakanAjukanVisa: "请申请签证以继续您的印度尼西亚之旅。",
    okMengerti: "好的，我明白了",
    pengajuanVisaTitle: "签证申请",
    pilihJenisVisaDesc: "选择您想申请的签证类型：",
    bebasVisaKunjungan: "免签证访问",
    visaOnArrivalTitle: "落地签证",
    visaKunjunganSaatKedatangan: "落地访问签证",
    batalkanPengajuan: "取消申请",`,
  ar: `    silakanAjukanVisa: "يرجى التقدم بطلب للحصول على تأشيرة لمواصلة رحلتك إلى إندونيسيا.",
    okMengerti: "حسنا فهمت",
    pengajuanVisaTitle: "طلب تأشيرة",
    pilihJenisVisaDesc: "اختر نوع التأشيرة التي تريد التقدم بطلب للحصول عليها:",
    bebasVisaKunjungan: "إعفاء من تأشيرة الزيارة",
    visaOnArrivalTitle: "تأشيرة عند الوصول",
    visaKunjunganSaatKedatangan: "تأشيرة زيارة عند الوصول",
    batalkanPengajuan: "إلغاء الطلب",`,
  ru: `    silakanAjukanVisa: "Пожалуйста, подайте заявление на визу, чтобы продолжить поездку в Индонезию.",
    okMengerti: "ОК, понятно",
    pengajuanVisaTitle: "Заявление на визу",
    pilihJenisVisaDesc: "Выберите тип визы, на которую вы хотите подать заявление:",
    bebasVisaKunjungan: "Безвизовый визит",
    visaOnArrivalTitle: "Виза по прибытии",
    visaKunjunganSaatKedatangan: "Виза для визита по прибытии",
    batalkanPengajuan: "Отменить заявление",`,
  ko: `    silakanAjukanVisa: "인도네시아 여행을 계속하려면 비자를 신청하십시오.",
    okMengerti: "네, 알겠습니다",
    pengajuanVisaTitle: "비자 신청",
    pilihJenisVisaDesc: "신청할 비자 유형을 선택하십시오:",
    bebasVisaKunjungan: "방문 비자 면제",
    visaOnArrivalTitle: "도착 비자",
    visaKunjunganSaatKedatangan: "도착 방문 비자",
    batalkanPengajuan: "신청 취소",`
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

// Replacements
pageContent = pageContent.replace(/Silakan ajukan visa untuk melanjutkan perjalanan Anda ke\s*Indonesia\./, '{t("silakanAjukanVisa")}');
pageContent = pageContent.replace(/OK Mengerti/, '{t("okMengerti")}');
pageContent = pageContent.replace(/<h3 className="text-xl font-bold text-gray-900 tracking-tight">\s*Pengajuan Visa\s*<\/h3>/, '<h3 className="text-xl font-bold text-gray-900 tracking-tight">\n                {t("pengajuanVisaTitle")}\n              </h3>');
pageContent = pageContent.replace(/Pilih jenis visa yang ingin Anda ajukan:/, '{t("pilihJenisVisaDesc")}');
pageContent = pageContent.replace(/Bebas Visa Kunjungan/, '{t("bebasVisaKunjungan")}');
pageContent = pageContent.replace(/<div className="text-base">Visa on Arrival<\/div>/, '<div className="text-base">{t("visaOnArrivalTitle")}</div>');
pageContent = pageContent.replace(/Visa Kunjungan Saat Kedatangan/, '{t("visaKunjunganSaatKedatangan")}');
pageContent = pageContent.replace(/>\s*Batalkan Pengajuan\s*<\/button>/, '>\n              {t("batalkanPengajuan")}\n            </button>');

fs.writeFileSync(pagePath, pageContent, 'utf8');
console.log("Modals updated with translations.");
