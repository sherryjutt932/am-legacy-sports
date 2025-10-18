'use client'

import dynamic from "next/dynamic";
import Hero from "./_components/Hero"

const OurServices = dynamic(() =>
  import("./_components/OurServices").then(),
  { ssr: false }
);
const WhatWeDo = dynamic(() =>
  import("./_components/WhatWeDo").then(),
  { ssr: false }
);

const Home = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <WhatWeDo />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </>
  )
}

export default Home