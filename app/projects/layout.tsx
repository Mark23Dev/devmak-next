export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-foreground)] min-h-screen flex flex-col">

      {/* Page Content */}
      <main className="flex-1">{children}</main>

    </div>
  );
}
