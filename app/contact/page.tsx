"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Navbar */}
      {/* Main Section */}
      <section className="relative flex-1 py-32 px-6 flex flex-col justify-center text-center text-white">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-6
              bg-clip-text text-transparent
              bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mb-12 text-lg md:text-xl leading-relaxed text-zinc-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I’m always excited to connect — whether it’s for freelance work,
            collaboration, or just to say hi.
          </motion.p>

          {/* Contact Form */}
          <motion.form
            className="
              max-w-xl mx-auto flex flex-col gap-6
              rounded-2xl p-8
              bg-zinc-900/80 backdrop-blur
              border border-cyan-500/20
              shadow-xl shadow-cyan-500/10
            "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="
                p-4 rounded-xl
                bg-black border border-zinc-700
                text-white placeholder-zinc-500
                focus:outline-none focus:ring-2 focus:ring-cyan-400
              "
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                p-4 rounded-xl
                bg-black border border-zinc-700
                text-white placeholder-zinc-500
                focus:outline-none focus:ring-2 focus:ring-cyan-400
              "
              required
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="
                p-4 rounded-xl
                bg-black border border-zinc-700
                text-white placeholder-zinc-500
                focus:outline-none focus:ring-2 focus:ring-cyan-400
              "
              required
            />

            <button
              type="submit"
              className="
                py-3 rounded-xl font-semibold
                text-black
                bg-gradient-to-r from-cyan-400 to-purple-500
                hover:from-cyan-300 hover:to-purple-400
                transition
              "
            >
              Send Message
            </button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            className="mt-12 flex justify-center gap-6 text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a href="mailto:your-email@example.com" className="hover:text-cyan-400">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-cyan-400">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com" target="_blank" className="hover:text-cyan-400">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-cyan-400">
              <FaInstagram className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
