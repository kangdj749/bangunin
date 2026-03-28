import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { cloudinaryImage } from "@/lib/cloudinaryImage"
import { getPortfolios } from "@/lib/portfolio"

/* ==============================
   STATIC PARAMS
============================== */
export async function generateStaticParams() {
  const projects = await getPortfolios()

  return projects.map((p) => ({
    slug: p.slug,
  }))
}

/* ==============================
   SERVICE LINKS (SEO + UX)
============================== */
const services = [
  {
    name: "Penataan Ruang",
    href: "/layanan/penataan-ruang",
  },
  {
    name: "Arsitektur",
    href: "/layanan/arsitektur",
  },
  {
    name: "Rekayasa Teknik",
    href: "/layanan/rekayasa-teknik",
  },
  {
    name: "Topografi & Geoteknik",
    href: "/layanan/topografi-geoteknik",
  },
]

/* ==============================
   PAGE
============================== */
export default async function PortfolioDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const projects = await getPortfolios()
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) return notFound()

  const related = project.related_slugs.length
    ? projects.filter((p) => project.related_slugs.includes(p.slug))
    : projects
        .filter(
          (p) =>
            p.slug !== project.slug &&
            p.category === project.category
        )
        .slice(0, 3)

  return (
    <main className="bg-[rgb(var(--color-bg))]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">

        <div className="relative h-[360px] md:h-[420px] lg:h-[460px]">
          <Image
            src={cloudinaryImage(project.cover_image, "banner")}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />
        </div>

        <div className="absolute inset-0 flex items-center z-10">
          <div className="container-main">
            <div className="max-w-[760px]">

              <p className="caption-light mb-4">
                <Link href="/">Home</Link> /{" "}
                <Link href="/portfolio">Portfolio</Link>
              </p>

              <p className="caption-light uppercase tracking-wider mb-2">
                {project.category}
              </p>

              <h1 className="text-[32px] md:text-[42px] font-semibold text-white leading-tight mb-4">
                {project.title}
              </h1>

              <p className="caption-light">
                {project.location} • {project.year}
              </p>

            </div>
          </div>
        </div>

      </section>

      {/* ================= CONTENT ================= */}
      <section className="section">
        <div className="container-main grid md:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="md:col-span-2 space-y-10">

            <div>
              <h2 className="h2 mb-4">Deskripsi Proyek</h2>
              <p className="body text-muted">{project.description}</p>
            </div>

            {project.challenge && (
              <div>
                <h2 className="h2 mb-4">Tantangan</h2>
                <p className="body text-muted">{project.challenge}</p>
              </div>
            )}

            {project.solution && (
              <div>
                <h2 className="h2 mb-4">Solusi</h2>
                <p className="body text-muted">{project.solution}</p>
              </div>
            )}

            {project.result && (
              <div>
                <h2 className="h2 mb-4">Hasil</h2>
                <p className="body text-muted">{project.result}</p>
              </div>
            )}

            {/* ================= GALLERY ================= */}
            {project.gallery_images.length > 0 && (
              <div>
                <h2 className="h2 mb-4">Dokumentasi Proyek</h2>

                <div className="grid sm:grid-cols-2 gap-4">

                  {project.gallery_images.map((img, i) => (
                    <div
                      key={i}
                      className="
                        relative h-56
                        rounded-[var(--radius-lg)]
                        overflow-hidden
                        group
                        border border-[rgb(var(--color-border))]
                      "
                    >
                      <Image
                        src={cloudinaryImage(img, "gallery")}
                        alt={`Gallery ${i}`}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                    </div>
                  ))}

                </div>
              </div>
            )}

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* INFO */}
            <div className="card-premium sticky top-24">

              <h3 className="h3 mb-4">Informasi Proyek</h3>

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
                <Link href="/kontak" className="btn btn-primary w-full">
                  Konsultasi Proyek Serupa
                </Link>
              </div>

            </div>


          </div>

        </div>
      </section>

      {/* ================= SEO INTERNAL LINK ================= */}
      <section className="section-tight">
        <div className="container-main max-w-[720px]">

          <h2 className="h2 mb-3">
            Layanan Terkait Proyek Ini
          </h2>

          <p className="body text-muted mb-4">
            Proyek ini merupakan bagian dari layanan profesional kami
            dalam bidang perencanaan dan konstruksi. Kami menyediakan
            solusi terintegrasi mulai dari perencanaan ruang,
            arsitektur, rekayasa teknik hingga investigasi tanah.
          </p>

          <div className="flex flex-wrap gap-3">

            {services.map((s) => (
              <Link key={s.href} href={s.href} className="btn btn-outline">
                {s.name}
              </Link>
            ))}

          </div>

        </div>
      </section>      

      {/* ================= RELATED ================= */}
      <section className="section-tight bg-soft">
        <div className="container-main">

          <h2 className="h2 mb-6">
            Proyek Terkait
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="group block rounded-[var(--radius-lg)] overflow-hidden border border-[rgb(var(--color-border))]"
              >

                <div className="relative h-40">
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
  )
}