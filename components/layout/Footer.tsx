import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  const footerLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-dark text-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-xl font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-primary">
            A
          </span>
          Aman.
        </div>
        <p className="text-sm text-white/60">
          © {year} Aman Kushwaha. All rights reserved.
        </p>
        <nav className="flex items-center gap-6">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-white/80 transition-colors hover:text-secondary"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
