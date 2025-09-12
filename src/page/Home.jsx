import Communication from "../component/Communication";
import Navbar from "../component/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Communication />
      <Navbar />
      {/* İçerik alanı için padding-top ekliyoruz ki fixed elementler altındaki içerik görünür olsun */}
      <div className="pt-32 md:pt-40">
        {/* Buraya sayfa içeriği gelecek */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Ana Sayfa İçeriği
          </h1>
          <p className="text-gray-600 mt-4">
            Bu alan sayfa içeriği için ayrılmıştır. Fixed navbar ve
            communication componentlerinin altında görünecektir.
          </p>
        </div>
      </div>
    </div>
  );
}
