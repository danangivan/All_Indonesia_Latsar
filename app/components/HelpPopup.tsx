"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function HelpPopup({ currentStep }: { currentStep: number }) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const stepHelpContent = [
    // Step 0: Informasi Pribadi
    {
      title: "Panduan Pengisian: Informasi Pribadi",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
          <li>Pastikan data pribadi (Nama, Tanggal Lahir, Jenis Kelamin) diisi sesuai dengan <strong>paspor Anda yang masih berlaku</strong>.</li>
          <li>Nomor Paspor harus dimasukkan dengan benar tanpa spasi atau tanda hubung.</li>
          <li>Alamat email harus aktif karena <strong>bukti pengajuan (QR Code)</strong> akan dikirimkan ke email tersebut.</li>
          <li>Gunakan format internasional untuk nomor telepon (misal: +62...).</li>
        </ul>
      )
    },
    // Step 1: Detail Perjalanan
    {
      title: "Panduan Pengisian: Detail Perjalanan",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
          <li>Pilih moda transportasi yang Anda gunakan (Udara, Laut, atau Darat).</li>
          <li>Pilih pelabuhan atau bandara kedatangan pertama Anda di wilayah Indonesia.</li>
          <li>Masukkan tanggal kedatangan yang tepat sesuai dengan tiket pesawat/kapal Anda.</li>
          <li>Sebutkan alamat akomodasi secara spesifik (Hotel atau Tempat Tinggal) selama berada di Indonesia.</li>
        </ul>
      )
    },
    // Step 2: Deklarasi
    {
      title: "Panduan Pengisian: Deklarasi",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
          <li><strong>Deklarasi Bea Cukai:</strong> Jawab dengan jujur mengenai barang bawaan Anda, termasuk uang tunai lebih dari Rp 100 juta atau setaranya, serta barang kena cukai (alkohol/rokok) yang melebihi batas.</li>
          <li><strong>Deklarasi Kesehatan:</strong> Laporkan secara akurat jika Anda memiliki gejala penyakit menular atau telah mengunjungi wilayah berisiko baru-baru ini.</li>
          <li><strong>Karantina Pertanian:</strong> Deklarasikan jika Anda membawa produk hewan, tumbuhan, buah segar, atau daging olahan.</li>
        </ul>
      )
    }
  ];

  const currentHelp = stepHelpContent[currentStep] || {
    title: "Panduan Pengisian",
    content: <p className="text-sm text-slate-700">Ikuti instruksi pada layar untuk melengkapi pengajuan Anda.</p>
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-tr from-amber-500 to-yellow-300 text-white rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(251,191,36,0.5)] border border-white/40 hover:shadow-[0_12px_35px_rgba(251,191,36,0.7)] transition-all duration-300 hover:scale-110 z-[60] group"
        aria-label="Bantuan Prosedur"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 drop-shadow-md group-hover:-rotate-12 transition-transform duration-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-gradient-to-r from-amber-400 to-yellow-500 p-4 flex justify-between items-center">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                {currentHelp.title}
              </h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-amber-100 transition-colors p-1"
                aria-label="Tutup"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              {currentHelp.content}
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl transition-colors"
                >
                  Mengerti
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
