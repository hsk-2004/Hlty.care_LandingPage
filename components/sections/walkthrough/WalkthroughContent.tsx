"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

interface WalkthroughContentProps {
    onClose?: () => void;
}

interface ModalWrapperProps {
    children: React.ReactNode;
    centered?: boolean;
    onClose?: () => void;
}

const ModalWrapper = ({ children, centered = false, onClose }: ModalWrapperProps) => (
    <div className="fixed inset-0 z-[200] bg-black/40 flex items-center justify-center p-4">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#E4DCCD] rounded-[32px] md:rounded-[40px] p-6 lg:p-8 flex items-center justify-center w-full max-w-[800px] min-h-[500px] md:min-h-[600px] shadow-2xl relative"
        >
            {/* Thin inner border line */}
            <div className="absolute inset-3 md:inset-5 border border-[#BEB4A5]/60 rounded-[20px] md:rounded-[32px] pointer-events-none" />
            
            {onClose && (
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-8 right-8 text-[#183A39]/60 hover:text-[#183A39] transition-colors z-10"
                >
                    <X size={24} />
                </button>
            )}
            
            {/* Inner White Box */}
            <div className={`bg-[#F4F1EA] rounded-[24px] w-full max-w-[480px] p-8 md:p-10 flex flex-col shadow-sm relative z-10 ${centered ? 'items-center justify-center text-center space-y-8' : 'space-y-8'}`}>
                {children}
            </div>
        </motion.div>
    </div>
);

export default function WalkthroughContent({ onClose }: WalkthroughContentProps) {
    const [view, setView] = useState<"role" | "grade" | "goals" | "time" | "confirmation">("role");
    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
    const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const roles = [
        "School admin / teacher / principal",
        "Healthcare provider",
        "Parent / caregiver"
    ];

    const grades = ["K-2", "3-5", "6-8", "9-12", "Mixed"];
    
    const goals = [
        "See how playshops work",
        "Explore activity sheets",
        "Integrate into curriculum",
        "Understand teacher training"
    ];

    const times = [
        "Tomorrow, 10 AM",
        "Tomorrow, 2 PM"
    ];

    const toggleItem = (list: string[], setList: (val: string[]) => void, item: string) => {
        setList(list.includes(item) ? list.filter(i => i !== item) : [...list, item]);
    };

    if (view === "role") {
        return (
            <ModalWrapper onClose={onClose}>
                <div className="space-y-6 w-full">
                    <div className="space-y-1 text-left">
                        <h2 className="font-jubilat text-[22px] md:text-[24px] text-[#183A39] leading-tight">
                            Who&apos;s requesting the walkthrough?
                        </h2>
                        <p className="font-jubilat text-[14px] md:text-[15px] text-[#A69C8D]">
                            We&apos;ll tailor the session to your specific needs.
                        </p>
                    </div>

                    <div className="space-y-3">
                        {roles.map((role) => (
                            <label
                                key={role}
                                className={`flex items-center gap-4 p-3 md:p-4 rounded-[24px] border transition-all cursor-pointer ${selectedRole === role
                                    ? 'bg-[#B0E7CC] border-[#183A39] shadow-sm'
                                    : 'bg-transparent border-[#BEB4A5]/60 hover:border-[#BEB4A5]'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="role"
                                    value={role}
                                    checked={selectedRole === role}
                                    onChange={() => setSelectedRole(role)}
                                    className="hidden"
                                />
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selectedRole === role ? 'border-[#5DE2A2] bg-[#5DE2A2]' : 'border-[#BEB4A5]/60'
                                    }`}>
                                    {selectedRole === role && <div className="w-2 h-2 bg-white rounded-full" />}
                                </div>
                                <span className="font-jubilat text-[14px] md:text-[15px] text-[#183A39]">
                                    {role}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <button
                        type="button"
                        disabled={!selectedRole}
                        onClick={(e) => { e.preventDefault(); setView("grade"); }}
                        className={`px-6 md:px-8 h-[40px] md:h-[44px] rounded-[24px] font-haptik font-bold text-[13px] tracking-wider transition-all shadow-sm ${selectedRole
                            ? 'bg-[#E4DCCD] text-[#183A39] hover:bg-[#DED9CF]'
                            : 'bg-[#E4DCCD]/50 text-[#183A39]/30 cursor-not-allowed'
                            }`}
                    >
                        CONTINUE
                    </button>
                </div>
            </ModalWrapper>
        );
    }

    if (view === "grade") {
        return (
            <ModalWrapper onClose={onClose}>
                <div className="space-y-6 w-full">
                    <div className="space-y-1 text-left">
                        <h2 className="font-jubilat text-[22px] md:text-[24px] text-[#183A39] leading-tight">
                            What grade level do you work with?
                        </h2>
                        <p className="font-jubilat text-[14px] md:text-[15px] text-[#A69C8D]">
                            Select all that apply.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {grades.map((grade) => (
                            <button
                                key={grade}
                                onClick={() => toggleItem(selectedGrades, setSelectedGrades, grade)}
                                className={`px-6 py-2.5 rounded-3xl border font-jubilat text-[14px] md:text-[15px] transition-all ${selectedGrades.includes(grade)
                                    ? 'bg-[#B0E7CC] border-[#183A39] text-[#183A39] shadow-sm'
                                    : 'bg-transparent border-[#BEB4A5]/60 text-[#183A39]/80 hover:border-[#BEB4A5]'
                                    }`}
                            >
                                {grade}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={(e) => { e.preventDefault(); setView("role"); }}
                        className="px-6 md:px-8 h-[40px] md:h-[44px] rounded-[24px] font-haptik font-bold text-[13px] tracking-wider border border-[#BEB4A5]/60 text-[#183A39]/80 hover:bg-black/5 transition-all"
                    >
                        BACK
                    </button>
                    <button
                        type="button"
                        disabled={selectedGrades.length === 0}
                        onClick={(e) => { e.preventDefault(); setView("goals"); }}
                        className={`px-6 md:px-8 h-[40px] md:h-[44px] rounded-[24px] font-haptik font-bold text-[13px] tracking-wider transition-all shadow-sm ${selectedGrades.length > 0
                            ? 'bg-[#E4DCCD] text-[#183A39] hover:bg-[#DED9CF]'
                            : 'bg-[#E4DCCD]/50 text-[#183A39]/30 cursor-not-allowed'
                            }`}
                    >
                        CONTINUE
                    </button>
                </div>
            </ModalWrapper>
        );
    }

    if (view === "goals") {
        return (
            <ModalWrapper onClose={onClose}>
                <div className="space-y-6 w-full">
                    <div className="space-y-1 text-left">
                        <h2 className="font-jubilat text-[22px] md:text-[24px] text-[#183A39] leading-tight">
                            What are you hoping to get out of this?
                        </h2>
                        <p className="font-jubilat text-[14px] md:text-[15px] text-[#A69C8D]">
                            Pick everything that resonates.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {goals.map((goal) => (
                            <button
                                key={goal}
                                onClick={() => toggleItem(selectedGoals, setSelectedGoals, goal)}
                                className={`px-5 py-2.5 rounded-3xl border font-jubilat text-[14px] md:text-[15px] transition-all ${selectedGoals.includes(goal)
                                    ? 'bg-[#B0E7CC] border-[#183A39] text-[#183A39] shadow-sm'
                                    : 'bg-transparent border-[#BEB4A5]/60 text-[#183A39]/80 hover:border-[#BEB4A5]'
                                    }`}
                            >
                                {goal}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={(e) => { e.preventDefault(); setView("grade"); }}
                        className="px-6 md:px-8 h-[40px] md:h-[44px] rounded-[24px] font-haptik font-bold text-[13px] tracking-wider border border-[#BEB4A5]/60 text-[#183A39]/80 hover:bg-black/5 transition-all"
                    >
                        BACK
                    </button>
                    <button
                        type="button"
                        disabled={selectedGoals.length === 0}
                        onClick={(e) => { e.preventDefault(); setView("time"); }}
                        className={`px-6 md:px-8 h-[40px] md:h-[44px] rounded-[24px] font-haptik font-bold text-[13px] tracking-wider transition-all shadow-sm ${selectedGoals.length > 0
                            ? 'bg-[#E4DCCD] text-[#183A39] hover:bg-[#DED9CF]'
                            : 'bg-[#E4DCCD]/50 text-[#183A39]/30 cursor-not-allowed'
                            }`}
                    >
                        CONTINUE
                    </button>
                </div>
            </ModalWrapper>
        );
    }

    if (view === "time") {
        return (
            <ModalWrapper onClose={onClose}>
                <div className="space-y-6 w-full">
                    <div className="space-y-1 text-left">
                        <h2 className="font-jubilat text-[22px] md:text-[24px] text-[#183A39] leading-tight">
                            Pick a time that works for you
                        </h2>
                        <p className="font-jubilat text-[14px] md:text-[15px] text-[#A69C8D]">
                            15-min sessions over video call. All times in your timezone.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {times.map((time) => (
                            <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`px-5 py-2.5 rounded-3xl border font-jubilat text-[14px] md:text-[15px] transition-all ${
                                    selectedTime === time
                                    ? 'bg-[#B0E7CC] border-[#183A39] text-[#183A39] shadow-sm'
                                    : 'bg-transparent border-[#BEB4A5]/60 text-[#183A39]/80 hover:border-[#BEB4A5]'
                                }`}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={(e) => { e.preventDefault(); setView("goals"); }}
                        className="px-6 md:px-8 h-[40px] md:h-[44px] rounded-[24px] font-haptik font-bold text-[13px] tracking-wider border border-[#BEB4A5]/60 text-[#183A39]/80 hover:bg-black/5 transition-all"
                    >
                        BACK
                    </button>
                    <button
                        type="button"
                        disabled={!selectedTime}
                        onClick={(e) => { e.preventDefault(); setView("confirmation"); }}
                        className={`px-6 md:px-8 h-[40px] md:h-[44px] rounded-[24px] font-haptik font-bold text-[13px] tracking-wider transition-all shadow-sm ${
                            selectedTime
                            ? 'bg-[#E4DCCD] text-[#183A39] hover:bg-[#DED9CF]'
                            : 'bg-[#E4DCCD]/50 text-[#183A39]/30 cursor-not-allowed'
                        }`}
                    >
                        CONTINUE
                    </button>
                </div>
            </ModalWrapper>
        );
    }

    if (view === "confirmation") {
        return (
            <ModalWrapper centered onClose={onClose}>
                <div className="space-y-4">
                    <h2 className="font-jubilat text-[22px] md:text-[24px] text-[#183A39] leading-tight">
                        You&apos;re booked!
                    </h2>
                    <p className="font-jubilat text-[14px] md:text-[15px] text-[#183A39]/80 leading-relaxed max-w-sm mx-auto">
                        Your 15-min walkthrough is confirmed for {selectedTime || 'Friday, 11 AM'}. Check your inbox for the calendar invite and a prep guide.
                    </p>
                </div>

                <button 
                    type="button"
                    onClick={(e) => { e.preventDefault(); onClose?.(); }}
                    className="px-8 md:px-10 h-[40px] md:h-[44px] rounded-[24px] bg-[#E4DCCD] text-[#183A39] font-haptik font-bold text-[13px] tracking-wider hover:bg-[#DED9CF] transition-all shadow-sm"
                >
                    ADD TO CALENDAR
                </button>
            </ModalWrapper>
        );
    }

    return null;
}
