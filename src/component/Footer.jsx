import img from "../assets/wonline_new_alt.png";
export default function Footer() {
  return (
    <footer className="w-full bg-stone-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sol Sütun: Logo ve Açıklama */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src={img} alt="logo" />
          </div>
          <p className="text-white max-w-sm">
            Wonlinemenu WhatsApp üzerinden düzenli bir sipariş alımı sağlayan
            sistemdir.
          </p>
        </div>
        {/* Orta Sütun: İletişim */}

        <div className="space-y-4 text-white">
          <h3 className="text-xl font-bold text-green-500">İletişim</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <svg
                class="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
              </svg>
              <a
                href="tel:+905409505454"
                className="hover:text-green-500 transition-colors"
              >
                +905409505454
              </a>
            </li>
            <li className="flex items-center">
              <svg
                class="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z" />
              </svg>
              <a
                href="mailto:info@wonlinemenu.com"
                className="hover:text-green-600 transition-colors"
              >
                info@wonlinemenu.com
              </a>
            </li>
            <li className="flex items-start">
              <svg
                class="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>
                Aziziye mah. 415 sk. no: 10A
                <br />
                Karasu/Sakarya
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>

    // <footer className="bg-[#2e2e2e] text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

    //     {/* Sol Sütun: Logo ve Açıklama */}
    //     <div className="space-y-4">
    //       <div className="flex items-center space-x-2">
    //         <span className="text-2xl text-green-500">
    //           {/* Logo ikonu için bir yer tutucu */}
    //           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
    //             <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#34D399"/>
    //           </svg>
    //         </span>
    //         <h2 className="text-2xl font-bold text-white">wonlinemenu<span className="text-green-500">.com</span></h2>
    //       </div>
    //       <p className="text-gray-400 max-w-sm">
    //         Wonlinemenu WhatsApp üzerinden düzenli bir sipariş alımı sağlayan sistemdir.
    //       </p>
    //     </div>

    //     {/* Orta Sütun: İletişim */}
    //     <div className="space-y-4">
    //       <h3 className="text-xl font-bold text-green-500">İletişim</h3>
    //       <ul className="space-y-3">
    //         <li className="flex items-center">
    //           <FaPhoneAlt className="text-green-500 mr-3" />
    //           <a href="tel:+905409505454" className="hover:text-green-500 transition-colors">+905409505454</a>
    //         </li>
    //         <li className="flex items-center">
    //           <FaEnvelope className="text-green-500 mr-3" />
    //           <a href="mailto:info@wonlinemenu.com" className="hover:text-green-500 transition-colors">info@wonlinemenu.com</a>
    //         </li>
    //         <li className="flex items-start">
    //           <FaMapMarkerAlt className="text-green-500 mr-3 mt-1 flex-shrink-0" />
    //           <span>Aziziye mah. 415 sk. no: 10A<br/>Karasu/Sakarya</span>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Sağ Sütun: Sayfalar */}
    //     <div className="space-y-4">
    //       <h3 className="text-xl font-bold text-green-500">Sayfalar</h3>
    //       <ul className="space-y-2">
    //         <li><a href="#" className="flex items-center hover:text-green-500 transition-colors"><span className="text-green-500 text-2xl mr-1">•</span>ANASAYFA</a></li>
    //         <li><a href="#" className="flex items-center hover:text-green-500 transition-colors"><span className="text-green-500 text-2xl mr-1">•</span>BAYİ</a></li>
    //         <li><a href="#" className="flex items-center hover:text-green-500 transition-colors"><span className="text-green-500 text-2xl mr-1">•</span>DESTEK</a></li>
    //         <li><a href="#" className="flex items-center hover:text-green-500 transition-colors"><span className="text-green-500 text-2xl mr-1">•</span>FİYATLANDIRMA</a></li>
    //         <li><a href="#" className="flex items-center hover:text-green-500 transition-colors"><span className="text-green-500 text-2xl mr-1">•</span>REFERANSLAR</a></li>
    //         <li><a href="#" className="flex items-center hover:text-green-500 transition-colors"><span className="text-green-500 text-2xl mr-1">•</span>W/Garson</a></li>
    //       </ul>
    //     </div>

    //   </div>
    // </footer>
  );
}
