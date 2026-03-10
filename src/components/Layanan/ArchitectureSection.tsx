"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function ArchitectureSection() {

  const heroImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg";

  const projects = [
    {
      title: "Masjid",
      desc: "Perancangan masjid modern dan kawasan ibadah terpadu.",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg",
    },
    {
      title: "Sekolah",
      desc: "Desain fasilitas pendidikan yang fungsional dan adaptif.",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg",
    },
    {
      title: "Rumah Sakit",
      desc: "Perencanaan bangunan kesehatan sesuai standar medis.",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg",
    },
    {
      title: "Kantor",
      desc: "Ruang kerja profesional yang efisien dan representatif.",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg",
    },
    {
      title: "Hunian",
      desc: "Perancangan hunian modern dengan pendekatan fungsional.",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg",
    },
    {
      title: "Interior",
      desc: "Penataan ruang interior dengan estetika dan efisiensi.",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg",
    },
  ];

  return (
    <section id="arsitektur" className="section-tight bg-[rgb(var(--color-bg))]">

      <div className="container-main">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="h2 text-[rgb(var(--color-primary))] mb-3">
            Layanan Arsitektur
          </h2>

          <p className="text-[12px] leading-[1.6] text-[rgb(var(--color-muted))] max-w-[520px]">
            Perencanaan dan perancangan arsitektur yang mengintegrasikan
            fungsi, estetika, dan keberlanjutan untuk berbagai jenis bangunan.
          </p>
        </motion.div>

        {/* Hero Architecture Image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            w-full
            h-[220px]
            md:h-[320px]
            rounded-[var(--radius-lg)]
            overflow-hidden
            border
            border-[rgb(var(--color-border))]
            shadow-[var(--shadow-sm)]
            mb-8
          "
        >
          <Image
            src={cloudinaryImage(heroImage, "banner")}
            alt="Proyek arsitektur"
            fill
            sizes="100vw"
            className="object-cover"
          />

          {/* overlay clean */}
          <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/20" />
        </motion.div>

        {/* Architecture Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="
                group
                bg-[rgb(var(--color-surface))]
                border
                border-[rgb(var(--color-border))]
                rounded-[var(--radius-md)]
                overflow-hidden
                shadow-[var(--shadow-sm)]
                transition-all
                duration-300
                hover:shadow-[var(--shadow-md)]
              "
            >
              {/* Image */}
              <div className="relative h-[120px] md:h-[150px] overflow-hidden">

                <Image
                  src={cloudinaryImage(project.image, "preview")}
                  alt={project.title}
                  fill
                  sizes="(max-width:768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/10" />
              </div>

              {/* Text */}
              <div className="p-3">

                <h3 className="text-[12.5px] font-semibold text-[rgb(var(--color-text))] mb-1">
                  {project.title}
                </h3>

                <p className="text-[11px] leading-[1.5] text-[rgb(var(--color-muted))]">
                  {project.desc}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}