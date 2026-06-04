export type Language = "id" | "en" | "ja" | "zh" | "ar" | "ru" | "ko";

export const languageNames: Record<Language, string> = {
  id: "🇮🇩 Indonesia",
  en: "🇬🇧 English",
  ja: "🇯🇵 日本語",
  zh: "🇨🇳 中文",
  ar: "🇸🇦 العربية",
  ru: "🇷🇺 Русский",
  ko: "🇰🇷 한국어",
};

export const translations: Record<Language, Record<string, string>> = {
  id: {
    // Header
    situsWeb: "Situs Web Pemerintah Indonesia",
    languages: "Languages",
    bantuan: "Bantuan",

    // Breadcrumb & Title
    beranda: "Beranda",
    pageTitle: "Pengajuan Kartu Kedatangan",
    pageDescription:
      "Isi formulir di bawah ini secara benar dan lengkap. Informasi yang diberi tanda",
    pageDescriptionEnd: "wajib diisi dan tidak boleh dikosongkan.",

    // Steps
    step1: "Informasi Pribadi",
    step2: "Detail Perjalanan",
    step3: "Moda Transportasi",
    step4: "Deklarasi",

    // Form Card
    pratinjau: "Pratinjau Pengajuan Utama",

    // Data Pribadi
    dataPribadi: "Data Pribadi",
    dataPribadiDesc:
      "Pastikan data diri Anda terisi sesuai dengan paspor. Jika terdapat perubahan silahkan edit di bawah ini.",
    muatProfil: "Muat Profil",
    pasporNegara: "Paspor/Negara/Wilayah",
    namaLengkap: "Nama Lengkap",
    tanggalLahir: "Tanggal Lahir",
    negaraTempatLahir: "Negara/Tempat Lahir",
    jenisKelamin: "Jenis Kelamin",
    nomorPaspor: "Nomor Paspor",
    tanggalKadaluwarsa: "Tanggal Kadaluwarsa Paspor",

    // Placeholders
    phPilihNegara: "Pilih Negara/Wilayah",
    phNama: "Masukkan Nama Lengkap",
    phKelamin: "Pilih Jenis Kelamin",
    phNomorPaspor: "Masukkan Nomor Paspor",
    phTelepon: "Masukkan Nomor Telepon",
    phEmail: "Masukkan Email",

    // Gender options
    lakiLaki: "Laki-laki",
    perempuan: "Perempuan",

    // Informasi Akun
    infoAkun: "Informasi Akun",
    infoAkunDesc:
      "Masukkan informasi kontak Anda yang dapat dihubungi. Data akan digunakan untuk konfirmasi.",
    nomorPonsel: "Nomor Ponsel",
    email: "Email",
    tambahPelaku: "Tambah Pelaku Perjalanan",
    hapusPelaku: "Hapus Pelaku",
    travelerLabel: "Pelaku Perjalanan",

    // Detail Perjalanan (Step 2)
    detailPerjalanan: "Detail Perjalanan",
    detailPerjalananDesc:
      "Mohon lengkapi Kartu Kedatangan Anda sebelum memasuki Indonesia dengan mengisi informasi yang diperlukan.",
    tglKedatangan: "Tanggal Kedatangan di Indonesia",
    tglKeberangkatan: "Tanggal Keberangkatan dari Indonesia",
    punyaVisa: "Apakah Anda sudah memiliki Visa atau KITAS/KITAP?",
    ya: "Ya",
    tidak: "Tidak",
    phPilih: "Pilih",
    nomorVisa: "Nomor Visa atau KITAS/KITAP",
    phNomorVisa: "Masukkan Nomor Visa atau KITAS/KITAP",

    // Moda Transportasi & Alamat (Step 3)
    modaTransportasi: "Moda Transportasi",
    modaTransportasiDesc:
      "Silakan pilih moda transportasi yang akan Anda gunakan untuk memasuki Indonesia.",
    pilihModa: "Moda Transportasi",
    tujuanPerjalanan: "Tujuan Perjalanan",
    phTujuanPerjalanan: "Pilih Tujuan Perjalanan",
    udara: "Udara",
    laut: "Laut",
    phPilihModa: "Pilih Moda Transportasi",
    infoKolomUdara:
      "Kolom-kolom di bawah ini ditampilkan pada moda transportasi UDARA yang dipilih di atas.",
    infoKolomLaut:
      "Kolom-kolom di bawah ini ditampilkan pada moda transportasi LAUT yang dipilih di atas.",
    tempatKedatangan: "Tempat Kedatangan",
    phTempatKedatangan: "Pilih Tempat Kedatangan",
    jenisTransportasiUdara: "Jenis Transportasi Udara",
    phJenisTransportasiUdara: "Pilih Jenis Transportasi Udara",
    namaPenerbangan: "Nama Penerbangan",
    phNamaPenerbangan: "Pilih Nama Penerbangan",
    nomorPenerbangan: "Nomor Penerbangan",
    phNomorPenerbangan: "Masukkan Nomor Penerbangan",
    jenisKapal: "Jenis Kapal",
    phJenisKapal: "Pilih Jenis Kapal",
    namaKapal: "Nama Kapal",
    phNamaKapal: "Masukkan Nama Kapal",
    kode: "Kode",
    alamatIndonesia: "Alamat di Indonesia",
    alamatIndonesiaDesc:
      "Mohon berikan alamat tempat Anda akan menginap di Indonesia.",
    jenisTempatTinggal: "Jenis Tempat Tinggal",
    phJenisTempatTinggal: "Pilih Jenis Tempat Tinggal",
    infoKolomRumah:
      "Kolom-kolom di bawah ini ditampilkan pada jenis tempat tinggal RUMAH yang dipilih di atas.",
    infoKolomHotel:
      "Kolom-kolom di bawah ini ditampilkan pada jenis tempat tinggal HOTEL yang dipilih di atas.",
    provinsi: "Provinsi",
    phProvinsi: "Pilih Provinsi",
    kota: "Kota",
    phKota: "Pilih Kota",
    alamatLengkap: "Alamat di Indonesia",
    phAlamatLengkap: "Masukkan Alamat di Indonesia",
    kantorImigrasi: "Kantor Imigrasi Terdekat",
    namaHotel: "Nama Hotel",
    phNamaHotel: "Ketik nama hotel untuk mencari...",
    akomodasi: "Akomodasi",
    phAkomodasi: "Pilih Akomodasi",
    hanyaTransit: "Hanya Transit",

    // Deklarasi (Step 4)
    deklarasiAnggota: "Deklarasi Anggota Grup",
    deklarasiAnggotaDesc:
      "Mohon lengkapi Kartu Kedatangan Anda sebelum memasuki Indonesia dengan mengisi informasi yang diperlukan.",
    ketuaPelaku: "Ketua Pelaku Perjalanan",
    deklarasiSelesai: "Pertanyaan Deklarasi Selesai",
    isiDeklarasi: "Isi pertanyaan deklarasi",
    // Deklarasi Kesehatan
    dekKesehatanTitle: "Deklarasi Kesehatan",
    dekKesehatanDesc:
      "Sesuai dengan protokol kesehatan nasional Indonesia, mohon lengkapi formulir deklarasi kesehatan untuk mendukung pemantauan kesehatan masyarakat dan mencegah penyebaran penyakit menular.",
    dekKesehatanQ1:
      "Apakah Anda memiliki gejala berikut: demam, batuk, pilek, sesak napas, sakit tenggorokan, atau lesi kulit/ruam?",
    dekKesehatanPilihGejala: "Pilih gejala Anda (Bisa memilih lebih dari satu)",
    dekKesehatanBatuk: "BATUK",
    dekKesehatanDemam: "DEMAM",
    dekKesehatanLesi: "LESI / RUAM / BERCAK KULIT",
    dekKesehatanPilek: "PILEK",
    dekKesehatanTenggorokan: "SAKIT TENGGOROKAN",
    dekKesehatanSesak: "SESAK NAPAS",
    dekKesehatanTidakAda: "TIDAK ADA GEJALA",
    dekKesehatanGejalaTerpilih: "Gejala Terpilih:",
    dekKesehatanQ2:
      "Negara asal keberangkatan, transit, dan negara lain yang Anda kunjungi dalam waktu 21 hari sebelum keberangkatan ke Indonesia (Bisa memilih lebih dari satu)",
    // Deklarasi Karantina
    dekKarantinaTitle: "Deklarasi Karantina",
    dekKarantinaDesc:
      "Mohon isi deklarasi karantina sesuai dengan kondisi Anda saat ini, yang nantinya akan diverifikasi oleh petugas karantina.",
    dekKarantinaQ1:
      "Apakah Anda membawa hewan, ikan, tumbuhan, dan/atau produk olahannya?",
    dekKarantinaDescKomoditas: "Deskripsi komoditas yang dibawa",
    dekKarantinaKategori: "Kategori",
    dekKarantinaSubKategori: "Sub-kategori",
    dekKarantinaKomoditasTerpilih: "Komoditas terpilih:",
    dekKarantinaBentukJenis: "Sebutkan bentuk atau jenis komoditas",
    dekKarantinaJumlah: "Jumlah komoditas yang dibawa",
    dekKarantinaQ2:
      "Apakah komoditas disertai dengan sertifikat karantina (Sertifikat Fitosanitasi/Sertifikat Kesehatan Hewan)?",
    dekKarantinaDariNegara:
      "Dari negara mana Anda memperoleh komoditas tersebut?",
    dekKarantinaPhDariNegara: "Pilih negara",
    customsTitle:
      "Customs Declaration (BC 2.2) - Pemberitahuan Pabean Barang yang Dibawa oleh Penumpang dan Awak Sarana Pengangkut",
    customsDesc:
      "Halaman ini merupakan bagian untuk memberitahukan barang bawaan Anda kepada Petugas Bea dan Cukai.",
    infoDaftarBarang:
      "Silakan tekan tombol ini untuk membuka halaman informasi sebelum menjawab pertanyaan di bawah.",
    infoDaftarBarangWajib:
      "Silakan tekan tombol ini untuk mengetahui daftar barang yang wajib diberitahukan.",
    jumlahBagasi: "Jumlah Bagasi Yang Tiba Bersama Anda",
    phJumlahBagasi: "Masukkan Jumlah Bagasi Yang Tiba Bersama Anda",
    pcsKoli: "Pcs/Koli",
    barangWajib:
      "Apakah Anda membawa barang yang wajib diberitahukan kepada Bea dan Cukai?",
    imeiQuestion:
      "Apakah anda membawa Telepon Seluler, Komputer Genggam, dan Komputer Tablet yang dibeli/diperoleh di luar negeri dan akan digunakan di Indonesia dengan menggunakan jaringan seluler Indonesia? (Registrasi IMEI)",
    imeiNote:
      "(WNA yang mengunjungi Indonesia tidak lebih dari 90 hari, tidak perlu melakukan registrasi IMEI pada Bea Cukai di tempat kedatangan.)",
    persetujuanDeklarasi:
      "Saya, Pemohon, dengan ini menyatakan bahwa saya memahami dan menyetujui semua Informasi dan",
    deklarasiLink: "Deklarasi",
    dalamAplikasi: "dalam aplikasi ini.",
    kirim: "Kirim",
    kembaliKeList: "Kembali ke Daftar",

    // Navigation
    back: "Kembali",
    next: "Selanjutnya",

    // Footer
    dirjenImigrasi: "Direktorat Jenderal Imigrasi",
    republikIndonesia: "Republik Indonesia",
    alamatKantor: "Jl. H.R. Rasuna Said Kav. X-6 No. 8, Kuningan, Jakarta",
    alamatKantor2: "Selatan, DKI Jakarta, Indonesia",
  },

  en: {
    situsWeb: "Indonesian Government Website",
    languages: "Languages",
    bantuan: "Help",

    beranda: "Home",
    pageTitle: "Arrival Card Application",
    pageDescription:
      "Fill in the form below correctly and completely. Information marked with",
    pageDescriptionEnd: "is required and must not be left blank.",

    step1: "Personal Information",
    step2: "Travel Details",
    step3: "Mode of Transport",
    step4: "Declaration",

    pratinjau: "Main Application Preview",

    dataPribadi: "Personal Data",
    dataPribadiDesc:
      "Make sure your personal data matches your passport. If there are any changes, please edit below.",
    muatProfil: "Load Profile",
    pasporNegara: "Passport/Country/Region",
    namaLengkap: "Full Name",
    tanggalLahir: "Date of Birth",
    negaraTempatLahir: "Country/Place of Birth",
    jenisKelamin: "Gender",
    nomorPaspor: "Passport Number",
    tanggalKadaluwarsa: "Passport Expiry Date",

    phPilihNegara: "Select Country/Region",
    phNama: "Enter Full Name",
    phKelamin: "Select Gender",
    phNomorPaspor: "Enter Passport Number",
    phTelepon: "Enter Phone Number",
    phEmail: "Enter Email",

    lakiLaki: "Male",
    perempuan: "Female",

    infoAkun: "Account Information",
    infoAkunDesc:
      "Enter your reachable contact information. Data will be used for confirmation.",
    nomorPonsel: "Mobile Number",
    email: "Email",
    tambahPelaku: "Add Traveler",
    hapusPelaku: "Remove Traveler",
    travelerLabel: "Traveler",

    detailPerjalanan: "Travel Details",
    detailPerjalananDesc:
      "Please complete your Arrival Card before entering Indonesia by filling in the required information.",
    tglKedatangan: "Date of Arrival in Indonesia",
    tglKeberangkatan: "Date of Departure from Indonesia",
    punyaVisa: "Do you already have a Visa or KITAS/KITAP?",
    ya: "Yes",
    tidak: "No",
    phPilih: "Select",
    nomorVisa: "Visa or KITAS/KITAP Number",
    phNomorVisa: "Enter Visa or KITAS/KITAP Number",

    modaTransportasi: "Mode of Transport",
    modaTransportasiDesc:
      "Please select the mode of transport you will use to enter Indonesia.",
    pilihModa: "Mode of Transport",
    tujuanPerjalanan: "Travel Purpose",
    phTujuanPerjalanan: "Select Travel Purpose",
    udara: "Air",
    laut: "Sea",
    phPilihModa: "Select Mode of Transport",
    infoKolomUdara:
      "The fields below are displayed for the AIR mode of transport selected above.",
    infoKolomLaut:
      "The fields below are displayed for the SEA mode of transport selected above.",
    tempatKedatangan: "Place of Arrival",
    phTempatKedatangan: "Select Place of Arrival",
    jenisTransportasiUdara: "Air Transport Type",
    phJenisTransportasiUdara: "Select Air Transport Type",
    namaPenerbangan: "Airline Name",
    phNamaPenerbangan: "Select Airline Name",
    nomorPenerbangan: "Flight Number",
    phNomorPenerbangan: "Enter Flight Number",
    jenisKapal: "Ship Type",
    phJenisKapal: "Select Ship Type",
    namaKapal: "Ship Name",
    phNamaKapal: "Enter Ship Name",
    kode: "Code",
    alamatIndonesia: "Address in Indonesia",
    alamatIndonesiaDesc:
      "Please provide the address where you will be staying in Indonesia.",
    jenisTempatTinggal: "Type of Accommodation",
    phJenisTempatTinggal: "Select Accommodation Type",
    infoKolomRumah:
      "The fields below are displayed for the HOUSE accommodation type selected above.",
    infoKolomHotel:
      "The fields below are displayed for the HOTEL accommodation type selected above.",
    provinsi: "Province",
    phProvinsi: "Select Province",
    kota: "City",
    phKota: "Select City",
    alamatLengkap: "Address in Indonesia",
    phAlamatLengkap: "Enter Address in Indonesia",
    kantorImigrasi: "Nearest Immigration Office",
    namaHotel: "Hotel Name",
    phNamaHotel: "Type hotel name to search...",
    akomodasi: "Accommodation",
    phAkomodasi: "Select Accommodation",
    hanyaTransit: "Transit Only",

    // Declaration (Step 4)
    deklarasiAnggota: "Group Member Declaration",
    deklarasiAnggotaDesc:
      "Please complete your Arrival Card before entering Indonesia by filling in the required information.",
    ketuaPelaku: "Lead Traveler",
    deklarasiSelesai: "Declaration Questions Completed",
    isiDeklarasi: "Fill in declaration questions",
    // Health Declaration
    dekKesehatanTitle: "Health Declaration",
    dekKesehatanDesc:
      "In accordance with Indonesia's national health protocol, please complete the health declaration form to support public health monitoring and prevent the spread of infectious diseases.",
    dekKesehatanQ1:
      "Do you have the following symptoms: fever, cough, cold, shortness of breath, sore throat, or skin lesions/rash?",
    dekKesehatanPilihGejala:
      "Select your symptoms (You can select more than one)",
    dekKesehatanBatuk: "COUGH",
    dekKesehatanDemam: "FEVER",
    dekKesehatanLesi: "LESION / RASH / SKIN SPOTS",
    dekKesehatanPilek: "COLD",
    dekKesehatanTenggorokan: "SORE THROAT",
    dekKesehatanSesak: "SHORTNESS OF BREATH",
    dekKesehatanTidakAda: "NO SYMPTOMS",
    dekKesehatanGejalaTerpilih: "Selected Symptoms:",

    dekKesehatanQ2:
      "Country of departure, transit, and other countries you visited within 21 days before departure to Indonesia (You can select more than one)",
    // Quarantine Declaration
    dekKarantinaTitle: "Quarantine Declaration",
    dekKarantinaDesc:
      "Please fill in the quarantine declaration according to your current condition, which will be verified by quarantine officers.",
    dekKarantinaQ1:
      "Are you carrying animals, fish, plants, and/or processed products?",
    dekKarantinaDescKomoditas: "Description of commodities carried",
    dekKarantinaKategori: "Category",
    dekKarantinaSubKategori: "Sub-category",
    dekKarantinaKomoditasTerpilih: "Selected commodities:",
    dekKarantinaBentukJenis: "Specify the form or type of commodity",
    dekKarantinaJumlah: "Quantity of commodities carried",
    dekKarantinaQ2:
      "Is the commodity accompanied by a quarantine certificate (Phytosanitary Certificate/Animal Health Certificate)?",
    dekKarantinaDariNegara: "From which country did you obtain the commodity?",
    dekKarantinaPhDariNegara: "Select country",
    customsTitle:
      "Customs Declaration (BC 2.2) - Customs Notification of Goods Carried by Passengers and Crew",
    customsDesc:
      "This page is for declaring your carried goods to the Customs and Excise Officer.",
    infoDaftarBarang:
      "Press this button to open information page before answering the questions below.",
    infoDaftarBarangWajib:
      "Press this button to see the list of goods that must be declared.",
    jumlahBagasi: "Number of Baggage Arriving With You",
    phJumlahBagasi: "Enter Number of Baggage Arriving With You",
    pcsKoli: "Pcs",
    barangWajib:
      "Are you carrying goods that must be declared to Customs and Excise?",
    imeiQuestion:
      "Are you carrying Mobile Phones, Handheld Computers, and Tablet Computers purchased/obtained abroad that will be used in Indonesia using the Indonesian cellular network? (IMEI Registration)",
    imeiNote:
      "(Foreigners visiting Indonesia for no more than 90 days do not need to register IMEI at Customs at the place of arrival.)",
    persetujuanDeklarasi:
      "I, the Applicant, hereby declare that I understand and agree to all Information and",
    deklarasiLink: "Declaration",
    dalamAplikasi: "in this application.",
    kirim: "Submit",
    kembaliKeList: "Back to List",

    back: "Back",
    next: "Next",

    dirjenImigrasi: "Directorate General of Immigration",
    republikIndonesia: "Republic of Indonesia",
    alamatKantor: "Jl. H.R. Rasuna Said Kav. X-6 No. 8, Kuningan, Jakarta",
    alamatKantor2: "South, DKI Jakarta, Indonesia",
  },

  ja: {
    situsWeb: "インドネシア政府ウェブサイト",
    languages: "言語",
    bantuan: "ヘルプ",

    beranda: "ホーム",
    pageTitle: "到着カード申請",
    pageDescription: "以下のフォームに正確かつ完全に記入してください。",
    pageDescriptionEnd: "が付いた項目は必須です。",

    step1: "個人情報",
    step2: "旅行詳細",
    step3: "交通手段",
    step4: "申告",

    pratinjau: "申請プレビュー",

    dataPribadi: "個人データ",
    dataPribadiDesc:
      "パスポートに記載されている通りに個人データを入力してください。変更がある場合は以下で編集してください。",
    muatProfil: "プロフィール読込",
    pasporNegara: "パスポート/国/地域",
    namaLengkap: "氏名",
    tanggalLahir: "生年月日",
    negaraTempatLahir: "出生国/出生地",
    jenisKelamin: "性別",
    nomorPaspor: "パスポート番号",
    tanggalKadaluwarsa: "パスポート有効期限",

    phPilihNegara: "国/地域を選択",
    phNama: "氏名を入力",
    phKelamin: "性別を選択",
    phNomorPaspor: "パスポート番号を入力",
    phTelepon: "電話番号を入力",
    phEmail: "メールアドレスを入力",

    lakiLaki: "男性",
    perempuan: "女性",

    infoAkun: "アカウント情報",
    infoAkunDesc:
      "連絡可能な連絡先情報を入力してください。データは確認に使用されます。",
    nomorPonsel: "携帯電話番号",
    email: "メール",
    tambahPelaku: "旅行者を追加",
    hapusPelaku: "旅行者を削除",
    travelerLabel: "旅行者",

    detailPerjalanan: "旅行詳細",
    detailPerjalananDesc:
      "インドネシア入国前に、必要な情報を入力して到着カードを完成させてください。",
    tglKedatangan: "インドネシア到着日",
    tglKeberangkatan: "インドネシア出発日",
    punyaVisa: "ビザまたはKITAS/KITAPをお持ちですか？",
    ya: "はい",
    tidak: "いいえ",
    phPilih: "選択",
    nomorVisa: "ビザまたはKITAS/KITAP番号",
    phNomorVisa: "ビザまたはKITAS/KITAP番号を入力",

    // Moda Transportasi & Alamat (Step 3)
    modaTransportasi: "交通手段",
    modaTransportasiDesc:
      "インドネシアに入国する際の交通手段を選択してください。",
    pilihModa: "交通手段",
    tujuanPerjalanan: "渡航目的",
    phTujuanPerjalanan: "渡航目的を選択",
    udara: "航空",
    laut: "海上",
    phPilihModa: "交通手段を選択",
    infoKolomUdara: "以下の項目は上記で選択した航空に表示されます。",
    infoKolomLaut: "以下の項目は上記で選択した海上に表示されます。",
    tempatKedatangan: "到着地",
    phTempatKedatangan: "到着地を選択",
    jenisTransportasiUdara: "航空輸送の種類",
    phJenisTransportasiUdara: "航空輸送の種類を選択",
    namaPenerbangan: "航空会社名",
    phNamaPenerbangan: "航空会社名を選択",
    nomorPenerbangan: "便名",
    phNomorPenerbangan: "便名を入力",
    jenisKapal: "船舶の種類",
    phJenisKapal: "船舶の種類を選択",
    namaKapal: "船名",
    phNamaKapal: "船名を入力",
    kode: "コード",
    alamatIndonesia: "インドネシアの住所",
    alamatIndonesiaDesc: "インドネシアでの滞在先住所を入力してください。",
    jenisTempatTinggal: "宿泊施設の種類",
    phJenisTempatTinggal: "宿泊施設の種類を選択",
    infoKolomRumah: "以下の項目は上記で選択した住宅に表示されます。",
    infoKolomHotel: "以下の項目は上記で選択したホテルに表示されます。",
    provinsi: "州",
    phProvinsi: "州を選択",
    kota: "市",
    phKota: "市を選択",
    alamatLengkap: "インドネシアの住所",
    phAlamatLengkap: "インドネシアの住所を入力",
    kantorImigrasi: "最寄りの入国管理局",
    namaHotel: "ホテル名",
    phNamaHotel: "ホテル名を入力して検索...",
    akomodasi: "宿泊施設",
    phAkomodasi: "宿泊施設を選択",
    hanyaTransit: "トランジットのみ",

    // 申告 (Step 4)
    deklarasiAnggota: "グループメンバー申告",
    deklarasiAnggotaDesc:
      "インドネシア入国前に、必要な情報を入力して到着カードを完成させてください。",
    ketuaPelaku: "リーダー旅行者",
    deklarasiSelesai: "申告質問完了",
    isiDeklarasi: "申告質問に記入",
    // Health Declaration
    dekKesehatanTitle: "Health Declaration",
    dekKesehatanDesc:
      "In accordance with Indonesia's national health protocol, please complete the health declaration form to support public health monitoring and prevent the spread of infectious diseases.",
    dekKesehatanQ1:
      "Do you have the following symptoms: fever, cough, cold, shortness of breath, sore throat, or skin lesions/rash?",
    dekKesehatanPilihGejala:
      "Select your symptoms (You can select more than one)",
    dekKesehatanBatuk: "COUGH",
    dekKesehatanDemam: "FEVER",
    dekKesehatanLesi: "LESION / RASH / SKIN SPOTS",
    dekKesehatanPilek: "COLD",
    dekKesehatanTenggorokan: "SORE THROAT",
    dekKesehatanSesak: "SHORTNESS OF BREATH",
    dekKesehatanTidakAda: "NO SYMPTOMS",
    dekKesehatanGejalaTerpilih: "Selected Symptoms:",
    dekKesehatanQ2:
      "Country of departure, transit, and other countries you visited within 21 days before departure to Indonesia (You can select more than one)",
    // Quarantine Declaration
    dekKarantinaTitle: "Quarantine Declaration",
    dekKarantinaDesc:
      "Please fill in the quarantine declaration according to your current condition, which will be verified by quarantine officers.",
    dekKarantinaQ1:
      "Are you carrying animals, fish, plants, and/or processed products?",
    dekKarantinaDescKomoditas: "Description of commodities carried",
    dekKarantinaKategori: "Category",
    dekKarantinaSubKategori: "Sub-category",
    dekKarantinaKomoditasTerpilih: "Selected commodities:",
    dekKarantinaBentukJenis: "Specify the form or type of commodity",
    dekKarantinaJumlah: "Quantity of commodities carried",
    dekKarantinaQ2:
      "Is the commodity accompanied by a quarantine certificate (Phytosanitary Certificate/Animal Health Certificate)?",
    dekKarantinaDariNegara: "From which country did you obtain the commodity?",
    dekKarantinaPhDariNegara: "Select country",
    customsTitle: "税関申告 (BC 2.2) - 旅客・乗務員の持込品に関する税関通知",
    customsDesc: "このページは、税関職員に所持品を申告するためのものです。",
    infoDaftarBarang:
      "以下の質問に答える前に、情報ページを開くにはこのボタンを押してください。",
    infoDaftarBarangWajib:
      "申告が必要な物品のリストを確認するにはこのボタンを押してください。",
    jumlahBagasi: "同伴手荷物の数",
    phJumlahBagasi: "同伴手荷物の数を入力",
    pcsKoli: "個",
    barangWajib: "税関に申告が必要な物品を携帯していますか？",
    imeiQuestion:
      "海外で購入・取得した携帯電話、ハンドヘルドコンピュータ、タブレットで、インドネシアの携帯ネットワークを使用するものを持っていますか？（IMEI登録）",
    imeiNote:
      "（90日以内の訪問外国人は到着地の税関でIMEI登録を行う必要はありません。）",
    persetujuanDeklarasi: "私、申請者は、すべての情報と",
    deklarasiLink: "申告",
    dalamAplikasi: "を理解し同意することをここに宣言します。",
    kirim: "送信",
    kembaliKeList: "リストに戻る",

    back: "戻る",
    next: "次へ",

    dirjenImigrasi: "入国管理総局",
    republikIndonesia: "インドネシア共和国",
    alamatKantor: "Jl. H.R. Rasuna Said Kav. X-6 No. 8, Kuningan, Jakarta",
    alamatKantor2: "South, DKI Jakarta, Indonesia",
  },

  zh: {
    situsWeb: "印度尼西亚政府网站",
    languages: "语言",
    bantuan: "帮助",

    beranda: "首页",
    pageTitle: "到达卡申请",
    pageDescription: "请正确完整地填写以下表格。标有",
    pageDescriptionEnd: "的信息为必填项，不可留空。",

    step1: "个人信息",
    step2: "旅行详情",
    step3: "交通方式",
    step4: "申报",

    pratinjau: "申请预览",

    dataPribadi: "个人资料",
    dataPribadiDesc: "请确保您的个人资料与护照一致。如有变更，请在下方编辑。",
    muatProfil: "加载资料",
    pasporNegara: "护照/国家/地区",
    namaLengkap: "全名",
    tanggalLahir: "出生日期",
    negaraTempatLahir: "出生国家/出生地",
    jenisKelamin: "性别",
    nomorPaspor: "护照号码",
    tanggalKadaluwarsa: "护照到期日",

    phPilihNegara: "选择国家/地区",
    phNama: "输入全名",
    phKelamin: "选择性别",
    phNomorPaspor: "输入护照号码",
    phTelepon: "输入电话号码",
    phEmail: "输入电子邮件",

    lakiLaki: "男",
    perempuan: "女",

    infoAkun: "账户信息",
    infoAkunDesc: "请输入您可联系的联系方式。数据将用于确认。",
    nomorPonsel: "手机号码",
    email: "电子邮件",
    tambahPelaku: "添加旅行者",
    hapusPelaku: "删除旅行者",
    travelerLabel: "旅行者",

    detailPerjalanan: "旅行详情",
    detailPerjalananDesc:
      "请在进入印度尼西亚之前填写所需信息以完成您的到达卡。",
    tglKedatangan: "抵达印度尼西亚日期",
    tglKeberangkatan: "离开印度尼西亚日期",
    punyaVisa: "您是否已持有签证或KITAS/KITAP？",
    ya: "是",
    tidak: "否",
    phPilih: "选择",
    nomorVisa: "签证或KITAS/KITAP号码",
    phNomorVisa: "请输入签证或KITAS/KITAP号码",

    // Moda Transportasi & Alamat (Step 3)
    modaTransportasi: "交通方式",
    modaTransportasiDesc: "请选择您将用于进入印度尼西亚的交通方式。",
    pilihModa: "交通方式",
    tujuanPerjalanan: "旅行目的",
    phTujuanPerjalanan: "选择旅行目的",
    udara: "航空",
    laut: "海运",
    phPilihModa: "选择交通方式",
    infoKolomUdara: "以下字段显示的是上方选择的航空交通方式。",
    infoKolomLaut: "以下字段显示的是上方选择的海运交通方式。",
    tempatKedatangan: "到达地点",
    phTempatKedatangan: "选择到达地点",
    jenisTransportasiUdara: "航空运输类型",
    phJenisTransportasiUdara: "选择航空运输类型",
    namaPenerbangan: "航空公司名称",
    phNamaPenerbangan: "选择航空公司名称",
    nomorPenerbangan: "航班号",
    phNomorPenerbangan: "输入航班号",
    jenisKapal: "船舶类型",
    phJenisKapal: "选择船舶类型",
    namaKapal: "船名",
    phNamaKapal: "输入船名",
    kode: "代码",
    alamatIndonesia: "印度尼西亚地址",
    alamatIndonesiaDesc: "请提供您在印度尼西亚的住宿地址。",
    jenisTempatTinggal: "住宿类型",
    phJenisTempatTinggal: "选择住宿类型",
    infoKolomRumah: "以下字段显示的是上方选择的住宅住宿类型。",
    infoKolomHotel: "以下字段显示的是上方选择的酒店住宿类型。",
    provinsi: "省份",
    phProvinsi: "选择省份",
    kota: "城市",
    phKota: "选择城市",
    alamatLengkap: "印度尼西亚地址",
    phAlamatLengkap: "输入印度尼西亚地址",
    kantorImigrasi: "最近的移民局",
    namaHotel: "酒店名称",
    phNamaHotel: "输入酒店名称搜索...",
    akomodasi: "住宿",
    phAkomodasi: "选择住宿",
    hanyaTransit: "仅过境",

    // 申报 (Step 4)
    deklarasiAnggota: "团体成员申报",
    deklarasiAnggotaDesc:
      "请在进入印度尼西亚之前填写所需信息以完成您的到达卡。",
    ketuaPelaku: "领队旅客",
    deklarasiSelesai: "申报问题已完成",
    isiDeklarasi: "填写申报问题",
    // Health Declaration
    dekKesehatanTitle: "Health Declaration",
    dekKesehatanDesc:
      "In accordance with Indonesia's national health protocol, please complete the health declaration form to support public health monitoring and prevent the spread of infectious diseases.",
    dekKesehatanQ1:
      "Do you have the following symptoms: fever, cough, cold, shortness of breath, sore throat, or skin lesions/rash?",
    dekKesehatanPilihGejala:
      "Select your symptoms (You can select more than one)",
    dekKesehatanBatuk: "COUGH",
    dekKesehatanDemam: "FEVER",
    dekKesehatanLesi: "LESION / RASH / SKIN SPOTS",
    dekKesehatanPilek: "COLD",
    dekKesehatanTenggorokan: "SORE THROAT",
    dekKesehatanSesak: "SHORTNESS OF BREATH",
    dekKesehatanTidakAda: "NO SYMPTOMS",
    dekKesehatanGejalaTerpilih: "Selected Symptoms:",
    dekKesehatanQ2:
      "Country of departure, transit, and other countries you visited within 21 days before departure to Indonesia (You can select more than one)",
    // Quarantine Declaration
    dekKarantinaTitle: "Quarantine Declaration",
    dekKarantinaDesc:
      "Please fill in the quarantine declaration according to your current condition, which will be verified by quarantine officers.",
    dekKarantinaQ1:
      "Are you carrying animals, fish, plants, and/or processed products?",
    dekKarantinaDescKomoditas: "Description of commodities carried",
    dekKarantinaKategori: "Category",
    dekKarantinaSubKategori: "Sub-category",
    dekKarantinaKomoditasTerpilih: "Selected commodities:",
    dekKarantinaBentukJenis: "Specify the form or type of commodity",
    dekKarantinaJumlah: "Quantity of commodities carried",
    dekKarantinaQ2:
      "Is the commodity accompanied by a quarantine certificate (Phytosanitary Certificate/Animal Health Certificate)?",
    dekKarantinaDariNegara: "From which country did you obtain the commodity?",
    dekKarantinaPhDariNegara: "Select country",
    customsTitle: "海关申报 (BC 2.2) - 旅客和机组人员携带物品的海关通知",
    customsDesc: "此页面用于向海关官员申报您的随身物品。",
    infoDaftarBarang: "在回答以下问题之前，请按此按钮打开信息页面。",
    infoDaftarBarangWajib: "按此按钮查看必须申报的物品清单。",
    jumlahBagasi: "随身行李数量",
    phJumlahBagasi: "输入随身行李数量",
    pcsKoli: "件",
    barangWajib: "您是否携带了必须向海关申报的物品？",
    imeiQuestion:
      "您是否携带在国外购买/获得的手机、掌上电脑和平板电脑，并将在印度尼西亚使用印度尼西亚蜂窝网络？（IMEI注册）",
    imeiNote: "（访问印度尼西亚不超过90天的外国人无需在到达地海关注册IMEI。）",
    persetujuanDeklarasi: "我，申请人，特此声明我理解并同意所有信息和",
    deklarasiLink: "申报",
    dalamAplikasi: "在此应用程序中。",
    kirim: "提交",
    kembaliKeList: "返回列表",

    back: "返回",
    next: "下一步",

    dirjenImigrasi: "移民总局",
    republikIndonesia: "印度尼西亚共和国",
    alamatKantor: "Jl. H.R. Rasuna Said Kav. X-6 No. 8, Kuningan, Jakarta",
    alamatKantor2: "South, DKI Jakarta, Indonesia",
  },

  ar: {
    situsWeb: "الموقع الرسمي للحكومة الإندونيسية",
    languages: "اللغات",
    bantuan: "مساعدة",

    beranda: "الرئيسية",
    pageTitle: "طلب بطاقة الوصول",
    pageDescription:
      "املأ النموذج أدناه بشكل صحيح وكامل. المعلومات المميزة بعلامة",
    pageDescriptionEnd: "مطلوبة ويجب عدم تركها فارغة.",

    step1: "المعلومات الشخصية",
    step2: "تفاصيل السفر",
    step3: "وسيلة النقل",
    step4: "الإقرار",

    pratinjau: "معاينة الطلب الرئيسي",

    dataPribadi: "البيانات الشخصية",
    dataPribadiDesc:
      "تأكد من أن بياناتك الشخصية تتطابق مع جواز سفرك. إذا كانت هناك تغييرات، يرجى التعديل أدناه.",
    muatProfil: "تحميل الملف",
    pasporNegara: "جواز السفر/البلد/المنطقة",
    namaLengkap: "الاسم الكامل",
    tanggalLahir: "تاريخ الميلاد",
    negaraTempatLahir: "بلد/مكان الميلاد",
    jenisKelamin: "الجنس",
    nomorPaspor: "رقم جواز السفر",
    tanggalKadaluwarsa: "تاريخ انتهاء جواز السفر",

    phPilihNegara: "اختر البلد/المنطقة",
    phNama: "أدخل الاسم الكامل",
    phKelamin: "اختر الجنس",
    phNomorPaspor: "أدخل رقم جواز السفر",
    phTelepon: "أدخل رقم الهاتف",
    phEmail: "أدخل البريد الإلكتروني",

    lakiLaki: "ذكر",
    perempuan: "أنثى",

    infoAkun: "معلومات الحساب",
    infoAkunDesc:
      "أدخل معلومات الاتصال الخاصة بك. سيتم استخدام البيانات للتأكيد.",
    nomorPonsel: "رقم الجوال",
    email: "البريد الإلكتروني",
    tambahPelaku: "إضافة مسافر",
    hapusPelaku: "حذف مسافر",
    travelerLabel: "مسافر",

    detailPerjalanan: "تفاصيل السفر",
    detailPerjalananDesc:
      "يرجى إكمال بطاقة الوصول الخاصة بك قبل دخول إندونيسيا عن طريق ملء المعلومات المطلوبة.",
    tglKedatangan: "تاريخ الوصول إلى إندونيسيا",
    tglKeberangkatan: "تاريخ المغادرة من إندونيسيا",
    punyaVisa: "هل لديك تأشيرة أو KITAS/KITAP؟",
    ya: "نعم",
    tidak: "لا",
    phPilih: "اختر",
    nomorVisa: "رقم التأشيرة أو KITAS/KITAP",
    phNomorVisa: "أدخل رقم التأشيرة أو KITAS/KITAP",

    // Moda Transportasi & Alamat (Step 3)
    modaTransportasi: "وسيلة النقل",
    modaTransportasiDesc:
      "يرجى اختيار وسيلة النقل التي ستستخدمها لدخول إندونيسيا.",
    pilihModa: "وسيلة النقل",
    tujuanPerjalanan: "غرض السفر",
    phTujuanPerjalanan: "اختر غرض السفر",
    udara: "جوي",
    laut: "بحري",
    phPilihModa: "اختر وسيلة النقل",
    infoKolomUdara: "الحقول أدناه معروضة لوسيلة النقل الجوية المحددة أعلاه.",
    infoKolomLaut: "الحقول أدناه معروضة لوسيلة النقل البحرية المحددة أعلاه.",
    tempatKedatangan: "مكان الوصول",
    phTempatKedatangan: "اختر مكان الوصول",
    jenisTransportasiUdara: "نوع النقل الجوي",
    phJenisTransportasiUdara: "اختر نوع النقل الجوي",
    namaPenerbangan: "اسم شركة الطيران",
    phNamaPenerbangan: "اختر اسم شركة الطيران",
    nomorPenerbangan: "رقم الرحلة",
    phNomorPenerbangan: "أدخل رقم الرحلة",
    jenisKapal: "نوع السفينة",
    phJenisKapal: "اختر نوع السفينة",
    namaKapal: "اسم السفينة",
    phNamaKapal: "أدخل اسم السفينة",
    kode: "الرمز",
    alamatIndonesia: "العنوان في إندونيسيا",
    alamatIndonesiaDesc: "يرجى تقديم عنوان إقامتك في إندونيسيا.",
    jenisTempatTinggal: "نوع الإقامة",
    phJenisTempatTinggal: "اختر نوع الإقامة",
    infoKolomRumah: "الحقول أدناه معروضة لنوع الإقامة منزل المحدد أعلاه.",
    infoKolomHotel: "الحقول أدناه معروضة لنوع الإقامة فندق المحدد أعلاه.",
    provinsi: "المقاطعة",
    phProvinsi: "اختر المقاطعة",
    kota: "المدينة",
    phKota: "اختر المدينة",
    alamatLengkap: "العنوان في إندونيسيا",
    phAlamatLengkap: "أدخل العنوان في إندونيسيا",
    kantorImigrasi: "أقرب مكتب هجرة",
    namaHotel: "اسم الفندق",
    phNamaHotel: "اكتب اسم الفندق للبحث...",
    akomodasi: "الإقامة",
    phAkomodasi: "اختر الإقامة",
    hanyaTransit: "عبور فقط",

    // الإقرار (Step 4)
    deklarasiAnggota: "إقرار أعضاء المجموعة",
    deklarasiAnggotaDesc:
      "يرجى إكمال بطاقة الوصول الخاصة بك قبل دخول إندونيسيا عن طريق ملء المعلومات المطلوبة.",
    ketuaPelaku: "قائد المسافرين",
    deklarasiSelesai: "أسئلة الإقرار مكتملة",
    isiDeklarasi: "املأ أسئلة الإقرار",
    // Health Declaration
    dekKesehatanTitle: "Health Declaration",
    dekKesehatanDesc:
      "In accordance with Indonesia's national health protocol, please complete the health declaration form to support public health monitoring and prevent the spread of infectious diseases.",
    dekKesehatanQ1:
      "Do you have the following symptoms: fever, cough, cold, shortness of breath, sore throat, or skin lesions/rash?",
    dekKesehatanPilihGejala:
      "Select your symptoms (You can select more than one)",
    dekKesehatanBatuk: "COUGH",
    dekKesehatanDemam: "FEVER",
    dekKesehatanLesi: "LESION / RASH / SKIN SPOTS",
    dekKesehatanPilek: "COLD",
    dekKesehatanTenggorokan: "SORE THROAT",
    dekKesehatanSesak: "SHORTNESS OF BREATH",
    dekKesehatanTidakAda: "NO SYMPTOMS",
    dekKesehatanGejalaTerpilih: "Selected Symptoms:",
    dekKesehatanQ2:
      "Country of departure, transit, and other countries you visited within 21 days before departure to Indonesia (You can select more than one)",
    // Quarantine Declaration
    dekKarantinaTitle: "Quarantine Declaration",
    dekKarantinaDesc:
      "Please fill in the quarantine declaration according to your current condition, which will be verified by quarantine officers.",
    dekKarantinaQ1:
      "Are you carrying animals, fish, plants, and/or processed products?",
    dekKarantinaDescKomoditas: "Description of commodities carried",
    dekKarantinaKategori: "Category",
    dekKarantinaSubKategori: "Sub-category",
    dekKarantinaKomoditasTerpilih: "Selected commodities:",
    dekKarantinaBentukJenis: "Specify the form or type of commodity",
    dekKarantinaJumlah: "Quantity of commodities carried",
    dekKarantinaQ2:
      "Is the commodity accompanied by a quarantine certificate (Phytosanitary Certificate/Animal Health Certificate)?",
    dekKarantinaDariNegara: "From which country did you obtain the commodity?",
    dekKarantinaPhDariNegara: "Select country",
    customsTitle:
      "الإقرار الجمركي (BC 2.2) - إخطار جمركي بالبضائع المحمولة من قبل الركاب والطاقم",
    customsDesc: "هذه الصفحة لإعلان البضائع المحمولة لموظف الجمارك والضرائب.",
    infoDaftarBarang:
      "اضغط على هذا الزر لفتح صفحة المعلومات قبل الإجابة على الأسئلة أدناه.",
    infoDaftarBarangWajib:
      "اضغط على هذا الزر لمعرفة قائمة البضائع التي يجب الإقرار عنها.",
    jumlahBagasi: "عدد الأمتعة المصاحبة لك",
    phJumlahBagasi: "أدخل عدد الأمتعة",
    pcsKoli: "قطعة",
    barangWajib: "هل تحمل بضائع يجب الإقرار عنها للجمارك؟",
    imeiQuestion:
      "هل تحمل هواتف محمولة أو أجهزة كمبيوتر محمولة أو أجهزة لوحية تم شراؤها من الخارج وستُستخدم في إندونيسيا؟ (تسجيل IMEI)",
    imeiNote:
      "(الأجانب الذين يزورون إندونيسيا لمدة لا تزيد عن 90 يومًا لا يحتاجون إلى تسجيل IMEI في الجمارك.)",
    persetujuanDeklarasi:
      "أنا، مقدم الطلب، أصرح بموجب هذا أنني أفهم وأوافق على جميع المعلومات و",
    deklarasiLink: "الإقرار",
    dalamAplikasi: "في هذا التطبيق.",
    kirim: "إرسال",
    kembaliKeList: "العودة للقائمة",

    back: "رجوع",
    next: "التالي",

    dirjenImigrasi: "المديرية العامة للهجرة",
    republikIndonesia: "جمهورية إندونيسيا",
    alamatKantor: "Jl. H.R. Rasuna Said Kav. X-6 No. 8, Kuningan, Jakarta",
    alamatKantor2: "South, DKI Jakarta, Indonesia",
  },

  ru: {
    situsWeb: "Веб-сайт правительства Индонезии",
    languages: "Языки",
    bantuan: "Помощь",

    beranda: "Главная",
    pageTitle: "Заявка на карту прибытия",
    pageDescription:
      "Заполните форму ниже правильно и полностью. Информация, отмеченная",
    pageDescriptionEnd: "обязательна для заполнения.",

    step1: "Личная информация",
    step2: "Детали поездки",
    step3: "Вид транспорта",
    step4: "Декларация",

    pratinjau: "Предварительный просмотр заявки",

    dataPribadi: "Личные данные",
    dataPribadiDesc:
      "Убедитесь, что ваши личные данные соответствуют паспорту. Если есть изменения, отредактируйте ниже.",
    muatProfil: "Загрузить профиль",
    pasporNegara: "Паспорт/Страна/Регион",
    namaLengkap: "Полное имя",
    tanggalLahir: "Дата рождения",
    negaraTempatLahir: "Страна/Место рождения",
    jenisKelamin: "Пол",
    nomorPaspor: "Номер паспорта",
    tanggalKadaluwarsa: "Срок действия паспорта",

    phPilihNegara: "Выберите страну/регион",
    phNama: "Введите полное имя",
    phKelamin: "Выберите пол",
    phNomorPaspor: "Введите номер паспорта",
    phTelepon: "Введите номер телефона",
    phEmail: "Введите email",

    lakiLaki: "Мужской",
    perempuan: "Женский",

    infoAkun: "Информация об аккаунте",
    infoAkunDesc:
      "Введите контактную информацию. Данные будут использованы для подтверждения.",
    nomorPonsel: "Номер мобильного",
    email: "Email",
    tambahPelaku: "Добавить путешественника",
    hapusPelaku: "Удалить путешественника",
    travelerLabel: "Путешественник",

    detailPerjalanan: "Детали поездки",
    detailPerjalananDesc:
      "Пожалуйста, заполните карту прибытия перед въездом в Индонезию, указав необходимую информацию.",
    tglKedatangan: "Дата прибытия в Индонезию",
    tglKeberangkatan: "Дата отъезда из Индонезии",
    punyaVisa: "У вас уже есть виза или KITAS/KITAP?",
    ya: "Да",
    tidak: "Нет",
    phPilih: "Выбрать",
    nomorVisa: "Номер визы или KITAS/KITAP",
    phNomorVisa: "Введите номер визы или KITAS/KITAP",

    // Moda Transportasi & Alamat (Step 3)
    modaTransportasi: "Вид транспорта",
    modaTransportasiDesc:
      "Пожалуйста, выберите вид транспорта для въезда в Индонезию.",
    pilihModa: "Вид транспорта",
    tujuanPerjalanan: "Цель поездки",
    phTujuanPerjalanan: "Выберите цель поездки",
    udara: "Воздушный",
    laut: "Морской",
    phPilihModa: "Выберите вид транспорта",
    infoKolomUdara:
      "Поля ниже отображаются для выбранного выше воздушного транспорта.",
    infoKolomLaut:
      "Поля ниже отображаются для выбранного выше морского транспорта.",
    tempatKedatangan: "Место прибытия",
    phTempatKedatangan: "Выберите место прибытия",
    jenisTransportasiUdara: "Тип воздушного транспорта",
    phJenisTransportasiUdara: "Выберите тип воздушного транспорта",
    namaPenerbangan: "Название авиакомпании",
    phNamaPenerbangan: "Выберите авиакомпанию",
    nomorPenerbangan: "Номер рейса",
    phNomorPenerbangan: "Введите номер рейса",
    jenisKapal: "Тип судна",
    phJenisKapal: "Выберите тип судна",
    namaKapal: "Название судна",
    phNamaKapal: "Введите название судна",
    kode: "Код",
    alamatIndonesia: "Адрес в Индонезии",
    alamatIndonesiaDesc: "Укажите адрес проживания в Индонезии.",
    jenisTempatTinggal: "Тип проживания",
    phJenisTempatTinggal: "Выберите тип проживания",
    infoKolomRumah: "Поля ниже отображаются для типа проживания дом.",
    infoKolomHotel: "Поля ниже отображаются для типа проживания отель.",
    provinsi: "Провинция",
    phProvinsi: "Выберите провинцию",
    kota: "Город",
    phKota: "Выберите город",
    alamatLengkap: "Адрес в Индонезии",
    phAlamatLengkap: "Введите адрес в Индонезии",
    kantorImigrasi: "Ближайший офис иммиграции",
    namaHotel: "Название отеля",
    phNamaHotel: "Введите название отеля для поиска...",
    akomodasi: "Проживание",
    phAkomodasi: "Выберите проживание",
    hanyaTransit: "Только транзит",

    // Декларация (Step 4)
    deklarasiAnggota: "Декларация членов группы",
    deklarasiAnggotaDesc:
      "Пожалуйста, заполните карту прибытия перед въездом в Индонезию, указав необходимую информацию.",
    ketuaPelaku: "Руководитель группы",
    deklarasiSelesai: "Вопросы декларации заполнены",
    isiDeklarasi: "Заполните вопросы декларации",
    // Health Declaration
    dekKesehatanTitle: "Health Declaration",
    dekKesehatanDesc:
      "In accordance with Indonesia's national health protocol, please complete the health declaration form to support public health monitoring and prevent the spread of infectious diseases.",
    dekKesehatanQ1:
      "Do you have the following symptoms: fever, cough, cold, shortness of breath, sore throat, or skin lesions/rash?",
    dekKesehatanPilihGejala:
      "Select your symptoms (You can select more than one)",
    dekKesehatanBatuk: "COUGH",
    dekKesehatanDemam: "FEVER",
    dekKesehatanLesi: "LESION / RASH / SKIN SPOTS",
    dekKesehatanPilek: "COLD",
    dekKesehatanTenggorokan: "SORE THROAT",
    dekKesehatanSesak: "SHORTNESS OF BREATH",
    dekKesehatanTidakAda: "NO SYMPTOMS",
    dekKesehatanGejalaTerpilih: "Selected Symptoms:",
    dekKesehatanQ2:
      "Country of departure, transit, and other countries you visited within 21 days before departure to Indonesia (You can select more than one)",
    // Quarantine Declaration
    dekKarantinaTitle: "Quarantine Declaration",
    dekKarantinaDesc:
      "Please fill in the quarantine declaration according to your current condition, which will be verified by quarantine officers.",
    dekKarantinaQ1:
      "Are you carrying animals, fish, plants, and/or processed products?",
    dekKarantinaDescKomoditas: "Description of commodities carried",
    dekKarantinaKategori: "Category",
    dekKarantinaSubKategori: "Sub-category",
    dekKarantinaKomoditasTerpilih: "Selected commodities:",
    dekKarantinaBentukJenis: "Specify the form or type of commodity",
    dekKarantinaJumlah: "Quantity of commodities carried",
    dekKarantinaQ2:
      "Is the commodity accompanied by a quarantine certificate (Phytosanitary Certificate/Animal Health Certificate)?",
    dekKarantinaDariNegara: "From which country did you obtain the commodity?",
    dekKarantinaPhDariNegara: "Select country",
    customsTitle:
      "Таможенная декларация (BC 2.2) - Уведомление о товарах, перевозимых пассажирами и экипажем",
    customsDesc:
      "Эта страница предназначена для декларирования ваших товаров таможенному органу.",
    infoDaftarBarang:
      "Нажмите эту кнопку, чтобы открыть информационную страницу перед ответом на вопросы ниже.",
    infoDaftarBarangWajib:
      "Нажмите эту кнопку, чтобы увидеть список товаров, подлежащих декларированию.",
    jumlahBagasi: "Количество багажа, прибывающего с вами",
    phJumlahBagasi: "Введите количество багажа",
    pcsKoli: "шт",
    barangWajib: "Перевозите ли вы товары, подлежащие декларированию?",
    imeiQuestion:
      "Перевозите ли вы мобильные телефоны, карманные компьютеры и планшеты, приобретённые за рубежом, которые будут использоваться в Индонезии? (Регистрация IMEI)",
    imeiNote:
      "(Иностранцам, посещающим Индонезию на срок не более 90 дней, не нужно регистрировать IMEI на таможне.)",
    persetujuanDeklarasi:
      "Я, Заявитель, настоящим заявляю, что понимаю и соглашаюсь со всей Информацией и",
    deklarasiLink: "Декларацией",
    dalamAplikasi: "в этом приложении.",
    kirim: "Отправить",
    kembaliKeList: "Вернуться к списку",

    back: "Назад",
    next: "Далее",

    dirjenImigrasi: "Генеральный директорат иммиграции",
    republikIndonesia: "Республика Индонезия",
    alamatKantor: "Jl. H.R. Rasuna Said Kav. X-6 No. 8, Kuningan, Jakarta",
    alamatKantor2: "South, DKI Jakarta, Indonesia",
  },

  ko: {
    situsWeb: "인도네시아 정부 웹사이트",
    languages: "언어",
    bantuan: "도움말",

    beranda: "홈",
    pageTitle: "도착 카드 신청",
    pageDescription: "아래 양식을 정확하고 완전하게 작성하십시오.",
    pageDescriptionEnd: "표시된 정보는 필수 입력 항목입니다.",

    step1: "개인 정보",
    step2: "여행 세부사항",
    step3: "교통수단",
    step4: "신고",

    pratinjau: "신청서 미리보기",

    dataPribadi: "개인 데이터",
    dataPribadiDesc:
      "개인 데이터가 여권과 일치하는지 확인하십시오. 변경 사항이 있으면 아래에서 수정하십시오.",
    muatProfil: "프로필 불러오기",
    pasporNegara: "여권/국가/지역",
    namaLengkap: "성명",
    tanggalLahir: "생년월일",
    negaraTempatLahir: "출생 국가/출생지",
    jenisKelamin: "성별",
    nomorPaspor: "여권 번호",
    tanggalKadaluwarsa: "여권 만료일",

    phPilihNegara: "국가/지역 선택",
    phNama: "성명 입력",
    phKelamin: "성별 선택",
    phNomorPaspor: "여권 번호 입력",
    phTelepon: "전화번호 입력",
    phEmail: "이메일 입력",

    lakiLaki: "남성",
    perempuan: "여성",

    infoAkun: "계정 정보",
    infoAkunDesc:
      "연락 가능한 연락처 정보를 입력하십시오. 데이터는 확인용으로 사용됩니다.",
    nomorPonsel: "휴대폰 번호",
    email: "이메일",
    tambahPelaku: "여행자 추가",
    hapusPelaku: "여행자 삭제",
    travelerLabel: "여행자",

    detailPerjalanan: "여행 세부사항",
    detailPerjalananDesc:
      "인도네시아에 입국하기 전에 필요한 정보를 입력하여 도착 카드를 작성해 주세요.",
    tglKedatangan: "인도네시아 도착일",
    tglKeberangkatan: "인도네시아 출발일",
    punyaVisa: "비자 또는 KITAS/KITAP를 보유하고 계십니까?",
    ya: "예",
    tidak: "아니요",
    phPilih: "선택",
    nomorVisa: "비자 또는 KITAS/KITAP 번호",
    phNomorVisa: "비자 또는 KITAS/KITAP 번호를 입력하세요",

    // 신고 (Step 4)
    deklarasiAnggota: "그룹 구성원 신고",
    deklarasiAnggotaDesc:
      "인도네시아에 입국하기 전에 필요한 정보를 입력하여 도착 카드를 작성해 주세요.",
    ketuaPelaku: "대표 여행자",
    deklarasiSelesai: "신고 질문 완료",
    isiDeklarasi: "신고 질문 작성",
    // Health Declaration
    dekKesehatanTitle: "Health Declaration",
    dekKesehatanDesc:
      "In accordance with Indonesia's national health protocol, please complete the health declaration form to support public health monitoring and prevent the spread of infectious diseases.",
    dekKesehatanQ1:
      "Do you have the following symptoms: fever, cough, cold, shortness of breath, sore throat, or skin lesions/rash?",
    dekKesehatanPilihGejala:
      "Select your symptoms (You can select more than one)",
    dekKesehatanBatuk: "COUGH",
    dekKesehatanDemam: "FEVER",
    dekKesehatanLesi: "LESION / RASH / SKIN SPOTS",
    dekKesehatanPilek: "COLD",
    dekKesehatanTenggorokan: "SORE THROAT",
    dekKesehatanSesak: "SHORTNESS OF BREATH",
    dekKesehatanTidakAda: "NO SYMPTOMS",
    dekKesehatanGejalaTerpilih: "Selected Symptoms:",
    dekKesehatanQ2:
      "Country of departure, transit, and other countries you visited within 21 days before departure to Indonesia (You can select more than one)",
    // Quarantine Declaration
    dekKarantinaTitle: "Quarantine Declaration",
    dekKarantinaDesc:
      "To prevent the spread of epidemic viruses and diseases that spread through animals and plants from and outside Indonesia.",
    dekKarantinaQ1:
      "Are you carrying Animals, Fish, Certifications, and/or processed products?",
    dekKarantinaJenisHewan: "Description of Commodities Carried",
    dekKarantinaPhHewan: "Enter commodity description",
    dekKarantinaJumlah: "Quantity",
    dekKarantinaPhJumlah: "Enter quantity",
    dekKarantinaSatuan: "Unit",
    dekKarantinaKerLapCetak: "Notes/Certificate Number",
    dekKarantinaPhKerLapCetak: "Enter notes",
    dekKarantinaQ2: "Quarantine documents owned",
    dekKarantinaHasilKomoditas: "Description of Commodities Carried",
    dekKarantinaPhHasilKomoditas: "Enter commodity description",
    dekKarantinaJenisKomoditas: "Quantity of Commodities Carried",
    dekKarantinaPhJenisKomoditas: "Enter commodity quantity",
    dekKarantinaQ3:
      "Is the commodity accompanied by a Phytosanitary/Plant Quarantine Permit certificate?",
    dekKarantinaDariNegara:
      "From which country are you importing commodities to Indonesia?",
    dekKarantinaPhDariNegara: "Select country",
    customsTitle:
      "세관 신고 (BC 2.2) - 여객 및 승무원의 휴대물품에 대한 세관 통지",
    customsDesc:
      "이 페이지는 세관 직원에게 휴대 물품을 신고하기 위한 것입니다.",
    infoDaftarBarang:
      "아래 질문에 답하기 전에 이 버튼을 눌러 정보 페이지를 열어주세요.",
    infoDaftarBarangWajib: "이 버튼을 눌러 신고해야 할 물품 목록을 확인하세요.",
    jumlahBagasi: "동반 수하물 수량",
    phJumlahBagasi: "동반 수하물 수량을 입력하세요",
    pcsKoli: "개",
    barangWajib: "세관에 신고해야 할 물품을 휴대하고 있습니까?",
    imeiQuestion:
      "해외에서 구입/취득한 휴대전화, 핸드헬드 컴퓨터, 태블릿을 인도네시아에서 인도네시아 이동통신망을 이용하여 사용할 예정입니까? (IMEI 등록)",
    imeiNote:
      "(90일 이하 방문 외국인은 도착지 세관에서 IMEI를 등록할 필요가 없습니다.)",
    persetujuanDeklarasi: "본인, 신청자는 모든 정보와",
    deklarasiLink: "신고",
    dalamAplikasi: "를 이해하고 동의함을 선언합니다.",
    kirim: "제출",
    kembaliKeList: "목록으로 돌아가기",

    back: "이전",
    next: "다음",

    dirjenImigrasi: "이민총국",
    republikIndonesia: "인도네시아 공화국",
    alamatKantor: "Jl. H.R. Rasuna Said Kav. X-6 No. 8, Kuningan, Jakarta",
    alamatKantor2: "South, DKI Jakarta, Indonesia",
  },
};
