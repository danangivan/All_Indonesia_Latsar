const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

const summaryPageCall = `          <SummaryPage
            travelers={travelers}
            travelDetails={travelDetails}
            declarations={declarations}`;

const newSummaryPageCall = `          <SummaryPage
            travelers={travelers}
            travelDetails={travelDetails}
            declarations={declarations}
            healthDecl={healthDecl}`;

if (pageContent.includes(summaryPageCall)) {
  pageContent = pageContent.replace(summaryPageCall, newSummaryPageCall);
  fs.writeFileSync(pagePath, pageContent, 'utf8');
  console.log("Updated page.tsx to pass healthDecl");
} else {
  console.log("Could not find summary page call in page.tsx");
}

// 2. Update SummaryPage.tsx
const summaryPagePath = path.join(__dirname, 'app', 'components', 'SummaryPage.tsx');
let summaryContent = fs.readFileSync(summaryPagePath, 'utf8');

const summaryProps = `export default function SummaryPage({
  travelers,
  travelDetails,
  declarations,
  onReset,
}: {
  travelers: any[];
  travelDetails: any[];
  declarations: any[];
  onReset: () => void;
}) {`;

const newSummaryProps = `export default function SummaryPage({
  travelers,
  travelDetails,
  declarations,
  healthDecl,
  onReset,
}: {
  travelers: any[];
  travelDetails: any[];
  declarations: any[];
  healthDecl: any[];
  onReset: () => void;
}) {`;

if (summaryContent.includes(summaryProps)) {
  summaryContent = summaryContent.replace(summaryProps, newSummaryProps);
}

// 3. Conditionally render the symptoms block
// We want to see if ANY traveler has symptoms.
// const hasAnySymptoms = healthDecl.some((decl) => decl?.hasSymptoms === "ya");
const varInjectionStr = `  const mainTraveler = travelers[0] || {};
  const mainDetail = travelDetails[0] || {};`;

const newVarInjectionStr = `  const mainTraveler = travelers[0] || {};
  const mainDetail = travelDetails[0] || {};
  const hasAnySymptoms = healthDecl?.some((decl) => decl?.hasSymptoms === "ya") || false;`;

if (summaryContent.includes(varInjectionStr)) {
  summaryContent = summaryContent.replace(varInjectionStr, newVarInjectionStr);
}

// Wrap the symptom div
const symptomDiv = `<div className="bg-red-50 border border-red-100 p-4 rounded-xl flex items-start gap-3">
            <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-xs text-red-700 font-medium">
              Terindikasi gejala (Harap lapor ke petugas kesehatan)
            </p>
          </div>`;

const newSymptomDiv = `{hasAnySymptoms && (
          <div className="bg-red-50 border border-red-100 p-4 rounded-xl flex items-start gap-3">
            <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-xs text-red-700 font-medium">
              Terindikasi gejala (Harap lapor ke petugas kesehatan)
            </p>
          </div>
          )}`;

if (summaryContent.includes(symptomDiv)) {
  summaryContent = summaryContent.replace(symptomDiv, newSymptomDiv);
}

// 4. Remove Ajukan Visa block
const visaBlock = `<div className="bg-green-50/50 border border-green-200 p-4 rounded-xl flex items-center justify-between gap-4">
            <p className="text-xs text-green-800">
              Ajukan dan unduh visa Anda berdasarkan kebutuhan perjalanan Anda.
            </p>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold rounded transition-colors whitespace-nowrap">
              Ajukan Visa Saat Kedatangan (VOA)
            </button>
          </div>`;

if (summaryContent.includes(visaBlock)) {
  summaryContent = summaryContent.replace(visaBlock, '');
}

// 5. Remove Ubah Data block
const ubahDataBlock = `<div className="bg-white border border-gray-200 p-4 rounded-xl flex items-center justify-between gap-4 shadow-sm">
            <p className="text-xs text-gray-600">
              Jika perlu, Anda dapat memperbarui informasi yang dikirimkan sebelum perjalanan.
            </p>
            <button className="px-4 py-2 border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded transition-colors whitespace-nowrap">
              Ubah Data
            </button>
          </div>`;

if (summaryContent.includes(ubahDataBlock)) {
  summaryContent = summaryContent.replace(ubahDataBlock, '');
}

fs.writeFileSync(summaryPagePath, summaryContent, 'utf8');
console.log("Updated SummaryPage.tsx");
