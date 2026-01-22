import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <section className="bg-gray-950 text-white min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">{children}</div>
    </section>
  );
}
