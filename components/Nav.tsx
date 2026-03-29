import Link from "next/link";
import NavMobileMenu from "./NavMobileMenu";

const navLinks = [
  { href: "/projects", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-20 border-b border-white/5 bg-bg/85 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-text transition-colors hover:text-accent"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] font-heading text-xs font-semibold uppercase tracking-[0.24em]">
            S17
          </span>
          <span className="flex flex-col">
            <span className="font-heading text-[0.72rem] font-semibold uppercase tracking-[0.28em]">
              Studio Seventeen
            </span>
            <span className="text-[0.72rem] text-text-muted/90">
              Industrial software
            </span>
          </span>
        </Link>

        <ul className="hidden gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-text-muted transition-colors hover:text-text"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <NavMobileMenu links={navLinks} />
      </div>
    </nav>
  );
}
