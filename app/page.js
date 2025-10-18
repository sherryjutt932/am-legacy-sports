import Hero from "./_components/Hero"
import OurServices from "./_components/OurServices"
import WhatWeDo from "./_components/WhatWeDo"

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