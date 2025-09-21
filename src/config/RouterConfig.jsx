import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Admin from "../page/Admin";
import NotFoundPage from "../page/NotFoundPage";
import TestEt from "../page/TestEt";
import { useEffect, useState } from "react";

export default function RouterConfig() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Mobil görünüm kontrolü için
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Birleştirilmiş scroll kontrolü
    const handleScroll = () => {
      // İletişim bileşeni için kontrol
      if (window.scrollY > 50 || isMobile) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Scroll to top butonu için kontrol
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    // Olay dinleyicilerini ekle
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Bileşen ilk yüklendiğinde kontrol et
    handleResize();
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            isVisible={isVisible}
            scrollToTop={scrollToTop}
            showScrollTop={showScrollTop}
          />
        }
      />
      <Route path="/test-et" element={<TestEt />} />
      <Route path="/admin54" element={<Admin />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
