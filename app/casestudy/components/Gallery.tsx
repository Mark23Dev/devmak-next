import Image from "next/image";

export default function Gallery({ images }: { images: string[] }) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold text-cyan-400">Gallery</h2>
      <div className="grid md:grid-cols-2 gap-4 mt-2">
        {images.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`Gallery ${idx + 1}`}
            width={600}
            height={400}
            className="rounded-xl shadow-md"
          />
        ))}
      </div>
    </div>
  );
}
