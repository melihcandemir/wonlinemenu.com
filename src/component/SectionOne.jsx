import img from "../assets/Home.jpg";

export default function SectionOne() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[30vh] md:min-h-screen p-4">
      <img src={img} alt="img" className="w-full max-w-md md:max-w-7xl mb-6" />
      <h1 className="text-2xl md:text-5xl font-bold font-anasayfa text-center max-w-2xl text-green-600">
        Whatsapp ile sipariş almanın en kolay yolu!
      </h1>
    </div>
  );
}
