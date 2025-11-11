import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: "t1",
    name: "GOMGOM T. PANGARIBUAN",
    role: "Dosen",
    content: "Berhubung lagi cari referensi untuk jurnal, maka aplikasi ini sangat membantu sekali bagi saya.",
    rating: 5,
    image: "/testimonials/profile3.jpg"
  },
  {
    id: "t2",
    name: "ABDUL JAMIL, S.E., M.M.",
    role: "Dosen",
    content: "Sudah sangat bagus karena sesuai dengan kebutuhan.",
    rating: 5,
    image: "/testimonials/profile5.jpg"
  },
  {
    id: "t3",
    name: "LENNI YUNITA HARAHAP, M.P.d",
    role: "Dosen",
    content: "Pelatihan yg memberikan kontribusi bagi para dosen khususnya dosen pemula dlm penulisan artikel ilmiah. Ilmunya sangat bermanfaat. Materi course adlh pembelajaran baru bagi saya.",
    rating: 5,
    image: "/testimonials/profile6.jpg"
  },
  {
    id: "t4",
    name: "Ir. KHAIRUDDIN KARIM, S.T., MT",
    role: "Dosen",
    content: "Bagi saya, sangat bermanfaat khususnya dalam penyusunan karya-karya ilmiah dan banyak hal baru yang saya peroleh",
    rating: 5,
    image: "/testimonials/profile4.jpg"
  }
];

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
  key?: string;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow mb-4">
      {/* Quote Icon */}
      <div className="mb-3">
        <Quote className="w-8 h-8 text-blue-600/20" />
      </div>
      
      {/* Rating */}
      <div className="flex gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      {/* Content */}
      <p className="text-base text-slate-700 leading-relaxed mb-4 font-normal">
        "{testimonial.content}"
      </p>
      
      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-slate-200">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-slate-900 text-sm font-medium">{testimonial.name}</p>
          <p className="text-xs text-slate-500 font-medium">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Content - Sticky Description */}
          <div className="lg:col-span-2 lg:sticky lg:top-24 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight font-semibold">
              Cerita Sukses Mereka yang Sudah Menerapkan Metode Ini
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              Banyak dosen dan peneliti yang awalnya frustrasi karena artikel ditolak berkali-kali, akhirnya berhasil publikasi di jurnal Scopus setelah mengikuti workshop ini.
            </p>
          </div>

          {/* Right Content - Scrolling Testimonials */}
          <div className="lg:col-span-3 relative">
            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling Container with seamless infinite loop */}
            <div className="h-[600px] overflow-hidden relative">
              <div className="animate-scroll-up inline-block">
                {/* First set of testimonials */}
                <div className="space-y-4 mb-4">
                  {testimonials.map((testimonial) => (
                    <TestimonialCard key={`first-${testimonial.id}`} testimonial={testimonial} />
                  ))}
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="space-y-4" aria-hidden="true">
                  {testimonials.map((testimonial) => (
                    <TestimonialCard key={`second-${testimonial.id}`} testimonial={testimonial} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}