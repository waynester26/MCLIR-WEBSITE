/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                serif: ["'Cormorant Garamond'", "Georgia", "serif"],
                sans: ["Manrope", "system-ui", "sans-serif"],
                mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
                popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
                primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
                secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
                muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
                accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
                destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                ink: {
                    900: "#050B14",
                    800: "#0A1628",
                    700: "#0F1F36",
                    600: "#1A365D",
                },
                kelp: {
                    700: "#1F3F2E",
                    600: "#2E5C42",
                    500: "#3C7A58",
                    400: "#5A9A78",
                },
                earth: {
                    900: "#1A1412",
                    700: "#5C3A1E",
                    500: "#8B5A2B",
                },
                premium: {
                    400: "#D4AF37",
                    300: "#E6C660",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
