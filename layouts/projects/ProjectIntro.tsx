"use client";

import { motion } from "framer-motion";

export default function ProjectsIntro() {
  return (
    <section
      className="relative py-32 text-center"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--primary), var(--accent), var(--secondary))",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Building Reliable Systems Through Code
        </motion.h2>

        {/* Accent Divider */}
        <motion.div
          className="mt-6 mb-8 flex justify-center"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span
            className="h-1 w-24 rounded-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary), var(--accent), var(--primary))",
            }}
          ></span>
        </motion.div>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto"
          style={{ color: "var(--muted-foreground)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          A curated selection of projects focused on Go backend development,
          system design, and scalable architectures. Each project represents a
          deliberate step toward mastering reliable, performant, and
          maintainable software systems.
        </motion.p>
      </div>
    </section>
  );
}
