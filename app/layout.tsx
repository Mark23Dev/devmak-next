import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevMak Portfolio",
  description: "DevMak's portfolio showcasing Go backends, scalable systems, and real-world projects.",
  keywords: ["DevMak", "Go", "Backend", "Scalable Systems", "Portfolio", "Projects", "Web Development"],
  authors: [{ name: "DevMak" }],
  creator: "DevMak",
  publisher: "DevMak",
  // Base URL of your site
  metadataBase: new URL("https://devmakspace.dev"),
  openGraph: {
    title: "DevMak Portfolio",
    description: "Explore DevMak's projects, case studies, and blog posts focused on scalable systems and Go backend development.",
    url: "https://devmakspace.dev",
    siteName: "DevMak Portfolio",
    type: "website",
    images: [
      {
        url: "https://devmakspace.dev.com/devmak-photo.png",
        width: 1200,
        height: 630,
        alt: "DevMak Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevMak Portfolio",
    description: "Explore DevMak's projects, case studies, and blogs on scalable systems and Go backends.",
    images: ["https://yourdomain.com/devmak-photo.png"],
    creator: "@devmak",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
