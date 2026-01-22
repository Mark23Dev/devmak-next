"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"; // shadcn button variant

export default function CTA() {
  return (
    <section
      className="relative py-20 px-6 text-center overflow-hidden"
      style={{
        background: "linear-gradient(90deg, var(--primary), var(--secondary), var(--accent))",
        color: "var(--foreground)",
      }}
    >
      {/* Futuristic Glow Effect */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at top left, rgba(6,182,212,0.3), transparent 50%)",
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at bottom right, rgba(139,92,246,0.3), transparent 50%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Let’s build the{" "}
          <span style={{ color: "var(--primary)" }}>future together.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl mb-10"
          style={{ color: "var(--muted-foreground)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Collaborate with me to turn your vision into scalable, impactful
          digital products powered by modern tech.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Link
            href="/contact"
            className={buttonVariants({ variant: "default" })}
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--foreground)",
            }}
          >
            Work With Me
          </Link>

          <Link
            href="#projects"
            className={buttonVariants({ variant: "outline" })}
            style={{
              borderColor: "var(--primary)",
              color: "var(--foreground)",
            }}
          >
            Explore Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
