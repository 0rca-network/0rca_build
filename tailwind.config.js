/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Neon Dark Theme Colors
                background: "rgb(var(--color-background) / <alpha-value>)",
                surface: "rgb(var(--color-surface) / <alpha-value>)",
                "surface-hover": "rgb(var(--color-surface-hover) / <alpha-value>)",

                // CTA Colors
                "cta-primary": "rgb(var(--color-cta-primary) / <alpha-value>)",
                "cta-primary-hover": "rgb(var(--color-cta-primary-hover) / <alpha-value>)",
                "cta-text": "rgb(var(--color-cta-text) / <alpha-value>)",

                // Accent Colors
                "accent-secondary": "rgb(var(--color-accent-secondary) / <alpha-value>)",
                "accent-tertiary": "rgb(var(--color-accent-tertiary) / <alpha-value>)",

                // Text Colors
                "text-primary": "rgb(var(--color-text-primary) / <alpha-value>)",
                "text-secondary": "rgb(var(--color-text-secondary) / <alpha-value>)",
                "text-muted": "rgb(var(--color-text-muted) / <alpha-value>)",

                // Borders
                border: "rgb(var(--color-border) / <alpha-value>)",
                "border-accent": "rgb(var(--color-border-accent) / <alpha-value>)",

                // Status Colors
                success: "rgb(var(--color-success) / <alpha-value>)",
                warning: "rgb(var(--color-warning) / <alpha-value>)",
                error: "rgb(var(--color-error) / <alpha-value>)",
                info: "rgb(var(--color-info) / <alpha-value>)",

                // Standard Shadcn Mappings
                border: "rgb(var(--border) / <alpha-value>)",
                input: "rgb(var(--input) / <alpha-value>)",
                ring: "rgb(var(--ring) / <alpha-value>)",

                // Background & Foreground are already defined above but let's ensure they use the legacy vars if needed, 
                // though 'background' is already mapped to --color-background which is what --background maps to.
                // We'll keep the specific theme mappings for background/surface.

                primary: {
                    DEFAULT: "rgb(var(--primary) / <alpha-value>)",
                    foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
                },
                secondary: {
                    DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
                    foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
                },
                destructive: {
                    DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
                    foreground: "rgb(var(--destructive-foreground) / <alpha-value>)",
                },
                muted: {
                    DEFAULT: "rgb(var(--muted) / <alpha-value>)",
                    foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
                },
                accent: {
                    DEFAULT: "rgb(var(--accent) / <alpha-value>)",
                    foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
                },
                popover: {
                    DEFAULT: "rgb(var(--popover) / <alpha-value>)",
                    foreground: "rgb(var(--popover-foreground) / <alpha-value>)",
                },
                card: {
                    DEFAULT: "rgb(var(--card) / <alpha-value>)",
                    foreground: "rgb(var(--card-foreground) / <alpha-value>)",
                },

                // Custom
                "custom-hover": "rgb(var(--color-custom-hover) / <alpha-value>)",
            },
            boxShadow: {
                "glow-cyan": "var(--shadow-glow-cyan)",
                "glow-lime": "var(--shadow-glow-lime)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
