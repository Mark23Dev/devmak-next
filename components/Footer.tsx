"use client";

import { FaGithub, FaLinkedin, FaBriefcase, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 border-t"
      style={{
        backgroundColor: "var(--card)",
        color: "var(--muted-foreground)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / Logo */}
        <div>
          <h2
            className="text-xl font-bold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            DevMak
          </h2>
          <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            Building robust Go backends, scalable systems, and reliable software solutions with precision and creativity.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:items-center">
          <h3
            className="font-semibold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Navigation
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#home"
                className="transition"
                style={{ color: "var(--muted-foreground)" }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="transition"
                style={{ color: "var(--muted-foreground)" }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="transition"
                style={{ color: "var(--muted-foreground)" }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#techstack"
                className="transition"
                style={{ color: "var(--muted-foreground)" }}
              >
                Tech Stack
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition"
                style={{ color: "var(--muted-foreground)" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact / Socials */}
        <div>
          <h3
            className="font-semibold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Get in Touch
          </h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="mailto:marksaruni23@gmail.com"
              style={{ color: "var(--muted-foreground)" }}
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://linkedin.com/in/mark-saruni"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--muted-foreground)" }}
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Mark23Dev"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--muted-foreground)" }}
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01dc86248cc7256cc2"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--muted-foreground)" }}
              className="hover:text-cyan-400 transition"
            >
              <FaBriefcase />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="mt-10 border-t pt-6 text-center text-sm"
        style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
      >
        © 2025 <span style={{ color: "var(--foreground)", fontWeight: 600 }}>DevMak</span>. All rights reserved.
      </div>
    </footer>
  );
}
