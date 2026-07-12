import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import StickyButton from '@/components/ui/StickyButton'
import AnimatedShinyText from '@/components/ui/animated-shiny-text'

const CurrentOpportunities = () => {
    return (
        <section className="px-6 sm:px-16 md:px-20 w-full flex flex-col justify-center items-center gap-12 py-20 relative overflow-hidden bg-background">
            {/* Dot Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-40"
                style={{
                    backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="relative">
                        <AnimatedShinyText>Current Opportunities</AnimatedShinyText>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-[3.5rem] font-medium leading-tight text-white max-w-4xl">
                        Scandinavian Club Investment Opportunity
                    </h2>
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 w-full mt-4">
                    {/* Left: Map Image */}
                    <div className="w-full max-w-sm md:max-w-lg shrink-0 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#020512] flex items-center justify-center border border-white/5 shadow-2xl">
                        <Image
                            src="/map.png"
                            alt="Scandinavia Map"
                            fill
                            className="object-contain p-6 md:p-10"
                        />
                    </div>

                    {/* Right: Info List */}
                    <div className="flex flex-col gap-8 w-full max-w-md">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
                                <Image src="/tabler-icon-building-skyscraper.svg" alt="League" width={26} height={26} className="opacity-80" />
                            </div>
                            <p className="text-gray-400 text-lg sm:text-xl">league: <span className="text-white font-medium">Norway</span></p>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
                                <Image src="/tabler-icon-briefcase.svg" alt="Status" width={26} height={26} className="opacity-80" />
                            </div>
                            <p className="text-gray-400 text-lg sm:text-xl">Status: <span className="text-white font-medium">Active</span></p>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
                                <Image src="/tabler-icon-puzzle.svg" alt="Structure" width={26} height={26} className="opacity-80" />
                            </div>
                            <p className="text-gray-400 text-lg sm:text-xl">Structure: <span className="text-white font-medium">Equity investment</span></p>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
                                <Image src="/tabler-icon-building-skyscraper.svg" alt="Focus" width={26} height={26} className="opacity-80" />
                            </div>
                            <p className="text-gray-400 text-lg sm:text-xl">Focus: <span className="text-white font-medium">Stabilization + player trading</span></p>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="mt-6">
                    <Link href="#contact">
                        <StickyButton
                            text="Request Confidential Information"
                            theme="light"
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CurrentOpportunities
