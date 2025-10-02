import { useLanguage } from "../context/LanguageContext";
import { sectionTwoTranslations } from "../translations/sectionTwo";

export default function SectionTwo() {
  const { selectedLanguage } = useLanguage();
  const translations = sectionTwoTranslations[selectedLanguage];
  return (
    <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
      <div className="flex-shrink-0 mb-6 w-full md:mb-0 lg:w-1/2">
        {/* <h2 className="text-xl md:text-2xl text-center md:text-left font-normal text-gray-700 mb-3">
          Tanıtım Filmini İzleyin.
        </h2> */}
        <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/GfqjnHAYwD0?si=5W2RLBZkmyJlLQDG"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="lg:w-1/2 text-center md:text-left">
        <h3 className="text-lg md:text-2xl text-gray-600">
          {translations.howItWorks}
        </h3>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          {translations.whatIs}
        </h1>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          {translations.description}
        </p>
      </div>
    </div>
  );
}
