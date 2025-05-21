import React from "react";
import Contact from "../Components/Contact";

const AboutPage = () => {
    return (
        <>
            <section className="w-full">
                <div className="pt-[8vw] pb-[3vw]">
                    <div className="text-color-primary h-[50vh] flex flex-col justify-center items-center text-center">
                        <h2 className="text-[10vw] leading-[100%] font-font4">
                            About Me
                        </h2>
                        <h3 className="text-[2.8vw] font-font4 leading-[100%]">
                            Explore my creative expertise
                        </h3>
                        <p className="text-[1vw] leading-[100%]">
                            Check out some of my projects by area of explertise
                        </p>
                    </div>
                </div>
            </section>
            {/* <Contact /> */}
        </>
    );
};

export default AboutPage;
