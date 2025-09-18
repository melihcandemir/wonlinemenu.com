import img from "../assets/wonlinescreen-2.png";
import zipFile from "../assets/wonline11082025.zip";

export default function SectionFour() {
  // Zip dosyasını indirme fonksiyonu
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = zipFile;
    link.download = "wonline11082025.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-8">
      <div className="flex-shrink-0 mb-6 w-full lg:mb-0 lg:w-1/2">
        <div className="rounded-lg overflow-hidden w-full">
          <img
            className="top-0 left-0 w-full h-full"
            src={img}
            alt="Program arayüz"
          />
        </div>
      </div>

      <div className="lg:w-1/2 text-center md:text-left">
        <h3 className="text-lg md:text-2xl text-gray-600">
          Wonlinemenu Masa üstü Programı
        </h3>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Wonlinemenu Programı
        </h1>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          Wonlinemenu yazılımı Windows 10 ve üzeri işletim sisteminde çalışır.
          WhatsApp üzerinden sipariş alabilir, siparişinizin fişini
          yazdırabilir, ürünlerinizi güncelleyebilir, bildirim sesini
          değiştirebilir ve diğer ayarlarınızı yapabilirsiniz.
        </p>
        <p className="text-gray-800 italic mt-4">
          “Yalnızca wonlinemenu sipariş sistemini kullananlar içindir.”
        </p>
        <button
          onClick={handleDownload}
          className="text-white bg-green-600 focus:outline-none hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-5 w-full"
        >
          İndir
        </button>
      </div>
    </div>
  );
}
