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
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6 font-semibold">
            Workshop Ini Bukan Sekadar Pelatihan
          </h2>
          
          <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
            Ini adalah investasi untuk karir akademik Anda yang akan membuka peluang publikasi di jurnal Scopus berkualitas.
          </p>
          
          <div className="bg-white/10 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-lg text-white leading-relaxed">
              Dengan metode yang sudah terbukti membantu 500+ dosen dan peneliti, Anda tidak perlu lagi menghabiskan waktu berbulan-bulan untuk trial-error mencari jurnal yang tepat.
            </p>
          </div>
          
          <Button 
            size="lg" 
            onClick={scrollToRegistration}
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 shadow-xl hover:shadow-2xl transition-all font-semibold text-lg"
          >
            Daftar Sekarang - HANYA Rp. 99.000
          </Button>
          
          <p className="text-blue-100 mt-4 text-sm">
            Tempat terbatas! Hanya untuk 50 pendaftar pertama
          </p>
        </div>
      </div>
    </section>
  );
}
