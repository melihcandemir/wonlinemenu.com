import React, { useState } from "react";
import Communication from "../component/Communication";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ScrollTotop from "../component/ScrollTotop";
import BayiPricingCard from "../component/BayiPricingCard";

export default function Bayi(props) {
  const { isVisible } = props;

  //
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const correctPassword = "bayi2025"; // Doğru parola

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Parola yanlış!");
      setPassword("");
    }
  };
  return (
    <div className="bg-slate-200">
      <Communication isVisible={isVisible} />
      <Navbar isVisible={isVisible} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:pt-25 lg:px-8 mb-10">
        {!isAuthenticated ? (
          <div className="min-h-[50vh] flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Bayi Girişi
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none"
                    placeholder="Parolayı giriniz"
                    required
                  />
                </div>
                {error && (
                  <p className="text-red-600 font-bold text-sm text-center">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 cursor-pointer"
                >
                  Giriş Yap
                </button>
              </form>
            </div>
          </div>
        ) : (
          <BayiPricingCard />
        )}
      </div>
      <Footer />
      <ScrollTotop />
    </div>
  );
}
