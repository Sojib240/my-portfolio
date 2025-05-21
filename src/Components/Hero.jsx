import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
    // image trail animation
    const heroMainRef = useRef();
    useGSAP(() => {
        const images = [
            "/Images/Thumbnails/IMAGE1.svg",
            "/Images/Thumbnails/IMAGE2.svg",
            "/Images/Thumbnails/IMAGE3.svg",
            "/Images/Thumbnails/IMAGE4.svg",
            "/Images/Thumbnails/IMAGE5.svg",
            "/Images/Thumbnails/IMAGE6.svg",
            "/Images/Thumbnails/IMAGE7.svg",
            "/Images/Thumbnails/IMAGE8.svg",
            "/Images/Thumbnails/IMAGE9.svg",
            "/Images/Thumbnails/IMAGE10.svg",
            "/Images/Thumbnails/IMAGE11.svg",
            "/Images/Thumbnails/IMAGE12.svg",
        ];

        let lastX = 0;
        let lastY = 0;
        let currentImageIndex = 0;
        const distanceThreshold = 180;

        const handleMouseMove = (e) => {
            const dx = e.clientX - lastX;
            const dy = e.clientY - lastY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > distanceThreshold) {
                const img = document.createElement("img");
                img.classList.add("imageStyles");
                img.src = images[currentImageIndex];
                heroMainRef.current.appendChild(img);

                currentImageIndex = (currentImageIndex + 1) % images.length;

                gsap.set(img, {
                    scale: 0,
                    opacity: 0,
                    x: e.clientX,
                    y: e.clientY,
                });

                gsap.to(img, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "power2.out",
                });

                gsap.to(img, {
                    opacity: 0,
                    scale: 0,
                    delay: 0.5,
                    duration: 0.6,
                    ease: "power2.out",
                    onComplete: () => img.remove(),
                });

                lastX = e.clientX;
                lastY = e.clientY;
            }
        };

        const main = heroMainRef.current;
        main.addEventListener("mousemove", handleMouseMove);

        return () => {
            main.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

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
        <section className="h-svh w-full px-[2vw] flex items-center relative overflow-hidden text-color-primary">
            <div
                ref={heroMainRef}
                className="w-full flex items-center justify-center"
            >
                <div className="w-full text-[13.8vw] md:text-[11vw] xl:text-[10vw] 2xl:text-[9vw] leading-[90%] py-[6vw] select-none  text-center font-font4">
                    <h2>Crafting smooth digital</h2>
                    <h2>experiences with exceptional</h2>
                    <h2>care and precision.</h2>
                </div>
            </div>
            <div className="absolute bottom-[4%] left-1/2 translate-x-[-50%] flex flex-col justify-center items-center gap-2 lg:gap-3 text-lg">
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
    );
};

export default Hero;
