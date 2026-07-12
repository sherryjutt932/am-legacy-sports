import React from 'react';
import StickyButton from '@/components/ui/StickyButton';

const InvestorForm = () => {
    return (
        <section className="px-6 sm:px-16 md:px-20 w-full flex justify-center items-center py-16 relative">
            <div className="w-full max-w-5xl flex flex-col items-center gap-12 relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white">Investor Form</h2>

                <form className="w-full flex flex-col gap-8 items-center max-w-3xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 w-full">
                        {/* Name Field */}
                        <div className="relative w-full">
                            <label className="absolute -top-2.5 left-4 px-1.5 bg-[#0F0F0F] text-sm text-gray-400 font-medium tracking-wide">Name</label>
                            <input
                                type="text"
                                placeholder="John"
                                className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white/50 transition-colors text-lg"
                            />
                        </div>
                        {/* Company Field */}
                        <div className="relative w-full">
                            <label className="absolute -top-2.5 left-4 px-1.5 bg-[#0F0F0F] text-sm text-gray-400 font-medium tracking-wide">Company</label>
                            <input
                                type="text"
                                placeholder="Any Company"
                                className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white/50 transition-colors text-lg"
                            />
                        </div>
                        {/* Capital Range Field */}
                        <div className="relative w-full">
                            <label className="absolute -top-2.5 left-4 px-1.5 bg-[#0F0F0F] text-sm text-gray-400 font-medium tracking-wide">Capital range</label>
                            <input
                                type="text"
                                placeholder="100k"
                                className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white/50 transition-colors text-lg"
                            />
                        </div>
                        {/* Email Field */}
                        <div className="relative w-full">
                            <label className="absolute -top-2.5 left-4 px-1.5 bg-[#0F0F0F] text-sm text-gray-400 font-medium tracking-wide">Email</label>
                            <input
                                type="email"
                                placeholder="john@gmail.com"
                                className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white/50 transition-colors text-lg"
                            />
                        </div>
                    </div>

                    <button type="submit" className="mt-4 outline-none border-none bg-transparent p-0 cursor-pointer">
                        <StickyButton text="Submit" theme="light" />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default InvestorForm;
