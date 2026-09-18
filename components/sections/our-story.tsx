import { FadeIn } from "@/components/ui/fade-in";
import { ProtectedImage } from "@/components/ui/protected-image";

export function OurStory() {
  return (
    <section className="bg-white py-2 lg:py-4 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Office Image */}
          <FadeIn direction="right" duration={0.6} className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
              <ProtectedImage
                src="/images/about-office.jpg"
                alt="The Co HR Office"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

          {/* Right Column: Content */}
          <FadeIn direction="left" duration={0.6} delay={0.1} className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            {/* Eyebrow */}
            <div className="text-xs font-bold uppercase tracking-widest text-[#1E90FF]">
              OUR STORY
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#051332] tracking-tight leading-tight">
              Built to Solve Real<br />
              <span className="text-[#1E90FF]">HR Challenges</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
              <p>
                We recognised that organisations often rely on multiple vendors for HR software, outsourced HR services, and employee training, leading to increased costs, fragmented processes, and inconsistent employee experiences.
              </p>
              <p>
                To solve this challenge, we created The Co HR — a unified HR solutions company that combines <strong className="text-[#051332] font-semibold">intelligent HR ERP technology</strong>, experienced HR professionals, and practical training programmes under one roof.
              </p>
              <p>
                Our goal is to help businesses build efficient workplaces where technology supports people and HR becomes a strategic advantage rather than an administrative burden.
              </p>
              <p>
                Whether you&apos;re implementing your first HR system, outsourcing HR operations, or training your workforce, The Co HR delivers tailored solutions designed to support your growth at every stage.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
