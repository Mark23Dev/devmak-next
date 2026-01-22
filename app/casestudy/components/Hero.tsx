import Image from "next/image";

export default function Hero({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400">
        {title}
      </h1>
      <p className="text-gray-300 text-lg">{subtitle}</p>
      <div className="mt-8">
        <Image src={image} alt={title} width={800} height={400} className="rounded-2xl shadow-lg mx-auto" />
      </div>
    </div>
  );
}
