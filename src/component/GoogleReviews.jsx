import { useState } from "react";
import { reviewsData } from "./data";

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Yıldız render fonksiyonu
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  // Sonraki yoruma geç
  const nextReview = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
      setIsAnimating(false);
    }, 150);
  };

  // Önceki yoruma geç
  const prevReview = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + reviewsData.length) % reviewsData.length
      );
      setIsAnimating(false);
    }, 150);
  };

  // Görünür yorumları al (mobilde 1, tablette 2, masaüstünde 3)
  const getVisibleReviews = () => {
    const reviews = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviewsData.length;
      reviews.push(reviewsData[index]);
    }
    return reviews;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
              Google Yorumları
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Müşterilerimizin deneyimlerini keşfedin
          </p>
        </div>

        {/* Yorumlar Carousel */}
        <div className="relative">
          {/* Yorumlar Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ${
              isAnimating ? "opacity-50" : "opacity-100"
            }`}
          >
            {visibleReviews.map((review, index) => (
              <div
                key={`${review.id}-${currentIndex}-${index}`}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 ${
                  index === 0
                    ? "block"
                    : index === 1
                    ? "hidden md:block"
                    : "hidden lg:block"
                }`}
              >
                {/* Kullanıcı Bilgileri */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {review.avatar}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {review.date}
                    </p>
                  </div>
                </div>

                {/* Yıldızlar */}
                <div className="flex items-center mb-3">
                  {renderStars(review.rating)}
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                    {review.rating}/5
                  </span>
                </div>

                {/* Yorum Metni */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>

          {/* Navigasyon Butonları */}
          <button
            onClick={prevReview}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextReview}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Nokta İndikatörleri */}
        <div className="flex justify-center mt-8 space-x-2">
          {reviewsData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsAnimating(false);
                  }, 150);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-green-600"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Google'da Daha Fazla Yorum Butonu */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?sca_esv=2236234dce6e64d8&sxsrf=AE3TifNVnSG8-7hnQUk2nSUllPDn5lIEMA:1759316132230&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EwSfhqIhsl9j4DROlazEBmZv9B1LOLSpoUH3hGKF31byR5A_8RTqi8xc88m3geBViJxxpKqtFHpU8uw8Ylx4s4sHoMQm&q=Wonlinemenu+Yorumlar&sa=X&ved=2ahUKEwj3v--o64KQAxVYRvEDHSjkFK8Q0bkNegQIJxAE&biw=1536&bih=730&dpr=1.25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Google'da Tüm Yorumları Gör
          </a>
        </div>
      </div>
    </div>
  );
}
