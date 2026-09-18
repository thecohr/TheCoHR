import { FadeIn } from "@/components/ui/fade-in";
import { ProtectedImage } from "@/components/ui/protected-image";
import { Clock, Settings, Users } from "lucide-react";

export function ContactHero() {
  return (
    <section className="bg-gradient-to-r from-[#EEF5FF] via-[#F4F8FF] to-[#E8F2FF] pt-2 pb-4 lg:pt-4 lg:pb-6 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & 3 Features */}
          <FadeIn direction="right" duration={0.6} className="lg:col-span-6 space-y-5 sm:space-y-6">
            {/* Eyebrow with decorative line */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1E90FF]">
              <span>CONTACT US</span>
              <span className="w-8 h-[2px] bg-[#1E90FF] rounded-full" />
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-extrabold text-[#051332] tracking-tight leading-[1.12]">
              Let&apos;s Build a<br />
              Better Workplace<br />
              <span className="text-[#1E90FF]">Together</span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
              Have a question, need more information, or ready to get started? Our team is here to help you with the right HR solutions for your business.
            </p>

            {/* 3 Features in 3 columns / flex row */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {/* Feature 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#DCEBFF] flex items-center justify-center text-[#1E90FF] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#051332] leading-tight">
                    Quick Response
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 leading-tight mt-0.5">
                    We value your time
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#DCEBFF] flex items-center justify-center text-[#1E90FF] shrink-0">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#051332] leading-tight">
                    Expert Guidance
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 leading-tight mt-0.5">
                    From our HR specialists
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#DCEBFF] flex items-center justify-center text-[#1E90FF] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#051332] leading-tight">
                    Tailored Solutions
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 leading-tight mt-0.5">
                    For your unique needs
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Hero Photo */}
          <FadeIn direction="left" duration={0.6} delay={0.1} className="lg:col-span-6 relative flex items-center justify-end">
            <div className="relative rounded-3xl overflow-hidden shadow-xl max-w-[620px] w-full">
              <ProtectedImage
                src="/images/contact-woman.jpg"
                alt="Let's Build a Better Workplace Together - The Co HR"
                width={700}
                height={480}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
