import img from "../assets/AND.png";
import Accordion from "./Accordion";
import { wGarson } from "./data";

export default function WGarsonSection() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
        <div className="lg:w-1/2 text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Hızlı & Dinamik
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            W Garson ile Garsonlarınız kendi mobil cihazları ile sipariş
            alabilir, İşletmenizde ek olarak cihaz kullanmanıza gerek yoktur.
          </p>
          <p className="text-gray-600 leading-relaxed text-base my-4">
            Kasa panelinden istediğiniz kadar Yeni garson üyeliği
            oluşturabilirsiniz, Her garson kendi kullanıcı adı ve şifresi ile
            sisteme giriş yapar.
          </p>
          <p className="text-gray-600 leading-relaxed text-base">
            Böylelikle sipariş alan veya siparişi düzenleyen garsonlarınızın kim
            olduğunuzu rahatlıkla görebilirsiniz.
          </p>
          <p className="text-gray-600 leading-relaxed text-base my-4">
            W Garson’u kullanabilmeniz için bizimle lütfen iletişime geçin.
          </p>
          <p className="text-gray-600 leading-relaxed text-base mb-4">
            Not : Zaten Kasa ve Garson sistemini kullanıyorsanız ve
            Garsonlarınızın cihazı Android işletim sistemi ile çalışıyorsa,
            Aşağıda bulunan listeden kendi restoranınıza ait uygulamayı
            indirerek daha kolay kullanım sağlayabilirsiniz.
          </p>
        </div>
        <div className="flex-shrink-0 mb-6 w-full md:mb-0 lg:w-1/2">
          <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/JDRaGdXeBTo?si=opm79ZdJOy0pS_km"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full">
        <img src={img} alt="1" className="w-80 mx-auto" />
        <Accordion items={wGarson} />
      </div>
    </>
  );
}
