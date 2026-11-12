import { LegalDocument } from "@/components/legal-document"
import { useLanguage } from "@/i18n/language-provider"

export function PrivacyPage() {
  const { t } = useLanguage()
  const privacy = t.privacy
  const sections = [
    { title: privacy.sections.dataCollected.title, items: [privacy.sections.dataCollected.provided, privacy.sections.dataCollected.location, privacy.sections.dataCollected.usage, privacy.sections.dataCollected.device] },
    { ...privacy.sections.dataUse },
    { title: privacy.sections.dataSharing.title, items: [privacy.sections.dataSharing.users, privacy.sections.dataSharing.thirdParty, privacy.sections.dataSharing.legal] },
    { ...privacy.sections.rights },
    { ...privacy.sections.retention },
    { ...privacy.sections.security },
    { ...privacy.sections.cookies },
    { ...privacy.sections.contact },
  ]

  return <LegalDocument badge={privacy.badge} title={privacy.title} intro={privacy.intro} note={privacy.compliance} sections={sections} />
}
