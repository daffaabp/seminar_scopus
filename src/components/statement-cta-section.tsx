import React from "react";
import { Button } from "./ui/button";

export function StatementCTASection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6 font-bold">
            Workshop Ini Bukan Sekadar Pelatihan
          </h2>
          
          <p className="text-base sm:text-lg text-white leading-relaxed mb-6 max-w-3xl mx-auto">
            Ini adalah <span className="font-bold">investasi untuk karir akademik Anda</span> yang akan membuka peluang publikasi di jurnal Scopus berkualitas.
          </p>
          
          <p className="text-base sm:text-lg text-white leading-relaxed mb-8 max-w-3xl mx-auto">
            Dengan metode yang sudah terbukti membantu <span className="font-bold">500+ dosen dan peneliti</span>, Anda tidak perlu lagi menghabiskan waktu berbulan-bulan untuk trial-error mencari jurnal yang tepat.
          </p>
          
          <div className="flex justify-center mb-4">
            <Button 
              size="lg" 
              onClick={scrollToRegistration}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 shadow-xl hover:shadow-2xl transition-all font-semibold text-lg border-2 border-blue-600"
            >
              Daftar Sekarang - HANYA Rp. 99.000
            </Button>
          </div>
          
          <p className="text-white mt-4 text-sm sm:text-base">
            <span className="font-semibold">Tempat terbatas! Hanya untuk 50 pendaftar pertama</span>
          </p>
        </div>
      </div>
    </section>
  );
}
