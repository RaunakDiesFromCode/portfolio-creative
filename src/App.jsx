import React, { useEffect, useState } from "react";
// @ts-ignore
import ReactLenis from "lenis/react";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import { useProgress } from "@react-three/drei";

const App = () => {
    const { progress } = useProgress();
    const [isReady, setIsReady] = useState(false);

    // When loading hits 100, start the slide-up
    useEffect(() => {
        if (progress === 100) {
            setIsReady(true);
        }
    }, [progress]);

    return (
        <ReactLenis
            root
            className="relative w-screen min-h-screen overflow-x-auto"
        >
            {!isReady && (
                <div
                    className={`fixed inset-0 z-[999] flex items-center justify-center bg-black text-white transform transition-transform duration-1000 ${
                        isReady ? "-translate-y-full" : "translate-y-0"
                    }`}
                >
                    <h1 className="text-9xl font-black tracking-widest">Hi</h1>
                    <span className="absolute bottom-4 right-6 text-lg font-light text-white/60">
                        {Math.floor(progress)}%
                    </span>
                </div>
            )}

            <div
                className={`${
                    isReady ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500`}
            >
                <Navbar />
                <Hero />
                <ServiceSummary />
                <Services />
                <About />
                <Works />
                <ContactSummary />
                <Contact />
            </div>
        </ReactLenis>
    );
};

export default App;
