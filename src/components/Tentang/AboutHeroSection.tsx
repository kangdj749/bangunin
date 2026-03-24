"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function HeroAboutSection() {
  const heroImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773537420/kost1_clr806.png";

  return (
    <section className="relative min-h-[380px] md:min-h-[480px] flex items-center overflow-hidden">

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

      {/* Overlay (lebih premium & subtle) */}
      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/50" />

      {/* Depth gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgb(var(--color-dark))]/20 to-[rgb(var(--color-dark))]/40" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[rgb(var(--color-bg))]" />

      <div className="container-main relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[560px]"
        >

          {/* Eyebrow */}
          <p className="text-[10px] tracking-[1.6px] uppercase font-medium text-[rgb(var(--color-white))]/70 mb-3">
            Tentang Perusahaan
          </p>

          {/* Divider */}
          <div className="w-10 h-[2px] bg-[rgb(var(--color-primary))] mb-4" />

          {/* Heading */}
          <h1 className="h1 text-[rgb(var(--color-white))] mb-3">
            Membangun Fondasi
            <span className="block">
              Keunggulan Profesional
            </span>
          </h1>

          {/* Subheadline */}
          <p className="body text-[rgb(var(--color-white))]/80 max-w-[480px]">
            Integrasi arsitektur, rekayasa teknik, dan manajemen konstruksi 
            dalam satu sistem kerja profesional dan terstruktur.
          </p>

        </motion.div>

      </div>
    </section>
  );
}