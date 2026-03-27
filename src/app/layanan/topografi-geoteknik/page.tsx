import type { Metadata } from "next";

import HeroTopografi from "@/components/Layanan/topografi/HeroTopografi";
import ProblemTopografi from "@/components/Layanan/topografi/ProblemTopografi";
import SolutionTopografi from "@/components/Layanan/topografi/SolutionTopografi";
import ServicesTopografi from "@/components/Layanan/topografi/ServicesTopografi";
import SubServicesTopografi from "@/components/Layanan/topografi/SubServicesTopografi";
import WhyTopografi from "@/components/Layanan/topografi/WhyTopografi";
import ImpactTopografi from "@/components/Layanan/topografi/ImpactTopografi";
import CTATopografi from "@/components/Layanan/topografi/CTATopografi";
import FieldGallerySection from "@/components/Layanan/topografi/FieldGallerySection";

/* ================================
   SEO METADATA
================================ */

export const metadata: Metadata = {
  title:
    "Jasa Survey Topografi & Soil Investigation | Bangun.in",
  description:
    "Layanan survey topografi dan investigasi tanah profesional untuk memastikan proyek Anda berdiri di atas data yang akurat, presisi, dan dapat dipertanggungjawabkan.",
  keywords: [
    "survey topografi",
    "soil investigation",
    "jasa sondir",
    "uji tanah SPT",
    "jasa geoteknik",
    "topografi indonesia",
  ],
  alternates: {
    canonical:
      "https://bangunin.com/layanan/topografi-geoteknik",
  },
};

/* ================================
   STRUCTURED DATA
================================ */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Survey Topografi dan Soil Investigation",
  provider: {
    "@type": "Organization",
    name: "PT Bangun Cipta Solusi",
    url: "https://bangunin.com",
  },
  areaServed: "Indonesia",
  serviceType: [
    "Survey Topografi",
    "Soil Investigation",
    "Geotechnical Engineering",
  ],
  description:
    "Layanan survei topografi dan investigasi tanah untuk memastikan proyek berdiri di atas data yang akurat dan terukur.",
};

/* ================================
   PAGE
================================ */

export default function TopografiPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <main className="bg-[rgb(var(--color-bg))]">

        <HeroTopografi />

        <ProblemTopografi />

        <SolutionTopografi />

        <FieldGallerySection />

        <ServicesTopografi />

        <SubServicesTopografi />

        <WhyTopografi />

        <ImpactTopografi />

        <CTATopografi />

      </main>
    </>
  );
}