import Link from "next/link";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="border-b border-white/10">
      <div className="mx-auto max-w-content px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading font-semibold text-lg text-text hover:text-accent transition-colors"
        >
          Studio Seventeen
        </Link>
        <ul className="flex gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-text-muted hover:text-text text-sm transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
