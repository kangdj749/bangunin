"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function CompanyPositioningSection() {
  const positioningImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773565282/sinergy_l0dwjh.jpg"; // ganti sesuai foto tim diskusi / site visit

  return (
    <section id="sinergi" className="relative py-10 md:py-20 bg-[rgb(var(--color-bg))] overflow-hidden">

      <div className="container-main flex flex-col md:flex-row items-center gap-8 md:gap-12">

        {/* Image */}
        <div className="relative w-full md:w-1/2 h-[220px] md:h-[280px] rounded-xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]">
          <Image
            src={cloudinaryImage(positioningImage, "banner")}
            alt="Tim diskusi teknis / site visit"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/25" />
        </div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          {/* Headline */}
          <h2 className="text-[20px] md:text-[26px] font-semibold leading-[1.35] tracking-[0.2px] text-[rgb(var(--color-primary))] mb-4">
            Sinergi Profesionalisme untuk Pembangunan Bangsa
          </h2>

          {/* Paragraphs */}
          <p className="text-[12px] md:text-[13px] leading-[1.65] text-[rgb(var(--color-text))]/85 mb-3">
            PT. Bangun Cipta Solusi didirikan sebagai pusat kolaborasi tenaga ahli arsitektur dan rekayasa teknik yang berkomitmen menghadirkan solusi terukur, akuntabel, dan berkelanjutan.
          </p>

          <p className="text-[12px] md:text-[13px] leading-[1.65] text-[rgb(var(--color-text))]/85">
            Sinergi antara profesional muda adaptif dan senior berpengalaman menjadi kekuatan utama dalam setiap proyek yang kami tangani.
          </p>
        </motion.div>

      </div>
    </section>
  );
}