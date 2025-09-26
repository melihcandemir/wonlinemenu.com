import Communication from "../component/Communication";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import ScrollTotop from "../component/ScrollTotop";
import WGarsonSection from "../component/WGarsonSection";

export default function WGarson(props) {
  const { isVisible } = props;
  return (
    <>
      <Communication isVisible={isVisible} />
      <Navbar isVisible={isVisible} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:pt-25 lg:px-8 m-10">
        <WGarsonSection />
      </div>
      <Footer />
      <ScrollTotop />
    </>
  );
}
