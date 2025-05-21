import About from "../Components/About";
import Work from "../Components/Work";
import Hero from "../Components/Hero";
import Contact from "../Components/Contact";

const HomePage = ({mouseGoBigDivs}) => {
    return (
        <div className="relative z-50">
            <Hero />
            <About mouseGoBigDivs={mouseGoBigDivs} />
            <Work />
            {/* <Contact /> */}
        </div>
    );
};

export default HomePage;
