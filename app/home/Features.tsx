"use client";

import { ShoppingCart, BarChart3, Bot, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <ShoppingCart className="w-10 h-10 text-cyan-400" />,
    title: "Backend for Marketplaces",
    desc: "Order flows, payments, inventory logic, and service integrations.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-purple-400" />,
    title: "SaaS Backend Systems",
    desc: "Authentication, role-based access, metrics, and admin APIs.",
  },
  {
    icon: <Bot className="w-10 h-10 text-green-400" />,
    title: "Automation & Data Services",
    desc: "Background jobs, workers, and data-driven backend processes.",
  },
  {
    icon: <Shield className="w-10 h-10 text-indigo-400" />,
    title: "Secure & Scalable APIs",
    desc: "Well-structured, performant APIs built with Go and clean architecture.",
  },
];

export default function FeaturesSnippet() {
  return (
    <section
      id="what-i-build"
      className="relative w-full py-20"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What I Build
        </h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-2xl border transition transform hover:-translate-y-2"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
                boxShadow: `0 0 20px rgba(56,189,248,0.2)`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
