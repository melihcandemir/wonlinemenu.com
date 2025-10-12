import Communication from "../component/Communication";
import Footer from "../component/Footer";
import LanguageSelector from "../component/LanguageSelector";
import Navbar from "../component/Navbar";
import PricingCard from "../component/PricingCard";
import ScrollTotop from "../component/ScrollTotop";

export default function Pricing() {
  return (
    <>
      <Communication />
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:pt-25 lg:px-8 mb-10">
        <PricingCard />
      </div>
      <Footer />
      <ScrollTotop />
      <LanguageSelector />
    </>
  );
}
