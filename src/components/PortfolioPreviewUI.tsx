"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import type { Portfolio } from "@/types/portfolio";

// ==============================
// TYPES
// ==============================
interface Props {
  projects: Portfolio[];
}

// ==============================
// ANIMATION
// ==============================
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

// ==============================
// COMPONENT
// ==============================
export default function PortfolioPreviewUI({ projects }: Props) {
  return (
    <section className="section bg-[rgb(var(--color-surface))]">
      <div className="container-main">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

          <div className="max-w-[520px]">
            <p className="caption-label text-primary mb-3">
              Portofolio
            </p>

            <h2 className="h2 mb-3">
              Proyek Nyata, Solusi Terukur
            </h2>

            <p className="body text-muted">
              Kami menghadirkan solusi desain dan rekayasa berbasis pengalaman
              nyata di berbagai sektor — dari bangunan publik hingga infrastruktur.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="btn btn-outline hover:translate-y-[-1px]"
          >
            Lihat Semua Proyek
          </Link>

        </div>

        {/* ================= GRID ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {projects.map((itemData) => (
            <motion.div key={itemData.slug} variants={item}>
              <Link
                href={`/portfolio/${itemData.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))] transition-all duration-300 hover:shadow-[var(--shadow-medium)] hover:border-[rgb(var(--color-border-strong))]">

                  {/* IMAGE */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={cloudinaryImage(
                        itemData.cover_image,
                        "card"
                      )}
                      alt={itemData.title}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.06]"
                    />

                    {/* overlay hover */}
                    <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/0 group-hover:bg-[rgb(var(--color-dark))]/10 transition duration-300" />

                    {/* gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[rgb(var(--color-dark))]/70 to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4">

                    <p className="caption mb-1">
                      {itemData.location} • {itemData.year}
                    </p>

                    <h3 className="h3 leading-snug transition-all duration-300 group-hover:text-primary">
                      {itemData.title}
                    </h3>

                    {/* micro interaction */}
                    <div className="mt-3 h-[1px] w-6 bg-[rgb(var(--color-primary))] transition-all duration-300 group-hover:w-12" />

                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}