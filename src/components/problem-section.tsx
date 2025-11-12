import React from "react";
import { Clock, AlertCircle, FileX, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: FileX,
    title: "Artikel Bagus Tapi Selalu Ditolak",
    cause: "Karena salah memilih jurnal target sejak awal",
    effect: "Waktu dan energi terbuang percuma, artikel berkualitas tidak terpublikasi"
  },
  {
    icon: Clock,
    title: "Waktu Terbuang Percuma",
    cause: "Karena tidak tahu cara sistematis mencari dan menilai jurnal",
    effect: "Proses publikasi tertunda, deadline terlewat, stres meningkat"
  },
  {
    icon: AlertCircle,
    title: "Takut Terjebak Jurnal Predatory",
    cause: "Karena tidak paham ciri-ciri jurnal predatory dan indikator jurnal kredibel",
    effect: "Khawatir merusak reputasi akademik, takut submit ke jurnal yang salah"
  },
  {
    icon: TrendingDown,
    title: "Proses Publikasi Tertunda",
    cause: "Karena tidak ada strategi backup dan tidak tahu jurnal alternatif yang cocok",
    effect: "Publikasi tertunda, karir akademik terhambat, peluang terlewat"
  }
];

export function ProblemSection() {
  return (
    <section className="py-12 lg:py-16 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-bold mb-4">
            Masalah yang Sering Dihadapi Dosen & Peneliti
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Artikel sudah bagus, tapi selalu ditolak? <span className="font-medium">Saya paham rasanya.</span>
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
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-red-50 flex-shrink-0">
                    <Icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-2">
                      <span className="font-medium">Karena:</span> {problem.cause}
                    </p>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      <span className="font-medium">Akibatnya:</span> {problem.effect}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-base text-slate-700 leading-relaxed">
            Ini adalah masalah nyata yang dihadapi banyak dosen dan peneliti di Indonesia. <span className="font-medium">Anda tidak sendirian.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
