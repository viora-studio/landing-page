import { useLanguage } from "@/i18n/language-provider"

export function HomePage() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">Viora</p>
      <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-7xl">{t.home.title}</h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">{t.home.subtitle}</p>
    </section>
  )
}
