'use client'

import Loader from "./_components/Loader";
import { useEffect } from "react";
import Hero from "./_components/Hero";
import OurServices from "./_components/OurServices";
import dynamic from "next/dynamic";

// Dynamically imported components (lazy + preloading)
const WhatWeDo = dynamic(() => import("./_components/WhatWeDo"), { ssr: false });
const Stats = dynamic(() => import("./_components/Stats"), { ssr: false });
const Team = dynamic(() => import("./_components/Team"), { ssr: false });
const Partners = dynamic(() => import("./_components/Partners"), { ssr: false });
const Feedback = dynamic(() => import("./_components/Feedback"), { ssr: false });
const Marquee = dynamic(() => import("./_components/ui/Marquee"), { ssr: false });

export default function Home() {
  useEffect(() => {
    // Start preloading dynamic components as soon as page is hydrated
    const preloadModules = async () => {
      import("./_components/WhatWeDo");
      import("./_components/Stats");
      import("./_components/Team");
      import("./_components/Partners");
      import("./_components/Feedback");
      import("./_components/ui/Marquee");
    };

    // Prefetch when user starts scrolling (not immediately)
    const onScroll = () => {
      preloadModules();
      window.removeEventListener("scroll", onScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Loader />
      <Hero />
      <OurServices />
      <WhatWeDo />
      <Stats />
      <Team />
      <Partners />
      <Feedback />
      <Marquee direction="left" speed={0.7} />
    </>
  );
}
