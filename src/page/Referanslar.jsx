import Communication from "../component/Communication";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import ReferansSection from "../component/ReferansSection";
import ScrollTotop from "../component/ScrollTotop";

export default function Referanslar(props) {
  const { isVisible } = props;
  return (
    <>
      <Communication isVisible={isVisible} />
      <Navbar isVisible={isVisible} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:pt-25 lg:px-8">
        <ReferansSection />
      </div>
      <Footer />
      <ScrollTotop />
    </>
  );
}
