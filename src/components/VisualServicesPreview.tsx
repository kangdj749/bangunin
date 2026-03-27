"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

type Service = {
  title: string;
  slug: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Penataan Ruang",
    slug: "penataan-ruang",
    description:
      "Perencanaan tata ruang berbasis regulasi, data spasial, dan keberlanjutan kawasan.",
    image:
      "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773544179/tataruang1_wkdygs.png",
  },
  {
    title: "Arsitektur",
    slug: "arsitektur",
    description:
      "Desain kontekstual, fungsional, dan berkelanjutan untuk berbagai jenis bangunan.",
    image:
      "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773533548/kantor2_ea9zdw.png",
  },
  {
    title: "Rekayasa Teknik",
    slug: "rekayasa-teknik",
    description:
      "Solusi struktur, infrastruktur, dan MEP yang terintegrasi dan presisi.",
    image:
      "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773561465/rekayasa_d37iob.png",
  },
  {
    title: "Topografi & Geoteknik",
    slug: "topografi-geoteknik",
    description:
      "Survey lahan dan investigasi tanah berbasis data untuk keputusan teknis yang akurat.",
    image:
      "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773561867/topografi_lkvr8d.png",
  },
];

export default function ServicesHomeSection() {
  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* ================= HEADER ================= */}
        <div className="max-w-[560px] mb-12">

          <p className="caption-label text-[rgb(var(--color-primary))]/70 mb-3">
            Layanan Utama
          </p>

          <div className="w-10 h-[1px] bg-[rgb(var(--color-primary))] mb-5" />

          <h2 className="h2 mb-4">
            Solusi Terintegrasi untuk Setiap Tahapan Proyek
          </h2>

          <p className="body text-muted">
            Dari perencanaan kawasan hingga investigasi teknis, kami
            menghadirkan layanan yang saling terhubung untuk memastikan
            setiap keputusan berbasis data, presisi, dan dapat
            dipertanggungjawabkan.
          </p>

        </div>

        {/* ================= GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                href={`/layanan/${service.slug}`}
                className="group block h-full"
              >
                <div className="relative h-full rounded-[var(--radius-lg)] border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] overflow-hidden transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[var(--shadow-elevated)] hover:border-[rgb(var(--color-border-strong))]">

                  {/* IMAGE */}
                  <div className="relative h-[140px] overflow-hidden">
                    <Image
                      src={cloudinaryImage(service.image, "card")}
                      alt={service.title}
                      fill
                      sizes="(max-width:768px) 100vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.06]"
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/20 group-hover:bg-[rgb(var(--color-dark))]/30 transition duration-300" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 flex flex-col h-[calc(100%-140px)]">

                    <h3 className="h3 mb-2 leading-snug transition-all duration-300 group-hover:text-primary">
                      {service.title}
                    </h3>

                    <p className="caption text-muted mb-4">
                      {service.description}
                    </p>

                    {/* subtle arrow */}
                    <div className="mt-auto flex items-center gap-2 text-[11px] font-medium text-[rgb(var(--color-primary))] opacity-0 group-hover:opacity-100 transition duration-300">
                      Pelajari lebih lanjut
                      <span className="transform group-hover:translate-x-1 transition">
                        →
                      </span>
                    </div>

                  </div>

                </div>
              </Link>
            </motion.div>
          ))}

        </div>

        {/* ================= CTA ================= */}
        <div className="mt-14 text-center">

          <Link
            href="/layanan"
            className="btn btn-outline hover:scale-[1.02] active:scale-[0.98]"
          >
            Jelajahi Seluruh Layanan
          </Link>

        </div>

      </div>
    </section>
  );
}