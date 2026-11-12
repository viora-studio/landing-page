import { LegalDocument } from "@/components/legal-document"
import { useLanguage } from "@/i18n/language-provider"

export function TermsPage() {
  const { t } = useLanguage()
  const terms = t.terms
  const sections = [
    terms.sections.acceptance,
    { ...terms.sections.eligibility, items: [terms.sections.eligibility.age, terms.sections.eligibility.responsibility, terms.sections.eligibility.oneAccount] },
    { ...terms.sections.usage, items: [terms.sections.usage.license, terms.sections.usage.ugc] },
    terms.sections.prohibited,
    terms.sections.location,
    terms.sections.ip,
    terms.sections.liability,
    terms.sections.termination,
    terms.sections.law,
    terms.sections.changes,
    terms.sections.contact,
  ]

  return <LegalDocument badge={terms.badge} title={terms.title} intro={terms.intro} note={terms.updated} sections={sections} />
}
