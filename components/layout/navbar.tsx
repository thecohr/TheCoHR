"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProtectedImage } from "@/components/ui/protected-image";
import {
  Menu,
  ChevronDown,
  ArrowRight,
  Cpu,
  Users,
  GraduationCap,
  PhoneCall,
  Sparkles,
  Mail,
  MapPin,
  Calendar,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { BookCallButton } from "@/components/ui/book-call-button";

const servicesItems = [
  {
    title: "HR ERP Software",
    desc: "Complete HCM system, automated payroll & performance analytics.",
    href: "/services#hr-erp-software",
    icon: Cpu,
  },
  {
    title: "Remote HR Services",
    desc: "Dedicated global HR partners & 100% statutory compliance.",
    href: "/services#remote-hr-services",
    icon: Users,
  },
  {
    title: "ERP Training & Upskilling",
    desc: "Hands-on corporate module workshops & team certifications.",
    href: "/services#erp-training",
    icon: GraduationCap,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-300">
      {/* 1. TOP UTILITY BAR (Deep Dark Navy) */}
      <div className="hidden lg:block bg-[#0A1128] text-slate-300 text-[11px] py-1.5 px-6 border-b border-slate-800">
        <div className="mx-auto w-full max-w-[1440px] flex items-center justify-between">
          {/* Left Tagline */}
          <div className="flex items-center gap-2.5 font-medium">
            <span>Powering People. Enabling Possibilities.</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Your Strategic HR Partner</span>
          </div>

          {/* Right Contact Info & Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://calendly.com/thecohr-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-semibold text-[#1E90FF] hover:text-white transition-colors"
            >
              <Calendar className="w-3 h-3 text-[#1E90FF]" />
              <span>Book a 30-Min Call</span>
            </a>

            <span className="text-slate-700">|</span>

            <a
              href="mailto:info@thecohr.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-[#1E90FF]" />
              <span>info@thecohr.com</span>
            </a>

            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3 h-3 text-[#1E90FF]" />
              <span>Kondapur, Hyderabad</span>
            </div>

            <span className="text-slate-700">|</span>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/in/the-co-hr-1a4842428/"
                target="_blank"
                rel="noreferrer"
                className="text-[#1E90FF] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://x.com/thecohr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors text-slate-400"
                aria-label="X Twitter"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/people/TheCo-HR/pfbid0Y9dBJZkUCq9jrpMwukbksVvaF3b7EPD6GvEdWDWLHTAEtzFMZmmxKznuax2S5Gsql/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors text-slate-400"
                aria-label="Facebook"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/thecohr_com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors text-slate-400"
                aria-label="Instagram"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN FLOATING PILL NAVBAR */}
      <div className="px-3 sm:px-6 py-2">
        <div
          className={cn(
            "mx-auto w-full max-w-[1440px] bg-white rounded-full transition-all duration-300 border border-slate-100 px-5 sm:px-6 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.05)]",
            isScrolled
              ? "shadow-[0_6px_25px_rgba(0,0,0,0.07)] py-2"
              : "py-2.5 sm:py-3"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 py-0.5" onClick={() => setIsOpen(false)}>
            <ProtectedImage
              src="/logo.png"
              alt="The Co HR Logo"
              width={280}
              height={85}
              className="h-11 sm:h-14 lg:h-[56px] w-auto object-contain transition-transform duration-200 hover:scale-[1.01]"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {/* Home */}
            <Link
              href="/"
              className={cn(
                "relative text-[14px] xl:text-[15px] font-semibold transition-colors py-2 flex flex-col items-center group",
                pathname === "/" ? "text-[#1E90FF]" : "text-slate-800 hover:text-[#1E90FF]"
              )}
            >
              <span>Home</span>
              {pathname === "/" && (
                <div className="absolute -bottom-1 flex items-center justify-center w-full">
                  <div className="w-8 h-[2px] bg-blue-100 rounded-full relative flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#1E90FF] rounded-full absolute shadow-sm" />
                  </div>
                </div>
              )}
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              className={cn(
                "relative text-[14px] xl:text-[15px] font-semibold transition-colors py-2 flex flex-col items-center group",
                pathname === "/about" ? "text-[#1E90FF]" : "text-slate-800 hover:text-[#1E90FF]"
              )}
            >
              <span>About Us</span>
              {pathname === "/about" && (
                <div className="absolute -bottom-1 flex items-center justify-center w-full">
                  <div className="w-8 h-[2px] bg-blue-100 rounded-full relative flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#1E90FF] rounded-full absolute shadow-sm" />
                  </div>
                </div>
              )}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <Link
                href="/services"
                onClick={() => {
                  setIsServicesHovered(false);
                  if (pathname === "/services") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={cn(
                  "relative flex items-center gap-1 text-[14px] xl:text-[15px] font-semibold transition-colors group",
                  pathname.startsWith("/services") || isServicesHovered
                    ? "text-[#1E90FF]"
                    : "text-slate-800 hover:text-[#1E90FF]"
                )}
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200 opacity-70",
                    isServicesHovered ? "rotate-180 text-[#1E90FF]" : ""
                  )}
                />
                {pathname.startsWith("/services") && (
                  <div className="absolute -bottom-1 flex items-center justify-center w-full">
                    <div className="w-8 h-[2px] bg-blue-100 rounded-full relative flex items-center justify-center">
                      <span className="w-2 h-2 bg-[#1E90FF] rounded-full absolute shadow-sm" />
                    </div>
                  </div>
                )}
              </Link>

              {/* Services Dropdown Panel */}
              {isServicesHovered && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[460px] animate-in fade-in-50 slide-in-from-top-1 duration-200">
                  <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-3 ring-1 ring-slate-900/5">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#1E90FF]" />
                        Our HR Solutions
                      </span>
                      <Link
                        href="/services"
                        onClick={() => {
                          setIsServicesHovered(false);
                          if (pathname === "/services") {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }}
                        className="text-xs font-semibold text-[#1E90FF] hover:underline flex items-center gap-1"
                      >
                        All Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="flex flex-col gap-1">
                      {servicesItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => {
                              setIsServicesHovered(false);
                              if (pathname === "/services") {
                                const hash = item.href.split("#")[1];
                                if (hash) {
                                  const el = document.getElementById(hash);
                                  if (el) {
                                    el.scrollIntoView({ behavior: "smooth" });
                                  }
                                }
                              }
                            }}
                            className="group/item flex items-start gap-3.5 p-3 rounded-xl transition-all duration-200 hover:bg-blue-50/60"
                          >
                            <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1E90FF] flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover/item:scale-105">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-[14px] font-semibold text-slate-900 group-hover/item:text-[#1E90FF] transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-xs text-slate-500 leading-normal mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Us */}
            <Link
              href="/contact"
              className={cn(
                "relative text-[14px] xl:text-[15px] font-semibold transition-colors py-2 flex flex-col items-center group",
                pathname === "/contact" ? "text-[#1E90FF]" : "text-slate-800 hover:text-[#1E90FF]"
              )}
            >
              <span>Contact Us</span>
              {pathname === "/contact" && (
                <div className="absolute -bottom-1 flex items-center justify-center w-full">
                  <div className="w-8 h-[2px] bg-blue-100 rounded-full relative flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#1E90FF] rounded-full absolute shadow-sm" />
                  </div>
                </div>
              )}
            </Link>
          </nav>

          {/* Desktop Right Side: Divider + Phone Schedule Block + CTA */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-4">
            <div className="h-8 w-px bg-slate-200" />

            {/* Phone Info Block (Shown on xl screens) */}
            <a href="tel:+919019724365" className="hidden xl:flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-full bg-blue-50 text-[#1E90FF] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-sm">
                <PhoneCall className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[13.5px] font-bold text-slate-900 group-hover:text-[#1E90FF] transition-colors leading-snug">
                  +91 90197 24365
                </span>
                <span className="text-[10px] text-[#1E90FF] font-semibold leading-none">
                  Call Us Directly
                </span>
              </div>
            </a>

            {/* Book a Call Button */}
            <BookCallButton
              variant="secondary"
              size="sm"
              className="text-xs xl:text-sm px-3.5 xl:px-4 py-2"
            />

            {/* CTA Button */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-[#1E90FF] px-4 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:bg-[#187BCD] hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Book Demo</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex lg:hidden items-center gap-1">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="p-2 text-slate-800 hover:bg-slate-100 rounded-xl transition-colors focus:outline-none">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white flex flex-col p-6 w-[88vw] max-w-[360px]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <ProtectedImage
                    src="/logo.png"
                    alt="The Co HR Logo"
                    width={240}
                    height={75}
                    className="h-12 w-auto object-contain"
                    unoptimized
                  />
                </div>

                <div className="flex flex-col gap-2 py-6 overflow-y-auto">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl font-bold text-base transition-colors",
                      pathname === "/"
                        ? "bg-blue-50 text-[#1E90FF]"
                        : "text-slate-800 hover:bg-slate-50"
                    )}
                  >
                    Home
                  </Link>

                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl font-bold text-base transition-colors",
                      pathname === "/about"
                        ? "bg-blue-50 text-[#1E90FF]"
                        : "text-slate-800 hover:bg-slate-50"
                    )}
                  >
                    About Us
                  </Link>

                  <div className="flex flex-col">
                    <div
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl font-bold text-base transition-colors w-full",
                        pathname.startsWith("/services")
                          ? "bg-blue-50 text-[#1E90FF]"
                          : "text-slate-800 hover:bg-slate-50"
                      )}
                    >
                      <Link
                        href="/services"
                        onClick={() => {
                          setIsOpen(false);
                          if (pathname === "/services") {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }}
                        className="flex-1 text-left"
                      >
                        Services
                      </Link>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setMobileServicesOpen(!mobileServicesOpen);
                        }}
                        className="p-1 -mr-1 hover:bg-blue-100/50 rounded-lg transition-colors"
                        aria-label="Toggle Services submenu"
                      >
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 transition-transform duration-200 text-slate-400",
                            mobileServicesOpen ? "rotate-180 text-[#1E90FF]" : ""
                          )}
                        />
                      </button>
                    </div>

                    {mobileServicesOpen && (
                      <div className="ml-4 pl-3 border-l-2 border-blue-100 flex flex-col gap-1.5 my-1 py-1">
                        <Link
                          href="/services"
                          onClick={() => {
                            setIsOpen(false);
                            setMobileServicesOpen(false);
                            if (pathname === "/services") {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                          }}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#1E90FF] hover:bg-slate-50 font-bold"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>All Services Overview</span>
                        </Link>
                        {servicesItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileServicesOpen(false);
                              if (pathname === "/services") {
                                const hash = item.href.split("#")[1];
                                if (hash) {
                                  setTimeout(() => {
                                    const el = document.getElementById(hash);
                                    if (el) {
                                      el.scrollIntoView({ behavior: "smooth" });
                                    }
                                  }, 100);
                                }
                              }
                            }}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-[#1E90FF] hover:bg-slate-50 font-medium"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1E90FF]" />
                            <span>{item.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl font-bold text-base transition-colors",
                      pathname === "/contact"
                        ? "bg-blue-50 text-[#1E90FF]"
                        : "text-slate-800 hover:bg-slate-50"
                    )}
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-4">
                  {/* Social Icons Bar in Mobile Menu */}
                  <div className="flex items-center justify-center gap-4 text-slate-500 py-1">
                    <a href="https://www.linkedin.com/in/the-co-hr-1a4842428/" target="_blank" rel="noreferrer" className="hover:text-[#1E90FF] transition-colors" aria-label="LinkedIn">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                      </svg>
                    </a>
                    <a href="https://x.com/thecohr" target="_blank" rel="noreferrer" className="hover:text-[#1E90FF] transition-colors" aria-label="X Twitter">
                      <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/people/TheCo-HR/pfbid0Y9dBJZkUCq9jrpMwukbksVvaF3b7EPD6GvEdWDWLHTAEtzFMZmmxKznuax2S5Gsql/" target="_blank" rel="noreferrer" className="hover:text-[#1E90FF] transition-colors" aria-label="Facebook">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/thecohr_com/" target="_blank" rel="noreferrer" className="hover:text-[#1E90FF] transition-colors" aria-label="Instagram">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>

                  <a
                    href="tel:+919019724365"
                    className="flex items-center justify-center gap-3 text-sm font-bold text-slate-800"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1E90FF] flex items-center justify-center">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <span>+91 90197 24365</span>
                  </a>

                  <div className="flex flex-col gap-2.5 w-full pt-1">
                    <BookCallButton
                      variant="primary"
                      size="md"
                      fullWidth
                      label="Book a Call"
                      onClick={() => setIsOpen(false)}
                      className="h-11 rounded-xl font-bold text-sm"
                    />
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="w-full h-11 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl font-bold text-sm justify-center flex items-center gap-2 transition-colors border border-slate-200"
                    >
                      <span>Book a Demo</span>
                      <ArrowRight className="w-4 h-4 text-[#1E90FF]" />
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}



