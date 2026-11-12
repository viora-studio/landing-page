import { createContext, useCallback, useContext, useMemo, useState } from "react"
import type { ReactNode } from "react"

import { translations, type Language } from "./translations"

type TranslationTree = (typeof translations)[Language]
type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: TranslationTree
}

const STORAGE_KEY = "viora-language"
const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === "pt" || stored === "en") return stored

  return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  const setLanguage = useCallback((nextLanguage: Language) => {
    localStorage.setItem(STORAGE_KEY, nextLanguage)
    document.documentElement.lang = nextLanguage
    setLanguageState(nextLanguage)
  }, [])

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language, setLanguage],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within LanguageProvider")
  return context
}

export type { Language }
