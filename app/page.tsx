"use client";

import { useState, useMemo } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Stepper from "./components/Stepper";
import {
  FormSection,
  FormField,
  TextInput,
  SelectInput,
  DateInput,
  PhoneInput,
  RadioInput,
  SearchableSelect,
  ReadOnlyField,
} from "./components/FormElements";
import SummaryPage from "./components/SummaryPage";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import {
  indonesianAirports,
  indonesianPorts,
  worldAirlines,
  indonesianProvinces,
  travelPurposes,
  airTransportTypes,
  shipTypes,
  accommodationTypes,
  indonesianHotels,
  getCitiesByProvince,
  getImmigrationOffice,
} from "./lib/data";

function PageContent() {
  const { t, language } = useLanguage();
  const getLocale = (lang: string) => {
    const map: Record<string, string> = {
      id: "id-ID",
      en: "en-US",
      ja: "ja-JP",
      zh: "zh-CN",
      ar: "ar-SA",
      ru: "ru-RU",
      ko: "ko-KR",
    };
    return map[lang] || "id-ID";
  };
  const [currentStep, setCurrentStep] = useState(0);
  const [travelers, setTravelers] = useState([
    {
      passportCountry: "",
      fullName: "",
      birthDate: "",
      birthCountry: "",
      gender: "",
      passportNo: "",
      passportExpiry: "",
      phoneCountryCode: "+62",
      phone: "",
      email: "",
    },
  ]);
  const [travelDetails, setTravelDetails] = useState([
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
  ]);

  const handleTravelDetailChange = (
    index: number,
    field: string,
    value: string,
  ) => {
    setTravelDetails((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  // Step 3: Transport & Address
  const [transport, setTransport] = useState({
    mode: "",
    travelPurpose: "",
    arrivalPlace: "",
    airType: "",
    airlineName: "",
    flightCode: "",
    flightNumber: "",
    shipType: "",
    shipName: "",
  });

  const [address, setAddress] = useState({
    accommodationType: "",
    province: "",
    city: "",
    fullAddress: "",
    hotelValue: "",
    hotelLabel: "",
    hotelCity: "",
    hotelProvince: "",
    transitAccommodation: "",
  });

  const handleTransportChange = (field: string, value: string) => {
    setTransport((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddressChange = (field: string, value: string) => {
    setAddress((prev) => ({ ...prev, [field]: value }));
  };

  // Step 4: Declaration

  const [customsModalOpen, setCustomsModalOpen] = useState(false);
  const [submitConfirmModalOpen, setSubmitConfirmModalOpen] = useState(false);
  const [visaCheckModalOpen, setVisaCheckModalOpen] = useState(false);
  const [visaOptionsModalOpen, setVisaOptionsModalOpen] = useState(false);
  const [activeVisaCheckIdx, setActiveVisaCheckIdx] = useState<number | null>(
    null,
  );
  const [activePassengerIdx, setActivePassengerIdx] = useState<number | null>(
    null,
  );
  const [editingCustomsItemIndex, setEditingCustomsItemIndex] = useState<
    number | null
  >(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [customsForm, setCustomsForm] = useState({
    uraian: "",
    jumlah: "",
    mataUang: "IDR",
    nilai: "",
  });

  const [declarations, setDeclarations] = useState([
    {
      baggageCount: "",
      hasProhibitedGoods: "",
      prohibitedGoods: [] as any[],
      hasIMEI: "",
      agreed: false,
    },
  ]);

  // Step 4: Health Declaration
  const [healthDecl, setHealthDecl] = useState([
    {
      hasSymptoms: "",
      symptoms: [] as string[],
      countriesVisited: [] as string[],
    },
  ]);

  // Step 4: Quarantine Declaration
  const [quarantineDecl, setQuarantineDecl] = useState([
    {
      hasAnimalProducts: "",
      commodityCategory: "",
      commoditySubCategory: "",
      selectedCommodities: [] as string[],
      commodityForm: "",
      commodityQuantity: "",
      hasCertificate: "",
      originCountry: "",
    },
  ]);

  const [declarationView, setDeclarationView] = useState<{
    mode: "list" | "form";
    index: number;
  }>({ mode: "list", index: 0 });

  const handleDeclarationChange = (
    index: number,
    field: string,
    value: string | boolean,
  ) => {
    setDeclarations((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const isDeclarationComplete = (decl: (typeof declarations)[0]) => {
    return (
      decl.baggageCount !== "" &&
      decl.hasProhibitedGoods !== "" &&
      decl.hasIMEI !== "" &&
      decl.agreed
    );
  };

  const handleHealthDeclChange = (
    index: number,
    field: string,
    value: string | string[],
  ) => {
    setHealthDecl((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleSymptomToggle = (index: number, symptom: string) => {
    setHealthDecl((prev) => {
      const updated = [...prev];
      const current = updated[index].symptoms;
      if (current.includes(symptom)) {
        updated[index] = {
          ...updated[index],
          symptoms: current.filter((s) => s !== symptom),
        };
      } else {
        updated[index] = { ...updated[index], symptoms: [...current, symptom] };
      }
      return updated;
    });
  };

  const handleCountryVisitedToggle = (index: number, country: string) => {
    setHealthDecl((prev) => {
      const updated = [...prev];
      const current = updated[index].countriesVisited;
      if (current.includes(country)) {
        updated[index] = {
          ...updated[index],
          countriesVisited: current.filter((c) => c !== country),
        };
      } else {
        updated[index] = {
          ...updated[index],
          countriesVisited: [...current, country],
        };
      }
      return updated;
    });
  };

  const handleQuarantineDeclChange = (
    index: number,
    field: string,
    value: string | string[],
  ) => {
    setQuarantineDecl((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleCommodityAdd = (index: number, commodity: string) => {
    if (!commodity) return;
    setQuarantineDecl((prev) => {
      const updated = [...prev];
      const current = updated[index].selectedCommodities;
      if (!current.includes(commodity)) {
        updated[index] = {
          ...updated[index],
          selectedCommodities: [...current, commodity],
          commoditySubCategory: "",
        };
      }
      return updated;
    });
  };

  const handleCommodityRemove = (index: number, commodity: string) => {
    setQuarantineDecl((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        selectedCommodities: updated[index].selectedCommodities.filter(
          (c) => c !== commodity,
        ),
      };
      return updated;
    });
  };

  // Derived: cities filtered by province
  const filteredCities = useMemo(
    () => (address.province ? getCitiesByProvince(address.province) : []),
    [address.province],
  );

  // Derived: immigration office suggestion
  const suggestedImmigrationOffice = useMemo(() => {
    if (
      address.accommodationType === "rumah" &&
      address.city &&
      address.province
    ) {
      return getImmigrationOffice(address.city, address.province);
    }
    if (
      address.accommodationType === "hotel" &&
      address.hotelCity &&
      address.hotelProvince
    ) {
      return getImmigrationOffice(address.hotelCity, address.hotelProvince);
    }
    return "";
  }, [
    address.accommodationType,
    address.city,
    address.province,
    address.hotelCity,
    address.hotelProvince,
  ]);

  // Hotel options for SearchableSelect
  const hotelOptions = useMemo(
    () =>
      indonesianHotels.map((h) => ({
        value: h.value,
        label: h.label,
        subtitle: `${h.city}, ${h.province}`,
      })),
    [],
  );

  const steps = [
    {
      label: t("step1"),
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      label: t("step2"),
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },

    {
      label: t("step4"),
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
  ];

  const genderOptions = [
    { value: "laki-laki", label: t("lakiLaki") },
    { value: "perempuan", label: t("perempuan") },
  ];

  const countryOptions = [
    { value: "AF", label: "Afghanistan" },
    { value: "AL", label: "Albania" },
    { value: "DZ", label: "Algeria" },
    { value: "AR", label: "Argentina" },
    { value: "AU", label: "Australia" },
    { value: "AT", label: "Austria" },
    { value: "BD", label: "Bangladesh" },
    { value: "BE", label: "Belgium" },
    { value: "BR", label: "Brazil" },
    { value: "BN", label: "Brunei Darussalam" },
    { value: "KH", label: "Cambodia" },
    { value: "CA", label: "Canada" },
    { value: "CL", label: "Chile" },
    { value: "CN", label: "China" },
    { value: "CO", label: "Colombia" },
    { value: "HR", label: "Croatia" },
    { value: "CZ", label: "Czech Republic" },
    { value: "DK", label: "Denmark" },
    { value: "EG", label: "Egypt" },
    { value: "FI", label: "Finland" },
    { value: "FR", label: "France" },
    { value: "DE", label: "Germany" },
    { value: "GR", label: "Greece" },
    { value: "HK", label: "Hong Kong" },
    { value: "HU", label: "Hungary" },
    { value: "IN", label: "India" },
    { value: "ID", label: "Indonesia" },
    { value: "IR", label: "Iran" },
    { value: "IQ", label: "Iraq" },
    { value: "IE", label: "Ireland" },
    { value: "IL", label: "Israel" },
    { value: "IT", label: "Italy" },
    { value: "JP", label: "Japan" },
    { value: "JO", label: "Jordan" },
    { value: "KR", label: "South Korea" },
    { value: "KW", label: "Kuwait" },
    { value: "LA", label: "Laos" },
    { value: "MY", label: "Malaysia" },
    { value: "MX", label: "Mexico" },
    { value: "MM", label: "Myanmar" },
    { value: "NP", label: "Nepal" },
    { value: "NL", label: "Netherlands" },
    { value: "NZ", label: "New Zealand" },
    { value: "NG", label: "Nigeria" },
    { value: "NO", label: "Norway" },
    { value: "PK", label: "Pakistan" },
    { value: "PH", label: "Philippines" },
    { value: "PL", label: "Poland" },
    { value: "PT", label: "Portugal" },
    { value: "QA", label: "Qatar" },
    { value: "RO", label: "Romania" },
    { value: "RU", label: "Russia" },
    { value: "SA", label: "Saudi Arabia" },
    { value: "SG", label: "Singapore" },
    { value: "ZA", label: "South Africa" },
    { value: "ES", label: "Spain" },
    { value: "LK", label: "Sri Lanka" },
    { value: "SE", label: "Sweden" },
    { value: "CH", label: "Switzerland" },
    { value: "TW", label: "Taiwan" },
    { value: "TH", label: "Thailand" },
    { value: "TR", label: "Turkey" },
    { value: "AE", label: "United Arab Emirates" },
    { value: "GB", label: "United Kingdom" },
    { value: "US", label: "United States" },
    { value: "VN", label: "Vietnam" },
  ];

  // Mapping ISO country code → phone dial code
  const countryToPhoneCode: Record<string, string> = {
    AF: "+93",
    AL: "+355",
    DZ: "+213",
    AR: "+54",
    AU: "+61",
    AT: "+43",
    BD: "+880",
    BE: "+32",
    BR: "+55",
    BN: "+673",
    KH: "+855",
    CA: "+1",
    CL: "+56",
    CN: "+86",
    CO: "+57",
    HR: "+385",
    CZ: "+420",
    DK: "+45",
    EG: "+20",
    FI: "+358",
    FR: "+33",
    DE: "+49",
    GR: "+30",
    HK: "+852",
    HU: "+36",
    IN: "+91",
    ID: "+62",
    IR: "+98",
    IQ: "+964",
    IE: "+353",
    IL: "+972",
    IT: "+39",
    JP: "+81",
    JO: "+962",
    KR: "+82",
    KW: "+965",
    LA: "+856",
    MY: "+60",
    MX: "+52",
    MM: "+95",
    NP: "+977",
    NL: "+31",
    NZ: "+64",
    NG: "+234",
    NO: "+47",
    PK: "+92",
    PH: "+63",
    PL: "+48",
    PT: "+351",
    QA: "+974",
    RO: "+40",
    RU: "+7",
    SA: "+966",
    SG: "+65",
    ZA: "+27",
    ES: "+34",
    LK: "+94",
    SE: "+46",
    CH: "+41",
    TW: "+886",
    TH: "+66",
    TR: "+90",
    AE: "+971",
    GB: "+44",
    US: "+1",
    VN: "+84",
  };

  const handleTravelerChange = (
    index: number,
    field: string,
    value: string,
  ) => {
    setTravelers((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const addTraveler = () => {
    setTravelers((prev) => [
      ...prev,
      {
        passportCountry: "",
        fullName: "",
        birthDate: "",
        birthCountry: "",
        gender: "",
        passportNo: "",
        passportExpiry: "",
        phoneCountryCode: "+62",
        phone: "",
        email: "",
      },
    ]);
    setTravelDetails((prev) => [
      ...prev,
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
    ]);
    setDeclarations((prev) => [
      ...prev,
      {
        baggageCount: "",
        hasProhibitedGoods: "",
        prohibitedGoods: [] as any[],
        hasIMEI: "",
        agreed: false,
      },
    ]);
    setHealthDecl((prev) => [
      ...prev,
      {
        hasSymptoms: "",
        symptoms: [],
        countriesVisited: [],
      },
    ]);
    setQuarantineDecl((prev) => [
      ...prev,
      {
        hasAnimalProducts: "",
        commodityCategory: "",
        commoditySubCategory: "",
        selectedCommodities: [],
        commodityForm: "",
        commodityQuantity: "",
        hasCertificate: "",
        originCountry: "",
      },
    ]);
  };

  const removeTraveler = (index: number) => {
    if (travelers.length > 1) {
      setTravelers((prev) => prev.filter((_, i) => i !== index));
      setTravelDetails((prev) => prev.filter((_, i) => i !== index));
      setDeclarations((prev) => prev.filter((_, i) => i !== index));
      setHealthDecl((prev) => prev.filter((_, i) => i !== index));
      setQuarantineDecl((prev) => prev.filter((_, i) => i !== index));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        <Header />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in zoom-in duration-500">
          <SummaryPage
            travelers={travelers}
            travelDetails={travelDetails}
            declarations={declarations}
            healthDecl={healthDecl}
            transport={transport}
            address={address}
            onReset={() => {
              setIsSubmitted(false);
              setCurrentStep(0);
              setTravelers([
                {
                  passportCountry: "",
                  fullName: "",
                  birthDate: "",
                  birthCountry: "",
                  gender: "",
                  passportNo: "",
                  passportExpiry: "",
                  phoneCountryCode: "+62",
                  phone: "",
                  email: "",
                },
              ]);
            }}
          />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Badge */}
          <div className="mb-4">
            <span className="inline-block px-5 py-2 bg-gray-200/70 text-gray-700 text-sm font-medium rounded-full">
              Warga Negara Asing
            </span>
          </div>

          {/* Page title */}
          <div className="mb-6">
            <h1 className="text-xl font-bold text-gray-900">
              {t("pageTitle")}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {t("pageDescription")}{" "}
              <span className="text-red-500 font-medium">*</span>{" "}
              {t("pageDescriptionEnd")}
            </p>
          </div>

          {/* Stepper */}
          <div className="mb-8">
            <Stepper currentStep={currentStep} steps={steps} />
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-navy-800 text-white px-6 py-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold">{t("pratinjau")}</h2>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </div>

            <div className="p-6 space-y-6">
              {/* PAGE 0: Data Pribadi + Informasi Akun */}
              {currentStep === 0 && (
                <>
                  {travelers.map((traveler, idx) => (
                    <div key={idx} className="space-y-6">
                      {/* Data Pribadi */}
                      <FormSection
                        title={
                          travelers.length > 1
                            ? `${t("dataPribadi")} — ${t("travelerLabel")} ${idx + 1}`
                            : t("dataPribadi")
                        }
                        description={t("dataPribadiDesc")}
                      >
                        {travelers.length > 1 && idx > 0 && (
                          <div className="flex justify-end mb-4">
                            <button
                              onClick={() => removeTraveler(idx)}
                              className="flex items-center gap-1.5 text-xs font-medium text-red-500 hover:text-red-600 border border-red-200 rounded-lg px-3 py-1.5 hover:bg-red-50 transition-colors"
                            >
                              <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                              {t("hapusPelaku")}
                            </button>
                          </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                          <FormField label={t("pasporNegara")} required>
                            <SearchableSelect
                              id={`passport-country-${idx}`}
                              placeholder={t("phPilihNegara")}
                              options={countryOptions}
                              value={traveler.passportCountry}
                              onChange={(value) => {
                                handleTravelerChange(
                                  idx,
                                  "passportCountry",
                                  value,
                                );
                                // Sinkronkan kode telepon dengan negara paspor
                                const phoneCode = countryToPhoneCode[value];
                                if (phoneCode) {
                                  handleTravelerChange(
                                    idx,
                                    "phoneCountryCode",
                                    phoneCode,
                                  );
                                }
                              }}
                            />
                          </FormField>

                          <FormField label={t("namaLengkap")} required>
                            <TextInput
                              id={`full-name-${idx}`}
                              placeholder={t("phNama")}
                              value={traveler.fullName}
                              onChange={(e) =>
                                handleTravelerChange(
                                  idx,
                                  "fullName",
                                  e.target.value,
                                )
                              }
                            />
                          </FormField>

                          <FormField label={t("tanggalLahir")} required>
                            <DateInput
                              id={`birth-date-${idx}`}
                              value={traveler.birthDate}
                              onChange={(e) =>
                                handleTravelerChange(
                                  idx,
                                  "birthDate",
                                  e.target.value,
                                )
                              }
                            />
                          </FormField>

                          <FormField label={t("negaraTempatLahir")} required>
                            <SearchableSelect
                              id={`birth-country-${idx}`}
                              placeholder={t("phPilihNegara")}
                              options={countryOptions}
                              value={traveler.birthCountry}
                              onChange={(value) =>
                                handleTravelerChange(idx, "birthCountry", value)
                              }
                            />
                          </FormField>

                          <FormField label={t("jenisKelamin")} required>
                            <SelectInput
                              id={`gender-${idx}`}
                              placeholder={t("phKelamin")}
                              options={genderOptions}
                              value={traveler.gender}
                              onChange={(e) =>
                                handleTravelerChange(
                                  idx,
                                  "gender",
                                  e.target.value,
                                )
                              }
                            />
                          </FormField>

                          <FormField label={t("nomorPaspor")} required>
                            <TextInput
                              id={`passport-no-${idx}`}
                              placeholder={t("phNomorPaspor")}
                              value={traveler.passportNo}
                              onChange={(e) =>
                                handleTravelerChange(
                                  idx,
                                  "passportNo",
                                  e.target.value,
                                )
                              }
                            />
                          </FormField>

                          <FormField label={t("tanggalKadaluwarsa")} required>
                            <DateInput
                              id={`passport-expiry-${idx}`}
                              value={traveler.passportExpiry}
                              onChange={(e) =>
                                handleTravelerChange(
                                  idx,
                                  "passportExpiry",
                                  e.target.value,
                                )
                              }
                            />
                          </FormField>
                        </div>
                      </FormSection>

                      {/* Informasi Akun (same page, below Data Pribadi) */}
                      <FormSection
                        title={
                          travelers.length > 1
                            ? `${t("infoAkun")} — ${t("travelerLabel")} ${idx + 1}`
                            : t("infoAkun")
                        }
                        description={t("infoAkunDesc")}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                          <FormField label={t("nomorPonsel")} required>
                            <PhoneInput
                              id={`phone-${idx}`}
                              placeholder={t("phTelepon")}
                              value={traveler.phone}
                              selectedCountryCode={traveler.phoneCountryCode}
                              onCountryCodeChange={(code) =>
                                handleTravelerChange(
                                  idx,
                                  "phoneCountryCode",
                                  code,
                                )
                              }
                              onChange={(e) =>
                                handleTravelerChange(
                                  idx,
                                  "phone",
                                  e.target.value,
                                )
                              }
                            />
                          </FormField>

                          <FormField label={t("email")} required>
                            <TextInput
                              id={`email-${idx}`}
                              type="email"
                              placeholder={t("phEmail")}
                              value={traveler.email}
                              onChange={(e) =>
                                handleTravelerChange(
                                  idx,
                                  "email",
                                  e.target.value,
                                )
                              }
                            />
                          </FormField>
                        </div>
                      </FormSection>
                    </div>
                  ))}

                  <div className="flex justify-end">
                    <button
                      onClick={addTraveler}
                      className="flex items-center gap-1.5 text-xs font-medium text-teal-600 hover:text-teal-700 border border-teal-200 rounded-lg px-4 py-2 hover:bg-teal-50 transition-colors"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      {t("tambahPelaku")}
                    </button>
                  </div>
                  {/* Moda Transportasi Section */}
                  <FormSection
                    title={t("modaTransportasi")}
                    description={t("modaTransportasiDesc")}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                      <FormField label={t("pilihModa")} required>
                        <SelectInput
                          id="transport-mode"
                          placeholder={t("phPilihModa")}
                          options={[
                            { value: "udara", label: t("udara") },
                            { value: "laut", label: t("laut") },
                          ]}
                          value={transport.mode}
                          onChange={(e) => {
                            handleTransportChange("mode", e.target.value);
                            handleTransportChange("arrivalPlace", "");
                            handleTransportChange("airType", "");
                            handleTransportChange("airlineName", "");
                            handleTransportChange("flightCode", "");
                            handleTransportChange("flightNumber", "");
                            handleTransportChange("shipType", "");
                            handleTransportChange("shipName", "");
                          }}
                        />
                      </FormField>

                      <FormField label={t("tujuanPerjalanan")} required>
                        <SelectInput
                          id="travel-purpose"
                          placeholder={t("phTujuanPerjalanan")}
                          options={travelPurposes.map((opt) => ({
                            ...opt,
                            label: t("tp_" + opt.value) || opt.label,
                          }))}
                          value={transport.travelPurpose}
                          onChange={(e) =>
                            handleTransportChange(
                              "travelPurpose",
                              e.target.value,
                            )
                          }
                        />
                      </FormField>
                    </div>

                    {/* Conditional: UDARA fields */}
                    {transport.mode === "udara" && (
                      <div className="mt-5 animate-in">
                        <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-blue-50 border border-blue-100 rounded-lg">
                          <svg
                            className="w-4 h-4 text-blue-400 shrink-0"
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
                          <p className="text-xs text-blue-600">
                            {t("infoKolomUdara")}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                          <FormField label={t("tempatKedatangan")} required>
                            <SearchableSelect
                              id="arrival-airport"
                              placeholder={t("phTempatKedatangan")}
                              options={indonesianAirports}
                              value={transport.arrivalPlace}
                              onChange={(value) =>
                                handleTransportChange("arrivalPlace", value)
                              }
                            />
                          </FormField>

                          <FormField
                            label={t("jenisTransportasiUdara")}
                            required
                          >
                            <SelectInput
                              id="air-transport-type"
                              placeholder={t("phJenisTransportasiUdara")}
                              options={airTransportTypes.map((opt) => ({
                                ...opt,
                                label: t("air_" + opt.value) || opt.label,
                              }))}
                              value={transport.airType}
                              onChange={(e) =>
                                handleTransportChange("airType", e.target.value)
                              }
                            />
                          </FormField>

                          <FormField label={t("namaPenerbangan")} required>
                            <SearchableSelect
                              id="airline-name"
                              placeholder={t("phNamaPenerbangan")}
                              options={worldAirlines}
                              value={transport.airlineName}
                              onChange={(value, opt) => {
                                handleTransportChange("airlineName", value);
                                handleTransportChange(
                                  "flightCode",
                                  opt?.value || "",
                                );
                              }}
                            />
                          </FormField>

                          <FormField label={t("nomorPenerbangan")} required>
                            <div className="flex">
                              <span className="inline-flex items-center px-3 py-2.5 rounded-l-lg border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 font-medium min-w-[60px] justify-center">
                                {transport.flightCode || t("kode")}
                              </span>
                              <TextInput
                                id="flight-number"
                                placeholder={t("phNomorPenerbangan")}
                                value={transport.flightNumber}
                                onChange={(e) =>
                                  handleTransportChange(
                                    "flightNumber",
                                    e.target.value,
                                  )
                                }
                                className="!rounded-l-none"
                              />
                            </div>
                          </FormField>
                        </div>
                      </div>
                    )}

                    {/* Conditional: LAUT fields */}
                    {transport.mode === "laut" && (
                      <div className="mt-5 animate-in">
                        <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-blue-50 border border-blue-100 rounded-lg">
                          <svg
                            className="w-4 h-4 text-blue-400 shrink-0"
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
                          <p className="text-xs text-blue-600">
                            {t("infoKolomLaut")}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                          <FormField label={t("tempatKedatangan")} required>
                            <SearchableSelect
                              id="arrival-port"
                              placeholder={t("phTempatKedatangan")}
                              options={indonesianPorts}
                              value={transport.arrivalPlace}
                              onChange={(value) =>
                                handleTransportChange("arrivalPlace", value)
                              }
                            />
                          </FormField>

                          <FormField label={t("jenisKapal")} required>
                            <SelectInput
                              id="ship-type"
                              placeholder={t("phJenisKapal")}
                              options={shipTypes.map((opt) => ({
                                ...opt,
                                label: t("ship_" + opt.value) || opt.label,
                              }))}
                              value={transport.shipType}
                              onChange={(e) =>
                                handleTransportChange(
                                  "shipType",
                                  e.target.value,
                                )
                              }
                            />
                          </FormField>

                          <FormField
                            label={t("namaKapal")}
                            required
                            className="md:col-span-2"
                          >
                            <TextInput
                              id="ship-name"
                              placeholder={t("phNamaKapal")}
                              value={transport.shipName}
                              onChange={(e) =>
                                handleTransportChange(
                                  "shipName",
                                  e.target.value,
                                )
                              }
                            />
                          </FormField>
                        </div>
                      </div>
                    )}
                  </FormSection>

                  {/* Alamat di Indonesia Section */}
                  <FormSection
                    title={t("alamatIndonesia")}
                    description={t("alamatIndonesiaDesc")}
                  >
                    <div className="grid grid-cols-1 gap-y-4">
                      <FormField label={t("jenisTempatTinggal")} required>
                        <SelectInput
                          id="accommodation-type"
                          placeholder={t("phJenisTempatTinggal")}
                          options={accommodationTypes.map((opt) => ({
                            ...opt,
                            label: t("acc_" + opt.value) || opt.label,
                          }))}
                          value={address.accommodationType}
                          onChange={(e) => {
                            handleAddressChange(
                              "accommodationType",
                              e.target.value,
                            );
                            handleAddressChange("province", "");
                            handleAddressChange("city", "");
                            handleAddressChange("fullAddress", "");
                            handleAddressChange("hotelValue", "");
                            handleAddressChange("hotelLabel", "");
                            handleAddressChange("hotelCity", "");
                            handleAddressChange("hotelProvince", "");
                            handleAddressChange("transitAccommodation", "");
                          }}
                        />
                      </FormField>
                    </div>

                    {/* Conditional: RUMAH fields */}
                    {address.accommodationType === "rumah" && (
                      <div className="mt-5 animate-in">
                        <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-blue-50 border border-blue-100 rounded-lg">
                          <svg
                            className="w-4 h-4 text-blue-400 shrink-0"
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
                          <p className="text-xs text-blue-600">
                            {t("infoKolomRumah")}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                          <FormField label={t("provinsi")} required>
                            <SearchableSelect
                              id="province"
                              placeholder={t("phProvinsi")}
                              options={indonesianProvinces}
                              value={address.province}
                              onChange={(value) => {
                                handleAddressChange("province", value);
                                handleAddressChange("city", "");
                              }}
                            />
                          </FormField>

                          <FormField label={t("kota")} required>
                            <SelectInput
                              id="city"
                              placeholder={t("phKota")}
                              options={filteredCities}
                              value={address.city}
                              onChange={(e) =>
                                handleAddressChange("city", e.target.value)
                              }
                            />
                          </FormField>

                          <FormField label={t("alamatLengkap")} required>
                            <TextInput
                              id="full-address"
                              placeholder={t("phAlamatLengkap")}
                              value={address.fullAddress}
                              onChange={(e) =>
                                handleAddressChange(
                                  "fullAddress",
                                  e.target.value,
                                )
                              }
                            />
                          </FormField>

                          <FormField label={t("kantorImigrasi")}>
                            <ReadOnlyField
                              id="immigration-office"
                              value={suggestedImmigrationOffice}
                              icon={
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                  />
                                </svg>
                              }
                            />
                          </FormField>
                        </div>
                      </div>
                    )}

                    {/* Conditional: HOTEL fields */}
                    {address.accommodationType === "hotel" && (
                      <div className="mt-5 animate-in">
                        <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-blue-50 border border-blue-100 rounded-lg">
                          <svg
                            className="w-4 h-4 text-blue-400 shrink-0"
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
                          <p className="text-xs text-blue-600">
                            {t("infoKolomHotel")}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                          <FormField
                            label={t("namaHotel")}
                            required
                            className="md:col-span-2"
                          >
                            <SearchableSelect
                              id="hotel-name"
                              placeholder={t("phNamaHotel")}
                              options={hotelOptions}
                              value={address.hotelValue}
                              onChange={(value, opt) => {
                                handleAddressChange("hotelValue", value);
                                handleAddressChange(
                                  "hotelLabel",
                                  opt?.label || "",
                                );
                                const hotel = indonesianHotels.find(
                                  (h) => h.value === value,
                                );
                                if (hotel) {
                                  handleAddressChange("hotelCity", hotel.city);
                                  handleAddressChange(
                                    "hotelProvince",
                                    hotel.province,
                                  );
                                }
                              }}
                            />
                          </FormField>

                          <FormField
                            label={t("kantorImigrasi")}
                            className="md:col-span-2"
                          >
                            <ReadOnlyField
                              id="immigration-office-hotel"
                              value={suggestedImmigrationOffice}
                              icon={
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                  />
                                </svg>
                              }
                            />
                          </FormField>
                        </div>
                      </div>
                    )}

                    {/* Conditional: LAINNYA fields */}
                    {address.accommodationType === "lainnya" && (
                      <div className="mt-5 animate-in">
                        <div className="grid grid-cols-1 gap-y-4">
                          <FormField label={t("akomodasi")} required>
                            <SelectInput
                              id="transit-accommodation"
                              placeholder={t("phAkomodasi")}
                              options={[
                                { value: "transit", label: t("hanyaTransit") },
                              ]}
                              value={address.transitAccommodation}
                              onChange={(e) =>
                                handleAddressChange(
                                  "transitAccommodation",
                                  e.target.value,
                                )
                              }
                            />
                          </FormField>
                        </div>
                      </div>
                    )}
                  </FormSection>
                </>
              )}

              {/* PAGE 1: Detail Perjalanan */}
              {currentStep === 1 && (
                <>
                  {travelers.map((traveler, idx) => {
                    const detail = travelDetails[idx] || {
                      arrivalDate: "",
                      departureDate: "",
                      documentType: "",
                      passportNumber: "",
                      kitasNumber: "",
                      documentStatus: "",
                      hasVisa: "",
                      visaNumber: "",
                    };
                    return (
                      <FormSection
                        key={idx}
                        title={
                          travelers.length > 1
                            ? `${t("detailPerjalanan")} — ${traveler.fullName || `${t("travelerLabel")} ${idx + 1}`}`
                            : t("detailPerjalanan")
                        }
                        description={t("detailPerjalananDesc")}
                      >
                        {travelers.length > 1 && (
                          <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-teal-50 border border-teal-100 rounded-lg">
                            <svg
                              className="w-4 h-4 text-teal-500 shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            <p className="text-xs text-teal-700 font-medium">
                              {traveler.fullName ||
                                `${t("travelerLabel")} ${idx + 1}`}
                              {traveler.passportCountry && (
                                <span className="text-teal-500 font-normal ml-1">
                                  —{" "}
                                  {countryOptions.find(
                                    (c) => c.value === traveler.passportCountry,
                                  )?.label || traveler.passportCountry}
                                </span>
                              )}
                            </p>
                          </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                          <FormField label={t("tglKedatangan")} required>
                            <SelectInput
                              id={`arrival-date-select-${idx}`}
                              placeholder={t("phPilih")}
                              options={[
                                {
                                  value: "today",
                                  label: new Date().toLocaleDateString(
                                    "id-ID",
                                    {
                                      day: "2-digit",
                                      month: "long",
                                      year: "numeric",
                                    },
                                  ),
                                },
                                {
                                  value: "tomorrow",
                                  label: new Date(
                                    Date.now() + 86400000,
                                  ).toLocaleDateString("id-ID", {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                  }),
                                },
                                {
                                  value: "custom",
                                  label: t("tanggalLainnya"),
                                },
                              ]}
                              value={detail.arrivalDate}
                              onChange={(e) =>
                                handleTravelDetailChange(
                                  idx,
                                  "arrivalDate",
                                  e.target.value,
                                )
                              }
                            />
                          </FormField>

                          <FormField label={t("tglKeberangkatan")} required>
                            <DateInput
                              id={`departure-date-${idx}`}
                              value={detail.departureDate}
                              onChange={(e) =>
                                handleTravelDetailChange(
                                  idx,
                                  "departureDate",
                                  e.target.value,
                                )
                              }
                            />
                          </FormField>
                        </div>

                        <div className="mt-6 animate-in">
                          <FormField label={t("dokumenDimiliki")} required>
                            <SelectInput
                              id={`document-type-${idx}`}
                              placeholder={t("phPilih") || "Pilih"}
                              options={[
                                { value: "visa", label: t("visaOption") },
                                { value: "kitas", label: t("kitasOption") },
                              ]}
                              value={detail.documentType || ""}
                              onChange={(e) => {
                                handleTravelDetailChange(
                                  idx,
                                  "documentType",
                                  e.target.value,
                                );
                                handleTravelDetailChange(
                                  idx,
                                  "documentStatus",
                                  "",
                                );
                                handleTravelDetailChange(
                                  idx,
                                  "passportNumber",
                                  "",
                                );
                                handleTravelDetailChange(
                                  idx,
                                  "kitasNumber",
                                  "",
                                );
                              }}
                            />
                          </FormField>
                        </div>

                        {detail.documentType === "visa" && (
                          <div className="mt-5 animate-in">
                            <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
                              <div className="flex-1 w-full">
                                <FormField label={t("nomorPaspor")} required>
                                  <TextInput
                                    id={`passport-number-${idx}`}
                                    placeholder={t("phNomorPaspor")}
                                    value={detail.passportNumber || ""}
                                    onChange={(e) => {
                                      handleTravelDetailChange(
                                        idx,
                                        "passportNumber",
                                        e.target.value,
                                      );
                                      handleTravelDetailChange(
                                        idx,
                                        "documentStatus",
                                        "",
                                      );
                                    }}
                                  />
                                </FormField>
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  if (!detail.passportNumber) return;
                                  if (detail.passportNumber === "123456789") {
                                    handleTravelDetailChange(
                                      idx,
                                      "documentStatus",
                                      "active",
                                    );
                                  } else if (
                                    detail.passportNumber === "987654321"
                                  ) {
                                    setActiveVisaCheckIdx(idx);
                                    setVisaCheckModalOpen(true);
                                  } else {
                                    // Fallback for demo
                                    handleTravelDetailChange(
                                      idx,
                                      "documentStatus",
                                      "active",
                                    );
                                  }
                                }}
                                className="px-5 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors md:h-[42px] mt-1 md:mt-0 w-full md:w-auto"
                              >
                                {t("cekVisaAktif")}
                              </button>
                            </div>
                            {detail.documentStatus === "active" && (
                              <div className="mt-3 p-3 bg-green-50 border border-green-100 rounded-lg animate-in fade-in zoom-in duration-300">
                                <div className="text-sm text-green-700 font-medium flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <svg
                                      className="w-4 h-4 text-green-600"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                  </div>
                                  {t("visaAktifDitemukan")}
                                </div>
                              </div>
                            )}
                            {detail.documentStatus === "applied" && (
                              <div className="mt-3 p-3 bg-blue-50 border border-blue-100 rounded-lg animate-in fade-in zoom-in duration-300">
                                <div className="text-sm text-blue-700 font-medium flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                    <svg
                                      className="w-4 h-4 text-blue-600"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                  </div>
                                  {t("pengajuanVisaSelesai")}
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {detail.documentType === "kitas" && (
                          <div className="mt-5 animate-in">
                            <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
                              <div className="flex-1 w-full">
                                <FormField label={t("nomorKitas")} required>
                                  <TextInput
                                    id={`kitas-number-${idx}`}
                                    placeholder={t("phNomorKitas")}
                                    value={detail.kitasNumber || ""}
                                    onChange={(e) => {
                                      handleTravelDetailChange(
                                        idx,
                                        "kitasNumber",
                                        e.target.value,
                                      );
                                      handleTravelDetailChange(
                                        idx,
                                        "documentStatus",
                                        "",
                                      );
                                    }}
                                  />
                                </FormField>
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  if (!detail.kitasNumber) return;
                                  if (detail.kitasNumber === "159753") {
                                    handleTravelDetailChange(
                                      idx,
                                      "documentStatus",
                                      "active",
                                    );
                                  } else {
                                    alert(
                                      "Nomor tidak ditemukan. Gunakan dummy 159753",
                                    );
                                  }
                                }}
                                className="px-5 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors md:h-[42px] mt-1 md:mt-0 w-full md:w-auto"
                              >
                                {t("kirim")}
                              </button>
                            </div>
                            {detail.documentStatus === "active" && (
                              <div className="mt-3 p-3 bg-green-50 border border-green-100 rounded-lg animate-in fade-in zoom-in duration-300">
                                <div className="text-sm text-green-700 font-medium flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <svg
                                      className="w-4 h-4 text-green-600"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                  </div>
                                  {t("dokumenValid")}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </FormSection>
                    );
                  })}
                </>
              )}

              {/* PAGE 2: Deklarasi */}
              {currentStep === 2 && (
                <>
                  {declarationView.mode === "list" ? (
                    /* --- Traveler List View --- */
                    <FormSection
                      title={t("deklarasiAnggota")}
                      description={t("deklarasiAnggotaDesc")}
                    >
                      <div className="space-y-4">
                        {travelers.map((traveler, idx) => {
                          const decl = declarations[idx];
                          const complete = decl
                            ? isDeclarationComplete(decl)
                            : false;
                          return (
                            <div
                              key={idx}
                              className={`w-full text-left rounded-xl border-2 px-6 py-5 transition-all duration-200 ${
                                complete
                                  ? "border-blue-500 bg-blue-50/10"
                                  : "border-red-500 bg-red-50/10"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <p className="text-xs text-gray-400 font-medium mb-1">
                                    {idx === 0
                                      ? t("ketuaPelaku")
                                      : `${t("travelerLabel")} ${idx + 1}`}
                                  </p>
                                  <p className="text-base font-bold text-gray-900 uppercase">
                                    {traveler.fullName ||
                                      `${t("travelerLabel")} ${idx + 1}`}
                                  </p>
                                  <p className="text-sm text-gray-500 mt-0.5">
                                    {traveler.passportNo || "—"}
                                  </p>
                                  <p
                                    className={`text-xs font-medium mt-2 ${
                                      complete
                                        ? "text-teal-600"
                                        : "text-amber-500"
                                    }`}
                                  >
                                    {complete
                                      ? t("deklarasiSelesai")
                                      : t("isiDeklarasi")}
                                  </p>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setDeclarationView({
                                        mode: "form",
                                        index: idx,
                                      })
                                    }
                                    className="px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
                                  >
                                    {complete
                                      ? t("edit") || "Edit"
                                      : t("isiData") || "Isi Data"}
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </FormSection>
                  ) : (
                    /* --- Declaration Form View --- */
                    (() => {
                      const idx = declarationView.index;
                      const traveler = travelers[idx];
                      const decl = declarations[idx] || {
                        baggageCount: "",
                        hasProhibitedGoods: "",
                        hasIMEI: "",
                        agreed: false,
                      };
                      return (
                        <div className="space-y-6">
                          {/* Back to list button */}
                          <button
                            type="button"
                            onClick={() =>
                              setDeclarationView({ mode: "list", index: 0 })
                            }
                            className="flex items-center gap-2 text-sm text-gray-500 hover:text-teal-600 transition-colors font-medium"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                              />
                            </svg>
                            {t("kembaliKeList")}
                          </button>

                          {/* Traveler badge */}
                          <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-100 rounded-xl">
                            <div className="w-9 h-9 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                              {idx + 1}
                            </div>
                            <div>
                              <p className="text-xs text-gray-400 font-medium">
                                {idx === 0
                                  ? t("ketuaPelaku")
                                  : `${t("travelerLabel")} ${idx + 1}`}
                              </p>
                              <p className="text-sm font-bold text-gray-900 uppercase">
                                {traveler?.fullName ||
                                  `${t("travelerLabel")} ${idx + 1}`}
                              </p>
                            </div>
                          </div>

                          {/* ===== Deklarasi Kesehatan ===== */}
                          <FormSection
                            title={t("dekKesehatanTitle")}
                            description={t("dekKesehatanDesc")}
                          >
                            {/* Q1: Symptoms */}
                            <div className="mb-6 animate-in">
                              <p className="text-xs font-semibold text-navy-800 mb-3">
                                {t("dekKesehatanQ1")}{" "}
                                <span className="text-red-500 ml-0.5">*</span>
                              </p>
                              <RadioInput
                                name={`symptoms-${idx}`}
                                id={`symptoms-${idx}`}
                                options={[
                                  { value: "ya", label: t("ya") },
                                  { value: "tidak", label: t("tidak") },
                                ]}
                                value={
                                  (healthDecl[idx] || { hasSymptoms: "" })
                                    .hasSymptoms
                                }
                                onChange={(value) => {
                                  handleHealthDeclChange(
                                    idx,
                                    "hasSymptoms",
                                    value,
                                  );
                                  if (value === "tidak") {
                                    handleHealthDeclChange(idx, "symptoms", []);
                                  }
                                }}
                              />

                              {healthDecl[idx]?.hasSymptoms === "ya" && (
                                <div className="mt-4 flex flex-wrap gap-2 animate-in slide-in-from-top-2 fade-in duration-200">
                                  {[
                                    {
                                      key: "BATUK",
                                      label: t("dekKesehatanBatuk"),
                                    },
                                    {
                                      key: "DEMAM",
                                      label: t("dekKesehatanDemam"),
                                    },
                                    {
                                      key: "LESI",
                                      label: t("dekKesehatanLesi"),
                                    },
                                    {
                                      key: "PILEK",
                                      label: t("dekKesehatanPilek"),
                                    },
                                    {
                                      key: "TENGGOROKAN",
                                      label: t("dekKesehatanTenggorokan"),
                                    },
                                    {
                                      key: "SESAK",
                                      label: t("dekKesehatanSesak"),
                                    },
                                  ].map((symptom) => {
                                    const checked = (
                                      healthDecl[idx]?.symptoms || []
                                    ).includes(symptom.key);

                                    return (
                                      <button
                                        key={symptom.key}
                                        type="button"
                                        onClick={() => {
                                          handleSymptomToggle(idx, symptom.key);
                                        }}
                                        className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 ${
                                          checked
                                            ? "bg-teal-50 border-teal-300 text-teal-700 shadow-sm"
                                            : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                                        }`}
                                      >
                                        {symptom.label}
                                      </button>
                                    );
                                  })}
                                </div>
                              )}

                              {/* Selected Symptoms Bar */}
                              {healthDecl[idx]?.hasSymptoms === "ya" &&
                                (healthDecl[idx]?.symptoms || []).length >
                                  0 && (
                                  <div className="mt-4 p-3 bg-red-50/50 border border-red-100 rounded-lg animate-in slide-in-from-top-2 fade-in duration-200">
                                    <p className="text-xs font-medium text-red-800 mb-2 flex items-center gap-1.5">
                                      <svg
                                        className="w-3.5 h-3.5 text-red-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        />
                                      </svg>
                                      {t("dekKesehatanGejalaTerpilih") ||
                                        "Gejala Terpilih:"}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                      {(healthDecl[idx]?.symptoms || []).map(
                                        (symptomKey: string) => {
                                          const symptomLabel =
                                            [
                                              {
                                                key: "BATUK",
                                                label: t("dekKesehatanBatuk"),
                                              },
                                              {
                                                key: "DEMAM",
                                                label: t("dekKesehatanDemam"),
                                              },
                                              {
                                                key: "LESI",
                                                label: t("dekKesehatanLesi"),
                                              },
                                              {
                                                key: "PILEK",
                                                label: t("dekKesehatanPilek"),
                                              },
                                              {
                                                key: "TENGGOROKAN",
                                                label: t(
                                                  "dekKesehatanTenggorokan",
                                                ),
                                              },
                                              {
                                                key: "SESAK",
                                                label: t("dekKesehatanSesak"),
                                              },
                                            ].find((s) => s.key === symptomKey)
                                              ?.label || symptomKey;

                                          return (
                                            <span
                                              key={symptomKey}
                                              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-white border border-red-200 text-red-700 rounded-md shadow-sm"
                                            >
                                              {symptomLabel}
                                              <button
                                                type="button"
                                                onClick={() => {
                                                  handleSymptomToggle(
                                                    idx,
                                                    symptomKey,
                                                  );
                                                  // If it's the last one being removed, set to tidak
                                                  const currentSymptoms =
                                                    healthDecl[idx]?.symptoms ||
                                                    [];
                                                  if (
                                                    currentSymptoms.length ===
                                                      1 &&
                                                    currentSymptoms[0] ===
                                                      symptomKey
                                                  ) {
                                                    handleHealthDeclChange(
                                                      idx,
                                                      "hasSymptoms",
                                                      "tidak",
                                                    );
                                                  }
                                                }}
                                                className="text-red-400 hover:text-red-600 transition-colors"
                                              >
                                                <svg
                                                  className="w-3 h-3"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  stroke="currentColor"
                                                  strokeWidth={2.5}
                                                >
                                                  <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                  />
                                                </svg>
                                              </button>
                                            </span>
                                          );
                                        },
                                      )}
                                    </div>
                                  </div>
                                )}
                            </div>

                            {/* Q2: Countries visited in past 21 days */}
                            <div className="mb-2">
                              <p className="text-xs font-semibold text-navy-800 mb-3">
                                {t("dekKesehatanQ2")}
                              </p>
                              <SelectInput
                                id={`health-countries-${idx}`}
                                placeholder={t("phPilih")}
                                options={countryOptions}
                                value=""
                                onChange={(e) => {
                                  const val = e.target.value;
                                  if (
                                    val &&
                                    !(
                                      healthDecl[idx]?.countriesVisited || []
                                    ).includes(val)
                                  ) {
                                    handleCountryVisitedToggle(idx, val);
                                  }
                                }}
                              />
                              {(healthDecl[idx]?.countriesVisited || [])
                                .length > 0 && (
                                <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                  <div className="flex flex-wrap gap-2">
                                    {(
                                      healthDecl[idx]?.countriesVisited || []
                                    ).map((countryCode: string) => {
                                      const countryLabel =
                                        countryOptions.find(
                                          (c) => c.value === countryCode,
                                        )?.label || countryCode;
                                      return (
                                        <span
                                          key={countryCode}
                                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white border border-gray-200 rounded-lg text-gray-700"
                                        >
                                          {countryLabel}
                                          <button
                                            type="button"
                                            onClick={() =>
                                              handleCountryVisitedToggle(
                                                idx,
                                                countryCode,
                                              )
                                            }
                                            className="text-gray-400 hover:text-red-500 transition-colors"
                                          >
                                            <svg
                                              className="w-3.5 h-3.5"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                              strokeWidth={2}
                                            >
                                              <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                              />
                                            </svg>
                                          </button>
                                        </span>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          </FormSection>

                          {/* ===== Deklarasi Karantina ===== */}
                          <FormSection
                            title={t("dekKarantinaTitle")}
                            description={t("dekKarantinaDesc")}
                          >
                            {/* Q1: Animal/Fish/Plant products */}
                            <div className="mb-6">
                              <p className="text-xs font-semibold text-navy-800 mb-3">
                                {t("dekKarantinaQ1")}{" "}
                                <span className="text-red-500 ml-0.5">*</span>
                              </p>
                              <RadioInput
                                name={`quar-animal-${idx}`}
                                id={`quar-animal-${idx}`}
                                options={[
                                  { value: "ya", label: t("ya") },
                                  { value: "tidak", label: t("tidak") },
                                ]}
                                value={
                                  (
                                    quarantineDecl[idx] || {
                                      hasAnimalProducts: "",
                                    }
                                  ).hasAnimalProducts
                                }
                                onChange={(value) =>
                                  handleQuarantineDeclChange(
                                    idx,
                                    "hasAnimalProducts",
                                    value,
                                  )
                                }
                              />
                            </div>

                            {/* Conditional: Commodity details when "Ya" */}
                            {(quarantineDecl[idx] || { hasAnimalProducts: "" })
                              .hasAnimalProducts === "ya" && (
                              <div className="mb-6 animate-in space-y-4">
                                {/* Category & Sub-category */}
                                <p className="text-xs font-semibold text-navy-800">
                                  {t("dekKarantinaDescKomoditas")}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                                  <SelectInput
                                    id={`quar-category-${idx}`}
                                    placeholder={t("phPilih")}
                                    options={[
                                      {
                                        value: "HEWAN",
                                        label: t("karantinaHewan") || "HEWAN",
                                      },
                                      {
                                        value: "IKAN",
                                        label: t("karantinaIkan") || "IKAN",
                                      },
                                      {
                                        value: "TUMBUHAN",
                                        label:
                                          t("karantinaTumbuhan") || "TUMBUHAN",
                                      },
                                    ]}
                                    value={
                                      (
                                        quarantineDecl[idx] || {
                                          commodityCategory: "",
                                        }
                                      ).commodityCategory
                                    }
                                    onChange={(e) => {
                                      handleQuarantineDeclChange(
                                        idx,
                                        "commodityCategory",
                                        e.target.value,
                                      );
                                      handleQuarantineDeclChange(
                                        idx,
                                        "commoditySubCategory",
                                        "",
                                      );
                                    }}
                                  />

                                  <SelectInput
                                    id={`quar-subcategory-${idx}`}
                                    placeholder={t("phPilih")}
                                    options={
                                      quarantineDecl[idx]?.commodityCategory ===
                                      "HEWAN"
                                        ? [
                                            {
                                              value: "ANJING",
                                              label:
                                                t("karantinaAnjing") ||
                                                "ANJING",
                                            },
                                            {
                                              value: "KUCING",
                                              label:
                                                t("karantinaKucing") ||
                                                "KUCING",
                                            },
                                            {
                                              value: "KELINCI",
                                              label:
                                                t("karantinaKelinci") ||
                                                "KELINCI",
                                            },
                                            {
                                              value: "BURUNG",
                                              label:
                                                t("karantinaBurung") ||
                                                "BURUNG",
                                            },
                                            {
                                              value: "REPTIL",
                                              label:
                                                t("karantinaReptil") ||
                                                "REPTIL",
                                            },
                                            {
                                              value: "HEWAN_LAINNYA",
                                              label:
                                                t("karantinaHewanLainnya") ||
                                                "HEWAN LAINNYA",
                                            },
                                          ]
                                        : quarantineDecl[idx]
                                              ?.commodityCategory === "IKAN"
                                          ? [
                                              {
                                                value: "IKAN_HIAS",
                                                label:
                                                  t("karantinaIkanHias") ||
                                                  "IKAN HIAS",
                                              },
                                              {
                                                value: "IKAN_KONSUMSI",
                                                label:
                                                  t("karantinaIkanKonsumsi") ||
                                                  "IKAN KONSUMSI",
                                              },
                                              {
                                                value: "UDANG",
                                                label:
                                                  t("karantinaUdang") ||
                                                  "UDANG",
                                              },
                                              {
                                                value: "KERANG",
                                                label:
                                                  t("karantinaKerang") ||
                                                  "KERANG",
                                              },
                                              {
                                                value: "IKAN_LAINNYA",
                                                label:
                                                  t("karantinaIkanLainnya") ||
                                                  "IKAN LAINNYA",
                                              },
                                            ]
                                          : quarantineDecl[idx]
                                                ?.commodityCategory ===
                                              "TUMBUHAN"
                                            ? [
                                                {
                                                  value: "BUAH",
                                                  label:
                                                    t("karantinaBuah") ||
                                                    "BUAH",
                                                },
                                                {
                                                  value: "SAYUR",
                                                  label:
                                                    t("karantinaSayur") ||
                                                    "SAYUR",
                                                },
                                                {
                                                  value: "BENIH",
                                                  label:
                                                    t("karantinaBenih") ||
                                                    "BENIH",
                                                },
                                                {
                                                  value: "TANAMAN_HIAS",
                                                  label:
                                                    t("karantinaTanamanHias") ||
                                                    "TANAMAN HIAS",
                                                },
                                                {
                                                  value: "KAYU",
                                                  label:
                                                    t("karantinaKayu") ||
                                                    "KAYU",
                                                },
                                                {
                                                  value: "TUMBUHAN_LAINNYA",
                                                  label:
                                                    t(
                                                      "karantinaTumbuhanLainnya",
                                                    ) || "TUMBUHAN LAINNYA",
                                                },
                                              ]
                                            : []
                                    }
                                    value={
                                      (
                                        quarantineDecl[idx] || {
                                          commoditySubCategory: "",
                                        }
                                      ).commoditySubCategory
                                    }
                                    onChange={(e) => {
                                      handleQuarantineDeclChange(
                                        idx,
                                        "commoditySubCategory",
                                        e.target.value,
                                      );
                                      if (e.target.value) {
                                        handleCommodityAdd(idx, e.target.value);
                                      }
                                    }}
                                  />
                                </div>

                                {/* Selected commodities tags */}
                                {(
                                  quarantineDecl[idx]?.selectedCommodities || []
                                ).length > 0 && (
                                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                                    <p className="text-xs text-gray-500 mb-2">
                                      {t("dekKarantinaKomoditasTerpilih")}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                      {(
                                        quarantineDecl[idx]
                                          ?.selectedCommodities || []
                                      ).map((commodity: string) => (
                                        <span
                                          key={commodity}
                                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white border border-gray-200 rounded-lg text-gray-700"
                                        >
                                          {getCommodityLabel(commodity, t)}
                                          <button
                                            type="button"
                                            onClick={() =>
                                              handleCommodityRemove(
                                                idx,
                                                commodity,
                                              )
                                            }
                                            className="text-gray-400 hover:text-red-500 transition-colors"
                                          >
                                            <svg
                                              className="w-3.5 h-3.5"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                              strokeWidth={2}
                                            >
                                              <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                              />
                                            </svg>
                                          </button>
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Commodity form/type */}
                                <FormField label={t("dekKarantinaBentukJenis")}>
                                  <SelectInput
                                    id={`quar-form-${idx}`}
                                    placeholder={t("phPilih")}
                                    options={[
                                      {
                                        value: "PRODUK_SEGAR",
                                        label:
                                          t("karantinaProdukSegar") ||
                                          "PRODUK SEGAR",
                                      },
                                      {
                                        value: "PRODUK_OLAHAN",
                                        label:
                                          t("karantinaProdukOlahan") ||
                                          "PRODUK OLAHAN",
                                      },
                                      {
                                        value: "PRODUK_BEKU",
                                        label:
                                          t("karantinaProdukBeku") ||
                                          "PRODUK BEKU",
                                      },
                                      {
                                        value: "HIDUP",
                                        label: t("karantinaHidup") || "HIDUP",
                                      },
                                    ]}
                                    value={
                                      (
                                        quarantineDecl[idx] || {
                                          commodityForm: "",
                                        }
                                      ).commodityForm
                                    }
                                    onChange={(e) =>
                                      handleQuarantineDeclChange(
                                        idx,
                                        "commodityForm",
                                        e.target.value,
                                      )
                                    }
                                  />
                                </FormField>

                                {/* Commodity quantity */}
                                <FormField label={t("dekKarantinaJumlah")}>
                                  <SelectInput
                                    id={`quar-quantity-${idx}`}
                                    placeholder={t("phPilih")}
                                    options={[
                                      {
                                        value: "SAMPAI_2KG",
                                        label:
                                          t("karantinaSampai2Kg") ||
                                          "SAMPAI DENGAN 2 KG",
                                      },
                                      {
                                        value: "LEBIH_2KG",
                                        label:
                                          t("karantinaLebih2Kg") ||
                                          "LEBIH DARI 2 KG",
                                      },
                                      {
                                        value: "SAMPAI_2EKOR",
                                        label:
                                          t("karantinaSampai2Ekor") ||
                                          "SAMPAI DENGAN 2 EKOR",
                                      },
                                      {
                                        value: "LEBIH_2EKOR",
                                        label:
                                          t("karantinaLebih2Ekor") ||
                                          "LEBIH DARI 2 EKOR",
                                      },
                                      {
                                        value: "SAMPAI_2L",
                                        label:
                                          t("karantinaSampai2L") ||
                                          "SAMPAI DENGAN 2 L",
                                      },
                                      {
                                        value: "LEBIH_2L",
                                        label:
                                          t("karantinaLebih2L") ||
                                          "LEBIH DARI 2 L",
                                      },
                                    ]}
                                    value={
                                      (
                                        quarantineDecl[idx] || {
                                          commodityQuantity: "",
                                        }
                                      ).commodityQuantity
                                    }
                                    onChange={(e) =>
                                      handleQuarantineDeclChange(
                                        idx,
                                        "commodityQuantity",
                                        e.target.value,
                                      )
                                    }
                                  />
                                </FormField>
                              </div>
                            )}

                            {/* Q2: Certificate */}
                            <div className="mb-6">
                              <p className="text-xs font-semibold text-navy-800 mb-3">
                                {t("dekKarantinaQ2")}{" "}
                                <span className="text-red-500 ml-0.5">*</span>
                              </p>
                              <RadioInput
                                name={`quar-cert-${idx}`}
                                id={`quar-cert-${idx}`}
                                options={[
                                  { value: "ya", label: t("ya") },
                                  { value: "tidak", label: t("tidak") },
                                ]}
                                value={
                                  (
                                    quarantineDecl[idx] || {
                                      hasCertificate: "",
                                    }
                                  ).hasCertificate
                                }
                                onChange={(value) =>
                                  handleQuarantineDeclChange(
                                    idx,
                                    "hasCertificate",
                                    value,
                                  )
                                }
                              />
                            </div>

                            {/* Country of origin */}
                            <div className="mb-2">
                              <FormField label={t("dekKarantinaDariNegara")}>
                                <SearchableSelect
                                  id={`quar-origin-country-${idx}`}
                                  placeholder={t("dekKarantinaPhDariNegara")}
                                  options={countryOptions}
                                  value={
                                    (
                                      quarantineDecl[idx] || {
                                        originCountry: "",
                                      }
                                    ).originCountry
                                  }
                                  onChange={(value) =>
                                    handleQuarantineDeclChange(
                                      idx,
                                      "originCountry",
                                      value,
                                    )
                                  }
                                />
                              </FormField>
                            </div>
                          </FormSection>

                          {/* Customs Declaration BC 2.2 */}
                          <FormSection
                            title={t("customsTitle")}
                            description={t("customsDesc")}
                          >
                            {/* Info collapsible 1 */}
                            <div className="mb-6">
                              <details className="group border border-gray-200 rounded-lg overflow-hidden">
                                <summary className="flex items-center justify-between px-4 py-3 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                                  <p className="text-xs text-gray-600 italic">
                                    {t("infoDaftarBarang")}
                                  </p>
                                  <svg
                                    className="w-4 h-4 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19 9l-7 7-7-7"
                                    />
                                  </svg>
                                </summary>
                                <div className="px-4 py-3 text-xs text-gray-500 border-t border-gray-100 bg-white leading-relaxed">
                                  <p className="font-medium text-gray-700 mb-2">
                                    Informasi Umum Barang Bawaan:
                                  </p>
                                  <ul className="list-disc list-inside space-y-1">
                                    <li>
                                      Barang bawaan pribadi yang wajar sesuai
                                      kebutuhan perjalanan
                                    </li>
                                    <li>
                                      Barang yang dibawa harus sesuai dengan
                                      ketentuan impor Indonesia
                                    </li>
                                    <li>
                                      Batas nilai pembebasan bea masuk: USD 500
                                      per orang
                                    </li>
                                  </ul>
                                </div>
                              </details>
                            </div>

                            {/* Baggage Count */}
                            <div className="mb-6">
                              <FormField label={t("jumlahBagasi")} required>
                                <div className="flex">
                                  <input
                                    id={`baggage-count-${idx}`}
                                    type="number"
                                    min="0"
                                    placeholder={t("phJumlahBagasi")}
                                    value={decl.baggageCount}
                                    onChange={(e) =>
                                      handleDeclarationChange(
                                        idx,
                                        "baggageCount",
                                        e.target.value,
                                      )
                                    }
                                    className="flex-1 px-4 py-2.5 rounded-l-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 hover:border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10"
                                  />
                                  <span className="inline-flex items-center px-4 py-2.5 rounded-r-lg border border-l-0 border-gray-200 bg-gray-50 text-sm text-gray-500 font-medium">
                                    {t("Pcs/Kg")}
                                  </span>
                                </div>
                              </FormField>
                            </div>

                            {/* Prohibited Goods Question */}
                            <div className="mb-6">
                              <p className="text-xs font-semibold text-navy-800 mb-3">
                                {t("barangWajib")}{" "}
                                <span className="text-red-500 ml-0.5">*</span>
                              </p>

                              {/* Info collapsible 2 */}
                              <div className="mb-4">
                                <details className="group border border-gray-200 rounded-lg overflow-hidden">
                                  <summary className="flex items-center justify-between px-4 py-3 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <p className="text-xs text-gray-600 italic">
                                      {t("infoDaftarBarangWajib")}
                                    </p>
                                    <svg
                                      className="w-4 h-4 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                      />
                                    </svg>
                                  </summary>
                                  <div className="px-4 py-3 text-xs text-gray-500 border-t border-gray-100 bg-white leading-relaxed">
                                    <p className="font-medium text-gray-700 mb-2">
                                      Daftar barang yang wajib diberitahukan:
                                    </p>
                                    <ul className="list-disc list-inside space-y-1">
                                      <li>
                                        Uang tunai dan/atau instrumen pembayaran
                                        lain senilai Rp100.000.000 atau lebih
                                      </li>
                                      <li>
                                        Narkotika, psikotropika, prekursor,
                                        obat-obatan, senjata api/amunisi, bahan
                                        peledak, produk pornografi
                                      </li>
                                      <li>
                                        Hewan, ikan, dan tumbuhan termasuk
                                        produk yang berasal dari hewan/tumbuhan
                                        yang dilindungi
                                      </li>
                                      <li>
                                        Film sinematografi, pita video berisi
                                        rekaman, piringan video
                                      </li>
                                      <li>Barang dagangan komersial</li>
                                    </ul>
                                  </div>
                                </details>
                              </div>

                              <RadioInput
                                name={`prohibited-goods-${idx}`}
                                id={`prohibited-goods-${idx}`}
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
                              />

                              {decl.hasProhibitedGoods === "ya" && (
                                <div className="mt-4 border-t border-gray-100 pt-4">
                                  <div className="flex justify-between items-center mb-3">
                                    <h4 className="text-xs font-semibold text-gray-700">
                                      {t("daftarBarang") || "Daftar Barang"}
                                    </h4>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setCustomsForm({
                                          uraian: "",
                                          jumlah: "",
                                          mataUang: "IDR",
                                          nilai: "",
                                        });
                                        setEditingCustomsItemIndex(null);
                                        setActivePassengerIdx(idx);
                                        setCustomsModalOpen(true);
                                      }}
                                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors shadow-sm"
                                    >
                                      <svg
                                        className="w-3.5 h-3.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M12 4.5v15m7.5-7.5h-15"
                                        />
                                      </svg>
                                      {t("tambahBarang") || "Tambah Barang"}
                                    </button>
                                  </div>

                                  {decl.prohibitedGoods &&
                                  decl.prohibitedGoods.length > 0 ? (
                                    <div className="space-y-3">
                                      {decl.prohibitedGoods.map(
                                        (item: any, i: number) => (
                                          <div
                                            key={i}
                                            className="flex justify-between items-center p-3 bg-white border border-gray-200 rounded-lg shadow-sm"
                                          >
                                            <div>
                                              <p className="text-sm font-medium text-gray-800">
                                                {item.uraian}
                                              </p>
                                              <p className="text-xs text-gray-500 mt-0.5">
                                                {item.jumlah} pcs •{" "}
                                                {item.mataUang} {item.nilai}
                                              </p>
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
                                                <svg
                                                  className="w-4 h-4"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  stroke="currentColor"
                                                  strokeWidth={2}
                                                >
                                                  <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                  />
                                                </svg>
                                              </button>
                                              <button
                                                type="button"
                                                onClick={() => {
                                                  setDeclarations((prev) => {
                                                    const newDecls = [...prev];
                                                    const newGoods = [
                                                      ...(newDecls[idx]
                                                        .prohibitedGoods || []),
                                                    ];
                                                    newGoods.splice(i, 1);
                                                    newDecls[
                                                      idx
                                                    ].prohibitedGoods =
                                                      newGoods;
                                                    return newDecls;
                                                  });
                                                }}
                                                className="p-1.5 text-gray-400 hover:text-red-600 transition-colors"
                                              >
                                                <svg
                                                  className="w-4 h-4"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  stroke="currentColor"
                                                  strokeWidth={2}
                                                >
                                                  <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                  />
                                                </svg>
                                              </button>
                                            </div>
                                          </div>
                                        ),
                                      )}
                                    </div>
                                  ) : (
                                    <div className="text-center py-4 bg-gray-50 rounded-lg border border-gray-100 border-dashed">
                                      <p className="text-xs text-gray-500">
                                        {t("belumAdaBarang") ||
                                          "Belum ada barang yang ditambahkan"}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>

                            {/* IMEI Question */}
                            <div className="mb-6">
                              <p className="text-xs font-semibold text-navy-800 mb-1">
                                {t("imeiQuestion")}{" "}
                                <span className="text-red-500 ml-0.5">*</span>
                              </p>
                              <p className="text-xs text-red-500 font-medium mb-3">
                                {t("imeiNote")}
                              </p>
                              <RadioInput
                                name={`imei-${idx}`}
                                id={`imei-${idx}`}
                                options={[
                                  { value: "ya", label: t("ya") },
                                  { value: "tidak", label: t("tidak") },
                                ]}
                                value={decl.hasIMEI}
                                onChange={(value) =>
                                  handleDeclarationChange(idx, "hasIMEI", value)
                                }
                              />
                            </div>

                            {/* Agreement Checkbox */}
                            <div className="mt-8 pt-6 border-t border-gray-100">
                              <label className="flex items-start gap-3 cursor-pointer group">
                                <input
                                  type="checkbox"
                                  checked={decl.agreed}
                                  onChange={(e) =>
                                    handleDeclarationChange(
                                      idx,
                                      "agreed",
                                      e.target.checked,
                                    )
                                  }
                                  className="mt-0.5 w-4 h-4 rounded border-gray-300 text-teal-500 focus:ring-teal-500/20 accent-teal-500"
                                />
                                <span className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                                  {t("persetujuanDeklarasi")}{" "}
                                  <a
                                    href="#"
                                    className="text-teal-600 underline hover:text-teal-700 font-medium"
                                  >
                                    {t("deklarasiLink")}
                                  </a>{" "}
                                  {t("dalamAplikasi")}
                                </span>
                              </label>
                            </div>

                            {/* Submit / Back to list */}
                            <div className="mt-6 flex justify-end">
                              <button
                                type="button"
                                onClick={() =>
                                  setDeclarationView({ mode: "list", index: 0 })
                                }
                                className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors shadow-sm shadow-teal-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={!isDeclarationComplete(decl)}
                              >
                                {t("simpan") || "Simpan"}
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </button>
                            </div>
                          </FormSection>
                        </div>
                      );
                    })()
                  )}
                </>
              )}
            </div>
          </div>

          {/* Navigation buttons */}
          {declarationView.mode === "list" && (
            <div className="flex items-center justify-between mt-6 mb-8">
              <button
                onClick={() => {
                  setCurrentStep(Math.max(0, currentStep - 1));
                  setDeclarationView({ mode: "list", index: 0 });
                }}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                {t("back")}
              </button>
              {currentStep < steps.length - 1 ? (
                <button
                  onClick={() => {
                    setCurrentStep(Math.min(steps.length - 1, currentStep + 1));
                    setDeclarationView({ mode: "list", index: 0 });
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors shadow-sm shadow-teal-500/20"
                >
                  {t("next")}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              ) : currentStep === steps.length - 1 ? (
                <button
                  onClick={() => setSubmitConfirmModalOpen(true)}
                  disabled={
                    !(
                      declarations.length === travelers.length &&
                      declarations.every((d) => d && isDeclarationComplete(d))
                    )
                  }
                  className={`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-colors shadow-sm ${
                    declarations.length === travelers.length &&
                    declarations.every((d) => d && isDeclarationComplete(d))
                      ? "bg-teal-500 hover:bg-teal-600 shadow-teal-500/20"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  Kirim
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
              ) : (
                <div />
              )}
            </div>
          )}
        </div>
      </main>

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
              {t("konfirmasiKirimDesc") ||
                "Pastikan semua data yang Anda isi sudah benar. Anda tidak dapat mengubah data setelah dikirim."}
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
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
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

      {/* Visa Check Modal */}
      {visaCheckModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 p-6 text-center border border-gray-100">
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-5 border border-red-100 shadow-sm shadow-red-100">
              <svg
                className="w-7 h-7 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
              {t("tidakAdaVisaAktif")}
            </h3>
            <p className="text-sm text-gray-500 mb-6 px-2">
              {t("silakanAjukanVisa")}
            </p>
            <button
              type="button"
              onClick={() => {
                setVisaCheckModalOpen(false);
                setTimeout(() => setVisaOptionsModalOpen(true), 150);
              }}
              className="w-full py-3 bg-red-600 text-white text-sm font-bold rounded-xl hover:bg-red-700 transition-colors shadow-sm shadow-red-600/20"
            >
              {t("okMengerti")}
            </button>
          </div>
        </div>
      )}

      {/* Visa Options Modal */}
      {visaOptionsModalOpen && activeVisaCheckIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                {t("pengajuanVisaTitle")}
              </h3>
              <button
                onClick={() => setVisaOptionsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              {t("pilihJenisVisaDesc")}
            </p>
            <div className="flex flex-col gap-3.5">
              <button
                type="button"
                onClick={() => {
                  handleTravelDetailChange(
                    activeVisaCheckIdx,
                    "documentStatus",
                    "applied",
                  );
                  setVisaOptionsModalOpen(false);
                  setActiveVisaCheckIdx(null);
                }}
                className="group w-full p-4 border-2 border-teal-100/60 bg-teal-50/30 text-teal-800 font-semibold rounded-xl hover:bg-teal-50 hover:border-teal-400 transition-all text-left flex justify-between items-center shadow-sm"
              >
                <div>
                  <div className="text-base">{t("visaExemption")}</div>
                  <div className="text-xs font-normal text-teal-600/70 mt-0.5">
                    {t("bebasVisaKunjungan")}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-teal-100 group-hover:bg-teal-500 group-hover:text-white text-teal-600 flex items-center justify-center transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
              <button
                type="button"
                onClick={() => {
                  handleTravelDetailChange(
                    activeVisaCheckIdx,
                    "documentStatus",
                    "applied",
                  );
                  setVisaOptionsModalOpen(false);
                  setActiveVisaCheckIdx(null);
                }}
                className="group w-full p-4 border-2 border-blue-100/60 bg-blue-50/30 text-blue-800 font-semibold rounded-xl hover:bg-blue-50 hover:border-blue-400 transition-all text-left flex justify-between items-center shadow-sm"
              >
                <div>
                  <div className="text-base">{t("visaOnArrivalTitle")}</div>
                  <div className="text-xs font-normal text-blue-600/70 mt-0.5">
                    {t("visaKunjunganSaatKedatangan")}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-100 group-hover:bg-blue-500 group-hover:text-white text-blue-600 flex items-center justify-center transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
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
              {t("batalkanPengajuan")}
            </button>
          </div>
        </div>
      )}

      {/* Customs Modal */}
      {customsModalOpen && activePassengerIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-teal-500 rounded-full"></div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {t("tambahBarang") || "Tambah Barang"}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-4 -mt-4 pl-4">
                {t("modalDetailBarang") ||
                  "Masukkan detail barang yang Anda bawa ke Indonesia."}
              </p>
              <div className="space-y-4">
                <FormField label={t("uraianBarang") || "Uraian Barang"}>
                  <TextInput
                    placeholder={
                      t("phUraianBarang") || "Masukkan Uraian Barang"
                    }
                    value={customsForm.uraian}
                    onChange={(e) =>
                      setCustomsForm((prev) => ({
                        ...prev,
                        uraian: e.target.value,
                      }))
                    }
                  />
                </FormField>
                <FormField label={t("jumlah") || "Jumlah"}>
                  <TextInput
                    type="number"
                    placeholder={t("phJumlah") || "Masukkan Jumlah"}
                    value={customsForm.jumlah}
                    onChange={(e) =>
                      setCustomsForm((prev) => ({
                        ...prev,
                        jumlah: e.target.value,
                      }))
                    }
                  />
                </FormField>
                <FormField label={t("jenisMataUang") || "Jenis Mata Uang"}>
                  <SelectInput
                    options={[
                      { value: "IDR", label: "IDR - Indonesian Rupiah" },
                      { value: "USD", label: "USD - US Dollar" },
                      { value: "EUR", label: "EUR - Euro" },
                      { value: "SGD", label: "SGD - Singapore Dollar" },
                      { value: "AUD", label: "AUD - Australian Dollar" },
                      { value: "JPY", label: "JPY - Japanese Yen" },
                    ]}
                    value={customsForm.mataUang}
                    onChange={(e) =>
                      setCustomsForm((prev) => ({
                        ...prev,
                        mataUang: e.target.value,
                      }))
                    }
                    placeholder="Pilih Jenis Mata Uang"
                  />
                </FormField>
                <FormField label={t("nilai") || "Nilai"}>
                  <TextInput
                    type="number"
                    placeholder={t("phNilai") || "Masukkan Nilai"}
                    value={customsForm.nilai}
                    onChange={(e) =>
                      setCustomsForm((prev) => ({
                        ...prev,
                        nilai: e.target.value,
                      }))
                    }
                  />
                </FormField>
              </div>
              <div className="flex justify-end gap-3 mt-8">
                <button
                  type="button"
                  onClick={() => {
                    setCustomsModalOpen(false);
                    setCustomsForm({
                      uraian: "",
                      jumlah: "",
                      mataUang: "IDR",
                      nilai: "",
                    });
                    setEditingCustomsItemIndex(null);
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  {t("batal") || "Batal"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (
                      customsForm.uraian &&
                      customsForm.jumlah &&
                      customsForm.nilai
                    ) {
                      setDeclarations((prev) => {
                        const newDecls = [...prev];
                        // Clone the object to prevent React Strict Mode double mutation
                        newDecls[activePassengerIdx] = {
                          ...newDecls[activePassengerIdx],
                        };
                        const currentGoods =
                          newDecls[activePassengerIdx].prohibitedGoods || [];
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
                      setCustomsForm({
                        uraian: "",
                        jumlah: "",
                        mataUang: "IDR",
                        nilai: "",
                      });
                      setEditingCustomsItemIndex(null);
                    }
                  }}
                  className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors"
                  disabled={
                    !customsForm.uraian ||
                    !customsForm.jumlah ||
                    !customsForm.nilai
                  }
                >
                  {t("simpan") || "Simpan"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

const getCommodityLabel = (value: string, t: any) => {
  const map: Record<string, string> = {
    ANJING: t("karantinaAnjing") || "ANJING",
    KUCING: t("karantinaKucing") || "KUCING",
    KELINCI: t("karantinaKelinci") || "KELINCI",
    BURUNG: t("karantinaBurung") || "BURUNG",
    REPTIL: t("karantinaReptil") || "REPTIL",
    HEWAN_LAINNYA: t("karantinaHewanLainnya") || "HEWAN LAINNYA",
    IKAN_HIAS: t("karantinaIkanHias") || "IKAN HIAS",
    IKAN_KONSUMSI: t("karantinaIkanKonsumsi") || "IKAN KONSUMSI",
    UDANG: t("karantinaUdang") || "UDANG",
    KERANG: t("karantinaKerang") || "KERANG",
    IKAN_LAINNYA: t("karantinaIkanLainnya") || "IKAN LAINNYA",
    BUAH: t("karantinaBuah") || "BUAH",
    SAYUR: t("karantinaSayur") || "SAYUR",
    BENIH: t("karantinaBenih") || "BENIH",
    TANAMAN_HIAS: t("karantinaTanamanHias") || "TANAMAN HIAS",
    KAYU: t("karantinaKayu") || "KAYU",
    TUMBUHAN_LAINNYA: t("karantinaTumbuhanLainnya") || "TUMBUHAN LAINNYA",
    PRODUK_SEGAR: t("karantinaProdukSegar") || "PRODUK SEGAR",
    PRODUK_OLAHAN: t("karantinaProdukOlahan") || "PRODUK OLAHAN",
    PRODUK_BEKU: t("karantinaProdukBeku") || "PRODUK BEKU",
    HIDUP: t("karantinaHidup") || "HIDUP",
  };
  return map[value] || value.replace(/_/g, " ");
};

export default function Home() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}
