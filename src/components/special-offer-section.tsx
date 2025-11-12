import React from "react";
import { Clock } from "lucide-react";
import { Button } from "./ui/button";

export function SpecialOfferSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 lg:py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-4 font-bold"
            style={{ fontWeight: 900 }}
          >
            Penawaran Spesial untuk Anda
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto mb-4">
            Setelah melihat semua yang akan Anda dapatkan, <span className="font-semibold text-blue-600">ini penawaran spesial yang tidak boleh Anda lewatkan.</span> Dan setelah ini, <span className="font-medium">Anda bisa langsung daftar dan mulai perjalanan menuju publikasi Scopus.</span>
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 lg:p-8">
            {/* Price */}
            <div className="text-center mb-6">
              <p className="text-base text-slate-500 mb-2">Harga Normal</p>
              <p className="text-2xl sm:text-3xl text-slate-600 line-through mb-4 font-semibold decoration-slate-600 decoration-2">Rp. 249.000</p>
              
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-5 mb-4">
                <p className="text-base text-white mb-2">Hari Ini Cukup Bayar</p>
                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  Rp. 99.000
                </p>
              </div>
              
              {/* Urgency Message */}
              <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-slate-600 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-slate-700 font-medium">
                    <span className="font-bold">Penawaran terbatas!</span> Hanya untuk 50 pendaftar pertama
                  </p>
                </div>
              </div>
            </div>

            {/* Persuasive Text */}
            <div className="text-center mb-6">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                Sayang banget kalau gak ambil sekarang. Setelah 50 pendaftar pertama, harga akan kembali normal.
              </p>
            </div>

            {/* CTA */}
            <Button
              size="lg"
              onClick={scrollToRegistration}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-base sm:text-lg py-6 shadow-xl hover:shadow-2xl transition-all font-semibold"
            >
              Daftar Sekarang - HANYA Rp. 99.000
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

