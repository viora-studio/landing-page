import { useRef, type ComponentPropsWithoutRef, type RefObject } from "react"

import { Button } from "@/components/ui/button.tsx"
import { Skeleton } from "@/components/ui/skeleton"
import { useLiquidGlass } from "@/components/ui/liquid/liquid-glass.ts"
import { cn } from "@/lib/utils.ts"

type LiquidButtonProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string
  glassRootRef?: RefObject<HTMLElement | null>
}

const liquidButtonConfig = {
  light: {
    button: true,
    blurAmount: 0.25,
    cornerRadius: 30,
  },
  dark: {
    brightness: -0.3,
    cornerRadius: 50,
  },
}

export function LiquidButton({
  children,
  className,
  glassRootRef,
  href,
  ...props
}: LiquidButtonProps) {
  const rootRef = useRef<HTMLSpanElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const effectiveRootRef = glassRootRef ?? rootRef
  const glassStatus = useLiquidGlass({
    rootRef: effectiveRootRef,
    glassElementRef: buttonRef,
    config: liquidButtonConfig,
  })

  const button = (
    <Button
      variant="ghost"
      nativeButton={false}
      render={
        <a
          {...props}
          ref={buttonRef}
          href={href}
          aria-busy={glassStatus === "loading"}
          tabIndex={glassStatus === "loading" ? -1 : props.tabIndex}
        />
      }
      size="lg"
      className={cn(
        "bg-transparent !text-white shadow-none hover:bg-transparent",
        glassStatus === "loading" &&
          "pointer-events-none relative overflow-hidden rounded-full border border-white/40 !bg-white/20 !text-transparent shadow-lg backdrop-blur-md dark:border-white/20 dark:!bg-white/10",
        glassStatus === "ready" &&
          "relative z-10 rounded-full border border-white/60 !bg-white/25 !text-white shadow-lg backdrop-blur-md hover:!bg-white/35 focus-visible:ring-offset-2 dark:border-white/30 dark:!bg-white/10 dark:!text-white dark:hover:!bg-white/20",
        className
      )}
    >
      <span className={cn(glassStatus === "loading" && "invisible")}>
        {children}
      </span>
      {glassStatus === "loading" && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden rounded-full"
        >
          <Skeleton className="h-3 w-24 max-w-[65%] rounded-full bg-white/60 dark:bg-white/35" />
        </span>
      )}
    </Button>
  )

  if (glassRootRef) {
    return button
  }

  return (
    <span ref={rootRef} className="relative inline-flex">
      {button}
    </span>
  )
}
