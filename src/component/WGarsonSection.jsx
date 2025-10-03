import img from "../assets/AND.png";
import Accordion from "./Accordion";
import { wGarson } from "./data";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { wGarsonSectionTranslations } from "../translations/wGarsonSection";

export default function WGarsonSection() {
  const { selectedLanguage } = useContext(LanguageContext);
  const t = wGarsonSectionTranslations[selectedLanguage];

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
        <div className="lg:w-1/2 text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {t.title}
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            {t.description1}
          </p>
          <p className="text-gray-600 leading-relaxed text-base my-4">
            {t.description2}
          </p>
          <p className="text-gray-600 leading-relaxed text-base">
            {t.description3}
          </p>
          <p className="text-gray-600 leading-relaxed text-base my-4">
            {t.description4}
          </p>
          <p className="text-gray-600 leading-relaxed text-base mb-4">
            {t.note}
          </p>
        </div>
        <div className="flex-shrink-0 mb-6 w-full md:mb-0 lg:w-1/2">
          <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/JDRaGdXeBTo?si=opm79ZdJOy0pS_km"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img src={img} alt="1" className="w-70 mx-auto" />
        <Accordion items={wGarson} />
      </div>
    </>
  );
}
