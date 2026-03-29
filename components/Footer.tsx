import Link from "next/link";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-auto">
      <div className="mx-auto max-w-content px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="font-heading font-semibold text-text hover:text-accent transition-colors"
        >
          Studio Seventeen
        </Link>
        <nav>
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
        </nav>
        <a
          href="mailto:hello@studioseventeen.com"
          className="text-text-muted hover:text-accent text-sm transition-colors"
        >
          hello@studioseventeen.com
        </a>
      </div>
    </footer>
  );
}
