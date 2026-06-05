export const brand = {
  name: 'Aksara Chick',
  tagline: 'Ayam Goreng Krispi Terbaik',
  description: 'Nikmati kelezatan ayam goreng krispi dengan bumbu rahasia khas Aksara Chick. Renyah di luar, juicy di dalam — cocok untuk semua momen!',
} as const;

export const meta = {
  title: 'Aksara Chick — Ayam Goreng Krispi Terbaik',
  description: 'Nikmati kelezatan ayam goreng krispi dengan bumbu rahasia khas Aksara Chick. Renyah di luar, juicy di dalam. Pesan sekarang via WhatsApp!',
  image: '/og-image.webp',
  imageAlt: 'Aksara Chick - Ayam Goreng Krispi Terbaik',
} as const;

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  waMessage: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 'ayam-geprek',
    name: 'Ayam Geprek',
    description: 'Ayam goreng krispi digeprek dengan sambal bawang pedas nampol. Level pedas bisa disesuaikan.',
    price: 'Rp 15.000',
    image: '/images/chicken-geprek.webp',
    waMessage: 'Halo, saya mau pesan Ayam Geprek',
  },
  {
    id: 'nasi-box',
    name: 'Nasi Box Ayam Crispy',
    description: 'Paket hemat nasi putih hangat dengan ayam goreng krispi renyah dalam box eksklusif Aksara Chick.',
    price: 'Rp 18.000',
    image: '/images/chicken-original.webp',
    waMessage: 'Halo, saya mau pesan Nasi Box Ayam Crispy',
  },
  {
    id: 'chicken-popcorn',
    name: 'Chicken Popcorn',
    description: 'Potongan ayam bite-size yang digoreng krispi sempurna. Cocok untuk camilan bersama teman!',
    price: 'Rp 12.000',
    image: '/images/popcorn-chicken.webp',
    waMessage: 'Halo, saya mau pesan Chicken Popcorn',
  },
  {
    id: 'snack-sticks',
    name: 'Snack Sticks',
    description: 'Stik ayam renyah berbalut keju leleh di dalamnya. Camilan favorit yang bikin nagih!',
    price: 'Rp 10.000',
    image: '/images/chicken-cruncy-roll.webp',
    waMessage: 'Halo, saya mau pesan Snack Sticks',
  },
];

export const location = {
  address: 'The kunyah food galeri (samping SMPIT Al-Irsyad) Karawang',
  hours: 'Setiap Hari, 10:00 - 22:00 WIB',
  mapsUrl: 'https://maps.app.goo.gl/dKioM9q3GFkJThLX9',
  mapsEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3965.6881602222793!2d107.29150069!3d-6.30464006!3m2!1i1024!2i768!4f13.1!2m1!1sThe%20kunyah%20Food%20Galery!5e0!3m2!1sid!2sid!4v1780642326073!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
} as const;

export const socials = {
  instagram: 'https://instagram.com/aksarachick',
  tiktok: 'https://tiktok.com/@aksarachick',
} as const;

export const nav = {
  ctaLabel: 'Pesan Sekarang',
  waMessage: 'Halo Aksara Chick, saya mau pesan!',
} as const;

export const hero = {
  headline: 'Renyah di Luar,',
  headlineAccent: 'Juicy di Dalam!',
  subtitle: 'Ayam goreng krispi dengan bumbu rahasia khas Aksara Chick. Dibuat fresh setiap hari untuk kelezatan maksimal.',
  ctaLabel: 'Pesan via WhatsApp',
  ctaMessage: 'Halo Aksara Chick, saya mau pesan!',
  secondaryCta: 'Lihat Menu',
} as const;

export const stickyWA = {
  label: 'Chat WhatsApp',
  ariaLabel: 'Hubungi kami via WhatsApp',
  waMessage: 'Halo Aksara Chick, saya ingin bertanya.',
} as const;

export const footer = {
  tagline: 'Aksara Chick — Ayam Goreng Krispi Terbaik',
  copyright: `© ${new Date().getFullYear()} Aksara Chick. All rights reserved.`,
  credit: 'Made with ❤️ <a href="http://trazmedia.com" target="_blank" rel="noopener noreferrer">Trazmedia</a>',
} as const;
