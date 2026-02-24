"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Calculamos cuánto ha escroleado respecto al alto total disponible
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;

            const scrollPercentage = Math.min(
                100,
                Math.max(0, (scrollTop / (documentHeight - windowHeight)) * 100)
            );
            setProgress(scrollPercentage);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Evaluar al montar

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-[4px] z-[100] bg-transparent pointer-events-none">
            <div
                className="h-full bg-accent transition-all duration-150 ease-out shadow-[0_0_12px_rgba(0,229,255,0.8)]"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
