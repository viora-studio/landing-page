"use client"

import { useState } from "react"
import { Android } from "@/components/ui/android"
import { Iphone } from "@/components/ui/iphone"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

type Platform = "android" | "ios"

export interface AppPreviewTabsProps {
  /** Screenshots for each platform and appearance. */
  images?: {
    android: { light: string; dark: string }
    ios: { light: string; dark: string }
  }
  /** Accessible labels for the screenshots. */
  alt?: Partial<Record<Platform, string>>
  className?: string
}

/**
 * A responsive app preview with platform tabs and automatic light/dark
 * screenshot selection. The phone frame remains native to each platform.
 */
export function AppPreviewTabs({
  images = {
    android: {
      light: "/app-preview-android-light.png",
      dark: "/app-preview-android-dark.png",
    },
    ios: {
      light: "/app-preview-ios-light.png",
      dark: "/app-preview-ios-dark.png",
    },
  },
  alt = {},
  className,
}: AppPreviewTabsProps) {
  const [platform, setPlatform] = useState<Platform>("android")

  const frameClassName = cn(
    "relative w-full drop-shadow-[0_35px_70px_rgba(0,0,0,0.28)]",
    platform === "android"
      ? "max-w-[17rem] sm:max-w-[19rem]"
      : "max-w-[17rem] sm:max-w-[19rem]"
  )

  return (
    <div className={cn("flex w-full flex-col items-center gap-7", className)}>
      <Tabs
        value={platform}
        onValueChange={(value) => setPlatform(value as Platform)}
        className="items-center"
      >
        <TabsList
          aria-label="Escolher plataforma"
          className="h-11 rounded-full border border-border/70 bg-background/70 p-1 shadow-lg shadow-black/5 backdrop-blur-xl"
        >
          <TabsTrigger
            value="android"
            className="h-9 min-w-28 rounded-full px-5 data-active:bg-foreground data-active:text-background"
          >
            Android
          </TabsTrigger>
          <TabsTrigger
            value="ios"
            className="h-9 min-w-28 rounded-full px-5 data-active:bg-foreground data-active:text-background"
          >
            iOS
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="relative flex w-full justify-center px-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 top-1/4 mx-auto aspect-square max-w-64 rounded-full bg-primary/20 blur-3xl"
        />
        <div
          className={cn(
            "relative transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none",
            frameClassName
          )}
        >
          {platform === "android" ? (
            <Android
              key="android"
              src={images.android.light}
              alt={alt.android ?? "Pré-visualização da aplicação Viora em Android"}
              className="dark:hidden"
            />
          ) : (
            <Iphone
              key="ios"
              src={images.ios.light}
              alt={alt.ios ?? "Pré-visualização da aplicação Viora em iOS"}
              className="dark:hidden"
            />
          )}
          {platform === "android" ? (
            <Android
              key="android-dark"
              src={images.android.dark}
              alt={alt.android ?? "Pré-visualização da aplicação Viora em Android"}
              className="hidden dark:block"
            />
          ) : (
            <Iphone
              key="ios-dark"
              src={images.ios.dark}
              alt={alt.ios ?? "Pré-visualização da aplicação Viora em iOS"}
              className="hidden dark:block"
            />
          )}
        </div>
      </div>
    </div>
  )
}
