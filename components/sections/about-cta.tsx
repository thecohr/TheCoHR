import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BookCallButton } from "@/components/ui/book-call-button";

export function AboutCTA() {
  return (
    <section className="bg-gradient-to-r from-[#EEF5FF] via-[#F4F8FF] to-[#E5F0FF] py-6 lg:py-8 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: CTA Text & Buttons */}
          <FadeIn direction="right" duration={0.6} className="lg:col-span-7 space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1E90FF]">
              LET&apos;S BUILD A STRONGER TOMORROW
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#051332] tracking-tight leading-tight">
              Ready to Transform Your HR?
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Partner with The Co HR and experience the power of technology, expertise, and learning — together.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="bg-[#1E90FF] hover:bg-[#187BCD] text-white rounded-xl px-6 py-3.5 font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <BookCallButton variant="white" size="md" className="py-3.5 px-6 text-sm sm:text-base" />

              <a
                href="tel:+919019724365"
                className="bg-white/90 hover:bg-white border border-blue-200 text-slate-700 hover:text-[#1E90FF] rounded-xl px-5 py-3.5 font-bold text-sm sm:text-base transition-all shadow-sm hover:shadow"
              >
                Talk to an Expert
              </a>
            </div>
          </FadeIn>

          {/* Right Column: Cursive Calligraphy & Swoosh */}
          <FadeIn direction="left" duration={0.6} delay={0.1} className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center relative py-6">
            <div className="relative inline-block text-left lg:text-right transform lg:-rotate-2">
              <span className="block text-3xl sm:text-4xl lg:text-[42px] text-[#1E90FF] font-normal leading-tight font-[family-name:var(--font-playball)]">
                Better People
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-[42px] text-[#1E90FF] font-normal leading-tight font-[family-name:var(--font-playball)] mt-1">
                Brighter Possibilities
              </span>

              {/* Decorative Underline Swoosh */}
              <svg
                className="w-full h-8 text-[#1E90FF] opacity-80 mt-1"
                viewBox="0 0 300 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 18C60 6 180 4 295 14"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Aesthetic Plant Graphic background element */}
            <div className="absolute right-0 bottom-0 pointer-events-none opacity-30 lg:opacity-60 -z-10 translate-x-8 translate-y-8">
              <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 180C100 180 120 120 170 100C120 80 100 20 100 20C100 20 80 80 30 100C80 120 100 180 100 180Z" fill="#1E90FF" fillOpacity="0.08" />
              </svg>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
