"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
        bg-[rgb(var(--color-dark))]
        text-[rgb(var(--color-white))]
        border-t border-[rgb(var(--color-secondary))]/20
      "
    >
      <div className="container-main section-tight">

        {/* Top Grid */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
          gap-y-8 md:gap-x-10
        ">

          {/* Brand */}
          <div className="space-y-3 max-w-[260px]">

            <h3 className="
              text-[14px] md:text-[15px]
              font-semibold
              tracking-[0.4px]
              text-[rgb(var(--color-white))]
            ">
              BANGUN.IN
            </h3>

            <p className="
              text-[12px]
              leading-[1.65]
              text-[rgb(var(--color-white))]/75
            ">
              Konsultan arsitektur, rekayasa teknik, dan manajemen konstruksi
              terintegrasi untuk proyek profesional berstandar regulasi nasional.
            </p>

          </div>

          {/* Layanan */}
          <div className="space-y-3">

            <h4 className="
              text-[10px]
              uppercase
              tracking-[1.6px]
              text-[rgb(var(--color-white))]/50
            ">
              Layanan
            </h4>

            <ul className="
              space-y-2
              text-[12.5px]
              leading-[1.6]
            ">
              {[
                { label: "Penataan Ruang", href: "/penataanruang" },
                { label: "Arsitektur", href: "/layanan#arsitektur" },
                { label: "Rekayasa Teknik", href: "/layanan#rekayasa" },
                { label: "Topografi & Geoteknik", href: "/layanan#topografi" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="
                      text-[rgb(var(--color-white))]/80
                      transition-colors duration-200
                      hover:text-[rgb(var(--color-primary))]
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Kontak */}
          <div className="space-y-3">

            <h4 className="
              text-[10px]
              uppercase
              tracking-[1.6px]
              text-[rgb(var(--color-white))]/50
            ">
              Kontak
            </h4>

            <div className="
              space-y-2
              text-[12.5px]
              leading-[1.65]
              text-[rgb(var(--color-white))]/75
            ">
              <p>Jakarta Barat, Indonesia</p>
              <p>Telp: (+62) 877-6550-5935</p>
              <p>Email: bangunciptasolusi01@gmail.com</p>
            </div>

          </div>

          {/* CTA */}
          <div className="space-y-3">

            <h4 className="
              text-[10px]
              uppercase
              tracking-[1.6px]
              text-[rgb(var(--color-white))]/50
            ">
              Konsultasi
            </h4>

            <Link
              href="/kontak#consultation-form"
              className="
                inline-flex items-center justify-center

                px-4 py-2
                text-[12px]
                font-medium
                tracking-[0.4px]

                rounded-[var(--radius-sm)]

                border border-[rgb(var(--color-white))]/30
                text-[rgb(var(--color-white))]

                transition-all duration-200

                hover:bg-[rgb(var(--color-white))]
                hover:text-[rgb(var(--color-dark))]
                hover:border-[rgb(var(--color-white))]
              "
            >
              Ajukan Konsultasi
            </Link>

          </div>

        </div>

        {/* Divider */}
        <div className="mt-10 h-px bg-[rgb(var(--color-white))]/10" />

        {/* Bottom */}
        <div className="
          mt-6
          flex flex-col md:flex-row
          items-center justify-between
          gap-3

          text-[11px]
          text-[rgb(var(--color-white))]/60
          tracking-[0.3px]
        ">

          <p>
            © {new Date().getFullYear()} PT Bangun Cipta Solusi.
            Seluruh hak dilindungi.
          </p>

          <div className="flex gap-5">
            <Link
              href="/kebijakan-privasi"
              className="
                transition-colors duration-200
                hover:text-[rgb(var(--color-white))]
              "
            >
              Kebijakan Privasi
            </Link>

            <Link
              href="/syarat-ketentuan"
              className="
                transition-colors duration-200
                hover:text-[rgb(var(--color-white))]
              "
            >
              Syarat & Ketentuan
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}