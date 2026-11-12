import { useLanguage } from "@/i18n/language-provider"

export function HomePage() {
  const { t } = useLanguage()

  return (
    <section className="home-wallpaper">
      <div className="mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8">
        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white drop-shadow-lg sm:text-7xl">
          Viora<span aria-hidden="true" className="animate-viora-dot-blink text-primary">.</span>
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-white/80 drop-shadow sm:text-lg sm:leading-8">
          {t.home.description}
        </p>
      </div>
    </section>
  )
}
