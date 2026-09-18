"use client";

import { useState, useEffect } from "react";
import { WifiOff, Wifi, RefreshCw } from "lucide-react";

export function NetworkStatus() {
  const [isOffline, setIsOffline] = useState(() => {
    if (typeof window !== "undefined") {
      return !navigator.onLine;
    }
    return false;
  });
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {

    const handleOffline = () => {
      setIsOffline(true);
      setShowReconnected(false);
    };

    const handleOnline = () => {
      setIsOffline(false);
      setShowReconnected(true);
      const timer = setTimeout(() => {
        setShowReconnected(false);
      }, 4000);
      return () => clearTimeout(timer);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  if (!isOffline && !showReconnected) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {isOffline && (
        <div className="bg-amber-600 text-white text-xs font-bold px-4 py-2 text-center flex items-center justify-center gap-2 shadow-md pointer-events-auto animate-slideDown">
          <WifiOff className="w-4 h-4 shrink-0 animate-pulse" />
          <span>You are currently offline. Please check your internet connection.</span>
          <button
            onClick={() => window.location.reload()}
            className="ml-2 underline hover:text-amber-200 transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <RefreshCw className="w-3 h-3" /> Retry
          </button>
        </div>
      )}

      {!isOffline && showReconnected && (
        <div className="bg-emerald-600 text-white text-xs font-bold px-4 py-2 text-center flex items-center justify-center gap-2 shadow-md pointer-events-auto animate-slideDown">
          <Wifi className="w-4 h-4 shrink-0" />
          <span>Internet connection restored. You are back online!</span>
        </div>
      )}
    </div>
  );
}
