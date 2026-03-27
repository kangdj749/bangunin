"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { motion } from "framer-motion";

const services = [
  {
    title: "Bangunan Pendidikan",
    img: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774022434/facade_gedung_unjani_v3_dz36a6.jpg",
  },
  {
    title: "Perkantoran",
    img: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774140162/EKSTERIOR_SDA_V1__gp0dxz.jpg",
  },
  {
    title: "Masjid",
    img: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774021503/masjid_unjani_v11_tq8jo4.jpg",
  },
  {
    title: "Rumah Sakit",
    img: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773537967/rumahsakit1_u2gqpt.png",
  },
  {
    title: "Klinik",
    img: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773539244/klinik6_jwaekg.png",
  },
  {
    title: "Rumah Tinggal",
    img: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773540468/rumahtinggal4_yxdr44.png",
  },
  {
    title: "Interior",
    img: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774140085/1_dyspwj.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="section bg-soft">
      <div className="container-main">

        {/* HEADER */}
        <div className="mb-10 max-w-[520px]">
          <p className="text-[12px] uppercase tracking-[0.18em] text-subtle mb-3">
            Layanan
          </p>
          <h2 className="text-[26px] md:text-[30px] font-semibold leading-[1.3] text-primary">
            Cakupan Layanan Profesional Kami
          </h2>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">

          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >

              <div className="
                card-premium 
                p-0 
                overflow-hidden 
                transition-all duration-300
                group-hover:shadow-[var(--shadow-medium)]
                group-hover:-translate-y-[2px]
              ">

                {/* IMAGE */}
                <div className="relative h-44 overflow-hidden">

                  <Image
                    src={cloudinaryImage(s.img, "card")}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="
                      object-cover 
                      transition duration-700 
                      group-hover:scale-105
                    "
                  />

                  {/* OVERLAY */}
                  <div className="
                    absolute inset-0 
                    bg-gradient-to-t 
                    from-[rgb(var(--color-dark))]/60 
                    via-[rgb(var(--color-dark))]/20 
                    to-transparent
                    opacity-80
                    group-hover:opacity-90
                    transition
                  " />

                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <h3 className="
                    text-[15px] 
                    font-semibold 
                    mb-2 
                    text-[rgb(var(--color-text))]
                    group-hover:text-primary
                    transition
                  ">
                    {s.title}
                  </h3>

                  <p className="text-[13px] text-muted leading-relaxed">
                    Perencanaan arsitektur profesional yang terukur dan berkelanjutan.
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}