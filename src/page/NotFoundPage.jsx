import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* 404 Büyük Sayı */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r bg-green-600 to-green-900">
            404
          </h1>
        </div>

        {/* Ana Mesaj */}
        <div className="mb-8">
          <h2 className="text-lg text-gray-600 dark:text-gray-300 mb-2">
            Aradığın sayfa bulunamadı
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Belki yanlış bir yere tıkladın ya da sayfa kaldırılmış olabilir
          </p>
        </div>

        {/* Ana Sayfaya Dön Butonu */}
        <div>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 mr-0 sm:mr-4 mb-4 sm:mb-0"
          >
            ← Geri Dön
          </button>
          <Link to="/">
            <button className="w-full sm:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200">
              🏠 Ana Sayfa
            </button>
          </Link>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-12 text-xs text-gray-400 dark:text-gray-500">
          Hata Kodu: 404 - Sayfa Bulunamadı
        </div>
      </div>
    </div>
  );
}
