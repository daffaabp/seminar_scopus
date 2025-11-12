import React from "react";
import { Calendar, Clock, Users } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-16 pb-12 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-semibold">
              <span className="text-slate-900">Rahasia Memilih Jurnal </span>
              <span className="text-blue-600">Scopus</span>
              <span className="text-slate-900"> yang </span>
              <span className="text-indigo-600">Tepat</span>
              <span className="text-slate-900"> untuk </span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Publikasi</span>
              <span className="text-slate-900"> Anda</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed font-medium">
              <span className="text-slate-700">Saya bantu Anda kuasai </span>
              <span className="text-blue-600 font-semibold">strategi memilih jurnal Scopus</span>
              <span className="text-slate-700"> yang tepat, sehingga </span>
              <span className="text-indigo-600 font-semibold">artikel berkualitas Anda</span>
              <span className="text-slate-700"> tidak lagi ditolak hanya karena </span>
              <span className="text-red-600 font-semibold">salah memilih jurnal target</span>
              <span className="text-slate-700">.</span>
            </p>
            
            <p className="text-lg sm:text-xl leading-relaxed font-normal">
              <span className="text-slate-700">Bayangkan </span>
              <span className="text-blue-600 font-medium">3 bulan ke depan</span>
              <span className="text-slate-700">, artikel Anda sudah </span>
              <span className="text-indigo-600 font-medium">diterima di jurnal Scopus Q3, Q2, atau Q1</span>
              <span className="text-slate-700"> yang tepat, tanpa harus </span>
              <span className="text-red-600 font-medium">trial-error berkali-kali</span>
              <span className="text-slate-700"> dan menghabiskan waktu berbulan-bulan.</span>
            </p>
            
            {/* Event Details */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white shadow-sm border border-slate-100">
                <div className="p-2 rounded-lg bg-blue-50">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Tanggal</p>
                  <p className="font-medium">
                    <span className="text-blue-600">14 November</span> <span className="text-indigo-600">2025</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white shadow-sm border border-slate-100">
                <div className="p-2 rounded-lg bg-indigo-50">
                  <Clock className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Waktu</p>
                  <p className="font-medium">
                    <span className="text-indigo-600">19.00 - 21.00</span> <span className="text-purple-600">WIB</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={scrollToRegistration}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all"
              >
                Daftar Sekarang - HANYA Rp. 99,000
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 px-8 py-6"
              >
                Lihat Detail Program
              </Button>
            </div>
            
          </div>
          
          {/* Right Content - Speaker Photos */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Speaker 1 */}
              <div className="space-y-3">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform" />
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <ImageWithFallback 
                      src="/speakers/Dr. Nuri Nurlaila Setiawan, S.Si., M.Si..png"
                      alt="Dr. Nuri Nurlaila Setiawan, S.Si., M.Si."
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-sm opacity-90">Dr. Nuri Nurlaila Setiawan, S.Si., M.Si.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Speaker 2 */}
              <div className="space-y-3 mt-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl -rotate-3 group-hover:-rotate-6 transition-transform" />
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <ImageWithFallback 
                      src="/speakers/M. Arianto.png"
                      alt="M. Arianto"
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-sm opacity-90">M. Arianto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
