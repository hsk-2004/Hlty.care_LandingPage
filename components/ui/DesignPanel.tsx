"use client";

import { ListTree, Type } from "lucide-react";

interface PropertyRowProps {
    label: string;
    value: string;
}

const PropertyRow = ({ label, value }: PropertyRowProps) => (
    <div className="flex justify-between items-center py-1.5 group cursor-default">
        <span className="text-[#a3a3a3] text-[13px] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            {label}
        </span>
        <span className="text-white text-[13px] font-medium">
            {value}
        </span>
    </div>
);

interface DesignSection {
    title: string;
    icon?: React.ReactNode;
    properties?: { label: string; value: string }[];
    content?: string;
}

interface DesignPanelProps {
    sections: DesignSection[];
    className?: string;
}

export default function DesignPanel({ sections, className = "" }: DesignPanelProps) {
    return (
        <div className={`w-[260px] bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-white/10 font-sans backdrop-blur-md bg-opacity-95 ${className}`}>
            {sections.map((section, sIndex) => (
                <div key={sIndex} className={`p-4 ${sIndex !== sections.length - 1 ? 'border-b border-white/10' : ''}`}>
                    {/* Section Header */}
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-white font-bold text-[14px] flex items-center gap-2">
                            {section.title}
                        </h3>
                        <button className="text-[#a3a3a3] hover:text-white transition-colors">
                            {section.icon || <ListTree size={16} />}
                        </button>
                    </div>

                    {/* Section Content (Text) */}
                    {section.content && (
                        <p className="text-white text-[12px] leading-relaxed font-medium mb-2">
                            {section.content}
                        </p>
                    )}

                    {/* Section Properties */}
                    {section.properties && (
                        <div className="space-y-0.5">
                            {section.properties.map((prop, pIndex) => (
                                <PropertyRow key={pIndex} label={prop.label} value={prop.value} />
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
