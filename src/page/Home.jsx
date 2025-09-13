import { useEffect, useState } from "react";
import Communication from "../component/Communication";
import Navbar from "../component/Navbar";
import SectionOne from "../component/SectionOne";

export default function Home() {
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
      if (window.scrollY > 50 || isMobile) {
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

  return (
    <div className="flex flex-col">
      <Communication isVisible={isVisible} />
      <Navbar isVisible={isVisible} />
      {/* İçerik alanı için padding-top ekliyoruz ki fixed elementler altındaki içerik görünür olsun */}
      <div className="pt-20 md:pt-24">
        {/* Buraya sayfa içeriği gelecek */}
        <div className="container mx-auto px-4 py-8">
          {/* <h1 className="text-2xl font-bold text-gray-900">
            Ana Sayfa İçeriği
          </h1>
          <p className="text-gray-600 mt-4">
            Bu alan sayfa içeriği için ayrılmıştır. Fixed navbar ve
            communication componentlerinin altında görünecektir.
          </p> */}

          <SectionOne />
        </div>
      </div>
    </div>
  );
}
