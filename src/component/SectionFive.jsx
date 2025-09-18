export default function SectionFive() {
  return (
    <div className="w-full bg-stone-700 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-12 md:space-y-0 md:space-x-8 lg:space-x-16">
          <h1 className="text-5xl font-bold text-white">
            Fiyat ve daha fazla bilgi almak için bizimle iletişime geçin.
          </h1>
          <button
            onClick={() => window.open("https://wa.me/905409505454", "_blank")}
            className="text-white bg-green-600 focus:outline-none hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-5 w-full"
          >
            Sipariş ver
          </button>
        </div>
      </div>
    </div>
  );
}
