"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "english" | "hindi"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  translate: (englishText: string, hindiText: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("english")

  const translate = (englishText: string, hindiText: string) => {
    return language === "english" ? englishText : hindiText
  }

  return <LanguageContext.Provider value={{ language, setLanguage, translate }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
