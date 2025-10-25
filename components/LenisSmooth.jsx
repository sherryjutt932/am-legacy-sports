"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);
let globalLenis = null;

const LenisSmooth = () => {
  const lenisRef = useRef(null);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      setTimeout(() => {
        lenisRef.current.scrollTo(0, { immediate: true });
      }, 100);
    }
  }, [pathname]);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // adjust for smoother feel (0.1–0.2)
      smoothWheel: true,
      smoothTouch: true,
    });

    lenisRef.current = lenis;
    globalLenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      globalLenis = null;
    };
  }, []);

  if (!mounted) return null;
  return null;
};

export const getGlobalLenis = () => globalLenis;
export default LenisSmooth;
