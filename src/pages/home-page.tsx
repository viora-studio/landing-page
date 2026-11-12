import { Compass, MapPin, Search, UserRound, Users } from "lucide-react"

import { LiquidButton } from "@/components/ui/liquid/liquid-button"
import { useLanguage } from "@/i18n/language-provider"
import { useRef } from "react"

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

            <div className="mt-9 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm text-foreground">
                <Users aria-hidden="true" className="size-4 text-primary" />
                {t.home.featurePeople}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm text-foreground">
                <MapPin aria-hidden="true" className="size-4 text-primary" />
                {t.home.featurePlaces}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm text-foreground">
                <Compass aria-hidden="true" className="size-4 text-primary" />
                {t.home.featureMoments}
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-[21rem]">
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-full bg-primary/15 blur-3xl"
            />
            <div className="relative rounded-[3rem] border border-white/20 bg-[#171717] p-[9px] shadow-[0_35px_100px_-35px_rgba(0,0,0,0.55)]">
              <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.45rem] bg-[#edf2ee] text-slate-900">
                <div className="flex h-10 items-center justify-between px-5 pt-1 text-[10px] font-semibold">
                  <span>9:41</span>
                  <span
                    aria-hidden="true"
                    className="h-[13px] w-[68px] rounded-full bg-slate-950"
                  />
                  <span className="tracking-[0.12em]">● ● ●</span>
                </div>

                <div className="flex items-center justify-between px-5 pt-2 pb-4">
                  <div className="text-[1.7rem] leading-none font-semibold tracking-tight">
                    Viora<span className="text-primary">.</span>
                  </div>
                  <div className="grid size-9 place-items-center rounded-full bg-white shadow-sm">
                    <Search aria-hidden="true" className="size-4" />
                  </div>
                </div>

                <div className="relative h-[49%] overflow-hidden bg-[#e7eee7]">
                  <div className="absolute top-[8%] -left-[12%] h-24 w-40 rotate-[-18deg] rounded-[2rem] bg-[#d5e8d7]" />
                  <div className="absolute top-[37%] -right-[15%] h-28 w-40 rotate-[24deg] rounded-[2rem] bg-[#d6e7d8]" />
                  <div className="absolute top-[58%] left-[8%] h-20 w-28 rounded-[1.7rem] bg-[#d9e9d8]" />
                  <div className="absolute top-[36%] -left-[20%] h-5 w-[145%] rotate-[-16deg] rounded-full bg-white shadow-sm" />
                  <div className="absolute -top-[15%] left-[42%] h-[130%] w-4 rotate-[19deg] rounded-full bg-white shadow-sm" />
                  <div className="absolute top-[17%] left-[5%] h-3 w-[100%] rotate-[28deg] rounded-full bg-white/90" />
                  <div className="absolute top-[73%] left-[14%] h-3 w-[90%] rotate-[-8deg] rounded-full bg-white/90" />

                  <div className="absolute top-[27%] left-[17%] grid size-10 place-items-center rounded-full border-[3px] border-white bg-primary text-white shadow-lg">
                    <UserRound aria-hidden="true" className="size-5" />
                  </div>
                  <div className="absolute top-[15%] right-[18%] grid size-9 place-items-center rounded-full border-[3px] border-white bg-[#263c50] text-white shadow-lg">
                    <UserRound aria-hidden="true" className="size-4" />
                  </div>
                  <div className="absolute right-[24%] bottom-[20%] grid size-10 place-items-center rounded-full border-[3px] border-white bg-[#c77b54] text-white shadow-lg">
                    <UserRound aria-hidden="true" className="size-5" />
                  </div>
                  <div className="absolute top-[53%] left-[47%] grid size-11 place-items-center rounded-full border-4 border-white bg-primary text-white shadow-xl">
                    <MapPin aria-hidden="true" className="size-5" />
                  </div>

                  <div className="absolute bottom-4 left-4 rounded-full border border-white/70 bg-white/90 px-3 py-2 text-[10px] font-medium shadow-md backdrop-blur">
                    {t.home.previewMap}
                  </div>
                </div>

                <div className="relative -mt-5 rounded-t-[1.7rem] bg-white px-5 pt-5 pb-4 shadow-[0_-8px_24px_rgba(15,23,42,0.08)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
                        {t.home.previewEyebrow}
                      </p>
                      <h3 className="mt-1 text-[17px] font-semibold tracking-tight">
                        {t.home.previewNearby}
                      </h3>
                    </div>
                    <div className="flex -space-x-2">
                      <span className="grid size-8 place-items-center rounded-full border-2 border-white bg-[#e9c7ad] text-slate-700">
                        <UserRound aria-hidden="true" className="size-4" />
                      </span>
                      <span className="grid size-8 place-items-center rounded-full border-2 border-white bg-[#c7d8e8] text-slate-700">
                        <UserRound aria-hidden="true" className="size-4" />
                      </span>
                      <span className="grid size-8 place-items-center rounded-full border-2 border-white bg-[#d8d0ed] text-slate-700">
                        <UserRound aria-hidden="true" className="size-4" />
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
                    <div className="grid size-9 place-items-center rounded-xl bg-primary/10 text-primary">
                      <MapPin aria-hidden="true" className="size-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold">
                        {t.home.previewMap}
                      </p>
                      <p className="mt-0.5 text-[10px] text-slate-500">
                        {t.home.previewMapCaption}
                      </p>
                    </div>
                    <span className="size-2 rounded-full bg-emerald-500" />
                  </div>

                  <div className="mt-5 flex items-center justify-around border-t border-slate-100 pt-4 text-slate-400">
                    <MapPin
                      aria-hidden="true"
                      className="size-[18px] text-primary"
                    />
                    <Compass aria-hidden="true" className="size-[18px]" />
                    <Users aria-hidden="true" className="size-[18px]" />
                    <UserRound aria-hidden="true" className="size-[18px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
