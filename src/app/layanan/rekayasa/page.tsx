import HeroEngineeringSplit from "@/components/Layanan/rekayasa/HeroEngineeringSplit";
import StickyStorySection from "@/components/Layanan/rekayasa/StickyStorySection";
import ImpactStats from "@/components/Layanan/rekayasa/ImpactStats";
import ServiceBlockAdvanced from "@/components/Layanan/rekayasa/ServiceBlockAdvanced";

export default function Page() {
  return (
    <>
      <HeroEngineeringSplit />
      <StickyStorySection />
      <ImpactStats />

      <ServiceBlockAdvanced
        title="Perencanaan Pabrik & Warehouse"
        desc="Optimalisasi layout dan efisiensi operasional fasilitas industri."
        image="https://res.cloudinary.com/de7fqcvpf/image/upload/v1774138852/facade_gedung_unjani_v4_ronjyt.jpg"
      />

      <ServiceBlockAdvanced
        reverse
        title="Water Engineering"
        desc="Sistem drainase dan pengendalian banjir yang berkelanjutan."
        image="https://res.cloudinary.com/de7fqcvpf/image/upload/v1774138853/facade_gedung_unjani_v11_tetkny.jpg"
      />
    </>
  );
}