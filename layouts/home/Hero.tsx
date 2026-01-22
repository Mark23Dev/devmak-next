"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero1.mp4" type="video/mp4" />
      </video>

      {/* Overlay for stronger readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.9))",
        }}
      />

      {/* Content */}
      <div className="text-center z-10 px-4 max-w-4xl">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Building{" "}
          <span style={{ color: "var(--primary)" }} className="drop-shadow-[0_0_8px_var(--primary)]">
            Scalable Backends
          </span>
          ,{" "}
          <span style={{ color: "var(--secondary)" }} className="drop-shadow-[0_0_8px_var(--secondary)]">
            Go Systems
          </span>
          , and{" "}
          <span style={{ color: "var(--accent)" }} className="drop-shadow-[0_0_8px_var(--accent)]">
            Reliable APIs
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-10 drop-shadow-md"
          style={{ color: "var(--muted-foreground)" }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I’m <span style={{ color: "var(--foreground)", fontWeight: 600 }}>DevMak</span> — a
          backend-focused developer building performant, maintainable systems
          with <span style={{ color: "var(--primary)" }}>Go</span>,{" "}
          <span style={{ color: "var(--secondary)" }}>clean architecture</span>, and{" "}
          <span style={{ color: "var(--accent)" }}>production-ready APIs</span>.
          I care about correctness, scalability, and long-term system growth.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              href="#contact"
              className={buttonVariants({ variant: "default" })}
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--foreground)",
              }}
            >
              Work With Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              href="#projects"
              className={buttonVariants({ variant: "outline" })}
              style={{
                borderColor: "var(--primary)",
                color: "var(--foreground)",
              }}
            >
              See My Projects
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <span
          className="block w-6 h-10 rounded-full relative border-2"
          style={{ borderColor: "var(--primary)" }}
        >
          <span
            className="absolute top-2 left-1/2 w-2 h-2 rounded-full animate-bounce -translate-x-1/2"
            style={{ backgroundColor: "var(--primary)" }}
          ></span>
        </span>
      </div>
    </section>
  );
}
