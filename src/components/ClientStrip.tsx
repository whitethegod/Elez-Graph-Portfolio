import { UsersRound, Crown } from "lucide-react";

const clients = [
  { name: "Gabits", followers: "+18,6K", img: "https://yt3.ggpht.com/jLRax7uDERj3YSRVOHLPVg5R4saccV5gKXE7iMSNlGeGAks-AQXoSsL9loHOCmDdJT7AN9gjdA=s176-c-k-c0x00ffffff-no-rj-mo" },
  { name: "Zsm", followers: "+1K", img: "https://p16-common-sign.tiktokcdn-eu.com/tos-no1a-avt-0068c001-no/4e19d1bb171ac1cfa5d98367c6edd8b7~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=10399&refresh_token=a966fe39&x-expires=1773950400&x-signature=gz2Hzfqkyr6EtRVkbzgfRN%2F3hZg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast2b" },
  { name: "WhiteCode", followers: "+20K", img: "https://avatars.githubusercontent.com/u/128601920?v=4" },
  { name: "Jimseuh", followers: "+38K", img: "https://imgs.search.brave.com/qp94UfimEpGM0E0ndrIaBAHVcoz1-7JqbUmK9MdjExE/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly95dDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tLzgt/aC1KaEd0TndyUGdV/aU9nN0Vtampqb2hC/UUNXTng0QXM5eXBM/SEdPVk5pUElVcDNR/MUtvckpwVTVoNUJI/c3ZocDdNczZIcTBR/PXM5MDAtYy1rLWMw/eDAwZmZmZmZmLW5v/LXJq" },
  { name: "Sherine", followers: "+108K", img: "https://p16-common-sign.tiktokcdn-eu.com/tos-no1a-avt-0068c001-no/fffbbae5ca0272e4a78fe52202ad9d0c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=10399&refresh_token=ae15e569&x-expires=1773954000&x-signature=aA7%2BZQu6mnaAk14aQt5QNbWIsaU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast2b" },
];

export default function ClientStrip() {
  const doubled = [...clients, ...clients];

  return (
    <section id="clients" className="py-16 overflow-hidden relative">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="flex items-center justify-center gap-2.5 mb-12">
        <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
          <UsersRound size={13} className="text-black" />
        </div>
        <p className="text-sm font-semibold text-foreground tracking-wide">
          Trusted Collaborations
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-left w-max gap-8">
          {doubled.map((c, i) => (
            <div key={`${c.name}-${i}`} className="flex flex-col items-center gap-3 min-w-[110px] group cursor-default">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />
                <div className="relative w-[68px] h-[68px] rounded-full overflow-hidden border-2 border-white/[0.06] bg-card group-hover:border-white/20 transition-all duration-500">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                {parseInt(c.followers.replace(/[^0-9]/g, '')) > 1000 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <Crown size={9} className="text-white/70" />
                  </div>
                )}
              </div>
              <div className="text-center">
                <span className="text-xs font-semibold text-foreground whitespace-nowrap block">{c.name}</span>
                <span className="text-[10px] text-white/25 font-medium">{c.followers}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
