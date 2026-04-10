"use client";

import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

const categories = ["All", "Books", "Games", "Digital Tools", "Home Nudges", "Recommended Packs"];

export default function FilterBar() {
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <div className="relative bg-[#F0EEE6]">
            <div className="max-w-7xl mx-auto px-0 md:px-6 pt-8 pb-0 md:pb-8 flex flex-wrap items-center justify-end gap-6">
                {/* Categories */}
                <div className="hidden md:flex gap-3 overflow-x-auto scrollbar-hide no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`whitespace-nowrap px-6 py-2 rounded-full font-jubilat font-normal text-[15px] transition-all border ${
                                activeCategory === cat
                                    ? "bg-[#5EE2A0] text-[#183A39] border-transparent"
                                    : "bg-transparent text-[#183A39] border-[#183A39]/30 hover:border-[#183A39]/60"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Sort / Filter */}
                <div className="flex items-center justify-end gap-3 w-full md:w-auto">
                    <button className="flex items-center justify-center w-12 h-10 bg-[#5EE2A0] text-[#183A39] rounded-full hover:opacity-90 transition-opacity">
                        <SlidersHorizontal size={18} />
                    </button>
                    <button className="flex items-center gap-2 bg-[#5EE2A0] text-[#183A39] px-6 h-10 rounded-full font-jubilat font-normal text-[15px] hover:opacity-90 transition-opacity">
                        <span>sort by</span>
                        <ChevronDown size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
