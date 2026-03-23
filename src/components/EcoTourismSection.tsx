"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EcoTourismSection() {
  const image =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773544180/tataruang2_dptigc.png"; // ganti nanti landscape alam ya beb

  const points = [
    "Menjaga keaslian dan karakter lingkungan",
    "Menghadirkan pengalaman wisata yang berkualitas",
    "Meningkatkan nilai ekonomi kawasan",
    "Mendukung keberlanjutan jangka panjang",
  ];

  return (
    <section className="section bg-[rgb(var(--color-bg))]">

      <div className="container-main">

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[260px] md:h-[380px] rounded-[var(--radius-lg)] overflow-hidden"
          >
            <Image
              src={cloudinaryImage(image, "lcp")}
              alt="Perencanaan Ekowisata"
              fill
              className="object-cover"
            />

            {/* subtle overlay */}
            <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/10" />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-[520px]"
          >

            {/* Label */}
            <p className="caption mb-3">
              Ekowisata
            </p>

            {/* Title */}
            <h2 className="h2 mb-4">
              Perencanaan Ekowisata yang Berkelanjutan dan Bernilai
            </h2>

            {/* Description */}
            <p className="body text-[rgb(var(--color-muted))] mb-6">
              Kami merancang kawasan ekowisata yang tidak hanya menarik secara visual,
              tetapi juga menjaga keseimbangan antara potensi ekonomi, pelestarian lingkungan,
              dan pemberdayaan masyarakat lokal.
            </p>

            {/* Supporting */}
            <p className="body text-[rgb(var(--color-subtle))] mb-6">
              Setiap kawasan dirancang untuk menghadirkan nilai yang berkelanjutan melalui
              pendekatan yang terintegrasi dan berbasis konteks.
            </p>

            {/* Points */}
            <div className="grid gap-3 mb-7">
              {points.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[rgb(var(--color-primary))]" />
                  <p className="text-[13px] leading-[1.6]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

             {/* CTA */}
            <Link
              href="/layanan/ekowisata"
              className="btn btn-outline
                "
            >
              Lihat Detail Perencanaan
            </Link>  
          </motion.div>

        </div>

      </div>
    </section>
  );
}