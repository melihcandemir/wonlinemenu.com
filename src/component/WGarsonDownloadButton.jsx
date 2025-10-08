// WGarson uygulama indirme butonu bileşeni
export const WGarsonDownloadButton = ({ title, url }) => {
  return (
    <a
      href={url}
      className="flex items-center gap-4 rounded-xl bg-green-600 px-6 py-3 font-bold text-white shadow-md transition hover:bg-green-700 cursor-pointer md:w-fit"
    >
      <svg
        className="w-10 h-10"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
          clipRule="evenodd"
        />
      </svg>

      <div className="text-left">
        <span className="block text-sm font-semibold">for Android</span>
        <span className="block text-lg uppercase leading-tight">
          İndir / Download
        </span>
      </div>
    </a>
  );
};
