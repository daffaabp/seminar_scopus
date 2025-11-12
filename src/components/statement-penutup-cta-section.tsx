import React from "react";
import { Button } from "./ui/button";

export function StatementPenutupCTASection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6 font-semibold">
            Bayangkan 3 Bulan ke Depan
          </h2>
          
          <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
            Artikel Anda sudah diterima di jurnal Scopus Q3, Q2, atau Q1 yang tepat. 
            Tidak ada lagi frustrasi karena ditolak berkali-kali. 
            Tidak ada lagi waktu terbuang karena trial-error.
          </p>
          
          <div className="bg-white/10 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-lg text-white leading-relaxed">
              Dan semuanya dimulai dari Anda, hari ini.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button 
              size="lg" 
              onClick={scrollToRegistration}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 shadow-xl hover:shadow-2xl transition-all font-semibold text-lg w-full"
            >
              Daftar Workshop Sekarang - HANYA Rp. 99.000
            </Button>
            
            <p className="text-blue-100 text-sm">
              50 slot tersisa • Harga akan naik setelah 50 pendaftar pertama
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
