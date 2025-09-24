import img from "../assets/reklam07.png";
import { Link } from "react-router-dom";
import Accordion from "./Accordion";
import { accordionItems } from "./data";

export default function SectionSix() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-8">
      <div className="lg:w-1/2 text-center md:text-left">
        <h3 className="text-lg md:text-2xl text-gray-600 mt-5 md:mt-0">
          Sıkça Sorulan Sorular
        </h3>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Aklınıza bir şey mi takıldı ?
        </h1>
        <img src={img} alt="reklam07" className="mb-5 md:mb-0" />
      </div>
      <div className="w-full lg:w-1/2">
        <Accordion items={accordionItems} />
        <Link to="/destek" onClick={scrollToTop}>
          <button className="text-white bg-green-600 focus:outline-none hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-5 md:mt-10 w-full cursor-pointer">
            Diğer sorular ve cevaplar için tıklayın.
          </button>
        </Link>
      </div>
    </div>
  );
}
