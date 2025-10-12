import Communication from "../component/Communication";
import Navbar from "../component/Navbar";
import SectionOne from "../component/SectionOne";
import SectionTwo from "../component/SectionTwo";
import SectionThree from "../component/SectionThree";
import SectionFour from "../component/SectionFour";
import SectionFive from "../component/SectionFive";
import SectionSix from "../component/SectionSix";
import GoogleReviews from "../component/GoogleReviews";
import Footer from "../component/Footer";
import ScrollTotop from "../component/ScrollTotop";
import Theme from "../component/Theme";
import LanguageSelector from "../component/LanguageSelector";
import WhattsappSection from "../component/WhattsappSection";

export default function Home() {
  return (
    <>
      <Communication />
      <Navbar />

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

      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-0 md:pt-18">
        <SectionSix />
      </div>

      {/* Google Yorumları Bölümü */}
      <GoogleReviews />

      <Footer />
      <ScrollTotop />
      <WhattsappSection />
      <LanguageSelector />
    </>
  );
}
