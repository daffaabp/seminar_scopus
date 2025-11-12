import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Cocok untuk dosen/peneliti level apa?",
    answer: "Workshop ini cocok untuk semua level, dari dosen/peneliti pemula yang baru mulai publikasi hingga yang sudah berpengalaman tapi masih kesulitan menemukan jurnal yang tepat. Materinya disesuaikan untuk bisa dipahami oleh semua tingkatan."
  },
  {
    question: "Apakah materinya praktis dan bisa langsung diterapkan?",
    answer: "Ya, fokus workshop ini adalah pada praktik, bukan teori. Anda akan mendapatkan tools dan teknik yang bisa langsung diterapkan, bahkan saat workshop sedang berlangsung. Banyak peserta yang sudah bisa menemukan jurnal yang tepat sebelum workshop selesai."
  },
  {
    question: "Bagaimana jika saya belum pernah publikasi di Scopus?",
    answer: "Justru ini workshop yang tepat untuk Anda! Kami akan mengajarkan dari dasar hingga lanjut, jadi tidak perlu pengalaman sebelumnya. Bahkan banyak peserta pemula yang berhasil publikasi di jurnal Scopus Q3 atau Q2 setelah mengikuti workshop ini."
  },
  {
    question: "Apakah ada rekaman jika saya tidak bisa hadir?",
    answer: "Ya, Anda akan mendapatkan rekaman webinar selamanya. Jadi jika tidak bisa hadir live, Anda tetap bisa mengakses semua materi dan belajar sesuai waktu luang Anda."
  },
  {
    question: "Apakah ada garansi jika tidak puas?",
    answer: "Kami memberikan garansi kepuasan 100%. Jika setelah mengikuti workshop Anda merasa tidak mendapat manfaat, kami akan kembalikan uang Anda tanpa pertanyaan. Tapi dari 500+ peserta, belum ada yang meminta refund karena semuanya merasa sangat terbantu."
  },
  {
    question: "Apakah saya akan mendapatkan sertifikat?",
    answer: "Ya, semua peserta akan mendapatkan e-sertifikat yang bisa digunakan untuk keperluan administrasi kampus atau portofolio profesional."
  },
  {
    question: "Apakah ada akses ke grup diskusi setelah workshop?",
    answer: "Ya, Anda akan mendapatkan akses ke grup diskusi eksklusif di mana Anda bisa bertanya, berdiskusi, dan berbagi pengalaman dengan peserta lain dan pembicara. Grup ini aktif selamanya."
  }
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6 font-semibold">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Masih punya pertanyaan? Jangan ragu untuk menghubungi kami. Kami siap membantu Anda.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-slate-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  )}
                </div>
              </button>
              
              {activeIndex === index && (
                <div className="px-6 pb-4 border-t border-slate-100">
                  <p className="text-slate-700 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              <span className="font-semibold">Masih ragu?</span> Workshop ini sudah diikuti oleh 500+ dosen dan peneliti dengan tingkat kepuasan 98%.
            </p>
            <p className="text-slate-600">
              Jangan biarkan ketidakpastian menghambat karir akademik Anda. Ambil keputusan sekarang!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
