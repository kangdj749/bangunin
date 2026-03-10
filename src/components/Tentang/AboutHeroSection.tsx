"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function HeroAboutSection() {
  const heroImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg"; // ganti dengan foto tim meeting / blueprint

  return (
    <section className="relative min-h-[360px] md:min-h-[460px] flex items-center overflow-hidden bg-[rgb(var(--color-bg))]">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={cloudinaryImage(heroImage, "banner")}
          alt="Tim profesional berdiskusi proyek arsitektur"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Clean Overlay (lebih ringan & premium) */}
      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/45" />

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[rgb(var(--color-bg))]" />

      <div className="container-main relative z-10 py-12 md:py-16">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[520px]"
        >
          {/* Micro Label */}
          <p className="text-[9px] tracking-[1.6px] uppercase font-medium text-[rgb(var(--color-white))]/70 mb-3">
            Tentang Perusahaan
          </p>

          {/* Headline */}
          <h1 className="
            text-[18px] 
            md:text-[26px] 
            font-semibold 
            leading-[1.35] 
            tracking-[0.2px] 
            text-[rgb(var(--color-white))] 
            mb-4
          ">
            Membangun Fondasi
            <span className="block">
              Keunggulan Profesional
            </span>
          </h1>

          {/* Subheadline */}
          <p className="
            text-[11px] 
            md:text-[13px] 
            leading-[1.65] 
            text-[rgb(var(--color-white))]/80
          ">
            Integrasi arsitektur, rekayasa teknik, dan manajemen konstruksi 
            dalam satu sistem kerja profesional dan terstruktur.
          </p>

        </motion.div>
      </div>
    </section>
  );
}