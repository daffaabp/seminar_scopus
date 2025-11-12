import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const speakers = [
  {
    name: "Dr. Nuri Nurlaila Setiawan, S.Si., M.Si.",
    title: "Scientific Publication Consultant",
    image: "/speakers/Dr. Nuri Nurlaila Setiawan, S.Si., M.Si..png",
    bio: `Halo, saya Dr. Nuri Nurlaila Setiawan.

Saya pernah mengalami frustrasi yang sama seperti Anda — artikel bagus ditolak berkali-kali karena salah memilih jurnal target. Setelah bertahun-tahun trial-error dan belajar dari pengalaman, saya akhirnya menemukan sistem yang membantu saya dan ratusan peneliti lain berhasil publikasi di jurnal Scopus.

Sejak 2018, saya sudah membantu lebih dari 500+ dosen dan peneliti memilih jurnal Scopus yang tepat, dengan tingkat keberhasilan publikasi meningkat hingga 3x lipat.

Saat ini saya berperan sebagai Scientific Editor di Sintesa.id dan Researcher & Data Analyst di Hungarian Institute for Organic Agriculture. Saya juga aktif menulis dan berkolaborasi dalam berbagai publikasi ilmiah bersama rekan-rekan di ITB.`
  },
  {
    name: "M. Arianto",
    title: "AI Engineer & Consultant",
    image: "/speakers/M. Arianto.png",
    bio: `Halo, saya M. Arianto.

Sebagai AI Engineer & Consultant dengan pengalaman 10+ tahun dan 195+ proyek AI, saya melihat banyak dosen dan peneliti kesulitan mencari jurnal yang tepat karena tidak tahu cara memanfaatkan tools dan teknik pencarian yang efektif.

Sejak 2024, saya sudah menjadi Pembina Kelas Inovatif dan mentor untuk 3.000+ akademisi. Banyak dari mereka yang awalnya bingung memilih jurnal, akhirnya berhasil publikasi setelah menguasai teknik pencarian dan analisis jurnal yang saya ajarkan.

Di workshop ini, saya akan share tools dan teknik AI yang bisa membantu Anda mencari jurnal Scopus yang tepat dalam hitungan menit, bukan berhari-hari.`
  }
];

export function SpeakersSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6 font-bold">
            Belajar dari Para Ahli
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Dipandu langsung oleh praktisi dan akademisi yang telah berpengalaman puluhan tahun di dunia publikasi ilmiah internasional
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {speakers.map((speaker, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
            >
              {/* Content */}
              <div className="p-8">
                {/* Image - Top Center */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <ImageWithFallback 
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-11 h-11 object-cover object-top rounded-lg border-2 border-slate-100 shadow-md group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <h3 className="text-xl text-slate-900 mb-2 font-semibold">
                  {speaker.name}
                </h3>
                <p className="text-lg text-blue-600 mb-4 font-medium">
                  {speaker.title}
                </p>
                
                <p className="text-base text-slate-600 leading-relaxed font-normal whitespace-pre-line">
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Us Section */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 border border-blue-100">
            <h3 className="text-2xl lg:text-3xl text-slate-900 mb-6 font-semibold">
              Mengapa Workshop Ini Berbeda?
            </h3>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Kami bukan sekadar mengajarkan teori. Kami share pengalaman nyata dan sistem yang sudah terbukti membantu ratusan peneliti berhasil publikasi.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-sm text-slate-600">Dosen dan peneliti sudah berhasil publikasi setelah mengikuti metode kami</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-indigo-600 mb-2">3x Lipat</div>
                <p className="text-sm text-slate-600">Tingkat keberhasilan publikasi meningkat dibanding sebelum ikut workshop</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">Praktis</div>
                <p className="text-sm text-slate-600">Tools dan teknik yang diajarkan langsung bisa dipraktikkan, bukan hanya teori</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
