"use client";

import { motion } from "framer-motion";
import { Brain, Rocket, Zap, Globe } from "lucide-react";

const timeline = [
  {
    year: "2023",
    icon: <Brain className="w-6 h-6 text-cyan-400" />,
    desc: "Started programming, learned Python and basic algorithms.",
  },
  {
    year: "2024",
    icon: <Zap className="w-6 h-6 text-purple-400" />,
    desc: "Learned HTML, CSS, JavaScript; built YouTube clone. Explored Django backend with MySQL (ALX) and created an E-Commerce API.",
  },
  {
    year: "2025",
    icon: <Rocket className="w-6 h-6 text-pink-400" />,
    desc: "Mastered TypeScript, React, Node/Express, Web3. Built blog, notes app, and chat app with Firebase backend & authentication.",
  },
  {
    year: "2026+",
    icon: <Globe className="w-6 h-6 text-green-400" />,
    desc: "Focusing on Go backend development and scalable system design. Building projects like EcoThreads, Notes App, Library Management System, and my full-year Cloud System for External HDDs project — a comprehensive, real-world application showcasing distributed architectures, Go backends, and advanced system integrations.",
  },
];

export default function JourneyTimeline() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Journey So Far
        </h2>

        {/* Timeline */}
        <div className="relative border-l" style={{ borderColor: "var(--border)" }}>
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              className="mb-10 ml-6 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Icon */}
              <span
                className="absolute -left-3 flex items-center justify-center w-10 h-10 rounded-full border shadow-lg"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
                {item.icon}
              </span>

              {/* Content */}
              <div
                className="rounded-xl p-6 shadow-md transition hover:shadow-lg"
                style={{ backgroundColor: "var(--card)", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
              >
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--primary)" }}>
                  {item.year}
                </h3>
                <p style={{ color: "var(--muted-foreground)" }} className="text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
