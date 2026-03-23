"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { motion } from "framer-motion";
export function EcoHero() {

    const EcoHero =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774223173/ecowisata_johlc4.jpg";


  return (
    <section className="relative min-h-[480px] md:min-h-[640px] flex items-center overflow-hidden">

       {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={cloudinaryImage(EcoHero, "banner")}
                alt="Architecture Engineering Construction"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>

      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/60" />

      <div className="container-main relative z-10">

        <div className="max-w-[560px] py-16">

          <p className="caption-light caption-label">
            Perencanaan Ekowisata
          </p>

          <h1 className="h1 text-[rgb(var(--color-white))] mb-4">
            Mewujudkan Kawasan Ekowisata yang Berkelanjutan dan Bernilai
          </h1>

          <p className="body text-[rgb(var(--color-white))]/85 mb-6">
            Kami membantu merancang kawasan wisata berbasis alam yang tidak hanya menarik,
            tetapi juga menjaga keseimbangan antara lingkungan, ekonomi, dan masyarakat lokal.
          </p>

          <a href="#kontak" className="btn btn-primary-dark">
            Konsultasi Proyek
          </a>

        </div>

      </div>
    </section>
  );
}