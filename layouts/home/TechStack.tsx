"use client";

import { motion } from "framer-motion";
import {
  SiGo,
  SiPostgresql,
  SiDocker,
  SiLinux,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";

const stack = [
  { icon: <SiGo />, label: "Go (Backend Systems)" },
  { icon: <SiPostgresql />, label: "PostgreSQL" },
  { icon: <SiDocker />, label: "Docker (Foundational)" },
  { icon: <SiLinux />, label: "Linux" },
  { icon: <SiPython />, label: "Python (Automation)" },
  { icon: <SiDjango />, label: "Django (APIs)" },
  { icon: <SiNodedotjs />, label: "Node.js (APIs)" },
  { icon: <SiReact />, label: "React (Basic UI)" },
];

export default function TechStack() {
  return (
    <section
      className="w-full py-20"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Tools I Work With
        </motion.h2>

        <motion.p
          className="mb-12 max-w-2xl mx-auto"
          style={{ color: "var(--muted-foreground)" }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          My toolkit is designed for building robust, scalable applications tailored to your business needs.
        </motion.p>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {stack.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 rounded-2xl border transition-transform"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <div
                className="text-4xl mb-2 transition-colors"
                style={{ color: "var(--primary)" }}
              >
                {tech.icon}
              </div>
              <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                {tech.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
