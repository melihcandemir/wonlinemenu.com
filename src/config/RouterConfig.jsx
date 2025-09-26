import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Admin from "../page/Admin";
import NotFoundPage from "../page/NotFoundPage";
import TestEt from "../page/TestEt";
import { useEffect, useState } from "react";
import Pricing from "../page/Pricing";
import Referanslar from "../page/Referanslar";
import Support from "../page/Support";
import WGarson from "../page/WGarson";

export default function RouterConfig() {
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
    <Routes>
      <Route path="/" element={<Home isVisible={isVisible} />} />
      <Route path="/test-et" element={<TestEt isVisible={isVisible} />} />
      <Route
        path="/fiyatlandirma"
        element={<Pricing isVisible={isVisible} />}
      />
      <Route
        path="/referanslar"
        element={<Referanslar isVisible={isVisible} />}
      />
      <Route path="/destek" element={<Support isVisible={isVisible} />} />
      <Route path="/wgarson" element={<WGarson isVisible={isVisible} />} />
      <Route path="/admin54" element={<Admin />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
