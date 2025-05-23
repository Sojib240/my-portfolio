import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ animating, mouseGoBigDivs }) => {
    const [navbarScroll, setnavbarScroll] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setnavbarScroll(false); // scrolling down
            } else {
                setnavbarScroll(true); // scrolling up
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    //
    const navMenu = [
        { title: "home", pageDirection: "/" },
        { title: "about", pageDirection: "/about/" },
        { title: "work", pageDirection: "/work/" },
    ];
    //
    const navigate = useNavigate();

    return (
        <div className="">
            {/* top */}
            <div
                className={`fixed top-0 flex justify-between items-center w-full z-[9999] px-3.5 md:px-[5vw] lg:px-[4vw] h-20 md:h-30  text-color-primary ${
                    navbarScroll ? "translate-y-0" : "-translate-y-full"
                } custom-easing`}
            >
                <NavLink
                    ref={(el) => (mouseGoBigDivs.current[3] = el)}
                    to={"/"}
                    className="flex flex-col h-[20px] md:h-[25px] lg:h-[25px] xl:h-[29px] 2xl:h-[30px] leading-[100%]  overflow-hidden group uppercase logo text-2xl md:text-3xl xl:text-4xl tracking-[2px] font-font5"
                >
                    <span className="group-hover:-translate-y-[100%] easing">
                        Mejbaul a.
                    </span>
                    <span className="group-hover:-translate-y-[100%] easing text-color-fourth">
                        Mejbaul a.
                    </span>
                </NavLink>
                <div className="menu flex items-center text-lg lg:text-xl xl:text-2xl gap-4 lg:gap-5 tracking-[1px] font-font5">
                    {navMenu.map(({ title, pageDirection }, idx) => {
                        return (
                            <NavLink
                                key={idx}
                                to={`${pageDirection}`}
                                ref={(el) => (mouseGoBigDivs.current[idx] = el)}
                                // onClick={() => {
                                //     console.log("Animating:", animating);
                                //     if (!animating) {
                                //         console.log(
                                //             "Navigating to",
                                //             pageDirection
                                //         );
                                //         navigate(pageDirection);
                                //     }
                                // }}
                                className={({ isActive }) =>
                                    `cursor-pointer flex flex-col items-center relative group ${
                                        isActive
                                            ? "text-color-primary"
                                            : "text-color-fifth"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <div className="flex flex-col h-4 lg:h-5 leading-[100%] capitalize overflow-hidden mb-2">
                                            <span className="group-hover:-translate-y-[100%] easing">
                                                {title}
                                            </span>
                                            <span className="group-hover:-translate-y-[100%] easing text-color-fourth">
                                                {title}
                                            </span>
                                        </div>

                                        <span
                                            className={`w-1 h-1 rounded-full block  transition-opacity easing absolute -bottom-1.5 left-1/2 -translate-x-1/2 ${
                                                isActive
                                                    ? "bg-color-fourth translate-y-0 opacity-100 pointer-events-auto"
                                                    : "translate-y-2 opacity-0 pointer-events-none"
                                            }`}
                                        />
                                    </>
                                )}
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
