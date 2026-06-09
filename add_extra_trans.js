const fs = require('fs');
const path = require('path');

const transPath = path.join(__dirname, 'app', 'lib', 'translations.ts');
let transContent = fs.readFileSync(transPath, 'utf8');

const extraTranslations = {
  id: `    isiData: "Isi Data",\n    edit: "Edit",\n`,
  en: `    isiData: "Fill Data",\n    edit: "Edit",\n`,
  ja: `    isiData: "データ入力",\n    edit: "編集",\n`,
  zh: `    isiData: "填写数据",\n    edit: "编辑",\n`,
  ar: `    isiData: "تعبئة البيانات",\n    edit: "تعديل",\n`,
  ru: `    isiData: "Заполнить данные",\n    edit: "Изменить",\n`,
  ko: `    isiData: "데이터 입력",\n    edit: "편집",\n`
};

for (const lang of Object.keys(extraTranslations)) {
  transContent = transContent.replace(lang + ": {\n", lang + ": {\n" + extraTranslations[lang]);
}

fs.writeFileSync(transPath, transContent, 'utf8');
console.log("Translations updated.");
