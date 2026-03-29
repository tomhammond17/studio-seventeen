import Link from "next/link";

const navLinks = [
  { href: "/projects", label: "tools" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

export default function Nav() {
  return (
    <nav className="border-b border-white/10">
      <div className="mx-auto max-w-content px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-mono font-bold text-text">
          S17
        </Link>
        <ul className="flex gap-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="font-mono text-sm text-text opacity-60 hover:opacity-100 transition-opacity"
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
