import { FadeIn } from "@/components/ui/fade-in";
import { homeContent } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Database, RefreshCw, Building, Headset } from "lucide-react";
import React from "react";

export function TruePartner() {
  const { eyebrow, paragraph, cta, cards } = homeContent.truePartner;
  const stats = (homeContent.truePartner as Record<string, unknown>).stats as Array<{value: string; label: string}> | undefined;

  const cardConfig = [
    {
      ...cards[0],
      bg: "bg-[#EAF3FF]",
      iconNode: (
        <div className="relative flex items-center justify-center">
          <Database className="w-6 h-6 text-[#1E90FF]" strokeWidth={1.8} />
          <svg className="w-3.5 h-3.5 text-[#1E90FF] absolute -bottom-1 -right-1 fill-current" viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
          </svg>
        </div>
      )
    },
    {
      ...cards[1],
      bg: "bg-[#EAFBF3]",
      iconNode: <RefreshCw className="w-6 h-6 text-[#1E90FF]" strokeWidth={2.2} />
    },
    {
      ...cards[2],
      bg: "bg-[#F3EBFD]",
      iconNode: <Building className="w-6 h-6 text-[#1E90FF]" strokeWidth={1.8} />
    },
    {
      ...cards[3],
      bg: "bg-[#EAF3FF]",
      iconNode: (
        <div className="relative flex items-center justify-center">
          <svg className="w-6 h-6 text-[#1E90FF] fill-current" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6a1.5 1.5 0 0 1 1.5 1.5c0 .83-.67 1.5-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5c0-.83.67-1.5 1.5-1.5zm0 10a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 3 0v3A1.5 1.5 0 0 1 12 17z" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section className="bg-gradient-to-r from-[#F4F9FF] via-[#F8FBFF] to-white py-8 lg:py-12 relative overflow-hidden">
      
      {/* Background blobs & patterns */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#F0F7FF] blur-3xl opacity-50" />
        
        {/* Soft curved blue diagonal wave on bottom right matching reference */}
        <div className="absolute -bottom-16 -right-16 w-[420px] h-[360px] rounded-tl-[200px] bg-gradient-to-tl from-[#D3E8FF]/80 via-[#E8F3FF]/50 to-transparent pointer-events-none" />
        
        {/* Dot pattern on top right (5x4) */}
        <div className="absolute top-6 right-10 grid grid-cols-5 gap-3 opacity-25 hidden lg:grid">
          {Array.from({length: 20}).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1E90FF]" />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Content Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <FadeIn direction="up" className="flex items-center gap-3 mb-3">
                <div className="h-[2px] w-8 bg-[#1E90FF]" />
                <span className="text-[12px] font-bold tracking-[0.16em] text-[#1E90FF] uppercase">
                  {eyebrow}
                </span>
              </FadeIn>
              
              {/* Heading */}
              <FadeIn direction="up" delay={0.1} className="text-[32px] sm:text-[38px] lg:text-[42px] font-heading font-extrabold text-[#111827] tracking-tight leading-[1.14] mb-4">
                <h2>
                  More Than Software.<br />
                  A True <span className="text-[#1E90FF]">HR Partner.</span>
                </h2>
              </FadeIn>
              
              {/* Paragraph */}
              <FadeIn direction="up" delay={0.2} className="text-[15px] text-gray-600 leading-relaxed mb-6 max-w-lg">
                <p>{paragraph}</p>
              </FadeIn>

              {/* CTA + Video Button */}
              <FadeIn direction="up" delay={0.3} className="flex flex-wrap items-center gap-5 mb-8">
                <Link 
                  href="/about"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "bg-[#1E90FF] hover:bg-[#187BCD] text-white rounded-full px-7 py-3.5 font-bold text-[14px] flex items-center gap-2 shadow-lg shadow-blue-500/20"
                  )}
                >
                  {cta} <ArrowRight className="w-4 h-4" />
                </Link>
                
                <a href="tel:+919019724365" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-[#EAF3FF] flex items-center justify-center group-hover:scale-105 transition-transform text-[#1E90FF] shadow-sm">
                    <Headset className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[13px] text-[#111827] group-hover:text-[#1E90FF] transition-colors leading-tight">
                      Talk to an Expert
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium leading-none">Free Consultation</span>
                  </div>
                </a>
              </FadeIn>
            </div>

            {/* Stats Row at the bottom */}
            {stats && (
              <FadeIn direction="up" delay={0.4} className="flex items-center pt-2">
                {stats.map((stat, idx) => (
                  <React.Fragment key={stat.label}>
                    <div className="flex flex-col">
                      <span className="text-[28px] sm:text-[32px] font-heading font-extrabold text-[#111827] leading-none mb-1">
                        {stat.value}
                      </span>
                      <span className="text-[11px] text-gray-500 font-medium">
                        {stat.label}
                      </span>
                    </div>
                    {idx !== stats.length - 1 && (
                      <div className="w-[1px] h-8 bg-gray-300 mx-5 sm:mx-6 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </FadeIn>
            )}
          </div>

          {/* Right Cards Grid Column + Calligraphy */}
          <div className="lg:col-span-7 flex items-center justify-between gap-4 lg:gap-6 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {cardConfig.map((card, idx) => (
                <FadeIn
                  key={card.title}
                  direction="up"
                  delay={idx * 0.08}
                  className="bg-white border border-blue-50/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-[22px] p-5 lg:p-6 flex items-start gap-3.5 hover:shadow-[0_8px_26px_rgba(30,144,255,0.08)] hover:-translate-y-0.5 transition-all group"
                >
                  <div className={`w-13 h-13 rounded-full ${card.bg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform p-3`}>
                    {card.iconNode}
                  </div>
                  <div className="flex-1 mt-0.5">
                    <h3 className="font-heading font-bold text-[15px] lg:text-[16px] text-[#111827] mb-1 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-[12px] lg:text-[12.5px] text-gray-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#F0F6FF] flex items-center justify-center shrink-0 self-center group-hover:bg-[#1E90FF] group-hover:text-white transition-colors text-[#1E90FF]">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Floating Calligraphy - inside flex flow to never clip */}
            <div className="hidden xl:flex flex-col items-start shrink-0 text-[#1E90FF] pointer-events-none select-none ml-3 font-[family-name:var(--font-playball)] -rotate-6">
              <span className="text-[25px] xl:text-[28px] leading-[1.2] whitespace-nowrap">
                People<br />
                Performance<br />
                Possibilities
              </span>
              <svg viewBox="0 0 120 12" fill="none" className="w-28 mt-1 text-[#1E90FF]/80">
                <path d="M2 9C35 2 85 2 118 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
