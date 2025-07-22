import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const ServiceSummary = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to("#title-service-1", {
            xPercent: 20,
            scrollTrigger: {
                trigger: "#title-service-1",
                scrub: true,
            },
        });
        gsap.to("#title-service-2", {
            xPercent: -30,
            scrollTrigger: {
                trigger: "#title-service-2",
                scrub: true,
            },
        });
        gsap.to("#title-service-3", {
            xPercent: 40,
            scrollTrigger: {
                trigger: "#title-service-3",
                scrub: true,
            },
        });
        gsap.to("#title-service-4", {
            xPercent: -60,
            scrollTrigger: {
                trigger: "#title-service-4",
                scrub: true,
            },
        });
    }, []);

    return (
        <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-24 contact-text-responsive">
            <div id="title-service-1">
                <p>Photo Editing</p>
            </div>
            <div
                id="title-service-2"
                className="flex items-center justify-center gap-3 translate-x-16"
            >
                <p className="font-normal">WebDv</p>
                <div className="w-10 h-1 md:w-32 bg-gold" />
                <p>Photoshop</p>
            </div>
            <div
                id="title-service-3"
                className="flex items-center justify-center gap-3 -translate-x-48"
            >
                <p className="italic">Resolve</p>
                <div className="w-10 h-1 md:w-32 bg-gold" />
                <p className="italic">Figma</p>
                <div className="w-10 h-1 md:w-32 bg-gold" />
                <p>Frontend</p>
            </div>
            <div
                id="title-service-4"
                className="flex items-center justify-center gap-3 translate-x-48"
            >
                <p>3D</p>
                <div className="w-10 h-1 md:w-32 bg-gold" />
                <p className="italic">UI/UX</p>
                <div className="w-10 h-1 md:w-32 bg-gold" />
                <p>Branding</p>
            </div>
        </section>
    );
};

export default ServiceSummary;
