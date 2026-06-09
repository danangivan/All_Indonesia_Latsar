const fs = require('fs');
const path = require('path');
const transPath = path.join(__dirname, 'app', 'lib', 'translations.ts');
let transContent = fs.readFileSync(transPath, 'utf8');

const additionalKeys = {
  id: `    daftarBarang: "Daftar Barang",
    tambahBarang: "Tambah Barang",
    belumAdaBarang: "Belum ada barang yang ditambahkan",`,
  en: `    daftarBarang: "List of Goods",
    tambahBarang: "Add Goods",
    belumAdaBarang: "No goods have been added yet",`,
  ja: `    daftarBarang: "商品のリスト",
    tambahBarang: "商品を追加",
    belumAdaBarang: "まだ商品が追加されていません",`,
  zh: `    daftarBarang: "物品清单",
    tambahBarang: "添加物品",
    belumAdaBarang: "尚未添加任何物品",`,
  ar: `    daftarBarang: "قائمة البضائع",
    tambahBarang: "إضافة بضائع",
    belumAdaBarang: "لم يتم إضافة أي بضائع بعد",`,
  ru: `    daftarBarang: "Список товаров",
    tambahBarang: "Добавить товар",
    belumAdaBarang: "Товары еще не добавлены",`,
  ko: `    daftarBarang: "물품 목록",
    tambahBarang: "물품 추가",
    belumAdaBarang: "아직 추가된 물품이 없습니다",`
};

for (const lang of Object.keys(additionalKeys)) {
  const marker = new RegExp(lang + ": \\{");
  if (transContent.match(marker)) {
    transContent = transContent.replace(marker, lang + ": {\n" + additionalKeys[lang]);
  }
}

fs.writeFileSync(transPath, transContent, 'utf8');

const pagePath = path.join(__dirname, 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

const replacements = {
  'Daftar Barang': '{t("daftarBarang") || "Daftar Barang"}',
  'Tambah Barang': '{t("tambahBarang") || "Tambah Barang"}',
  'Belum ada barang yang ditambahkan': '{t("belumAdaBarang") || "Belum ada barang yang ditambahkan"}'
};

// We will replace 'Daftar Barang' when it is inside tags.
// Using exact string replacement for the text node locations.
pageContent = pageContent.split('Daftar Barang\n').join('{t("daftarBarang") || "Daftar Barang"}\n');
pageContent = pageContent.split('Tambah Barang\n').join('{t("tambahBarang") || "Tambah Barang"}\n');
pageContent = pageContent.split('Belum ada barang yang ditambahkan\n').join('{t("belumAdaBarang") || "Belum ada barang yang ditambahkan"}\n');
// Some might not end with \n if they are inline. Let's do a more robust regex for JSX text.

pageContent = pageContent.replace(/>\s*Daftar Barang\s*</g, '>{t("daftarBarang") || "Daftar Barang"}<');
pageContent = pageContent.replace(/>\s*Tambah Barang\s*</g, '>{t("tambahBarang") || "Tambah Barang"}<');
pageContent = pageContent.replace(/>\s*Belum ada barang yang ditambahkan\s*</g, '>{t("belumAdaBarang") || "Belum ada barang yang ditambahkan"}<');

fs.writeFileSync(pagePath, pageContent, 'utf8');
console.log("Goods texts updated.");
