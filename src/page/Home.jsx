import { useEffect, useState } from "react";
import Communication from "../component/Communication";
import Navbar from "../component/Navbar";
import SectionOne from "../component/SectionOne";
import SectionTwo from "../component/SectionTwo";
import SectionThree from "../component/SectionThree";
import SectionFour from "../component/SectionFour";
import SectionFive from "../component/SectionFive";
import SectionSix from "../component/SectionSix";
import Footer from "../component/Footer";

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

    // Bileşen kaldırıldığında olay dinleyicilerini temizle
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <>
      <Communication isVisible={isVisible} />
      <Navbar isVisible={isVisible} />

      {/* Ana içerik container'ı - sayfa ortasında ve responsive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:pt-25 lg:px-8">
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          <SectionOne />
          <SectionTwo />
        </div>
      </div>

      {/* SectionThree kendi arka planı ile tam genişlikte */}
      <div className="mt-8 md:mt-12 lg:mt-16">
        <SectionThree />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:pt-25 lg:px-8">
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          <SectionFour />
        </div>
      </div>

      <div className="mt-8 md:mt-12 lg:mt-16">
        <SectionFive />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:pt-18 lg:px-8">
        <SectionSix />
      </div>

      <div className="mt-8 md:mt-12 lg:mt-16">
        <Footer />
      </div>
    </>
  );
}
