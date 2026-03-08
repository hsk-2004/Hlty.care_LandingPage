"use client";

import { motion } from "framer-motion";

export default function SolutionSection() {
    return (
        <section className="py-20 px-6 bg-[#183A39] text-[#F0EEE6]">
            <div className="max-w-5xl mx-auto text-center space-y-12">
                <h2 className="font-serif text-[28px] md:text-[42px]">Our Approach</h2>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                    {[
                        { title: "Natural Play", desc: "No fixed outcomes, just exploration." },
                        { title: "Shared Spaces", desc: "Building communities, not just classes." },
                        { title: "Lasting Health", desc: "Habits that grow with the child." }
                    ].map((item, i) => (
                        <div key={i} className="p-6 border border-white/10 rounded-xl">
                            <h3 className="font-serif text-[20px] mb-2">{item.title}</h3>
                            <p className="opacity-70 text-[15px]">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
