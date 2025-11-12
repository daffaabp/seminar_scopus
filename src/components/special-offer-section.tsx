import React from "react";
import { CheckCircle2, Clock, Gift } from "lucide-react";
import { Button } from "./ui/button";

export function SpecialOfferSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  const bonuses = [
    "E-Sertifikat Webinar",
    "Akses Grup Diskusi Eksklusif",
    "Recording Webinar Selamanya",
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 font-bold">
            Penawaran Spesial untuk Anda
          </h2>
          <p className="text-xl text-blue-100">
            Investasi terbaik untuk karir akademik Anda
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 lg:p-12">
            {/* Price */}
            <div className="text-center mb-8">
              <p className="text-lg text-slate-500 mb-2">Harga Normal</p>
              <p className="text-3xl text-slate-400 line-through mb-4">Rp. 249.000</p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-4">
                <p className="text-lg text-slate-600 mb-2">Hari Ini Cukup Bayar</p>
                <p className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Rp. 99.000
                </p>
                <div className="mt-4 inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full">
                  <p className="font-semibold">Hemat Rp. 150.000 - Diskon 60%</p>
                </div>
              </div>
              
              {/* Urgency Message */}
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <p className="text-orange-700 font-medium">
                    <span className="font-bold">Penawaran terbatas!</span> Hanya untuk 50 pendaftar pertama atau sampai 11 November 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Bonuses */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-6">
                <Gift className="w-6 h-6 text-indigo-600" />
                <h3 className="text-xl font-semibold text-slate-900">Bonus Eksklusif yang Anda Dapatkan:</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{bonus}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <p className="text-lg font-semibold text-indigo-600">
                  Total Nilai Bonus: <span className="text-2xl">Rp. 200.000+</span>
                </p>
              </div>
            </div>
            {/* CTA */}
            <Button
              size="lg"
              onClick={scrollToRegistration}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg py-7 shadow-xl hover:shadow-2xl transition-all"
            >
              Daftar - HANYA Rp. 99.000
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

