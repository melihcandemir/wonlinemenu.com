export default function SectionThree() {
  return (
    <div className="w-full bg-stone-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-12 md:space-y-0 md:space-x-8 lg:space-x-16">
          <div className="flex-1 text-center max-w-sm">
            <div className="flex justify-center mb-4">
              <svg
                className="w-[100px] h-[100px] text-green-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                  d="M4 4h6v6H4V4Zm10 10h6v6h-6v-6Zm0-10h6v6h-6V4Zm-4 10h.01v.01H10V14Zm0 4h.01v.01H10V18Zm-3 2h.01v.01H7V20Zm0-4h.01v.01H7V16Zm-3 2h.01v.01H4V18Zm0-4h.01v.01H4V14Z"
                />
                <path
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                  d="M7 7h.01v.01H7V7Zm10 10h.01v.01H17V17Z"
                />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-green-600 mb-2">
              QR KODU İLE SİPARİŞ ALMA
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Her masaya farklı bir QR kodu oluşturarak, Masa numarası üzerinden
              sipariş alabilir, Müşterilerinize anında cevap verebilirsiniz.
            </p>
          </div>

          <div className="flex-1 text-center max-w-sm">
            <div className="flex justify-center mb-4">
              <svg
                className="w-[100px] h-[100px] text-green-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.013 6.175 7.006 9.369l5.007 3.194-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194 5.007 3.194ZM6.981 17.806l5.006-3.193 5.006 3.193L11.987 21l-5.006-3.194Z" />
                <path d="m12.013 12.545 5.006-3.194-5.006-3.176 4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194-4.98-3.211Z" />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-green-600 mb-2">
              PAKET SERVİSİ
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Aynı sistem üzerinden paket servisi siparişi alabilir. Anında
              konum yollama, sesli mesaj gibi özellikleri kullanabilirsiniz.
            </p>
          </div>

          <div className="flex-1 text-center max-w-sm">
            <div className="flex justify-center mb-4">
              <svg
                className="w-[100px] h-[100px] text-green-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-green-600 mb-2">
              GEL - AL
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Müşterileriniz seçmiş olduğu siparişi, kaç dakika sonra gelip
              alacağını belirterek size daha net bir bilgi aktarabilir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
