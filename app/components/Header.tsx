"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Language, languageNames } from "../lib/translations";

const languageKeys: Language[] = ["id", "en", "ja", "zh", "ar", "ru", "ko"];

export default function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled;

  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang);
    setLangOpen(false);
  };

  return (
    <>
      {/* Row 1 - Top thin bar with government badge */}
      <div className="bg-navy-900 border-b border-navy-700 w-full relative z-40">
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
      <header
        className={`${isTransparent ? "bg-transparent text-white border-transparent" : "bg-white text-gray-800 border-b border-gray-200 shadow-sm"} sticky top-0 z-50 w-full transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo - left */}
            <div className="flex items-center">
              <Image
                src="/indo.png"
                alt="All Indonesia"
                width={300}
                height={120}
                className={`h-20 w-auto object-contain transition-all duration-300 ${isTransparent ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" : "mix-blend-multiply"}`}
                priority
              />
            </div>

            {/* Right section - Languages & Bantuan */}
            <div className="flex items-center gap-3">
              {/* Language selector */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors ${isTransparent ? "bg-transparent text-white border border-white/40 hover:bg-white/10" : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"}`}
                >
                  <span>{t("languages")}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      langOpen ? "rotate-180" : ""
                    } ${isTransparent ? "text-white" : "text-gray-500"}`}
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
                          language === lang ? "font-medium text-blue-600" : ""
                        }`}
                      >
                        {languageNames[lang]}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Bantuan button */}
              <button
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors ${isTransparent ? "bg-transparent text-white border border-white/40 hover:bg-white/10" : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"}`}
              >
                <svg
                  className={`w-4 h-4 ${isTransparent ? "text-white" : "text-gray-600"}`}
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
      </header>
    </>
  );
}
