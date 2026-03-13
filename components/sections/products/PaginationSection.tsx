"use client";

export default function PaginationSection() {
    return (
        <section className="bg-[#F0EEE6] pb-24">
            <div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-4">
                {[1, 2, 3].map((page) => (
                    <button
                        key={page}
                        className={`w-[29.72px] h-[29.72px] md:w-12 md:h-12 rounded-full flex items-center justify-center font-jubilat font-normal text-[12px] md:text-[18px] transition-all border ${
                            page === 1
                                ? "bg-[#5EE2A0] text-[#183A39] border-transparent"
                                : "bg-transparent text-[#183A39] border-[#183A39]/30 hover:border-[#183A39]/60"
                        }`}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </section>
    );
}
