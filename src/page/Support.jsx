import Communication from "../component/Communication";
import Footer from "../component/Footer";
import LanguageSelector from "../component/LanguageSelector";
import Navbar from "../component/Navbar";
import ScrollTotop from "../component/ScrollTotop";
import SupportSection from "../component/SupportSection";

export default function Support() {
  return (
    <>
      <Communication />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:pt-25 lg:px-8 mb-10">
        <SupportSection />
      </div>

      <Footer />
      <ScrollTotop />
      <LanguageSelector />
    </>
  );
}
