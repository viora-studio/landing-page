import { Moon, Sun } from "lucide-react"
import { Link, NavLink } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/ui/footer"
import { Header, HeaderBrand, HeaderContent, HeaderTitle } from "@/components/ui/header"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "@/i18n/language-provider"
import type { Language } from "@/i18n/translations"

function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <Select
      value={language}
      onValueChange={(value) => {
        if (value === "pt" || value === "en") {
          setLanguage(value)
        }
      }}
    >
      <SelectTrigger
        aria-label={t.nav.languageLabel}
        className="h-9 w-fit rounded-full border-input bg-background px-3 text-foreground"
      >
        <SelectValue>{language.toUpperCase()}</SelectValue>
      </SelectTrigger>
      <SelectContent alignItemWithTrigger={false} className="min-w-32">
        <SelectItem value="pt">Português</SelectItem>
        <SelectItem value="en">English</SelectItem>
      </SelectContent>
    </Select>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { t } = useLanguage()

  const toggleTheme = () => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)

    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="relative rounded-full"
      onClick={toggleTheme}
      aria-label={t.nav.toggleTheme}
    >
      <Sun
        className="!size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
        aria-hidden="true"
      />
      <Moon
        className="absolute !size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        aria-hidden="true"
      />
      <span className="sr-only">{t.nav.toggleTheme}</span>
    </Button>
  )
}

export function LegalLayout({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <Header variant="floating" className="px-0 py-0">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <HeaderBrand>
            <Link to="/" aria-label={t.nav.home}>
              <HeaderTitle className="text-xl font-semibold tracking-tight">
                viora<span className="text-primary">.</span>
              </HeaderTitle>
            </Link>
          </HeaderBrand>

          <HeaderContent className="ml-auto gap-3">
            <nav aria-label={t.nav.navigationLabel} className="flex items-center gap-5 text-sm">
              <NavLink
                to="/privacy"
                className={({ isActive }) =>
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }
              >
                {t.nav.privacy}
              </NavLink>
              <NavLink
                to="/terms"
                className={({ isActive }) =>
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }
              >
                {t.nav.terms}
              </NavLink>
            </nav>
            <div className="flex items-center gap-2">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </HeaderContent>
        </div>
      </Header>

      <main className="flex-1">{children}</main>

      <Footer>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-7 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>
            {t.footer.rights.replace("{{year}}", String(new Date().getFullYear()))}
          </span>
          <nav aria-label={t.nav.navigationLabel} className="flex gap-5">
            <Link className="hover:text-foreground" to="/privacy">
              {t.footer.privacy}
            </Link>
            <Link className="hover:text-foreground" to="/terms">
              {t.footer.terms}
            </Link>
          </nav>
        </div>
      </Footer>
    </div>
  )
}
