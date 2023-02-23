import React from "react";
import MailSVG from "../../assets/svg/MailSVG";

const ContactMeButton = () => {
    return (
        <div>
            <MailSVG />
            <button
                className="h-[57px] px-[54px] 
                    font-semibold 
                    rounded-md  
                    bg-hero-pink 
                    text-black 
                    drop-shadow-md 
                    hover:bg-sky-700 
                    active:bg-violet-700"
                type="submit"
            >
                Contact Me
            </button>
        </div>
    );
};

export default ContactMeButton;
