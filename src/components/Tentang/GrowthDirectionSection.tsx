"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  TrendingUp,
  Settings,
} from "lucide-react";

export default function GrowthDirectionSection() {
  const growthPoints = [
    {
      title: "Digital Engineering Integration",
      icon: Cpu,
      desc: "Integrasi teknologi digital dalam proses perencanaan dan eksekusi proyek.",
    },
    {
      title: "Sustainable Design Approach",
      icon: TrendingUp,
      desc: "Pendekatan desain berkelanjutan dengan efisiensi energi dan material.",
    },
    {
      title: "Penguatan Sistem Manajemen Internal",
      icon: Settings,
      desc: "Optimalisasi SOP, kontrol mutu, dan tata kelola organisasi.",
    },
  ];

  return (
    <section id="arah" className="section-tight bg-[rgb(var(--color-soft))]">
      <div className="container-main">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="h2 text-primary mb-3"
        >
          Arah Pertumbuhan
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="caption max-w-xl mb-6 leading-[1.6]"
        >
          Strategi pengembangan perusahaan difokuskan pada peningkatan
          kapabilitas teknis, sistem manajemen modern, serta adaptasi terhadap
          dinamika industri konstruksi yang berkembang.
        </motion.p>

        {/* Growth Items */}
        <div className="space-y-3">
          {growthPoints.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className="
                  relative
                  bg-[rgb(var(--color-surface))]
                  border border-[rgb(var(--color-border))]
                  rounded-[var(--radius-md)]
                  px-4 py-4
                  shadow-[var(--shadow-soft)]
                  hover:shadow-[var(--shadow-elevated)]
                  transition-all duration-300
                "
              >
                {/* Accent Strip */}
                <div className="absolute left-0 top-0 h-full w-[3px] bg-[rgb(var(--color-primary))] rounded-l-[var(--radius-md)]" />

                <div className="flex items-start gap-3 pl-2">

                  {/* Icon */}
                  <div className="text-[rgb(var(--color-primary))] mt-[2px]">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-[12.5px] font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[11.5px] leading-[1.55] text-[rgb(var(--color-muted))]">
                      {item.desc}
                    </p>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}