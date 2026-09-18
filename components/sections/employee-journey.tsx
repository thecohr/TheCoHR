import { FadeIn } from "@/components/ui/fade-in";
import { homeContent } from "@/lib/content";
import { 
  Users, UserPlus, UserCheck, CalendarCheck, CalendarDays, 
  CreditCard, TrendingUp, GraduationCap, Heart, 
  UserMinus, Rocket, Settings
} from "lucide-react";
import React from "react";

const stageIcons: Record<string, React.ReactNode> = {
  attract: <Users className="w-5 h-5 text-[#1E90FF]" />,
  hire: <UserPlus className="w-5 h-5 text-[#1E90FF]" />,
  onboard: <UserCheck className="w-5 h-5 text-[#1E90FF]" />,
  attendance: <CalendarCheck className="w-5 h-5 text-[#1E90FF]" />,
  leave: <CalendarDays className="w-5 h-5 text-[#1E90FF]" />,
  payroll: <CreditCard className="w-5 h-5 text-[#1E90FF]" />,
  performance: <TrendingUp className="w-5 h-5 text-[#1E90FF]" />,
  learning: <GraduationCap className="w-5 h-5 text-[#1E90FF]" />,
  leverage: <Settings className="w-5 h-5 text-[#1E90FF]" />,
  engagement: <Heart className="w-5 h-5 text-[#1E90FF]" />,
  offboarding: <UserMinus className="w-5 h-5 text-[#1E90FF]" />,
  growth: <Rocket className="w-5 h-5 text-[#1E90FF]" />
};

function StageCard({ stage }: { stage: { name: string; description: string; icon: string } }) {
  return (
    <div className="flex flex-col items-center shrink-0 w-[110px] text-center group">
      {/* Icon Card Box */}
      <div className="w-12 h-12 rounded-xl bg-white border-2 border-blue-100/90 group-hover:border-[#1E90FF] group-hover:shadow-[0_4px_20px_rgba(30,144,255,0.18)] flex items-center justify-center shadow-sm transition-all duration-300 transform group-hover:-translate-y-0.5">
        {stageIcons[stage.icon]}
      </div>

      {/* Stage Name & Subtitle */}
      <div className="mt-2.5 space-y-0.5">
        <span className="text-[12px] font-bold text-[#051332] block leading-tight group-hover:text-[#1E90FF] transition-colors">
          {stage.name}
        </span>
        <span className="text-[10px] text-slate-500 font-medium leading-tight italic block">
          {stage.description}
        </span>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="h-12 flex items-center justify-center shrink-0 px-2 sm:px-3">
      <div className="relative flex items-center justify-center w-12 sm:w-16">
        {/* Premium Dashed Track Line */}
        <div className="w-full h-0 border-t-2 border-dashed border-[#1E90FF]/35" />
        
        {/* Animated Glowing Accent Dots */}
        <div className="absolute flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1E90FF]/30" />
          <div className="w-2 h-2 rounded-full bg-[#1E90FF] shadow-[0_0_8px_rgba(30,144,255,0.7)] animate-pulse" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#1E90FF]/30" />
        </div>
      </div>
    </div>
  );
}

export function EmployeeJourney() {
  const { eyebrow, subheading, stages } = homeContent.employeeJourney;
  const typedStages = stages as Array<{ name: string; description: string; icon: string }>;
  
  // Duplicate for seamless infinite loop
  const duplicatedStages = [...typedStages, ...typedStages];

  return (
    <section className="bg-gradient-to-b from-[#F0F7FF] via-[#F8FAFC] to-white py-10 lg:py-14 relative overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 relative">
          <FadeIn direction="up" className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 sm:w-16 bg-[#BFDBFE]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#1E90FF] uppercase">
              {eyebrow}
            </span>
            <div className="h-[1px] w-12 sm:w-16 bg-[#BFDBFE]" />
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1} className="text-[32px] sm:text-[38px] lg:text-[44px] font-heading font-bold text-[#051332] tracking-tight mb-4">
            <h2>
              From Hire to <span className="italic text-[#1E90FF]">Higher Potential</span>
            </h2>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2} className="text-[15px] sm:text-[16px] text-slate-500 max-w-2xl mx-auto">
            <p>{subheading}</p>
          </FadeIn>

          {/* Calligraphy Script Accent */}
          <div className="absolute top-0 right-0 lg:-right-36 xl:-right-48 text-[#1E90FF] text-[20px] lg:text-[26px] leading-snug hidden md:block font-[family-name:var(--font-playball)] drop-shadow-sm pointer-events-none -rotate-6">
            People<br />
            Perform<br />
            Progress
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Track */}
      <div className="relative py-2">
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F0F7FF] via-[#F0F7FF]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
        
        <div className="overflow-hidden">
          <div className="flex items-start gap-0 w-max animate-marquee" style={{ animationDuration: '45s' }}>
            {duplicatedStages.map((stage, idx) => (
              <React.Fragment key={`${stage.name}-${idx}`}>
                <StageCard stage={stage} />
                {idx < duplicatedStages.length - 1 && <Connector />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
