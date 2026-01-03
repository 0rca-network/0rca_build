"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function ParallaxBackground() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Map scroll progress (0 to 1) to vertical movement
    // Reduced intensity to minimize rendering workload and ensure coverage
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

    return (
        <div ref={ref} className="fixed inset-0 w-full h-full -z-50 overflow-hidden pointer-events-none">
            <motion.div
                style={{ y, willChange: "transform" }}
                className="relative w-full h-[150%] -top-[25%]"
            >
                <Image
                    src="/Screenshot 2026-01-04 030306.png"
                    alt="Background"
                    fill
                    priority
                    unoptimized
                    className="object-cover opacity-40"
                    quality={100}
                />
                {/* Overlay gradient to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/90" />
            </motion.div>
        </div>
    );
}
