import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const Contact = ({ mouseGoBigDivs,contactEmailRef }) => {
    const { pathname } = useLocation();

    const contactMainRef = useRef();
    const borderRef = useRef();

    useGSAP(() => {
        gsap.to(borderRef.current, {
            scrollTrigger: {
                trigger: contactMainRef.current,
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
                // markers: true,
            },
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            ease: "power2.inOut",
        });
    }, []);

    return (
        <section
            ref={contactMainRef}
            className="w-full min-h-[90vh] sm:min-h-[95vh] md:min-h-screen h-full px-3.5 md:px-[5vw] lg:px-[8vw] relative z-30 text-color-primary flex justify-end items-center flex-col pb-[1vw] pt-[8vw]"
        >
            <div className="w-full h-[70vh] sm:h-[75vh] flex flex-col justify-center items-center relative">
                <div
                    ref={borderRef}
                    className="w-full h-full border border-color-third absolute top-0 left-0 rounded-4xl opacity-0 pointer-events-none scale-x-[1.2] scale-y-[1.2] origin-bottom"
                />
                <p className="text-[8vw] sm:text-[6vw] md:text-[4vw] xl:text-[3vw] text-center font-font4 tracking-[1px]">
                    Let's create magic together
                </p>
                <h2 ref={contactEmailRef} className="text-[11.2vw] md:text-[9vw] xl:text-[7vw] text-center leading-[100%] tracking-[-0.2vw] font-font1 text-color-primary hover:text-color-fourth transform-color easing cursor-pointer">
                    hello@gmail.com
                </h2>
                <div className="text-2xl leading-[100%] grid grid-cols-2 sm:grid-cols-4 flex-wrap gap-y-3 gap-x-5 sm:gap-6 md:gap-6 lg:gap-8 mt-8 sm:mt-15 font-font1 px-8">
                    {["Facebook", "Github", "Linkedin", "Whatsapp"].map(
                        (title, idx) => {
                            return (
                                <a
                                    ref={(el) => {          
                                        if (el)
                                            mouseGoBigDivs.current[5 + idx] =
                                                el;
                                    }}
                                    key={idx}
                                    href=""
                                    className="flex items-center col-span-1 gap-4 justify-center font-font1 text-color-primary text-lg sm:text-xl w-max mx-auto group relative pl-5.5 md:pl-7 p-0 md:p-2"
                                >
                                    <span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full flex flex-col justify-center items-center bg-color-fourth group-hover:scale-[2.6] easing absolute left-0 top-1/2 -translate-y-1/2 -rotate-45">
                                        <img
                                            className="w-[80%] h-[80%] opacity-0 transition-all group-hover:opacity-100 "
                                            src="/Images/Icons/arrow.svg"
                                            alt=""
                                        />
                                    </span>
                                    <div className="flex flex-col h-5 leading-[100%]  overflow-hidden">
                                        <span className="group-hover:-translate-y-[100%] easing">
                                            {title}
                                        </span>
                                        <span className="group-hover:-translate-y-[100%] easing text-color-fourth">
                                            {title}
                                        </span>
                                    </div>
                                </a>
                            );
                        }
                    )}
                </div>
            </div>
            <div className="flex items-center gap-4 text-xs sm:text-sm lg:text-base mt-5 md:mt-10 mb-5 font-font1">
                <div className="relative w-[8px] h-[8px] rounded-full bg-[#9EFE88]">
                    <span className="pulse absolute w-full h-full bg-[#9EFE88] rounded-full opacity-80" />
                </div>
                Available for a full-time position{" "}
            </div>
        </section>
    );
};

export default Contact;
