import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const MouseFollower = ({ mouseGoBigDivs }) => {
    const outerRef = useRef();

    useGSAP(() => {
        const handleMouseMove = (e) => {
            const { clientX: x, clientY: y } = e;

            gsap.to(outerRef.current, {
                x,
                y,
                duration: 0.5,
                ease: "power1.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useGSAP(() => {
        // if (!mouseGoBigDivs.current || mouseGoBigDivs.current.length === 0)
        //     return;

        // const handleMouseEnter = () => {
        //     gsap.to(outerRef.current, {
        //         scale: 3,
        //         duration: 0.3,
        //         ease: "power1.out",
        //     });
        //     console.log("e");
        // };
        // const handleMouseLeave = () => {
        //     gsap.to(outerRef.current, {
        //         scale: 1,
        //         duration: 0.3,
        //         ease: "power1.out",
        //     });
        //     console.log("l");
        // };
        // mouseGoBigDivs.current.forEach((el) => {
        //     if (el) {
        //         el.addEventListener("mouseenter", handleMouseEnter);
        //         el.addEventListener("mouseleave", handleMouseLeave);
        //     }
        // });

        // return () => {
        //     mouseGoBigDivs.current.forEach((el) => {
        //         if (el) {
        //             el.removeEventListener("mouseenter", handleMouseEnter);
        //             el.removeEventListener("mouseleave", handleMouseLeave);
        //         }
        //     });
        // };
        console.log('e');
                // console.log(mouseGoBigDivs.current);
        
    }, [mouseGoBigDivs]);

    return (
        <div
            ref={outerRef}
            className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-50 border-2 border-color-third flex justify-center items-center"
            style={{ transform: "translate(-50%, -50%) scale(1)" }}
        />
    );
};

export default MouseFollower;
