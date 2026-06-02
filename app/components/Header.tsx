"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Language, languageNames } from "../lib/translations";

const languageKeys: Language[] = ["id", "en", "ja", "zh", "ar", "ru", "ko"];

export default function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang);
    setLangOpen(false);
  };

  return (
    <header className="w-full">
      {/* Row 1 - Top thin bar with government badge */}
      <div className="bg-navy-900 border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-14 gap-3">
            <Image
              src="/newimigrasi.png"
              alt="Imigrasi"
              width={32}
              height={32}
              className="h-8 w-8 object-contain mix-blend-lighten"
            />
            <Image
              src="/imigrasi.png"
              alt="Kementerian Imigrasi dan Pemasyarakatan"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-contain mix-blend-lighten"
            />
            <span className="text-white text-sm font-medium">
              {t("situsWeb")}
            </span>
          </div>
        </div>
      </div>

      {/* Row 2 - Main navbar */}
      <div className="bg-white text-gray-800 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - left */}
            <div className="flex items-center">
              <Image
                src="/logoallindo.png"
                alt="All Indonesia"
                width={300}
                height={120}
                className="h-28 w-auto mix-blend-multiply"
                priority
              />
            </div>

            {/* Right section - Languages & Bantuan */}
            <div className="flex items-center gap-3">
              {/* Language selector */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <span>{t("languages")}</span>
                  <svg
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                      langOpen ? "rotate-180" : ""
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
                {langOpen && (
                  <div className="absolute right-0 top-full mt-1 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 py-1 min-w-[160px] z-50">
                    {languageKeys.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleSelectLanguage(lang)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                          language === lang
                            ? "font-medium text-teal-600"
                            : ""
                        }`}
                      >
                        {languageNames[lang]}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Bantuan button */}
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                  />
                </svg>
                <span>{t("bantuan")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
