"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, LazyMotion, domAnimation, m } from "motion/react";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import type { NavGroup } from "@/content/navigation";

type Props = {
  groups: NavGroup[];
  incident: { display: string; tel: string };
};

export function Header({ groups, incident }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const headerRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close every menu after navigation.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the desktop menu on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpen(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const id = open;
        setOpen(null);
        document.getElementById(`nav-trigger-${id}`)?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Lock page scroll behind the mobile menu.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    if (mobileOpen) document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const clearTimer = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  };
  const hoverOpen = (id: string) => {
    clearTimer();
    hoverTimer.current = setTimeout(() => setOpen(id), 90);
  };
  const hoverClose = () => {
    clearTimer();
    hoverTimer.current = setTimeout(() => setOpen(null), 180);
  };

  const active = groups.find((g) => g.id === open);

  return (
    <LazyMotion features={domAnimation} strict>
      <header
        ref={headerRef}
        onMouseLeave={hoverClose}
        onMouseEnter={clearTimer}
        className={`sticky top-0 z-50 border-b bg-white/[0.97] backdrop-blur-md transition-shadow duration-300 ${
          scrolled || open ? "border-line shadow-[0_6px_24px_-12px_rgba(10,21,40,0.25)]" : "border-transparent"
        }`}
      >
        <div className="container-page flex h-[72px] items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {groups.map((g) => {
                const isOpen = open === g.id;
                const isCurrent = pathname.startsWith(g.href);
                return (
                  <li key={g.id}>
                    <button
                      id={`nav-trigger-${g.id}`}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`nav-panel-${g.id}`}
                      onClick={() => setOpen(isOpen ? null : g.id)}
                      onMouseEnter={() => hoverOpen(g.id)}
                      className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-[0.95rem] font-medium transition-colors hover:text-navy-900 ${
                        isOpen || isCurrent ? "text-navy-900" : "text-body"
                      }`}
                    >
                      {g.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/about"
                  onMouseEnter={hoverClose}
                  className={`rounded-md px-3 py-2 text-[0.95rem] font-medium transition-colors hover:text-navy-900 ${
                    pathname === "/about" ? "text-navy-900" : "text-body"
                  }`}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-navy-900 px-4 py-2.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-navy-700"
            >
              Talk to an expert
            </Link>
          </div>

          <button
            type="button"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-navy-900 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop mega menu */}
        <AnimatePresence>
          {active && (
            <m.div
              key={active.id}
              id={`nav-panel-${active.id}`}
              role="region"
              aria-label={`${active.label} menu`}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full hidden border-b border-line bg-white shadow-[0_24px_48px_-24px_rgba(10,21,40,0.35)] lg:block"
            >
              <div className="container-page grid grid-cols-[1fr_17rem] gap-10 py-8">
                <ul className="grid grid-cols-3 gap-x-8 gap-y-1">
                  {active.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={() => setOpen(null)}
                        className="group block rounded-md p-3 transition-colors hover:bg-mist"
                      >
                        <span className="flex items-center gap-1.5 font-semibold text-ink">
                          {l.label}
                          <ArrowRight
                            aria-hidden="true"
                            className="h-3.5 w-3.5 -translate-x-1 text-flare opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                          />
                        </span>
                        {l.description && (
                          <span className="mt-1 line-clamp-2 block text-sm leading-snug text-muted">
                            {l.description}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col justify-between rounded-lg bg-navy-950 p-6 text-silver-200">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-silver-300">{active.label}</p>
                    <Link
                      href={active.href}
                      onClick={() => setOpen(null)}
                      className="mt-2 inline-flex items-center gap-1.5 font-serif text-xl text-white hover:text-silver-100"
                    >
                      View all {active.label.toLowerCase()}
                      <ArrowRight aria-hidden="true" className="h-4 w-4 text-flare" />
                    </Link>
                  </div>
                  <a
                    href={`tel:${incident.tel}`}
                    className="mt-6 block rounded-md border border-white/15 p-3 text-sm transition-colors hover:border-white/40"
                  >
                    <span className="flex items-center gap-2 font-semibold text-white">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flare opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-flare" />
                      </span>
                      Active incident?
                    </span>
                    <span className="mt-0.5 block text-silver-300">Call {incident.display}</span>
                  </a>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </header>

      {/*
        Mobile menu. Rendered outside <header> on purpose: the header's backdrop blur
        creates a containing block, which would trap a fixed-position panel inside it.
      */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-white lg:hidden"
          >
            <div className="container-page flex h-[72px] items-center justify-between border-b border-line">
              <Logo />
              <button
                type="button"
                autoFocus
                className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-navy-900"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav aria-label="Mobile" className="container-page py-4">
              <ul className="divide-y divide-line">
                {groups.map((g) => (
                  <li key={g.id}>
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                        {g.label}
                        <ChevronDown
                          aria-hidden="true"
                          className="h-5 w-5 text-muted transition-transform group-open:rotate-180"
                        />
                      </summary>
                      <ul className="pb-4">
                        <li>
                          <Link href={g.href} className="block py-2 font-medium text-flare-700">
                            All {g.label.toLowerCase()}
                          </Link>
                        </li>
                        {g.links.map((l) => (
                          <li key={l.href}>
                            <Link href={l.href} className="block py-2 text-body">
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ))}
                {[
                  { label: "About", href: "/about" },
                  { label: "Engineering & R&D", href: "/engineering" },
                  { label: "Contact", href: "/contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block py-4 text-lg font-semibold text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid gap-3 pb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-navy-900 px-5 py-3.5 font-semibold text-white"
                >
                  Talk to an expert
                </Link>
                <a
                  href={`tel:${incident.tel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-navy-900/20 px-5 py-3.5 font-semibold text-navy-900"
                >
                  <Phone aria-hidden="true" className="h-4 w-4 text-flare-700" />
                  Incident line {incident.display}
                </a>
              </div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
