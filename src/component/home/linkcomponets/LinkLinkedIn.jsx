import React from "react";
import LinkedInSVG from "../../../assets/svg/icons/LinkedInSVG";

const LinkLinkedIn = () => {
    return (
        <button
            className="text-[1.5rem] flex items-center gap-x-4 h-[57px] px-[54px] font-semibold rounded-md bg-hero-orange text-black drop-shadow-md"
            type="submit"
        >
            <LinkedInSVG />
            Ernst Padron
        </button>
    );
};

export default LinkLinkedIn;
