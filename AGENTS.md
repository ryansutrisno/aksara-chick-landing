# AGENTS.md - Aksara Chick

## 🎯 Tujuan
Project landing page untuk produk ayam potong premium. Dibangun dengan Astro 5.x SSG, deploy di Vercel.

---

## ⚡ Command Penting
| Command | Kegunaan |
|---------|----------|
| `npm run dev` | Jalankan server development lokal |
| `npm run build` | Build produksi statis ke folder `dist/` |
| `npm run preview` | Preview hasil build lokal |
| `npm run release` | Trigger semantic release & changelog |

---

## 🛠️ Stack Teknologi
- Astro 5.18.1 (Static Site Generator)
- Node.js >= 18, npm >= 9
- Semantic Release 24.2.7
- Vercel deployment

---

## 📂 Struktur Penting
```
src/
├── components/     # Semua komponen UI (Navbar, StickyWA, MetaPixel)
├── data/copy.ts    # SEMUA konten teks disini (single source of truth)
└── utils/wa.ts     # Generator link WhatsApp
```

---

## ✅ Konvensi & Aturan
1. **JANGAN hardcode teks**: Semua konten disimpan terpusat di `src/data/copy.ts`
2. **Mobile-first**: Semua desain diprioritaskan untuk layar hp
3. **Modular**: Setiap fitur jadi komponen sendiri
4. **Tidak ada lint/test**: Repo ini tidak punya setup eslint, biome, atau unit test

---

## 🚀 CI/CD & Deploy
- **GitHub Actions**: `release.yml` otomatis run di push `main`
- Langkah CI: Checkout → Setup Node 20 → Install → Build → Semantic Release
- Izin diperlukan: write `contents`, `issues`, `pull_requests`
- Deploy otomatis ke Vercel setiap merge main

---

## ⚠️ Quirks & Catatan Khusus
- Site URL dinamis dari environment variable Vercel
- Widget WhatsApp sticky selalu aktif di semua halaman
- Meta Pixel tracking terintegrasi default
- Semua halaman static generate di build time (tidak ada SSR)
- Clean URL otomatis via `vercel.json`
