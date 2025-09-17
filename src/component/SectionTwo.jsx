export default function SectionTwo() {
  return (
    <div class="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
      <div class="flex-shrink-0 mb-8 lg:mb-0 lg:w-1/2">
        <h2 class="text-xl md:text-2xl font-normal text-gray-700 mb-4">
          Tanıtım Filmini İzleyin.
        </h2>
        <iframe
          class="bg-gray-200 rounded-lg"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GfqjnHAYwD0?si=5W2RLBZkmyJlLQDG"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div class="flex-grow lg:w-1/2">
        <h3 class="text-xl md:text-2xl font-normal text-gray-500 mb-2">
          Nasıl çalışır?
        </h3>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          wonlinemenu nedir?
        </h1>
        <p class="text-gray-600 leading-relaxed text-base md:text-lg">
          Web siteniz üzerinden müşterilerinizin seçmiş olduğu ürünleri otomatik
          olarak WhatsApp hesabına göndermesini sağlar.
        </p>
        <p class="text-gray-600 leading-relaxed text-base md:text-lg mt-4">
          Gelen her sipariş için müşterilerinize WhatsApp üzerinden yeniden
          cevap verebilirsiniz, aynı zamanda özel yazılımımız sayesinde
          dilediğiniz siparişi yazıcınızdan çıktı alabilirsiniz.
        </p>
      </div>
    </div>
  );
}
