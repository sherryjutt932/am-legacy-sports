'use client';

import { useEffect } from "react";
import Loader from "./_components/Loader";
import Hero from "./_components/Hero";
import OurServices from "./_components/OurServices";
import dynamic from "next/dynamic";

// Only lazy-load heavy or interactive sections
const WhatWeDo = dynamic(() => import("./_components/WhatWeDo"), { ssr: true });
const WhyFootball = dynamic(() => import("./_components/WhyFootball"), { ssr: true });
const DealCardLanding = dynamic(() => import("./_components/DealCardLanding"), { ssr: true });
const Team = dynamic(() => import("./_components/Team"), { ssr: true });
const PartnerWithUs = dynamic(() => import("./_components/PartnerWithUs"), { ssr: true });
const Feedback = dynamic(() => import("./_components/Feedback"), { ssr: true });
const Sponsors = dynamic(() => import("./_components/Sponsors"), { ssr: true });

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
      <Sponsors />
      <WhatWeDo />
      <WhyFootball />
      <DealCardLanding />
      <OurServices />
      <Team />
      <PartnerWithUs />
      <Feedback />
    </>
  );
}
