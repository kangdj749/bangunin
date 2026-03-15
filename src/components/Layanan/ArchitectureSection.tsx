"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

type Project = {
  title: string;
  desc: string;
  images: string[];
};

function ArchitectureCard({
  project,
  onOpenLightbox,
}: {
  project: Project;
  onOpenLightbox: (images: string[], index: number) => void;
}) {
  const [slide, setSlide] = useState(0);

  const total = project.images.length;

  const next = () => setSlide((s) => (s + 1) % total);
  const prev = () => setSlide((s) => (s === 0 ? total - 1 : s - 1));

  /* autoplay */
  useEffect(() => {
    if (total <= 1) return;

    const interval = setInterval(() => {
      setSlide((s) => (s + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, [total]);

  return (
    <div
      className="
      bg-[rgb(var(--color-surface))]
      border
      border-[rgb(var(--color-border))]
      rounded-[var(--radius-md)]
      overflow-hidden
      shadow-[var(--shadow-soft)]
      transition-all
      duration-300
      hover:shadow-[var(--shadow-elevated)]
    "
    >
      {/* Carousel */}
      <div className="relative h-[200px] overflow-hidden">

        <Image
          src={cloudinaryImage(project.images[slide], "preview")}
          alt={project.title}
          fill
          sizes="(max-width:768px) 50vw, 33vw"
          onClick={() => onOpenLightbox(project.images, slide)}
          className="object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
        />

        {/* Arrows */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="
              absolute left-2 top-1/2 -translate-y-1/2
              w-7 h-7
              bg-white/80
              rounded-full
              text-[13px]
              flex items-center justify-center
            "
            >
              ‹
            </button>

            <button
              onClick={next}
              className="
              absolute right-2 top-1/2 -translate-y-1/2
              w-7 h-7
              bg-white/80
              rounded-full
              text-[13px]
              flex items-center justify-center
            "
            >
              ›
            </button>
          </>
        )}

        {/* Dots */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">

          {project.images.map((_, i) => (
            <div
              key={i}
              className={`h-[4px] rounded-full transition-all ${
                slide === i
                  ? "w-[16px] bg-[rgb(var(--color-primary))]"
                  : "w-[6px] bg-white/70"
              }`}
            />
          ))}

        </div>
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
    </div>
  );
}

export default function ArchitectureSection() {

  const heroImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773533546/kantor2_m1hqrp.png";

  const sekolah1 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773531522/sekolah_vc9r73.png";  

  const sekolah2 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773531535/sekolah2_d0zu3b.png";


  const sekolah3 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773532059/sekolah3_lmuwas.png";

  const sekolah4 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773532428/sekolah5_gkx1lb.png";

  const sekolah5 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773532429/sekolah4_dbgtli.png";

  const kantor1 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773533548/kantor2_ea9zdw.png";
    
  const kantor2 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773533550/kantor1_mzhksh.png";  

  const masjid1 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773534180/masjid3_tjm2tn.png";  
    
  const masjid2 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773534176/masjid4_zhiubg.png";  

  const masjid3 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773534175/masjid1_gkkhzo.png";  

  const masjid4 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773534174/masjid5_j90vee.png";  

  const masjid5 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773534173/masjid2_xkr1mr.png";  
    
  const masjid6 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773534172/masjid6_eoyjh7.png";  
    
  const masjid7 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773534171/masjid8_xuanhe.png";  
    
  const masjid8 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773534170/masjid7_u2eaye.png";  
        
  

  const kost1 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773537420/kost1_clr806.png";
    
  const kost2 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773537420/kost2_qwvj3f.png";

  
  const kost3 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773537419/kost3_c4uvqu.png";  

  const rumahsakit1 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773537967/rumahsakit1_u2gqpt.png";  

  const rumahsakit2 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773537967/rumahsakit2_khiyw3.png";  
    
  const rumahsakit3 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773537967/rumahsakit3_kpdgzz.png";    

  const klinik1 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773538892/klinik1_x79t7w.png";    
    
  const klinik2 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773538892/klinik2_omu7dz.png";    
    
  const klinik3 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773538892/klinik3_s1ksiz.png";      
  
  const klinik4 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773539255/klinik4_onuufc.png";      
  
  const klinik5 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773539244/klinik5_xswdux.png";      
  
  const klinik6 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773539244/klinik6_jwaekg.png";      
    
  const rumahtinggal1 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773540467/rumahtinggal_psiqom.png";      
    
  const rumahtinggal2 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773540465/rumahtinggal2_qtphs0.png";      
    
  const rumahtinggal3 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773540468/rumahtinggal3_ryrdu5.png";      
    
  const rumahtinggal4 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773540468/rumahtinggal4_yxdr44.png";      
    
  const rumahtinggal5 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773540465/rumahtinggal5_bsf0tb.png";      
    
  const rumahtinggal6 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773540464/rumahtinggal6_mgzbdp.png";      
    
  const rumahtinggal7 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773540464/rumahtinggal7_zjkh7z.png";      
    
  const interior1 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541946/interior1_z1nowv.png";      
  
  const interior2 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541941/interior2_ug8ilx.png";      
  
  const interior3 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541937/interior3_dlrdwk.png";      
  
  const interior4 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541938/interior4_cnprw6.png";      
  
  const interior5 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541934/interior5_pjych4.png";      
  
  const interior6 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541937/interior6_jdcume.png";      
  
  const interior7 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541935/interior7_nr4sht.png";      
  
  const interior8 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541931/interior8_twiu5z.png";      
  
  const interior9 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541934/interior9_dilvrl.png";      
  
  const interior10 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541933/interior10_hckx76.png";      
  
  const interior11 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541935/interior11_jbligz.png";      
  
  const interior12 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541929/interior12_gs78tb.png";      
  
  const interior13 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541925/interior13_g3t8oj.png";      
  
  const interior14 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541922/interior14_iaetwp.png";      
  
  const interior15 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541919/interior15_pzfrje.png";      
  
  const interior16 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541921/interior16_snzcfv.png";      
  
  const interior17 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541917/interior17_vkz6ov.png";      
  
  const interior18 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541923/interior18_owl5lw.png";      
  
  const interior19 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541919/interior19_hb8slf.png";      
  
  const interior20 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541917/interior20_tpkp6j.png";      
  
  const interior21 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541915/interior21_aimemq.png";      
  
  const interior22 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773541914/interior22_rl8ajx.png";      
    
    
  const projects: Project[] = [
    {
      title: "Bangunan Masjid",
      desc: "Perancangan masjid modern dan kawasan ibadah terpadu.",
      images: [masjid1, masjid2, masjid3, masjid4, masjid5, masjid6, masjid7, masjid8],
    },
    {
      title: "Bangun Pendidikan",
      desc: "Desain fasilitas pendidikan yang fungsional dan adaptif.",
      images: [sekolah3,sekolah1, sekolah2, sekolah4, sekolah5],
    },
    {
      title: "Bangunan Rumah Sakit",
      desc: "Perencanaan bangunan kesehatan sesuai standar medis.",
      images: [rumahsakit1, rumahsakit2, rumahsakit3],
    },
    {
      title: "Bangunan Rumah Kost",
      desc: "Perencanaan bangunan Rumah Kost yang nyaman.",
      images: [kost1, kost2, kost3],
    },
    {
      title: "Bangun Perkantoran",
      desc: "Ruang kerja profesional yang efisien dan representatif.",
      images: [kantor1, kantor2],
    },
    
    {
      title: "Bangunan Klinik",
      desc: "Perancangan bangunan Kesehatan sesuai standar medis.",
      images: [klinik1,klinik2,klinik3, klinik4, klinik5, klinik6],
    },
    
    {
      title: "Rumah Tinggal",
      desc: "Perancangan hunian modern dengan pendekatan fungsional.",
      images: [rumahtinggal1, rumahtinggal2, rumahtinggal3, rumahtinggal4, rumahtinggal5, rumahtinggal6, rumahtinggal7],
    },
    {
      title: "Interior",
      desc: "Penataan ruang interior dengan estetika dan efisiensi.",
      images: [interior1, interior2, interior3, interior4, interior5, interior6,
        interior7, interior8, interior9, interior10, interior11, interior12, interior13,
        interior14, interior15, interior16, interior17, interior18, interior19, interior20,
        interior21, interior22
      ],
    },
  ];

  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  const next = () =>
    setLightbox((l) =>
      l
        ? {
            ...l,
            index: (l.index + 1) % l.images.length,
          }
        : l
    );

  const prev = () =>
    setLightbox((l) =>
      l
        ? {
            ...l,
            index: l.index === 0 ? l.images.length - 1 : l.index - 1,
          }
        : l
    );

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

        {/* Hero */}
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
          shadow-[var(--shadow-soft)]
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

          <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/20" />
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-4">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <ArchitectureCard
                project={project}
                onOpenLightbox={(images, index) =>
                  setLightbox({ images, index })
                }
              />
            </motion.div>
          ))}

        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="
          fixed inset-0 z-50
          bg-black/90
          flex items-center justify-center
        "
        >

          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white text-[20px]"
          >
            ✕
          </button>

          <button
            onClick={prev}
            className="absolute left-6 text-white text-[28px]"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-6 text-white text-[28px]"
          >
            ›
          </button>

          <div className="relative w-[90vw] h-[80vh]">

            <Image
              src={cloudinaryImage(
                lightbox.images[lightbox.index],
                "banner"
              )}
              alt="preview"
              fill
              className="object-contain"
            />

          </div>

        </div>
      )}
    </section>
  );
}