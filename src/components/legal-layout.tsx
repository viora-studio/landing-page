import { Link, NavLink } from "react-router-dom"

import { useLanguage } from "@/i18n/language-provider"
import type { Language } from "@/i18n/translations"

export function LegalLayout({ children }: { children: React.ReactNode }) {
  const { language, setLanguage, t } = useLanguage()

  function toggleLanguage() {
    const nextLanguage: Language = language === "pt" ? "en" : "pt"
    setLanguage(nextLanguage)
  }

  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="text-xl font-semibold tracking-tight">viora<span className="text-primary">.</span></Link>
          <nav aria-label="Main navigation" className="flex items-center gap-5 text-sm">
            <NavLink to="/privacy" className={({ isActive }) => isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}>{t.nav.privacy}</NavLink>
            <NavLink to="/terms" className={({ isActive }) => isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}>{t.nav.terms}</NavLink>
            <button type="button" onClick={toggleLanguage} className="rounded-full border border-border px-3 py-1.5 font-medium transition-colors hover:bg-muted" aria-label="Change language">{t.nav.language}</button>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-7 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>{t.footer.rights.replace("{{year}}", String(new Date().getFullYear()))}</span>
          <nav aria-label="Legal navigation" className="flex gap-5">
            <Link className="hover:text-foreground" to="/privacy">{t.footer.privacy}</Link>
            <Link className="hover:text-foreground" to="/terms">{t.footer.terms}</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
