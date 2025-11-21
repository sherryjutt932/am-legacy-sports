'use client'

import { useEffect, useState } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

export function useResponsiveStates() {
  const [isMobile, setIsMobile] = useState(null);
  const [isTab, setIsTab] = useState(null);

  useEffect(() => {
    const updateResponsiveStates = () => {
      const width = window.innerWidth;

      setIsMobile(width < 640);
      setIsTab(width < 1370);
    };

    updateResponsiveStates();

    window.addEventListener("resize", updateResponsiveStates);
    return () => window.removeEventListener("resize", updateResponsiveStates); // Cleanup
  }, []);

  return { isMobile, isTab };
}

