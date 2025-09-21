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

export default function Home(props) {
  const { showScrollTop, scrollToTop, isVisible } = props;
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

      <div className="max-w-7xl mx-auto p-6 mb-8 md:mb-0 md:pt-18">
        <SectionSix />
      </div>

      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Yukarı çık"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}
