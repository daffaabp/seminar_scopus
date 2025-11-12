import React from "react";
import { CheckCircle2 } from "lucide-react";

const features = [
  "E-Sertifikat 12 JP",
  "Rekaman Video Eksklusif yang bisa diakses selamanya",
  "Grup Diskusi Eksklusif",
  "Layanan Lifetime Support Konsultasi melalui WhatsApp",
  "Agenda Sharing Bulanan dengan Alumni Komunitas",
  "Networking dengan Ratusan Peneliti Senior"
];

export function FeaturesSection() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-4 font-bold"
            style={{ fontWeight: 900 }}
          >
            Apa Saja yang Akan Anda Dapatkan?
          </h2>
        </div>

        {/* Features List */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-lg border border-slate-100">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                    {feature}
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
