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

import { useLanguage } from "../context/LanguageContext";
import { accordionTranslations } from "../translations/accordion";
import { supportAccordionTranslations } from "../translations/supportAccordion";

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

export const tests = [
  {
    id: 1,
    langue: "Türkçe",
    test: "wonline.menu/demo/tr/",
  },
  {
    id: 2,
    langue: "Nederlands",
    test: "wonline.menu/demo/nl/",
  },
  {
    id: 3,
    langue: "Français",
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

export const reviewsData = [
  {
    id: 1,
    name: "Unay Zor",
    rating: 5,
    date: "20.06.2025",
    comment:
      "8 yildir beraber calisiyoruz,ve cok memnunum gercekten kaliteli bir reklamcilik siddetle tavsiye ediyorum",
    avatar: "UZ",
  },
  {
    id: 2,
    name: "Emre Polat",
    rating: 5,
    date: "12.06.2025",
    comment: "Zeer tevreden over het systeem 👍🏽",
    avatar: "EM",
  },
  {
    id: 3,
    name: "Bekir Nasuf",
    rating: 5,
    date: "18.05.2025",
    comment:
      "ik Werk al sinds het begin van dit programma mee met hun en ben zeer content. Als er een probleem is word het snel opgelost.",
    avatar: "BN",
  },
  {
    id: 4,
    name: "Gülşah Yakar",
    rating: 5,
    date: "13.10.2024",
    comment:
      "Snelle service, betrouwbaar en goedkoop. We zijn zeer tevreden over de werking van de website.",
    avatar: "GY",
  },
  {
    id: 5,
    name: "R.",
    rating: 5,
    date: "24.09.2023",
    comment:
      "Heel handig, wij zijn zeer tevreden. Mooie applicatie met goede service!!! Zeker aan te raden.",
    avatar: "R.",
  },
  {
    id: 6,
    name: "Özgür Aslan",
    rating: 5,
    date: "15.08.2023",
    comment: "Birinci klaute iscilik birinci kalite Hizmet",
    avatar: "ÖA",
  },
  {
    id: 7,
    name: "Vedat Agdag",
    rating: 5,
    date: "12.08.2023",
    comment:
      "Zeer makkelijk systeem als je horeca zaak heb we zijn super tevreden 👌",
    avatar: "VA",
  },
  {
    id: 8,
    name: "Osman Er",
    rating: 5,
    date: "22.07.2023",
    comment:
      "Çok güzel bir uygulama ben çok memnun kaldım herkese şiddetle tavsiye edebilirim",
    avatar: "OE",
  },
  {
    id: 9,
    name: "Ahmed Hasan",
    rating: 5,
    date: "15.07.2023",
    comment:
      "Harika bir web sitesi,kuruldugu ilk gunden beri bizlerde kulaniyoruz ve musterilerimizde cok memnun herkeze tavsiye ederiz,ve 7/24 herzmn ulasabilirsiniz.sizinle calismaktan cok memnunuz Muftun 💯💯Wonlinemenu💯💯 Benim dusuncem 5 yildiz bile az 10 da 10",
    avatar: "AH",
  },
  {
    id: 10,
    name: "Kenan Kocoglu",
    rating: 5,
    date: "10.07.2023",
    comment:
      "Raad iedreen het aan deze system heel gemakkelijk te gebruiken en voor snacks zaken heel gemakelijk te gebruiken en 24/24 7/7 is er support bij deze system beter system ken ik niet momneteel daarom krijg deze van mij 5ster",
    avatar: "KK",
  },
  {
    id: 11,
    name: "Erdal Goksu",
    rating: 5,
    date: "26.06.2023",
    comment:
      "Bütün hizmetleri yıllardır kullanıyoruz hepside bir işletmede olmazsa olmazlardan, site sürekli kolaylaştırıci yeniliklerle güncelleniyor, güler yüz hızlı servsiz için ayrıca teşekkür ederiz! Tek rakip THY:)",
    avatar: "EG",
  },
  {
    id: 12,
    name: "Helin Aykut",
    rating: 5,
    date: "17.06.2023",
    comment: "Très satisfait !!",
    avatar: "HA",
  },
  {
    id: 13,
    name: "Yasn Mtlu",
    rating: 5,
    date: "14.06.2023",
    comment:
      "ik Werk al sinds het begin van dit programma mee met hun en ben zeer content. Als er een probleem is word het snel opgelost. Vriendelijk en een vlotte website. Heb veel klanten die via dit bestellen omdat het gemakkelijker en duidelijker is, prima!",
    avatar: "YM",
  },
  {
    id: 14,
    name: "Orient Kuringen",
    rating: 5,
    date: "28.05.2023",
    comment:
      "Zeer handige bestelplatform met veel mogelijkheden, onze klanten vinden het beter als ze via WhatsApp bestellen!",
    avatar: "OK",
  },
  {
    id: 15,
    name: "Osman Suleyman",
    rating: 5,
    date: "25.05.2023",
    comment: "Meftun abimin eli altindan.",
    avatar: "OS",
  },
  {
    id: 16,
    name: "Ahmet Gürkan Alan",
    rating: 5,
    date: "19.05.2023",
    comment:
      "Gerçekten bir çok işimizi tek sistemde çözdü. Meftun beye çok teşekkür ederim.",
    avatar: "AG",
  },
  {
    id: 17,
    name: "Omur Olmez",
    rating: 5,
    date: "11.05.2023",
    comment: "Çok faydalı ve yararlı bir sistem tavsiye ederim..",
    avatar: "OO",
  },
];

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

              {/* Resim Grid */}
              <img
                src={img1}
                alt="1"
                className="w-md cursor-pointer hover:opacity-90 transition-opacity mb-4"
                onClick={() => setSelectedImageIndex(0)}
              />
              <hr className="mt-2" />

              <p className="mt-3">{item.content.paragraph4}</p>
              <img
                src={img2}
                alt="2"
                className="w-md cursor-pointer hover:opacity-90 transition-opacity mb-4"
                onClick={() => setSelectedImageIndex(1)}
              />
              <hr className="mt-2" />

              <p className="mt-3">{item.content.paragraph5}</p>
              <img
                src={img3}
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
              <p className="mb-2">{item.content}</p>
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
