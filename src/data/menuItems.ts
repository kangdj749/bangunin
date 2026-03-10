
export const menuItems = [
  { label: "Home", href: "/" },
  { 
    label: "Tentang Kami", 
    href: "/tentang",
    children: [
        { label: "Sinergi Profesionalisme", href: "/tentang#sinergi"},
        { label: "Visi Perusahaan", href: "/tentang#visi"},
        { label: "Legalitas Perusahaan", href: "/tentang#legalitas"},
        { label: "Arah Pertumbuhan", href: "/tentang#arah"},
    ]
},

  {
    label: "Layanan",
    href: "/layanan",
    children: [
      { label: "Penataan Ruang", href: "/layanan#penataan-ruang" },
      { label: "Arsitektur", href: "/layanan#arsitektur" },
      { label: "Rekayasa Teknik", href: "/layanan#rekayasa" },
      { label: "Topografi & Geoteknik", href: "/layanan#topogeo" },
      { label: "Sistem Kerja Profesional", href: "/layanan#sistem-kerja" },
    ],
  },
  { label: "Kontak", href: "/kontak" },
  { label: "Blog", href: "/blog" },
];