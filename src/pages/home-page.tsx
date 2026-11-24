import { useRef } from "react"

import { AppPreviewTabs } from "@/components/ui/app-preview-tabs"
import { LiquidButton } from "@/components/ui/liquid/liquid-button"
import { useLanguage } from "@/i18n/language-provider"

export function HomePage() {
  const { t } = useLanguage()
  const glassRootRef = useRef<HTMLElement>(null)

  return (
    <>
      <section
        ref={glassRootRef}
        className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden px-5 py-24 sm:px-8"
      >
        <div
          aria-hidden="true"
          className="home-wallpaper pointer-events-none absolute inset-0"
        />
        <h1 className="relative z-10 mx-auto w-full max-w-6xl text-5xl font-semibold tracking-tight text-white drop-shadow-lg sm:text-7xl">
          Viora
          <span
            aria-hidden="true"
            className="animate-viora-dot-blink text-brand"
          >
            .
          </span>
        </h1>
        <p className="relative z-10 mx-auto mt-4 w-full max-w-6xl text-base leading-7 text-white/80 drop-shadow sm:text-lg sm:leading-8">
          {t.home.description}
        </p>
        <LiquidButton
          href="#app"
          aria-label={t.home.explore}
          glassRootRef={glassRootRef}
          className="relative z-10 mx-auto mt-12 w-fit max-w-6xl text-white hover:text-white dark:hover:text-white"
        >
          {t.home.explore}
        </LiquidButton>
      </section>

      <section
        id="app"
        className="scroll-mt-20 overflow-hidden bg-background px-5 py-24 text-foreground sm:px-8 sm:py-32"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-brand uppercase">
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
