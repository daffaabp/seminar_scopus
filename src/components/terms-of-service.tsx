import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

export function TermsOfService() {
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

        <h1 
          className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6"
          style={{ fontWeight: 900 }}
        >
          Syarat & Ketentuan
        </h1>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
          <p className="text-sm text-slate-500">
            Terakhir diperbarui: 14 November 2025
          </p>

          <section>
            <h2 
              className="text-2xl font-bold text-slate-900 mb-4"
              style={{ fontWeight: 900 }}
            >1. Penerimaan Syarat</h2>
            <p>
              Dengan mengakses dan menggunakan layanan Kelas Inovatif, Anda menyetujui untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, Anda tidak boleh menggunakan layanan kami.
            </p>
          </section>

          <section>
            <h2 
              className="text-2xl font-bold text-slate-900 mb-4"
              style={{ fontWeight: 900 }}
            >2. Deskripsi Layanan</h2>
            <p>
              Kelas Inovatif menyediakan webinar dan pelatihan online terkait publikasi ilmiah, khususnya strategi memilih jurnal Scopus yang tepat. Layanan ini disediakan dalam bentuk webinar interaktif melalui platform Zoom Meeting.
            </p>
          </section>

          <section>
            <h2 
              className="text-2xl font-bold text-slate-900 mb-4"
              style={{ fontWeight: 900 }}
            >3. Pendaftaran dan Pembayaran</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pendaftaran dilakukan melalui formulir online yang tersedia di website.</li>
              <li>Pembayaran harus dilakukan sesuai dengan metode yang tersedia.</li>
              <li>Harga yang ditampilkan adalah harga final dan sudah termasuk pajak yang berlaku.</li>
              <li>Setelah pembayaran berhasil, peserta akan menerima konfirmasi via email dan WhatsApp.</li>
            </ul>
          </section>

          <section>
            <h2 
              className="text-2xl font-bold text-slate-900 mb-4"
              style={{ fontWeight: 900 }}
            >4. Kebijakan Pembatalan dan Pengembalian</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pembatalan dapat dilakukan maksimal 24 jam sebelum acara dimulai.</li>
              <li>Pengembalian dana akan diproses dalam waktu 5-7 hari kerja setelah permintaan pembatalan disetujui.</li>
              <li>Pembatalan setelah acara dimulai tidak dapat dilakukan dan tidak ada pengembalian dana.</li>
            </ul>
          </section>

          <section>
            <h2 
              className="text-2xl font-bold text-slate-900 mb-4"
              style={{ fontWeight: 900 }}
            >5. Hak Kekayaan Intelektual</h2>
            <p>
              Semua materi webinar, termasuk namun tidak terbatas pada video, audio, dokumen, dan presentasi, adalah hak kekayaan intelektual Kelas Inovatif. Materi ini tidak boleh direproduksi, didistribusikan, atau digunakan untuk keperluan komersial tanpa izin tertulis dari Kelas Inovatif.
            </p>
          </section>

          <section>
            <h2 
              className="text-2xl font-bold text-slate-900 mb-4"
              style={{ fontWeight: 900 }}
            >6. Keterbatasan Tanggung Jawab</h2>
            <p>
              Kelas Inovatif tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan layanan kami. Kami berusaha memberikan informasi yang akurat, namun tidak menjamin bahwa semua informasi selalu mutakhir atau bebas dari kesalahan.
            </p>
          </section>

          <section>
            <h2 
              className="text-2xl font-bold text-slate-900 mb-4"
              style={{ fontWeight: 900 }}
            >7. Perubahan Syarat</h2>
            <p>
              Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan diberitahukan melalui email atau pemberitahuan di website. Penggunaan layanan setelah perubahan berarti Anda menyetujui syarat dan ketentuan yang baru.
            </p>
          </section>

          <section>
            <h2 
              className="text-2xl font-bold text-slate-900 mb-4"
              style={{ fontWeight: 900 }}
            >8. Kontak</h2>
            <p>
              Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami di:
            </p>
            <ul className="list-none pl-0 space-y-2">
              <li>Email: support@kelasinovatif.com</li>
              <li>WhatsApp: 085712208535</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

