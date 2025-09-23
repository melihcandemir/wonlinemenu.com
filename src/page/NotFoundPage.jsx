export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* 404 Büyük Sayı */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            404
          </h1>
        </div>

        {/* Ana Mesaj */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Neye Baktın Kardeş
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
            Aradığın sayfa bulunamadı
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Belki yanlış bir yere tıkladın ya da sayfa kaldırılmış olabilir
          </p>
        </div>

        {/* Emoji ve Dekoratif Element */}
        <div className="mb-8">
          <div className="text-6xl mb-4 animate-bounce">🤔</div>
        </div>

        {/* Ana Sayfaya Dön Butonu */}
        <div className="space-y-4">
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 mr-0 sm:mr-4 mb-4 sm:mb-0"
          >
            ← Geri Dön
          </button>
          <button
            onClick={() => (window.location.href = "/#")}
            className="w-full sm:w-auto px-6 py-3 bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            🏠 Ana Sayfa
          </button>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-12 text-xs text-gray-400 dark:text-gray-500">
          Hata Kodu: 404 - Sayfa Bulunamadı
        </div>
      </div>
    </div>
  );
}
