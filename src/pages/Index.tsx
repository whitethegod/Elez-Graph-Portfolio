import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientStrip from "@/components/ClientStrip";
import PortfolioGallery from "@/components/PortfolioGallery";
import DiscordButton from "@/components/WhatsAppButton";
import { useAntiDevTools } from "@/hooks/useAntiDevTools";
import { Gem, Heart, ArrowRight, PenTool, Layers, Wand, CircleDot, Mail } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Thumbnail Design",
    description: "Eye-catching thumbnails that boost your click-through rate and stand out in the feed.",
  },
  {
    icon: Layers,
    title: "Brand Identity",
    description: "Complete visual identity systems that make your brand memorable and professional.",
  },
  {
    icon: Wand,
    title: "Social Media",
    description: "Scroll-stopping graphics optimized for every platform and audience.",
  },
];

const Index = () => {
  useAntiDevTools();

  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <HeroSection />
      <ClientStrip />
      <PortfolioGallery />

      {/* ─── Services Section ─── */}
      <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-6">
              <CircleDot size={11} className="text-white/40" />
              <span className="text-[11px] font-semibold text-white/40 tracking-wide uppercase">What I Offer</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] mb-5">
              <span className="gradient-text">Services</span>
            </h2>
            <p className="text-white/30 max-w-lg mx-auto text-sm sm:text-[15px] leading-relaxed">
              Premium design services tailored to elevate your visual presence across all platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group glass-card rounded-2xl p-6 sm:p-8 hover-lift hover:border-white/[0.12] transition-all duration-500 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 group-hover:shadow-[0_0_24px_-6px_rgba(255,255,255,0.2)] transition-shadow duration-500">
                  <Icon size={20} className="text-black" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-white/30 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA / Contact Section ─── */}
      <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 dotted-grid opacity-15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.01] blur-[180px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-6">
              <Mail size={11} className="text-white/40" />
              <span className="text-[11px] font-semibold text-white/40 tracking-wide uppercase">Get in Touch</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] mb-5">
              <span className="text-foreground">Let's </span>
              <span className="gradient-text">Work Together</span>
            </h2>
            <p className="text-white/30 text-sm sm:text-[15px] leading-relaxed mb-10 max-w-md mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something extraordinary together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://discord.gg/fFgswkxk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold bg-white text-black hover:bg-white/90 hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.25)] transition-all duration-400 group"
              >
                Start a Conversation
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
              <a
                href="mailto:elez.graph@outlook.fr"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-foreground glass hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
              >
                <Mail size={14} className="text-white/40" />
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <DiscordButton />

      {/* ─── Footer ─── */}
      <footer className="border-t border-white/[0.04] py-12 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
                <Gem size={12} className="text-black" />
              </div>
              <span className="text-sm font-bold text-foreground">
                Elez Graph<span className="text-white/30">.</span>
              </span>
            </a>

            <nav className="flex items-center gap-6 text-xs text-white/30">
              <a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a>
              <a href="#services" className="hover:text-foreground transition-colors">Services</a>
              <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            </nav>

            <p className="flex items-center gap-1.5 text-xs text-white/25">
              © {new Date().getFullYear()} Elez Graph — Made with WhiteCode
              <Heart size={11} className="text-white/40 fill-white/40" />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
