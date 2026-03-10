"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[rgb(var(--color-dark))] text-[rgb(var(--color-white))] border-t border-[rgb(var(--color-secondary))]/20">

      <div className="container-main section-tight">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-x-8">

          {/* Brand */}
          <div className="space-y-3 max-w-xs">
            <h3 className="text-[15px] font-semibold tracking-[0.4px]">
              BANGUN.IN
            </h3>

            <p className="text-[12px] leading-[1.6] text-[rgb(var(--color-muted))]">
              Konsultan arsitektur, rekayasa teknik, dan manajemen konstruksi
              terintegrasi untuk proyek profesional berstandar regulasi nasional.
            </p>
          </div>

          {/* Layanan */}
          <div className="space-y-3">
            <h4 className="text-[9px] uppercase tracking-[1.8px] text-[rgb(var(--color-muted))]">
              Layanan
            </h4>

            <ul className="space-y-2 text-[12px]">
              <li>
                <Link
                  href="/layanan#penataan-ruang"
                  className="text-[rgb(var(--color-white))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300"
                >
                  Penataan Ruang
                </Link>
              </li>

              <li>
                <Link
                  href="/layanan#arsitektur"
                  className="text-[rgb(var(--color-white))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300"
                >
                  Arsitektur
                </Link>
              </li>

              <li>
                <Link
                  href="/layanan#rekayasa"
                  className="text-[rgb(var(--color-white))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300"
                >
                  Rekayasa Teknik
                </Link>
              </li>

              <li>
                <Link
                  href="/layanan#topografi"
                  className="text-[rgb(var(--color-white))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300"
                >
                  Topografi & Geoteknik
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div className="space-y-3">
            <h4 className="text-[9px] uppercase tracking-[1.8px] text-[rgb(var(--color-muted))]">
              Kontak
            </h4>

            <div className="space-y-2 text-[12px] leading-[1.6] text-[rgb(var(--color-muted))]">
              <p>Jakarta Barat, Indonesia</p>
              <p>Telp: (+62) 877-6550-5935</p>
              <p>Email: bangunciptasolusi01@gmail.com</p>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <h4 className="text-[9px] uppercase tracking-[1.8px] text-[rgb(var(--color-muted))]">
              Konsultasi
            </h4>

            <Link
              href="/kontak#consultation-form"
              className="
                inline-flex
                items-center
                justify-center
                px-5
                py-2
                text-[10.5px]
                font-medium
                tracking-[1px]
                uppercase
                rounded-[var(--radius-sm)]
                border
                border-[rgb(var(--color-primary))]
                text-[rgb(var(--color-white))]
                transition-all
                duration-300
                hover:bg-[rgb(var(--color-primary))]
                hover:-translate-y-[1px]
              "
            >
              Ajukan Konsultasi
            </Link>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-10 h-px bg-[rgb(var(--color-secondary))]/20" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[10.5px] text-[rgb(var(--color-muted))] tracking-[0.3px]">

          <p>
            © {new Date().getFullYear()} PT Bangun Cipta Solusi.
            Seluruh hak dilindungi.
          </p>

          <div className="flex gap-5">
            <Link
              href="/kebijakan-privasi"
              className="hover:text-[rgb(var(--color-white))] transition-colors duration-300"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/syarat-ketentuan"
              className="hover:text-[rgb(var(--color-white))] transition-colors duration-300"
            >
              Syarat & Ketentuan
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}