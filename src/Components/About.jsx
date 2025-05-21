import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const About = ({ mouseGoBigDivs }) => {
    const aboutMainRef = useRef();
    const introRef = useRef();
    useGSAP(() => {
        const aboutTextTl = gsap.timeline({
            ease: "power4.inOut",
            scrollTrigger: {
                trigger: ".about",
                start: "top 90%",
                end: "bottom 70%",
                scrub: true,
                // markers: true,
            },
        });
        aboutTextTl.fromTo(
            ".text",
            {
                color: "#3a3237",
                y: 100,
            },
            {
                color: "#F0DADA",
                y: 0,
                stagger: 0.05,
            },
            "a"
        );
    }, []);

    return (
        <section
            ref={aboutMainRef}
            className="about w-full h-auto px-3.5 md:px-[5vw] lg:px-[4vw] relative pt-20 sm:pt-[14vw] md:pt-[8vw] mb-55  sm:mb-[20vw] lg:mb-[16vw] xl:mb-[14vw]"
        >
            <div
                ref={introRef}
                className=" w-full h-full flex justify-center items-center gap-10"
            >
                <div className=" text-[25px] sm:text-[4vw] md:text-[3.6vw] lg:text-[3.2vw] xl:text-[2.8vw] 2xl:text-[2.5vw] w-full md:w-[82%] lg:w-[76%] xl:w-[68%] 2xl:w-[64%] font-font1 overflow-hidden leading-[130%]">
                    {"I'm Mejbaul Alom Sojib, a Frontend Developer from Bogura, Bangladesh, with 1.5 years of experience building responsive, animated interfaces using React, Tailwind CSS, GSAP, and Framer Motion. I focus on clean code, smooth interactions, and creating visually engaging, user-friendly web experiences."
                        .split("")
                        .map((c, i) => {
                            return (
                                <span
                                    key={i}
                                    className={`text select-none ${
                                        i == 0
                                            ? "ml-0 sm:ml-[12vw] lg:ml-[12vw] xl:ml-[12vw] 2xl:ml-[8.8vw]"
                                            : null
                                    }`}
                                >
                                    {c}
                                </span>
                            );
                        })}
                </div>
            </div>
            <Link
                ref={(el) => (mouseGoBigDivs.current[4] = el)}
                to={"/about"}
                className="flex items-center gap-4 justify-center mt-8 md:mt-12 lg:mt-14 xl:mt-18 font-font1 text-color-primary text-base lg:text-lg 2xl:text-xl w-max mx-auto group relative pl-5.5 md:pl-7 p-2"
            >
                <span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full flex flex-col justify-center items-center bg-color-fourth group-hover:scale-[2.6] easing absolute left-0 top-1/2 -translate-y-1/2 -rotate-45">
                    <img
                        className="w-[80%] h-[80%] opacity-0 transition-all group-hover:opacity-100 "
                        src="/Images/Icons/arrow.svg"
                        alt=""
                    />
                </span>
                <div className="flex flex-col h-[18px] lg:h-[19px] leading-[100%]  overflow-hidden">
                    <span className="group-hover:-translate-y-[100%] easing">
                        Learn more
                    </span>
                    <span className="group-hover:-translate-y-[100%] easing text-color-fourth">
                        Learn more
                    </span>
                </div>
            </Link>
        </section>
    );
};

export default About;
