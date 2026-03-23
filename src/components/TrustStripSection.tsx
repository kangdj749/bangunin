"use client";

import {
  FiUsers,
  FiShield,
  FiMapPin,
  FiBookOpen,
} from "react-icons/fi";

export default function TrustStrip() {
  const items = [
    {
      label: "Multidisiplin Engineering Team",
      icon: FiUsers,
    },
    {
      label: "Legalitas Lengkap & Aktif",
      icon: FiShield,
    },
    {
      label: "Cakupan Proyek Nasional",
      icon: FiMapPin,
    },
    {
      label: "Pendekatan Akademik & Praktis",
      icon: FiBookOpen,
    },
  ];

  return (
    <section className="relative section-tight bg-[rgb(var(--color-bg))] border-y border-[rgb(var(--color-secondary))]/15">

      <div className="container-main">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 md:gap-x-6 text-center">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  relative
                  px-3
                  md:px-4
                  group
                  transition-all
                  duration-300
                  hover:-translate-y-[2px]
                "
              >
                {/* Vertical Divider Desktop */}
                {index !== items.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-[rgb(var(--color-secondary))]/20" />
                )}

                {/* Icon Wrapper */}
                <div className="flex justify-center mb-3">
                  <div
                    className="
                      w-10 h-10
                      flex items-center justify-center
                      rounded-[var(--radius-md)]
                      border  
                      border-[rgb(var(--color-secondary))]/25
                      bg-[rgb(var(--color-surface))]
                      transition-all
                      duration-300
                      group-hover:border-[rgb(var(--color-primary))]/50
                      group-hover:bg-[rgb(var(--color-primary))]/5
                    "
                  >
                    <Icon
                      size={16}
                      className="text-[rgb(var(--color-primary))]"
                    />
                  </div>
                </div>

                {/* Accent Line */}
                <div className="mx-auto w-6 h-[1px] bg-[rgb(var(--color-primary))] mb-3 transition-all duration-300 group-hover:w-8" />

                {/* Label */}
                <p className="text-[13px] md:text-[13.5px] font-medium leading-[1.6] text-[rgb(var(--color-text))]">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Support Text */}
        <p className="text-center text-[12px] text-[rgb(var(--color-muted))] mt-10 max-w-[640px] mx-auto leading-[1.6]">
          Didukung tenaga ahli dari berbagai institusi teknik terkemuka serta
          pengalaman proyek skala nasional.
        </p>

      </div>
    </section>
  );
}