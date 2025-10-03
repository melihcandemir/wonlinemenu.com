import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  // Dil seçenekleri
  const languages = [
    // { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    // { code: "de", name: "Deutsch", flag: "🇩🇪" },
    // { code: "nl", name: "Nederlands", flag: "🇳🇱" },
    // { code: "fr", name: "Français", flag: "🇫🇷" },
    // { code: "it", name: "Italiano", flag: "🇮🇹" },
    // { code: "en", name: "English", flag: "🇬🇧" },
    { code: "tr", name: "Türkçe", flag: "TR" },
    { code: "de", name: "Deutsch", flag: "DE" },
    { code: "nl", name: "Nederlands", flag: "NL" },
    { code: "fr", name: "Français", flag: "FR" },
    { code: "it", name: "Italiano", flag: "IT" },
    { code: "en", name: "English", flag: "EN" },
  ];

  // Seçili dili bul
  const currentLanguage = languages.find(
    (lang) => lang.code === selectedLanguage
  );

  // Dil değiştirme fonksiyonu
  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Ana Buton */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full p-2 group cursor-pointer"
          aria-label="Dil Seçici"
        >
          <div className="flex items-center space-x-2">
            <span>{currentLanguage?.flag}</span>
            <svg
              className={`w-4 h-4  transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>

        {/* Dil Seçenekleri Dropdown */}
        {isOpen && (
          <div className="absolute bottom-full left-0 mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 min-w-[160px] animate-in slide-in-from-bottom-2 duration-200">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center space-x-3 ${
                  selectedLanguage === language.code
                    ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <span>{language.flag}</span>
                <span className="text-sm font-medium">{language.name}</span>
                {selectedLanguage === language.code && (
                  <svg
                    className="w-4 h-4 ml-auto text-green-600 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Overlay - Dropdown dışına tıklandığında kapatmak için */}
      {isOpen && (
        <div className="fixed inset-0 -z-10" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
