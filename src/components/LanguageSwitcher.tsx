"use client";

import { useLanguage } from "@/hooks/useLanguage";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        onClick={() => setLang("es")}
        className={`px-2 py-1 rounded transition-colors ${
          lang === "es"
            ? "text-blue-DEFAULT font-bold"
            : "text-gray-400 hover:text-gray-600"
        }`}
      >
        ES
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => setLang("en")}
        className={`px-2 py-1 rounded transition-colors ${
          lang === "en"
            ? "text-blue-DEFAULT font-bold"
            : "text-gray-400 hover:text-gray-600"
        }`}
      >
        EN
      </button>
    </div>
  );
}
