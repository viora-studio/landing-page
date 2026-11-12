import { useLanguage } from "@/i18n/language-provider"

function ComingSoonPage({ title }: { title: string }) {
  const { t } = useLanguage()

  return (
    <section className="flex min-h-[70svh] items-center justify-center px-5 py-24 text-center sm:px-8">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
          {t.comingSoon.status}
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  )
}

export function CompaniesPage() {
  const { t } = useLanguage()
  return <ComingSoonPage title={t.companies.title} />
}

export function AboutPage() {
  const { t } = useLanguage()
  return <ComingSoonPage title={t.about.title} />
}
