import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Projects" },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 mx-auto max-w-7xl px-4">
      <div className="mx-auto flex h-16 w-full items-center justify-between rounded-full bg-primary px-8 shadow-medium backdrop-blur-sm transition-colors duration-300 dark:bg-surface">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-white transition-opacity hover:opacity-80"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-primary dark:text-surface">
            A
          </span>
          Aman
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-primary transition hover:bg-white/90 dark:bg-secondary dark:text-surface"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
}
