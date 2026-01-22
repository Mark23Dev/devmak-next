import Image from "next/image";

export default function ImageBlock({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="my-6">
      <Image src={src} alt={alt} width={700} height={400} className="rounded-xl shadow-md mx-auto" />
    </div>
  );
}
