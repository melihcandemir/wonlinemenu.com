import img from "../assets/Home.jpg";

export default function SectionOne() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <img src={img} alt="img" />
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center max-w-2xl text-green-600">
        Whatsapp ile sipariş almanın en kolay yolu !
      </h1>
    </div>
  );
}
