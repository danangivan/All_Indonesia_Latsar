const fs = require('fs');
const path = require('path');

const transPath = path.join(__dirname, 'app', 'lib', 'translations.ts');
let transContent = fs.readFileSync(transPath, 'utf8');

// Fix 'languages' in 'id'
transContent = transContent.replace(/languages:\s*"Languages"/, 'languages: "Bahasa"');

const newKeys = {
  id: `    dokumenDimiliki: "Dokumen yang dimiliki",
    visaOption: "Visa",
    kitasOption: "KITAS/KITAP",
    cekVisaAktif: "Cek Visa Aktif",
    visaAktifDitemukan: "Visa aktif ditemukan",
    pengajuanVisaSelesai: "Pengajuan visa selesai",
    nomorKitas: "Nomor KITAS/KITAP",
    phNomorKitas: "Masukkan Nomor KITAS/KITAP",
    dokumenValid: "Dokumen valid",
    tidakAdaVisaAktif: "Tidak ada visa yang aktif",
    visaTidakDitemukanDesc: "Visa tidak ditemukan untuk nomor paspor ini.",
    ok: "OK",
    pilihJenisPengajuanVisa: "Pilih Jenis Pengajuan Visa",
    visaExemption: "Visa Exemption",
    visaOnArrival: "Visa on Arrival (VoA)",
    kitasTidakDitemukan: "Nomor tidak ditemukan. Gunakan dummy 159753",`,
  en: `    dokumenDimiliki: "Owned Document",
    visaOption: "Visa",
    kitasOption: "KITAS/KITAP",
    cekVisaAktif: "Check Active Visa",
    visaAktifDitemukan: "Active visa found",
    pengajuanVisaSelesai: "Visa application completed",
    nomorKitas: "KITAS/KITAP Number",
    phNomorKitas: "Enter KITAS/KITAP Number",
    dokumenValid: "Valid document",
    tidakAdaVisaAktif: "No active visa found",
    visaTidakDitemukanDesc: "No active visa found for this passport number.",
    ok: "OK",
    pilihJenisPengajuanVisa: "Select Visa Application Type",
    visaExemption: "Visa Exemption",
    visaOnArrival: "Visa on Arrival (VoA)",
    kitasTidakDitemukan: "Number not found. Use dummy 159753",`,
  ja: `    dokumenDimiliki: "所持している書類",
    visaOption: "ビザ",
    kitasOption: "KITAS/KITAP",
    cekVisaAktif: "有効なビザを確認",
    visaAktifDitemukan: "有効なビザが見つかりました",
    pengajuanVisaSelesai: "ビザ申請が完了しました",
    nomorKitas: "KITAS/KITAP番号",
    phNomorKitas: "KITAS/KITAP番号を入力",
    dokumenValid: "有効な書類",
    tidakAdaVisaAktif: "有効なビザがありません",
    visaTidakDitemukanDesc: "このパスポート番号のビザは見つかりませんでした。",
    ok: "OK",
    pilihJenisPengajuanVisa: "ビザ申請の種類を選択",
    visaExemption: "ビザ免除",
    visaOnArrival: "到着ビザ (VoA)",
    kitasTidakDitemukan: "番号が見つかりません。ダミーの159753を使用してください",`,
  zh: `    dokumenDimiliki: "持有的文件",
    visaOption: "签证",
    kitasOption: "KITAS/KITAP",
    cekVisaAktif: "检查有效签证",
    visaAktifDitemukan: "找到有效签证",
    pengajuanVisaSelesai: "签证申请完成",
    nomorKitas: "KITAS/KITAP号码",
    phNomorKitas: "输入KITAS/KITAP号码",
    dokumenValid: "有效文件",
    tidakAdaVisaAktif: "未找到有效签证",
    visaTidakDitemukanDesc: "未找到该护照号码的签证。",
    ok: "确定",
    pilihJenisPengajuanVisa: "选择签证申请类型",
    visaExemption: "免签证",
    visaOnArrival: "落地签证 (VoA)",
    kitasTidakDitemukan: "找不到号码。请使用测试号码159753",`,
  ar: `    dokumenDimiliki: "المستند المملوك",
    visaOption: "تأشيرة",
    kitasOption: "KITAS/KITAP",
    cekVisaAktif: "التحقق من التأشيرة النشطة",
    visaAktifDitemukan: "تم العثور على تأشيرة نشطة",
    pengajuanVisaSelesai: "اكتمل طلب التأشيرة",
    nomorKitas: "رقم KITAS/KITAP",
    phNomorKitas: "أدخل رقم KITAS/KITAP",
    dokumenValid: "مستند صالح",
    tidakAdaVisaAktif: "لم يتم العثور على تأشيرة نشطة",
    visaTidakDitemukanDesc: "لم يتم العثور على تأشيرة لرقم الجواز هذا.",
    ok: "موافق",
    pilihJenisPengajuanVisa: "اختر نوع طلب التأشيرة",
    visaExemption: "إعفاء من التأشيرة",
    visaOnArrival: "تأشيرة عند الوصول (VoA)",
    kitasTidakDitemukan: "الرقم غير موجود. استخدم الرقم الوهمي 159753",`,
  ru: `    dokumenDimiliki: "Имеющийся документ",
    visaOption: "Виза",
    kitasOption: "KITAS/KITAP",
    cekVisaAktif: "Проверить активную визу",
    visaAktifDitemukan: "Найдена активная виза",
    pengajuanVisaSelesai: "Подача заявления на визу завершена",
    nomorKitas: "Номер KITAS/KITAP",
    phNomorKitas: "Введите номер KITAS/KITAP",
    dokumenValid: "Действительный документ",
    tidakAdaVisaAktif: "Нет активной визы",
    visaTidakDitemukanDesc: "Виза для этого номера паспорта не найдена.",
    ok: "ОК",
    pilihJenisPengajuanVisa: "Выберите тип заявления на визу",
    visaExemption: "Безвизовый въезд",
    visaOnArrival: "Виза по прибытии (VoA)",
    kitasTidakDitemukan: "Номер не найден. Используйте тестовый 159753",`,
  ko: `    dokumenDimiliki: "소지한 문서",
    visaOption: "비자",
    kitasOption: "KITAS/KITAP",
    cekVisaAktif: "유효한 비자 확인",
    visaAktifDitemukan: "유효한 비자 발견",
    pengajuanVisaSelesai: "비자 신청 완료",
    nomorKitas: "KITAS/KITAP 번호",
    phNomorKitas: "KITAS/KITAP 번호 입력",
    dokumenValid: "유효한 문서",
    tidakAdaVisaAktif: "유효한 비자 없음",
    visaTidakDitemukanDesc: "이 여권 번호에 대한 비자를 찾을 수 없습니다.",
    ok: "확인",
    pilihJenisPengajuanVisa: "비자 신청 유형 선택",
    visaExemption: "비자 면제",
    visaOnArrival: "도착 비자 (VoA)",
    kitasTidakDitemukan: "번호를 찾을 수 없습니다. 더미 159753을 사용하세요",`
};

for (const lang of Object.keys(newKeys)) {
  const marker = new RegExp("(" + lang + ": \\{)");
  if (transContent.match(marker)) {
    transContent = transContent.replace(marker, "$1\\n" + newKeys[lang]);
  }
}

fs.writeFileSync(transPath, transContent, 'utf8');

const pagePath = path.join(__dirname, 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// Replace in page.tsx
pageContent = pageContent.replace(/label=\{t\("dokumenDimiliki"\) \|\| "Dokumen yang dimiliki"\}/g, 'label={t("dokumenDimiliki")}');
pageContent = pageContent.replace(/label="Dokumen yang dimiliki"/g, 'label={t("dokumenDimiliki")}');

pageContent = pageContent.replace(/\{ value: "visa", label: "Visa" \}/g, '{ value: "visa", label: t("visaOption") }');
pageContent = pageContent.replace(/\{ value: "kitas", label: "KITAS\/KITAP" \}/g, '{ value: "kitas", label: t("kitasOption") }');

pageContent = pageContent.replace(/label="Nomor Paspor"/g, 'label={t("nomorPaspor")}');
pageContent = pageContent.replace(/placeholder="Masukkan Nomor Paspor"/g, 'placeholder={t("phNomorPaspor")}');

pageContent = pageContent.replace(/>\s*Cek Visa Aktif\s*<\/button>/g, '>{t("cekVisaAktif")}</button>');
pageContent = pageContent.replace(/Visa aktif ditemukan/g, '{t("visaAktifDitemukan")}');
pageContent = pageContent.replace(/Pengajuan visa selesai/g, '{t("pengajuanVisaSelesai")}');

pageContent = pageContent.replace(/label="Nomor KITAS\/KITAP"/g, 'label={t("nomorKitas")}');
pageContent = pageContent.replace(/placeholder="Masukkan Nomor KITAS\/KITAP"/g, 'placeholder={t("phNomorKitas")}');

pageContent = pageContent.replace(/>\s*Kirim\s*<\/button>/g, '>{t("kirim")}</button>');
pageContent = pageContent.replace(/Dokumen valid/g, '{t("dokumenValid")}');

pageContent = pageContent.replace(/Tidak ada visa yang aktif/g, '{t("tidakAdaVisaAktif")}');
pageContent = pageContent.replace(/Visa tidak ditemukan untuk nomor paspor ini\./g, '{t("visaTidakDitemukanDesc")}');
pageContent = pageContent.replace(/>\s*OK\s*<\/button>/g, '>{t("ok")}</button>');
pageContent = pageContent.replace(/Pilih Jenis Pengajuan Visa/g, '{t("pilihJenisPengajuanVisa")}');
pageContent = pageContent.replace(/Visa Exemption/g, '{t("visaExemption")}');
pageContent = pageContent.replace(/Visa on Arrival \(VoA\)/g, '{t("visaOnArrival")}');

pageContent = pageContent.replace(/alert\("Nomor tidak ditemukan\. Gunakan dummy 159753"\)/g, 'alert(t("kitasTidakDitemukan"))');

fs.writeFileSync(pagePath, pageContent, 'utf8');
console.log("Translations added and page.tsx updated.");
