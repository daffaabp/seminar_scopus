import React from "react";
import { Button } from "./ui/button";

export function SolutionSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 lg:py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-bold mb-6">
            Workshop Ini Dirancang Khusus untuk Mengatasi Masalah Anda
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-6 lg:p-10 flex flex-col gap-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Workshop <span className="text-blue-600 font-semibold">"Rahasia Memilih Jurnal Scopus yang Tepat"</span> adalah panduan praktis untuk <span className="font-medium">dosen, peneliti, dan mahasiswa</span> <span className="text-indigo-600 font-semibold">agar mampu menentukan jurnal Scopus yang paling sesuai sejak awal</span>.
              <br className="hidden sm:block" />
              Dengan metode yang sudah teruji, Anda dapat <span className="text-indigo-600 font-semibold">langsung tembus Scopus dalam waktu singkat</span>—tanpa perlu trial-error, tanpa kebingungan memilih jurnal, dan peluang artikel diterima menjadi jauh lebih besar.
            </p>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Belajar lewat workshop 2 jam intensif, dengan tools dan teknik yang langsung bisa dipraktikkan. Tidak perlu trial-error berbulan-bulan lagi.
            </p>

            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-base sm:text-lg text-blue-800 leading-relaxed font-medium">
                Setelah ikut workshop ini, Anda akan tahu cara memilih jurnal yang tepat sejak awal, sehingga artikel berkualitas Anda langsung diterima di jurnal target tanpa harus ditolak berkali-kali.
              </p>
            </div>

            <div className="flex justify-center pt-3">
              <Button
                size="lg"
                onClick={scrollToRegistration}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all w-full max-w-sm"
              >
                Daftar Sekarang - HANYA Rp. 99.000
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}