import type { Metadata } from "next"
import Link from "next/link"

import HeroArchitecture from "@/components/Layanan/arsitektur/HeroArchitecture"
import ProblemSection from "@/components/Layanan/arsitektur/ProblemSection"
import AgitationSection from "@/components/Layanan/arsitektur/AgitationSection"
import SolutionSection from "@/components/Layanan/arsitektur/SolutionSection"
import PortfolioSection from "@/components/Layanan/arsitektur/PortfolioSection"
import ProcessSection from "@/components/Layanan/arsitektur/ProcessSection"
import TrustSection from "@/components/Layanan/arsitektur/TrustSection"
import CTASection from "@/components/Layanan/arsitektur/CTASection"
import ServicesSection from "@/components/Layanan/arsitektur/ServicesSection"

import { cities } from "@/lib/seo/cities"

/* ============================= */
/* SEO METADATA */
/* ============================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://bangunin.com"),

  title:
    "Jasa Arsitek Profesional Indonesia | Desain Rumah & Bangunan Modern",

  description:
    "Jasa arsitek profesional untuk desain rumah, bangunan komersial, dan proyek konstruksi di seluruh Indonesia. Desain modern, fungsional, dan efisien.",

  keywords: [
    "jasa arsitek",
    "arsitek indonesia",
    "desain rumah modern",
    "jasa desain rumah",
    "arsitek profesional",
  ],

  alternates: {
    canonical: "/layanan/arsitektur",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Jasa Arsitek Profesional - Bangun.in",
    description:
      "Desain rumah dan bangunan modern dengan pendekatan arsitektur profesional.",
    url: "https://bangunin.com/layanan/arsitektur",
    siteName: "Bangun.in",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jasa Arsitek Profesional - Bangun.in",
    description:
      "Solusi desain arsitektur modern dan profesional.",
  },
}

/* ============================= */
/* JSON-LD */
/* ============================= */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Jasa Arsitektur",
  provider: {
    "@type": "Organization",
    name: "Bangun.in",
    url: "https://bangunin.com",
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  serviceType: "Architectural Design",
  url: "https://bangunin.com/layanan/arsitektur",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://bangunin.com" },
    { "@type": "ListItem", position: 2, name: "Layanan", item: "https://bangunin.com/layanan" },
    { "@type": "ListItem", position: 3, name: "Arsitektur", item: "https://bangunin.com/layanan/arsitektur" },
  ],
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bangun.in",
  url: "https://bangunin.com",
}

/* 🔥 ADVANCED SEO — CITY LIST */
const cityListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: cities.map((city, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Jasa Arsitek ${city}`,
    url: `https://bangunin.com/layanan/arsitektur/${city
      .toLowerCase()
      .replace(/\s+/g, "-")}`,
  })),
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu jasa arsitek?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jasa arsitek adalah layanan profesional untuk merancang bangunan mulai dari konsep hingga gambar kerja.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah melayani seluruh Indonesia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, kami melayani berbagai kota di Indonesia.",
      },
    },
  ],
}

/* ============================= */
/* PAGE */
/* ============================= */

export default function Page() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>

        <HeroArchitecture />

        

        <ProblemSection />
        <AgitationSection />
        <SolutionSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <TrustSection />

        {/* ============================= */}
        {/* SEO INTRO (WAJIB BANGET) */}
        {/* ============================= */}

        <section className="section-tight">
          <div className="container-main max-w-[760px]">

            <h1 className="h2 mb-3">
              Jasa Arsitek Profesional untuk Rumah & Bangunan
            </h1>

            <p className="text-muted">
              Kami menyediakan jasa arsitek profesional untuk berbagai kebutuhan
              desain rumah tinggal, bangunan komersial, hingga proyek skala besar.
              Setiap desain dirancang dengan pendekatan fungsional, estetika, dan efisiensi biaya.
            </p>

            <p className="text-muted mt-3">
              Dengan pengalaman di berbagai proyek di Indonesia,
              kami membantu klien menciptakan bangunan yang tidak hanya indah,
              tetapi juga nyaman, efisien, dan siap digunakan dalam jangka panjang.
            </p>

          </div>
        </section>

        {/* ============================= */}
        {/* CITY SEO GRID (MONEY SECTION) */}
        {/* ============================= */}

        <section className="section-tight">
          <div className="container-main">

            <h2 className="h3 mb-4">
              Jasa Arsitek di Berbagai Kota
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

              {cities.map((city) => {
                const slug = city.toLowerCase().replace(/\s+/g, "-")

                return (
                  <Link
                    key={city}
                    href={`/layanan/arsitektur/${slug}`}
                    className="
                      text-[12px]
                      px-3 py-2
                      border
                      rounded-[var(--radius-sm)]
                      border-[rgb(var(--color-border))]
                      text-[rgb(var(--color-muted))]
                      hover:text-[rgb(var(--color-primary))]
                    "
                  >
                    {city}
                  </Link>
                )
              })}

            </div>

          </div>
        </section>

        {/* ============================= */}
        {/* RELATED SERVICES */}
        {/* ============================= */}

        <section className="section-tight">
          <div className="container-main">

            <h3 className="h3 mb-4">
              Layanan Terkait
            </h3>

            <div className="flex flex-wrap gap-3 text-[13px]">

              <Link href="/layanan/penataan-ruang" className="btn btn-outline">
                Penataan Ruang
              </Link>

              <Link href="/layanan/rekayasa-teknik" className="btn btn-outline">
                Rekayasa Teknik
              </Link>

              <Link href="/layanan/topografi-geoteknik" className="btn btn-outline">
                Topografi & Geoteknik
              </Link>

            </div>

          </div>
        </section>

        <CTASection />

      </main>
    </>
  )
}