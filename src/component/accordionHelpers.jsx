import { useState } from "react";
import ImageModal from "./ImageModal";
import { useLanguage } from "../context/LanguageContext";
import { accordionTranslations } from "../translations/accordion";
import { supportAccordionTranslations } from "../translations/supportAccordion";
import { alpemixImages, customerMenuImages, tableOrderImages } from "../config/supportImages";

// Ana sayfa accordion öğeleri
export const getAccordionItems = () => {
  const { selectedLanguage } = useLanguage();
  const translations = accordionTranslations[selectedLanguage];

  return translations.items.map((item) => ({
    title: item.title,
    content:
      typeof item.content === "string" ? (
        <p className="mb-2">{item.content}</p>
      ) : (
        <>
          {Object.values(item.content).map((paragraph, index) => (
            <p key={index} className="mb-2">
              {paragraph}
            </p>
          ))}
        </>
      ),
  }));
};

// Destek sayfası accordion öğeleri
export const getSupportAccordionItems = () => {
  const { selectedLanguage } = useLanguage();
  const translations = supportAccordionTranslations[selectedLanguage];

  return translations.items.map((item, index) => {
    let content;

    // İlk item için basit string content
    if (index === 0) {
      content = <p className="mb-2">{item.content}</p>;
    }
    // İkinci item için basit string content
    else if (index === 1) {
      content = <p className="mb-2">{item.content}</p>;
    }
    // Üçüncü item için iki paragraf
    else if (index === 2) {
      content = (
        <>
          <p className="mb-2">{item.content.paragraph1}</p>
          <p className="mb-2">{item.content.paragraph2}</p>
        </>
      );
    }
    // ALPEMIX item için karmaşık content
    else if (index === 3) {
      content = (() => {
        function ImageGrid() {
          const [selectedImageIndex, setSelectedImageIndex] = useState(null);

          const handleNext = () => {
            setSelectedImageIndex((prev) =>
              prev < alpemixImages.length - 1 ? prev + 1 : prev
            );
          };

          const handlePrev = () => {
            setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
          };

          return (
            <>
              <p className="mb-2">{item.content.paragraph1}</p>
              <a
                href="https://www.alpemix.com/site/AlpemixService.exe"
                className="cursor-pointer font-medium text-green-600 hover:underline mb-2"
              >
                {item.content.downloadText}
              </a>
              <p className="mb-2">
                {item.content.paragraph2}
                <br />
                {item.content.paragraph3}
              </p>

              <img
                src={alpemixImages[0].src}
                alt="1"
                className="w-md cursor-pointer hover:opacity-90 transition-opacity mb-4"
                onClick={() => setSelectedImageIndex(0)}
              />
              <hr className="mt-2" />

              <p className="mt-3">{item.content.paragraph4}</p>
              <img
                src={alpemixImages[1].src}
                alt="2"
                className="w-md cursor-pointer hover:opacity-90 transition-opacity mb-4"
                onClick={() => setSelectedImageIndex(1)}
              />
              <hr className="mt-2" />

              <p className="mt-3">{item.content.paragraph5}</p>
              <img
                src={alpemixImages[2].src}
                alt="3"
                className="w-md cursor-pointer hover:opacity-90 transition-opacity mb-4"
                onClick={() => setSelectedImageIndex(2)}
              />
              <hr className="mt-2" />

              <p className="mt-3">
                {item.content.paragraph6} <br />
                {item.content.paragraph7}{" "}
                <a
                  href="tel:+905409505454"
                  className="font-medium text-green-600 hover:underline"
                >
                  {item.content.whatsappText}
                </a>{" "}
                {item.content.paragraph8}
              </p>
              <img
                src={alpemixImages[3].src}
                alt="4"
                className="w-md cursor-pointer hover:opacity-90 transition-opacity mb-4"
                onClick={() => setSelectedImageIndex(3)}
              />

              <ImageModal
                isOpen={selectedImageIndex !== null}
                onClose={() => setSelectedImageIndex(null)}
                imageSrc={
                  selectedImageIndex !== null
                    ? alpemixImages[selectedImageIndex].src
                    : ""
                }
                images={alpemixImages}
                currentIndex={selectedImageIndex}
                onNext={handleNext}
                onPrev={handlePrev}
              />

              <hr className="mt-2" />
              <p className="mt-3 font-bold">{item.content.videoTitle}</p>
              <div className="w-75 rounded-lg overflow-hidden mt-2">
                <iframe
                  className="top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/VDj1tssoFV8?si=cv_jYJO5vmKxd-ql"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </>
          );
        }

        return <ImageGrid />;
      })();
    }
    // QR Menu item için liste içeren content
    else if (index === 4) {
      content = (
        <>
          <p className="mb-2">{item.content.paragraph1}</p>
          <ul className="max-w-md list-disc list-inside">
            <li>{item.content.listItem1}</li>
            <li>{item.content.listItem2}</li>
            <li>{item.content.listItem3}</li>
          </ul>
          <p className="mt-2">
            {item.content.paragraph2} <br />
            {item.content.paragraph3}
          </p>
        </>
      );
    }
    // Müşteriler item için resim grid
    else if (index === 5) {
      content = (() => {
        function ImageGrid() {
          const [selectedImageIndex, setSelectedImageIndex] = useState(null);

          const handleNext = () => {
            setSelectedImageIndex((prev) =>
              prev < customerMenuImages.length - 1 ? prev + 1 : prev
            );
          };

          const handlePrev = () => {
            setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
          };

          return (
            <>
              <p className="mb-2">{item.content}</p>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-2">
                {customerMenuImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className="cursor-pointer hover:opacity-90 transition-opacity w-full h-30 md:h-55 object-cover rounded"
                    onClick={() => setSelectedImageIndex(index)}
                  />
                ))}
              </div>
              <ImageModal
                isOpen={selectedImageIndex !== null}
                onClose={() => setSelectedImageIndex(null)}
                imageSrc={
                  selectedImageIndex !== null
                    ? customerMenuImages[selectedImageIndex].src
                    : ""
                }
                images={customerMenuImages}
                currentIndex={selectedImageIndex}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            </>
          );
        }

        return <ImageGrid />;
      })();
    }
    // Video içeren basit item'lar
    else if (index === 6) {
      content = (
        <>
          <p>{item.content}</p>
          <div className="w-75 rounded-lg overflow-hidden mt-2">
            <iframe
              className="top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/sbP_Km6hW2w?si=W0duuh-t427RlZFh"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </>
      );
    }
    // Açılış/Kapanış saat ayarları
    else if (index === 7) {
      content = (
        <>
          <p>
            {item.content.paragraph1} <br />
            {item.content.paragraph2}
          </p>
          <div className="w-75 rounded-lg overflow-hidden mt-2">
            <iframe
              className="top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/lD4KbMii2DM?si=Fz2OMOj0OukECOkb"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </>
      );
    }
    // Paket servis ayarları
    else if (index === 8) {
      content = (
        <>
          <p>{item.content}</p>
          <div className="w-75 rounded-lg overflow-hidden mt-2">
            <iframe
              className="top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/89bAq_vsGTk?si=6u8g6bN0jY8ycc8E"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </>
      );
    }
    // % indirim ve hediye ayarları
    else if (index === 9) {
      content = (
        <>
          <p>{item.content}</p>
          <div className="w-75 rounded-lg overflow-hidden mt-2">
            <iframe
              className="top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/lj5hbXv3Vwk?si=dY59mAEsQLWzr_3e"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </>
      );
    }
    // Siparişe Kapatma / Açma
    else if (index === 10) {
      content = (
        <>
          <p>{item.content}</p>
          <div className="w-75 rounded-lg overflow-hidden mt-2">
            <iframe
              className="top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/yW2bHTi5aGk?si=UG0VrMQXtuCmGp62"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </>
      );
    }
    // Masadan sipariş ayarları
    else if (index === 11) {
      content = (() => {
        function ImageGrid() {
          const [selectedImageIndex, setSelectedImageIndex] = useState(null);

          const handleNext = () => {
            setSelectedImageIndex((prev) =>
              prev < tableOrderImages.length - 1 ? prev + 1 : prev
            );
          };

          const handlePrev = () => {
            setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
          };

          return (
            <>
              <p>{item.content}</p>
              <div className="w-75 rounded-lg overflow-hidden mt-2">
                <iframe
                  className="top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/9GVf43XNYpE?si=tuL3C7fegkV8no2q"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <hr className="mt-2" />
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-2">
                {tableOrderImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className="cursor-pointer hover:opacity-90 transition-opacity w-full h-30 md:h-55 object-cover rounded"
                    onClick={() => setSelectedImageIndex(index)}
                  />
                ))}
              </div>
              <ImageModal
                isOpen={selectedImageIndex !== null}
                onClose={() => setSelectedImageIndex(null)}
                imageSrc={
                  selectedImageIndex !== null
                    ? tableOrderImages[selectedImageIndex].src
                    : ""
                }
                images={tableOrderImages}
                currentIndex={selectedImageIndex}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            </>
          );
        }

        return <ImageGrid />;
      })();
    }
    // Duyuru / Haber yayınlama
    else if (index === 12) {
      content = (
        <>
          <p>{item.content}</p>
          <div className="w-75 rounded-lg overflow-hidden mt-2">
            <iframe
              className="top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/9GVf43XNYpE?si=S_sYYH688jnX_AZN"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </>
      );
    }
    // Kasa ve Garson Kurulumu
    else if (index === 13) {
      content = (
        <>
          <p>{item.content}</p>
          <div className="w-75 rounded-lg overflow-hidden mt-2">
            <iframe
              className="top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/3Cd83M0YdOc?si=Nbibc3uxC8H9uS2S"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </>
      );
    }
    // Son item - destek
    else if (index === 14) {
      content = (
        <>
          <p>{item.content.paragraph1}</p>
          <p className="mt-2">
            {item.content.turkeyLabel}
            <a
              href="https://wa.me/905409505454"
              className="text-green-600 hover:text-green-700 font-medium"
              target="_blank"
            >
              +90 540 950 54 54
            </a>
          </p>
          <p>
            {item.content.franceLabel}
            <a
              href="https://wa.me/33778563414"
              className="text-green-600 hover:text-green-700 font-medium"
              target="_blank"
            >
              +33 7 78 56 34 14
            </a>
          </p>
        </>
      );
    }

    return {
      title: item.title,
      content: content,
    };
  });
};
