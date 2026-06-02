// =============================================================================
// Indonesian Arrival Card Form - Reference Data
// =============================================================================

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export interface SelectOption {
  value: string;
  label: string;
}

export interface CityOption {
  value: string;
  label: string;
  province: string;
}

export interface HotelOption {
  value: string;
  label: string;
  city: string;
  province: string;
}

export interface ImmigrationOfficeOption {
  value: string;
  label: string;
  city: string;
  province: string;
}

// -----------------------------------------------------------------------------
// 1. Indonesian Airports
// -----------------------------------------------------------------------------

export const indonesianAirports: SelectOption[] = [
  { value: "CGK", label: "Bandara Soekarno-Hatta (CGK) - Tangerang" },
  { value: "DPS", label: "Bandara Ngurah Rai (DPS) - Denpasar" },
  { value: "SUB", label: "Bandara Juanda (SUB) - Surabaya" },
  { value: "UPG", label: "Bandara Sultan Hasanuddin (UPG) - Makassar" },
  { value: "KNO", label: "Bandara Kualanamu (KNO) - Medan" },
  { value: "MDC", label: "Bandara Sam Ratulangi (MDC) - Manado" },
  { value: "JOG", label: "Bandara Adi Sucipto (JOG) - Yogyakarta" },
  { value: "BDO", label: "Bandara Husein Sastranegara (BDO) - Bandung" },
  { value: "PKU", label: "Bandara Sultan Syarif Kasim II (PKU) - Pekanbaru" },
  { value: "BTH", label: "Bandara Hang Nadim (BTH) - Batam" },
  { value: "SOC", label: "Bandara Adi Soemarmo (SOC) - Solo" },
  { value: "SRG", label: "Bandara Ahmad Yani (SRG) - Semarang" },
  {
    value: "BPN",
    label: "Bandara Sultan Aji Muhammad Sulaiman (BPN) - Balikpapan",
  },
  {
    value: "PLM",
    label: "Bandara Sultan Mahmud Badaruddin II (PLM) - Palembang",
  },
  { value: "PDG", label: "Bandara Minangkabau (PDG) - Padang" },
  { value: "BKS", label: "Bandara Fatmawati Soekarno (BKS) - Bengkulu" },
  { value: "DJB", label: "Bandara Sultan Thaha (DJB) - Jambi" },
  { value: "PNK", label: "Bandara Supadio (PNK) - Pontianak" },
  { value: "TRK", label: "Bandara Juwata (TRK) - Tarakan" },
  { value: "AMQ", label: "Bandara Pattimura (AMQ) - Ambon" },
  { value: "KDI", label: "Bandara Haluoleo (KDI) - Kendari" },
  { value: "MKQ", label: "Bandara Mopah (MKQ) - Merauke" },
  { value: "DJJ", label: "Bandara Sentani (DJJ) - Jayapura" },
  { value: "LOP", label: "Bandara Lombok (LOP) - Praya" },
  { value: "TKG", label: "Bandara Radin Inten II (TKG) - Bandar Lampung" },
];

// -----------------------------------------------------------------------------
// 2. Indonesian Ports
// -----------------------------------------------------------------------------

export const indonesianPorts: SelectOption[] = [
  { value: "tanjung-priok", label: "Pelabuhan Tanjung Priok - Jakarta" },
  { value: "tanjung-perak", label: "Pelabuhan Tanjung Perak - Surabaya" },
  { value: "benoa", label: "Pelabuhan Benoa - Bali" },
  { value: "belawan", label: "Pelabuhan Belawan - Medan" },
  { value: "makassar", label: "Pelabuhan Makassar - Makassar" },
  { value: "bakauheni", label: "Pelabuhan Bakauheni - Lampung" },
  { value: "merak", label: "Pelabuhan Merak - Banten" },
  { value: "batam-centre", label: "Pelabuhan Batam Centre - Batam" },
  { value: "sekupang", label: "Pelabuhan Sekupang - Batam" },
  { value: "nongsa", label: "Pelabuhan Nongsa - Batam" },
  {
    value: "tanjung-balai-karimun",
    label: "Pelabuhan Tanjung Balai Karimun - Karimun",
  },
  { value: "dumai", label: "Pelabuhan Dumai - Dumai" },
  { value: "tanjung-uban", label: "Pelabuhan Tanjung Uban - Bintan" },
  {
    value: "sri-bintan-pura",
    label: "Pelabuhan Sri Bintan Pura - Tanjung Pinang",
  },
  { value: "tenau", label: "Pelabuhan Tenau - Kupang" },
];

// -----------------------------------------------------------------------------
// 3. World Airlines
// -----------------------------------------------------------------------------

export const worldAirlines: SelectOption[] = [
  // Indonesia
  { value: "GA", label: "Garuda Indonesia (GA)" },
  { value: "JT", label: "Lion Air (JT)" },
  { value: "QG", label: "Citilink (QG)" },
  { value: "ID", label: "Batik Air (ID)" },
  { value: "SJ", label: "Sriwijaya Air (SJ)" },
  { value: "IW", label: "Wings Air (IW)" },
  { value: "QZ", label: "Indonesia AirAsia (QZ)" },
  { value: "IU", label: "Super Air Jet (IU)" },
  { value: "IP", label: "Pelita Air (IP)" },
  { value: "8B", label: "TransNusa (8B)" },

  // Southeast Asia
  { value: "SQ", label: "Singapore Airlines (SQ)" },
  { value: "MH", label: "Malaysia Airlines (MH)" },
  { value: "TG", label: "Thai Airways (TG)" },
  { value: "AK", label: "AirAsia (AK)" },
  { value: "VN", label: "Vietnam Airlines (VN)" },
  { value: "PR", label: "Philippine Airlines (PR)" },
  { value: "5J", label: "Cebu Pacific (5J)" },
  { value: "PG", label: "Bangkok Airways (PG)" },

  // East Asia
  { value: "NH", label: "All Nippon Airways (NH)" },
  { value: "JL", label: "Japan Airlines (JL)" },
  { value: "KE", label: "Korean Air (KE)" },
  { value: "OZ", label: "Asiana Airlines (OZ)" },
  { value: "CX", label: "Cathay Pacific (CX)" },
  { value: "BR", label: "EVA Air (BR)" },
  { value: "CI", label: "China Airlines (CI)" },
  { value: "CA", label: "Air China (CA)" },
  { value: "MU", label: "China Eastern Airlines (MU)" },
  { value: "CZ", label: "China Southern Airlines (CZ)" },
  { value: "9C", label: "Spring Airlines (9C)" },
  { value: "MM", label: "Peach Aviation (MM)" },

  // Middle East
  { value: "EK", label: "Emirates (EK)" },
  { value: "QR", label: "Qatar Airways (QR)" },
  { value: "EY", label: "Etihad Airways (EY)" },
  { value: "SV", label: "Saudia (SV)" },
  { value: "TK", label: "Turkish Airlines (TK)" },
  { value: "WY", label: "Oman Air (WY)" },
  { value: "GF", label: "Gulf Air (GF)" },

  // Europe
  { value: "LH", label: "Lufthansa (LH)" },
  { value: "BA", label: "British Airways (BA)" },
  { value: "AF", label: "Air France (AF)" },
  { value: "KL", label: "KLM Royal Dutch Airlines (KL)" },
  { value: "LX", label: "Swiss International Air Lines (LX)" },
  { value: "SK", label: "Scandinavian Airlines (SK)" },
  { value: "AY", label: "Finnair (AY)" },
  { value: "OS", label: "Austrian Airlines (OS)" },

  // Americas
  { value: "UA", label: "United Airlines (UA)" },
  { value: "DL", label: "Delta Air Lines (DL)" },
  { value: "AA", label: "American Airlines (AA)" },
  { value: "B6", label: "JetBlue Airways (B6)" },

  // Oceania
  { value: "QF", label: "Qantas (QF)" },
  { value: "JQ", label: "Jetstar Airways (JQ)" },
  { value: "NZ", label: "Air New Zealand (NZ)" },
  { value: "VA", label: "Virgin Australia (VA)" },
];

// -----------------------------------------------------------------------------
// 4. Indonesian Provinces
// -----------------------------------------------------------------------------

export const indonesianProvinces: SelectOption[] = [
  { value: "aceh", label: "Aceh" },
  { value: "sumatera-utara", label: "Sumatera Utara" },
  { value: "sumatera-barat", label: "Sumatera Barat" },
  { value: "riau", label: "Riau" },
  { value: "jambi", label: "Jambi" },
  { value: "sumatera-selatan", label: "Sumatera Selatan" },
  { value: "bengkulu", label: "Bengkulu" },
  { value: "lampung", label: "Lampung" },
  { value: "kepulauan-bangka-belitung", label: "Kepulauan Bangka Belitung" },
  { value: "kepulauan-riau", label: "Kepulauan Riau" },
  { value: "dki-jakarta", label: "DKI Jakarta" },
  { value: "jawa-barat", label: "Jawa Barat" },
  { value: "jawa-tengah", label: "Jawa Tengah" },
  { value: "di-yogyakarta", label: "DI Yogyakarta" },
  { value: "jawa-timur", label: "Jawa Timur" },
  { value: "banten", label: "Banten" },
  { value: "bali", label: "Bali" },
  { value: "nusa-tenggara-barat", label: "Nusa Tenggara Barat" },
  { value: "nusa-tenggara-timur", label: "Nusa Tenggara Timur" },
  { value: "kalimantan-barat", label: "Kalimantan Barat" },
  { value: "kalimantan-tengah", label: "Kalimantan Tengah" },
  { value: "kalimantan-selatan", label: "Kalimantan Selatan" },
  { value: "kalimantan-timur", label: "Kalimantan Timur" },
  { value: "kalimantan-utara", label: "Kalimantan Utara" },
  { value: "sulawesi-utara", label: "Sulawesi Utara" },
  { value: "sulawesi-tengah", label: "Sulawesi Tengah" },
  { value: "sulawesi-selatan", label: "Sulawesi Selatan" },
  { value: "sulawesi-tenggara", label: "Sulawesi Tenggara" },
  { value: "gorontalo", label: "Gorontalo" },
  { value: "sulawesi-barat", label: "Sulawesi Barat" },
  { value: "maluku", label: "Maluku" },
  { value: "maluku-utara", label: "Maluku Utara" },
  { value: "papua", label: "Papua" },
  { value: "papua-barat", label: "Papua Barat" },
  { value: "papua-selatan", label: "Papua Selatan" },
  { value: "papua-tengah", label: "Papua Tengah" },
  { value: "papua-pegunungan", label: "Papua Pegunungan" },
  { value: "papua-barat-daya", label: "Papua Barat Daya" },
];

// -----------------------------------------------------------------------------
// 5. Indonesian Cities
// -----------------------------------------------------------------------------

export const indonesianCities: CityOption[] = [
  // Aceh
  { value: "banda-aceh", label: "Banda Aceh", province: "aceh" },
  { value: "lhokseumawe", label: "Lhokseumawe", province: "aceh" },
  { value: "langsa", label: "Langsa", province: "aceh" },
  { value: "meulaboh", label: "Meulaboh", province: "aceh" },
  { value: "sabang", label: "Sabang", province: "aceh" },

  // Sumatera Utara
  { value: "medan", label: "Medan", province: "sumatera-utara" },
  { value: "binjai", label: "Binjai", province: "sumatera-utara" },
  {
    value: "pematang-siantar",
    label: "Pematang Siantar",
    province: "sumatera-utara",
  },
  {
    value: "tebing-tinggi",
    label: "Tebing Tinggi",
    province: "sumatera-utara",
  },
  {
    value: "padang-sidempuan",
    label: "Padang Sidempuan",
    province: "sumatera-utara",
  },

  // Sumatera Barat
  { value: "padang", label: "Padang", province: "sumatera-barat" },
  { value: "bukittinggi", label: "Bukittinggi", province: "sumatera-barat" },
  { value: "payakumbuh", label: "Payakumbuh", province: "sumatera-barat" },
  { value: "solok", label: "Solok", province: "sumatera-barat" },

  // Riau
  { value: "pekanbaru", label: "Pekanbaru", province: "riau" },
  { value: "dumai-city", label: "Dumai", province: "riau" },
  { value: "bengkalis", label: "Bengkalis", province: "riau" },

  // Jambi
  { value: "jambi-city", label: "Jambi", province: "jambi" },
  { value: "sungai-penuh", label: "Sungai Penuh", province: "jambi" },
  { value: "muara-bungo", label: "Muara Bungo", province: "jambi" },

  // Sumatera Selatan
  { value: "palembang", label: "Palembang", province: "sumatera-selatan" },
  { value: "prabumulih", label: "Prabumulih", province: "sumatera-selatan" },
  {
    value: "lubuklinggau",
    label: "Lubuklinggau",
    province: "sumatera-selatan",
  },
  { value: "pagar-alam", label: "Pagar Alam", province: "sumatera-selatan" },

  // Bengkulu
  { value: "bengkulu-city", label: "Bengkulu", province: "bengkulu" },
  { value: "rejang-lebong", label: "Rejang Lebong", province: "bengkulu" },
  { value: "kaur", label: "Kaur", province: "bengkulu" },

  // Lampung
  { value: "bandar-lampung", label: "Bandar Lampung", province: "lampung" },
  { value: "metro", label: "Metro", province: "lampung" },
  { value: "pringsewu", label: "Pringsewu", province: "lampung" },

  // Kepulauan Bangka Belitung
  {
    value: "pangkal-pinang",
    label: "Pangkal Pinang",
    province: "kepulauan-bangka-belitung",
  },
  {
    value: "tanjung-pandan",
    label: "Tanjung Pandan",
    province: "kepulauan-bangka-belitung",
  },
  {
    value: "sungailiat",
    label: "Sungailiat",
    province: "kepulauan-bangka-belitung",
  },

  // Kepulauan Riau
  {
    value: "tanjung-pinang",
    label: "Tanjung Pinang",
    province: "kepulauan-riau",
  },
  { value: "batam", label: "Batam", province: "kepulauan-riau" },
  { value: "karimun", label: "Karimun", province: "kepulauan-riau" },
  { value: "bintan", label: "Bintan", province: "kepulauan-riau" },

  // DKI Jakarta
  { value: "jakarta-pusat", label: "Jakarta Pusat", province: "dki-jakarta" },
  { value: "jakarta-utara", label: "Jakarta Utara", province: "dki-jakarta" },
  { value: "jakarta-barat", label: "Jakarta Barat", province: "dki-jakarta" },
  {
    value: "jakarta-selatan",
    label: "Jakarta Selatan",
    province: "dki-jakarta",
  },
  { value: "jakarta-timur", label: "Jakarta Timur", province: "dki-jakarta" },
  {
    value: "kepulauan-seribu",
    label: "Kepulauan Seribu",
    province: "dki-jakarta",
  },

  // Jawa Barat
  { value: "bandung", label: "Bandung", province: "jawa-barat" },
  { value: "bogor", label: "Bogor", province: "jawa-barat" },
  { value: "depok", label: "Depok", province: "jawa-barat" },
  { value: "bekasi", label: "Bekasi", province: "jawa-barat" },
  { value: "cirebon", label: "Cirebon", province: "jawa-barat" },
  { value: "sukabumi", label: "Sukabumi", province: "jawa-barat" },
  { value: "tasikmalaya", label: "Tasikmalaya", province: "jawa-barat" },
  { value: "karawang", label: "Karawang", province: "jawa-barat" },
  { value: "garut", label: "Garut", province: "jawa-barat" },

  // Jawa Tengah
  { value: "semarang", label: "Semarang", province: "jawa-tengah" },
  { value: "solo", label: "Solo (Surakarta)", province: "jawa-tengah" },
  { value: "magelang", label: "Magelang", province: "jawa-tengah" },
  { value: "pekalongan", label: "Pekalongan", province: "jawa-tengah" },
  { value: "tegal", label: "Tegal", province: "jawa-tengah" },
  { value: "salatiga", label: "Salatiga", province: "jawa-tengah" },
  { value: "purwokerto", label: "Purwokerto", province: "jawa-tengah" },
  { value: "kudus", label: "Kudus", province: "jawa-tengah" },

  // DI Yogyakarta
  { value: "yogyakarta", label: "Yogyakarta", province: "di-yogyakarta" },
  { value: "sleman", label: "Sleman", province: "di-yogyakarta" },
  { value: "bantul", label: "Bantul", province: "di-yogyakarta" },
  { value: "gunung-kidul", label: "Gunung Kidul", province: "di-yogyakarta" },
  { value: "kulon-progo", label: "Kulon Progo", province: "di-yogyakarta" },

  // Jawa Timur
  { value: "surabaya", label: "Surabaya", province: "jawa-timur" },
  { value: "malang", label: "Malang", province: "jawa-timur" },
  { value: "kediri", label: "Kediri", province: "jawa-timur" },
  { value: "jember", label: "Jember", province: "jawa-timur" },
  { value: "batu", label: "Batu", province: "jawa-timur" },
  { value: "mojokerto", label: "Mojokerto", province: "jawa-timur" },
  { value: "madiun", label: "Madiun", province: "jawa-timur" },
  { value: "blitar", label: "Blitar", province: "jawa-timur" },
  { value: "probolinggo", label: "Probolinggo", province: "jawa-timur" },
  { value: "pasuruan", label: "Pasuruan", province: "jawa-timur" },

  // Banten
  { value: "tangerang", label: "Tangerang", province: "banten" },
  {
    value: "tangerang-selatan",
    label: "Tangerang Selatan",
    province: "banten",
  },
  { value: "serang", label: "Serang", province: "banten" },
  { value: "cilegon", label: "Cilegon", province: "banten" },

  // Bali
  { value: "denpasar", label: "Denpasar", province: "bali" },
  { value: "badung", label: "Badung", province: "bali" },
  { value: "gianyar", label: "Gianyar", province: "bali" },
  { value: "tabanan", label: "Tabanan", province: "bali" },
  { value: "klungkung", label: "Klungkung", province: "bali" },
  { value: "buleleng", label: "Buleleng (Singaraja)", province: "bali" },
  { value: "karangasem", label: "Karangasem", province: "bali" },
  { value: "bangli", label: "Bangli", province: "bali" },
  { value: "jembrana", label: "Jembrana (Negara)", province: "bali" },

  // Nusa Tenggara Barat
  { value: "mataram", label: "Mataram", province: "nusa-tenggara-barat" },
  {
    value: "lombok-barat",
    label: "Lombok Barat",
    province: "nusa-tenggara-barat",
  },
  {
    value: "sumbawa-besar",
    label: "Sumbawa Besar",
    province: "nusa-tenggara-barat",
  },
  { value: "bima", label: "Bima", province: "nusa-tenggara-barat" },

  // Nusa Tenggara Timur
  { value: "kupang", label: "Kupang", province: "nusa-tenggara-timur" },
  { value: "ende", label: "Ende", province: "nusa-tenggara-timur" },
  { value: "maumere", label: "Maumere", province: "nusa-tenggara-timur" },
  {
    value: "labuan-bajo",
    label: "Labuan Bajo",
    province: "nusa-tenggara-timur",
  },

  // Kalimantan Barat
  { value: "pontianak", label: "Pontianak", province: "kalimantan-barat" },
  { value: "singkawang", label: "Singkawang", province: "kalimantan-barat" },
  { value: "ketapang", label: "Ketapang", province: "kalimantan-barat" },

  // Kalimantan Tengah
  {
    value: "palangkaraya",
    label: "Palangka Raya",
    province: "kalimantan-tengah",
  },
  { value: "sampit", label: "Sampit", province: "kalimantan-tengah" },
  {
    value: "pangkalan-bun",
    label: "Pangkalan Bun",
    province: "kalimantan-tengah",
  },

  // Kalimantan Selatan
  {
    value: "banjarmasin",
    label: "Banjarmasin",
    province: "kalimantan-selatan",
  },
  { value: "banjarbaru", label: "Banjarbaru", province: "kalimantan-selatan" },
  { value: "martapura", label: "Martapura", province: "kalimantan-selatan" },

  // Kalimantan Timur
  { value: "balikpapan", label: "Balikpapan", province: "kalimantan-timur" },
  { value: "samarinda", label: "Samarinda", province: "kalimantan-timur" },
  { value: "bontang", label: "Bontang", province: "kalimantan-timur" },

  // Kalimantan Utara
  { value: "tarakan", label: "Tarakan", province: "kalimantan-utara" },
  {
    value: "tanjung-selor",
    label: "Tanjung Selor",
    province: "kalimantan-utara",
  },
  { value: "nunukan", label: "Nunukan", province: "kalimantan-utara" },

  // Sulawesi Utara
  { value: "manado", label: "Manado", province: "sulawesi-utara" },
  { value: "bitung", label: "Bitung", province: "sulawesi-utara" },
  { value: "tomohon", label: "Tomohon", province: "sulawesi-utara" },

  // Sulawesi Tengah
  { value: "palu", label: "Palu", province: "sulawesi-tengah" },
  { value: "luwuk", label: "Luwuk", province: "sulawesi-tengah" },
  { value: "poso", label: "Poso", province: "sulawesi-tengah" },

  // Sulawesi Selatan
  { value: "makassar", label: "Makassar", province: "sulawesi-selatan" },
  { value: "parepare", label: "Parepare", province: "sulawesi-selatan" },
  { value: "palopo", label: "Palopo", province: "sulawesi-selatan" },
  { value: "maros", label: "Maros", province: "sulawesi-selatan" },
  { value: "bulukumba", label: "Bulukumba", province: "sulawesi-selatan" },

  // Sulawesi Tenggara
  { value: "kendari", label: "Kendari", province: "sulawesi-tenggara" },
  { value: "baubau", label: "Bau-Bau", province: "sulawesi-tenggara" },
  { value: "kolaka", label: "Kolaka", province: "sulawesi-tenggara" },

  // Gorontalo
  { value: "gorontalo-city", label: "Gorontalo", province: "gorontalo" },
  { value: "limboto", label: "Limboto", province: "gorontalo" },
  { value: "marisa", label: "Marisa", province: "gorontalo" },

  // Sulawesi Barat
  { value: "mamuju", label: "Mamuju", province: "sulawesi-barat" },
  { value: "majene", label: "Majene", province: "sulawesi-barat" },
  { value: "polewali", label: "Polewali", province: "sulawesi-barat" },

  // Maluku
  { value: "ambon", label: "Ambon", province: "maluku" },
  { value: "tual", label: "Tual", province: "maluku" },
  { value: "masohi", label: "Masohi", province: "maluku" },

  // Maluku Utara
  { value: "ternate", label: "Ternate", province: "maluku-utara" },
  { value: "tidore", label: "Tidore", province: "maluku-utara" },
  { value: "sofifi", label: "Sofifi", province: "maluku-utara" },

  // Papua
  { value: "jayapura", label: "Jayapura", province: "papua" },
  { value: "sentani", label: "Sentani", province: "papua" },
  { value: "sarmi", label: "Sarmi", province: "papua" },

  // Papua Barat
  { value: "manokwari", label: "Manokwari", province: "papua-barat" },
  { value: "sorong", label: "Sorong", province: "papua-barat" },
  { value: "bintuni", label: "Bintuni", province: "papua-barat" },

  // Papua Selatan
  { value: "merauke", label: "Merauke", province: "papua-selatan" },
  { value: "tanah-merah", label: "Tanah Merah", province: "papua-selatan" },
  { value: "boven-digoel", label: "Boven Digoel", province: "papua-selatan" },

  // Papua Tengah
  { value: "timika", label: "Timika", province: "papua-tengah" },
  { value: "nabire", label: "Nabire", province: "papua-tengah" },
  { value: "enarotali", label: "Enarotali", province: "papua-tengah" },

  // Papua Pegunungan
  { value: "wamena", label: "Wamena", province: "papua-pegunungan" },
  { value: "oksibil", label: "Oksibil", province: "papua-pegunungan" },
  { value: "mulia", label: "Mulia", province: "papua-pegunungan" },

  // Papua Barat Daya
  {
    value: "sorong-selatan",
    label: "Sorong Selatan",
    province: "papua-barat-daya",
  },
  { value: "raja-ampat", label: "Raja Ampat", province: "papua-barat-daya" },
  { value: "fakfak", label: "Fakfak", province: "papua-barat-daya" },
];

// -----------------------------------------------------------------------------
// 6. Indonesian Hotels
// -----------------------------------------------------------------------------

export const indonesianHotels: HotelOption[] = [
  // Jakarta
  {
    value: "hotel-indonesia-kempinski",
    label: "Hotel Indonesia Kempinski Jakarta",
    city: "jakarta-pusat",
    province: "dki-jakarta",
  },
  {
    value: "mandarin-oriental-jakarta",
    label: "Mandarin Oriental Jakarta",
    city: "jakarta-pusat",
    province: "dki-jakarta",
  },
  {
    value: "the-ritz-carlton-jakarta-pacific-place",
    label: "The Ritz-Carlton Jakarta, Pacific Place",
    city: "jakarta-selatan",
    province: "dki-jakarta",
  },
  {
    value: "the-ritz-carlton-jakarta-mega-kuningan",
    label: "The Ritz-Carlton Jakarta, Mega Kuningan",
    city: "jakarta-selatan",
    province: "dki-jakarta",
  },
  {
    value: "shangri-la-jakarta",
    label: "Shangri-La Hotel Jakarta",
    city: "jakarta-pusat",
    province: "dki-jakarta",
  },
  {
    value: "pullman-jakarta-central-park",
    label: "Pullman Jakarta Central Park",
    city: "jakarta-barat",
    province: "dki-jakarta",
  },
  {
    value: "jw-marriott-hotel-jakarta",
    label: "JW Marriott Hotel Jakarta",
    city: "jakarta-selatan",
    province: "dki-jakarta",
  },
  {
    value: "four-seasons-jakarta",
    label: "Four Seasons Hotel Jakarta",
    city: "jakarta-selatan",
    province: "dki-jakarta",
  },
  {
    value: "fairmont-jakarta",
    label: "Fairmont Jakarta",
    city: "jakarta-selatan",
    province: "dki-jakarta",
  },
  {
    value: "intercontinental-jakarta-pondok-indah",
    label: "InterContinental Jakarta Pondok Indah",
    city: "jakarta-selatan",
    province: "dki-jakarta",
  },

  // Bali
  {
    value: "four-seasons-bali-sayan",
    label: "Four Seasons Resort Bali at Sayan",
    city: "gianyar",
    province: "bali",
  },
  {
    value: "four-seasons-bali-jimbaran",
    label: "Four Seasons Resort Bali at Jimbaran Bay",
    city: "badung",
    province: "bali",
  },
  {
    value: "ayana-resort-bali",
    label: "AYANA Resort Bali",
    city: "badung",
    province: "bali",
  },
  {
    value: "the-mulia-bali",
    label: "The Mulia, Mulia Resort & Villas Bali",
    city: "badung",
    province: "bali",
  },
  {
    value: "w-bali-seminyak",
    label: "W Bali - Seminyak",
    city: "badung",
    province: "bali",
  },
  {
    value: "the-ritz-carlton-bali",
    label: "The Ritz-Carlton Bali",
    city: "badung",
    province: "bali",
  },
  {
    value: "padma-resort-legian",
    label: "Padma Resort Legian",
    city: "badung",
    province: "bali",
  },
  {
    value: "padma-resort-ubud",
    label: "Padma Resort Ubud",
    city: "gianyar",
    province: "bali",
  },
  {
    value: "alila-uluwatu",
    label: "Alila Villas Uluwatu",
    city: "badung",
    province: "bali",
  },
  {
    value: "hilton-bali-resort",
    label: "Hilton Bali Resort",
    city: "badung",
    province: "bali",
  },
  {
    value: "intercontinental-bali-resort",
    label: "InterContinental Bali Resort",
    city: "badung",
    province: "bali",
  },
  {
    value: "the-westin-resort-bali",
    label: "The Westin Resort Nusa Dua Bali",
    city: "badung",
    province: "bali",
  },
  {
    value: "artotel-sanur-bali",
    label: "ARTOTEL Sanur Bali",
    city: "denpasar",
    province: "bali",
  },

  // Surabaya
  {
    value: "jw-marriott-surabaya",
    label: "JW Marriott Hotel Surabaya",
    city: "surabaya",
    province: "jawa-timur",
  },
  {
    value: "shangri-la-surabaya",
    label: "Shangri-La Hotel Surabaya",
    city: "surabaya",
    province: "jawa-timur",
  },
  {
    value: "sheraton-surabaya",
    label: "Sheraton Surabaya Hotel & Towers",
    city: "surabaya",
    province: "jawa-timur",
  },

  // Yogyakarta
  {
    value: "hotel-tentrem-yogyakarta",
    label: "Hotel Tentrem Yogyakarta",
    city: "yogyakarta",
    province: "di-yogyakarta",
  },
  {
    value: "the-phoenix-hotel-yogyakarta",
    label: "The Phoenix Hotel Yogyakarta - MGallery",
    city: "yogyakarta",
    province: "di-yogyakarta",
  },
  {
    value: "hyatt-regency-yogyakarta",
    label: "Hyatt Regency Yogyakarta",
    city: "sleman",
    province: "di-yogyakarta",
  },
  {
    value: "hotel-tugu-yogyakarta",
    label: "Hotel Tugu Yogyakarta",
    city: "yogyakarta",
    province: "di-yogyakarta",
  },

  // Bandung
  {
    value: "the-trans-luxury-hotel-bandung",
    label: "The Trans Luxury Hotel Bandung",
    city: "bandung",
    province: "jawa-barat",
  },
  {
    value: "hilton-bandung",
    label: "Hilton Bandung",
    city: "bandung",
    province: "jawa-barat",
  },
  {
    value: "padma-hotel-bandung",
    label: "Padma Hotel Bandung",
    city: "bandung",
    province: "jawa-barat",
  },

  // Medan
  {
    value: "jw-marriott-hotel-medan",
    label: "JW Marriott Hotel Medan",
    city: "medan",
    province: "sumatera-utara",
  },
  {
    value: "le-meridien-medan",
    label: "Le Méridien Medan",
    city: "medan",
    province: "sumatera-utara",
  },

  // Makassar
  {
    value: "four-points-makassar",
    label: "Four Points by Sheraton Makassar",
    city: "makassar",
    province: "sulawesi-selatan",
  },
  {
    value: "swiss-belhotel-makassar",
    label: "Swiss-Belhotel Makassar",
    city: "makassar",
    province: "sulawesi-selatan",
  },

  // Lombok
  {
    value: "the-oberoi-lombok",
    label: "The Oberoi Beach Resort Lombok",
    city: "lombok-barat",
    province: "nusa-tenggara-barat",
  },
  {
    value: "novotel-lombok",
    label: "Novotel Lombok Resort & Villas",
    city: "lombok-barat",
    province: "nusa-tenggara-barat",
  },

  // Malang
  {
    value: "hotel-tugu-malang",
    label: "Hotel Tugu Malang",
    city: "malang",
    province: "jawa-timur",
  },
  {
    value: "ibis-styles-malang",
    label: "Ibis Styles Malang",
    city: "malang",
    province: "jawa-timur",
  },

  // Semarang
  {
    value: "hotel-tentrem-semarang",
    label: "Hotel Tentrem Semarang",
    city: "semarang",
    province: "jawa-tengah",
  },
  {
    value: "best-western-premier-semarang",
    label: "Best Western Premier Panbil Semarang",
    city: "semarang",
    province: "jawa-tengah",
  },

  // Other
  {
    value: "santika-premiere-dyandra-medan",
    label: "Santika Premiere Dyandra Hotel & Convention Medan",
    city: "medan",
    province: "sumatera-utara",
  },
  {
    value: "mercure-manado-tateli-resort",
    label: "Mercure Manado Tateli Beach Resort",
    city: "manado",
    province: "sulawesi-utara",
  },
  {
    value: "holiday-inn-express-bali-raya-kuta",
    label: "Holiday Inn Express Bali Raya Kuta",
    city: "badung",
    province: "bali",
  },
  {
    value: "renaissance-bali-uluwatu",
    label: "Renaissance Bali Uluwatu Resort & Spa",
    city: "badung",
    province: "bali",
  },
];

// -----------------------------------------------------------------------------
// 7. Immigration Offices
// -----------------------------------------------------------------------------

export const immigrationOffices: ImmigrationOfficeOption[] = [
  // DKI Jakarta
  {
    value: "imigrasi-jaksel",
    label: "Kantor Imigrasi Kelas I Khusus Jakarta Selatan",
    city: "jakarta-selatan",
    province: "dki-jakarta",
  },
  {
    value: "imigrasi-jakbar",
    label: "Kantor Imigrasi Kelas I Jakarta Barat",
    city: "jakarta-barat",
    province: "dki-jakarta",
  },
  {
    value: "imigrasi-jaktim",
    label: "Kantor Imigrasi Kelas I Jakarta Timur",
    city: "jakarta-timur",
    province: "dki-jakarta",
  },
  {
    value: "imigrasi-jakut",
    label: "Kantor Imigrasi Kelas II Jakarta Utara",
    city: "jakarta-utara",
    province: "dki-jakarta",
  },
  {
    value: "imigrasi-jakpus",
    label: "Kantor Imigrasi Kelas I Jakarta Pusat",
    city: "jakarta-pusat",
    province: "dki-jakarta",
  },

  // Banten
  {
    value: "imigrasi-tangerang",
    label: "Kantor Imigrasi Kelas I Tangerang",
    city: "tangerang",
    province: "banten",
  },
  {
    value: "imigrasi-serang",
    label: "Kantor Imigrasi Kelas II Serang",
    city: "serang",
    province: "banten",
  },

  // Jawa Barat
  {
    value: "imigrasi-bandung",
    label: "Kantor Imigrasi Kelas I Bandung",
    city: "bandung",
    province: "jawa-barat",
  },
  {
    value: "imigrasi-bogor",
    label: "Kantor Imigrasi Kelas I Bogor",
    city: "bogor",
    province: "jawa-barat",
  },
  {
    value: "imigrasi-bekasi",
    label: "Kantor Imigrasi Kelas I Bekasi",
    city: "bekasi",
    province: "jawa-barat",
  },
  {
    value: "imigrasi-depok",
    label: "Kantor Imigrasi Kelas II Depok",
    city: "depok",
    province: "jawa-barat",
  },
  {
    value: "imigrasi-cirebon",
    label: "Kantor Imigrasi Kelas II Cirebon",
    city: "cirebon",
    province: "jawa-barat",
  },
  {
    value: "imigrasi-karawang",
    label: "Kantor Imigrasi Kelas II Karawang",
    city: "karawang",
    province: "jawa-barat",
  },

  // Jawa Tengah
  {
    value: "imigrasi-semarang",
    label: "Kantor Imigrasi Kelas I Semarang",
    city: "semarang",
    province: "jawa-tengah",
  },
  {
    value: "imigrasi-surakarta",
    label: "Kantor Imigrasi Kelas I Surakarta",
    city: "solo",
    province: "jawa-tengah",
  },

  // DI Yogyakarta
  {
    value: "imigrasi-yogyakarta",
    label: "Kantor Imigrasi Kelas I Yogyakarta",
    city: "yogyakarta",
    province: "di-yogyakarta",
  },

  // Jawa Timur
  {
    value: "imigrasi-surabaya",
    label: "Kantor Imigrasi Kelas I Khusus Surabaya",
    city: "surabaya",
    province: "jawa-timur",
  },
  {
    value: "imigrasi-malang",
    label: "Kantor Imigrasi Kelas I Malang",
    city: "malang",
    province: "jawa-timur",
  },

  // Bali
  {
    value: "imigrasi-ngurahrai",
    label: "Kantor Imigrasi Kelas I Khusus TPI Ngurah Rai",
    city: "badung",
    province: "bali",
  },
  {
    value: "imigrasi-denpasar",
    label: "Kantor Imigrasi Kelas I Denpasar",
    city: "denpasar",
    province: "bali",
  },

  // Sumatera Utara
  {
    value: "imigrasi-medan",
    label: "Kantor Imigrasi Kelas I Khusus Medan",
    city: "medan",
    province: "sumatera-utara",
  },

  // Sumatera Barat
  {
    value: "imigrasi-padang",
    label: "Kantor Imigrasi Kelas I Padang",
    city: "padang",
    province: "sumatera-barat",
  },

  // Riau
  {
    value: "imigrasi-pekanbaru",
    label: "Kantor Imigrasi Kelas I Pekanbaru",
    city: "pekanbaru",
    province: "riau",
  },

  // Kepulauan Riau
  {
    value: "imigrasi-batam",
    label: "Kantor Imigrasi Kelas I Khusus Batam",
    city: "batam",
    province: "kepulauan-riau",
  },
  {
    value: "imigrasi-tanjungpinang",
    label: "Kantor Imigrasi Kelas I Tanjung Pinang",
    city: "tanjung-pinang",
    province: "kepulauan-riau",
  },

  // Sumatera Selatan
  {
    value: "imigrasi-palembang",
    label: "Kantor Imigrasi Kelas I Palembang",
    city: "palembang",
    province: "sumatera-selatan",
  },

  // Lampung
  {
    value: "imigrasi-bandarlampung",
    label: "Kantor Imigrasi Kelas I Bandar Lampung",
    city: "bandar-lampung",
    province: "lampung",
  },

  // Kalimantan Timur
  {
    value: "imigrasi-balikpapan",
    label: "Kantor Imigrasi Kelas I Balikpapan",
    city: "balikpapan",
    province: "kalimantan-timur",
  },
  {
    value: "imigrasi-samarinda",
    label: "Kantor Imigrasi Kelas I Samarinda",
    city: "samarinda",
    province: "kalimantan-timur",
  },

  // Sulawesi Selatan
  {
    value: "imigrasi-makassar",
    label: "Kantor Imigrasi Kelas I Makassar",
    city: "makassar",
    province: "sulawesi-selatan",
  },

  // Sulawesi Utara
  {
    value: "imigrasi-manado",
    label: "Kantor Imigrasi Kelas I Manado",
    city: "manado",
    province: "sulawesi-utara",
  },

  // Nusa Tenggara Barat
  {
    value: "imigrasi-mataram",
    label: "Kantor Imigrasi Kelas I Mataram",
    city: "mataram",
    province: "nusa-tenggara-barat",
  },

  // Nusa Tenggara Timur
  {
    value: "imigrasi-kupang",
    label: "Kantor Imigrasi Kelas I Kupang",
    city: "kupang",
    province: "nusa-tenggara-timur",
  },

  // Papua
  {
    value: "imigrasi-jayapura",
    label: "Kantor Imigrasi Kelas I Jayapura",
    city: "jayapura",
    province: "papua",
  },

  // Maluku
  {
    value: "imigrasi-ambon",
    label: "Kantor Imigrasi Kelas I Ambon",
    city: "ambon",
    province: "maluku",
  },

  // Kalimantan Barat
  {
    value: "imigrasi-pontianak",
    label: "Kantor Imigrasi Kelas I Pontianak",
    city: "pontianak",
    province: "kalimantan-barat",
  },
];

// -----------------------------------------------------------------------------
// 8. Travel Purposes
// -----------------------------------------------------------------------------

export const travelPurposes: SelectOption[] = [
  { value: "liburan", label: "Liburan/Rekreasi" },
  { value: "pekerjaan", label: "Pekerjaan/Bisnis" },
  { value: "transit", label: "Fasilitas Transit" },
  { value: "medis", label: "Perawatan Medis" },
  { value: "agama", label: "Keagamaan" },
  { value: "pendidikan", label: "Pendidikan/Pelatihan" },
  { value: "konferensi", label: "Konferensi/Seminar" },
  { value: "olahraga", label: "Olahraga" },
  { value: "budaya", label: "Kegiatan Budaya/Seni" },
  { value: "keluarga", label: "Mengunjungi Keluarga" },
  { value: "lainnya", label: "Lainnya" },
];

// -----------------------------------------------------------------------------
// 9. Air Transport Types
// -----------------------------------------------------------------------------

export const airTransportTypes: SelectOption[] = [
  { value: "komersial", label: "Penerbangan Komersial" },
  { value: "pemerintah", label: "Penerbangan Pemerintah" },
  { value: "carter", label: "Penerbangan Carter/Charter" },
];

// -----------------------------------------------------------------------------
// 10. Ship Types
// -----------------------------------------------------------------------------

export const shipTypes: SelectOption[] = [
  { value: "yacht", label: "Yacht" },
  { value: "feri", label: "Feri" },
  { value: "pesiar", label: "Kapal Pesiar" },
  { value: "kargo", label: "Kargo/Tanker" },
];

// -----------------------------------------------------------------------------
// 11. Accommodation Types
// -----------------------------------------------------------------------------

export const accommodationTypes: SelectOption[] = [
  { value: "rumah", label: "Rumah" },
  { value: "hotel", label: "Hotel" },
  { value: "lainnya", label: "Lainnya" },
];

// -----------------------------------------------------------------------------
// 12. Helper: Get Immigration Office
// -----------------------------------------------------------------------------

/**
 * Returns the label of the nearest immigration office based on city/province matching.
 * First tries to match by city, then by province, then returns a default.
 */
export function getImmigrationOffice(city: string, province: string): string {
  const normalizedCity = city.toLowerCase().trim();
  const normalizedProvince = province.toLowerCase().trim();

  // Try matching by city first
  const cityMatch = immigrationOffices.find(
    (office) => office.city.toLowerCase() === normalizedCity,
  );
  if (cityMatch) {
    return cityMatch.label;
  }

  // Try matching by province
  const provinceMatch = immigrationOffices.find(
    (office) => office.province.toLowerCase() === normalizedProvince,
  );
  if (provinceMatch) {
    return provinceMatch.label;
  }

  // Default fallback
  return "Kantor Imigrasi Kelas I Khusus Jakarta Selatan";
}

// -----------------------------------------------------------------------------
// 13. Helper: Get Cities by Province
// -----------------------------------------------------------------------------

/**
 * Filters cities by the given province value.
 */
export function getCitiesByProvince(
  province: string,
): { value: string; label: string }[] {
  const normalizedProvince = province.toLowerCase().trim();
  return indonesianCities
    .filter((city) => city.province.toLowerCase() === normalizedProvince)
    .map(({ value, label }) => ({ value, label }));
}

// -----------------------------------------------------------------------------
// 14. Helper: Search Hotels
// -----------------------------------------------------------------------------

/**
 * Filters hotels by a search query matching against label, city, or province
 * (case-insensitive).
 */
export function searchHotels(query: string): typeof indonesianHotels {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) {
    return indonesianHotels;
  }

  return indonesianHotels.filter(
    (hotel) =>
      hotel.label.toLowerCase().includes(normalizedQuery) ||
      hotel.city.toLowerCase().includes(normalizedQuery) ||
      hotel.province.toLowerCase().includes(normalizedQuery),
  );
}
