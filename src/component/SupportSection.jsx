import Accordion from "./Accordion";
import { suportAccordionItems } from "./data";

export default function SupportSection() {
  return (
    <div className="w-full">
      <h3 className="text-sm md:text-xl text-gray-600 mt-5 md:mt-0 text-center">
        Sıkça Sorulan Sorular
      </h3>
      <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-4 text-center">
        Destek Paneli
      </h1>
      <p className="text-sm md:text-xl text-gray-600 mt-5 md:mt-0 mb-3 text-center">
        Sizlerden sorular geldikçe cevapları ile birlikte burada paylaşmaya
        devam edeceğiz.
      </p>
      <Accordion items={suportAccordionItems} />
    </div>
  );
}
