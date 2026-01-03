"use client";

export default function ThemeDebug() {
    return (
        <div className="min-h-screen bg-background text-foreground p-8 space-y-8">
            <h1 className="text-3xl font-bold">Theme Debugger</h1>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Colors</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded bg-background border border-border">
                        <p>bg-background</p>
                        <p className="text-xs opacity-70">Should be Dark Blue (#111827)</p>
                    </div>
                    <div className="p-4 rounded bg-surface border border-border">
                        <p>bg-surface</p>
                        <p className="text-xs opacity-70">Should be slightly lighter (#1f2937)</p>
                    </div>
                    <div className="p-4 rounded bg-primary text-primary-foreground">
                        <p>bg-primary</p>
                        <p className="text-xs opacity-70">Should be Cyan (#22d3ee)</p>
                    </div>
                    <div className="p-4 rounded bg-accent text-accent-foreground">
                        <p>bg-accent</p>
                        <p className="text-xs opacity-70">Should be Lime Green (#a3e635)</p>
                    </div>
                    <div className="p-4 rounded bg-custom-hover text-white">
                        <p>bg-custom-hover</p>
                        <p className="text-xs opacity-70">Should be Teal (#015264)</p>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">CSS Variables</h2>
                <div className="grid grid-cols-1 gap-2 font-mono text-sm">
                    <div className="flex justify-between border-b border-white/10 pb-1">
                        <span>--color-background</span>
                        <span style={{ color: "rgb(var(--color-background))" }}>Sample</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-1">
                        <span>--color-cta-primary</span>
                        <span style={{ color: "rgb(var(--color-cta-primary))" }}>Sample</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-1">
                        <span>--color-accent-secondary</span>
                        <span style={{ color: "rgb(var(--color-accent-secondary))" }}>Sample</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
