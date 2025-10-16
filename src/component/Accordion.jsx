import { useState, useEffect, useRef } from "react";

// SVG ikonu için ayrı bir bileşen oluşturmak kodu daha temiz hale getirir.
const AccordionIcon = ({ isOpen }) => (
  <svg
    data-accordion-icon
    className={`w-3 h-3 shrink-0 transition-transform duration-200 ${
      isOpen ? "rotate-180" : ""
    }`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round" // HTML'deki "stroke-linecap" React'te camelCase olur
      strokeLinejoin="round" // "stroke-linejoin" -> camelCase
      strokeWidth="2" // "stroke-width" -> camelCase
      d="M9 5 5 1 1 5"
    />
  </svg>
);

const Accordion = ({ items }) => {
  // Hangi akordeon öğesinin açık olduğunu tutmak için state kullanıyoruz.
  // Başlangıçta ilk öğe açık olsun diye 0 değerini veriyoruz.
  // Hiçbiri açık olmasın isterseniz `null` yapabilirsiniz.
  const [openIndex, setOpenIndex] = useState(0);
  const accordionRefs = useRef([]);

  // Sayfa yüklendiğinde URL hash'ini kontrol et
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const itemId = hash.substring(1); // # işaretini kaldır
      const index = parseInt(itemId.replace('yardim-', ''));
      if (!isNaN(index) && index >= 0 && index < items.length) {
        setOpenIndex(index);
        // Kısa bir gecikme ile scroll yap (DOM'un render olması için)
        setTimeout(() => {
          accordionRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }, 100);
      }
    }
  }, [items.length]);

  // URL hash değişikliklerini dinle
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const itemId = hash.substring(1);
        const index = parseInt(itemId.replace('yardim-', ''));
        if (!isNaN(index) && index >= 0 && index < items.length) {
          setOpenIndex(index);
          setTimeout(() => {
            accordionRefs.current[index]?.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            });
          }, 100);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [items.length]);

  // Bir başlığa tıklandığında çalışacak fonksiyon
  const handleToggle = (index) => {
    // Eğer zaten açık olan başlığa tıklanırsa kapat, değilse yenisini aç.
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);
    
    // URL'yi güncelle
    if (newIndex !== null) {
      window.history.pushState(null, '', `#yardim-${newIndex}`);
    } else {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div 
            key={index} 
            ref={(el) => (accordionRefs.current[index] = el)}
            id={`soru-${index}`}
          >
            <h2 id={`accordion-collapse-heading-${index}`}>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium border border-gray-200 gap-3 ${
                  isOpen
                    ? "bg-gray-300 text-gray-900" // Açık olduğunda eklenecek sınıflar
                    : "text-gray-500" // Kapalı olduğunda eklenecek sınıf
                }`}
                onClick={() => handleToggle(index)}
                aria-expanded={isOpen}
                aria-controls={`accordion-collapse-body-${index}`}
              >
                <span className="flex-1 text-left">{item.title}</span>
                <AccordionIcon isOpen={isOpen} />
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${index}`}
              className={isOpen ? "" : "hidden"}
              aria-labelledby={`accordion-collapse-heading-${index}`}
            >
              <div
                className={`p-5 border border-gray-200 ${
                  isOpen ? "bg-gray-200 text-gray-800" : ""
                }`}
              >
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
