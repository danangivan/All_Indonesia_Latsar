const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add state fields to initial travelDetails
const stateInitTarget = `  const [travelDetails, setTravelDetails] = useState([
    {
      arrivalDate: "",
      departureDate: "",
      hasVisa: "",
      visaNumber: "",
    },
  ]);`;
const stateInitReplacement = `  const [travelDetails, setTravelDetails] = useState([
    {
      arrivalDate: "",
      departureDate: "",
      documentType: "",
      passportNumber: "",
      kitasNumber: "",
      documentStatus: "",
      hasVisa: "",
      visaNumber: "",
    },
  ]);`;
if (content.includes(stateInitTarget)) {
  content = content.replace(stateInitTarget, stateInitReplacement);
}

const stateResetTarget = `              setTravelDetails([
                {
                  arrivalDate: "",
                  departureDate: "",
                  hasVisa: "",
                  visaNumber: "",
                },
              ]);`;
const stateResetReplacement = `              setTravelDetails([
                {
                  arrivalDate: "",
                  departureDate: "",
                  documentType: "",
                  passportNumber: "",
                  kitasNumber: "",
                  documentStatus: "",
                  hasVisa: "",
                  visaNumber: "",
                },
              ]);`;
if (content.includes(stateResetTarget)) {
  content = content.replace(stateResetTarget, stateResetReplacement);
}

// 2. Add Modal States
const modalStatesTarget = `const [customsModalOpen, setCustomsModalOpen] = useState(false);`;
const modalStatesReplacement = `const [customsModalOpen, setCustomsModalOpen] = useState(false);
  const [visaCheckModalOpen, setVisaCheckModalOpen] = useState(false);
  const [visaOptionsModalOpen, setVisaOptionsModalOpen] = useState(false);
  const [activeVisaCheckIdx, setActiveVisaCheckIdx] = useState<number | null>(null);`;
if (content.includes(modalStatesTarget) && !content.includes("visaCheckModalOpen")) {
  content = content.replace(modalStatesTarget, modalStatesReplacement);
}

// 3. Add default details to map
const detailMapTarget = `                    const detail = travelDetails[idx] || {
                      arrivalDate: "",
                      departureDate: "",
                      hasVisa: "",
                      visaNumber: "",
                    };`;
const detailMapReplacement = `                    const detail = travelDetails[idx] || {
                      arrivalDate: "",
                      departureDate: "",
                      documentType: "",
                      passportNumber: "",
                      kitasNumber: "",
                      documentStatus: "",
                      hasVisa: "",
                      visaNumber: "",
                    };`;
if (content.includes(detailMapTarget)) {
  content = content.replace(detailMapTarget, detailMapReplacement);
}

// 4. Replace Radio Buttons for hasVisa with Document Type Select
const radioSectionTarget = `<div className="mt-6">
                          <FormField label={t("punyaVisa")} required>
                            <RadioInput
                              name={\`has-visa-\${idx}\`}
                              id={\`has-visa-\${idx}\`}
                              options={[
                                { value: "ya", label: t("ya") },
                                { value: "tidak", label: t("tidak") },
                              ]}
                              value={detail.hasVisa}
                              onChange={(value) => {
                                handleTravelDetailChange(idx, "hasVisa", value);
                                if (value !== "ya") {
                                  handleTravelDetailChange(
                                    idx,
                                    "visaNumber",
                                    "",
                                  );
                                }
                              }}
                            />
                          </FormField>
                        </div>

                        {detail.hasVisa === "ya" && (
                          <div className="mt-5 animate-in">
                            <FormField label={t("nomorVisa")} required>
                              <TextInput
                                id={\`visa-number-\${idx}\`}
                                placeholder={t("phNomorVisa")}
                                value={detail.visaNumber}
                                onChange={(e) =>
                                  handleTravelDetailChange(
                                    idx,
                                    "visaNumber",
                                    e.target.value,
                                  )
                                }
                              />
                            </FormField>
                          </div>
                        )}`;

const radioSectionReplacement = `<div className="mt-6 animate-in">
                          <FormField label={t("dokumenDimiliki") || "Dokumen yang dimiliki"} required>
                            <SelectInput
                              id={\`document-type-\${idx}\`}
                              placeholder={t("phPilih")}
                              options={[
                                { value: "visa", label: "Visa" },
                                { value: "kitas", label: "KITAS/KITAP" },
                              ]}
                              value={detail.documentType || ""}
                              onChange={(e) => {
                                handleTravelDetailChange(idx, "documentType", e.target.value);
                                handleTravelDetailChange(idx, "documentStatus", "");
                                handleTravelDetailChange(idx, "passportNumber", "");
                                handleTravelDetailChange(idx, "kitasNumber", "");
                              }}
                            />
                          </FormField>
                        </div>

                        {detail.documentType === "visa" && (
                          <div className="mt-5 animate-in">
                            <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
                              <div className="flex-1 w-full">
                                <FormField label="Nomor Paspor" required>
                                  <TextInput
                                    id={\`passport-number-\${idx}\`}
                                    placeholder="Masukkan Nomor Paspor"
                                    value={detail.passportNumber || ""}
                                    onChange={(e) => {
                                      handleTravelDetailChange(idx, "passportNumber", e.target.value);
                                      handleTravelDetailChange(idx, "documentStatus", "");
                                    }}
                                  />
                                </FormField>
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  if (!detail.passportNumber) return;
                                  if (detail.passportNumber === "12345678") {
                                    handleTravelDetailChange(idx, "documentStatus", "active");
                                  } else if (detail.passportNumber === "78945612") {
                                    setActiveVisaCheckIdx(idx);
                                    setVisaCheckModalOpen(true);
                                  } else {
                                    // For any other number, assume active for demo purposes or show inactive
                                    handleTravelDetailChange(idx, "documentStatus", "active");
                                  }
                                }}
                                className="px-5 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors md:h-[42px] mt-1 md:mt-0 w-full md:w-auto"
                              >
                                Cek Visa Aktif
                              </button>
                            </div>
                            {detail.documentStatus === "active" && (
                              <div className="mt-3 p-3 bg-green-50 border border-green-100 rounded-lg animate-in fade-in zoom-in duration-300">
                                <p className="text-sm text-green-700 font-medium flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                  </div>
                                  Visa aktif ditemukan
                                </p>
                              </div>
                            )}
                            {detail.documentStatus === "applied" && (
                              <div className="mt-3 p-3 bg-blue-50 border border-blue-100 rounded-lg animate-in fade-in zoom-in duration-300">
                                <p className="text-sm text-blue-700 font-medium flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                  </div>
                                  Pengajuan visa selesai
                                </p>
                              </div>
                            )}
                          </div>
                        )}

                        {detail.documentType === "kitas" && (
                          <div className="mt-5 animate-in">
                            <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
                              <div className="flex-1 w-full">
                                <FormField label="Nomor KITAS/KITAP" required>
                                  <TextInput
                                    id={\`kitas-number-\${idx}\`}
                                    placeholder="Masukkan Nomor KITAS/KITAP"
                                    value={detail.kitasNumber || ""}
                                    onChange={(e) => {
                                      handleTravelDetailChange(idx, "kitasNumber", e.target.value);
                                      handleTravelDetailChange(idx, "documentStatus", "");
                                    }}
                                  />
                                </FormField>
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  if (!detail.kitasNumber) return;
                                  handleTravelDetailChange(idx, "documentStatus", "active");
                                }}
                                className="px-5 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors md:h-[42px] mt-1 md:mt-0 w-full md:w-auto"
                              >
                                Kirim
                              </button>
                            </div>
                            {detail.documentStatus === "active" && (
                              <div className="mt-3 p-3 bg-green-50 border border-green-100 rounded-lg animate-in fade-in zoom-in duration-300">
                                <p className="text-sm text-green-700 font-medium flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                  </div>
                                  Dokumen valid
                                </p>
                              </div>
                            )}
                          </div>
                        )}`;

if (content.includes(radioSectionTarget)) {
  content = content.replace(radioSectionTarget, radioSectionReplacement);
}

// 5. Add Modals
const customModalCommentTarget = `{/* Customs Modal */}`;
const customModalCommentReplacement = `{/* Visa Check Modal */}
      {visaCheckModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 p-6 text-center border border-gray-100">
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-5 border border-red-100 shadow-sm shadow-red-100">
              <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">Tidak ada visa yang aktif</h3>
            <p className="text-sm text-gray-500 mb-6 px-2">Silakan ajukan visa untuk melanjutkan perjalanan Anda ke Indonesia.</p>
            <button
              type="button"
              onClick={() => {
                setVisaCheckModalOpen(false);
                setTimeout(() => setVisaOptionsModalOpen(true), 150);
              }}
              className="w-full py-3 bg-red-600 text-white text-sm font-bold rounded-xl hover:bg-red-700 transition-colors shadow-sm shadow-red-600/20"
            >
              OK Mengerti
            </button>
          </div>
        </div>
      )}

      {/* Visa Options Modal */}
      {visaOptionsModalOpen && activeVisaCheckIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">Pengajuan Visa</h3>
              <button onClick={() => setVisaOptionsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-6">Pilih jenis visa yang ingin Anda ajukan:</p>
            <div className="flex flex-col gap-3.5">
              <button
                type="button"
                onClick={() => {
                  handleTravelDetailChange(activeVisaCheckIdx, "documentStatus", "applied");
                  setVisaOptionsModalOpen(false);
                  setActiveVisaCheckIdx(null);
                }}
                className="group w-full p-4 border-2 border-teal-100/60 bg-teal-50/30 text-teal-800 font-semibold rounded-xl hover:bg-teal-50 hover:border-teal-400 transition-all text-left flex justify-between items-center shadow-sm"
              >
                <div>
                  <div className="text-base">Visa Exemption</div>
                  <div className="text-xs font-normal text-teal-600/70 mt-0.5">Bebas Visa Kunjungan</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-teal-100 group-hover:bg-teal-500 group-hover:text-white text-teal-600 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </div>
              </button>
              <button
                type="button"
                onClick={() => {
                  handleTravelDetailChange(activeVisaCheckIdx, "documentStatus", "applied");
                  setVisaOptionsModalOpen(false);
                  setActiveVisaCheckIdx(null);
                }}
                className="group w-full p-4 border-2 border-blue-100/60 bg-blue-50/30 text-blue-800 font-semibold rounded-xl hover:bg-blue-50 hover:border-blue-400 transition-all text-left flex justify-between items-center shadow-sm"
              >
                <div>
                  <div className="text-base">Visa on Arrival</div>
                  <div className="text-xs font-normal text-blue-600/70 mt-0.5">Visa Kunjungan Saat Kedatangan</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-100 group-hover:bg-blue-500 group-hover:text-white text-blue-600 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </div>
              </button>
            </div>
            <button
              type="button"
              onClick={() => {
                setVisaOptionsModalOpen(false);
                setActiveVisaCheckIdx(null);
              }}
              className="w-full mt-6 py-3 text-sm text-gray-500 font-semibold hover:text-gray-800 hover:bg-gray-50 rounded-xl transition-colors"
            >
              Batalkan Pengajuan
            </button>
          </div>
        </div>
      )}

      {/* Customs Modal */}`;

if (content.includes(customModalCommentTarget)) {
  content = content.replace(customModalCommentTarget, customModalCommentReplacement);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Updated app/page.tsx successfully.");
