import { useEffect, useState, type RefObject } from "react"

export type LiquidGlassConfig = Record<string, boolean | number | string>
export type LiquidGlassStatus = "loading" | "ready" | "fallback"

type UseLiquidGlassOptions = {
  rootRef: RefObject<HTMLElement | null>
  glassElementRef: RefObject<HTMLElement | null>
  config: {
    light: LiquidGlassConfig
    dark?: LiquidGlassConfig
  }
}

export function useLiquidGlass({
  rootRef,
  glassElementRef,
  config,
}: UseLiquidGlassOptions) {
  const [status, setStatus] = useState<LiquidGlassStatus>("loading")
  const lightConfig = JSON.stringify(config.light)
  const darkConfig = JSON.stringify({ ...config.light, ...config.dark })

  useEffect(() => {
    const root = rootRef.current
    const glassElement = glassElementRef.current

    if (!root || !glassElement) {
      setStatus("fallback")
      return
    }

    setStatus("loading")
    let cancelled = false
    let destroy: (() => void) | undefined
    const updateGlassConfig = () => {
      glassElement.dataset.config = document.documentElement.classList.contains(
        "dark"
      )
        ? darkConfig
        : lightConfig
    }

    updateGlassConfig()
    const themeObserver = new MutationObserver(updateGlassConfig)
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    void import("@ybouane/liquidglass")
      .then(({ LiquidGlass }) =>
        LiquidGlass.init({ root, glassElements: [glassElement] })
      )
      .then((instance) => {
        if (cancelled) {
          instance.destroy()
          return
        }

        destroy = () => instance.destroy()
        setStatus("ready")
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          setStatus("fallback")
          console.warn(
            "LiquidGlass could not initialize the glass effect.",
            error
          )
        }
      })

    return () => {
      cancelled = true
      themeObserver.disconnect()
      destroy?.()
    }
  }, [darkConfig, glassElementRef, lightConfig, rootRef])

  return status
}
