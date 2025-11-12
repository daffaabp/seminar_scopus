import React, { useState, FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { CheckCircle2, Calendar, Clock, MapPin, Gift, Loader2, Users } from "lucide-react";
import { supabase } from "../lib/supabase";

export function RegistrationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    position: "",
    agreeToTerms: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // Call Supabase Edge Function to create registration and payment
      const { data, error: functionError } = await supabase.functions.invoke('create-registration', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          institution: formData.institution,
          position: formData.position
        }
      });

      if (functionError) {
        throw new Error(functionError.message || 'Gagal memproses registrasi');
      }

      if (!data.success) {
        throw new Error(data.error || 'Gagal memproses registrasi');
      }

      // Redirect to payment URL
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        throw new Error('Payment URL tidak ditemukan');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan saat memproses registrasi');
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(null);
  };

  return (
    <section id="registration" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Information */}
          <div className="space-y-8">
            {/* Closing Hook */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-100">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-900 mb-4 font-bold">
                Bayangin Kalau Anda Melewatkan Kesempatan Ini?
              </h2>
              
              <div className="space-y-3 text-base sm:text-lg text-slate-700 leading-relaxed">
                <p>
                  <span className="font-semibold">Jangan sampai</span> artikel berkualitas Anda terus ditolak atau waktu terbuang untuk trial-error berbulan-bulan.
                </p>
                
                <p>
                  <span className="font-semibold">Bayangin kalau</span> dalam <span className="text-blue-600 font-bold">1 bulan ke depan</span>, artikel Anda sudah diterima di jurnal Scopus yang tepat.
                </p>
                
                <p className="text-lg sm:text-xl font-semibold text-slate-900 pt-2">
                  Goal utama: <span className="text-blue-600">Tembus Scopus dalam 1 Bulan</span>
                </p>
                
                <p className="text-base sm:text-lg font-medium text-slate-800 pt-2">
                  Dan semuanya dimulai dari Anda, hari ini.
                </p>
              </div>
            </div>

            {/* Event Details Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-xl text-slate-900 mb-6 font-semibold">Detail Acara</h3>
              <div className="space-y-4">
                <div className="mb-4 pb-4 border-b border-slate-200">
                  <p className="text-sm text-slate-500 font-medium mb-2">Nama Event</p>
                  <p className="text-lg text-slate-900 font-semibold">Rahasia Memilih Jurnal Scopus yang Tepat untuk Publikasi Anda</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-50 flex-shrink-0">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Tanggal</p>
                    <p className="text-base text-slate-900 font-medium">Jumat, 14 November 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-50 flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Waktu</p>
                    <p className="text-base text-slate-900 font-medium">19.00 - 21.00 WIB</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-50 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Platform</p>
                    <p className="text-base text-slate-900 font-medium">Zoom Meeting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Registration Form */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
              {/* Slot Counter */}

              {/* Form Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
                <h3 className="text-2xl lg:text-3xl mb-2 font-semibold">Formulir Pendaftaran</h3>
                <p className="text-blue-100 font-medium">Isi data Anda dengan lengkap</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-800">{error}</p>
                  </div>
                )}
                {isSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl text-slate-900 mb-2">Pendaftaran Berhasil!</h4>
                    <p className="text-slate-600">Link webinar akan dikirim ke email Anda</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Contoh: Dr. Ahmad Santoso, M.Sc."
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@institusi.ac.id"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor WhatsApp *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="08xx xxxx xxxx"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="institution">Institusi/Universitas *</Label>
                      <Input
                        id="institution"
                        type="text"
                        placeholder="Nama institusi Anda"
                        value={formData.institution}
                        onChange={(e) => handleChange("institution", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="position">Posisi/Status *</Label>
                      <Select
                        value={formData.position}
                        onValueChange={(value) => handleChange("position", value)}
                        required
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Pilih posisi Anda" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dosen">Dosen</SelectItem>
                          <SelectItem value="mahasiswa-s1">Mahasiswa S1</SelectItem>
                          <SelectItem value="mahasiswa-s2">Mahasiswa S2</SelectItem>
                          <SelectItem value="mahasiswa-s3">Mahasiswa S3</SelectItem>
                          <SelectItem value="peneliti">Peneliti</SelectItem>
                          <SelectItem value="lainnya">Lainnya</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleChange("agreeToTerms", checked as boolean)}
                        required
                      />
                      <label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed cursor-pointer">
                        Saya setuju untuk menerima informasi webinar dan materi terkait publikasi ilmiah melalui email dan WhatsApp. Saya juga telah membaca dan menyetujui{" "}
                        <a 
                          href="/terms-of-service" 
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-blue-600 hover:text-blue-700 underline font-medium"
                        >
                          Syarat & Ketentuan
                        </a>{" "}
                        dan{" "}
                        <a 
                          href="/privacy-policy" 
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-blue-600 hover:text-blue-700 underline font-medium"
                        >
                          Kebijakan Privasi
                        </a>.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all"
                      disabled={!formData.agreeToTerms || isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Memproses...
                        </>
                      ) : (
                        "Daftar Sekarang - HANYA Rp. 99,000"
                      )}
                    </Button>

                    <p className="text-xs text-center text-slate-500">
                      Data Anda aman dan tidak akan dibagikan kepada pihak ketiga
                    </p>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
