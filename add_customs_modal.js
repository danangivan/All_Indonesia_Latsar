const fs = require('fs');

let content = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Add state variables
const stateVarsStr = `
  const [customsModalOpen, setCustomsModalOpen] = useState(false);
  const [activePassengerIdx, setActivePassengerIdx] = useState<number | null>(null);
  const [editingCustomsItemIndex, setEditingCustomsItemIndex] = useState<number | null>(null);
  const [customsForm, setCustomsForm] = useState({
    uraian: "",
    jumlah: "",
    mataUang: "IDR",
    nilai: ""
  });
`;

if (!content.includes('const [customsModalOpen')) {
  const marker = 'const [declarations, setDeclarations] = useState([';
  content = content.replace(marker, stateVarsStr + '\n  ' + marker);
}

// 2. Add prohibitedGoods: [] to declarations initial state
if (!content.includes('prohibitedGoods: [],')) {
  content = content.replace(
    'hasProhibitedGoods: "",',
    'hasProhibitedGoods: "",\n      prohibitedGoods: [] as any[],'
  );
}

// 3. Add the UI below the prohibited-goods radio button
const radioEndMarker = `<RadioInput
                                name={\`prohibited-goods-\${idx}\`}
                                id={\`prohibited-goods-\${idx}\`}
                                options={[
                                  { value: "ya", label: t("ya") },
                                  { value: "tidak", label: t("tidak") },
                                ]}
                                value={decl.hasProhibitedGoods}
                                onChange={(value) =>
                                  handleDeclarationChange(
                                    idx,
                                    "hasProhibitedGoods",
                                    value,
                                  )
                                }
                              />`;

const tableUiStr = `
                              {decl.hasProhibitedGoods === "ya" && (
                                <div className="mt-4 border-t border-gray-100 pt-4">
                                  <div className="flex justify-between items-center mb-3">
                                    <h4 className="text-xs font-semibold text-gray-700">Daftar Barang</h4>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setCustomsForm({ uraian: "", jumlah: "", mataUang: "IDR", nilai: "" });
                                        setEditingCustomsItemIndex(null);
                                        setActivePassengerIdx(idx);
                                        setCustomsModalOpen(true);
                                      }}
                                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors shadow-sm"
                                    >
                                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                      </svg>
                                      Tambah Barang
                                    </button>
                                  </div>
                                  
                                  {decl.prohibitedGoods && decl.prohibitedGoods.length > 0 ? (
                                    <div className="space-y-3">
                                      {decl.prohibitedGoods.map((item: any, i: number) => (
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
                                                setActivePassengerIdx(idx);
                                                setCustomsModalOpen(true);
                                              }}
                                              className="p-1.5 text-gray-400 hover:text-teal-600 transition-colors"
                                            >
                                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                              </svg>
                                            </button>
                                            <button
                                              type="button"
                                              onClick={() => {
                                                setDeclarations(prev => {
                                                  const newDecls = [...prev];
                                                  const newGoods = [...(newDecls[idx].prohibitedGoods || [])];
                                                  newGoods.splice(i, 1);
                                                  newDecls[idx].prohibitedGoods = newGoods;
                                                  return newDecls;
                                                });
                                              }}
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
                                    <div className="text-center py-4 bg-gray-50 rounded-lg border border-gray-100 border-dashed">
                                      <p className="text-xs text-gray-500">Belum ada barang yang ditambahkan</p>
                                    </div>
                                  )}
                                </div>
                              )}`;

if (!content.includes('Tambah Barang')) {
  // Try dynamic match if spacing is slightly different
  const idxStart = content.indexOf('name={`prohibited-goods-${idx}`}');
  if (idxStart !== -1) {
    const componentEnd = content.indexOf('/>', idxStart) + 2;
    content = content.substring(0, componentEnd) + '\n' + tableUiStr + content.substring(componentEnd);
  }
}

// 4. Add the modal before <Footer />
const modalCode = `
      {/* Customs Modal */}
      {customsModalOpen && activePassengerIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-teal-500 rounded-full"></div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Tambah Barang</h3>
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-4 -mt-4 pl-4">Masukkan detail barang yang Anda bawa ke Indonesia.</p>
              <div className="space-y-4">
                <FormField label="Uraian Barang">
                  <TextInput
                    placeholder="Masukkan Uraian Barang"
                    value={customsForm.uraian}
                    onChange={(e) => setCustomsForm(prev => ({ ...prev, uraian: e.target.value }))}
                  />
                </FormField>
                <FormField label="Jumlah">
                  <TextInput
                    type="number"
                    placeholder="Masukkan Jumlah"
                    value={customsForm.jumlah}
                    onChange={(e) => setCustomsForm(prev => ({ ...prev, jumlah: e.target.value }))}
                  />
                </FormField>
                <FormField label="Jenis Mata Uang">
                  <SelectInput
                    options={[
                      { value: "IDR", label: "IDR - Indonesian Rupiah" },
                      { value: "USD", label: "USD - US Dollar" },
                      { value: "EUR", label: "EUR - Euro" },
                      { value: "SGD", label: "SGD - Singapore Dollar" },
                      { value: "AUD", label: "AUD - Australian Dollar" },
                      { value: "JPY", label: "JPY - Japanese Yen" }
                    ]}
                    value={customsForm.mataUang}
                    onChange={(val) => setCustomsForm(prev => ({ ...prev, mataUang: val }))}
                    placeholder="Pilih Jenis Mata Uang"
                  />
                </FormField>
                <FormField label="Nilai">
                  <TextInput
                    type="number"
                    placeholder="Masukkan Nilai"
                    value={customsForm.nilai}
                    onChange={(e) => setCustomsForm(prev => ({ ...prev, nilai: e.target.value }))}
                  />
                </FormField>
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
                  Batal
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (customsForm.uraian && customsForm.jumlah && customsForm.nilai) {
                      setDeclarations(prev => {
                        const newDecls = [...prev];
                        const currentGoods = newDecls[activePassengerIdx].prohibitedGoods || [];
                        const newGoods = [...currentGoods];
                        if (editingCustomsItemIndex !== null) {
                          newGoods[editingCustomsItemIndex] = customsForm;
                        } else {
                          newGoods.push(customsForm);
                        }
                        newDecls[activePassengerIdx].prohibitedGoods = newGoods;
                        return newDecls;
                      });
                      setCustomsModalOpen(false);
                      setCustomsForm({ uraian: "", jumlah: "", mataUang: "IDR", nilai: "" });
                      setEditingCustomsItemIndex(null);
                    }
                  }}
                  className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors"
                  disabled={!customsForm.uraian || !customsForm.jumlah || !customsForm.nilai}
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
`;

if (!content.includes('Customs Modal')) {
  content = content.replace('      <Footer />', modalCode + '\n      <Footer />');
}

fs.writeFileSync('app/page.tsx', content, 'utf8');
console.log("Successfully added Customs Modal logic");
