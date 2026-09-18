"use client";

import { useState } from "react";
import Link from "next/link";
import { ProtectedImage } from "@/components/ui/protected-image";
import {
  ChevronRight,
  Monitor,
  Users,
  GraduationCap,
  Headset,
  Mail,
  Phone,
  MapPin,
  Send,
  Lock,
  Leaf,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Calendar,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || newsletterSubmitting) return;

    setNewsletterSubmitting(true);
    setNewsletterError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Subscription failed. Please try again.");
      }

      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to subscribe. Please try again.";
      setNewsletterError(message);
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-[#020612] text-slate-300 pt-12 lg:pt-16 pb-8 overflow-hidden font-sans border-t border-slate-800/60">
      {/* Background Ambient Glows & Vector Waves */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#1E90FF]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#1E90FF]/10 rounded-full blur-[120px]" />
        
        {/* Soft wavy lines vector overlay */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-32 sm:h-48 opacity-25 text-[#1E90FF]/20"
          viewBox="0 0 1440 200"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,90.7C1120,85,1280,107,1360,117.3L1440,128L1440,200L1360,200C1280,200,1120,200,960,200C320,200,160,200,80,200L0,200Z"
            fill="url(#footer-wave-grad)"
          />
          <defs>
            <linearGradient id="footer-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E90FF" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#1E90FF" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#187BCD" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-10 sm:pb-12">
          
          {/* Column 1: Brand & Overview (Col span 3) */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-5 sm:space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-block bg-white px-4 py-2.5 rounded-2xl shadow-md border border-slate-100 hover:scale-[1.01] transition-transform">
              <ProtectedImage
                src="/logo.png"
                alt="The Co HR Logo"
                width={320}
                height={95}
                className="h-12 sm:h-14 lg:h-[56px] w-auto object-contain"
                priority
                unoptimized
              />
            </Link>

            {/* Headline */}
            <div className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-white tracking-tight leading-snug">
              Empowering People.<br />
              Building <span className="text-[#1E90FF]">Tomorrow.</span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Your complete HR transformation partner — combining powerful HR ERP software, outsourced HR expertise, and professional training under one roof.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a href="https://www.linkedin.com/in/the-co-hr-1a4842428/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-slate-700/80 bg-slate-900/60 flex items-center justify-center text-slate-300 hover:border-blue-500 hover:bg-[#1E90FF] hover:text-white transition-all" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="https://x.com/thecohr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-slate-700/80 bg-slate-900/60 flex items-center justify-center text-slate-300 hover:border-blue-500 hover:bg-[#1E90FF] hover:text-white transition-all" aria-label="X Twitter">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/people/TheCo-HR/pfbid0Y9dBJZkUCq9jrpMwukbksVvaF3b7EPD6GvEdWDWLHTAEtzFMZmmxKznuax2S5Gsql/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-slate-700/80 bg-slate-900/60 flex items-center justify-center text-slate-300 hover:border-blue-500 hover:bg-[#1E90FF] hover:text-white transition-all" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/thecohr_com/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-slate-700/80 bg-slate-900/60 flex items-center justify-center text-slate-300 hover:border-pink-500 hover:bg-gradient-to-tr hover:from-[#FFB900] hover:via-[#E0040B] hover:to-[#8A00D4] hover:text-white transition-all" aria-label="Instagram">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://wa.me/919019724365?text=Hello%20The%20Co%20HR%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-slate-700/80 bg-slate-900/60 flex items-center justify-center text-slate-300 hover:border-emerald-500 hover:bg-[#25D366] hover:text-white transition-all" aria-label="WhatsApp">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>

            {/* Calligraphy Script Accent */}
            <div className="pt-2 sm:pt-3">
              <div className="font-[family-name:var(--font-playball)] text-[#1E90FF] text-xl sm:text-2xl lg:text-3xl -rotate-2 leading-tight tracking-wide">
                Better People
              </div>
              <div className="relative inline-block">
                <span className="font-[family-name:var(--font-playball)] text-[#1E90FF] text-xl sm:text-2xl lg:text-3xl -rotate-2 leading-tight tracking-wide">
                  Brighter Possibilities
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#1E90FF]/60 overflow-visible" viewBox="0 0 200 12" fill="none">
                  <path d="M2,8 Q100,-2 198,8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Col span 2) */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-4 sm:space-y-5">
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wide relative inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3 sm:space-y-3.5 text-xs lg:text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact Us", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-of-service" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group flex items-center justify-between text-slate-400 hover:text-white transition-colors">
                    <span>{link.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#1E90FF] group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services (Col span 2) */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-4 sm:space-y-5">
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wide relative inline-block">
              Our Services
            </h4>
            <ul className="space-y-3 sm:space-y-3.5">
              {[
                { label: "HR ERP Software", icon: <Monitor className="w-4 h-4 text-[#1E90FF]" />, href: "/services#hr-erp-software", external: false },
                { label: "Remote HR Services", icon: <Users className="w-4 h-4 text-[#1E90FF]" />, href: "/services#remote-hr-services", external: false },
                { label: "ERP Training", icon: <GraduationCap className="w-4 h-4 text-[#1E90FF]" />, href: "/services#erp-training", external: false },
                { label: "Book a 30-Min Call", icon: <Calendar className="w-4 h-4 text-[#1E90FF]" />, href: "https://calendly.com/thecohr-info/30min", external: true },
                { label: "Book a Demo", icon: <Headset className="w-4 h-4 text-[#1E90FF]" />, href: "/contact", external: false },
              ].map((service) => (
                <li key={service.label}>
                  {service.external ? (
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-xs lg:text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#1E90FF]/10 border border-[#1E90FF]/30 flex items-center justify-center shrink-0 group-hover:border-[#1E90FF] group-hover:bg-[#1E90FF]/25 transition-all">
                        {service.icon}
                      </div>
                      <span className="leading-snug">{service.label}</span>
                    </a>
                  ) : (
                    <Link
                      href={service.href}
                      className="group flex items-center gap-3 text-xs lg:text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#1E90FF]/10 border border-[#1E90FF]/30 flex items-center justify-center shrink-0 group-hover:border-[#1E90FF] group-hover:bg-[#1E90FF]/25 transition-all">
                        {service.icon}
                      </div>
                      <span className="leading-snug">{service.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch (Col span 2) */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-4 sm:space-y-5">
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wide relative inline-block">
              Get in Touch
            </h4>
            
            <div className="space-y-3.5 sm:space-y-4 text-xs lg:text-sm">
              {/* Mail */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1E90FF] flex items-center justify-center shrink-0 text-white mt-0.5 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <a href="mailto:info@thecohr.com" className="text-white font-medium hover:text-[#1E90FF] transition-colors block truncate">
                    info@thecohr.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1E90FF] flex items-center justify-center shrink-0 text-white mt-0.5 shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <a href="tel:+919019724365" className="text-white font-medium hover:text-[#1E90FF] transition-colors block">
                    +91 90197 24365
                  </a>
                </div>
              </div>

              {/* MapPin */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1E90FF] flex items-center justify-center shrink-0 text-white mt-0.5 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-white font-medium block">Pranava Business Park, 7th Floor, Kondapur, Hyderabad, Telangana</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Corporate Office</span>
                </div>
              </div>
            </div>

            {/* Dot-Matrix World Map Graphic & Calligraphy Overlay */}
            <div className="relative pt-2 mt-4">
              <div className="w-full h-24 relative opacity-80">
                {/* SVG Dotted World Map */}
                <svg className="w-full h-full text-[#1E90FF]/40" viewBox="0 0 240 100" fill="none">
                  <g fill="currentColor">
                    <circle cx="30" cy="25" r="1.5" /><circle cx="40" cy="20" r="1.5" /><circle cx="50" cy="22" r="1.5" />
                    <circle cx="25" cy="35" r="1.5" /><circle cx="35" cy="32" r="1.5" /><circle cx="45" cy="38" r="1.5" />
                    <circle cx="55" cy="55" r="1.5" /><circle cx="60" cy="65" r="1.5" /><circle cx="65" cy="75" r="1.5" />
                    <circle cx="110" cy="25" r="1.5" /><circle cx="120" cy="22" r="1.5" /><circle cx="125" cy="30" r="1.5" />
                    <circle cx="115" cy="45" r="1.5" /><circle cx="120" cy="55" r="1.5" /><circle cx="125" cy="65" r="1.5" />
                    <circle cx="150" cy="25" r="1.5" /><circle cx="165" cy="20" r="1.5" /><circle cx="175" cy="30" r="1.5" />
                    <circle cx="155" cy="40" r="2.5" className="text-[#1E90FF] animate-pulse" />
                    <circle cx="165" cy="42" r="1.5" /><circle cx="180" cy="45" r="1.5" />
                    <circle cx="190" cy="70" r="1.5" /><circle cx="200" cy="75" r="1.5" />
                  </g>
                  <path d="M50,22 Q100,5 155,40" stroke="#1E90FF" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
                  <path d="M120,22 Q140,10 155,40" stroke="#1E90FF" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
                </svg>
              </div>

              {/* Overlaid Calligraphy */}
              <div className="absolute top-4 left-0 w-full text-center pointer-events-none transform -rotate-2">
                <div className="font-[family-name:var(--font-playball)] text-[#1E90FF] text-base sm:text-lg lg:text-xl leading-tight drop-shadow-md">
                  Supporting Businesses
                </div>
                <div className="font-[family-name:var(--font-playball)] text-[#1E90FF] text-base sm:text-lg lg:text-xl leading-tight drop-shadow-md">
                  Across the Globe
                </div>
              </div>
            </div>
          </div>

          {/* Column 5: Stay Updated Newsletter Card (Col span 3) */}
          <div className="sm:col-span-1 lg:col-span-3">
            <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0A173B] via-[#071333] to-[#040B21] p-5 sm:p-6 lg:p-7 border border-[#1E90FF]/30 shadow-2xl overflow-hidden h-full flex flex-col justify-between">
              
              {/* Top-Right Floating Send Icon */}
              <div className="absolute top-4 sm:top-5 right-4 sm:right-5 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1E90FF] flex items-center justify-center text-white shadow-[0_0_20px_rgba(30,144,255,0.6)]">
                <Send className="w-4 h-4 sm:w-5 sm:h-5 -rotate-12 translate-x-0.5 -translate-y-0.5" />
              </div>

              <div>
                <h4 className="text-white font-bold text-lg sm:text-xl lg:text-2xl tracking-tight mb-2 sm:mb-3">
                  Stay Updated
                </h4>
                <p className="text-xs lg:text-sm text-slate-300/80 leading-relaxed mb-5 sm:mb-6 pr-8">
                  Get the latest insights, updates and HR trends delivered to your inbox.
                </p>

                {/* Email Input */}
                {newsletterSubscribed ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 text-center space-y-1">
                    <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Subscribed Successfully!</span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Thank you! You will receive our latest HR insights & updates.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                    <div className="relative flex items-center bg-[#050D24] border border-[#1E90FF]/40 rounded-full p-1 sm:p-1.5 focus-within:border-[#1E90FF] transition-all shadow-inner">
                      <input
                        type="email"
                        placeholder="Your email address"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        disabled={newsletterSubmitting}
                        className="w-full bg-transparent px-3 sm:px-4 text-xs text-white placeholder-slate-500 focus:outline-none min-w-0 disabled:opacity-50"
                        required
                      />
                      <button
                        type="submit"
                        disabled={newsletterSubmitting}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1E90FF] text-white flex items-center justify-center hover:bg-[#187BCD] shrink-0 transition-transform active:scale-95 shadow-md disabled:opacity-50 cursor-pointer"
                        aria-label="Subscribe"
                      >
                        {newsletterSubmitting ? (
                          <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        )}
                      </button>
                    </div>

                    {newsletterError && (
                      <p className="text-[11px] text-red-400 font-medium px-2">
                        {newsletterError}
                      </p>
                    )}
                    
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 px-2">
                      <Lock className="w-3.5 h-3.5 text-[#1E90FF]" />
                      <span>We respect your privacy.</span>
                    </div>
                  </form>
                )}
              </div>

              {/* Solid Vibrant Corner Gradient Swoop from Mockup */}
              <div className="w-28 sm:w-32 h-28 sm:h-32 bg-[#1E90FF] rounded-tl-full absolute -bottom-2 -right-2 pointer-events-none opacity-90" />
            </div>
          </div>

        </div>

        {/* Middle Divider & Legal Bar */}
        <div className="pt-6 sm:pt-8 pb-4 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <div>
            <p className="text-slate-300 font-medium">© {currentYear} The Co HR. All rights reserved.</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Built for a better, people-first future.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>

          <div className="flex items-center gap-2 text-slate-300 bg-slate-900/80 border border-slate-800 rounded-full px-3.5 py-1.5 text-xs">
            <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>A Sustainable Workplace Partner</span>
          </div>
        </div>

      </div>
    </footer>
  );
}


