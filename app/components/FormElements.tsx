"use client";

import { useState, useRef, useEffect } from "react";

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
    <div className="border-l-4 border-teal-500 bg-white rounded-r-lg">
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
        focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10
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
        focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10
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
}

export function DateInput({
  placeholder = "DD/MM/YYYY",
  value,
  onChange,
  id,
  className = "",
}: DateInputProps) {
  return (
    <div className="relative">
      <input
        id={id}
        type="date"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white
          text-sm text-gray-900 placeholder:text-gray-400
          hover:border-gray-300
          focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10
          ${className}
        `}
      />
    </div>
  );
}

const phoneCountryCodes = [
  { code: "+62", flag: "🇮🇩", country: "Indonesia" },
  { code: "+60", flag: "🇲🇾", country: "Malaysia" },
  { code: "+65", flag: "🇸🇬", country: "Singapore" },
  { code: "+66", flag: "🇹🇭", country: "Thailand" },
  { code: "+63", flag: "🇵🇭", country: "Philippines" },
  { code: "+84", flag: "🇻🇳", country: "Vietnam" },
  { code: "+81", flag: "🇯🇵", country: "Japan" },
  { code: "+82", flag: "🇰🇷", country: "South Korea" },
  { code: "+86", flag: "🇨🇳", country: "China" },
  { code: "+1", flag: "🇺🇸", country: "United States" },
  { code: "+44", flag: "🇬🇧", country: "United Kingdom" },
  { code: "+61", flag: "🇦🇺", country: "Australia" },
  { code: "+49", flag: "🇩🇪", country: "Germany" },
  { code: "+33", flag: "🇫🇷", country: "France" },
  { code: "+966", flag: "🇸🇦", country: "Saudi Arabia" },
  { code: "+91", flag: "🇮🇳", country: "India" },
  { code: "+7", flag: "🇷🇺", country: "Russia" },
  { code: "+55", flag: "🇧🇷", country: "Brazil" },
  { code: "+52", flag: "🇲🇽", country: "Mexico" },
  { code: "+234", flag: "🇳🇬", country: "Nigeria" },
  { code: "+27", flag: "🇿🇦", country: "South Africa" },
  { code: "+971", flag: "🇦🇪", country: "UAE" },
  { code: "+90", flag: "🇹🇷", country: "Turkey" },
  { code: "+48", flag: "🇵🇱", country: "Poland" },
  { code: "+39", flag: "🇮🇹", country: "Italy" },
  { code: "+34", flag: "🇪🇸", country: "Spain" },
  { code: "+31", flag: "🇳🇱", country: "Netherlands" },
  { code: "+46", flag: "🇸🇪", country: "Sweden" },
  { code: "+47", flag: "🇳🇴", country: "Norway" },
  { code: "+45", flag: "🇩🇰", country: "Denmark" },
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
        className="flex items-center gap-1.5 px-3 py-2.5 rounded-l-lg border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-700 font-medium hover:bg-gray-100 transition-colors min-w-[100px]"
      >
        <span className="text-base">{selectedCountry.flag}</span>
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
                className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-md focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none"
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
                  className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-teal-50 transition-colors text-left ${
                    c.code === selectedCountryCode ? "bg-teal-50 text-teal-700 font-medium" : "text-gray-700"
                  }`}
                >
                  <span className="text-base">{c.flag}</span>
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
        className="flex-1 px-4 py-2.5 rounded-r-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 hover:border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10"
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
                ? "border-teal-500 bg-teal-50/60 ring-2 ring-teal-500/10"
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
            className="w-4 h-4 text-teal-500 border-gray-300 focus:ring-teal-500/20 accent-teal-500"
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
}

export function SearchableSelect({
  placeholder = "Search...",
  options,
  value,
  onChange,
  id,
  className = "",
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
          focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10
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
              className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-md focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none"
              autoFocus
            />
          </div>
          <div className="overflow-y-auto max-h-52">
            {filteredOptions.length === 0 ? (
              <div className="px-4 py-3 text-sm text-gray-400 text-center">
                Tidak ditemukan
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
                  className={`w-full text-left px-4 py-2.5 text-sm hover:bg-teal-50 transition-colors ${
                    opt.value === value
                      ? "bg-teal-50 text-teal-700 font-medium"
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
      {icon && <span className="text-teal-500">{icon}</span>}
      <span>{value || "—"}</span>
    </div>
  );
}
