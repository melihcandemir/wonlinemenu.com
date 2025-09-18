export default function SectionTwo() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
      <div className="flex-shrink-0 mb-6 w-full lg:mb-0 lg:w-1/2">
        {/* <h2 className="text-xl md:text-2xl text-center md:text-left font-normal text-gray-700 mb-3">
          Tanıtım Filmini İzleyin.
        </h2> */}
        <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/GfqjnHAYwD0?si=5W2RLBZkmyJlLQDG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="flex-grow lg:w-1/2 text-center md:text-left">
        <h3 className="text-lg md:text-2xl text-gray-600">Nasıl çalışır?</h3>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          wonlinemenu nedir?
        </h1>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          Web siteniz üzerinden müşterilerinizin seçmiş olduğu ürünleri otomatik
          olarak WhatsApp hesabına göndermesini sağlar. Gelen her sipariş için
          müşterilerinize WhatsApp üzerinden yeniden cevap verebilirsiniz, aynı
          zamanda özel yazılımımız sayesinde dilediğiniz siparişi yazıcınızdan
          çıktı alabilirsiniz.
        </p>
      </div>
    </div>
  );
}
