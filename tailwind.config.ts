import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F0EEE6", // Specific cream background requested
                foreground: "#1a3636", // Dark teal/green text
            },
            fontFamily: {
                serif: ["var(--font-serif)", "serif"],
                sans: ["GT Haptik", "GT-Haptik-Medium", "GT-Haptik-Bold", "var(--font-sans)", "Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
