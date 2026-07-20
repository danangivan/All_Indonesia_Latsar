"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

function HomeContent() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Fade out over the first 400px of scroll
      const currentScroll = window.scrollY;
      const newOpacity = Math.max(0, 1 - currentScroll / 400);
      setScrollOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header is sticky, so we add pt-20 to push content down if needed, but let's assume Header handles it or we just add it to layout. Wait, I'll remove pt-20 and let the Header/Footer behave as they do in the form page */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-[#1a2b4c] text-white overflow-hidden pb-12 lg:pb-16 pt-32 lg:pt-36 -mt-24"
        style={{ opacity: scrollOpacity }}
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 scale-[1.15]"
        >
          <source src="/Bhinneka.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay to make text visible */}
        <div className="absolute inset-0 bg-slate-900/40 z-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-0 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 -mt-8 lg:-mt-24">
            <div className="w-full lg:w-1/2 space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-md">
                Halo, Penjelajah! <br />
                <span className="text-blue-300">Siap Jelajahi Indonesia?</span>
              </h1>
              <p className="text-base text-slate-200 max-w-lg leading-relaxed drop-shadow"></p>
            </div>

            {/* Service Cards Grid */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-12 mt-8 lg:mt-6">
              <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-lg origin-center lg:origin-right scale-[0.66]">
                {/* Card 1 */}
                <div className="bg-black/10 backdrop-blur-[4px] rounded-3xl border border-white/10 p-4 md:p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-black/30 transition-all duration-300 group cursor-pointer hover:border-white/30 hover:shadow-2xl">
                  <div className="h-14 md:h-16 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-auto text-blue-400 drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs md:text-sm text-slate-300">
                      e-VOA/Visa Service
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-white">
                      Layanan Visa Cepat
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-black/10 backdrop-blur-[4px] rounded-3xl border border-white/10 p-4 md:p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-black/30 transition-all duration-300 group cursor-pointer hover:border-white/30 hover:shadow-2xl">
                  <div className="h-14 md:h-16 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-auto text-emerald-400 drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs md:text-sm text-slate-300">
                      Immigration Guide
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-white">
                      Panduan Imigrasi Digital
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-black/10 backdrop-blur-[4px] rounded-3xl border border-white/10 p-4 md:p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-black/30 transition-all duration-300 group cursor-pointer hover:border-white/30 hover:shadow-2xl">
                  <div className="h-14 md:h-16 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-auto text-orange-400 drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs md:text-sm text-slate-300">
                      Pariwisata Kita
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-white">
                      E-Book Panduan Wisata
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-black/10 backdrop-blur-[4px] rounded-3xl border border-white/10 p-4 md:p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-black/30 transition-all duration-300 group cursor-pointer hover:border-white/30 hover:shadow-2xl">
                  <div className="h-14 md:h-16 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-auto text-purple-400 drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs md:text-sm text-slate-300">
                      Layanan Bantuan 24/7
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-white">
                      Dukungan Setiap Saat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content / Services */}
      <section className="flex-1 container mx-auto px-6 py-12 lg:py-16 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 mb-12 border border-slate-100">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-blue-50 rounded-xl">
              {/* Briefcase Icon */}
              <svg
                className="w-8 h-8 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                <rect width="20" height="14" x="2" y="6" rx="2" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                Layanan Kartu Kedatangan
              </h2>
              <p className="text-slate-500 mt-1">
                Lengkapi Kartu Kedatangan Anda secara online sebelum bepergian.
                Diperlukan untuk semua penumpang yang masuk ke Indonesia.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Pengisian Arrival Card */}
            <Link href="/form" className="group">
              <div className="bg-white border-2 border-slate-100 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex items-center justify-between cursor-pointer h-full">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0 shadow-sm border border-blue-100/50">
                    {/* FileText Icon */}
                    <svg
                      className="w-10 h-10 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="M10 9H8" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      Pengisian Arrival Card
                    </h3>
                    <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                      Ajukan kartu kedatangan elektronik untuk memudahkan proses
                      keimigrasian Anda di Indonesia.
                    </p>
                  </div>
                </div>
                <div className="ml-4 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Card 2: Ambil Kartu Kedatangan */}
            <Link href="#" className="group">
              <div className="bg-white border-2 border-slate-100 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex items-center justify-between cursor-pointer h-full">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0 shadow-sm border border-emerald-100/50">
                    {/* Search Icon */}
                    <svg
                      className="w-10 h-10 text-emerald-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      Ambil Kartu Kedatangan
                    </h3>
                    <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                      Cari dan dapatkan kembali kartu kedatangan Anda yang sudah
                      diajukan sebelumnya.
                    </p>
                  </div>
                </div>
                <div className="ml-4 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function HomePage() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
