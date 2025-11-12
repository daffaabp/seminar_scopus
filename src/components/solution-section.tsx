import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

export function SolutionSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 lg:py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-green-100">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold">
              Workshop Ini Dirancang Khusus untuk Mengatasi Masalah Anda
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-green-100">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                Workshop <span className="text-blue-600 font-semibold">"Rahasia Memilih Jurnal Scopus yang Tepat"</span> adalah panduan praktis yang bantu dosen dan peneliti memilih jurnal Scopus yang tepat untuk artikel mereka, sehingga artikel berkualitas tidak lagi ditolak hanya karena salah memilih jurnal target.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                Belajar lewat workshop 2 jam intensif, dengan tools dan teknik yang langsung bisa dipraktikkan. Tidak perlu trial-error berbulan-bulan lagi.
              </p>
              
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Setelah ikut workshop ini, Anda bisa:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">Menilai kualitas dan reputasi jurnal Scopus dengan tepat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">Menggunakan tools dan teknik pencarian yang efektif untuk menemukan jurnal yang sesuai</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">Menghindari jurnal predatory sejak awal dengan ciri-ciri yang jelas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">Meningkatkan peluang artikel diterima di jurnal target hingga 3x lipat</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mt-8">
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  Workshop ini dirancang khusus untuk Anda yang sudah frustrasi dengan proses publikasi yang berbelit-belit. Saya akan share sistem yang sudah terbukti membantu 500+ dosen dan peneliti berhasil publikasi di jurnal Scopus.
                </p>
              </div>
              
              <div className="text-center pt-6">
                <Button 
                  size="lg" 
                  onClick={scrollToRegistration}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all"
                >
                  Daftar Workshop Sekarang - HANYA Rp. 99.000
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

