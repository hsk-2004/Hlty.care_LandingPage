import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        extend: {
            colors: {
                background: "#F0EEE6", // Specific cream background requested
                foreground: "#1a3636", // Dark teal/green text
            },
            fontFamily: {
                serif: ["var(--font-serif)", "serif"],
                sans: ["jubilat", "GT Haptik", "GT-Haptik-Medium", "GT-Haptik-Bold", "var(--font-sans)", "Inter", "sans-serif"],
                haptik: ["'GT Haptik Medium'", "sans-serif"],
                haptikRotalic: ["'GT Haptik Medium Rotalic'", "sans-serif"],
                jubilat: ["jubilat", "serif"],
            },
        },
    },
    plugins: [],
};
export default config;
