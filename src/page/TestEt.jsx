import Communication from "../component/Communication";
import Footer from "../component/Footer";
import LanguageSelector from "../component/LanguageSelector";
import Navbar from "../component/Navbar";
import ReferansSection from "../component/ReferansSection";
import ScrollTotop from "../component/ScrollTotop";
import TestSection from "../component/TestSection";

export default function TestEt() {
  return (
    <>
      {/* Test Et sayfası içeriği */}
      <Communication />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:pt-25 lg:px-8">
        <TestSection />
        <hr className="border border-gray-300" />
        <ReferansSection />
      </div>

      <Footer />
      <ScrollTotop />
      <LanguageSelector />
    </>
  );
}
