import { useState } from "react";
import { Link } from "react-router-dom";
import wonlineLogo from "../assets/wonline2023.png";

export default function Navbar(props) {
  const { isVisible } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menü açma/kapama fonksiyonu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`sticky transition-all ${
        !isVisible ? "top-0" : "top-18"
      } left-0 w-full bg-white z-40`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to="/" onClick={scrollToTop}>
              <img
                className="h-12 md:h-20"
                src={wonlineLogo}
                alt="wonlinemenu"
              />
            </Link>
          </div>

          {/* Desktop Menü */}
          <div className="hidden md:flex flex-row justify-center items-center gap-8">
            <Link
              onClick={scrollToTop}
              to="/"
              className="text-sm font-medium text-gray-900 hover:text-green-600 transition-colors"
            >
              ANASAYFA
            </Link>
            <Link
              onClick={scrollToTop}
              to="/test-et"
              className="text-sm font-medium text-gray-900 hover:text-green-600 transition-colors"
            >
              TEST ET
            </Link>
            <Link
              onClick={scrollToTop}
              to="/fiyatlandirma"
              className="text-sm font-medium text-gray-900 hover:text-green-600 transition-colors"
            >
              FIYATLANDIRMA
            </Link>
            <Link
              onClick={scrollToTop}
              to="destek"
              className="text-sm font-medium text-gray-900 hover:text-green-600 transition-colors"
            >
              DESTEK
            </Link>
          </div>

          {/* Hamburger Menü Butonu (Mobil) */}
          <div className="md:hidden mr-2 hover">
            <button
              onClick={toggleMenu}
              className="text-gray-900 focus:outline-none focus:text-green-600"
              aria-label="Menüyü aç/kapat"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobil Menü */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <Link
                to="/"
                className="text-sm font-medium text-gray-900 active:text-green-600 py-2 px-4 rounded transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              >
                ANASAYFA
              </Link>
              <Link
                to="/test-et"
                className="text-sm font-medium text-gray-900 active:text-green-600 py-2 px-4 rounded transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              >
                TEST ET
              </Link>
              <Link
                to="/fiyatlandirma"
                className="text-sm font-medium text-gray-900 active:text-green-600 py-2 px-4 rounded transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              >
                FIYATLANDIRMA
              </Link>
              <Link
                to="destek"
                className="text-sm font-medium text-gray-900 active:text-green-600 py-2 px-4 rounded transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              >
                DESTEK
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
