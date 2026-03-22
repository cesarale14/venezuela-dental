"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import translations from "@/lib/translations";
import { Language } from "@/types";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (typeof translations)["es"] | (typeof translations)["en"];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("es");

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
  }, []);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
