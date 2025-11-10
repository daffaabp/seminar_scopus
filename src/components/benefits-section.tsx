import React from "react";
import { Target, Search, Award, ShieldAlert } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Strategi Memilih Jurnal Scopus yang Tepat",
    description: "Pelajari langkah-langkah cermat sebelum menentukan jurnal, termasuk cara menilai kualitas dan reputasinya agar publikasi Anda diterima di tempat yang kredibel.",
    color: "blue"
  },
  {
    icon: Search,
    title: "Panduan Mencari Jurnal Sesuai Topik dan Bidang Ilmu",
    description: "Kuasai teknik pencarian efektif berdasarkan bidang keilmuan, keyword, abstrak, maupun referensi pustaka untuk menemukan jurnal yang paling relevan dengan riset Anda.",
    color: "indigo"
  },
  {
    icon: Award,
    title: "Memahami Sistem Peringkat dan Kriteria Jurnal Scopus",
    description: "Pahami arti peringkat (Q1–Q4), indikator penilaian, dan kriteria utama dalam menentukan jurnal target yang sesuai dengan kualitas penelitian Anda.",
    color: "purple"
  },
  {
    icon: ShieldAlert,
    title: "Menghindari Jurnal Predatory dan Publikasi Bermasalah",
    description: "Dapatkan panduan mengenali ciri-ciri jurnal palsu agar reputasi akademik Anda tetap terjaga.",
    color: "rose"
  }
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
            Manfaat Mengikuti Webinar Ini
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Empat pilar utama yang akan membantu Anda menguasai seni memilih jurnal Scopus dengan tepat dan strategis
          </p>
        </div>

        {/* Benefits Grid - 4 Columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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