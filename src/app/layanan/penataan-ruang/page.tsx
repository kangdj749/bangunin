import type { Metadata } from "next";


import SpatialHero from "@/components/Layanan/SpatialHero";
import { SpatialProblemSection } from "@/components/Layanan/SpatialProblemSection";
import { SpatialAgitationSection } from "@/components/Layanan/SpatialAgitationSection";
import { SpatialSolutionSection } from "@/components/Layanan/SpatialSolutionSection";
import { SpatialServicesSection } from "@/components/Layanan/SpatialServicesSection";
import { SpatialApproachSection } from "@/components/Layanan/SpatialApproachSection";
import { SpatialTrustSection } from "@/components/Layanan/SpatialTrustSection";
import SpatialCTASection from "@/components/Layanan/SpatialCTASection";

/* ============================= */
/* SEO METADATA */
/* ============================= */

export const metadata: Metadata = {
  title: "Layanan Konsultan Arsitektur & Engineering",
  description:
    "Bangun.in menyediakan layanan konsultan arsitektur, engineering, perencanaan wilayah, topografi, dan geoteknik untuk mendukung pembangunan yang terencana dan profesional.",

  alternates: {
    canonical: "https://bangunin.com/layanan",
  },

  openGraph: {
    title: "Layanan Engineering Consultant | Bangun.in",
    description:
      "Layanan profesional konsultan arsitektur, engineering, geoteknik, dan topografi.",
    url: "https://bangunin.com/layanan",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Layanan Engineering Consultant | Bangun.in",
    description:
      "Solusi profesional untuk arsitektur, engineering, dan konstruksi.",
  },
};

/* ============================= */
/* STRUCTURED DATA */
/* ============================= */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "EngineeringService",
  name: "Bangun.in Engineering Consultant",
  url: "https://bangunin.com/layanan",
  serviceType: [
    "Architecture Design",
    "Engineering Consultant",
    "Urban Planning",
    "Geotechnical Engineering",
    "Topography Survey",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa saja layanan yang disediakan Bangun.in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bangun.in menyediakan layanan arsitektur, engineering, perencanaan wilayah, topografi, dan geoteknik.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah Bangun.in melayani proyek di seluruh Indonesia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, layanan konsultansi kami dapat mendukung proyek di berbagai wilayah Indonesia.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: "https://bangunin.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Layanan",
      item: "https://bangunin.com/layanan",
    },
  ],
};

export default function Page() {
  return (
    <>
      {/* JSON LD */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="relative">

        <SpatialHero />

        <SpatialProblemSection />

        <SpatialAgitationSection />

        <SpatialSolutionSection />

        <SpatialServicesSection />

        <SpatialApproachSection />

        <SpatialTrustSection />

        <SpatialCTASection />

      </main>
    </>
  );
}