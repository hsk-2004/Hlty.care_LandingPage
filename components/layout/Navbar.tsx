"use client";

import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50">
            {/* Logo */}
            <div className="flex items-center">
                <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
            </div>

            {/* Menu Icon */}
            <button className="text-foreground p-1 hover:opacity-70 transition-opacity">
                <Menu size={40} strokeWidth={2.5} />
            </button>
        </nav>
    );
}
