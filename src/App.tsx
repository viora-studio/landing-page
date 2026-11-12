import { Navigate, Route, Routes } from "react-router-dom"

import { LegalLayout } from "@/components/legal-layout"
import { AboutPage, CompaniesPage } from "@/pages/coming-soon-pages"
import { HomePage } from "@/pages/home-page"
import { PrivacyPage } from "@/pages/privacy-page"
import { TermsPage } from "@/pages/terms-page"

export function App() {
  return (
    <LegalLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LegalLayout>
  )
}

export default App
