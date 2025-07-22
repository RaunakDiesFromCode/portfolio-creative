import React, { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const imgRef = useRef(null);

    const aboutText = `Obsessed with creating experiences that look sharp and feel even better—whether that’s a snappy frontend in React, a slick UI mockup in Figma, or a cinematic edit in DaVinci. I blend design and code like distortion and delay—sharp, intentional, and unforgettable.
What I bring to the table:
🎨 Designer. Frontend dev. Video editor.
🎸 Shredding guitar riffs and clean UIs with equal precision.
💻 Strong in C/C++/Java/Python.
🌐 Frontend-focused, backend-capable.
🛠 Open-source junkie + dev mentor.
Whether I’m designing, coding, or teaching, I’m here to build, learn, and level others up.`;

    useGSAP(() => {
        gsap.to("#about", {
            scale: 0.95,
            scrollTrigger: {
                trigger: "#about",
                start: "bottom 80%",
                end: "bottom 20%",
                scrub: true,
                markers: false,
            },
            ease: "power1.inOut",
        });

        gsap.set(imgRef.current, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.to(imgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 2,
            ease: "power4.out",
            scrollTrigger: { trigger: imgRef.current },
        });
    });

    return (
        <section id="about" className="min-h-screen bg-black rounded-b-4xl">
            <AnimatedHeaderSection
                subTitle={"aiming to look at my designs and scream"}
                title={"That's me!"}
                text={"aesthetics and algorithms...\nwhats the diffrence?"}
                textColor={"text-white"}
                widthScrollTrigger
            />
            <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
                <img
                    ref={imgRef}
                    src="images/man.png"
                    alt="man"
                    className="w-md rounded-3xl"
                />
                <AnimatedTextLines text={aboutText} className={"w-full"} />
            </div>
        </section>
    );
};

export default About;
