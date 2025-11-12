import React from "react";
import { Clock, AlertCircle, FileX, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: FileX,
    title: "Artikel Bagus Tapi Selalu Ditolak",
    description: "Salah memilih jurnal target sejak awal, sehingga waktu dan energi terbuang percuma."
  },
  {
    icon: Clock,
    title: "Waktu Terbuang Percuma",
    description: "Tidak tahu cara sistematis mencari dan menilai jurnal, akibatnya proses publikasi tertunda dan deadline terlewat."
  },
  {
    icon: AlertCircle,
    title: "Takut Terjebak Jurnal Predatory",
    description: "Tidak paham ciri-ciri jurnal predatory dan indikator jurnal kredibel, khawatir merusak reputasi akademik."
  },
  {
    icon: TrendingDown,
    title: "Proses Publikasi Tertunda",
    description: "Tidak ada strategi backup dan tidak tahu jurnal alternatif yang cocok, karir akademik terhambat."
  }
];

export function ProblemSection() {
  return (
    <section className="py-12 lg:py-16 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-bold mb-4"
            style={{ fontWeight: 900 }}
          >
            Masalah yang Sering Dihadapi Dosen & Peneliti
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Artikel sudah bagus, tapi selalu ditolak? <span className="font-medium">Saya paham rasanya.</span> Setelah melihat masalah-masalah ini, <span className="font-semibold text-slate-900">mungkin Anda bertanya: "Lalu, bagaimana solusinya?"</span>
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 max-w-5xl mx-auto mb-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-red-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-2">
                  <div className="p-1.5 rounded-lg bg-red-50 flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="text-base sm:text-lg font-bold text-slate-900 mb-2"
                      style={{ fontWeight: 900 }}
                    >
                      {problem.title}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
