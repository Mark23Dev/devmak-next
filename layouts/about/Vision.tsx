"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/vision1.mp4" type="video/mp4" />
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 z-10" style={{ backgroundColor: "rgba(0,0,0,0.8)" }} />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center z-20">
        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(to right, var(--primary), var(--accent))" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          The Vision Behind <span className="font-semibold">DevMak</span>
        </motion.h2>

        {/* Content */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed"
          style={{ color: "var(--muted-foreground)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          DevMak is focused on <span className="font-semibold" style={{ color: "var(--primary)" }}>building robust Go backends</span> 
          and <span className="font-semibold" style={{ color: "var(--accent)" }}>scalable systems</span> 
          that solve real-world problems. Every project, from the <span className="font-semibold" style={{ color: "var(--success)" }}>Library Management System</span> 
          to the <span className="font-semibold" style={{ color: "var(--destructive)" }}>Cloud System for External HDDs</span>, represents my commitment to 
          <span className="font-semibold" style={{ color: "var(--primary)" }}>reliability</span>, 
          <span className="font-semibold" style={{ color: "var(--accent)" }}>performance</span>, 
          and <span className="font-semibold" style={{ color: "var(--destructive)" }}>maintainability</span>. My goal is to empower businesses and individuals 
          through carefully engineered digital solutions that stand the test of time.
        </motion.p>
      </div>
    </section>
  );
}
