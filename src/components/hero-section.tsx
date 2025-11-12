import React from "react";
import { Button } from "./ui/button";
import { Calendar, Clock } from "lucide-react";

export function HeroSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-16 pb-12 lg:pb-20">
        <div className="text-center space-y-6 lg:space-y-8">
          {/* Biggest Goal */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight" style={{ fontWeight: 900 }}>
            <span className="text-slate-900" style={{ fontWeight: 900 }}>Impian </span>
            <span className="text-blue-600" style={{ fontWeight: 900 }}>Setiap Dosen &amp; Peneliti:</span>
            <span className="text-slate-900" style={{ fontWeight: 900 }}> </span>
            <span className="text-indigo-600" style={{ fontWeight: 900 }}>Artikel Tem&#8203;bus Scopus</span>
            <span className="text-slate-900" style={{ fontWeight: 900 }}> dalam </span>
            <span className="text-blue-600" style={{ fontWeight: 900 }}>1 Bulan</span>
          </h1>

          {/* Biggest Problem */}
          {/* Harapan/Biggest Goal */}
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-semibold text-slate-900 max-w-3xl mx-auto">
            Bayangkan jika artikel Anda <span className="font-bold">diterima Scopus</span> hanya dalam <span className="font-extrabold">1 bulan</span>: reputasi meningkat, karir akademik melesat, dan kepercayaan diri bertambah pesat!
          </p>

          {/* Solusi */}
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-medium text-slate-700 max-w-3xl mx-auto">
            Di webinar ini, Anda sudah berada di tempat yang tepat untuk memecahkan masalah publikasi jurnal Scopus. Anda akan dipandu <span className="font-bold">langkah demi langkah</span> supaya tidak lagi salah memilih jurnal dan <span className="text-indigo-700 font-bold">peluang tembus publikasi bisa meningkat berkali lipat</span>.
          </p>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 max-w-md mx-auto">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm border border-slate-100 w-full">
              <div className="p-2 rounded-lg bg-blue-50 flex-shrink-0">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex flex-col items-start">
                <p className="text-sm text-slate-500 font-medium">Tanggal</p>
                <p className="font-medium text-blue-600 text-left">
                  14 November 2025
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm border border-slate-100 w-full">
              <div className="p-2 rounded-lg bg-indigo-50 flex-shrink-0">
                <Clock className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex flex-col items-start">
                <p className="text-sm text-slate-500 font-medium">Waktu</p>
                <p className="font-medium text-indigo-600 text-left">
                  19.00 - 21.00 WIB
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              onClick={scrollToRegistration}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all w-full max-w-md"
            >
              Daftar Sekarang - HANYA Rp. 99,000
            </Button>
          </div>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto pt-2">
            Pernah merasa artikel Anda <span className="font-semibold text-blue-600">sudah bagus</span> tapi selalu mental di review? Anda tidak sendiri—kami bantu pecahkan masalahnya di sini!
          </p>
        </div>
      </div>
    </section>
  );
}
