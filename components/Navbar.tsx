import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-20 flex justify-around items-center px-8 py-4 shadow-lg"
      style={{ 
        backgroundColor: "rgba(15,15,15,0.8)", // dark background
        backdropFilter: "blur(10px)" // blur effect
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/devmaklogo.png"
          alt="DevMak Logo"
          width={48}
          height={48}
          className="hover:opacity-80 transition-opacity duration-300"
        />
        <span
          style={{ color: "#00F0FF" }} // cyan from your palette
          className="text-2xl font-extrabold tracking-wide hover:opacity-80 transition-opacity duration-300"
        >
          DevMak
        </span>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 font-medium">
        <li>
          <Link href="/" style={{ color: "#00F0FF" }} className="hover:text-[#A855F7] transition-colors duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" style={{ color: "#00F0FF" }} className="hover:text-[#F472B6] transition-colors duration-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" style={{ color: "#00F0FF" }} className="hover:text-[#A855F7] transition-colors duration-300">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#blog" style={{ color: "#00F0FF" }} className="hover:text-[#F472B6] transition-colors duration-300">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" style={{ color: "#00F0FF" }} className="hover:text-[#A855F7] transition-colors duration-300">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex flex-col space-y-1 cursor-pointer">
        <span style={{ backgroundColor: "#00F0FF" }} className="w-6 h-0.5"></span>
        <span style={{ backgroundColor: "#00F0FF" }} className="w-6 h-0.5"></span>
        <span style={{ backgroundColor: "#00F0FF" }} className="w-6 h-0.5"></span>
      </div>
    </nav>
  );
}
