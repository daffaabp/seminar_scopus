import React from "react";

const benefits = [
  "Anda tidak akan lagi merasa frustrasi karena artikel bagus ditolak berkali-kali. Karena sekarang Anda tahu cara memilih jurnal yang tepat sejak awal, sesuai dengan scope dan target audience artikel Anda.",
  "Waktu Anda lebih efisien — tidak perlu lagi trial-error berbulan-bulan mencari jurnal. Dengan tools dan teknik yang diajarkan, Anda bisa menemukan jurnal target yang tepat dalam hitungan jam, bukan minggu.",
  "Rasa percaya diri meningkat saat submit artikel, karena Anda yakin sudah memilih jurnal yang tepat. Tidak ada lagi rasa was-was 'apakah jurnal ini cocok?' atau 'apakah ini jurnal predatory?'.",
  "Peluang publikasi meningkat signifikan — banyak peserta workshop kami yang berhasil publikasi di jurnal Scopus Q2 atau Q3 setelah menerapkan metode yang diajarkan. Tingkat keberhasilan mereka meningkat 3x lipat."
];

export function BenefitsSection() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-4 font-bold">
            Apa Saja Manfaat yang Akan Anda Rasakan?
          </h2>
        </div>

        {/* Benefits List */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-lg border border-slate-100">
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-2xl text-blue-600 font-bold mt-1 flex-shrink-0">●</span>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    {benefit}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}