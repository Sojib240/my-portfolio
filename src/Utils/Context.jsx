import React, { useState } from "react";
import { createContext } from "react";

export const NewsContext = createContext();

const Context = (props) => {
    const [projectData, setProjectData] = useState([
        {
            id: 1,
            title: "Russian mockups",
            published: "2025",
            src: "/Images/Thumbnails/IMAGE1.jpeg",
            videoSrc: "/Videos/tea-flow.mp4",
            image1: "/Images/Show-Case-Image/teaflow-1.jpg",
            image2: "/Images/Show-Case-Image/teaflow-2.jpg",
            image3: "/Images/Show-Case-Image/teaflow-3.jpg",
            image4: "/Images/Show-Case-Image/teaflow-4.jpg",
            image5: null,
            direction: "https://tea-flow.vercel.app/",
        },
        {
            id: 2,
            title: "Tea flow",
            published: "2025",
            src: "/Images/Thumbnails/IMAGE2.jpeg",
            videoSrc: "/Videos/Russian-Mockups-video.mp4",
            image1: "/Images/Show-Case-Image/russian-1.jpg",
            image2: "/Images/Show-Case-Image/russian-2.jpg",
            image3: "/Images/Show-Case-Image/russian-3.jpg",
            image4: "/Images/Show-Case-Image/russian-4.jpg",
            image5: null,
            direction: "https://russian-meckups.vercel.app/",
        },
        {
            id: 3,
            title: "Sapori e natura",
            published: "2025",
            src: "/Images/Thumbnails/IMAGE3.jpg",
            videoSrc: "/Videos/the-cult.mp4",
            image1: "/Images/Show-Case-Image/the-cult-1.jpg",
            image2: "/Images/Show-Case-Image/the-cult-2.jpg",
            image3: "/Images/Show-Case-Image/the-cult-3.jpg",
            image4: null,
            image5: null,
            direction: "https://the-cult-rust.vercel.app/",
        },
        {
            id: 4,
            title: "Future goals",
            published: "2025",
            src: "/Images/Thumbnails/IMAGE4.jpeg",
            videoSrc: "/Videos/Future-Goals.mp4",
            image1: "/Images/Show-Case-Image/future-goals-2.jpg",
            image2: "/Images/Show-Case-Image/future-goals-1.png",
            image3: null,
            image4: null,
            image5: null,
            direction: "https://future-goals-gamma.vercel.app/",
        },
    ]);
    return (
        <NewsContext.Provider value={[projectData, setProjectData]}>
            {props.children}
        </NewsContext.Provider>
    );
};

export default Context;
