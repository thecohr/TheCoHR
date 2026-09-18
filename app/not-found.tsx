import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-6 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1E90FF] text-xs font-bold uppercase tracking-wider">
          <Search className="w-3.5 h-3.5" />
          <span>Page Not Found — 404</span>
        </div>

        {/* Big 404 Visual */}
        <div className="relative">
          <h1 className="text-8xl font-black text-slate-200 tracking-tighter select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#051332]">
              Lost in Space?
            </span>
          </div>
        </div>

        {/* Message */}
        <p className="text-sm sm:text-base text-slate-500 font-medium max-w-sm mx-auto leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track to transforming your HR operations.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1E90FF] hover:bg-[#187BCD] text-white font-bold text-sm py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm py-3.5 px-6 rounded-xl transition-all"
          >
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
