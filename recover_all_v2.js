const fs = require('fs');

let content = fs.readFileSync('app/page.tsx', 'utf8');

// 1. ADD STATE VARIABLES
if (!content.includes('const [customsModalOpen')) {
  const target = 'const [declarationView, setDeclarationView] = useState<{';
  const replacement = `const [customsModalOpen, setCustomsModalOpen] = useState(false);
  const [customsItems, setCustomsItems] = useState<any[]>([]);
  const [editingCustomsItemIndex, setEditingCustomsItemIndex] = useState<number | null>(null);
  const [customsForm, setCustomsForm] = useState({
    uraian: "",
    jumlah: "",
    mataUang: "IDR",
    nilai: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const [declarationView, setDeclarationView] = useState<{`;
  
  content = content.replace(target, replacement);
}

// 2. ADD CUSTOMS MODAL UI AT THE END
const modalContent = `
      {/* Customs Modal */}
      {customsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{t("tambahBarang") || "Tambah Barang"}</h3>
                </div>
              </div>
              <div className="space-y-4">
                <FormField label={t("uraianBarang") || "Uraian Barang"}>
                  <TextInput
                    placeholder={t("phUraianBarang") || "Masukkan uraian barang"}
                    value={customsForm.uraian}
                    onChange={(e) => setCustomsForm(prev => ({ ...prev, uraian: e.target.value }))}
                  />
                </FormField>
                <FormField label={t("jumlahBarang") || "Jumlah Barang"}>
                  <TextInput
                    type="number"
                    placeholder="0"
                    value={customsForm.jumlah}
                    onChange={(e) => setCustomsForm(prev => ({ ...prev, jumlah: e.target.value }))}
                  />
                </FormField>
                <div className="grid grid-cols-2 gap-4">
                  <FormField label={t("mataUang") || "Mata Uang"}>
                    <SelectInput
                      options={[
                        { value: "IDR", label: "IDR - Rupiah" },
                        { value: "USD", label: "USD - US Dollar" },
                        { value: "EUR", label: "EUR - Euro" },
                        { value: "SGD", label: "SGD - Singapore Dollar" },
                      ]}
                      value={customsForm.mataUang}
                      onChange={(e) => setCustomsForm(prev => ({ ...prev, mataUang: e.target.value }))}
                    />
                  </FormField>
                  <FormField label={t("nilaiBarang") || "Nilai Barang"}>
                    <TextInput
                      type="number"
                      placeholder="0"
                      value={customsForm.nilai}
                      onChange={(e) => setCustomsForm(prev => ({ ...prev, nilai: e.target.value }))}
                    />
                  </FormField>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-8">
                <button
                  type="button"
                  onClick={() => {
                    setCustomsModalOpen(false);
                    setCustomsForm({ uraian: "", jumlah: "", mataUang: "IDR", nilai: "" });
                    setEditingCustomsItemIndex(null);
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  {t("batal") || "Batal"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (customsForm.uraian && customsForm.jumlah && customsForm.nilai) {
                      if (editingCustomsItemIndex !== null) {
                        setCustomsItems(prev => {
                          const newItems = [...prev];
                          newItems[editingCustomsItemIndex] = customsForm;
                          return newItems;
                        });
                      } else {
                        setCustomsItems(prev => [...prev, customsForm]);
                      }
                      setCustomsModalOpen(false);
                      setCustomsForm({ uraian: "", jumlah: "", mataUang: "IDR", nilai: "" });
                      setEditingCustomsItemIndex(null);
                    }
                  }}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  disabled={!customsForm.uraian || !customsForm.jumlah || !customsForm.nilai}
                >
                  {t("simpan") || "Simpan"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
`;

if (!content.includes('{/* Customs Modal */}')) {
  content = content.replace('      <Footer />', modalContent + '\n      <Footer />');
}

// 3. ADD TAMBAH BARANG BUTTON AND LIST
const targetRadio = `                                onChange={(value) =>
                                  handleDeclarationChange(
                                    idx,
                                    "hasProhibitedGoods",
                                    value,
                                  )
                                }
                              />`;

const customsListContent = `
                              {/* Tambah Barang List */}
                              {decl.hasProhibitedGoods === "ya" && (
                                <div className="mt-4 p-4 border border-blue-100 bg-blue-50/50 rounded-xl">
                                  <div className="flex justify-between items-center mb-4">
                                    <h4 className="text-sm font-semibold text-gray-800">{t("daftarBarang") || "Daftar Barang"}</h4>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setCustomsForm({ uraian: "", jumlah: "", mataUang: "IDR", nilai: "" });
                                        setEditingCustomsItemIndex(null);
                                        setCustomsModalOpen(true);
                                      }}
                                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                                    >
                                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                      </svg>
                                      {t("tambahBarang") || "Tambah Barang"}
                                    </button>
                                  </div>
                                  
                                  {customsItems.length > 0 ? (
                                    <div className="space-y-3">
                                      {customsItems.map((item, i) => (
                                        <div key={i} className="flex justify-between items-center p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
                                          <div>
                                            <p className="text-sm font-medium text-gray-800">{item.uraian}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">{item.jumlah} pcs • {item.mataUang} {item.nilai}</p>
                                          </div>
                                          <div className="flex items-center gap-2">
                                            <button
                                              type="button"
                                              onClick={() => {
                                                setCustomsForm(item);
                                                setEditingCustomsItemIndex(i);
                                                setCustomsModalOpen(true);
                                              }}
                                              className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors"
                                            >
                                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                              </svg>
                                            </button>
                                            <button
                                              type="button"
                                              onClick={() => setCustomsItems(prev => prev.filter((_, idx) => idx !== i))}
                                              className="p-1.5 text-gray-400 hover:text-red-600 transition-colors"
                                            >
                                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                              </svg>
                                            </button>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <div className="py-6 text-center border-2 border-dashed border-gray-200 rounded-lg">
                                      <p className="text-xs text-gray-500">{t("belumAdaBarang") || "Belum ada barang yang ditambahkan"}</p>
                                    </div>
                                  )}
                                </div>
                              )}`;

content = content.replace(targetRadio, targetRadio + '\n' + customsListContent);

// 4. SUBMIT BUTTON AND SUCCESS VIEW
const emptyDivTarget = ') : (\n              <div />\n            )}';
const submitBtn = `) : (
              <button
                onClick={() => setSubmitted(true)}
                disabled={!travelers.every((_, i) => declarations[i] && isDeclarationComplete(declarations[i]))}
                className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors shadow-sm shadow-teal-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t("kirimDeklarasi") || "Kirim Deklarasi"}
              </button>
            )}`;
content = content.replace(emptyDivTarget, submitBtn);

const isDeclarationCompleteTarget = 'const isDeclarationComplete = (decl: (typeof declarations)[0]) => {';
const successView = `
  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-sm w-full text-center animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Berhasil Terkirim</h2>
            <p className="text-gray-600 text-sm mb-8">Deklarasi Anda telah berhasil dikirimkan. Silakan tunjukkan QR Code ini kepada petugas.</p>
            
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-6 flex justify-center">
              <div className="w-48 h-48 bg-white border-4 border-gray-800 rounded-lg p-2 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1 p-1">
                  {Array.from({length: 16}).map((_, i) => (
                    <div key={i} className="bg-gray-800 rounded-sm"></div>
                  ))}
                </div>
                <div className="absolute inset-1/4 bg-white z-10 flex items-center justify-center rounded">
                  <div className="w-full h-full border-4 border-gray-800 rounded-sm"></div>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => {
                setSubmitted(false);
                setCurrentStep(0);
              }}
              className="w-full py-3 px-4 text-sm font-semibold text-teal-700 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors"
            >
              Kembali ke Beranda
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const isDeclarationComplete = (decl: (typeof declarations)[0]) => {`;

if (!content.includes('if (submitted) {')) {
  content = content.replace(isDeclarationCompleteTarget, successView);
}

// 5. CHANGE KIRIM TO SIMPAN FOR INDIVIDUAL TRAVELER FORM
content = content.replace(
  '>\n                                {t("kirim")}\n                                <svg',
  '>\n                                {t("simpan") || "Simpan"}\n                                <svg'
);

fs.writeFileSync('app/page.tsx', content, 'utf8');
console.log('Features restored successfully!');
