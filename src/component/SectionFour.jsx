import img from "../assets/wonlinescreen-2.png";
import { useLanguage } from "../context/LanguageContext";
import { sectionFourTranslations } from "../translations/sectionFour";

export default function SectionFour() {
  const { selectedLanguage } = useLanguage();
  const translations = sectionFourTranslations[selectedLanguage];

  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-8">
      <div className="flex-shrink-0 mb-6 w-full lg:mb-0 lg:w-1/2">
        <div className="rounded-lg overflow-hidden w-full">
          <img
            className="top-0 left-0 w-full h-full"
            src={img}
            alt={translations.imageAlt}
          />
        </div>
      </div>

      <div className="lg:w-1/2 text-center md:text-left">
        <h3 className="text-lg md:text-2xl text-gray-600">
          {translations.subtitle}
        </h3>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          {translations.title}
        </h1>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          {translations.description}
        </p>
        <p className="text-gray-800 italic mt-4">{translations.note}</p>
        <a href="https://wonline.menu/wonline11082025.zip">
          <button className="text-white bg-green-600 focus:outline-none hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-5 w-full cursor-pointer">
            {translations.downloadButton}
          </button>
        </a>
      </div>
    </div>
  );
}
