import { useRef } from "react"

import { AppPreviewTabs } from "@/components/ui/app-preview-tabs"
import { LiquidButton } from "@/components/ui/liquid/liquid-button"
import { useLanguage } from "@/i18n/language-provider"

export function HomePage() {
  const { t } = useLanguage()
  const glassRootRef = useRef<HTMLElement>(null)

  return (
    <>
      <section ref={glassRootRef} className="home-wallpaper min-h-svh">
        <div className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-5 py-24 sm:px-8">
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white drop-shadow-lg sm:text-7xl">
            Viora
            <span
              aria-hidden="true"
              className="animate-viora-dot-blink text-primary"
            >
              .
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/80 drop-shadow sm:text-lg sm:leading-8">
            {t.home.description}
          </p>
          <div className="mt-8">
            <LiquidButton
              href="#app"
              aria-label={t.home.explore}
              glassRootRef={glassRootRef}
              className="relative z-10 mt-4 text-white hover:text-white dark:hover:text-white"
            >
              {t.home.explore}
            </LiquidButton>
          </div>
        </div>
      </section>

      <section
        id="app"
        className="scroll-mt-20 overflow-hidden bg-background px-5 py-24 text-foreground sm:px-8 sm:py-32"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
              {t.home.sectionEyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {t.home.sectionTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
              {t.home.sectionDescription}
            </p>
          </div>

          <AppPreviewTabs />
        </div>
      </section>
    </>
  )
}
