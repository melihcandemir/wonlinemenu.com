import { createContext, useContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem("selectedLanguage");
  return savedLanguage || "tr"; // Eğer localStorage'da dil yoksa varsayılan olarak 'tr' kullan
};

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(getInitialLanguage);

  // Dil değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
