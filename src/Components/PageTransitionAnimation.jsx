import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTransitionAnimation = ({ children,setAnimating }) => {
  const { pathname } = useLocation();
  const overlayRef = useRef(null);

  useGSAP(() => {

    const tl = gsap.timeline();

    // Overlay rises from bottom
    tl.set(overlayRef.current, { scaleY: 0, transformOrigin: "bottom" });
    tl.to(overlayRef.current, {
      scaleY: 1,
      duration: 0.6,
      ease: "power4.inOut",
    });

    // Pause briefly
    tl.to({}, { duration: 0.5 });

    // Overlay collapses from top
    tl.to(overlayRef.current, {
      scaleY: 0,
      duration: 0.6,
      ease: "power4.inOut",
      transformOrigin: "top",
      onComplete:()=>{
        setAnimating(false)
      }
    });
  }, [pathname]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-full bg-color-fourth z-[9999] pointer-events-none scale-y-0 origin-bottom"
      />
      <div>{children}</div>
    </>
  );
};

export default PageTransitionAnimation;
