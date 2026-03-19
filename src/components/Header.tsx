import { useState, useEffect } from "react";
import { Gem, ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#portfolio" },
  { label: "Clients", href: "#clients" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-background/80 backdrop-blur-2xl border-b border-white/[0.04] shadow-[0_4px_30px_-10px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
          }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group relative">
            <div className="absolute -inset-2 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            <div className="relative w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <Gem size={15} className="text-black" />
            </div>
            <span className="relative text-[15px] font-bold tracking-tight text-foreground">
              Elez Graph<span className="text-white/30">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium text-muted-foreground px-4 py-2 rounded-full transition-all duration-300 hover:text-foreground hover:bg-white/[0.04]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-semibold bg-white text-black hover:bg-white/90 hover:shadow-[0_0_30px_-8px_rgba(255,255,255,0.3)] transition-all duration-300 group"
            >
              Let's Talk
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-300" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-lg glass flex items-center justify-center text-foreground"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-bold text-foreground hover:text-white/60 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold bg-white text-black"
          >
            Let's Talk
            <ArrowRight size={16} />
          </a>
        </div>
      )}
    </>
  );
}
