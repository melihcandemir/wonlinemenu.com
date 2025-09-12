import { useEffect, useState } from "react";

export default function Communication() {
  //
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Mobil görünüm kontrolü için
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px'in altı mobil olarak kabul edilir
    };

    // Scroll kontrolü için
    const handleScroll = () => {
      if (window.scrollY > 100 || isMobile) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Olay dinleyicilerini ekle
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Bileşen ilk yüklendiğinde kontrol et
    handleResize();
    handleScroll();

    //   // Bileşen kaldırıldığında olay dinleyicilerini temizle
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  // isVisible false ise bileşeni render etme
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 hidden md:block">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between border-b-1 border-gray-300 pb-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 font-bold">WhatsApp:</span>
          <a
            href="https://wa.me/905059654541"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            +90 540 950 54 54
          </a>
          <span className="text-gray-700">|</span>
          <a
            href="https://wa.me/33779555414"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            +33 7 78 56 34 14
          </a>
        </div>
        {/* <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors duration-300">
          SİPARİŞ VER
        </button> */}
      </div>
    </div>
  );
}
