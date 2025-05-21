import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import LenisSmoothScroll from "./Utils/LenisSmoothScroll";
import Contact from "./Components/Contact";
import { Route, Router, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import WorkPage from "./Pages/WorkPage";
import PageTransitionAnimation from "./Components/PageTransitionAnimation";
import { useState } from "react";

const App = () => {
    const [animating, setAnimating] = useState(true);
    return (
        <div>
            <LenisSmoothScroll>
                <Navbar animating={animating} />
                <PageTransitionAnimation setAnimating={setAnimating}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about/" element={<AboutPage />} />
                        <Route path="/work/" element={<WorkPage />} />
                    </Routes>
                </PageTransitionAnimation>
                {/* <Contact /> */}
            </LenisSmoothScroll>
        </div>
    );
};

export default App;
