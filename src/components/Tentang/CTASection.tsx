"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="section-tight bg-[rgb(var(--color-surface))]">
      <div className="container-main">

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="
            border border-[rgb(var(--color-border))]
            rounded-[var(--radius-lg)]
            px-5 py-8
            bg-[rgb(var(--color-soft))]
            shadow-[var(--shadow-soft)]
            text-center
          "
        >

          {/* Label */}
          <p className="text-[11px] tracking-[0.12em] uppercase text-[rgb(var(--color-muted))] mb-2">
            Konsultasi Proyek
          </p>

          {/* Headline */}
          <h2 className="text-[16px] sm:text-[18px] font-semibold mb-3 text-[rgb(var(--color-primary))]">
            Diskusikan Kebutuhan Proyek Anda
          </h2>

          {/* Supporting Text */}
          <p className="text-[12px] leading-[1.6] text-[rgb(var(--color-muted))] max-w-md mx-auto mb-6">
            Tim kami siap membantu Anda merencanakan dan merealisasikan proyek
            konstruksi secara profesional, terukur, dan sesuai regulasi yang berlaku.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">

            <a href="#contact" className="btn-primary">
              Jadwalkan Diskusi
            </a>

            <a href="#portfolio" className="btn-outline">
              Lihat Portofolio
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}