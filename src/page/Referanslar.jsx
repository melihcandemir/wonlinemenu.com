import Communication from "../component/Communication";
import Footer from "../component/Footer";
import LanguageSelector from "../component/LanguageSelector";
import Navbar from "../component/Navbar";
import ReferansSection from "../component/ReferansSection";
import ScrollTotop from "../component/ScrollTotop";

export default function Referanslar() {
  return (
    <>
      <Communication />
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:pt-25 lg:px-8">
        <ReferansSection />
      </div>
      <Footer />
      <ScrollTotop />
      <LanguageSelector />
    </>
  );
}
