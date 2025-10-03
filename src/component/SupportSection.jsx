import Accordion from "./Accordion";
import { getSupportAccordionItems } from "./data";
import { useLanguage } from "../context/LanguageContext";
import { supportSectionTranslations } from "../translations/supportSection";

export default function SupportSection() {
  const { selectedLanguage } = useLanguage();
  const t = supportSectionTranslations[selectedLanguage];
  const supportItems = getSupportAccordionItems();

  return (
    <div className="w-full">
      <h3 className="text-sm md:text-xl text-gray-600 mt-5 md:mt-0 text-center">
        {t.frequentlyAskedQuestions}
      </h3>
      <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-4 text-center">
        {t.supportPanel}
      </h1>
      <p className="text-sm md:text-xl text-gray-600 mt-5 md:mt-0 mb-3 text-center">
        {t.moreQuestionsInfo}
      </p>
      <Accordion items={supportItems} />
    </div>
  );
}
