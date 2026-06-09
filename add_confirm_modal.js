const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// 1. Add the state
const statePattern = /const \[visaCheckModalOpen, setVisaCheckModalOpen\] = useState\(false\);/;
if (pageContent.match(statePattern)) {
  pageContent = pageContent.replace(
    statePattern,
    `const [submitConfirmModalOpen, setSubmitConfirmModalOpen] = useState(false);\n  const [visaCheckModalOpen, setVisaCheckModalOpen] = useState(false);`
  );
}

// 2. Modify Kirim button onClick
const kirimOnClickPattern = /onClick=\{\(\) => setIsSubmitted\(true\)\}/;
if (pageContent.match(kirimOnClickPattern)) {
  pageContent = pageContent.replace(
    kirimOnClickPattern,
    `onClick={() => setSubmitConfirmModalOpen(true)}`
  );
}

// 3. Add the modal JSX
const modalPattern = /\{\/\* Visa Check Modal \*\/\}/;
if (pageContent.match(modalPattern)) {
  const submitConfirmModalJSX = `
      {/* Submit Confirm Modal */}
      {submitConfirmModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 p-6 text-center border border-gray-100">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-5 border border-blue-100 shadow-sm shadow-blue-100">
              <svg
                className="w-7 h-7 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("konfirmasiKirimTittle") || "Konfirmasi Pengiriman"}
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              {t("konfirmasiKirimDesc") || "Pastikan semua data yang Anda isi sudah benar. Anda tidak dapat mengubah data setelah dikirim."}
            </p>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setSubmitConfirmModalOpen(false);
                  setIsSubmitted(true);
                }}
                className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                {t("kirimSekarang") || "Kirim Sekarang"}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setSubmitConfirmModalOpen(false)}
                className="w-full py-3 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 rounded-xl font-medium transition-colors"
              >
                {t("cekKembali") || "Cek Kembali"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Visa Check Modal */}`;
  
  pageContent = pageContent.replace(modalPattern, submitConfirmModalJSX);
}

fs.writeFileSync(pagePath, pageContent, 'utf8');
console.log("Submit confirmation modal added successfully.");
