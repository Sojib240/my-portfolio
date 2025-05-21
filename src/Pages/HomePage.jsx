import About from "../Components/About";
import Work from "../Components/Work";
import Hero from "../Components/Hero";
import Contact from "../Components/Contact";

const HomePage = () => {
    return (
        <div className="relative z-50">
            <Hero />
            <About />
            <Work />
            <Contact />
        </div>
    );
};

export default HomePage;
