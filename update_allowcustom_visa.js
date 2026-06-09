const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// 1. Hotel input
pageContent = pageContent.replace(
  /id="hotel-name"\\s+placeholder=\{t\("phNamaHotel"\)\}\\s+options=\{hotelOptions\}\\s+value=\{address\.hotelValue\}/g,
  'id="hotel-name"\\n' +
  '                              placeholder={t("phNamaHotel")}\\n' +
  '                              options={hotelOptions}\\n' +
  '                              value={address.hotelValue}\\n' +
  '                              allowCustom={true}\\n' +
  '                              customLabel="Ketik Manual"\\n' +
  '                              onCustomClick={() => {\\n' +
  '                                handleAddressChange("hotelValue", "other_hotel");\\n' +
  '                                handleAddressChange("hotelLabel", "");\\n' +
  '                                handleAddressChange("hotelCity", "");\\n' +
  '                                handleAddressChange("hotelProvince", "");\\n' +
  '                                handleAddressChange("fullAddress", "");\\n' +
  '                              }}'
);
console.log('Replaced hotel allowCustom!');

// 2. Visa active box
pageContent = pageContent.replace(
  /bg-green-50 border border-green-100/g,
  'bg-red-50 border border-red-200'
);
pageContent = pageContent.replace(
  /text-green-700 font-medium flex/g,
  'text-red-700 font-medium flex'
);
pageContent = pageContent.replace(
  /bg-green-100 flex items-center justify-center shrink-0/g,
  'bg-red-100 flex items-center justify-center shrink-0'
);
pageContent = pageContent.replace(
  /text-green-600/g,
  'text-red-600'
);
pageContent = pageContent.replace(
  /d="M5 13l4 4L19 7"/g,
  'd="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"'
);
pageContent = pageContent.replace(
  /strokeWidth=\{2\.5\}/g,
  'strokeWidth={2}'
);

pageContent = pageContent.replace(
  /text-green-800 font-medium leading-relaxed/g,
  'text-red-800 font-medium leading-relaxed'
);
pageContent = pageContent.replace(
  /hover:text-green-900 transition-colors/g,
  'hover:text-red-900 transition-colors'
);
console.log('Replaced visa colors!');

fs.writeFileSync(pagePath, pageContent, 'utf8');
console.log('Done.');
