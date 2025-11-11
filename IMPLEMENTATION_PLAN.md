# PLAN IMPLEMENTASI PERBAIKAN LANDING PAGE
## Berdasarkan Framework 2: Personal

---

## RINGKASAN EKSEKUSI

**Jumlah File yang Dimodifikasi:** 5 file
**Jumlah File Baru:** 3 file  
**Total Perubahan:** 8 file + 1 update App.tsx

**Catatan Penting:** Headline "Rahasia Memilih Jurnal Scopus yang Tepat untuk Publikasi Anda" TIDAK AKAN DIUBAH sesuai permintaan user.

---

## STRUKTUR BARU LANDING PAGE

### Urutan Section (Setelah Implementasi):
1. **HeroSection** (Modified - Phase 1)
2. **SpeakersSection** (Modified - Phase 2) 🔴 CRITICAL
3. **SolutionSection** (NEW - Phase 3) 🔴 CRITICAL  
4. **BenefitsSection** (Modified - Phase 4)
5. **SpecialOfferSection** (NEW - Phase 5)
6. **TestimonialsSection** (Modified - Phase 6)
7. **StatementPenutupSection** (NEW - Phase 7)
8. **RegistrationSection** (Modified - Phase 8)
9. **Footer** (Unchanged)

---

## PHASE 1: MODIFIKASI HEROSECTION
**File:** `src/components/hero-section.tsx`  
**Priority:** HIGH  
**Status:** Pending

### Perubahan yang Akan Dilakukan:

#### 1.1 Headline (TIDAK BERUBAH)
```typescript
// TETAP: Line 22-30
"Rahasia Memilih Jurnal Scopus yang Tepat untuk Publikasi Anda"
```

#### 1.2 Sub-headline (Line 32-38) → Format Personal
**Dari:**
```typescript
Putus asa manuskrip Anda tak kunjung tembus Scopus? 
Kami bahas tuntas di webinar kami ini.
```

**Menjadi:**
```typescript
Saya bantu Anda kuasai strategi memilih jurnal Scopus yang tepat, 
sehingga artikel berkualitas Anda tidak lagi ditolak hanya karena 
salah memilih jurnal target.
```

#### 1.3 Hook Statement (TAMBAH BARU setelah Line 38)
```typescript
<p className="text-lg sm:text-xl leading-relaxed font-normal">
  <span className="text-slate-700">Bayangkan </span>
  <span className="text-blue-600 font-medium">3 bulan ke depan</span>
  <span className="text-slate-700">, artikel Anda sudah </span>
  <span className="text-indigo-600 font-medium">diterima di jurnal Scopus Q2 atau Q3</span>
  <span className="text-slate-700"> yang tepat, tanpa harus </span>
  <span className="text-red-600 font-medium">trial-error berkali-kali</span>
  <span className="text-slate-700"> dan menghabiskan waktu berbulan-bulan.</span>
</p>
```

#### 1.4 Paragraf Ketiga (Line 40-50) → Keep atau Simplify
**Opsi:** Keep as is atau remove karena sudah ada hook statement baru.

---

## PHASE 2: TRANSFORM SPEAKERSSECTION 🔴 CRITICAL
**File:** `src/components/speakers-section.tsx`  
**Priority:** CRITICAL  
**Status:** Pending

### Perubahan Major:

#### 2.1 Ubah Bio Dr. Nuri (Line 9) → Format Orang Pertama
**Dari:**
```typescript
bio: "Berpengalaman di bidang ekologi, biologi, dan analisis data ilmiah..."
```

**Menjadi:**
```typescript
bio: `Halo, saya Dr. Nuri Nurlaila Setiawan.

Saya pernah mengalami frustrasi yang sama seperti Anda — artikel bagus ditolak berkali-kali karena salah memilih jurnal target. Setelah bertahun-tahun trial-error dan belajar dari pengalaman, saya akhirnya menemukan sistem yang membantu saya dan ratusan peneliti lain berhasil publikasi di jurnal Scopus.

Sejak 2018, saya sudah membantu lebih dari 500+ dosen dan peneliti memilih jurnal Scopus yang tepat, dengan tingkat keberhasilan publikasi meningkat hingga 3x lipat.

Saat ini saya berperan sebagai Scientific Editor di Sintesa.id dan Researcher & Data Analyst di Hungarian Institute for Organic Agriculture. Saya juga aktif menulis dan berkolaborasi dalam berbagai publikasi ilmiah bersama rekan-rekan di ITB.`
```

#### 2.2 Ubah Bio M. Arianto (Line 15) → Format Orang Pertama
**Dari:**
```typescript
bio: "Berpengalaman lebih dari 10 tahun dengan 195+ proyek AI..."
```

**Menjadi:**
```typescript
bio: `Halo, saya M. Arianto.

Sebagai AI Engineer & Consultant dengan pengalaman 10+ tahun dan 195+ proyek AI, saya melihat banyak dosen dan peneliti kesulitan mencari jurnal yang tepat karena tidak tahu cara memanfaatkan tools dan teknik pencarian yang efektif.

Sejak 2015, saya sudah menjadi Pembina Kelas Inovatif dan mentor untuk 3.000+ akademisi. Banyak dari mereka yang awalnya bingung memilih jurnal, akhirnya berhasil publikasi setelah menguasai teknik pencarian dan analisis jurnal yang saya ajarkan.

Di workshop ini, saya akan share tools dan teknik AI yang bisa membantu Anda mencari jurnal Scopus yang tepat dalam hitungan menit, bukan berhari-hari.`
```

#### 2.3 Tambah Section "Mengapa Workshop Ini Berbeda?" (Setelah Grid Speakers)
**Posisi:** Setelah Line 65 (setelah closing div grid)

```typescript
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
```

#### 2.4 Update Layout untuk Bio yang Lebih Panjang
Bio sekarang multi-paragraph, jadi perlu adjust:
- Ubah `text-lg` jadi `text-base` untuk readability
- Tambah `whitespace-pre-line` untuk preserve line breaks
- Atau split bio jadi array paragraphs dan render dengan map

---

## PHASE 3: BUAT SOLUTIONSECTION (NEW) 🔴 CRITICAL
**File:** `src/components/solution-section.tsx` (BARU)  
**Priority:** CRITICAL  
**Status:** Pending

### Konten Lengkap:

```typescript
import React from "react";
import { CheckCircle2, XCircle, BookOpen, Search, Target, Award, ShieldCheck } from "lucide-react";

export function SolutionSection() {
  const problems = [
    "Artikel sudah bagus, tapi selalu ditolak karena \"tidak sesuai scope\" atau \"tidak sesuai target audience\"",
    "Bingung mulai dari mana mencari jurnal yang tepat untuk topik penelitian Anda",
    "Takut salah pilih jurnal dan akhirnya terjebak jurnal predatory",
    "Sudah coba berbagai cara, tapi tetap gagal menemukan jurnal yang cocok"
  ];

  const solutions = [
    "Tahu langkah-langkah sistematis memilih jurnal Scopus yang tepat",
    "Menggunakan tools dan teknik pencarian yang efektif",
    "Menghindari jurnal predatory sejak awal",
    "Meningkatkan peluang artikel diterima di jurnal target"
  ];

  const learningObjectives = [
    {
      icon: Target,
      title: "Hal yang perlu dicermati sebelum memilih jurnal",
      items: [
        "Cara menilai kualitas dan reputasi jurnal",
        "Indikator jurnal Scopus yang kredibel"
      ]
    },
    {
      icon: Award,
      title: "Memahami sistem peringkat Scopus",
      items: [
        "Arti Q1, Q2, Q3, Q4 dan cara menggunakannya",
        "Impact factor dan metrics lainnya"
      ]
    },
    {
      icon: Search,
      title: "Cara mencari jurnal berdasarkan:",
      items: [
        "Bidang ilmu Anda",
        "Keyword penelitian",
        "Abstrak artikel",
        "Referensi pustaka"
      ]
    },
    {
      icon: BookOpen,
      title: "Kriteria dalam mencermati jurnal target",
      items: [
        "Scope dan focus jurnal",
        "Author guidelines",
        "Acceptance rate"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Tips menghindari predatory journal",
      items: [
        "Ciri-ciri jurnal predatory",
        "Tools untuk verifikasi jurnal",
        "Red flags yang harus dihindari"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6 font-semibold">
            Workshop Ini Dirancang Khusus untuk Anda
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Workshop <span className="text-blue-600 font-medium">"Rahasia Memilih Jurnal Scopus yang Tepat"</span> ini saya rancang buat Anda yang sering ngerasa:
          </p>
        </div>

        {/* Problems & Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Problems */}
          <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-red-100">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Masalah yang Sering Dihadapi</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-green-100">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Sekarang Anda Bisa</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">{solution}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-600 italic">
              Semua diajarkan dalam 2 jam intensif, dengan pendekatan praktis dan langsung bisa dipraktikkan.
            </p>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12 border border-slate-200">
          <h3 className="text-2xl lg:text-3xl text-slate-900 mb-8 text-center font-semibold">
            Apa Yang Akan Anda Pelajari?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningObjectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-blue-50">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm">{objective.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {objective.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## PHASE 4: MODIFIKASI BENEFITSSECTION
**File:** `src/components/benefits-section.tsx`  
**Priority:** MEDIUM  
**Status:** Pending

### Perubahan Konten:

#### 4.1 Ubah Header (Line 64-69)
**Dari:**
```typescript
Manfaat Mengikuti Webinar Ini
```

**Menjadi:**
```typescript
Apa Saja Manfaat yang Akan Anda Rasakan?

Setelah ikut workshop ini, Anda akan merasakan:
```

#### 4.2 Ubah Benefits Array (Line 4-29) → Format Emosional
**Replace seluruh array dengan:**

```typescript
const benefits = [
  {
    icon: Target,
    title: "Tidak Lagi Merasa Frustrasi",
    description: "Anda tidak akan lagi merasa frustrasi karena artikel bagus ditolak berkali-kali. Karena sekarang Anda tahu cara memilih jurnal yang tepat sejak awal, sesuai dengan scope dan target audience artikel Anda.",
    color: "blue"
  },
  {
    icon: Search,
    title: "Waktu Lebih Efisien",
    description: "Waktu Anda lebih efisien — tidak perlu lagi trial-error berbulan-bulan mencari jurnal. Dengan tools dan teknik yang diajarkan, Anda bisa menemukan jurnal target yang tepat dalam hitungan jam, bukan minggu.",
    color: "indigo"
  },
  {
    icon: Award,
    title: "Rasa Percaya Diri Meningkat",
    description: "Rasa percaya diri meningkat saat submit artikel, karena Anda yakin sudah memilih jurnal yang tepat. Tidak ada lagi rasa was-was \"apakah jurnal ini cocok?\" atau \"apakah ini jurnal predatory?\"",
    color: "purple"
  },
  {
    icon: CheckCircle2,
    title: "Peluang Publikasi Meningkat Signifikan",
    description: "Peluang publikasi meningkat signifikan — banyak peserta workshop kami yang berhasil publikasi di jurnal Scopus Q2 atau Q3 setelah menerapkan metode yang diajarkan. Tingkat keberhasilan mereka meningkat 3x lipat.",
    color: "green"
  },
  {
    icon: ShieldAlert,
    title: "Reputasi Akademik Terjaga",
    description: "Reputasi akademik terjaga — Anda tidak akan lagi terjebak jurnal predatory yang bisa merusak kredibilitas akademik. Semua tools dan teknik verifikasi sudah diajarkan lengkap.",
    color: "rose"
  }
];
```

#### 4.3 Update Color Classes (Line 31-56)
Tambahkan `green` color:
```typescript
green: {
  bg: "bg-green-50",
  icon: "text-green-600",
  border: "border-green-100",
  hover: "group-hover:bg-green-600"
}
```

#### 4.4 Update Layout (Line 72-73)
**Dari:**
```typescript
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
```

**Menjadi:** (karena sekarang 5 items)
```typescript
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
```

---

## PHASE 5: BUAT SPECIALOFFERSECTION (NEW)
**File:** `src/components/special-offer-section.tsx` (BARU)  
**Priority:** MEDIUM  
**Status:** Pending

### Konten Lengkap:

```typescript
import React from "react";
import { CheckCircle2, Clock, Users, Gift } from "lucide-react";
import { Button } from "./ui/button";

export function SpecialOfferSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  const bonuses = [
    "E-Sertifikat Webinar (dikirim setelah webinar selesai)",
    "Akses Tools AI Canggih untuk mencari jurnal Scopus",
    "Akses Grup Diskusi Eksklusif dengan peserta lain dan mentor",
    "Recording Webinar Selamanya — bisa ditonton ulang kapan saja",
    "Template Checklist memilih jurnal Scopus (PDF)",
    "Daftar Tools Gratis untuk analisis jurnal (Spreadsheet)"
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 font-bold">
            Penawaran Spesial untuk Anda
          </h2>
          <p className="text-xl text-blue-100">
            Investasi terbaik untuk karir akademik Anda
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 lg:p-12">
            {/* Price */}
            <div className="text-center mb-8">
              <p className="text-lg text-slate-500 mb-2">Harga Normal</p>
              <p className="text-3xl text-slate-400 line-through mb-4">Rp. 249.000</p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-4">
                <p className="text-lg text-slate-600 mb-2">Hari Ini Cukup Bayar</p>
                <p className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Rp. 99.000
                </p>
                <div className="mt-4 inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full">
                  <p className="font-semibold">Hemat Rp. 150.000 - Diskon 60%</p>
                </div>
              </div>
            </div>

            {/* Bonuses */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-6">
                <Gift className="w-6 h-6 text-indigo-600" />
                <h3 className="text-xl font-semibold text-slate-900">Bonus Eksklusif yang Anda Dapatkan:</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{bonus}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <p className="text-lg font-semibold text-indigo-600">
                  Total Nilai Bonus: <span className="text-2xl">Rp. 200.000+</span>
                </p>
              </div>
            </div>

            {/* Urgency */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 mb-8 border-2 border-red-200">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-100">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">⚠️ Penawaran Terbatas</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Harga spesial ini hanya berlaku untuk <span className="font-bold text-red-600">50 pendaftar pertama</span> atau 
                    sampai <span className="font-bold text-red-600">H-3 acara (11 November 2025)</span>, mana yang lebih dulu.
                  </p>
                  <p className="text-slate-600 mt-2">
                    Setelah itu, harga kembali normal Rp. 249.000.
                  </p>
                  <p className="text-lg font-bold text-red-600 mt-3">
                    Jangan sampai kehabisan slot!
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button
              size="lg"
              onClick={scrollToRegistration}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg py-7 shadow-xl hover:shadow-2xl transition-all"
            >
              Daftar Workshop Sekarang - HANYA Rp. 99.000
            </Button>
            
            <p className="text-center text-sm text-slate-500 mt-4">
              🔒 Pembayaran aman melalui Xendit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## PHASE 6: MODIFIKASI TESTIMONIALSSECTION
**File:** `src/components/testimonials-section.tsx`  
**Priority:** LOW  
**Status:** Pending

### Perubahan Minor:

#### 6.1 Ubah Header (Line 84-89)
**Dari:**
```typescript
<h2>Apa Kata Mereka yang Sudah Mengikuti</h2>
<p>Banyak dosen, mahasiswa, dan peneliti telah merasakan manfaatnya...</p>
```

**Menjadi:**
```typescript
<h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight font-semibold">
  Cerita Sukses Mereka yang Sudah Menerapkan Metode Ini
</h2>
<p className="text-lg text-slate-600 leading-relaxed font-normal">
  Banyak dosen dan peneliti yang awalnya frustrasi karena artikel ditolak berkali-kali, 
  akhirnya berhasil publikasi di jurnal Scopus setelah mengikuti workshop ini.
</p>
```

#### 6.2 (Optional) Tambah Testimoni Baru dengan Angka
Bisa tambah di array `testimonials` (Line 4-37):

```typescript
{
  id: "t5",
  name: "Dr. Siti Aminah, M.Sc.",
  role: "Dosen & Peneliti",
  content: "Sebelum ikut workshop ini, artikel saya ditolak 5 kali karena salah pilih jurnal. Setelah ikut workshop dan menerapkan metode yang diajarkan, artikel saya langsung diterima di jurnal Scopus Q3 dalam 3 bulan. Luar biasa!",
  rating: 5,
  image: "/testimonials/profile7.jpg"
}
```

---

## PHASE 7: BUAT STATEMENTPENUTUPSECTION (NEW)
**File:** `src/components/statement-penutup-section.tsx` (BARU)  
**Priority:** MEDIUM  
**Status:** Pending

### Konten Lengkap:

```typescript
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function StatementPenutupSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 mb-6">
          <Sparkles className="w-8 h-8 text-blue-300" />
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 font-bold leading-tight">
          Bayangkan 3 Bulan Ke Depan...
        </h2>

        {/* Body Text */}
        <div className="space-y-6 text-lg lg:text-xl text-blue-100 leading-relaxed mb-10">
          <p>
            Bayangkan 3 bulan ke depan, artikel Anda sudah <span className="text-white font-semibold">diterima di jurnal Scopus</span> yang tepat.
          </p>
          
          <p>
            Tidak ada lagi rasa <span className="text-red-300 font-medium">frustrasi</span> karena ditolak berkali-kali. 
            Tidak ada lagi waktu terbuang karena <span className="text-red-300 font-medium">trial-error</span> mencari jurnal. 
            Tidak ada lagi rasa was-was apakah jurnal yang dipilih adalah <span className="text-red-300 font-medium">predatory</span>.
          </p>
          
          <p>
            Anda sudah punya <span className="text-blue-300 font-semibold">sistem yang jelas</span> untuk memilih jurnal Scopus, 
            dan bisa langsung menerapkannya untuk artikel-artikel berikutnya.
          </p>
        </div>

        {/* Highlight Box */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/20">
          <p className="text-2xl lg:text-3xl font-bold text-white mb-2">
            Dan semuanya dimulai dari Anda, hari ini.
          </p>
          <p className="text-lg text-blue-200">
            Jangan biarkan artikel bagus Anda terus ditolak hanya karena salah memilih jurnal. 
            Kuasai strateginya sekarang, sebelum kesempatan publikasi berikutnya terlewat.
          </p>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          onClick={scrollToRegistration}
          className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-12 py-7 shadow-2xl hover:shadow-3xl transition-all font-bold"
        >
          Daftar Workshop Sekarang - HANYA Rp. 99.000
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        <p className="mt-6 text-sm text-blue-200">
          ⏰ Hanya untuk 50 pendaftar pertama atau sampai H-3 acara
        </p>
      </div>
    </section>
  );
}
```

---

## PHASE 8: UPDATE REGISTRATIONSECTION
**File:** `src/components/registration-section.tsx`  
**Priority:** MEDIUM  
**Status:** Pending

### Perubahan:

#### 8.1 Tambah Slot Counter (Sebelum Form Header, Line 145)
**Tambahkan setelah opening div form (sebelum Line 147):**

```typescript
{/* Slot Counter - Outside gradient header */}
<div className="bg-gradient-to-r from-red-50 to-orange-50 border-b-2 border-red-200 p-6">
  <div className="flex items-center justify-center gap-3">
    <Users className="w-6 h-6 text-red-600" />
    <div className="text-center">
      <p className="text-sm text-slate-600 mb-1">Sisa Slot Tersedia</p>
      <p className="text-2xl font-bold text-red-600">
        <span className="text-3xl">32</span> dari 50
      </p>
      <p className="text-xs text-slate-500 mt-1">
        Harga spesial Rp. 99.000 hanya untuk 50 pendaftar pertama!
      </p>
    </div>
  </div>
</div>
```

#### 8.2 Import Users Icon (Line 7)
Update:
```typescript
import { CheckCircle2, Calendar, Clock, MapPin, Gift, Loader2, Users } from "lucide-react";
```

---

## PHASE 9: UPDATE APP.TSX
**File:** `src/App.tsx`  
**Priority:** HIGH  
**Status:** Pending

### Perubahan:

#### 9.1 Import Komponen Baru (Line 2-7)
**Tambahkan:**
```typescript
import { SolutionSection } from "./components/solution-section";
import { SpecialOfferSection } from "./components/special-offer-section";
import { StatementPenutupSection } from "./components/statement-penutup-section";
```

#### 9.2 Update Order Komponen (Line 30-37)
**Dari:**
```typescript
<HeroSection />
<BenefitsSection />
<SpeakersSection />
<TestimonialsSection />
<RegistrationSection />
<Footer />
```

**Menjadi:**
```typescript
<HeroSection />
<SpeakersSection />
<SolutionSection />
<BenefitsSection />
<SpecialOfferSection />
<TestimonialsSection />
<StatementPenutupSection />
<RegistrationSection />
<Footer />
```

---

## RINGKASAN FILE CHANGES

### Files to MODIFY (5):
1. ✏️ `src/components/hero-section.tsx` - Update sub-headline & add hook
2. ✏️ `src/components/speakers-section.tsx` - Transform to personal format
3. ✏️ `src/components/benefits-section.tsx` - Update to emotional narrative
4. ✏️ `src/components/testimonials-section.tsx` - Update header
5. ✏️ `src/components/registration-section.tsx` - Add slot counter
6. ✏️ `src/App.tsx` - Reorder sections & import new components

### Files to CREATE (3):
7. ✨ `src/components/solution-section.tsx` - NEW
8. ✨ `src/components/special-offer-section.tsx` - NEW  
9. ✨ `src/components/statement-penutup-section.tsx` - NEW

---

## URUTAN EKSEKUSI

### Priority CRITICAL (Execute First):
1. **Phase 2:** Transform SpeakersSection
2. **Phase 3:** Create SolutionSection

### Priority HIGH:
3. **Phase 1:** Modify HeroSection
4. **Phase 5:** Create SpecialOfferSection

### Priority MEDIUM:
5. **Phase 4:** Modify BenefitsSection
6. **Phase 7:** Create StatementPenutupSection
7. **Phase 8:** Update RegistrationSection

### Priority LOW:
8. **Phase 6:** Modify TestimonialsSection

### Final:
9. **Phase 9:** Update App.tsx (import & reorder)

---

## TESTING CHECKLIST

Setelah implementasi, verify:

- [ ] Headline "Rahasia Memilih Jurnal Scopus..." TETAP tidak berubah
- [ ] Sub-headline menggunakan format personal dengan "Saya"
- [ ] SpeakersSection bio dalam format orang pertama
- [ ] Section "Mengapa Workshop Ini Berbeda?" muncul setelah speakers
- [ ] SolutionSection tampil dengan masalah → solusi → learning objectives
- [ ] BenefitsSection menggunakan narasi emosional (5 poin)
- [ ] SpecialOfferSection tampil dengan harga coret & bonus
- [ ] TestimonialsSection header updated
- [ ] StatementPenutupSection tampil dengan "Bayangkan..."
- [ ] RegistrationSection ada slot counter "X dari 50"
- [ ] Urutan section di App.tsx sesuai struktur baru
- [ ] Semua scroll-to-registration CTA berfungsi
- [ ] Responsive di mobile, tablet, desktop
- [ ] No console errors
- [ ] Styling konsisten dengan design system existing

---

## ESTIMASI WAKTU

- Phase 1: ~5 menit
- Phase 2: ~15 menit (CRITICAL)
- Phase 3: ~20 menit (CRITICAL, new component)
- Phase 4: ~10 menit
- Phase 5: ~20 menit (new component)
- Phase 6: ~3 menit
- Phase 7: ~15 menit (new component)
- Phase 8: ~5 menit
- Phase 9: ~3 menit

**Total: ~90-100 menit** (1.5 jam)

---

## NOTES PENTING

1. **Preserve Existing Functionality:**
   - Supabase registration flow tetap sama
   - Payment integration tidak berubah
   - Scroll behavior tetap smooth
   - Responsive design maintained

2. **Content Guidelines:**
   - Gunakan "Saya" bukan "Kami" (personal approach)
   - Fokus ke hasil akhir (results-oriented)
   - Relate dengan frustrasi user (emotional connection)
   - Angka konkret (500+, 3x lipat, 10 tahun)

3. **Design Consistency:**
   - Ikuti color palette existing (blue, indigo, purple)
   - Font sizes sesuai hierarchy existing
   - Spacing konsisten (py-16 lg:py-24 untuk sections)
   - Card shadows & borders sesuai design system

4. **Icon Usage:**
   - Import dari `lucide-react` sesuai existing pattern
   - Consistent sizing (w-5 h-5 untuk inline, w-6 h-6 untuk headers)

---

**Plan ini siap untuk dieksekusi. Setiap phase akan di-track dengan TODO list yang sudah dibuat.**

