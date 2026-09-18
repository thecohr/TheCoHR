"use client";

import { useState, useRef, useEffect } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Globe,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Search,
  AlertCircle,
  Loader2,
  Calendar,
} from "lucide-react";
import { BookCallButton } from "@/components/ui/book-call-button";

interface Country {
  code: string;
  name: string;
  flag: string;
  dial: string;
}

const allCountries: Country[] = [
  { code: "AF", name: "Afghanistan", flag: "🇦🇫", dial: "+93" },
  { code: "AL", name: "Albania", flag: "🇦🇱", dial: "+355" },
  { code: "DZ", name: "Algeria", flag: "🇩🇿", dial: "+213" },
  { code: "AR", name: "Argentina", flag: "🇦🇷", dial: "+54" },
  { code: "AU", name: "Australia", flag: "🇦🇺", dial: "+61" },
  { code: "AT", name: "Austria", flag: "🇦🇹", dial: "+43" },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩", dial: "+880" },
  { code: "BE", name: "Belgium", flag: "🇧🇪", dial: "+32" },
  { code: "BR", name: "Brazil", flag: "🇧🇷", dial: "+55" },
  { code: "CA", name: "Canada", flag: "🇨🇦", dial: "+1" },
  { code: "CL", name: "Chile", flag: "🇨🇱", dial: "+56" },
  { code: "CN", name: "China", flag: "🇨🇳", dial: "+86" },
  { code: "CO", name: "Colombia", flag: "🇨🇴", dial: "+57" },
  { code: "DK", name: "Denmark", flag: "🇩🇰", dial: "+45" },
  { code: "EG", name: "Egypt", flag: "🇪🇬", dial: "+20" },
  { code: "FI", name: "Finland", flag: "🇫🇮", dial: "+358" },
  { code: "FR", name: "France", flag: "🇫🇷", dial: "+33" },
  { code: "DE", name: "Germany", flag: "🇩🇪", dial: "+49" },
  { code: "GR", name: "Greece", flag: "🇬🇷", dial: "+30" },
  { code: "HK", name: "Hong Kong", flag: "🇭🇰", dial: "+852" },
  { code: "IN", name: "India", flag: "🇮🇳", dial: "+91" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩", dial: "+62" },
  { code: "IE", name: "Ireland", flag: "🇮🇪", dial: "+353" },
  { code: "IL", name: "Israel", flag: "🇮🇱", dial: "+972" },
  { code: "IT", name: "Italy", flag: "🇮🇹", dial: "+39" },
  { code: "JP", name: "Japan", flag: "🇯🇵", dial: "+81" },
  { code: "KE", name: "Kenya", flag: "🇰🇪", dial: "+254" },
  { code: "KW", name: "Kuwait", flag: "🇰🇼", dial: "+965" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾", dial: "+60" },
  { code: "MX", name: "Mexico", flag: "🇲🇽", dial: "+52" },
  { code: "NP", name: "Nepal", flag: "🇳🇵", dial: "+977" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", dial: "+31" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿", dial: "+64" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬", dial: "+234" },
  { code: "NO", name: "Norway", flag: "🇳🇴", dial: "+47" },
  { code: "OM", name: "Oman", flag: "🇴🇲", dial: "+968" },
  { code: "PK", name: "Pakistan", flag: "🇵🇰", dial: "+92" },
  { code: "PH", name: "Philippines", flag: "🇵🇭", dial: "+63" },
  { code: "PL", name: "Poland", flag: "🇵🇱", dial: "+48" },
  { code: "PT", name: "Portugal", flag: "🇵🇹", dial: "+351" },
  { code: "QA", name: "Qatar", flag: "🇶🇦", dial: "+974" },
  { code: "RU", name: "Russia", flag: "🇷🇺", dial: "+7" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", dial: "+966" },
  { code: "SG", name: "Singapore", flag: "🇸🇬", dial: "+65" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦", dial: "+27" },
  { code: "KR", name: "South Korea", flag: "🇰🇷", dial: "+82" },
  { code: "ES", name: "Spain", flag: "🇪🇸", dial: "+34" },
  { code: "LK", name: "Sri Lanka", flag: "🇱🇰", dial: "+94" },
  { code: "SE", name: "Sweden", flag: "🇸🇪", dial: "+46" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭", dial: "+41" },
  { code: "TH", name: "Thailand", flag: "🇹🇭", dial: "+66" },
  { code: "TR", name: "Turkey", flag: "🇹🇷", dial: "+90" },
  { code: "AE", name: "UAE", flag: "🇦🇪", dial: "+971" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", dial: "+44" },
  { code: "US", name: "United States", flag: "🇺🇸", dial: "+1" },
  { code: "VN", name: "Vietnam", flag: "🇻🇳", dial: "+84" },
].sort((a, b) => a.name.localeCompare(b.name));

function CountrySelector({
  selected,
  onSelect,
}: {
  selected: Country;
  onSelect: (country: Country) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = allCountries.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.dial.includes(search) ||
      c.code.toLowerCase().includes(search.toLowerCase())
  );

  const defaultIndia = allCountries.find((c) => c.code === "IN") || allCountries[0];
  const activeCountry = selected || defaultIndia;

  return (
    <div className="relative shrink-0 z-30" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-1.5 bg-slate-50/80 hover:bg-slate-100/90 border border-slate-200 rounded-xl px-3 py-3 w-[115px] shrink-0 font-bold text-xs sm:text-sm text-slate-800 transition-all focus:outline-none focus:border-[#1E90FF] cursor-pointer select-none"
      >
        <span className="flex items-center gap-1.5 truncate">
          <span>{activeCountry.flag}</span>
          <span>{activeCountry.dial}</span>
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Floating Dropdown Popover */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1.5 w-[260px] sm:w-[280px] bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 p-2.5 space-y-2">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              autoFocus
              placeholder="Search country or code..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1E90FF] focus:bg-white"
            />
          </div>

          {/* Scrollable List */}
          <div className="max-h-[200px] overflow-y-auto divide-y divide-slate-50 pr-1">
            {filtered.length === 0 ? (
              <div className="text-xs text-slate-400 text-center py-4">No countries found</div>
            ) : (
              filtered.map((c) => (
                <button
                  key={`${c.code}-${c.dial}`}
                  type="button"
                  onClick={() => {
                    onSelect(c);
                    setIsOpen(false);
                    setSearch("");
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-2 text-xs font-medium rounded-lg text-left transition-colors cursor-pointer ${
                    c.code === activeCountry.code ? "bg-blue-50 text-[#1E90FF] font-bold" : "hover:bg-slate-50 text-slate-700"
                  }`}
                >
                  <span className="flex items-center gap-2 truncate pr-2">
                    <span className="text-base">{c.flag}</span>
                    <span className="truncate">{c.name}</span>
                    <span className="text-[10px] text-slate-400 uppercase font-mono">({c.code})</span>
                  </span>
                  <span className="font-bold shrink-0">{c.dial}</span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function ContactMain() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const defaultIndia = allCountries.find((c) => c.code === "IN") || allCountries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultIndia);
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    phoneNumber: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Frontend Validations
    const trimmedName = formData.fullName.trim();
    if (!trimmedName || trimmedName.length < 2) {
      setErrorMessage("Please enter your full name (at least 2 characters).");
      return;
    }
    if (/^\d+$/.test(trimmedName)) {
      setErrorMessage("Full name cannot contain only numbers.");
      return;
    }

    const trimmedEmail = formData.businessEmail.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const phoneDigits = formData.phoneNumber.replace(/\D/g, "");
    if (!formData.phoneNumber || phoneDigits.length < 6 || phoneDigits.length > 15) {
      setErrorMessage("Please enter a valid phone number (6 to 15 digits).");
      return;
    }

    const trimmedMsg = formData.message.trim();
    if (!trimmedMsg || trimmedMsg.length < 10) {
      setErrorMessage("Your message must be at least 10 characters long.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: trimmedName,
          businessEmail: trimmedEmail,
          countryCode: `${selectedCountry.flag} ${selectedCountry.dial}`,
          phoneNumber: formData.phoneNumber.trim(),
          message: trimmedMsg,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "We couldn't send your message right now. Please try again.");
      }

      setIsSuccess(true);
      setFormData({
        fullName: "",
        businessEmail: "",
        phoneNumber: "",
        message: "",
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "We couldn't send your message right now. Please try again.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-4 sm:py-6 lg:py-8">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ==================== LEFT COLUMN: Send Us a Message ==================== */}
          <FadeIn
            direction="up"
            duration={0.5}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
          >
            <div className="mb-6 space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#051332] tracking-tight">
                Send Us a Message
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-medium">
                Fill out the form below and our team will get back to you shortly.
              </p>
            </div>

            {isSuccess ? (
              <div className="bg-blue-50/60 rounded-2xl p-8 text-center space-y-3 border border-blue-100 my-8">
                <div className="w-14 h-14 bg-[#1E90FF] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#051332]">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to The Co HR. Our HR specialists will review your message and contact you shortly.
                </p>
                <div className="flex items-center justify-center gap-4 pt-2">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        fullName: "",
                        businessEmail: "",
                        phoneNumber: "",
                        message: "",
                      });
                    }}
                    className="text-xs font-bold text-[#1E90FF] underline hover:text-[#187BCD] cursor-pointer"
                  >
                    Send another message
                  </button>
                  <span className="text-slate-300">|</span>
                  <a
                    href="/thank-you"
                    className="text-xs font-bold text-slate-600 hover:text-[#1E90FF] transition-colors"
                  >
                    View Confirmation Page →
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#051332] flex items-center gap-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        minLength={2}
                        maxLength={100}
                        placeholder="Enter your name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1E90FF] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#051332] flex items-center gap-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={formData.businessEmail}
                        onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1E90FF] focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Phone Number with Custom Searchable Country Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#051332] flex items-center gap-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {/* Custom Searchable Country Selector */}
                    <CountrySelector
                      selected={selectedCountry}
                      onSelect={(country) => setSelectedCountry(country)}
                    />

                    {/* Input */}
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        minLength={6}
                        maxLength={20}
                        placeholder="Enter your phone number"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1E90FF] focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: Message Textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#051332] flex items-center gap-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      required
                      rows={4}
                      minLength={10}
                      maxLength={3000}
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1E90FF] focus:bg-white transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs font-semibold text-red-600 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1E90FF] hover:bg-[#187BCD] disabled:bg-blue-400 text-white font-bold text-base py-3.5 sm:py-4 px-6 rounded-2xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-6 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </FadeIn>


          {/* ==================== RIGHT COLUMN: Get in Touch ==================== */}
          <FadeIn
            direction="up"
            duration={0.5}
            delay={0.1}
            className="lg:col-span-5 bg-[#F0F6FF] rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-[#051332]">
                Get in Touch
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Choose the most convenient way to reach us.
              </p>
            </div>

            {/* Featured Schedule Call Banner */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-blue-200/90 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1E90FF] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#051332]">Schedule a 30-Min Meeting</h3>
                  <p className="text-xs text-slate-500 font-medium">Pick a slot directly on Calendly</p>
                </div>
              </div>
              <BookCallButton variant="primary" size="md" fullWidth label="Book a Call Now" />
            </div>

            <div className="space-y-5">
              {/* Item 1: Call Us */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-[#1E90FF] shrink-0 mt-0.5 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#051332]">Call Us</h4>
                  <a
                    href="tel:+919019724365"
                    className="text-sm font-bold text-[#1E90FF] hover:underline block"
                  >
                    +91 90197 24365
                  </a>
                </div>
              </div>

              {/* Item 2: WhatsApp Us */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5 shadow-sm">
                  <svg className="w-5 h-5 fill-[#25D366]" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#051332]">WhatsApp Us</h4>
                  <a
                    href="https://wa.me/919019724365?text=Hello%20The%20Co%20HR%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-600 hover:underline block"
                  >
                    +91 90197 24365
                  </a>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">
                    Chat directly with our team on WhatsApp.
                  </p>
                </div>
              </div>

              {/* Item 3: Email Us */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-[#1E90FF] shrink-0 mt-0.5 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#051332]">Email Us</h4>
                  <a
                    href="mailto:info@thecohr.com"
                    className="text-sm font-bold text-[#1E90FF] hover:underline block"
                  >
                    info@thecohr.com
                  </a>
                </div>
              </div>

              {/* Item 4: Visit Us */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-[#1E90FF] shrink-0 mt-0.5 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#051332]">Visit Us</h4>
                  <p className="text-xs font-semibold text-slate-700 mt-0.5">
                    The Co HR Private Limited
                  </p>
                  <p className="text-xs font-medium text-slate-500">
                    Pranava Business Park, 7th Floor, Kondapur, Hyderabad, Telangana
                  </p>
                  <a
                    href="https://maps.google.com/?q=Pranava+Business+Park,+Kondapur,+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1E90FF] hover:underline mt-1"
                  >
                    <span>Get Directions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Item 5: Follow & Connect */}
              <div className="flex items-start gap-4 pt-2 border-t border-blue-100/80">
                <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-[#1E90FF] shrink-0 mt-0.5 shadow-sm">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#051332]">Follow Us & Web</h4>
                  <div className="flex items-center gap-2.5 mt-2 flex-wrap">
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/the-co-hr-1a4842428/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-[#1E90FF] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    </a>
                    {/* X (Twitter) */}
                    <a
                      href="https://x.com/thecohr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-[#0f172a] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                      aria-label="X (Twitter)"
                    >
                      <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/people/TheCo-HR/pfbid0Y9dBJZkUCq9jrpMwukbksVvaF3b7EPD6GvEdWDWLHTAEtzFMZmmxKznuax2S5Gsql/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                      aria-label="Facebook"
                    >
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.79c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12z"/>
                      </svg>
                    </a>
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/thecohr_com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FFB900] via-[#E0040B] to-[#8A00D4] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                      aria-label="Instagram"
                    >
                      <svg className="w-4 h-4 stroke-white fill-none" viewBox="0 0 24 24" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </svg>
                    </a>
                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/919019724365?text=Hello%20The%20Co%20HR%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                      aria-label="WhatsApp"
                    >
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </a>
                    {/* Website / Web */}
                    <a
                      href="https://thecohr.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-[#1E90FF] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                      aria-label="Website"
                    >
                      <Globe className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
