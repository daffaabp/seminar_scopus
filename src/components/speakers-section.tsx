import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const speakers = [
  {
    name: "Dr. Nuri Nurlaila Setiawan, S.Si., M.Si.",
    title: "Scientific Publication Consultant",
    image: "/speakers/Dr. Nuri Nurlaila Setiawan, S.Si., M.Si..png",
    bio: "Memiliki pengalaman 15+ tahun di dunia publikasi ilmiah dengan lebih dari 50 artikel terindeks Scopus Q1-Q2. Aktif sebagai reviewer di berbagai jurnal internasional bereputasi."
  },
  {
    name: "M. Arianto",
    title: "AI Engineer & Consultant",
    image: "/speakers/M. Arianto.png",
    bio: "Berpengalaman lebih dari 10 tahun dengan 195+ proyek AI. Sebagai Pembina Kelas Inovatif dan Mentor 3.000+ akademisi, kami menghadirkan solusi cerdas melalui keahlian sebagai AI Engineer & Konsultan."
  }
];

export function SpeakersSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6 font-semibold">
            Belajar dari Para Ahli
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
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
                
                <p className="text-lg text-slate-600 leading-relaxed font-normal">
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
