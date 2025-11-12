import React from "react";
import { Target, Search, Award, ShieldAlert, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Tidak Lagi Merasa Frustrasi",
    description: "Anda tidak akan lagi merasa frustrasi karena artikel bagus ditolak berkali-kali. Karena sekarang Anda tahu cara memilih jurnal yang tepat sejak awal, sesuai dengan scope dan target audience artikel Anda.",
    color: "blue"
  },
  {
    icon: Search,
    title: "Waktu Lebih Efisien",
    description: "Waktu Anda lebih efisien — tidak perlu lagi trial-error berbulan-bulan mencari jurnal. Dengan tools dan teknik yang diajarkan, Anda bisa menemukan jurnal target yang tepat dalam hitungan jam, bukan minggu.",
    color: "indigo"
  },
  {
    icon: Award,
    title: "Rasa Percaya Diri Meningkat",
    description: "Rasa percaya diri meningkat saat submit artikel, karena Anda yakin sudah memilih jurnal yang tepat. Tidak ada lagi rasa was-was \"apakah jurnal ini cocok?\" atau \"apakah ini jurnal predatory?\"",
    color: "purple"
  },
  {
    icon: CheckCircle2,
    title: "Peluang Publikasi Meningkat Signifikan",
    description: "Peluang publikasi meningkat signifikan — banyak peserta workshop kami yang berhasil publikasi di jurnal Scopus Q2 atau Q3 setelah menerapkan metode yang diajarkan. Tingkat keberhasilan mereka meningkat 3x lipat.",
    color: "green"
  },
];

const colorClasses = {
  blue: {
    bg: "bg-blue-50",
    icon: "text-blue-600",
    border: "border-blue-100",
    hover: "group-hover:bg-blue-600"
  },
  indigo: {
    bg: "bg-indigo-50",
    icon: "text-indigo-600",
    border: "border-indigo-100",
    hover: "group-hover:bg-indigo-600"
  },
  purple: {
    bg: "bg-purple-50",
    icon: "text-purple-600",
    border: "border-purple-100",
    hover: "group-hover:bg-purple-600"
  },
  green: {
    bg: "bg-green-50",
    icon: "text-green-600",
    border: "border-green-100",
    hover: "group-hover:bg-green-600"
  },
  rose: {
    bg: "bg-rose-50",
    icon: "text-rose-600",
    border: "border-rose-100",
    hover: "group-hover:bg-rose-600"
  }
};

export function BenefitsSection() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 font-semibold">
            Apa Saja Manfaat yang Akan Anda Rasakan?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Setelah ikut workshop ini, Anda akan merasakan:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const colors = colorClasses[benefit.color as keyof typeof colorClasses];
            const Icon = benefit.icon;
            
            return (
              <div 
                key={index}
                className="group text-center p-6 rounded-xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-slate-50 to-slate-100 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                
                {/* Title */}
                <h3 className="text-base text-slate-900 mb-3 leading-snug font-semibold">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}