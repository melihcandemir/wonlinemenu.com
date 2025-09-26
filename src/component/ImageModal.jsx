export default function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  images,
  currentIndex,
  onNext,
  onPrev,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-52 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative w-full h-full p-4 flex items-center justify-center">
        {/* Kapatma butonu - Her zaman sağ üstte */}
        <button
          className="absolute top-4 right-4 z-53 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Önceki resim butonu */}
        {currentIndex > 0 && (
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Resim */}
        <img
          src={imageSrc}
          alt="Enlarged view"
          className="w-150 h-auto object-contain"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Sonraki resim butonu */}
        {currentIndex < images.length - 1 && (
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
