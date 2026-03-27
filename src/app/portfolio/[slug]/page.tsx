import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { getPortfolios } from "@/lib/portfolio";

// ==============================
// STATIC PARAMS
// ==============================
export async function generateStaticParams() {
  const projects = await getPortfolios();

  return projects.map((p) => ({
    slug: p.slug,
  }));
}

// ==============================
// PAGE
// ==============================
export default async function PortfolioDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const projects = await getPortfolios();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  const related = project.related_slugs.length
    ? projects.filter((p) => project.related_slugs.includes(p.slug))
    : projects
        .filter(
          (p) =>
            p.slug !== project.slug &&
            p.category === project.category
        )
        .slice(0, 3);

  return (
    <main className="bg-[rgb(var(--color-bg))]">

      {/* HERO */}
    <section className="relative overflow-hidden">

    {/* IMAGE WRAPPER */}
    <div className="relative h-[340px] md:h-[400px] lg:h-[440px]">

        <Image
        src={cloudinaryImage(project.cover_image, "banner")}
        alt={project.title}
        fill
        priority
        className="object-cover"
        />

        {/* BASE DARK OVERLAY (fix kontras utama) */}
        <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/20" />

        {/* GRADIENT LAYER (premium feel + depth) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgb(var(--color-dark))]/40 to-[rgb(var(--color-dark))]/80" />

    </div>

    {/* CONTENT */}
    <div className="absolute inset-0 z-10 flex items-center">
        <div className="container-main">

        <div className="max-w-[760px]">

            {/* BREADCRUMB */}
            <p className="text-[12px] text-[rgb(var(--color-white))]/70 mb-4 tracking-wide">
            <Link href="/" className="hover:underline">Home</Link> /{" "}
            <Link href="/portfolio" className="hover:underline">Portfolio</Link>
            </p>

            {/* CATEGORY */}
            <p className="text-[11px] uppercase tracking-[0.2em] text-[rgb(var(--color-white))]/70 mb-3">
            {project.category}
            </p>

            {/* TITLE — ENTERPRISE SCALE */}
            <h1 className="
            text-[30px] 
            md:text-[40px] 
            lg:text-[46px] 
            font-semibold 
            leading-[1.22] 
            text-[rgb(var(--color-white))] 
            mb-5
            "
            style={{
            textShadow: "0 2px 12px rgba(0,0,0,0.35)"
            }}
            >
            {project.title}
            </h1>

            {/* META */}
            <p className="text-[13px] text-[rgb(var(--color-white))]/75">
            {project.location} • {project.year}
            </p>

        </div>

        </div>
    </div>

    </section>

      {/* CONTENT */}
      <section className="section">
        <div className="container-main grid md:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="md:col-span-2 space-y-10">

            <div>
              <h2 className="h2 text-primary mb-4">
                Deskripsi Proyek
              </h2>
              <p className="body text-muted">
                {project.description}
              </p>
            </div>

            {project.challenge && (
              <div>
                <h2 className="h2 text-primary mb-4">
                  Tantangan
                </h2>
                <p className="body text-muted">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.solution && (
              <div>
                <h2 className="h2 text-primary mb-4">
                  Solusi
                </h2>
                <p className="body text-muted">
                  {project.solution}
                </p>
              </div>
            )}

            {project.result && (
              <div>
                <h2 className="h2 text-primary mb-4">
                  Hasil
                </h2>
                <p className="body text-muted">
                  {project.result}
                </p>
              </div>
            )}

            {/* GALLERY */}
            {project.gallery_images.length > 0 && (
              <div>
                <h2 className="h2 text-primary mb-4">
                  Dokumentasi Proyek
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">

                  {project.gallery_images.map((img, i) => (
                    <div
                      key={i}
                      className="relative h-56 rounded-[var(--radius-lg)] overflow-hidden group"
                    >
                      <Image
                        src={cloudinaryImage(img, "gallery")}
                        alt={`Gallery ${i}`}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                  ))}

                </div>
              </div>
            )}

          </div>

          {/* RIGHT */}
          <div>
            <div className="card-premium sticky top-24">

              <h3 className="h3 mb-4">
                Informasi Proyek
              </h3>

              <div className="space-y-3 text-[13px]">

                <div className="flex justify-between">
                  <span className="text-subtle">Client</span>
                  <span>{project.client}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-subtle">Kategori</span>
                  <span>{project.category}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-subtle">Lokasi</span>
                  <span>{project.location}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-subtle">Tahun</span>
                  <span>{project.year}</span>
                </div>

              </div>

              <div className="mt-6">
                <a href="/kontak" className="btn btn-primary w-full">
                  Konsultasi Proyek Serupa
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* RELATED */}
      <section className="section-tight bg-soft">
        <div className="container-main">

          <h2 className="h2 text-primary mb-6">
            Proyek Terkait
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="group block rounded-[var(--radius-lg)] overflow-hidden border border-[rgb(var(--color-border))]"
              >

                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={cloudinaryImage(item.cover_image, "card")}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="p-3">
                  <p className="caption text-muted">
                    {item.category}
                  </p>

                  <h3 className="text-[13px] font-semibold">
                    {item.title}
                  </h3>
                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}