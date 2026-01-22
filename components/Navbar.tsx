"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "CaseStudy", href: "/casestudy" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50"
      style={{
        backgroundColor: "rgba(15,15,15,0.8)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/devmaklogo.png"
            alt="DevMak Logo"
            width={42}
            height={42}
            className="hover:opacity-80 transition"
          />
          <span className="text-2xl font-extrabold tracking-wide text-[var(--color-primary)]">
            DevMak
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[var(--color-primary)]"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--color-border)]">
          <ul className="flex flex-col px-6 py-6 space-y-6 bg-[var(--color-background)/90]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-medium text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
