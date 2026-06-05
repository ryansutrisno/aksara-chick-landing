# 🍗 Aksara Chick

Selamat datang di repository landing page resmi **Aksara Chick**, sebuah produk ayam goreng krispi pilihan. Situs ini dikembangkan menggunakan [Astro](https://astro.build) untuk menjamin performa maksimal dan di-host melalui ekosistem serverless [Vercel](https://vercel.com).

## ✨ Fitur

## ✨ Keunggulan Teknis

- 🚀 **Performa Tinggi** - Dibuat menggunakan framework Astro yang berfokus pada kecepatan (Static Site Generation).
- 🎨 **Modular Design** - Menggunakan arsitektur berbasis komponen agar kode lebih rapi dan dapat digunakan ulang.
- 📱 **Mobile-First** - Antarmuka yang dioptimalkan untuk berbagai ukuran layar.
- 🎭 **Animasi Interaktif** - Dilengkapi animasi *scroll reveal* menggunakan IntersectionObserver.
- 📊 **Manajemen Konten** - Copywriting dan data tersimpan pada file tersendiri (`copy.ts`), sehingga mudah diperbarui.
- 🔄 **Otomatisasi Rilis** - Implementasi CI/CD dengan GitHub workflows dan `semantic-release`.
- 🔍 **Ad Tracking** - Terintegrasi dengan Meta Pixel (Facebook Pixel) untuk kebutuhan pemasaran dan tracking konversi.
- 💬 **Integrasi WhatsApp** - Widget pemesanan via WhatsApp yang *sticky* (selalu terlihat) agar customer mudah bertransaksi.
- ☁️ **Deployment Praktis** - Konfigurasi mulus untuk rilis instan via Vercel.

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Astro](https://astro.build) | 5.x | Framework utama |
| TypeScript | Built-in | Type safety |
| Semantic Release | 24.x | Automated versioning & changelog generation |

## 📁 Project Structure

```text
aksara-chick/
├── .github/
│   └── workflows/
│       └── release.yml      # Auto release & changelog action
├── src/
│   ├── components/
│   │   ├── layout/          # Layout components
│   │   │   ├── Navbar.astro
│   │   │   ├── Footer.astro
│   │   │   └── StickyWA.astro
│   │   ├── sections/        # Page sections
│   │   │   ├── Hero.astro
│   │   │   ├── Location.astro
│   │   │   └── ProductCards.astro
│   │   └── shared/          # Shared components
│   │       ├── MetaPixel.astro  # Meta Pixel ad tracking
│   │       └── ScrollReveal.astro
│   ├── data/                # Data & copywriting
│   │   └── copy.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── styles/
│   │   └── global.css       # Global styles
│   ├── utils/
│   │   └── wa.ts            # Utility functions (e.g. WhatsApp URL generator)
│   └── pages/
│       └── index.astro      # Main page
├── public/                  # Static assets
├── .env.example             # Contoh environment variables
├── astro.config.mjs         # Astro config
├── package.json
└── vercel.json              # Vercel deployment config
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

```bash
# Development server dengan hot reload
npm run dev

# Buka aplikasi di browser
open http://localhost:4321
```
