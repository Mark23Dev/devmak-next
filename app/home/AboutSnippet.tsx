"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button"; // if you want to style the link like shadcn button
import Link from "next/link";

export default function AboutSnippet() {
  return (
    <section
      id="about"
      className="relative w-full py-20"
      style={{
        background: "linear-gradient(to bottom, var(--sidebar), var(--background))",
        color: "var(--foreground)",
      }}
    >
      <motion.div
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Left: Avatar + Values */}
        <div className="text-center md:text-left">
          <Image
            src="/profile.jpg"
            alt="DevMak portrait"
            width={160} // w-40
            height={160} // h-40
            className="rounded-full mx-auto md:mx-0 border-4 border-cyan-400 shadow-lg mb-6"
          />

          <div className="flex justify-center md:justify-start gap-6 mt-6">
            {/* Innovation */}
            <div className="flex flex-col items-center">
              <span
                className="p-3 rounded-full text-xl"
                style={{
                  backgroundColor: "rgba(6, 182, 212, 0.1)", // cyan-500/10
                  color: "var(--primary)",
                }}
              >
                ⚡
              </span>
              <p className="mt-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                Innovation
              </p>
            </div>

            {/* Trust */}
            <div className="flex flex-col items-center">
              <span
                className="p-3 rounded-full text-xl"
                style={{
                  backgroundColor: "rgba(139, 92, 246, 0.1)", // purple-500/10
                  color: "var(--secondary)",
                }}
              >
                🤝
              </span>
              <p className="mt-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                Trust
              </p>
            </div>

            {/* Growth */}
            <div className="flex flex-col items-center">
              <span
                className="p-3 rounded-full text-xl"
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.1)", // green-500/10
                  color: "var(--accent)",
                }}
              >
                🚀
              </span>
              <p className="mt-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                Growth
              </p>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--muted-foreground)" }}>
            I’m <span className="font-semibold text-white">DevMak</span>, a Go developer with a strong interest in backend systems and performance-driven software. I focus on building efficient APIs, robust backend logic, and well-structured applications guided by clean architecture principles. I believe great systems start simple and evolve deliberately.
          </p>
          <Link
            href="/about"
            className={buttonVariants({ variant: "link" })}
            style={{ color: "var(--primary)" }}
          >
            Read My Full Story →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
