"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { heroSlides } from "./HeroSlide";

export default function HeroPremium() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      6500
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[460px] md:min-h-[520px] overflow-hidden bg-[rgb(var(--color-dark))]">

      {/* ================= BACKGROUND ================= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroSlides[index].image}
            alt={heroSlides[index].title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/60" />

      {/* gradient bottom (lebih halus) */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[rgb(var(--color-bg))]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-main">

          {/* wrapper biar vertical balance lebih enak */}
          <div className="py-10 md:py-14">

            <div className="max-w-[680px]">

              {/* Micro Label */}
              <motion.p
                key={`label-${index}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="
                  text-[10.5px]
                  tracking-[2px]
                  uppercase
                  font-medium
                  text-[rgb(var(--color-white))]/70
                  mb-5
                "
              >
                Konsultan Arsitektur & Rekayasa Teknik
              </motion.p>

              {/* Headline (dibesarkan & lebih readable) */}
              <motion.h1
                key={heroSlides[index].title}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="
                  font-semibold
                  text-[24px]
                  sm:text-[28px]
                  md:text-[34px]
                  leading-[1.3]
                  tracking-[0.2px]
                  text-[rgb(var(--color-white))]
                  mb-6
                "
              >
                {heroSlides[index].title}
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                key={heroSlides[index].subtitle}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="
                  text-[14px]
                  md:text-[15.5px]
                  leading-[1.7]
                  text-[rgb(var(--color-white))]/85
                  max-w-[560px]
                  mb-9
                "
              >
                {heroSlides[index].subtitle}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link href="#contact" className="btn btn-primary">
                  Konsultasi Proyek
                </Link>

                <Link
                  href="#portfolio"
                  className="
                    btn btn-outline-light
                    bg-transparent
                    border-[rgb(var(--color-white))]/40
                    text-[rgb(var(--color-white))]
                    hover:bg-[rgb(var(--color-white))]
                    hover:text-[rgb(var(--color-dark))]
                  "
                >
                  Lihat Portofolio
                </Link>
              </motion.div>

            </div>

          </div>
        </div>
      </div>

      {/* ================= DOTS ================= */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              h-[6px] rounded-full transition-all duration-300
              ${i === index
                ? "w-6 bg-[rgb(var(--color-white))]"
                : "w-[6px] bg-[rgb(var(--color-white))]/40 hover:bg-[rgb(var(--color-white))]/70"}
            `}
          />
        ))}
      </div>

    </section>
  );
}