"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function ClosingCTA() {
  const backgroundImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774021753/masjid_unjani_v20_zhdjue.jpg";

  return (
    <section className="relative overflow-hidden border-t border-[rgb(var(--color-border))]">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={cloudinaryImage(backgroundImage, "banner")}
          alt="Professional Engineering Consultation"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/70" />

      {/* Content */}
      <div className="relative z-10 section-tight">
        <div className="container-main">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[560px] py-6"
          >

            {/* Micro Label */}
            <p className="caption text-[rgb(var(--color-white))]/70 uppercase tracking-[1.8px] mb-3">
              Konsultasi Profesional
            </p>

            {/* Headline */}
            <h2 className="h2 text-[rgb(var(--color-white))] mb-4">
              Mitra Strategis untuk Proyek Arsitektur & Rekayasa Anda
            </h2>

            {/* Description */}
            <p className="body text-[rgb(var(--color-white))]/85 mb-7 max-w-[520px]">
              Pendekatan terintegrasi dalam perencanaan, pengawasan, dan
              manajemen konstruksi untuk memastikan setiap proyek berjalan
              presisi, efisien, dan sesuai regulasi.
            </p>

            {/* CTA */}
            <a
              href="/kontak"
              className="btn btn-primary-dark"
            >
              Ajukan Konsultasi
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}