import { useLanguage } from "../context/LanguageContext";
import { sectionFiveTranslations } from "../translations/sectionFive";

export default function SectionFive() {
  const { selectedLanguage } = useLanguage();
  const translations = sectionFiveTranslations[selectedLanguage];
  return (
    <div className="w-full bg-[#2c2a29] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col text-center items-center space-y-12 md:space-y-0 md:space-x-8 lg:space-x-16">
          <h1 className="text-5xl font-bold text-white">
            {translations.title}
          </h1>
          <button
            onClick={() => window.open("https://wa.me/905409505454", "_blank")}
            className="text-white bg-green-600 focus:outline-none hover:bg-green-800 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 md:mt-10 w-full cursor-pointer"
          >
            {translations.orderButton}
          </button>
        </div>
      </div>
    </div>
  );
}
