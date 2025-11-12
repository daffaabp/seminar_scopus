import React from "react";
import { XCircle } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="py-16 lg:py-24 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-red-100">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold">
              Masalah yang Sering Dihadapi Dosen & Peneliti
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-red-100">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                Artikel Anda sudah bagus, tapi selalu ditolak karena "tidak sesuai scope" atau "tidak sesuai target audience"?
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                Saya paham rasanya.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                Anda sudah susah payah menulis artikel berkualitas, menghabiskan waktu berbulan-bulan, tapi selalu ditolak. Bukan karena kualitas artikelnya buruk, tapi karena salah memilih jurnal target. Akhirnya Anda bingung mulai dari mana mencari jurnal yang tepat. Takut salah pilih dan terjebak jurnal predatory. Sudah coba berbagai cara, tapi tetap gagal menemukan jurnal yang cocok.
              </p>
              
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Akibatnya:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">Waktu dan energi terbuang percuma karena artikel ditolak berkali-kali</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">Stres dan frustrasi karena tidak tahu cara memilih jurnal yang tepat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">Khawatir terjebak jurnal predatory yang bisa merusak reputasi akademik</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">Proses publikasi menjadi lebih lama dan tertunda karena harus mencari jurnal baru</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed pt-4">
                Ini adalah masalah nyata yang dihadapi oleh banyak dosen dan peneliti di Indonesia. Anda tidak sendirian.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
