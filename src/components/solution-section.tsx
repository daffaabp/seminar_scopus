import React from "react";
import { CheckCircle2, XCircle, BookOpen, Search, Target, Award, ShieldCheck } from "lucide-react";

export function SolutionSection() {
  const problems = [
    "Artikel sudah bagus, tapi selalu ditolak karena \"tidak sesuai scope\" atau \"tidak sesuai target audience\"",
    "Bingung mulai dari mana mencari jurnal yang tepat untuk topik penelitian Anda",
    "Takut salah pilih jurnal dan akhirnya terjebak jurnal predatory",
    "Sudah coba berbagai cara, tapi tetap gagal menemukan jurnal yang cocok"
  ];

  const solutions = [
    "Tahu langkah-langkah sistematis memilih jurnal Scopus yang tepat",
    "Menggunakan tools dan teknik pencarian yang efektif",
    "Menghindari jurnal predatory sejak awal",
    "Meningkatkan peluang artikel diterima di jurnal target"
  ];

  const learningObjectives = [
    {
      icon: Target,
      title: "Hal yang perlu dicermati sebelum memilih jurnal",
      items: [
        "Cara menilai kualitas dan reputasi jurnal",
        "Indikator jurnal Scopus yang kredibel"
      ]
    },
    {
      icon: Award,
      title: "Memahami sistem peringkat Scopus",
      items: [
        "Arti Q1, Q2, Q3, Q4 dan cara menggunakannya",
        "Impact factor dan metrics lainnya"
      ]
    },
    {
      icon: Search,
      title: "Cara mencari jurnal berdasarkan:",
      items: [
        "Bidang ilmu Anda",
        "Keyword penelitian",
        "Abstrak artikel",
        "Referensi pustaka"
      ]
    },
    {
      icon: BookOpen,
      title: "Kriteria dalam mencermati jurnal target",
      items: [
        "Scope dan focus jurnal",
        "Author guidelines",
        "Acceptance rate"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Tips menghindari predatory journal",
      items: [
        "Ciri-ciri jurnal predatory",
        "Red flags yang harus dihindari"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6 font-semibold">
            Workshop Ini Dirancang Khusus untuk Anda
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Workshop <span className="text-blue-600 font-medium">"Rahasia Memilih Jurnal Scopus yang Tepat"</span> ini saya rancang buat Anda yang sering ngerasa:
          </p>
        </div>

        {/* Problems & Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Problems */}
          <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-red-100">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Masalah yang Sering Dihadapi</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-green-100">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Sekarang Anda Bisa</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">{solution}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-600 italic">
              Semua diajarkan dalam 2 jam intensif, dengan pendekatan praktis dan langsung bisa dipraktikkan.
            </p>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12 border border-slate-200">
          <h3 className="text-2xl lg:text-3xl text-slate-900 mb-8 text-center font-semibold">
            Apa Yang Akan Anda Pelajari?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningObjectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-blue-50">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm">{objective.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {objective.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

