import { useRef } from "react";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const AnimatedHeaderSection = ({
    subTitle,
    title,
    text,
    textColor,
    widthScrollTrigger = false,
}) => {
    const contextRef = useRef(null);
    const headerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: widthScrollTrigger
                ? {
                      trigger: contextRef.current,
                  }
                : null,
        });
        tl.from(contextRef.current, {
            y: "50vh",
            duration: 1,
            ease: "circ.out",
        });
        tl.from(
            headerRef.current,
            {
                y: 200,
                opacity: 0,
                duration: 1,
                ease: "circ.out",
                stagger: 0.3,
            },
            "<+0.2"
        );
    }, []);

    return (
        <div ref={contextRef}>
            <div
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                }}
            >
                <div
                    className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
                    ref={headerRef}
                >
                    <p
                        className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}
                    >
                        {subTitle}
                    </p>
                    <div className="px-10">
                        <h1
                            className={`flex flex-col flex-wrap gap-12 ${textColor} uppercase banner-text-responsive sm:gap-16 md:block`}
                        >
                            {title}
                        </h1>
                    </div>
                </div>
            </div>
            <div className={`relative px-10 ${textColor}`}>
                <div className="absolute inset-x-0 border-t-2" />
                <div className="py-12 sm:py-16 text-end">
                    <AnimatedTextLines
                        className="font-light uppercase value-text-responsive"
                        text={text}
                    />
                </div>
            </div>
        </div>
    );
};

export default AnimatedHeaderSection;
