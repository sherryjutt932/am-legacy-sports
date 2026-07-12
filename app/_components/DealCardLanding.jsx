import React from 'react'
import Link from 'next/link'
import StickyButton from '@/components/ui/StickyButton'
import AnimatedShinyText from '@/components/ui/animated-shiny-text'

const DealCardLanding = () => {
    return (
        <section className="px-6 sm:px-16 md:px-20 w-full flex flex-col justify-between items-center gap-16 py-6">
            <div className="flex flex-col md:flex-row gap-6 lg:gap-8 p-8 md:p-12 lg:p-16">
                {/* Left Column */}
                <div className="flex-1 flex flex-col items-start gap-6">
                    <div
                        className="relative"
                    >
                        <AnimatedShinyText>Major Deal</AnimatedShinyText>
                    </div>
                    <h2 className="text-3xl sm:text-[3rem] font-medium leading-normal text-white">
                        European Club Investment Opportunity (Scandinavia)
                    </h2>
                    <div className="mt-4">
                        <Link href="#contact">
                            <StickyButton
                                text="Request Details"
                                theme="light"
                            />
                        </Link>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex-1 flex flex-col gap-6 rounded-2xl border bg-black/5 backdrop-blur-xs p-6">
                    <h3 className="text-xl sm:text-2xl font-medium text-white">Summary</h3>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                        In 2025, AM Legacy Sports Consult — led by our Founder and CEO
                        Ateeq Mahmoud, advised Steadfast Football Holdings Ltd in
                        negotiating a long-term strategic investment partnership with
                        Mjøndalen IF, one of Norway's historic professional clubs.
                    </p>
                    <ul className="list-disc list-outside ml-5 space-y-2 text-sm sm:text-base text-gray-300">
                        <li>Full control of commercial operations</li>
                        <li>Ability for long-term financial planning</li>
                        <li>Talent development structure setup</li>
                        <li>International expansion capabilities</li>
                        <li>Modernization of sporting & commercial operations</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default DealCardLanding