import React, { useRef } from "react";
import Contact from "../Components/Contact";
import Work from "../Components/Work";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const WorkPage = () => {
    // acroll animation
    const scrollRef = useRef();
    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.set(scrollRef.current, { transformOrigin: "top" });
        tl.fromTo(
            scrollRef.current,
            { scaleY: 0 },
            {
                scaleY: 1,
                duration: 1.2,
                ease: "power3.inOut",
                delay: 0.4,
            }
        );
        tl.set(scrollRef.current, { transformOrigin: "bottom" });
        tl.to(scrollRef.current, {
            scaleY: 0,
            duration: 1.2,
            ease: "power3.inOut",
        });
    }, []);
    return (
        <>
            <section className="w-full relative pb-[5vw]">
                <div className="pt-[8vw]">
                    <div className="text-color-primary h-[45vh] flex flex-col justify-center items-center text-center">
                        <h2 className="text-[10vw] leading-[100%] font-font4">
                            Selected Work
                        </h2>
                        <h3 className="text-[2.8vw] font-font4 leading-[100%]">
                            Explore my creative expertise
                        </h3>
                        <p className="text-[1vw] leading-[100%]">
                            Check out some of my projects by area of explertise
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 lg:gap-3 text-lg">
                    <div className="h-10 md:h-12 lg:h-14 xl:h-16 w-[1px] bg-color-third">
                        <span
                            ref={scrollRef}
                            className="bg-color-primary w-full h-full block"
                        />
                    </div>
                    <p className="text-color-primary font-font1 tracking-[2px] text-xs lg:text-sm xl:text-base">
                        Scroll
                    </p>
                </div>
            </section>
            <Work />
            <Contact />
        </>
    );
};

export default WorkPage;
