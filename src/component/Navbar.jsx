import React, { useState } from "react";
import wonlineLogo from "../assets/wonline2023.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menü açma/kapama fonksiyonu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed md:top-16 left-0 w-full bg-white shadow-md z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="ml-2 md:ml-8">
            <a href="#">
              <img
                className="h-12 md:h-20"
                src={wonlineLogo}
                alt="wonlinemenu"
              />
            </a>
          </div>

          {/* Desktop Menü */}
          <div className="hidden md:flex flex-row justify-center items-center gap-3 mr-8">
            <a
              href="#"
              className="text-sm font-medium text-gray-900 hover:text-green-600 transition-colors"
            >
              ANASAYFA
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 hover:text-green-600 transition-colors"
            >
              TEST ET
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 hover:text-green-600 transition-colors"
            >
              FIYATLANDIRMA
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 hover:text-green-600 transition-colors"
            >
              DESTEK
            </a>
          </div>

          {/* Hamburger Menü Butonu (Mobil) */}
          <div className="md:hidden mr-2">
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
              <a
                href="#"
                className="text-sm font-medium text-gray-900 active:text-green-600 py-2 px-4 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ANASAYFA
              </a>
              <a
                href="#"
                className="text-sm font-medium text-gray-900 active:text-green-600 py-2 px-4 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                TEST ET
              </a>
              <a
                href="#"
                className="text-sm font-medium text-gray-900 active:text-green-600 py-2 px-4 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FIYATLANDIRMA
              </a>
              <a
                href="#"
                className="text-sm font-medium text-gray-900 active:text-green-600 py-2 px-4 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                DESTEK
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
