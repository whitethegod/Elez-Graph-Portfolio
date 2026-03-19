import { useState, useEffect, useCallback } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Gem, MoveUpRight, Scan, X, ChevronLeft, ChevronRight, Figma, Image, RectangleHorizontal, Sparkles } from "lucide-react";

const logos = [
  "https://cdn.myportfolio.com/9c243180-54dd-4fb6-a144-3c2ed71cda49/a3afb81f-cdf4-40f5-b75a-238fcf6d1eaf_rw_600.jpg?h=e58a16d7216252b738478011a46fabb4",
  "https://cdn.myportfolio.com/9c243180-54dd-4fb6-a144-3c2ed71cda49/1a843d98-a32a-4445-8e55-c05caee3c4c3_rw_600.png?h=a1e6c111fc6d73214cab7bce6b7dc895",
];

const posters = [
  "https://media.discordapp.net/attachments/1482811165070590066/1483577111615766548/39364bbf-de8a-40eb-99e2-32f8304fe0ff.jpg?ex=69bb185a&is=69b9c6da&hm=3baa440a2074d36fc20330f72f361934931133ba503ce2f715dd33825936f68b&=&format=webp&width=570&height=760",
];

const banners = [
];

const thumbnails = [
  "https://cdn.myportfolio.com/9c243180-54dd-4fb6-a144-3c2ed71cda49/421cd4f6-70e3-4e74-902e-a0e8ff9f8114_rw_600.jpg?h=e004781ae4f423453a1842940ddc9cc3",
  "https://cdn.myportfolio.com/9c243180-54dd-4fb6-a144-3c2ed71cda49/dc619fb0-9502-4e36-841d-f367408aa67c_rw_600.jpg?h=6479f4546fec3f378b2df9da34cce707",
  "https://cdn.myportfolio.com/9c243180-54dd-4fb6-a144-3c2ed71cda49/6b86d4e1-a954-405d-a0aa-bb5ef0f06b78_rw_600.jpg?h=86ae47fc7229084f5af51465420330b7",
  "https://cdn.myportfolio.com/9c243180-54dd-4fb6-a144-3c2ed71cda49/a8fa3bde-7901-4329-a0c2-441f9c7e44c7_rw_600.jpg?h=8806d3e61497631c37256f69721dbd8d",
  "https://cdn.myportfolio.com/9c243180-54dd-4fb6-a144-3c2ed71cda49/41f3f1c9-fa7e-4c61-b873-8aebbfb0cac4_rw_600.jpg?h=a80a098e5f161f275c7102df71abe385",
];

const categories = {
  Logo: { images: logos, icon: Figma },
  Poster: { images: posters, icon: Image },
  Banner: { images: banners, icon: RectangleHorizontal },
  Thumbnail: { images: thumbnails, icon: Sparkles },
} as const;

type CategoryKey = keyof typeof categories;
const tabKeys = Object.keys(categories) as CategoryKey[];

export default function PortfolioGallery() {
  const [activeTab, setActiveTab] = useState<CategoryKey>("Logo");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useScrollReveal();
  const images = categories[activeTab].images;

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const goNext = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % images.length);
  }, [lightbox, images.length]);

  const goPrev = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + images.length) % images.length);
  }, [lightbox, images.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox, goNext, goPrev]);

  return (
    <>
      <section id="portfolio" className="py-24 lg:py-32 relative" ref={ref}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section header */}
          <div className="text-center mb-14 fade-in-section">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-6">
              <Gem size={11} className="text-white/50" />
              <span className="text-[11px] font-semibold text-white/40 tracking-wide uppercase">Selected Works</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] mb-5">
              <span className="gradient-text">Works</span>
            </h2>
            <p className="text-white/30 max-w-lg mx-auto text-sm sm:text-[15px] leading-relaxed">
              Whether you're a content creator, brand or agency — I design visuals
              that captivate and convert.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 fade-in-section">
            {tabKeys.map((key) => {
              const Icon = categories[key].icon;
              const count = categories[key].images.length;
              return (
                <button
                  key={key}
                  onClick={() => { setActiveTab(key); setLightbox(null); }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-400 ${activeTab === key
                    ? "bg-white text-black shadow-[0_0_24px_-6px_rgba(255,255,255,0.2)]"
                    : "text-muted-foreground glass hover:text-foreground hover:border-white/[0.10]"
                    }`}
                >
                  <Icon size={14} />
                  {key}
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${activeTab === key ? "bg-black/15" : "bg-white/[0.06]"
                    }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 fade-in-section">
            {images.map((src, i) => (
              <div
                key={`${activeTab}-${i}`}
                onClick={() => openLightbox(i)}
                className="group relative aspect-video rounded-xl overflow-hidden border border-white/[0.04] bg-card cursor-pointer hover-lift"
              >
                <img
                  src={src}
                  alt={`${activeTab} ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-end pb-4">
                  <div className="flex items-center gap-1.5 glass rounded-full px-3 py-1.5 text-white text-[11px] font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    <Scan size={11} />
                    View Project
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-white/10 transition-colors duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* View all link */}
          <div className="flex justify-center mt-12 fade-in-section">
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground glass rounded-full px-6 py-2.5 hover:border-white/[0.12] transition-all duration-300 group"
            >
              View All Projects
              <MoveUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Fullscreen Lightbox ─── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 z-10"
          >
            <X size={20} className="text-white" />
          </button>

          <div className="absolute top-6 left-6 text-sm font-medium text-white/40 z-10">
            {lightbox + 1} / {images.length}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 z-10"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          <div
            className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightbox]}
              alt={`${activeTab} ${lightbox + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 z-10"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>
      )}
    </>
  );
}
