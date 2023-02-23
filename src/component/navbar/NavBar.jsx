import React from "react";
import ContactMeButton from "./ContactMeButton";

const NavBar = () => {
    return (
        <div className="bg-navbar-blue flex flex-row justify-between">
            <div>Onion Project</div>
            <ul className="flex flex-row justify-evenly	w-[100%]">
                <li className="hover:bg-sky-700 ease-out duration-300">Home</li>
                <li className="hover:bg-sky-700 ease-out duration-300">
                    About Me
                </li>
                <li className="hover:bg-sky-700 ease-out duration-300">
                    Projects
                </li>
            </ul>
            <ContactMeButton />
        </div>
    );
};

export default NavBar;
