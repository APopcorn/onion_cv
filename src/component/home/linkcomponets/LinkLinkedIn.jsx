import React from "react";
import LinkedInSVG from "../../../assets/svg/icons/LinkedInSVG";

const LinkLinkedIn = () => {
    return (
        <a
            href="https://www.linkedin.com/in/ernst-padron-7057a7226/"
            target="_blank"
            rel="noreferrer"
        >
            <button
                className="
                    text-[1.5rem]  
                    text-white 
                    
                    grid 
                    grid-rows-none
                    grid-cols-link-bottom
                    p-2
                    rounded-[0.5rem]
                    
                    bg-hero-orange 
                    drop-shadow-md
                    "
                type="submit"
            >
                <LinkedInSVG />
                <div>Ernst Padron</div>
            </button>
        </a>
    );
};

export default LinkLinkedIn;
