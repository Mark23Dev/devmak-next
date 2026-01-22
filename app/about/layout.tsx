import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-foreground)] min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
