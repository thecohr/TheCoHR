import { FadeIn } from "@/components/ui/fade-in";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ProtectedImage } from "@/components/ui/protected-image";
import { homeContent } from "@/lib/content";
import { cn } from "@/lib/utils";
import { BookCallButton } from "@/components/ui/book-call-button";
import { ArrowRight, Users, BarChart2, Lightbulb } from "lucide-react";
import React from "react";

const iconsMap: Record<string, React.ReactNode> = {
  users: <Users className="w-4 h-4 text-[#1E90FF]" />,
  trendingUp: <BarChart2 className="w-4 h-4 text-[#1E90FF]" />,
  lightbulb: <Lightbulb className="w-4 h-4 text-[#1E90FF]" />
};

export function HomeCta() {
  const { eyebrow, body, ctas, floatingList } = homeContent.finalCTA;

  return (
    <section className="bg-white pt-2 pb-8 lg:pt-4 lg:pb-12 px-4 sm:px-6 lg:px-12 relative">
      <div className="mx-auto max-w-[1440px] relative z-10 rounded-[28px] lg:rounded-[36px] overflow-hidden bg-gradient-to-r from-[#F0F7FF] via-[#F4F9FF] to-[#E6F1FF] border border-blue-100/60 shadow-sm">
        
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-8 left-[38%] grid grid-cols-5 gap-3 opacity-20 hidden lg:grid">
            {Array.from({length: 20}).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1E90FF]" />
            ))}
          </div>
          {/* Top-left subtle swoosh */}
          <div className="absolute top-0 left-0 w-full h-12 bg-white/40 blur-md rounded-full transform -translate-y-1/2 scale-150" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch relative z-10">
          
          {/* Left Content */}
          <div className="lg:col-span-5 flex flex-col justify-center py-10 lg:py-14 pl-6 lg:pl-12 pr-6 z-20">
            {/* Eyebrow */}
            <FadeIn direction="up" className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-[#1E90FF]" />
              <span className="text-[12px] font-bold tracking-[0.16em] text-[#1E90FF] uppercase">
                {eyebrow}
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1} className="text-[30px] sm:text-[36px] lg:text-[40px] font-heading font-extrabold text-[#111827] tracking-tight leading-[1.15] mb-4">
              <h2>
                Let&apos;s Build a Better <span className="text-[#1E90FF]">Workplace Together</span>
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} className="text-[15px] text-gray-600 leading-relaxed mb-4 max-w-md">
              <p>{body}</p>
            </FadeIn>

            {/* Calligraphy Tagline */}
            <FadeIn direction="up" delay={0.25} className="mb-5">
              <div className="inline-block text-[#1E90FF] font-[family-name:var(--font-playball)] -rotate-2">
                <span className="text-[20px] sm:text-[23px] leading-tight block font-normal">
                  Better People, Brighter Possibilities
                </span>
                <svg className="w-48 h-2.5 text-[#22C55E] mt-0.5" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M2 9 Q50 1 98 5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn direction="up" delay={0.3} className="flex flex-wrap items-center gap-3">
              <Link 
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-[#1E90FF] hover:bg-[#187BCD] text-white rounded-xl px-6 py-3.5 font-bold text-[14px] flex items-center gap-2 shadow-lg shadow-blue-500/20"
                )}
              >
                {ctas.primary} <ArrowRight className="w-4 h-4" />
              </Link>
              <BookCallButton variant="white" size="md" className="py-3.5 px-6 text-[14px]" />
              <a
                href="tel:+919019724365"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border border-slate-300 text-slate-700 bg-white/80 hover:bg-white hover:text-[#1E90FF] rounded-xl px-5 py-3.5 font-bold text-[14px] flex items-center transition-colors"
                )}
              >
                {ctas.secondary}
              </a>
            </FadeIn>
          </div>

          {/* Right Visual Area: Photo + Floating Card */}
          <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[380px] flex items-center">
            
            {/* The Full Photo */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <ProtectedImage
                src="/images/cta-businessman.jpg"
                alt="Professional working at desk"
                fill
                loading="lazy"
                className="object-cover object-[85%_center]"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              
              {/* Soft left-edge blend into banner background */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F0F7FF] via-[#F0F7FF]/80 to-transparent z-10 hidden lg:block" />

              {/* Far-right soft light-blue swoosh matching reference */}
              <div className="absolute top-0 right-0 w-[150px] h-full bg-gradient-to-l from-[#BCE0FE]/70 via-[#DCF0FE]/30 to-transparent z-20 pointer-events-none" />
            </div>

            {/* Floating List Card: Hidden on mobile to keep photo unobstructed, shown on desktop */}
            <FadeIn direction="up" delay={0.4} className="hidden lg:flex relative z-30 lg:-ml-16 xl:-ml-24 lg:my-0 bg-white rounded-[22px] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.08)] border border-blue-50/90 flex-col gap-4 w-[240px] shrink-0">
              {floatingList?.map((item) => (
                <div key={item.label} className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#EBF4FF] flex items-center justify-center shrink-0">
                    {iconsMap[item.icon]}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[14px] text-[#111827] leading-tight">
                      {item.label}
                    </span>
                    <span className="text-[11.5px] text-gray-500">
                      {(item as Record<string, string>).description || ""}
                    </span>
                  </div>
                </div>
              ))}
            </FadeIn>

            {/* Mobile Bottom Feature Bar (positioned at bottom away from face) */}
            <div className="absolute bottom-2.5 left-2 right-2 sm:left-4 sm:right-4 z-30 lg:hidden bg-white/95 backdrop-blur-md rounded-2xl p-1.5 sm:p-2.5 shadow-lg border border-blue-100 flex items-center justify-around overflow-hidden">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#EBF4FF] flex items-center justify-center shrink-0">
                  <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1E90FF]" />
                </div>
                <span className="text-[9.5px] sm:text-[11px] font-bold text-[#111827] whitespace-nowrap">People</span>
              </div>
              <div className="h-3.5 w-px bg-slate-200/80 shrink-0" />
              <div className="flex items-center gap-1 sm:gap-1.5">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#EBF4FF] flex items-center justify-center shrink-0">
                  <BarChart2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1E90FF]" />
                </div>
                <span className="text-[9.5px] sm:text-[11px] font-bold text-[#111827] whitespace-nowrap">Performance</span>
              </div>
              <div className="h-3.5 w-px bg-slate-200/80 shrink-0" />
              <div className="flex items-center gap-1 sm:gap-1.5">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#EBF4FF] flex items-center justify-center shrink-0">
                  <Lightbulb className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1E90FF]" />
                </div>
                <span className="text-[9.5px] sm:text-[11px] font-bold text-[#111827] whitespace-nowrap">Possibilities</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
