import Image from "next/image";
import heroTop from "../assets/P3SquaredSE.png";

export default function HeroStatic() {
    return (
        <section id="home" className="relative overflow-hidden bg-[#0B3356] text-white">
            <div className="container mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-24">
                <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Transforming Rural Healthcare
                        <br className="hidden md:block" />
                        with AI + Human Oversight
                    </h1>

                    <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto">
                        Digital eve AI is reshaping medical logistics for underserved
                        communities. We combine machine learning with human intellingence to
                        reduce costs, prevent stockouts, and improve outcomes.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-lg bg-[#5568F2] px-7 py-3 text-sm md:text-base font-semibold shadow-md hover:bg-[#4658D8] transition">
                                Contact Us
                                </a>
                        <a 
                        href="#invest"
                        className="inline-flex items-center justify-center rounded-lg bg-[#27D5E6] px-7 py-3 text-sm md:text-base font-semibold text-[#041023] shadow-md hover:bg-[#1EC4D4] transition">
                            Invest in the Mission
                        </a>
                    </div>
                </div>
                
                <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                    <Image 
                        src={heroTop}
                        alt="Connected rural logistics"
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}