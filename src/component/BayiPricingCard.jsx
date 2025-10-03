import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { bayiPricingCardTranslations } from "../translations/bayiPricingCard";

export default function BayiPricingCard() {
  const { selectedLanguage } = useContext(LanguageContext);
  const t = bayiPricingCardTranslations[selectedLanguage];
  return (
    // Ana taşıyıcı: Kartları yan yana (md ve üzeri ekranlarda) dizer ve aralarında boşluk bırakır.
    <div className="flex flex-col md:flex-row gap-8 p-4">
      {/* --- Wonline EKO Kartı --- */}
      {/* Değişiklik: flex, flex-col ve w-full eklendi. Kartın kendisi dikey flex container oldu. */}
      <div className="flex flex-col w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden font-sans mb-6 md:mb-0">
        {/* Üst Kısım (Değişiklik yok) */}
        <div className="bg-[#2c2a29] text-white text-center p-5">
          <h2 className="text-3xl font-bold">{t.ekoTitle}</h2>
          <p className="text-white mt-2">{t.setupAndUsage}</p>
          <div className="my-6">
            <span className="text-7xl font-extrabold">250€</span>
          </div>
          <p className="text-green-600 font-semibold text-lg">
            {t.renewalFeeText} 200€
          </p>
          <p className="text-white mt-4 text-sm px-4">{t.ekoDescription}</p>
        </div>

        {/* Alt Kısım (Beyaz Alan - Özellikler) */}
        {/* Değişiklik: flex, flex-col ve flex-grow eklendi. Bu alanın dikey olarak büyümesini sağlar. */}
        <div className="flex flex-col flex-grow p-8">
          {/* Değişiklik: flex-grow eklendi. Bu div'in mevcut alanı doldurmasını ve butonu aşağı itmesini sağlar. */}
          <div className="flex-grow text-center text-gray-700">
            <p className="py-4 border-b border-gray-200">
              {t.features.website}
            </p>
            <p className="py-4 border-b border-gray-200">
              {t.features.traffic10GB}
            </p>
            <p className="py-4 border-b border-gray-200">
              {t.features.maxRevenue}
            </p>
            <p className="py-4">{t.features.onlinePayment}</p>
          </div>

          {/* Satın Al Butonu (Değişiklik yok) */}
          <div className="mt-8">
            <button
              onClick={() =>
                window.open("https://wa.me/905409505454", "_blank")
              }
              className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 cursor-pointer"
            >
              {t.buyButton}
            </button>
          </div>
        </div>
      </div>

      {/* --- Wonline PLUS Kartı --- */}
      {/* Değişiklik: flex, flex-col ve w-full eklendi. */}
      <div className="flex flex-col w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden font-sans">
        {/* Üst Kısım (Değişiklik yok) */}
        <div className="bg-[#2c2a29] text-white text-center p-5">
          <h2 className="text-3xl font-bold">{t.plusTitle}</h2>
          <p className="text-white mt-2">{t.setupAndUsage}</p>
          <div className="my-6">
            <span className="text-7xl font-extrabold">350€</span>
          </div>
          <p className="text-green-600 font-semibold text-lg">
            {t.renewalFeeText} 300€
          </p>
          <p className="text-white mt-4 text-sm px-4">{t.plusDescription}</p>
        </div>

        {/* Alt Kısım (Beyaz Alan - Özellikler) */}
        {/* Değişiklik: flex, flex-col ve flex-grow eklendi. */}
        <div className="flex flex-col flex-grow p-8">
          {/* Değişiklik: flex-grow eklendi. */}
          <div className="flex-grow text-center text-gray-700">
            <p className="py-4 border-b border-gray-200">
              {t.features.website}
            </p>
            <p className="py-4 border-b border-gray-200">
              {t.features.posSystem}
            </p>
            <p className="py-4 border-b border-gray-200">
              {t.features.companyEmails}
            </p>
            <p className="py-4 border-b border-gray-200">
              {t.features.unlimitedTraffic}
            </p>
            <p className="py-4 border-b border-gray-200">
              {t.features.unlimitedRevenue}
            </p>
            <p className="py-4 border-b border-gray-200">
              {t.features.socialMedia}
            </p>
            <p className="py-4 border-b border-gray-200">
              {t.features.support}
            </p>
            <p className="py-4">{t.features.onlinePayment}</p>
          </div>

          {/* Satın Al Butonu (Değişiklik yok) */}
          <div className="mt-8">
            <button
              onClick={() =>
                window.open("https://wa.me/905409505454", "_blank")
              }
              className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 cursor-pointer"
            >
              {t.buyButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
