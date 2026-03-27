import HeroEngineering from "@/components/Layanan/rekayasateknik/HeroEngineering";
import ProblemSection from "@/components/Layanan/rekayasateknik/ProblemSection";
import AgitationSection from "@/components/Layanan/rekayasateknik/AgitationSection";
import SolutionSection from "@/components/Layanan/rekayasateknik/SolutionSection";
import ScopeSection from "@/components/Layanan/rekayasateknik/ScopeSection";
import ServiceBlockAdvanced from "@/components/Layanan/rekayasa/ServiceBlockAdvanced";

export default function Page() {
  return (
    <>
      <HeroEngineering />
      <ProblemSection />
      <AgitationSection />
      <SolutionSection />
      <ScopeSection />

      <ServiceBlockAdvanced
        title="Perencanaan Pabrik & Warehouse"
        desc="Perencanaan fasilitas industri yang efisien dan produktif."
        image="https://res.cloudinary.com/de7fqcvpf/image/upload/v1774138852/facade_gedung_unjani_v4_ronjyt.jpg"
      />

      <ServiceBlockAdvanced
        reverse
        title="Perencanaan Pabrik & Warehouse"
        desc="Perencanaan fasilitas industri yang efisien dan produktif."
        image="https://res.cloudinary.com/de7fqcvpf/image/upload/v1774138852/facade_gedung_unjani_v4_ronjyt.jpg"
      />
    </>
  );
}