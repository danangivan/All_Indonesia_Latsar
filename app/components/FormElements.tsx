"use client";

import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FormSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function FormSection({
  title,
  description,
  children,
  defaultOpen = true,
}: FormSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-l-4 border-blue-500 bg-white rounded-r-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50/50 transition-colors"
      >
        <div>
          <h3 className="text-sm font-bold text-gray-900">{title}</h3>
          {description && (
            <p className="text-xs text-gray-500 mt-0.5">{description}</p>
          )}
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
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
      </button>
      {isOpen && <div className="px-6 pb-6">{children}</div>}
    </div>
  );
}

interface FormFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function FormField({
  label,
  required = false,
  children,
  className = "",
}: FormFieldProps) {
  return (
    <div className={className}>
      <label className="block text-xs font-semibold text-navy-800 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

interface TextInputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  disabled?: boolean;
  className?: string;
}

export function TextInput({
  placeholder = "",
  type = "text",
  value,
  onChange,
  id,
  disabled = false,
  className = "",
}: TextInputProps) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`
        w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white
        text-sm text-gray-900 placeholder:text-gray-400
        hover:border-gray-300
        focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10
        disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed
        ${className}
      `}
    />
  );
}

interface SelectInputProps {
  placeholder?: string;
  options?: { value: string; label: string }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id?: string;
  className?: string;
}

export function SelectInput({
  placeholder = "Pilih...",
  options = [],
  value,
  onChange,
  id,
  className = "",
}: SelectInputProps) {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className={`
        w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white
        text-sm text-gray-900
        hover:border-gray-300
        focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10
        appearance-none
        bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208L10%2013L15%208%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')]
        bg-[position:right_12px_center]
        bg-no-repeat
        ${className}
      `}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

interface DateInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  className?: string;
  min?: string;
  max?: string;
}

export function DateInput({
  placeholder = "DD/MM/YYYY",
  value,
  onChange,
  id,
  className = "",
  min,
  max,
}: DateInputProps) {
  return (
    <div className="relative">
      <DatePicker
        id={id}
        selected={value ? new Date(value) : null}
        onChange={(date: Date | null) => {
          if (onChange && date) {
            const pad = (n: number) => n.toString().padStart(2, "0");
            const yyyy = date.getFullYear();
            const mm = pad(date.getMonth() + 1);
            const dd = pad(date.getDate());
            const dateStr = `${yyyy}-${mm}-${dd}`;
            
            const event = {
              target: { value: dateStr },
            } as React.ChangeEvent<HTMLInputElement>;
            onChange(event);
          }
        }}
        minDate={min ? new Date(min) : undefined}
        maxDate={max ? new Date(max) : undefined}
        placeholderText={placeholder}
        dateFormat="dd/MM/yyyy"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        className={`
          w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white
          text-sm text-gray-900 placeholder:text-gray-400
          hover:border-gray-300
          focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10
          ${className}
        `}
      />
    </div>
  );
}

const phoneCountryCodes = [
  { code: "+93", iso: "af", country: "Afghanistan" },
  { code: "+355", iso: "al", country: "Albania" },
  { code: "+213", iso: "dz", country: "Algeria" },
  { code: "+376", iso: "ad", country: "Andorra" },
  { code: "+244", iso: "ao", country: "Angola" },
  { code: "+1", iso: "ag", country: "Antigua and Barbuda" },
  { code: "+54", iso: "ar", country: "Argentina" },
  { code: "+374", iso: "am", country: "Armenia" },
  { code: "+61", iso: "au", country: "Australia" },
  { code: "+43", iso: "at", country: "Austria" },
  { code: "+994", iso: "az", country: "Azerbaijan" },
  { code: "+1", iso: "bs", country: "Bahamas" },
  { code: "+973", iso: "bh", country: "Bahrain" },
  { code: "+880", iso: "bd", country: "Bangladesh" },
  { code: "+1", iso: "bb", country: "Barbados" },
  { code: "+375", iso: "by", country: "Belarus" },
  { code: "+32", iso: "be", country: "Belgium" },
  { code: "+501", iso: "bz", country: "Belize" },
  { code: "+229", iso: "bj", country: "Benin" },
  { code: "+975", iso: "bt", country: "Bhutan" },
  { code: "+591", iso: "bo", country: "Bolivia" },
  { code: "+387", iso: "ba", country: "Bosnia and Herzegovina" },
  { code: "+267", iso: "bw", country: "Botswana" },
  { code: "+55", iso: "br", country: "Brazil" },
  { code: "+673", iso: "bn", country: "Brunei" },
  { code: "+359", iso: "bg", country: "Bulgaria" },
  { code: "+226", iso: "bf", country: "Burkina Faso" },
  { code: "+257", iso: "bi", country: "Burundi" },
  { code: "+855", iso: "kh", country: "Cambodia" },
  { code: "+237", iso: "cm", country: "Cameroon" },
  { code: "+1", iso: "ca", country: "Canada" },
  { code: "+238", iso: "cv", country: "Cape Verde" },
  { code: "+236", iso: "cf", country: "Central African Republic" },
  { code: "+235", iso: "td", country: "Chad" },
  { code: "+56", iso: "cl", country: "Chile" },
  { code: "+86", iso: "cn", country: "China" },
  { code: "+57", iso: "co", country: "Colombia" },
  { code: "+269", iso: "km", country: "Comoros" },
  { code: "+242", iso: "cg", country: "Congo" },
  { code: "+243", iso: "cd", country: "Congo (DRC)" },
  { code: "+506", iso: "cr", country: "Costa Rica" },
  { code: "+385", iso: "hr", country: "Croatia" },
  { code: "+53", iso: "cu", country: "Cuba" },
  { code: "+357", iso: "cy", country: "Cyprus" },
  { code: "+420", iso: "cz", country: "Czechia" },
  { code: "+45", iso: "dk", country: "Denmark" },
  { code: "+253", iso: "dj", country: "Djibouti" },
  { code: "+1", iso: "dm", country: "Dominica" },
  { code: "+1", iso: "do", country: "Dominican Republic" },
  { code: "+593", iso: "ec", country: "Ecuador" },
  { code: "+20", iso: "eg", country: "Egypt" },
  { code: "+503", iso: "sv", country: "El Salvador" },
  { code: "+240", iso: "gq", country: "Equatorial Guinea" },
  { code: "+291", iso: "er", country: "Eritrea" },
  { code: "+372", iso: "ee", country: "Estonia" },
  { code: "+251", iso: "et", country: "Ethiopia" },
  { code: "+679", iso: "fj", country: "Fiji" },
  { code: "+358", iso: "fi", country: "Finland" },
  { code: "+33", iso: "fr", country: "France" },
  { code: "+241", iso: "ga", country: "Gabon" },
  { code: "+220", iso: "gm", country: "Gambia" },
  { code: "+995", iso: "ge", country: "Georgia" },
  { code: "+49", iso: "de", country: "Germany" },
  { code: "+233", iso: "gh", country: "Ghana" },
  { code: "+30", iso: "gr", country: "Greece" },
  { code: "+1", iso: "gd", country: "Grenada" },
  { code: "+502", iso: "gt", country: "Guatemala" },
  { code: "+224", iso: "gn", country: "Guinea" },
  { code: "+245", iso: "gw", country: "Guinea-Bissau" },
  { code: "+592", iso: "gy", country: "Guyana" },
  { code: "+509", iso: "ht", country: "Haiti" },
  { code: "+504", iso: "hn", country: "Honduras" },
  { code: "+36", iso: "hu", country: "Hungary" },
  { code: "+354", iso: "is", country: "Iceland" },
  { code: "+91", iso: "in", country: "India" },
  { code: "+62", iso: "id", country: "Indonesia" },
  { code: "+98", iso: "ir", country: "Iran" },
  { code: "+964", iso: "iq", country: "Iraq" },
  { code: "+353", iso: "ie", country: "Ireland" },
  { code: "+972", iso: "il", country: "Israel" },
  { code: "+39", iso: "it", country: "Italy" },
  { code: "+1", iso: "jm", country: "Jamaica" },
  { code: "+81", iso: "jp", country: "Japan" },
  { code: "+962", iso: "jo", country: "Jordan" },
  { code: "+7", iso: "kz", country: "Kazakhstan" },
  { code: "+254", iso: "ke", country: "Kenya" },
  { code: "+686", iso: "ki", country: "Kiribati" },
  { code: "+965", iso: "kw", country: "Kuwait" },
  { code: "+996", iso: "kg", country: "Kyrgyzstan" },
  { code: "+856", iso: "la", country: "Laos" },
  { code: "+371", iso: "lv", country: "Latvia" },
  { code: "+961", iso: "lb", country: "Lebanon" },
  { code: "+266", iso: "ls", country: "Lesotho" },
  { code: "+231", iso: "lr", country: "Liberia" },
  { code: "+218", iso: "ly", country: "Libya" },
  { code: "+423", iso: "li", country: "Liechtenstein" },
  { code: "+370", iso: "lt", country: "Lithuania" },
  { code: "+352", iso: "lu", country: "Luxembourg" },
  { code: "+261", iso: "mg", country: "Madagascar" },
  { code: "+265", iso: "mw", country: "Malawi" },
  { code: "+60", iso: "my", country: "Malaysia" },
  { code: "+960", iso: "mv", country: "Maldives" },
  { code: "+223", iso: "ml", country: "Mali" },
  { code: "+356", iso: "mt", country: "Malta" },
  { code: "+692", iso: "mh", country: "Marshall Islands" },
  { code: "+222", iso: "mr", country: "Mauritania" },
  { code: "+230", iso: "mu", country: "Mauritius" },
  { code: "+52", iso: "mx", country: "Mexico" },
  { code: "+691", iso: "fm", country: "Micronesia" },
  { code: "+373", iso: "md", country: "Moldova" },
  { code: "+377", iso: "mc", country: "Monaco" },
  { code: "+976", iso: "mn", country: "Mongolia" },
  { code: "+382", iso: "me", country: "Montenegro" },
  { code: "+212", iso: "ma", country: "Morocco" },
  { code: "+258", iso: "mz", country: "Mozambique" },
  { code: "+95", iso: "mm", country: "Myanmar" },
  { code: "+264", iso: "na", country: "Namibia" },
  { code: "+674", iso: "nr", country: "Nauru" },
  { code: "+977", iso: "np", country: "Nepal" },
  { code: "+31", iso: "nl", country: "Netherlands" },
  { code: "+64", iso: "nz", country: "New Zealand" },
  { code: "+505", iso: "ni", country: "Nicaragua" },
  { code: "+227", iso: "ne", country: "Niger" },
  { code: "+234", iso: "ng", country: "Nigeria" },
  { code: "+850", iso: "kp", country: "North Korea" },
  { code: "+389", iso: "mk", country: "North Macedonia" },
  { code: "+47", iso: "no", country: "Norway" },
  { code: "+968", iso: "om", country: "Oman" },
  { code: "+92", iso: "pk", country: "Pakistan" },
  { code: "+680", iso: "pw", country: "Palau" },
  { code: "+970", iso: "ps", country: "Palestine" },
  { code: "+507", iso: "pa", country: "Panama" },
  { code: "+675", iso: "pg", country: "Papua New Guinea" },
  { code: "+595", iso: "py", country: "Paraguay" },
  { code: "+51", iso: "pe", country: "Peru" },
  { code: "+63", iso: "ph", country: "Philippines" },
  { code: "+48", iso: "pl", country: "Poland" },
  { code: "+351", iso: "pt", country: "Portugal" },
  { code: "+974", iso: "qa", country: "Qatar" },
  { code: "+40", iso: "ro", country: "Romania" },
  { code: "+7", iso: "ru", country: "Russia" },
  { code: "+250", iso: "rw", country: "Rwanda" },
  { code: "+1", iso: "kn", country: "Saint Kitts and Nevis" },
  { code: "+1", iso: "lc", country: "Saint Lucia" },
  { code: "+1", iso: "vc", country: "Saint Vincent" },
  { code: "+685", iso: "ws", country: "Samoa" },
  { code: "+378", iso: "sm", country: "San Marino" },
  { code: "+239", iso: "st", country: "Sao Tome and Principe" },
  { code: "+966", iso: "sa", country: "Saudi Arabia" },
  { code: "+221", iso: "sn", country: "Senegal" },
  { code: "+381", iso: "rs", country: "Serbia" },
  { code: "+248", iso: "sc", country: "Seychelles" },
  { code: "+232", iso: "sl", country: "Sierra Leone" },
  { code: "+65", iso: "sg", country: "Singapore" },
  { code: "+421", iso: "sk", country: "Slovakia" },
  { code: "+386", iso: "si", country: "Slovenia" },
  { code: "+677", iso: "sb", country: "Solomon Islands" },
  { code: "+252", iso: "so", country: "Somalia" },
  { code: "+27", iso: "za", country: "South Africa" },
  { code: "+82", iso: "kr", country: "South Korea" },
  { code: "+211", iso: "ss", country: "South Sudan" },
  { code: "+34", iso: "es", country: "Spain" },
  { code: "+94", iso: "lk", country: "Sri Lanka" },
  { code: "+249", iso: "sd", country: "Sudan" },
  { code: "+597", iso: "sr", country: "Suriname" },
  { code: "+268", iso: "sz", country: "Eswatini" },
  { code: "+46", iso: "se", country: "Sweden" },
  { code: "+41", iso: "ch", country: "Switzerland" },
  { code: "+963", iso: "sy", country: "Syria" },
  { code: "+886", iso: "tw", country: "Taiwan" },
  { code: "+992", iso: "tj", country: "Tajikistan" },
  { code: "+255", iso: "tz", country: "Tanzania" },
  { code: "+66", iso: "th", country: "Thailand" },
  { code: "+670", iso: "tl", country: "Timor-Leste" },
  { code: "+228", iso: "tg", country: "Togo" },
  { code: "+676", iso: "to", country: "Tonga" },
  { code: "+1", iso: "tt", country: "Trinidad and Tobago" },
  { code: "+216", iso: "tn", country: "Tunisia" },
  { code: "+90", iso: "tr", country: "Turkey" },
  { code: "+993", iso: "tm", country: "Turkmenistan" },
  { code: "+688", iso: "tv", country: "Tuvalu" },
  { code: "+256", iso: "ug", country: "Uganda" },
  { code: "+380", iso: "ua", country: "Ukraine" },
  { code: "+971", iso: "ae", country: "United Arab Emirates" },
  { code: "+44", iso: "gb", country: "United Kingdom" },
  { code: "+1", iso: "us", country: "United States" },
  { code: "+598", iso: "uy", country: "Uruguay" },
  { code: "+998", iso: "uz", country: "Uzbekistan" },
  { code: "+678", iso: "vu", country: "Vanuatu" },
  { code: "+379", iso: "va", country: "Vatican City" },
  { code: "+58", iso: "ve", country: "Venezuela" },
  { code: "+84", iso: "vn", country: "Vietnam" },
  { code: "+967", iso: "ye", country: "Yemen" },
  { code: "+260", iso: "zm", country: "Zambia" },
  { code: "+263", iso: "zw", country: "Zimbabwe" },
];

interface PhoneInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCountryCodeChange?: (code: string) => void;
  selectedCountryCode?: string;
  id?: string;
}

export function PhoneInput({
  placeholder = "Masukkan Nomor Telepon",
  value,
  onChange,
  onCountryCodeChange,
  selectedCountryCode = "+62",
  id,
}: PhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const selectedCountry = phoneCountryCodes.find(c => c.code === selectedCountryCode) || phoneCountryCodes[0];

  const filteredCodes = phoneCountryCodes.filter(
    c => c.country.toLowerCase().includes(search.toLowerCase()) || c.code.includes(search)
  );

  return (
    <div className="flex relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2.5 rounded-l-lg border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-700 font-medium hover:bg-gray-100 transition-colors min-w-[100px]"
      >
        <img
          src={`https://flagcdn.com/w20/${selectedCountry.iso}.png`}
          srcSet={`https://flagcdn.com/w40/${selectedCountry.iso}.png 2x`}
          alt={selectedCountry.country}
          className="w-5 h-auto object-contain shadow-sm"
        />
        <span>{selectedCountry.code}</span>
        <svg
          className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
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
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-20 max-h-60 overflow-hidden">
            <div className="p-2 border-b border-gray-100">
              <input
                type="text"
                placeholder="Search country..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 outline-none"
                autoFocus
              />
            </div>
            <div className="overflow-y-auto max-h-48">
              {filteredCodes.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => {
                    onCountryCodeChange?.(c.code);
                    setIsOpen(false);
                    setSearch("");
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-blue-50 transition-colors text-left ${
                    c.code === selectedCountryCode ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-700"
                  }`}
                >
                  <img
                    src={`https://flagcdn.com/w20/${c.iso}.png`}
                    srcSet={`https://flagcdn.com/w40/${c.iso}.png 2x`}
                    alt={c.country}
                    className="w-5 h-auto object-contain shadow-sm"
                  />
                  <span className="flex-1">{c.country}</span>
                  <span className="text-gray-400 text-xs">{c.code}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      <input
        id={id}
        type="tel"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 px-4 py-2.5 rounded-r-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
      />
    </div>
  );
}

interface RadioOption {
  value: string;
  label: string;
}

interface RadioInputProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  id?: string;
}

export function RadioInput({
  name,
  options,
  value,
  onChange,
  id,
}: RadioInputProps) {
  return (
    <div className="flex gap-4" id={id}>
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`
            flex items-center gap-2.5 px-5 py-2.5 rounded-lg border cursor-pointer transition-all duration-200
            ${
              value === opt.value
                ? "border-blue-500 bg-blue-50/60 ring-2 ring-blue-500/10"
                : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/50"
            }
          `}
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange?.(opt.value)}
            className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500/20 accent-blue-500"
          />
          <span className="text-sm text-gray-700 font-medium">{opt.label}</span>
        </label>
      ))}
    </div>
  );
}

interface SearchableSelectOption {
  value: string;
  label: string;
  subtitle?: string;
}

interface SearchableSelectProps {
  placeholder?: string;
  options: SearchableSelectOption[];
  value?: string;
  onChange?: (value: string, option?: SearchableSelectOption) => void;
  id?: string;
  className?: string;
  allowCustom?: boolean;
  customLabel?: string;
  onCustomClick?: () => void;
}

export function SearchableSelect({
  placeholder = "Search...",
  options,
  value,
  onChange,
  id,
  className = "",
  allowCustom = false,
  customLabel = "Ketik Manual",
  onCustomClick,
}: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((o) => o.value === value);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter(
    (o) =>
      o.label.toLowerCase().includes(search.toLowerCase()) ||
      (o.subtitle && o.subtitle.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        id={id}
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) setSearch("");
        }}
        className={`
          w-full flex items-center justify-between px-4 py-2.5 rounded-lg border border-gray-200 bg-white
          text-sm text-left
          hover:border-gray-300
          focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10
          ${className}
        `}
      >
        <span className={selectedOption ? "text-gray-900" : "text-gray-400"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-30 max-h-64 overflow-hidden">
          <div className="p-2 border-b border-gray-100">
            <input
              type="text"
              placeholder={placeholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 outline-none"
              autoFocus
            />
          </div>
          <div className="overflow-y-auto max-h-52">
            {filteredOptions.length === 0 ? (
              <div className="px-4 py-4 flex flex-col items-center justify-center text-center">
                <span className="text-sm text-gray-400 mb-3">Tidak ditemukan</span>
                {allowCustom && (
                  <button
                    type="button"
                    onClick={() => {
                      if (onCustomClick) {
                        onCustomClick();
                      } else {
                        onChange?.("other_hotel", { value: "other_hotel", label: customLabel });
                      }
                      setIsOpen(false);
                      setSearch("");
                    }}
                    className="flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-md transition-colors hover:bg-blue-100"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    {customLabel}
                  </button>
                )}
              </div>
            ) : (
              filteredOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange?.(opt.value, opt);
                    setIsOpen(false);
                    setSearch("");
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm hover:bg-blue-50 transition-colors ${
                    opt.value === value
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  <div>{opt.label}</div>
                  {opt.subtitle && (
                    <div className="text-xs text-gray-400 mt-0.5">{opt.subtitle}</div>
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

interface SearchableSelectWithManualProps {
  placeholder?: string;
  options: SearchableSelectOption[];
  value?: string;
  onChange?: (value: string, option?: SearchableSelectOption) => void;
  id?: string;
  className?: string;
  manualMode?: boolean;
  onModeChange?: (manual: boolean) => void;
  manualPlaceholder?: string;
  searchLabel?: string;
  manualLabel?: string;
}

export function SearchableSelectWithManual({
  placeholder = "Search...",
  options,
  value,
  onChange,
  id,
  className = "",
  manualMode = false,
  onModeChange,
  manualPlaceholder = "Type here...",
  searchLabel = "Search",
  manualLabel = "Manual",
}: SearchableSelectWithManualProps) {
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => onModeChange?.(false)}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 ${
            !manualMode
              ? "bg-blue-50 border-blue-300 text-blue-700 shadow-sm"
              : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
          }`}
        >
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            {searchLabel}
          </span>
        </button>
        <button
          type="button"
          onClick={() => onModeChange?.(true)}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 ${
            manualMode
              ? "bg-blue-50 border-blue-300 text-blue-700 shadow-sm"
              : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
          }`}
        >
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            {manualLabel}
          </span>
        </button>
      </div>
      {manualMode ? (
        <input
          id={id}
          type="text"
          placeholder={manualPlaceholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={`
            w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white
            text-sm text-gray-900 placeholder:text-gray-400
            hover:border-gray-300
            focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10
            ${className}
          `}
        />
      ) : (
        <SearchableSelect
          id={id}
          placeholder={placeholder}
          options={options}
          value={value}
          onChange={onChange}
          className={className}
        />
      )}
    </div>
  );
}

interface ReadOnlyFieldProps {
  value: string;
  id?: string;
  icon?: React.ReactNode;
}

export function ReadOnlyField({ value, id, icon }: ReadOnlyFieldProps) {
  return (
    <div
      id={id}
      className="w-full flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-100 bg-gray-50 text-sm text-gray-600"
    >
      {icon && <span className="text-blue-500">{icon}</span>}
      <span>{value || "—"}</span>
    </div>
  );
}
