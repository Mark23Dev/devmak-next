"use client";

import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center py-24"
      style={{ background: "var(--background)" }}
    >
      {/* Avatar */}
      <motion.img
        src="/profile.jpg" // replace with your portrait/illustration
        alt="DevMak Avatar"
        className="w-32 h-32 rounded-full border-4 border-cyan-400 shadow-lg mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      />

      {/* Headline */}
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--primary), var(--accent), var(--secondary))",
        }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        I’m DevMak — Building Robust Go Backends & Scalable Systems
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed"
        style={{ color: "var(--muted-foreground)" }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        I focus on Go backend development, system design, and building scalable, 
        maintainable software. Currently, I’m working on projects like{" "}
        <span className="text-cyan-400 font-semibold">EcoThreads</span>,{" "}
        <span className="text-purple-400 font-semibold">Notes App</span>, and a{" "}
        <span className="text-green-400 font-semibold">Library Management System</span>. 
        My goal is to deliver reliable systems that solve real-world problems and 
        push the boundaries of software engineering.
      </motion.p>

      {/* Futuristic divider */}
      <motion.div
        className="mt-10 w-28 h-1 rounded-full"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--primary), var(--accent), var(--secondary))",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      />
    </section>
  );
}
