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
import Bayi from "../page/Bayi";
import { useDispatch } from "react-redux";
import { isVisibleFalse, isVisibleTrue } from "../redux/slice/screenSlice";

export default function RouterConfig() {
  //
  const dispatch = useDispatch();
  //
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Mobil görünüm kontrolü için
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px'in altı mobil olarak kabul edilir
    };

    // Scroll kontrolü için
    const handleScroll = () => {
      if (window.scrollY > 50 || isMobile) {
        dispatch(isVisibleFalse());
      } else {
        dispatch(isVisibleTrue());
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
      <Route path="/" element={<Home />} />
      <Route path="/test-et" element={<TestEt />} />
      <Route path="/fiyatlandirma" element={<Pricing />} />
      <Route path="/referanslar" element={<Referanslar />} />
      <Route path="/destek" element={<Support />} />
      <Route path="/wgarson" element={<WGarson />} />
      <Route path="/bayi" element={<Bayi />} />
      {/* <Route path="/admin54" element={<Admin />} /> */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
