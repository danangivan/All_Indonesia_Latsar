import React from "react";

export default function SummaryPage({
  travelers,
  travelDetails,
  declarations,
  healthDecl,
  transport,
  address,
  onReset,
  onEdit,
}: {
  travelers: any[];
  travelDetails: any[];
  declarations: any[];
  healthDecl: any[];
  transport: any;
  address: any;
  onReset: () => void;
  onEdit?: () => void;
}) {
  const [openTransport, setOpenTransport] = React.useState(false);
  const [openAddress, setOpenAddress] = React.useState(false);
  const mainTraveler = travelers[0] || {};
  const mainDetail = travelDetails[0] || {};
  const hasAnySymptoms = healthDecl?.some((decl) => decl?.hasSymptoms === "ya") || false;

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

              <div className="w-full flex flex-col gap-2">
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
                {(mainDetail?.documentStatus === "applied" || mainDetail?.documentStatus === "active") && (
                  <div className="w-full flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white text-xs font-semibold py-2.5 rounded hover:bg-blue-700 transition-colors">
                      Unduh Visa yang Telah Diajukan
                    </button>
                    <button className="px-3 py-2.5 bg-white border border-gray-200 text-gray-700 text-xs font-semibold rounded hover:bg-gray-50 transition-colors flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                      Cetak
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {hasAnySymptoms && (
          <div className="bg-red-50 border border-red-100 p-4 rounded-xl flex items-start gap-3">
            <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-xs text-red-700 font-medium">
              Terindikasi gejala (Harap lapor ke petugas kesehatan)
            </p>
          </div>
          )}

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
             {onEdit && (
               <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
                 <button onClick={onEdit} className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                   Edit Data Semua Penumpang
                 </button>
               </div>
             )}
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
             <div 
                className="p-4 border-b border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                onClick={() => setOpenTransport(!openTransport)}
             >
               <h3 className="font-bold text-sm text-gray-900">Moda Transportasi</h3>
               <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openTransport ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
             </div>
             {openTransport && (
               <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 bg-gray-50/30">
                 <div>
                   <p className="text-xs text-gray-400 font-medium mb-1">Moda Transportasi</p>
                   <p className="text-sm text-gray-900 font-medium uppercase">{transport?.mode || "UDARA"}</p>
                 </div>
                 {transport?.airlineName && (
                   <div>
                     <p className="text-xs text-gray-400 font-medium mb-1">Maskapai Penerbangan</p>
                     <p className="text-sm text-gray-900 font-medium uppercase">{transport.airlineName}</p>
                   </div>
                 )}
                 {transport?.shipName && (
                   <div>
                     <p className="text-xs text-gray-400 font-medium mb-1">Nama Kapal</p>
                     <p className="text-sm text-gray-900 font-medium uppercase">{transport.shipName}</p>
                   </div>
                 )}
                 {(transport?.flightNumber || transport?.flightCode) && (
                   <div>
                     <p className="text-xs text-gray-400 font-medium mb-1">Nomor Penerbangan</p>
                     <p className="text-sm text-gray-900 font-medium uppercase">{transport.flightCode} {transport.flightNumber}</p>
                   </div>
                 )}
               </div>
             )}
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
             <div 
                className="p-4 border-b border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                onClick={() => setOpenAddress(!openAddress)}
             >
               <h3 className="font-bold text-sm text-gray-900">Alamat di Indonesia</h3>
               <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openAddress ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
             </div>
             {openAddress && (
               <div className="p-5 grid grid-cols-1 gap-y-6 bg-gray-50/30">
                 <div>
                   <p className="text-xs text-gray-400 font-medium mb-1">Tipe Akomodasi</p>
                   <p className="text-sm text-gray-900 font-medium uppercase">{address?.accommodationType || "-"}</p>
                 </div>
                 {address?.hotelLabel && (
                   <div>
                     <p className="text-xs text-gray-400 font-medium mb-1">Nama Hotel / Tempat Menginap</p>
                     <p className="text-sm text-gray-900 font-medium uppercase">{address.hotelLabel}</p>
                   </div>
                 )}
                 <div>
                   <p className="text-xs text-gray-400 font-medium mb-1">Alamat Lengkap</p>
                   <p className="text-sm text-gray-900 font-medium uppercase">
                     {address?.fullAddress}
                     {address?.city && `, ${address.city}`}
                     {address?.province && `, ${address.province}`}
                   </p>
                 </div>
               </div>
             )}
          </div>

        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Pertanyaan yang Sering Diajukan (FAQ)
        </h3>
        <div className="space-y-4">
          <div className="border-b border-gray-100 pb-4">
            <h4 className="font-semibold text-sm text-gray-900 mb-1">Apakah saya perlu mencetak QR Code ini?</h4>
            <p className="text-sm text-gray-600 leading-relaxed">Tidak wajib. Anda dapat menyimpan QR Code ini di ponsel Anda dan menunjukkannya kepada petugas imigrasi saat kedatangan.</p>
          </div>
          <div className="border-b border-gray-100 pb-4">
            <h4 className="font-semibold text-sm text-gray-900 mb-1">Bagaimana jika saya salah mengisi data?</h4>
            <p className="text-sm text-gray-600 leading-relaxed">Anda dapat menekan tombol "Edit Data Semua Penumpang" pada bagian Detail Profil di atas untuk memperbaiki data sebelum Anda tiba di bandara/pelabuhan kedatangan.</p>
          </div>
          <div className="border-b border-gray-100 pb-4">
            <h4 className="font-semibold text-sm text-gray-900 mb-1">Berapa lama masa berlaku QR Code ini?</h4>
            <p className="text-sm text-gray-600 leading-relaxed">QR Code ini berlaku sesuai dengan tanggal kedatangan yang Anda jadwalkan, hingga Anda melewati pos pemeriksaan imigrasi dan karantina.</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-gray-900 mb-1">Apakah data saya aman?</h4>
            <p className="text-sm text-gray-600 leading-relaxed">Ya, seluruh data Anda dienkripsi secara aman dan hanya digunakan untuk keperluan resmi Imigrasi dan Badan Karantina Republik Indonesia.</p>
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
