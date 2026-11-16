import { ArrowUpRight, Building2, CalendarDays, ChartNoAxesCombined, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/i18n/language-provider"

export function CompaniesPage() {
  const { t } = useLanguage()

  const benefits = [
    { icon: MapPin, title: t.companies.benefits.claim.title, description: t.companies.benefits.claim.description },
    { icon: Building2, title: t.companies.benefits.manage.title, description: t.companies.benefits.manage.description },
    { icon: ChartNoAxesCombined, title: t.companies.benefits.stats.title, description: t.companies.benefits.stats.description },
    { icon: CalendarDays, title: t.companies.benefits.events.title, description: t.companies.benefits.events.description },
  ]

  return (
    <section className="relative mx-auto w-full max-w-3xl px-5 pt-32 pb-16 sm:px-8 sm:pt-36 sm:pb-24">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {t.companies.eyebrow}
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {t.companies.title}
      </h1>
      <p className="mt-8 text-lg leading-8 text-muted-foreground">
        {t.companies.description}
      </p>

      <Button asChild size="lg" className="mt-8">
        <a href="https://partner-viora.rodriaum.com" target="_blank" rel="noreferrer">
          {t.companies.portalAction}
          <ArrowUpRight data-icon="inline-end" />
        </a>
      </Button>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {benefits.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-border/60 bg-card/60 p-6 shadow-sm backdrop-blur"
          >
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-5" />
            </div>
            <h2 className="mt-5 text-lg font-semibold text-foreground">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

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

export function AboutPage() {
  const { t } = useLanguage()
  return <ComingSoonPage title={t.about.title} />
}
