import { FadeIn } from "@/components/ui/fade-in";
import { ProtectedImage } from "@/components/ui/protected-image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BookCallButton } from "@/components/ui/book-call-button";

export function ServicesCTA() {
  return (
    <section className="bg-gradient-to-r from-[#EEF5FF] via-[#F4F8FF] to-[#E5F0FF] py-4 lg:py-6 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Content & Buttons */}
          <FadeIn direction="right" duration={0.6} className="lg:col-span-6 space-y-5">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1E90FF]">
              LET&apos;S WORK TOGETHER
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#051332] tracking-tight leading-tight">
              Transform Your HR Today
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Discover how our technology, expertise, and training can help you build a stronger, more efficient workforce.
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

          {/* Right Column: Team Image */}
          <FadeIn direction="left" duration={0.6} delay={0.1} className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-blue-100/80 bg-white">
              <ProtectedImage
                src="/images/cta-team.jpg"
                alt="Transform Your HR Today - The Co HR"
                width={700}
                height={480}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
