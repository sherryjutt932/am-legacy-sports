"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./ui/Button";
import Hamburger from "./ui/Hamburger";
import Sidebar from "./ui/Sidebar";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionTemplate,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { getGlobalLenis } from "@/components/LenisSmooth";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";

// ---------------------- Constants ----------------------
const NavItems = [
  { id: "home", label: "Home", src: "/" },
  { id: "about", label: "About", src: "/About" },
  { id: "investment", label: "Investment", src: "/Investment" },
  { id: "services", label: "Services", src: "/Services" },
];

// ---------------------- Component ----------------------
const Header = () => {
  const [activeTab, setActiveTab] = useState("/");
  const [hoverTab, setHoverTab] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const transition = { type: "spring", stiffness: 300, damping: 30 };
  const { scrollY } = useScroll();

  // Delay scroll transforms after page load to prevent flicker
  const [scrollReady, setScrollReady] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setScrollReady(true), 300);
    return () => clearTimeout(timeout);
  }, [pathname]);

  // Framer Motion transforms
  const borderOpacity = useTransform(scrollY, [0, 200], [0, 0.1]);
  const backgroundOpacity = useTransform(scrollY, [0, 200], [0, 0.1]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.98]);
  const shadow = useTransform(
    scrollY,
    [0, 200],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 2px 10px rgba(0,0,0,0.05)"]
  );

  // ✅ Always call hooks
  const borderTemplate = useMotionTemplate`rgba(255, 255, 255, ${borderOpacity})`;
  const backgroundTemplate = useMotionTemplate`rgba(217, 217, 217, ${backgroundOpacity})`;

  // Use safe fallback values when not ready
  const border = scrollReady ? borderTemplate : "rgba(255, 255, 255, 0)";
  const background = scrollReady ? backgroundTemplate : "transparent";

  // Lenis scroll locking
  useEffect(() => {
    const lenis = getGlobalLenis();
    if (isOpen) {
      document.body.classList.add("body-no-scroll");
      lenis?.stop();
    } else {
      document.body.classList.remove("body-no-scroll");
      lenis?.start();
    }
    return () => {
      document.body.classList.remove("body-no-scroll");
      lenis?.start();
    };
  }, [isOpen]);

  // Handlers
  const handleNavToggle = () => setIsOpen((prev) => !prev);
  const handleNavClose = () => setIsOpen(false);

  const isLinkActive = (src) => {
    if (src === "/") return pathname === src;
    return pathname.toLowerCase().startsWith(src.toLowerCase());
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-[100] pointer-events-none px-con flex justify-between items-center whitespace-nowrap py-8">
      {/* Left - Logo */}
      <Link href="/" className="pointer-events-auto cursor-pointer">
        <Image
          src="/logo-full.svg"
          alt="brandscore"
          width={400}
          height={400}
          className="h-[4rem] w-auto"
        />
      </Link>

      {/* Center - Navigation */}
      <motion.nav
        onMouseLeave={() => {
          setTimeout(() => setHoverTab(activeTab), 300);
        }}
        style={{
          borderColor: border,
          backgroundColor: background,
          scale: scrollReady ? scale : 1,
          boxShadow: scrollReady ? shadow : "none",
        }}
        className="max-sm:hidden pointer-events-auto fixed top-16 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full p-2 z-50 backdrop-blur-sm border transition-colors duration-300"
      >
        {NavItems.map((item) => {
          const linkActive = isLinkActive(item.src);
          return (
            <Link
              prefetch={true}
              href={item.src}
              key={item.id}
              style={{
                color: linkActive
                  ? "var(--primary-light)"
                  : hoverTab === item.id
                  ? "var(--dark)"
                  : "#888581",
              }}
              onMouseEnter={() => setHoverTab(item.id)}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "text-lg relative flex items-center justify-center px-4 py-1.5 leading-none font-medium rounded-full transition-colors duration-300 ease-in-out cursor-pointer"
              )}
            >
              <motion.div
                initial={{
                  scale: 0,
                  width: "0",
                }}
                animate={{
                  scale: linkActive ? 1 : 0,
                  width: linkActive ? "auto" : "0",
                }}
                transition={transition}
                className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 z-30 w-0"
              >
                <motion.div
                  transition={transition}
                  className="h-[1px] w-12 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent"
                ></motion.div>
              </motion.div>

              {linkActive && (
                <motion.span
                  layoutId="bubble"
                  className={cn(
                    linkActive ? "shadow-lg shadow-primary/20" : "",
                    "border border-primary/10 absolute inset-0 rounded-full z-20"
                  )}
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--primary) 8%, transparent)",
                  }}
                  transition={transition}
                />
              )}

              <span className="relative z-20">{item.label}</span>
            </Link>
          );
        })}
      </motion.nav>

      {/* Right - Buttons */}
      <div className="pointer-events-auto max-sm:hidden flex items-center gap-2">
        <div className="flex justify-end items-start gap-3">
          <button
            className="p-3 cursor-pointer bg-[#33333310] hover:bg-white/5 active:bg-primary/10 border border-gray/20 rounded-lg transition-all"
            aria-label="Previous feedback"
          >
            <Linkedin className="w-5 h-5" />
          </button>
          <button
            className="p-3 cursor-pointer bg-[#33333310] hover:bg-white/5 active:bg-primary/10 border border-gray/20 rounded-lg transition-all"
            aria-label="Previous feedback"
          >
            <Facebook className="w-5 h-5" />
          </button>
          <button
            className="p-3 cursor-pointer bg-[#33333310] hover:bg-white/5 active:bg-primary/10 border border-gray/20 rounded-lg transition-all"
            aria-label="Previous feedback"
          >
            <Instagram className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile - Hamburger */}
      <button
        className="cursor-pointer pointer-events-auto sm:hidden relative"
        onClick={handleNavToggle}
      >
        <Hamburger active={isOpen} />
      </button>

      {/* Sidebar (mobile menu) */}
      <AnimatePresence mode="sync">
        {isOpen && <Sidebar handleClose={handleNavClose} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
