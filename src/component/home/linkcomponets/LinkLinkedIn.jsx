import React from "react";
import LinkedInSVG from "../../../assets/svg/LinkedInSVG";

const LinkLinkedIn = () => {
    return (
        <button
            className="h-[57px] px-[54px] font-semibold rounded-md  bg-hero-pink text-black drop-shadow-md"
            type="submit"
        >
            <LinkedInSVG />
            Ernst Padron
        </button>
    );
};

export default LinkLinkedIn;
