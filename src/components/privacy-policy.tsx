import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Button
          variant="ghost"
          onClick={() => {
            window.history.pushState({}, '', '/');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Beranda
        </Button>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
          Kebijakan Privasi
        </h1>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
          <p className="text-sm text-slate-500">
            Terakhir diperbarui: 14 November 2025
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Pengenalan</h2>
            <p>
              Kelas Inovatif ("kami", "kita", atau "perusahaan") menghormati privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika Anda menggunakan layanan kami.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Informasi yang Kami Kumpulkan</h2>
            <p className="font-semibold mb-2">Informasi yang Anda berikan kepada kami:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nama lengkap</li>
              <li>Alamat email</li>
              <li>Nomor telepon/WhatsApp</li>
              <li>Nama institusi/universitas</li>
              <li>Posisi/status (dosen, mahasiswa, peneliti, dll)</li>
              <li>Informasi pembayaran (diproses melalui payment gateway yang aman)</li>
            </ul>
            <p className="font-semibold mb-2 mt-4">Informasi yang dikumpulkan secara otomatis:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Alamat IP</li>
              <li>Jenis browser dan perangkat</li>
              <li>Data penggunaan website (melalui cookies)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Cara Kami Menggunakan Informasi</h2>
            <p>Kami menggunakan informasi yang dikumpulkan untuk:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Memproses pendaftaran dan pembayaran</li>
              <li>Mengirim konfirmasi dan informasi terkait webinar</li>
              <li>Memberikan akses ke materi webinar dan rekaman</li>
              <li>Mengirim update dan informasi terkait layanan kami</li>
              <li>Meningkatkan kualitas layanan dan pengalaman pengguna</li>
              <li>Memenuhi kewajiban hukum dan regulasi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Pembagian Informasi</h2>
            <p>
              Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, kecuali dalam situasi berikut:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dengan persetujuan Anda</li>
              <li>Untuk memproses pembayaran (dengan payment gateway yang terpercaya)</li>
              <li>Untuk memenuhi kewajiban hukum atau perintah pengadilan</li>
              <li>Untuk melindungi hak, properti, atau keamanan kami dan pengguna lain</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Keamanan Data</h2>
            <p>
              Kami menggunakan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi informasi pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah. Data Anda disimpan di server yang aman dan dienkripsi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Cookies</h2>
            <p>
              Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Anda dapat mengatur browser Anda untuk menolak cookies, namun hal ini dapat mempengaruhi fungsionalitas website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Hak Anda</h2>
            <p>Anda memiliki hak untuk:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mengakses informasi pribadi Anda</li>
              <li>Memperbaiki informasi yang tidak akurat</li>
              <li>Meminta penghapusan data pribadi Anda</li>
              <li>Menolak pemrosesan data tertentu</li>
              <li>Menghentikan langganan email marketing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Retensi Data</h2>
            <p>
              Kami akan menyimpan informasi pribadi Anda selama diperlukan untuk tujuan yang dijelaskan dalam kebijakan ini, atau selama diwajibkan oleh hukum.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Perubahan Kebijakan Privasi</h2>
            <p>
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui email atau pemberitahuan di website. Kami menyarankan Anda untuk meninjau kebijakan ini secara berkala.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Kontak</h2>
            <p>
              Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi ini, silakan hubungi kami di:
            </p>
            <ul className="list-none pl-0 space-y-2">
              <li>Email: support@kelasinovatif.com</li>
              <li>WhatsApp: 085712208535</li>
              <li>Alamat: PT Bakat Kreatif Indonesia, Office 1, Jl Raya Mujur No 46 Kroya, Cilacap, Jawa Tengah, Indonesia</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

