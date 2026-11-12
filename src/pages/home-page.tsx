import { useRef } from "react"

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

          <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-[21rem]">
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-full bg-primary/15 blur-3xl"
            />
            <div className="relative rounded-[3rem] border border-white/20 bg-[#171717] p-[9px] shadow-[0_35px_100px_-35px_rgba(0,0,0,0.55)]">
              <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.45rem] bg-[#edf2ee]">
                <img
                  src="/app-preview.png"
                  alt="Ecrã da aplicação Viora"
                  className="absolute inset-0 size-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
                <div
                  aria-hidden="true"
                  className="absolute top-3 left-1/2 z-10 h-[13px] w-[68px] -translate-x-1/2 rounded-full bg-slate-950 shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
