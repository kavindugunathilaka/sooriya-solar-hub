"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, UserRound, ShoppingCart, Truck, Phone } from "lucide-react";
import { categories } from "@/lib/data";

const groups = ["Solar", "Storage", "Accessories", "e-Mobility"] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
      {/* utility bar */}
      <div className="bg-forest-deep text-[13px] text-[#e9efe9]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <p className="flex items-center gap-2">
            <Truck size={15} aria-hidden="true" /> Island-wide delivery · next day in open provinces
          </p>
          <div className="hidden items-center gap-5 sm:flex">
            <a href="tel:+94000000000" className="flex items-center gap-1.5 hover:text-sun">
              <Phone size={14} aria-hidden="true" /> Trade line: 07X XXX XXXX
            </a>
            <span lang="si">සිංහල</span>
            <span>EN</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="Sooriya Solar Hub home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-sun text-forest-deep font-display font-extrabold">S</span>
          <span className="font-display text-lg font-bold leading-none">
            Sooriya<span className="text-sun-deep"> Solar Hub</span>
          </span>
        </Link>

        <form action="/shop/" className="relative hidden flex-1 md:block" role="search">
          <label htmlFor="q" className="sr-only">Search products</label>
          <input
            id="q"
            name="q"
            placeholder="Search panels, inverters, SKU…"
            className="w-full rounded-full border border-line bg-bg py-2.5 pl-11 pr-4 text-base placeholder:text-muted focus:border-forest focus:outline-none"
          />
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" aria-hidden="true" />
        </form>

        <nav className="ml-auto flex items-center gap-1" aria-label="Account">
          <Link href="/account/" className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium hover:bg-sunken sm:flex">
            <UserRound size={18} aria-hidden="true" /> Trade account
          </Link>
          <Link href="/shop/" className="relative grid h-11 w-11 place-items-center rounded-full hover:bg-sunken" aria-label="Cart (0 items)">
            <ShoppingCart size={20} aria-hidden="true" />
          </Link>
          <button
            className="grid h-11 w-11 place-items-center rounded-full hover:bg-sunken lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* desktop category nav */}
      <nav className="hidden border-t border-line lg:block" aria-label="Main">
        <ul className="mx-auto flex max-w-7xl items-center gap-1 px-4 text-[15px] font-medium">
          <li onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)} className="relative">
            <button
              className="rounded-md px-3 py-3 hover:text-forest"
              aria-expanded={mega}
              onClick={() => setMega((v) => !v)}
              onKeyDown={(e) => e.key === "Escape" && setMega(false)}
            >
              All products ▾
            </button>
            {mega && (
              <div className="absolute left-0 top-full grid w-[720px] grid-cols-4 gap-6 rounded-b-[var(--radius-card)] border border-line bg-surface p-6 shadow-xl">
                {groups.map((g) => (
                  <div key={g}>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">{g}</p>
                    <ul className="space-y-1.5">
                      {categories.filter((c) => c.group === g).map((c) => (
                        <li key={c.id}>
                          <Link href={`/shop/?c=${c.id}`} className="hover:text-forest hover:underline">{c.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>
          {[
            ["Solar Panels", "/shop/?c=panels"],
            ["Inverters", "/shop/?c=inverters"],
            ["Batteries", "/shop/?c=batteries"],
            ["Mounting", "/shop/?c=mounting"],
            ["Outlet", "/shop/?c=outlet"],
            ["Academy", "/academy/"],
            ["Calculators", "/#calculator"],
            ["Branches", "/#network"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="block rounded-md px-3 py-3 hover:text-forest">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <nav id="mobile-nav" className="border-t border-line bg-surface lg:hidden" aria-label="Mobile">
          <ul className="mx-auto grid max-w-7xl gap-1 px-4 py-3">
            {categories.map((c) => (
              <li key={c.id}>
                <Link onClick={() => setOpen(false)} href={`/shop/?c=${c.id}`} className="block rounded-lg px-3 py-3 hover:bg-sunken">
                  {c.name} <span lang="si" className="text-sm text-muted">· {c.si}</span>
                </Link>
              </li>
            ))}
            <li><Link onClick={() => setOpen(false)} href="/academy/" className="block rounded-lg px-3 py-3 hover:bg-sunken">Academy</Link></li>
            <li><Link onClick={() => setOpen(false)} href="/account/" className="block rounded-lg px-3 py-3 font-semibold text-forest hover:bg-sunken">Open a trade account</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
