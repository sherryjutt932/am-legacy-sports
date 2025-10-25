'use client';

import { useEffect } from "react";
import Loader from "./_components/Loader";
import Hero from "./_components/Hero";
import OurServices from "./_components/OurServices";
import dynamic from "next/dynamic";

// Only lazy-load heavy or interactive sections
const WhatWeDo = dynamic(() => import("./_components/WhatWeDo"), { ssr: true });
const Stats = dynamic(() => import("./_components/Stats"), { ssr: true });
const Team = dynamic(() => import("./_components/Team"), { ssr: true });
const Partners = dynamic(() => import("./_components/Partners"), { ssr: true });
const Feedback = dynamic(() => import("./_components/Feedback"), { ssr: true });

export default function Home() {
  useEffect(() => {
    // Preload in idle time for smoothness
    const preloadModules = () => {
      import("./_components/WhatWeDo");
      import("./_components/Stats");
      import("./_components/Team");
      import("./_components/Partners");
      import("./_components/Feedback");
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(preloadModules);
    } else {
      setTimeout(preloadModules, 1000);
    }
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
    </>
  );
}
