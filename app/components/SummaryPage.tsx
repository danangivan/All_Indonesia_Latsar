import React from "react";

export default function SummaryPage({
  travelers,
  travelDetails,
  declarations,
  onReset,
}: {
  travelers: any[];
  travelDetails: any[];
  declarations: any[];
  onReset: () => void;
}) {
  const mainTraveler = travelers[0] || {};
  const mainDetail = travelDetails[0] || {};

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full mb-3">
          Pengunjung Asing
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Ringkasan Pengajuan
        </h1>
        <p className="text-sm text-gray-500">
          Berikut adalah data yang Anda masukkan saat mengajukan kartu kedatangan.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: QR & Alerts */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-3">
              <div className="w-1 h-5 bg-blue-500 rounded-full"></div>
              <h2 className="font-bold text-gray-900 text-sm">
                Kode QR Kedatangan
              </h2>
            </div>
            <div className="p-5 flex flex-col items-center">
              <h3 className="font-bold text-lg text-gray-900 uppercase">
                {mainTraveler.fullName || "LEE"}
              </h3>
              <p className="text-xs text-gray-500 mb-4 mt-1 uppercase text-center">
                Nomor Paspor: {mainTraveler.passportNo || "K58746325"}
                <br />
                Tanggal Kedatangan:{" "}
                {mainDetail.arrivalDate || "08 JUNI 2026"}
                <br />
                {mainTraveler.passportCountry || "CHINA"}
              </p>

              <div className="bg-white p-2 rounded-lg border-2 border-gray-100 shadow-sm mb-4">
                {/* Dummy QR Code */}
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=dummy-data"
                  alt="QR Code"
                  className="w-32 h-32"
                />
              </div>

              <p className="text-xs text-gray-500 font-medium mb-1">
                Nomor Kartu Kedatangan
              </p>
              <p className="text-sm font-bold text-gray-900 mb-4">
                2808080045513
              </p>

              <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded mb-6">
                Diajukan
              </div>

              <div className="w-full flex gap-2">
                <button className="flex-1 bg-navy-800 text-white text-xs font-semibold py-2.5 rounded hover:bg-navy-700 transition-colors">
                  Unduh Kartu Kedatangan
                </button>
                <button className="px-3 py-2.5 bg-white border border-gray-200 text-gray-700 text-xs font-semibold rounded hover:bg-gray-50 transition-colors flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Cetak
                </button>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-100 p-4 rounded-xl flex items-start gap-3">
            <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-xs text-red-700 font-medium">
              Terindikasi gejala (Harap lapor ke petugas kesehatan)
            </p>
          </div>

          <div className="bg-red-50 border border-red-100 p-4 rounded-xl flex items-start gap-3">
            <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-xs text-red-700 leading-relaxed">
              Sehubungan dengan merebaknya virus Nipah di beberapa negara, Badan Karantina Indonesia dengan ini memberlakukan larangan sementara terhadap pemasukan hewan, ikan, tumbuhan, serta produk turunannya ke dalam wilayah Negara Kesatuan Republik Indonesia.
            </p>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xs text-blue-800 font-medium">
              Kartu Kedatangan bukan visa
            </p>
          </div>

          <div className="bg-green-50/50 border border-green-200 p-4 rounded-xl flex items-center justify-between gap-4">
            <p className="text-xs text-green-800">
              Ajukan dan unduh visa Anda berdasarkan kebutuhan perjalanan Anda.
            </p>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold rounded transition-colors whitespace-nowrap">
              Ajukan Visa Saat Kedatangan (VOA)
            </button>
          </div>

          <div className="bg-white border border-gray-200 p-4 rounded-xl flex items-center justify-between gap-4 shadow-sm">
            <p className="text-xs text-gray-600">
              Jika perlu, Anda dapat memperbarui informasi yang dikirimkan sebelum perjalanan.
            </p>
            <button className="px-4 py-2 border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded transition-colors whitespace-nowrap">
              Ubah Data
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="p-5 border-b border-gray-100">
              <h2 className="font-bold text-gray-900 text-sm mb-1">Informasi Pengajuan</h2>
              <p className="text-xs text-gray-500">Berikut adalah rincian data Anda:</p>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 bg-gray-50/30">
              <div>
                <p className="text-xs text-gray-400 font-medium mb-1">Jenis Pengajuan</p>
                <p className="text-sm text-gray-900 font-medium">INDIVIDUAL</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium mb-1">Tanggal Pengajuan</p>
                <p className="text-sm text-gray-900 font-medium uppercase">
                  {new Date().toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" })}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium mb-1">Tanggal Kedatangan</p>
                <p className="text-sm text-gray-900 font-medium uppercase">{mainDetail.arrivalDate || "08 JUNI 2026"}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium mb-1">Tanggal Keberangkatan</p>
                <p className="text-sm text-gray-900 font-medium uppercase">{mainDetail.departureDate || "30 JUNI 2026"}</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
             <div className="p-4 border-b border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50">
               <h3 className="font-bold text-sm text-gray-900">Detail Profil</h3>
               <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
             </div>
             <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 bg-gray-50/30">
               <div>
                  <p className="text-xs text-gray-400 font-medium mb-1">Paspor/Negara/Wilayah</p>
                  <p className="text-sm text-gray-900 font-medium uppercase">{mainTraveler.passportCountry || "CHINA"}</p>
               </div>
               <div>
                  <p className="text-xs text-gray-400 font-medium mb-1">Nama Lengkap</p>
                  <p className="text-sm text-gray-900 font-medium uppercase">{mainTraveler.fullName || "LEE"}</p>
               </div>
               <div>
                  <p className="text-xs text-gray-400 font-medium mb-1">Tanggal Lahir</p>
                  <p className="text-sm text-gray-900 font-medium uppercase">{mainTraveler.birthDate || "01 JUNI 1993"}</p>
               </div>
               <div>
                  <p className="text-xs text-gray-400 font-medium mb-1">Negara/Tempat Lahir</p>
                  <p className="text-sm text-gray-900 font-medium uppercase">{mainTraveler.passportCountry || "CHINA"}</p>
               </div>
             </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
             <div className="p-4 border-b border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50">
               <h3 className="font-bold text-sm text-gray-900">Moda Transportasi</h3>
               <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
             </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
             <div className="p-4 border-b border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50">
               <h3 className="font-bold text-sm text-gray-900">Alamat di Indonesia</h3>
               <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
             </div>
          </div>

        </div>
      </div>

      <div className="pt-8 flex">
        <button
          onClick={onReset}
          className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}
