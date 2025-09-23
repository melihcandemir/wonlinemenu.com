export default function PricingCard() {
  return (
    // Ana taşıyıcı: Kartları yan yana (md ve üzeri ekranlarda) dizer ve aralarında boşluk bırakır.
    <div className="flex flex-col md:flex-row gap-8 p-4">
      {/* --- Wonline EKO Kartı --- */}
      {/* Değişiklik: flex, flex-col ve w-full eklendi. Kartın kendisi dikey flex container oldu. */}
      <div className="flex flex-col w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden font-sans mb-6 md:mb-0">
        {/* Üst Kısım (Değişiklik yok) */}
        <div className="bg-stone-700 text-white text-center p-5">
          <h2 className="text-3xl font-bold">Wonline EKO</h2>
          <p className="text-white mt-2">Kurulum + 1 Yıl kullanım.</p>
          <div className="my-6">
            <span className="text-7xl font-extrabold">600€</span>
          </div>
          <p className="text-green-600 font-semibold text-lg">
            Bir sonraki yıl yenileme ücreti: 300€
          </p>
          <p className="text-white mt-4 text-sm px-4">
            Sistem üzerinden Yıllık 25,000€ altında sipariş alan işletmeler
            içindir.
          </p>
        </div>

        {/* Alt Kısım (Beyaz Alan - Özellikler) */}
        {/* Değişiklik: flex, flex-col ve flex-grow eklendi. Bu alanın dikey olarak büyümesini sağlar. */}
        <div className="flex flex-col flex-grow p-8">
          {/* Değişiklik: flex-grow eklendi. Bu div'in mevcut alanı doldurmasını ve butonu aşağı itmesini sağlar. */}
          <div className="flex-grow text-center text-gray-700">
            <p className="py-4 border-b border-gray-200">
              1 Web sitesi (www.siteadi.com)
            </p>
            <p className="py-4 border-b border-gray-200">10GB aylık trafik</p>
            <p className="py-4 border-b border-gray-200">
              Max. 25,000€ yıllık ciro
            </p>
            <p className="py-4">Online ödeme</p>
          </div>

          {/* Satın Al Butonu (Değişiklik yok) */}
          <div className="mt-8">
            <button
              onClick={() =>
                window.open("https://wa.me/905409505454", "_blank")
              }
              className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 cursor-pointer"
            >
              Satın Al
            </button>
          </div>
        </div>
      </div>

      {/* --- Wonline PLUS Kartı --- */}
      {/* Değişiklik: flex, flex-col ve w-full eklendi. */}
      <div className="flex flex-col w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden font-sans">
        {/* Üst Kısım (Değişiklik yok) */}
        <div className="bg-stone-700 text-white text-center p-5">
          <h2 className="text-3xl font-bold">Wonline PLUS</h2>
          <p className="text-white mt-2">Kurulum + 1 Yıl kullanım.</p>
          <div className="my-6">
            <span className="text-7xl font-extrabold">700€</span>
          </div>
          <p className="text-green-600 font-semibold text-lg">
            Bir sonraki yıl yenileme ücreti: 600€
          </p>
          <p className="text-white mt-4 text-sm px-4">
            Limit istemeyen işletmeler için sınırsız üst düzey paket.
          </p>
        </div>

        {/* Alt Kısım (Beyaz Alan - Özellikler) */}
        {/* Değişiklik: flex, flex-col ve flex-grow eklendi. */}
        <div className="flex flex-col flex-grow p-8">
          {/* Değişiklik: flex-grow eklendi. */}
          <div className="flex-grow text-center text-gray-700">
            <p className="py-4 border-b border-gray-200">
              1 Web sitesi (www.siteadi.com)
            </p>
            <p className="py-4 border-b border-gray-200">
              Kasa & Garson sistemi
            </p>
            <p className="py-4 border-b border-gray-200">
              5 Adet şirket mail adresi. (info@sirketadi.com)
            </p>
            <p className="py-4 border-b border-gray-200">
              Sınırsız aylık trafik
            </p>
            <p className="py-4 border-b border-gray-200">Sınırsız ciro</p>
            <p className="py-4 border-b border-gray-200">
              Sosyal medya reklamı
            </p>
            <p className="py-4 border-b border-gray-200">7/24 Teknik destek</p>
            <p className="py-4">Online ödeme</p>
          </div>

          {/* Satın Al Butonu (Değişiklik yok) */}
          <div className="mt-8">
            <button
              onClick={() =>
                window.open("https://wa.me/905409505454", "_blank")
              }
              className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 cursor-pointer"
            >
              Satın Al
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
