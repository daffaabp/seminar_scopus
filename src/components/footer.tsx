import React from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src="/logo.webp" alt="Kelas Inovatif" className="h-8 mb-4" />
            <p className="text-slate-400 leading-relaxed mb-6 font-normal">
              Tingkatkan produktivitas Anda dengan solusi AI terlengkap. Dari penulisan akademik hingga pengembangan bisnis, kami membantu Anda menguasai teknologi AI untuk hasil yang maksimal.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Webinar Lainnya</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Artikel & Resources</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" />
                <span className="font-medium">support@kelasinovatif.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" />
                <span className="font-medium">085712208535</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" />
                <span className="font-medium">
                  PT Bakat Kreatif Indonesia<br />
                  Office 1<br />
                  Jl Raya Mujur No 46 Kroya<br />
                  Cilacap, Jawa Tengah<br />
                  Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © 2025 Kelas Inovatif. Hak Cipta Dilindungi.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
