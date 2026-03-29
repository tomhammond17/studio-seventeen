"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface NavLink {
  href: string;
  label: string;
}

export default function NavMobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <>
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 text-text"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      >
        <span
          className={`block w-5 h-px bg-current transition-transform origin-center ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block w-5 h-px bg-current transition-opacity ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-5 h-px bg-current transition-transform origin-center ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>
      {open && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-full z-50 border-t border-white/10 bg-bg/95 backdrop-blur-2xl md:hidden"
        >
          <ul className="flex flex-col gap-2 px-5 py-5">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block rounded-2xl border border-white/0 px-4 py-3 font-heading text-base text-text-soft transition-colors hover:border-white/10 hover:bg-white/[0.03] hover:text-text"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
