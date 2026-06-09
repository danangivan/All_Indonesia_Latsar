const fs = require('fs');
const path = require('path');

const transPath = path.join(__dirname, 'app', 'lib', 'translations.ts');
let transContent = fs.readFileSync(transPath, 'utf8');

const extraTranslations = {
  id: `    konfirmasiKirimTittle: "Konfirmasi Pengiriman",
    konfirmasiKirimDesc: "Pastikan semua data yang Anda isi sudah benar. Anda tidak dapat mengubah data setelah dikirim.",
    kirimSekarang: "Kirim Sekarang",
    cekKembali: "Cek Kembali",\n`,
  en: `    konfirmasiKirimTittle: "Submission Confirmation",
    konfirmasiKirimDesc: "Please make sure all data you entered is correct. You cannot change data after submission.",
    kirimSekarang: "Submit Now",
    cekKembali: "Recheck",\n`,
  ja: `    konfirmasiKirimTittle: "送信の確認",
    konfirmasiKirimDesc: "入力したすべてのデータが正しいことを確認してください。送信後にデータを変更することはできません。",
    kirimSekarang: "今すぐ送信",
    cekKembali: "再確認",\n`,
  zh: `    konfirmasiKirimTittle: "提交确认",
    konfirmasiKirimDesc: "请确保您输入的所有数据都是正确的。提交后您不能更改数据。",
    kirimSekarang: "立即提交",
    cekKembali: "重新检查",\n`,
  ar: `    konfirmasiKirimTittle: "تأكيد الإرسال",
    konfirmasiKirimDesc: "يرجى التأكد من صحة جميع البيانات التي أدخلتها. لا يمكنك تغيير البيانات بعد الإرسال.",
    kirimSekarang: "إرسال الآن",
    cekKembali: "إعادة التحقق",\n`,
  ru: `    konfirmasiKirimTittle: "Подтверждение отправки",
    konfirmasiKirimDesc: "Убедитесь, что все введенные вами данные верны. Вы не сможете изменить данные после отправки.",
    kirimSekarang: "Отправить сейчас",
    cekKembali: "Перепроверить",\n`,
  ko: `    konfirmasiKirimTittle: "제출 확인",
    konfirmasiKirimDesc: "입력한 모든 데이터가 올바른지 확인하십시오. 제출 후에는 데이터를 변경할 수 없습니다.",
    kirimSekarang: "지금 제출",
    cekKembali: "재확인",\n`
};

for (const lang of Object.keys(extraTranslations)) {
  transContent = transContent.replace(lang + ": {\n", lang + ": {\n" + extraTranslations[lang]);
}

fs.writeFileSync(transPath, transContent, 'utf8');
console.log("Translations added.");
