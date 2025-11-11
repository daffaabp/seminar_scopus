import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function StatementPenutupSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 mb-6">
          <Sparkles className="w-8 h-8 text-blue-300" />
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 font-bold leading-tight">
          Bayangkan 3 Bulan Ke Depan...
        </h2>

        {/* Body Text */}
        <div className="space-y-6 text-lg lg:text-xl text-blue-100 leading-relaxed mb-10">
          <p>
            Bayangkan 3 bulan ke depan, artikel Anda sudah <span className="text-white font-semibold">diterima di jurnal Scopus</span> yang tepat.
          </p>
          
          <p>
            Tidak ada lagi rasa <span className="text-red-300 font-medium">frustrasi</span> karena ditolak berkali-kali. 
            Tidak ada lagi waktu terbuang karena <span className="text-red-300 font-medium">trial-error</span> mencari jurnal. 
            Tidak ada lagi rasa was-was apakah jurnal yang dipilih adalah <span className="text-red-300 font-medium">predatory</span>.
          </p>
          
          <p>
            Anda sudah punya <span className="text-blue-300 font-semibold">sistem yang jelas</span> untuk memilih jurnal Scopus, 
            dan bisa langsung menerapkannya untuk artikel-artikel berikutnya.
          </p>
        </div>

        {/* Highlight Box */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/20">
          <p className="text-2xl lg:text-3xl font-bold text-white mb-2">
            Dan semuanya dimulai dari Anda, hari ini.
          </p>
          <p className="text-lg text-blue-200">
            Jangan biarkan artikel bagus Anda terus ditolak hanya karena salah memilih jurnal. 
            Kuasai strateginya sekarang, sebelum kesempatan publikasi berikutnya terlewat.
          </p>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          onClick={scrollToRegistration}
          className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-12 py-7 shadow-2xl hover:shadow-3xl transition-all font-bold"
        >
          Daftar Workshop Sekarang - HANYA Rp. 99.000
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        <p className="mt-6 text-sm text-blue-200">
          ⏰ Hanya untuk 50 pendaftar pertama atau sampai H-3 acara
        </p>
      </div>
    </section>
  );
}

