import Link from "next/link";
import Button from "@/components/Button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-base font-bold tracking-tight text-slate-900"
        >
          Mukesh Gupta
        </Link>
        <nav aria-label="Primary navigation" className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="/resume.pdf" external download variant="secondary">
            Resume
          </Button>
        </div>
      </div>
      <nav
        aria-label="Mobile navigation"
        className="border-t border-slate-200 px-4 py-3 md:hidden"
      >
        <ul className="flex items-center justify-between gap-3 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="transition-colors hover:text-slate-950"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
