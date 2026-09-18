"use client";

import { Calendar, PhoneCall } from "lucide-react";
import { usePathname } from "next/navigation";

export function MobileStickyCTA() {
  const pathname = usePathname();

  // Hide sticky bar on contact page or thank-you page to avoid overlapping form inputs
  if (pathname === "/contact" || pathname === "/thank-you") {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/80 p-3 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-safe">
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <a
          href="tel:+919019724365"
          className="flex-1 bg-slate-50 hover:bg-slate-100 text-[#051332] font-bold text-xs sm:text-sm py-3 px-4 rounded-2xl transition-colors flex items-center justify-center gap-2 border border-slate-200 shrink-0 shadow-sm"
        >
          <PhoneCall className="w-4 h-4 text-[#1E90FF]" />
          <span>Call Us</span>
        </a>
        <a
          href="https://calendly.com/thecohr-info/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.4] bg-[#1E90FF] hover:bg-[#187BCD] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 shrink-0"
        >
          <Calendar className="w-4 h-4" />
          <span>Book a Call</span>
        </a>
      </div>
    </div>
  );
}
