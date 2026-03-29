import Link from "next/link";
import NavMobileMenu from "./NavMobileMenu";

const navLinks = [
  { href: "/simulators", label: "Simulators" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="border-b border-white/5">
      <div className="mx-auto max-w-content px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading font-semibold text-sm text-text hover:text-accent transition-colors"
        >
          Studio Seventeen
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-text-muted hover:text-text transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile nav */}
        <NavMobileMenu links={navLinks} />
      </div>
    </nav>
  );
}
