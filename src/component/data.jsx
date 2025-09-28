import img1 from "../assets/support/Screenshot_22-760x629.png";
import img2 from "../assets/support/Screenshot_23-760x442.png";
import img3 from "../assets/support/Screenshot_24-760x186.png";
import img4 from "../assets/support/Screenshot_25.png";
import imgM1 from "../assets/support/yeni8-370x370.jpg";
import imgM2 from "../assets/support/yeni7-370x370.jpg";
import imgM3 from "../assets/support/yeni6-370x370.jpg";
import imgM4 from "../assets/support/yeni5-370x370.jpg";
import imgM5 from "../assets/support/yeni4-370x370.jpg";
import imgM6 from "../assets/support/yeni2-370x370.jpg";
import imgM7 from "../assets/support/yeni1-370x370.jpg";
import imgM8 from "../assets/support/Urfa03-370x370.png";
import imgM9 from "../assets/support/Urfa5-370x370.png";
import imgM10 from "../assets/support/urfa01-370x370.png";
import imgM11 from "../assets/support/huzur3-370x370.png";
import imgM12 from "../assets/support/IMG_20250525_162033_323-370x370.jpg";
import imgM13 from "../assets/support/IMG_20250525_162032_703-370x370.jpg";
import imgM14 from "../assets/support/IMG_20250525_162032_605-370x370.jpg";
import imgM15 from "../assets/support/yeni9-370x370.jpg";
import imgMa1 from "../assets/support/IMG-20250504-WA0123-370x370.jpg";
import imgMa2 from "../assets/support/IMG-20250515-WA0030-370x370.jpg";
import imgMa3 from "../assets/support/Screenshot_35-370x370.png";
import imgMa4 from "../assets/support/meftun_qr_masa-370x370.png";
import imgMa5 from "../assets/support/wonlineTafel-370x370.jpg";
import { useState } from "react";
import ImageModal from "./ImageModal";

export const accordionItems = [
  {
    title: "Wonlinemenu nedir?",
    content: (
      <p className="mb-2">
        Wonlinemenu (WhatsApp Online Menu), işletmeler için Whatsapp üzerinden
        sipariş alabileceğiniz kolay e-ticaret yazılımıdır. kolaylıkla
        ürünlerinizi ekleyebilir ve sipariş alabilirsiniz.
      </p>
    ),
  },
  {
    title: "Nasıl kullanabilirim?",
    content: (
      <p className="mb-2">
        Wonlinemenu, Abonelik sistemi ile hizmet vermektedir. Yıllık periyotta
        ödeme yaparak kullanmaya başlabilirsiniz. Bizimle iletişim kurarak daha
        fazla detaylı bilgi alabilirsiniz.
      </p>
    ),
  },
  {
    title: "Ödemeleri nasıl alacağız?",
    content: (
      <>
        <p className="mb-2">
          Wonlinemenu üzerinden online ödeme alabilirsiniz. Kontrol panelinden
          Ödeme yöntemleri belirleyerek müşterilerinize kolaylıklar
          sağlıyabilirsiniz.
        </p>
        <p className="mb-2">
          Örnek : Kapıda Nakit Ödeme, Kapıda Kredi Kartı, Ticket Restaurant,
          Sodexo, Multinet, Setcard, Winwin, Metropol, Havale & EFT, Payconiq,
          Papara gibi..
        </p>
      </>
    ),
  },
  {
    title: "Siparişlerimi Printerdan yazdırabilir miyim?",
    content: (
      <>
        <p className="mb-2">
          Wonlinemenu programını bilgisayarınıza kurduysanız, siparişleriniz
          Whatsapp’a düştükten sonra SİPARİŞLER sayfasına geçiş yaparak sipariş
          numarasına göre yazdırabilirsiniz.
        </p>
        <p className="mb-2">
          Programı kullanmadan siparişleri yazdırmakda mümkün bunun için bizden
          destek alabilirsiniz
        </p>
      </>
    ),
  },
  {
    title: "Müşteriler bize nasıl ulaşacaklar?",
    content: (
      <>
        <p className="mb-2">
          Mağazanız için belirleyeceğiniz size özel linki veya QR kodlarınızı
          müşterilerinizle paylaşarak, müşterilerinizi mağazanızdan haberdar
          edebilir, sipariş vermelerini sağlayabilirsiniz.
        </p>
      </>
    ),
  },
];

export const tests = [
  {
    id: 1,
    langue: "Türkçe",
    test: "wonline.menu/demo/tr/",
  },
  {
    id: 2,
    langue: "Felemenkçe",
    test: "wonline.menu/demo/nl/",
  },
  {
    id: 3,
    langue: "Fransızca",
    test: "wonline.menu/demo/fr/",
  },
];

export const referanslar = [
  {
    id: 1,
    referans: "floryapelt.be",
  },
  {
    id: 2,
    referans: "kralbalen.be",
  },
  {
    id: 3,
    referans: "kebabbarlin.fr",
  },
  {
    id: 4,
    referans: "maas68.be",
  },
  {
    id: 5,
    referans: "lizyalibaba.fr",
  },
  {
    id: 6,
    referans: "snackresto.be",
  },
  {
    id: 7,
    referans: "sultankebab.fr",
  },
  {
    id: 8,
    referans: "kralbalen.be",
  },
  {
    id: 9,
    referans: "molsekebab.be",
  },
  {
    id: 10,
    referans: "anatolian.be",
  },
  {
    id: 11,
    referans: "cokasnacks.be",
  },
  {
    id: 12,
    referans: "istanbulbalen.be",
  },
  {
    id: 13,
    referans: "aarschotsekebap.be",
  },
  {
    id: 14,
    referans: "alibabachez.fr",
  },
  {
    id: 15,
    referans: "anatolia23hamont.be",
  },
  {
    id: 16,
    referans: "anatolierestaurant.fr",
  },
  {
    id: 17,
    referans: "balenbaskent.be",
  },
  {
    id: 18,
    referans: "balensepizzakebap.be",
  },
  {
    id: 19,
    referans: "bbqchefmaasmechelen.be",
  },
  {
    id: 20,
    referans: "bestfoodpelt.be",
  },
  {
    id: 21,
    referans: "bosporusrestaurant.de",
  },
  {
    id: 22,
    referans: "burgerkoftemaasmechelen.be",
  },
  {
    id: 23,
    referans: "busignykebab.fr",
  },
  {
    id: 24,
    referans: "centroschoten.be",
  },
  {
    id: 25,
    referans: "cheffkebap.be",
  },
  {
    id: 26,
    referans: "chefzonhoven.be",
  },
  // {
  //   id: 27,
  //   referans: "chezmaxim.fr",
  // },
  {
    id: 28,
    referans: "chezmurat.fr",
  },
  {
    id: 29,
    referans: "daddysdoner.de",
  },
  {
    id: 30,
    referans: "ecaussinnesbestkebab.be",
  },
  {
    id: 31,
    referans: "eethuisesrakoersel.be",
  },
  {
    id: 32,
    referans: "eethuislabella.be",
  },
  {
    id: 33,
    referans: "firatbullingen.be",
  },
  // {
  //   id: 34,
  //   referans: "foodbarsaray.be",
  // },
  {
    id: 35,
    referans: "frituurmuzzyheusden.be",
  },
  {
    id: 36,
    referans: "hackakebab.be",
  },
  {
    id: 37,
    referans: "hoekskehasselt.be",
  },
  {
    id: 38,
    referans: "huzurkebabkinrooi.be",
  },
  {
    id: 39,
    referans: "huzurkebabpeer.be",
  },
  {
    id: 40,
    referans: "istanbulrestaurant.fr",
  },
  {
    id: 41,
    referans: "jimmyszonhoven.be",
  },
  {
    id: 42,
    referans: "kapadokyalommel.be",
  },
  {
    id: 43,
    referans: "kebabcornerbeverlo.be",
  },
  {
    id: 44,
    referans: "kebabpacha.fr",
  },
  {
    id: 45,
    referans: "kebapstorescherpenheuvel.be",
  },
  {
    id: 46,
    referans: "kingofkebabherselt.be",
  },
  {
    id: 47,
    referans: "kusadasizutendaal.be",
  },
  {
    id: 48,
    referans: "lapergola2lommel.be",
  },
  {
    id: 49,
    referans: "lapergolalommel.be",
  },
  {
    id: 50,
    referans: "makkebab.fr",
  },
  {
    id: 51,
    referans: "meerhoutbaskent.be",
  },
  {
    id: 52,
    referans: "mustyhechtel.be",
  },
  // {
  //   id: 53,
  //   referans: "nazarkebab.be",
  // },
  // {
  //   id: 54,
  //   referans: "nazarputteonline.be",
  // },
  {
    id: 55,
    referans: "noeuxkebab.fr",
  },
  {
    id: 56,
    referans: "obaleopoldsburg.be",
  },
  {
    id: 57,
    referans: "orientkebapbree.be",
  },
  {
    id: 58,
    referans: "orientkebapneeroeteren.be",
  },
  {
    id: 59,
    referans: "orientlanklaar.be",
  },
  {
    id: 60,
    referans: "peerbaskent.be",
  },
  // {
  //   id: 61,
  //   referans: "peronnegrill.fr",
  // },
  {
    id: 62,
    referans: "pitaouffet.be",
  },
  {
    id: 63,
    referans: "pizzakebabmemo.be",
  },
  {
    id: 64,
    referans: "restaurantdila.fr",
  },
  // {
  //   id: 65,
  //   referans: "restaurantlaplace.fr",
  // },
  {
    id: 66,
    referans: "restoistanbul.fr",
  },
  {
    id: 67,
    referans: "sandwicherieetape.fr",
  },
  {
    id: 68,
    referans: "snackaydinberingen.be",
  },
  {
    id: 69,
    referans: "snackpitaboncelles.be",
  },
  {
    id: 70,
    referans: "snackunalmol.be",
  },
  {
    id: 71,
    referans: "sofram.be",
  },
  {
    id: 72,
    referans: "stelaeindhout.be",
  },
  {
    id: 73,
    referans: "taksimkebapriemst.be",
  },
  {
    id: 74,
    referans: "tessenderlobaskent.be",
  },
  {
    id: 75,
    referans: "urfakebaphauseschweiler.de",
  },
];

export const suportAccordionItems = [
  {
    title: "Wonlinemenu nedir?",
    content: (
      <p className="mb-2">
        Wonlinemenu (WhatsApp Online Menu), işletmeler için Whatsapp üzerinden
        sipariş alabileceğiniz kolay e-ticaret yazılımıdır. kolaylıkla
        ürünlerinizi ekleyebilir ve sipariş alabilirsiniz.
      </p>
    ),
  },
  {
    title: "Nasıl kullanabilirim?",
    content: (
      <p className="mb-2">
        Wonlinemenu, Abonelik sistemi ile hizmet vermektedir. Yıllık periyotta
        ödeme yaparak kullanmaya başlabilirsiniz. Bizimle iletişim kurarak daha
        fazla detaylı bilgi alabilirsiniz.
      </p>
    ),
  },
  {
    title: "Ödemeleri nasıl alacağız?",
    content: (
      <>
        <p className="mb-2">
          Wonlinemenu üzerinden online ödeme alabilirsiniz. Kontrol panelinden
          Ödeme yöntemleri belirleyerek müşterilerinize kolaylıklar
          sağlıyabilirsiniz.
        </p>
        <p className="mb-2">
          Örnek : Kapıda Nakit Ödeme, Kapıda Kredi Kartı, Ticket Restaurant,
          Sodexo, Multinet, Setcard, Winwin, Metropol, Havale & EFT, Payconiq,
          Papara gibi..
        </p>
      </>
    ),
  },

  // {
  //   title: "ALPEMIX 7/24 destek alın.",
  //   content: (
  //     <>
  //       <p className="mb-2">
  //         ALPEMIX 7/24 güvenli olarak bağlantı halinde kalabileceğimiz Servis
  //         yazılımıdır.
  //       </p>
  //       <a
  //         href="https://www.alpemix.com/site/AlpemixService.exe"
  //         className="cursor-pointer font-medium text-green-600 hover:underline mb-2"
  //       >
  //         Şimdi indir
  //       </a>
  //       <p className="mb-2">
  //         Görsel olarak kurulum anlatımı :<br />
  //         Alpemix dosyasını indirdikten sonra ÇALIŞTIR butonuna basarak devam
  //         edin.
  //       </p>
  //       <img src={img1} alt="1" className="w-md" />
  //       {/*  */}
  //       <hr className="mt-2" />
  //       <p className="mt-3">
  //         Kurulum için karşınıza çıkan bu pencerede Başlat butonuna basın.
  //       </p>
  //       <img src={img2} alt="2" className="w-md" />
  //       {/*  */}
  //       <hr className="mt-2" />
  //       <p className="mt-3">
  //         Kuruluma devam etmek için ilk seçili olan seçeneği işaretli bırakarak
  //         TAMAM butonuna basın.
  //       </p>
  //       <img src={img3} alt="3" className="w-md" />
  //       {/*  */}
  //       <hr className="mt-2" />
  //       <p className="mt-3">
  //         Tebrikler, Destek programınız hazır. <br />
  //         Giriş bilgilerinizi{" "}
  //         <a
  //           href="tel:+905409505454"
  //           className="font-medium text-green-600 hover:underline"
  //         >
  //           WhatsApp
  //         </a>{" "}
  //         üzerinden bizden isteyebilirsiniz.
  //       </p>
  //       <img src={img4} alt="4" className="w-md" />
  //       {/*  */}
  //       <hr className="mt-2" />
  //       <p className="mt-3 font-bold">Video olarak kurulum anlatımı:</p>
  //       <div className="w-75 rounded-lg overflow-hidden">
  //         <iframe
  //           className="top-0 left-0 w-full h-full"
  //           src="https://www.youtube.com/embed/VDj1tssoFV8?si=cv_jYJO5vmKxd-ql"
  //           title="YouTube video player"
  //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //           referrerPolicy="strict-origin-when-cross-origin"
  //           allowFullScreen
  //         ></iframe>
  //       </div>
  //     </>
  //   ),
  // },
  {
    title: "ALPEMIX 7/24 destek alın.",
    content: (() => {
      function ImageGrid() {
        const [selectedImageIndex, setSelectedImageIndex] = useState(null);

        const images = [
          { src: img1, alt: "1" },
          { src: img2, alt: "2" },
          { src: img3, alt: "3" },
          { src: img4, alt: "4" },
        ];

        const handleNext = () => {
          setSelectedImageIndex((prev) =>
            prev < images.length - 1 ? prev + 1 : prev
          );
        };

        const handlePrev = () => {
          setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
        };

        return (
          <>
            <p className="mb-2">
              ALPEMIX 7/24 güvenli olarak bağlantı halinde kalabileceğimiz
              Servis yazılımıdır.
            </p>
            <a
              href="https://www.alpemix.com/site/AlpemixService.exe"
              className="cursor-pointer font-medium text-green-600 hover:underline mb-2"
            >
              Şimdi indir
            </a>
            <p className="mb-2">
              Görsel olarak kurulum anlatımı :<br />
              Alpemix dosyasını indirdikten sonra ÇALIŞTIR butonuna basarak
              devam edin.
            </p>

            {/* Resim Grid */}
            <img
              src={img1}
              alt="1"
              className="w-md cursor-pointer hover:opacity-90 transition-opacity mb-4"
              onClick={() => setSelectedImageIndex(0)}
            />
            <hr className="mt-2" />

            <p className="mt-3">
              Kurulum için karşınıza çıkan bu pencerede Başlat butonuna basın.
            </p>
            <img
              src={img2}
              alt="2"
              className="w-md cursor-pointer hover:opacity-90 transition-opacity mb-4"
              onClick={() => setSelectedImageIndex(1)}
            />
            <hr className="mt-2" />

            <p className="mt-3">
              Kuruluma devam etmek için ilk seçili olan seçeneği işaretli
              bırakarak TAMAM butonuna basın.
            </p>
            <img
              src={img3}
              alt="3"
              className="w-md cursor-pointer hover:opacity-90 transition-opacity mb-4"
              onClick={() => setSelectedImageIndex(2)}
            />
            <hr className="mt-2" />

            <p className="mt-3">
              Tebrikler, Destek programınız hazır. <br />
              Giriş bilgilerinizi{" "}
              <a
                href="tel:+905409505454"
                className="font-medium text-green-600 hover:underline"
              >
                WhatsApp
              </a>{" "}
              üzerinden bizden isteyebilirsiniz.
            </p>
            <img
              src={img4}
              alt="4"
              className="w-md cursor-pointer hover:opacity-90 transition-opacity mb-4"
              onClick={() => setSelectedImageIndex(3)}
            />

            <ImageModal
              isOpen={selectedImageIndex !== null}
              onClose={() => setSelectedImageIndex(null)}
              imageSrc={
                selectedImageIndex !== null
                  ? images[selectedImageIndex].src
                  : ""
              }
              images={images}
              currentIndex={selectedImageIndex}
              onNext={handleNext}
              onPrev={handlePrev}
            />

            <hr className="mt-2" />
            <p className="mt-3 font-bold">Video olarak kurulum anlatımı:</p>
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
    })(),
  },
  {
    title: "Sadece QR Menu olarak kullanabilir miyim?",
    content: (
      <>
        <p className="mb-2">Wonlinemenu 3 aşamalı bir sipariş sistemidir.</p>
        <ul className="max-w-md list-disc list-inside">
          <li>Paket servisi</li>
          <li>Gel-Al</li>
          <li>QR Kodu ile Masan sipariş</li>
        </ul>
        <p className="mt-2">
          İstediğiniz özelliği Ayarlar bölümünden kullanmaya açabilir veya
          kapatabilirsiniz. <br />
          Sipariş almayı tamamen durdurarak güncel bir menu olarak da
          wonlinemenu sistemini kullanabilirsiniz.
        </p>
      </>
    ),
  },
  // {
  //   title: "Müşteriler bize nasıl ulaşacaklar?",
  //   content: (
  //     <>
  //       <p className="mb-2">
  //         Mağazanız için belirleyeceğiniz size özel linki veya QR kodlarınızı
  //         müşterilerinizle paylaşarak, müşterilerinizi mağazanızdan haberdar
  //         edebilir, sipariş vermelerini sağlayabilirsiniz veya aşağıda bulunan
  //         örnekler gibi sizlere el ilanları hazırlayabiliriz.
  //       </p>
  //       <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-2">
  //         <img src={imgM1} alt="1" />
  //         <img src={imgM2} alt="2" />
  //         <img src={imgM3} alt="3" />
  //         <img src={imgM4} alt="4" />
  //         <img src={imgM5} alt="5" />
  //         <img src={imgM6} alt="6" />
  //         <img src={imgM7} alt="7" />
  //         <img src={imgM8} alt="8" />
  //         <img src={imgM9} alt="9" />
  //         <img src={imgM10} alt="10" />
  //         <img src={imgM11} alt="11" />
  //         <img src={imgM12} alt="12" />
  //         <img src={imgM13} alt="13" />
  //         <img src={imgM14} alt="14" />
  //         <img src={imgM15} alt="15" />
  //       </div>
  //     </>
  //   ),
  // },
  {
    title: "Müşteriler bize nasıl ulaşacaklar?",
    content: (() => {
      // Component içinde state kullanabilmek için function component yaklaşımı
      function ImageGrid() {
        const [selectedImageIndex, setSelectedImageIndex] = useState(null);

        const images = [
          { src: imgM1, alt: "1" },
          { src: imgM2, alt: "2" },
          { src: imgM3, alt: "3" },
          { src: imgM4, alt: "4" },
          { src: imgM5, alt: "5" },
          { src: imgM6, alt: "6" },
          { src: imgM7, alt: "7" },
          { src: imgM8, alt: "8" },
          { src: imgM9, alt: "9" },
          { src: imgM10, alt: "10" },
          { src: imgM11, alt: "11" },
          { src: imgM12, alt: "12" },
          { src: imgM13, alt: "13" },
          { src: imgM14, alt: "14" },
          { src: imgM15, alt: "15" },
        ];

        const handleNext = () => {
          setSelectedImageIndex((prev) =>
            prev < images.length - 1 ? prev + 1 : prev
          );
        };

        const handlePrev = () => {
          setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
        };

        return (
          <>
            <p className="mb-2">
              Mağazanız için belirleyeceğiniz size özel linki veya QR
              kodlarınızı müşterilerinizle paylaşarak, müşterilerinizi
              mağazanızdan haberdar edebilir, sipariş vermelerini
              sağlayabilirsiniz veya aşağıda bulunan örnekler gibi sizlere el
              ilanları hazırlayabiliriz.
            </p>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-2">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImageIndex(index)}
                />
              ))}
            </div>
            <ImageModal
              isOpen={selectedImageIndex !== null}
              onClose={() => setSelectedImageIndex(null)}
              imageSrc={
                selectedImageIndex !== null
                  ? images[selectedImageIndex].src
                  : ""
              }
              images={images}
              currentIndex={selectedImageIndex}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          </>
        );
      }

      return <ImageGrid />;
    })(),
  },
  {
    title: "Ürün / Fiyat güncelleme",
    content: (
      <>
        <p>Bu videoda Ürün ekleme ve Düzenlemeyi görüntüleyebilirsiniz.</p>
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
    ),
  },
  {
    title: "Açılış / Kapanış saat ayarları",
    content: (
      <>
        <p>
          Sipariş sistemi, İş yerinizin açılış ve kapanış saatlerine göre
          çalışır. <br />
          Bu yüzden saatleri doğru girmeniz gerekmektedir. Saat ayarları için
          lütfen izleyin.
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
    ),
  },
  {
    title: "Paket servis ayarları",
    content: (
      <>
        <p>
          Eğer paket servisi kullanıyorsanız, Her şehir için farklı teslimat
          fiyatı belirleyebilirsiniz. Ayrıca dilerseniz ek olarak servis
          ücretide ekleyebilirsiniz.
        </p>
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
    ),
  },
  {
    title: "% indirim ve hediye ayarları",
    content: (
      <>
        <p>
          Müşterilerinize indirim uygulamak veya belirtmiş olduğunuz limitleri
          doldurduklarında hediye ürünler vermek istiyorsanız bu bilgi tam size
          göre...
        </p>
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
    ),
  },
  {
    title: "Siparişe Kapatma / Açma",
    content: (
      <>
        <p>
          Sipariş sistemi normalde açılış saatlerine göre açılır ve kapanır.
          Fakat acil durumlarda sisteminizi tamamen siparişe kapatabilir veya
          sadece Paket servisine kapatabilirsiniz. Yeniden siparişe açana kadar
          tamamen kapalı kalacağını unutmayın.
        </p>
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
    ),
  },
  // {
  //   title: "Masadan sipariş ayarları",
  //   content: (
  //     <>
  //       <p>
  //         İşletmenizde bulunan masalarda numaralarınız varsa eğer Müşterileriniz
  //         kolaylıkla masadan sipariş verebilir. Bunun için yapmanız gereken
  //         ayarı şimdi izleyin.
  //       </p>
  //       <div className="w-75 rounded-lg overflow-hidden mt-2">
  //         <iframe
  //           className="top-0 left-0 w-full h-full"
  //           src="https://www.youtube.com/embed/9GVf43XNYpE?si=tuL3C7fegkV8no2q"
  //           title="YouTube video player"
  //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //           referrerPolicy="strict-origin-when-cross-origin"
  //           allowFullScreen
  //         ></iframe>
  //       </div>
  //       <hr className="mt-2" />
  //       <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-2">
  //         <img src={imgMa1} alt="1" />
  //         <img src={imgMa2} alt="2" />
  //         <img src={imgMa3} alt="3" />
  //         <img src={imgMa4} alt="4" />
  //         <img src={imgMa5} alt="5" />
  //       </div>
  //     </>
  //   ),
  // },
  {
    title: "Masadan sipariş ayarları",
    content: (() => {
      function ImageGrid() {
        const [selectedImageIndex, setSelectedImageIndex] = useState(null);

        const images = [
          { src: imgMa1, alt: "1" },
          { src: imgMa2, alt: "2" },
          { src: imgMa3, alt: "3" },
          { src: imgMa4, alt: "4" },
          { src: imgMa5, alt: "5" },
        ];

        const handleNext = () => {
          setSelectedImageIndex((prev) =>
            prev < images.length - 1 ? prev + 1 : prev
          );
        };

        const handlePrev = () => {
          setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
        };

        return (
          <>
            <p>
              İşletmenizde bulunan masalarda numaralarınız varsa eğer
              Müşterileriniz kolaylıkla masadan sipariş verebilir. Bunun için
              yapmanız gereken ayarı şimdi izleyin.
            </p>
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
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImageIndex(index)}
                />
              ))}
            </div>
            <ImageModal
              isOpen={selectedImageIndex !== null}
              onClose={() => setSelectedImageIndex(null)}
              imageSrc={
                selectedImageIndex !== null
                  ? images[selectedImageIndex].src
                  : ""
              }
              images={images}
              currentIndex={selectedImageIndex}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          </>
        );
      }

      return <ImageGrid />;
    })(),
  },
  {
    title: "Duyuru / Haber yayınlama",
    content: (
      <>
        <p>
          Acil durum mesajı, Promosyon veya daha farklı bilgilerle Web sitenize
          giren müşterilerinizi bir mesaj ile karşılamak isterseniz eğer bu
          video size yardımcı olacaktır.
        </p>
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
    ),
  },
  {
    title: "Kasa ve Garson Kurulumu",
    content: (
      <>
        <p>
          İşletmenizde masalardan siparişleri garsonlarınız alıyorsa Web tabanlı
          kasa panelini bilgisayarınıza kurmanız gerekiyor. Bu video size
          yardımcı olacaktır.
        </p>
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
    ),
  },
  {
    title: "Sorularıma cevap bulamadım. Daha fazla destek istiyorum.",
    content: (
      <>
        <p>
          Daha fazla desteğe ihtiyacınız varsa WhatsApp üzerinden bizimle
          iletişim kurabilirsiniz.
        </p>
        <p className="mt-2">
          Türkiye:
          <a
            href="https://wa.me/905409505454"
            className="text-green-600 hover:text-green-700 font-medium"
            target="_blank"
          >
            +90 540 950 54 54
          </a>
        </p>
        <p>
          Fransa:
          <a
            href="https://wa.me/33778563414"
            className="text-green-600 hover:text-green-700 font-medium"
            target="_blank"
          >
            +33 7 78 56 34 14
          </a>
        </p>
      </>
    ),
  },
];

export const wGarson = [
  {
    title: "Anatolie Restaurant Montreau",
    content: (
      <a
        href="https://wonline.menu/wgarson/app/Anatolie_Montereau.apk"
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
    ),
  },
  {
    title: "La Pergola 1 Restaurant Lommel",
    content: (
      <a
        href="https://wonline.menu/wgarson/app/lapergola1lommel.apk"
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
    ),
  },
  {
    title: "La Pergola 2 Restaurant Lommel",
    content: (
      <a
        href="https://wonline.menu/wgarson/app/lapergola2lommel.apk"
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
    ),
  },
  {
    title: "Sofram Restaurant Beringen",
    content: (
      <a
        href="https://wonline.menu/wgarson/app/soframberingen.apk"
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
    ),
  },
  {
    title: "Oba Restaurant Leopoldsburg",
    content: (
      <a
        href="https://wonline.menu/wgarson/app/obaleopoldsburg.apk"
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
    ),
  },
  {
    title: "Snack Resto Zawentem",
    content: (
      <a
        href="https://wonline.menu/wgarson/app/snackrestoza.apk"
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
    ),
  },
];
