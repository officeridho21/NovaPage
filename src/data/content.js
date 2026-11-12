// ============================================================
//  Semua teks & kontak website ada di file ini.
//  Ganti nomor WhatsApp / email di bagian SITE di bawah.
// ============================================================

export const SITE = {
  name: 'NovaPage',
  tagline: 'Modern Web Development',
  whatsapp: '628989209979',
  whatsappMessage: 'Halo NovaPage, saya ingin membuat website untuk usaha saya.',
}

export const waLink = (msg = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`

export const NAV = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Kenapa Kami', href: '#kenapa' },
  { label: 'Kontak', href: '#kontak' },
]

export const HERO = {
  eyebrow: 'NovaPage — Modern Web Development',
  title: 'Usaha Kamu Belum Punya Website?',
  text: 'Hadirkan identitas digital yang profesional, cepat, dan responsif, dirancang khusus untuk kebutuhan bisnismu. Wujudkan bersama NovaPage.',
  cta: 'Mulai sekarang',
  stats: [
    { value: '4', label: 'Layanan website' },
    { value: '100%', label: 'Responsif di semua perangkat' },
    { value: '3', label: 'Prinsip kerja utama' },
    { value: '0', label: 'Template instan' },
  ],
}

export const ABOUT = {
  label: 'Tentang NovaPage',
  statement:
    'Lebih dari sekadar website. Kami mengubah kebutuhan bisnis menjadi pengalaman digital yang jelas, modern, dan relevan.',
  text: 'Website adalah bagian dari bagaimana bisnis Anda dikenali, dipercaya, dan ditemukan. Kami membantu mengubah kebutuhan bisnis menjadi pengalaman digital yang jelas, modern, dan relevan.',
  cta: 'Pelajari lebih lanjut',
  pillars: [
    { title: 'Purposeful Design', text: 'Setiap elemen hadir dengan alasan yang jelas.' },
    { title: 'Responsive by Default', text: 'Pengalaman yang bekerja alami di semua perangkat.' },
    { title: 'Business First', text: 'Keputusan desain mendukung tujuan bisnis Anda.' },
  ],
}

export const WORKS = [
  'Landing Page',
  'Company Profile',
  'Undangan Digital',
  'Kartu Digital',
  'Portfolio',
  'Business Website',
]

export const QUICK = [
  { title: 'Layanan kami', text: 'Lihat solusi website yang kami siapkan untuk bisnismu.', href: '#layanan', icon: 'layers' },
  { title: 'Kenapa NovaPage', text: 'Kenali cara kami bekerja dan apa yang kami utamakan.', href: '#kenapa', icon: 'sparkles' },
  { title: 'Hubungi kami', text: 'Ceritakan kebutuhanmu, mari wujudkan bersama.', href: '#kontak', icon: 'phone', dark: true },
]

export const SERVICES = {
  label: 'Layanan Kami',
  title: 'Solusi website yang dirancang mengikuti kebutuhan dan karakter bisnis Anda.',
  items: [
    { no: '01', title: 'Landing Page', text: 'Website yang fokus pada penyampaian produk, layanan, campaign, atau ide secara jelas.', icon: 'rocket' },
    { no: '02', title: 'Company Profile', text: 'Website profesional untuk memperkuat kredibilitas dan kehadiran digital bisnis.', icon: 'building' },
    { no: '03', title: 'Business Website', text: 'Website modern yang dibangun mengikuti kebutuhan bisnis dan pengalaman pengguna.', icon: 'briefcase' },
    { no: '04', title: 'Custom Web Development', text: 'Pengembangan website khusus berdasarkan kebutuhan dan alur kerja spesifik.', icon: 'code' },
  ],
}

export const WHY = {
  label: 'Kenapa NovaPage',
  title: 'Website yang Dibangun dengan Tujuan.',
  text: 'Kami percaya website yang baik lahir dari pemahaman — terhadap bisnis, audiens, dan tujuan Anda. Bukan dari template.',
  items: [
    { no: '01', title: 'Purposeful Design', text: 'Setiap keputusan visual mengikuti tujuan — bukan tren sesaat.', icon: 'target' },
    { no: '02', title: 'Responsive by Default', text: 'Dirancang dan diuji untuk bekerja alami di setiap perangkat.', icon: 'smartphone' },
    { no: '03', title: 'Business First', text: 'Website yang mengedepankan hasil nyata untuk bisnis Anda.', icon: 'trending' },
  ],
}

export const CTA = {
  title: 'Usaha Kamu Belum Punya Website?',
  text: 'Hadirkan identitas digital yang profesional, cepat, dan responsif, dirancang khusus untuk kebutuhan bisnismu. Wujudkan bersama NovaPage.',
  button: 'Konsultasi via WhatsApp',
}
