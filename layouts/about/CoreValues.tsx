"use client";

import { motion } from "framer-motion";
import { Sparkles, Handshake, Target } from "lucide-react";

const values = [
  {
    icon: <Sparkles className="w-8 h-8 text-cyan-400" />,
    title: "Simplicity",
    desc: "Designs that feel intuitive and effortless.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-purple-400" />,
    title: "Empowerment",
    desc: "Tools that give users control and confidence.",
  },
  {
    icon: <Target className="w-8 h-8 text-pink-400" />,
    title: "Professionalism",
    desc: "Clean code, reliable delivery, and modern practices.",
  },
];

export default function CoreValues() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What I Stand For
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-2xl border transition"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
                boxShadow: "0 0 20px rgba(56,189,248,0.1)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">{value.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>

              {/* Description */}
              <p style={{ color: "var(--muted-foreground)" }} className="text-sm">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
