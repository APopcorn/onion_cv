import "./App.css";
import NavBar from "./component/navbar/NavBar";
import HomeContainer from "./component/home/HomeContainer";
import Projects from "./component/projects/Projects";
import AboutMe from "./component/aboutMe/AboutMe";
import { useEffect, useRef, useState } from "react";

function App() {
    const homeRef = useRef(null);
    const aboutMeRef = useRef(null);
    const projectsRef = useRef(null);

    const refs = {
        homeRefPoint: homeRef,
        aboutMeRefPoint: aboutMeRef,
        projectsRefPoint: projectsRef,
    };

    return (
        <div className="flex flex-col bg-white">
            <NavBar ref={refs} />
            <HomeContainer ref={homeRef} />
            <AboutMe ref={aboutMeRef} />
            <Projects ref={projectsRef} />
        </div>
    );
}

export default App;
