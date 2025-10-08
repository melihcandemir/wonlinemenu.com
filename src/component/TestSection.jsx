import { tests } from "../config/demoTests";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { testSectionTranslations } from "../translations/testSection";

export default function TestSection() {
  const { selectedLanguage } = useContext(LanguageContext);
  const t = testSectionTranslations[selectedLanguage];
  return (
    <div className="flex flex-col">
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-bold text-center text-gray-800 mb-3">
            {t.title}
          </h1>
          <div className="max-w-2xl mx-auto bg-gray-200 rounded-lg shadow-md p-6">
            <ul className="space-y-3">
              {tests.map((test) => (
                <li
                  key={test.id}
                  className="p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <a
                    href={`https://${test.test}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:text-green-800 flex items-center justify-between"
                  >
                    <span>{test.langue}</span>
                    <span className="text-green-700">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-center mt-2">{t.viewReferenceText}</p>
        </div>
      </main>
    </div>
  );
}
