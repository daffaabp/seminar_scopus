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
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-4 font-bold"
            style={{ fontWeight: 900 }}
          >
            Apa Saja Manfaat yang Akan Anda Rasakan?
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Setelah mengikuti workshop ini, <span className="font-semibold text-blue-600">inilah yang akan berubah dalam hidup akademik Anda.</span> Dan ini bukan sekadar janji—<span className="font-medium">banyak yang sudah membuktikannya.</span>
          </p>
        </div>

        {/* Benefits List */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-lg border border-slate-100">
            <ul className="space-y-6">
              {benefits.map((benefit, index) => {
                // Split benefit menjadi parts dengan highlight
                interface Part {
                  text: string;
                  highlight: boolean;
                  className?: string;
                }
                
                interface Match {
                  start: number;
                  end: number;
                  text: string;
                  className: string;
                }
                
                const parts: Part[] = [];
                let lastIndex = 0;
                
                // Pattern untuk highlight
                const highlightPatterns = [
                  { pattern: /(tidak akan lagi|lebih efisien|percaya diri meningkat|meningkat signifikan)/g, className: "font-semibold text-blue-600" },
                  { pattern: /(3x lipat|Q2 atau Q3|dalam hitungan jam)/g, className: "font-bold text-indigo-600" }
                ];
                
                // Find all matches
                const matches: Match[] = [];
                highlightPatterns.forEach(({ pattern, className }) => {
                  // Reset regex lastIndex untuk setiap pattern
                  pattern.lastIndex = 0;
                  let match;
                  while ((match = pattern.exec(benefit)) !== null) {
                    matches.push({ start: match.index, end: match.index + match[0].length, text: match[0], className });
                  }
                });
                
                // Sort matches by position
                matches.sort((a, b) => a.start - b.start);
                
                // Build parts array
                matches.forEach((match) => {
                  if (lastIndex < match.start) {
                    parts.push({ text: benefit.substring(lastIndex, match.start), highlight: false });
                  }
                  parts.push({ text: match.text, highlight: true, className: match.className });
                  lastIndex = match.end;
                });
                
                if (lastIndex < benefit.length) {
                  parts.push({ text: benefit.substring(lastIndex), highlight: false });
                }
                
                // If no matches, use original text
                if (parts.length === 0) {
                  parts.push({ text: benefit, highlight: false });
                }
                
                return (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-2xl text-blue-600 font-bold mt-1 flex-shrink-0">●</span>
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                      {parts.map((part, i) => 
                        part.highlight ? (
                          <span key={i} className={part.className}>{part.text}</span>
                        ) : (
                          <span key={i}>{part.text}</span>
                        )
                      )}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}