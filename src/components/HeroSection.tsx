import { useEffect, useState } from "react";
import { Crosshair, PenTool, Figma, ArrowDown, Star, MousePointerClick } from "lucide-react";

const roles = ["Graphic Designer", "Thumbnail Artist", "Visual Creator", "Brand Designer"];

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeRole, setFadeRole] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeRole(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFadeRole(true);
      }, 350);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 dotted-grid opacity-20" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.02] blur-[180px] pointer-events-none animate-pulse-glow" />

      <div className={`relative z-10 flex flex-col items-center max-w-3xl px-6 transition-all duration-1000 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

        {/* Avatar with gradient ring */}
        <div className="relative mb-8 group">
          {/* Border glow */}
          <div className="absolute -inset-[2px] rounded-[20px] bg-gradient-to-br from-white/30 via-white/10 to-white/30 opacity-50 group-hover:opacity-80 blur-[1px] transition-all duration-700" />
          <div className="absolute -inset-[2px] rounded-[20px] bg-gradient-to-br from-white/20 via-transparent to-white/20 opacity-40 group-hover:opacity-60 transition-all duration-700" />

          <div className="relative w-36 h-44 sm:w-44 sm:h-56 rounded-2xl overflow-hidden bg-card">
            <img
              src="https://cdn.discordapp.com/avatars/1375709569329664091/f56003dd337e248ad3494f0142d363eb.png?size=512"
              alt="Elez Graph"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Status badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 glass-card rounded-full px-3.5 py-1.5 whitespace-nowrap">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[10px] font-semibold text-emerald-400 tracking-wide uppercase">Available</span>
          </div>
        </div>

        {/* Ratings badge */}
        <div className={`flex items-center gap-3 mb-6 glass-card rounded-full px-5 py-2 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex -space-x-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={11} className="text-white fill-white" />
            ))}
          </div>
          <div className="w-px h-3.5 bg-white/10" />
          <span className="text-[11px] font-medium text-muted-foreground">
            Trusted by <span className="text-foreground font-semibold">50+</span> creators
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-center mb-4">
          <span className="block text-6xl sm:text-7xl md:text-8xl font-black tracking-[-0.04em] leading-[0.85] gradient-text-shine">
            Elez Graph
          </span>
          <span className="block text-base sm:text-lg md:text-xl font-medium tracking-[0.25em] uppercase text-white/30 mt-3">
            Design Studio
          </span>
        </h1>

        {/* Animated role */}
        <div className="h-8 flex items-center justify-center mb-8">
          <div className={`flex items-center gap-2 glass rounded-full px-5 py-2 transition-all duration-350 ${fadeRole ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
            <Crosshair size={11} className="text-white/40" />
            <span className="text-xs font-medium text-white/50">{roles[roleIndex]}</span>
          </div>
        </div>

        {/* Subtitle */}
        <p className={`text-center text-sm sm:text-[15px] text-white/35 leading-relaxed max-w-md mb-10 transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Crafting stunning visuals that captivate audiences and elevate your brand to the next level.
        </p>

        {/* CTA buttons */}
        <div className={`flex flex-col sm:flex-row items-center gap-3 transition-all duration-700 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <a
            href="#portfolio"
            className="flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold bg-white text-black hover:bg-white/90 hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.25)] transition-all duration-400 group"
          >
            <MousePointerClick size={15} />
            View My Work
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium text-foreground glass hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats row */}
        <div className={`flex items-center gap-8 sm:gap-14 mt-16 transition-all duration-700 delay-[900ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {[
            { value: "50+", label: "Happy Clients" },
            { value: "200+", label: "Projects Done" },
            { value: "3+", label: "Years Exp." },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-xl sm:text-2xl font-black text-foreground tracking-tight">{value}</div>
              <div className="text-[10px] sm:text-[11px] font-medium text-white/25 mt-1 tracking-wide uppercase">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute bottom-24 right-[12%] animate-float" style={{ animationDelay: '0s' }}>
        <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
          <PenTool size={15} className="text-white/20" />
        </div>
      </div>
      <div className="absolute top-[25%] left-[8%] animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
          <Figma size={15} className="text-white/20" />
        </div>
      </div>
      <div className="absolute top-[40%] right-[6%] animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-8 h-8 rounded-lg glass flex items-center justify-center">
          <Crosshair size={12} className="text-white/15" />
        </div>
      </div>
    </section>
  );
}
