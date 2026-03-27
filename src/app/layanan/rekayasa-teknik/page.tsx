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
        desc="Perencanaan pabrik dan warehouse yang tepat bukan hanya soal bangunan—tetapi bagaimana menciptakan sistem produksi dan distribusi yang efisien, scalable, dan siap berkembang.
Kami merancang fasilitas industri dengan pendekatan menyeluruh: mulai dari alur produksi, pergerakan logistik, hingga efisiensi ruang dan operasional. Setiap layout dirancang untuk meminimalkan bottleneck, meningkatkan produktivitas, serta memastikan fleksibilitas terhadap pertumbuhan bisnis di masa depan.
Dengan pengalaman di berbagai proyek industri, kami membantu klien membangun fasilitas yang tidak hanya fungsional hari ini, tetapi juga siap menghadapi kebutuhan operasional jangka panjang."
        image="https://res.cloudinary.com/de7fqcvpf/image/upload/v1774138852/facade_gedung_unjani_v4_ronjyt.jpg"
      />

      <ServiceBlockAdvanced
        reverse
        title="Perencanaan Struktur Rumah Ibadah"
        desc="Perencanaan struktur rumah ibadah tidak hanya menuntut kekuatan, tetapi juga ketenangan dan keberlanjutan jangka panjang. Kami merancang sistem struktur yang kokoh, efisien, dan aman, dengan mempertimbangkan beban besar, bentang lebar, serta kenyamanan jamaah dalam setiap aktivitas ibadah."
        image="https://res.cloudinary.com/de7fqcvpf/image/upload/v1774138852/facade_gedung_unjani_v4_ronjyt.jpg"
      />

      <ServiceBlockAdvanced
        title="Water Engineering - Drainase Kawasan"
        desc="Masalah genangan dan sistem aliran air yang tidak terkontrol sering menjadi hambatan utama dalam pengembangan kawasan. Kami merancang sistem drainase terpadu yang mampu mengalirkan air secara optimal, mengurangi risiko genangan, serta menjaga kualitas lingkungan secara berkelanjutan."
        image="https://res.cloudinary.com/de7fqcvpf/image/upload/v1774138852/facade_gedung_unjani_v4_ronjyt.jpg"
      />

      <ServiceBlockAdvanced
        reverse
        title="Water Engineering - Penanganan Banjir"
        desc="Banjir bukan hanya masalah musiman, tetapi risiko serius terhadap investasi dan keselamatan. Kami menghadirkan solusi rekayasa yang komprehensif — mulai dari analisis hidrologi hingga desain sistem pengendalian banjir — untuk meminimalkan dampak dan melindungi kawasan secara optimal."
        image="https://res.cloudinary.com/de7fqcvpf/image/upload/v1774138852/facade_gedung_unjani_v4_ronjyt.jpg"
      />

      <ServiceBlockAdvanced
        title="Civil Engineering - Perencanaan Jembatan"
        desc="Jembatan adalah penghubung vital yang menuntut presisi tinggi dalam perencanaan. Kami merancang struktur jembatan yang kuat, stabil, dan efisien, dengan mempertimbangkan kondisi tanah, beban lalu lintas, serta ketahanan terhadap lingkungan."
        image="https://res.cloudinary.com/de7fqcvpf/image/upload/v1774138852/facade_gedung_unjani_v4_ronjyt.jpg"
      />

      <ServiceBlockAdvanced
        reverse
        title="Mekanikal Engineering"
        desc="Sistem mekanikal adalah tulang punggung operasional sebuah bangunan. Kami merancang sistem mekanikal yang efisien, terintegrasi, dan sesuai standar teknis, sehingga seluruh fungsi bangunan dapat berjalan optimal tanpa pemborosan energi."
        image="https://res.cloudinary.com/de7fqcvpf/image/upload/v1774138852/facade_gedung_unjani_v4_ronjyt.jpg"
      />

       <ServiceBlockAdvanced
        title="Electrical Engineering"
        desc="Kelistrikan yang stabil dan aman adalah fondasi dari setiap aktivitas modern. Kami merancang sistem elektrikal yang andal, aman, dan scalable, mulai dari distribusi daya hingga sistem proteksi, untuk memastikan performa optimal dalam jangka panjang."
        image="https://res.cloudinary.com/de7fqcvpf/image/upload/v1774138852/facade_gedung_unjani_v4_ronjyt.jpg"
      />

      <ServiceBlockAdvanced
        reverse
        title="Tata Udara Gedung (HVAC)"
        desc="Kenyamanan ruang sangat ditentukan oleh kualitas tata udara. Kami merancang sistem HVAC yang efisien dan presisi, menjaga suhu, kelembaban, dan kualitas udara agar tetap optimal, sekaligus mengontrol konsumsi energi."
        image="https://res.cloudinary.com/de7fqcvpf/image/upload/v1774138852/facade_gedung_unjani_v4_ronjyt.jpg"
      />

    </>
  );
}