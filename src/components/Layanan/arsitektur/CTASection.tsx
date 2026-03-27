import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section-tight bg-soft">
      <div className="container-main">

        <div className="card-premium text-center py-10">

          <h2 className="h2 text-primary mb-3">
            Konsultasikan Kebutuhan Anda
          </h2>

          <p className="body text-muted mb-6 max-w-md mx-auto">
            Tim kami siap membantu merancang solusi arsitektur yang tepat dan efisien.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/kontak" className="btn btn-primary">
              Jadwalkan Diskusi
            </Link>
            <Link href="/portfolio" className="btn btn-outline">
              Lihat Portofolio
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}