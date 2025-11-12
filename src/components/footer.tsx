import React from "react";
import { Mail, Phone, Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6">
          {/* Brand */}
          <div>
            <img src="/logo.webp" alt="Kelas Inovatif" className="h-6 sm:h-8 mb-3" />
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Solusi AI untuk produktivitas akademik dan bisnis Anda.
            </p>
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-3 text-sm sm:text-base font-semibold">Kontak</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />
                <span className="text-sm font-medium">support@kelasinovatif.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />
                <span className="text-sm font-medium">085712208535</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 sm:pt-6 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-slate-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 Kelas Inovatif. Hak Cipta Dilindungi.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
              <a 
                href="/privacy-policy" 
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', '/privacy-policy');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
                className="hover:text-blue-400 transition-colors"
              >
                Kebijakan Privasi
              </a>
              <a 
                href="/terms-of-service" 
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', '/terms-of-service');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
                className="hover:text-blue-400 transition-colors"
              >
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
