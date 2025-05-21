import { useGSAP } from "@gsap/react";
import { image } from "framer-motion/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useContext, useEffect, useRef, useState } from "react";
import { NewsContext } from "../Utils/Context";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
    const [projectData] = useContext(NewsContext);
    const projectSlideRef = useRef([]);
    // const projects = [
    //     {
    //         id: 1,
    //         title: "Russian mockups",
    //         repeat: 7,
    //         src: "https://images.unsplash.com/photo-1747599309107-20504ba6b8dd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     },
    //     {
    //         id: 2,
    //         title: "Tea flow",
    //         repeat: 12,
    //         src: "https://images.unsplash.com/photo-1741096931224-1306957b38ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
    //     },
    //     {
    //         id: 3,
    //         title: "Future goals",
    //         repeat: 9,
    //         src: "https://plus.unsplash.com/premium_photo-1675075213876-574a2a454dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
    //     },
    //     {
    //         id: 4,
    //         title: "Sapori e natura",
    //         repeat: 8,
    //         src: "https://plus.unsplash.com/premium_photo-1663954136945-4be993b2714f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ3fHx8ZW58MHx8fHx8",
    //     },
    // ];

    useGSAP(() => {
        projectSlideRef.current.forEach((el, i) => {
            const xValue = [0, 2, 4].includes(i) ? "-10%" : "10%";

            gsap.fromTo(
                el,
                { x: 0 },
                {
                    x: xValue,
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom",
                        end: "bottom -50%",
                        scrub: true,
                        // markers: true,
                    },
                }
            );
        });
    }, []);

    //
    const shapeRef = useRef([]);
    const [imageSrc, setimageSrc] = useState();
    const projectHoverOpacityEnter = (index, project) => {
        projectSlideRef.current.forEach((slide, i) => {
            if (index === i) {
                gsap.to(slide, {
                    opacity: 1,
                    ease: "power1.out",
                    duration: 0.3,
                });
            } else if (index !== i) {
                gsap.to(slide, {
                    opacity: 0.25,
                    ease: "power1.out",
                    duration: 0.3,
                });
            }
        });
        // setimageSrc(project.src);
    };

    const projectHoverOpacityLeave = () => {
        projectSlideRef.current.forEach((slide, i) => {
            gsap.to(slide, {
                opacity: 1,
                ease: "power1.out",
                duration: 0.3,
            });
        });
    };

    //
    const workMainRef = useRef();
    const imageCardRef = useRef();
    const imageCardImagesRef = useRef();

    // useGSAP(() => {
    //     const work = workMainRef.current;
    //     const handleMouseMoveFunction = (e) => {
    //         const top = work.getBoundingClientRect().top;
    //         const left = work.getBoundingClientRect().left;
    //         const cardWidth = imageCardRef.current.getBoundingClientRect().width;
    //         const cardHeight = imageCardRef.current.getBoundingClientRect().height;

    //         gsap.set(imageCardRef.current, {
    //             x: e.clientX - left - cardWidth / 2,
    //             y: e.clientY - top - cardHeight / 2,
    //             opacity: 1,
    //         });
    //         gsap.to(imageCardRef.current, {
    //             ease: "power1.out",
    //             x: e.clientX - left - cardWidth / 2,
    //             y: e.clientY - top - cardHeight / 2,
    //         });
    //     };
    //     const handleMouseLeaveFunction = (e) => {
    //         gsap.to(imageCardRef.current, {
    //             ease: "power1.out",
    //             opacity: 0,
    //             duration: 0.3,
    //         });
    //     };

    //     work.addEventListener("mousemove", handleMouseMoveFunction);
    //     work.addEventListener("mouseleave", handleMouseLeaveFunction);
    //     return () => {
    //         work.removeEventListener("mousemove", handleMouseMoveFunction);
    //         work.removeEventListener("mouseleave", handleMouseLeaveFunction);
    //     };
    // }, []);

    return (
        <div
            ref={workMainRef}
            className="w-full text-color-primary px-3.5 md:px-[5vw] lg:px-[4vw] relative mb-[8vw] z-50 overflow-hidden"
        >
            {/*  */}
            <div
                ref={imageCardRef}
                className="w-[20vw] h-[23vw] bg-color-third absolute pointer-events-none select-none opacity-0 z-50"
            >
                <img
                    className="w-full h-full object-cover"
                    ref={imageCardImagesRef}
                    src={imageSrc}
                    alt=""
                />
            </div>
            {/*  */}
            <span className="w-full h-[1px] bg-color-third mb-5 block" />

            {projectData.map((project, i) => (
                <div key={i} className="">
                    <div className="w-[10vw] h-full absolute top-0 left-0 bg-gradient-to-r from-[#0E090D]/50 via-transparent to-transparent z-20" />
                    <div className="w-[10vw] h-full absolute top-0 right-0 bg-gradient-to-r from-transparent via-transparent to-[#0E090D]/50 z-20" />
                    <Link to={'/details/'}
                        className={`flex  ${
                            [0, 2, 4].includes(i)
                                ? "justify-start"
                                : "justify-end"
                        }`}
                    >
                        <div
                            ref={(el) => (projectSlideRef.current[i] = el)}
                            onMouseEnter={() =>
                                projectHoverOpacityEnter(i, project)
                            }
                            onMouseLeave={projectHoverOpacityLeave}
                            className={`font-font3 text-8xl sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] 2xl:text-[8.5vw] whitespace-nowrap select-none cursor-pointer group`}
                        >
                            {Array.from({ length: 10 }).map(
                                (_, j) => (
                                    <span
                                        key={j}
                                        className={`inline-flex items-center ${
                                            i !== projectData.length - 1
                                                ? "py-25 sm:py-[12vw] md:py-[10vw] lg:py-[9vw] xl:py-[7.5vw]"
                                                : "pt-25 sm:pt-[12vw] md:pt-[10vw] lg:pt-[9vw] xl:pt-[7.5vw] pb-0"
                                        }`}
                                    >
                                        {project.title}
                                        <span
                                            // ref={(elem) =>
                                            //     (shapeRef.current[1] = elem)
                                            // }
                                            className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                                        ></span>
                                    </span>
                                )
                            )}
                        </div>
                    </Link>

                    {[0, 1, 2].includes(i) && (
                        <div className="flex items-center gap-5 leading-0">
                            <span className="w-full h-[1px] bg-[#2e262b]" />
                            <p className="whitespace-nowrap text-[#686868] text-[15px] font-font1">
                                Click to view project
                            </p>
                            <span className="w-full h-[1px] bg-[#2e262b]" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Work;
