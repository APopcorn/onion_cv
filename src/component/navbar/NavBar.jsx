import ContactMeButton from "./ContactMeButton";
import GarlicSVG from "../../assets/svg/icons/GarlicSVG";
import { forwardRef, useEffect, useRef, useState } from "react";

const NavBar = (props, ref) => {
    const {
        homeRefPoint: homeRef,
        aboutMeRefPoint: aboutMeRef,
        projectsRefPoint: projectsRef,
    } = ref;

    const navBarRef = useRef(null);

    const [homeVisible, setHomeVisible] = useState();
    const [aboutMeVisible, setAboutMeVisible] = useState();
    const [projectsVisible, setProjectsVisible] = useState();

    useEffect(() => {
        const homeObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setHomeVisible(entry.isIntersecting);
        });
        homeObserver.observe(homeRef.current);

        const aboutMeObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setAboutMeVisible(entry.isIntersecting);
        });
        aboutMeObserver.observe(aboutMeRef.current);

        const projectObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setProjectsVisible(entry.isIntersecting);
        });
        projectObserver.observe(projectsRef.current);
    }, []);

    const homeClick = () => {
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const aboutMeClick = () => {
        aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const projectsClick = () => {
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div
            ref={navBarRef}
            className="bg-transparent flex flex-row items-center justify-between sticky top-0"
        >
            <div className="p-2">
                <GarlicSVG />
            </div>

            <div className="whitespace-nowrap text-[2rem] font-mono text-black font-semibold">
                Onion Project
            </div>

            <ul className="flex flex-row justify-evenly	w-[100%] text-black">
                <li
                    className={`${
                        homeVisible ? "bg-emerald-100" : ""
                    }  hover:bg-sky-700 ease-out duration-300`}
                >
                    <button onClick={homeClick}>Home</button>
                </li>
                <li
                    className={`${
                        aboutMeVisible ? "bg-emerald-100" : ""
                    }  hover:bg-sky-700 ease-out duration-300`}
                >
                    <button onClick={aboutMeClick}>About Me</button>
                </li>
                <li
                    className={`${
                        projectsVisible ? "bg-emerald-100" : ""
                    }  hover:bg-sky-700 ease-out duration-300`}
                >
                    <button onClick={projectsClick}>Projects</button>
                </li>
            </ul>
            <div className="p-2">
                <ContactMeButton />
            </div>
        </div>
    );
};

export default forwardRef(NavBar);
