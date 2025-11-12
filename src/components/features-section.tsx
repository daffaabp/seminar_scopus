import React from "react";
import { Target, Award, Search, BookOpen, ShieldCheck, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Hal yang perlu dicermati sebelum memilih jurnal",
    description: "Cara menilai kualitas dan reputasi jurnal, serta indikator jurnal Scopus yang kredibel",
    items: [
      "Cara menilai kualitas dan reputasi jurnal",
      "Indikator jurnal Scopus yang kredibel"
    ]
  },
  {
    icon: Award,
    title: "Memahami sistem peringkat Scopus",
    description: "Arti Q1, Q2, Q3, Q4 dan cara menggunakannya, serta impact factor dan metrics lainnya",
    items: [
      "Arti Q1, Q2, Q3, Q4 dan cara menggunakannya",
      "Impact factor dan metrics lainnya"
    ]
  },
  {
    icon: Search,
    title: "Cara mencari jurnal berdasarkan:",
    description: "Teknik pencarian efektif berdasarkan bidang ilmu, keyword, abstrak, dan referensi",
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
    description: "Cara menilai scope, focus, author guidelines, dan acceptance rate jurnal",
    items: [
      "Scope dan focus jurnal",
      "Author guidelines",
      "Acceptance rate"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Tips menghindari predatory journal",
    description: "Ciri-ciri jurnal predatory dan red flags yang harus dihindari",
    items: [
      "Ciri-ciri jurnal predatory",
      "Red flags yang harus dihindari"
    ]
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6 font-semibold">
            Apa Saja yang Akan Anda Pelajari di Workshop Ini?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Semua materi dirancang praktis dan langsung bisa diterapkan. Ini adalah bekal praktis yang bisa langsung Anda gunakan untuk meningkatkan peluang publikasi Scopus Anda.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-50">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm">{feature.title}</h3>
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
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

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed">
              <span className="font-semibold">Catatan penting:</span> Workshop ini fokus pada praktik, bukan teori. Anda akan mendapatkan tools dan teknik yang bisa langsung diterapkan, bahkan saat workshop sedang berlangsung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
