import { useEffect, useState } from "react";

export default function Communication(props) {
  //
  const { isVisible } = props;

  // isVisible false ise bileşeni render etme
  if (!isVisible) {
    return null;
  }

  return (
    <div className="transition-all fixed top-0 w-full md:max-w-7xl bg-white z-50 hidden md:block">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between border-b-1 border-gray-300 pb-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 font-bold">WhatsApp:</span>
          <a
            href="https://wa.me/905409505454"
            className="text-green-600 hover:text-green-700 font-medium"
            target="_blank"
          >
            +90 540 950 54 54
          </a>
          <span className="text-gray-700">|</span>
          <a
            href="https://wa.me/33778563414"
            className="text-green-600 hover:text-green-700 font-medium"
            target="_blank"
          >
            +33 7 78 56 34 14
          </a>
        </div>
        <button
          onClick={() => window.open("https://wa.me/905409505454", "_blank")}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors duration-300 cursor-pointer"
        >
          SİPARİŞ VER
        </button>
      </div>
    </div>
  );
}
