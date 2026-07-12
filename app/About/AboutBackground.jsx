import React from 'react'
import Image from 'next/image'

const AboutBackground = () => {
    return (
        <section className="px-6 sm:px-16 md:px-20 w-full flex flex-col justify-between items-center py-16 relative overflow-hidden bg-background">
            {/* Dot Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-40"
                style={{
                    backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-6 lg:gap-10 items-center md:items-stretch relative z-10">
                {/* Left Column (Image) */}
                <div className="w-full max-w-sm md:w-[30%] shrink-0 relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 shadow-xl">
                    <Image
                        src="/Ateeq Mahmoud.jpeg"
                        alt="Ateeq Mahmoud"
                        fill
                        className="object-cover object-top"
                    />
                    {/* Overlay for text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                        <div className="border-l-2 border-[#58C2FB] pl-4">
                            <h4 className="text-white font-medium text-lg mb-1">Ateeq Mahmoud</h4>
                            <p className="text-xs sm:text-sm text-gray">Director | FIFA License Agent</p>
                        </div>
                    </div>
                </div>

                {/* Right Column (Text Card) */}
                <div className="w-full md:w-[70%] rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-4 md:p-6 flex flex-col gap-4 shadow-xl">
                    <h3 className="text-2xl font-medium text-white">Background</h3>
                    <p className="leading-relaxed text-base sm:text-lg">
                        Founded by Ateeq Mahmoud, the firm has been actively
                        involved in structuring cross-border football investments,
                        including strategic partnerships in European football.
                    </p>
                    <p className="leading-relaxed text-base sm:text-lg">
                        We work with private investors, consortiums, and clubs to
                        deliver:
                    </p>
                    <ul className="list-disc list-outside ml-5 space-y-2 text-base sm:text-lg">
                        <li>commercially sound investment structures</li>
                        <li>sustainable football operations</li>
                        <li>long-term value creation through player trading and development</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AboutBackground
