"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { motion } from "framer-motion";

export default function HeroSection() {
  const heroImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg";

  return (
    <section className="relative min-h-[460px] md:min-h-[600px] flex items-center overflow-hidden bg-[rgb(var(--color-bg))]">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={cloudinaryImage(heroImage, "banner")}
          alt="Architecture Engineering Construction"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Clean Dark Overlay (lebih natural) */}
      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/55" />

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[rgb(var(--color-bg))]" />

      <div className="container-main relative z-10 py-14 md:py-20">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[480px]"
        >

          {/* Micro Label */}
          <p className="text-[9px] tracking-[1.8px] uppercase font-medium text-[rgb(var(--color-white))]/70 mb-3">
            Engineering Consultant
          </p>

          {/* Headline */}
          <h1 className="text-[20px] md:text-[30px] font-semibold leading-[1.32] tracking-[0.2px] text-[rgb(var(--color-white))] mb-4">
            Integrated Architecture,
            <span className="block">
              Engineering & Construction
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-[12px] md:text-[13px] leading-[1.65] text-[rgb(var(--color-white))]/80 mb-6">
            Konsultan teknik independen yang menghadirkan solusi terintegrasi 
            untuk perencanaan, desain, dan manajemen konstruksi secara profesional.
          </p>

          {/* CTA */}
          <div className="flex gap-3">

            {/* Primary */}
            <button
              className="
                px-5 py-2
                text-[11px]
                font-medium
                rounded-[var(--radius-sm)]
                bg-[rgb(var(--color-primary))]
                text-[rgb(var(--color-white))]
                transition-all duration-200
                hover:bg-[rgb(var(--color-primary))]/90
              "
            >
              
              <a href="/kontak#consultation-form">Konsultasi</a>
            </button>

            {/* Secondary */}
            <button
              className="
                px-5 py-2
                text-[11px]
                font-medium
                rounded-[var(--radius-sm)]
                border
                border-[rgb(var(--color-white))]/35
                text-[rgb(var(--color-white))]
                transition-all duration-200
                hover:bg-[rgb(var(--color-white))]/10
              "
            >
              Portofolio
            </button>

          </div>

        </motion.div>
      </div>

    </section>
  );
}