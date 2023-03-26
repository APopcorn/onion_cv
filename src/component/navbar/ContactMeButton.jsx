import React from "react";
import MailSVG from "../../assets/svg/icons/MailSVG";

const ContactMeButton = () => {
    return (
        <div>
            {/* <MailSVG /> */}
            <button
                className="
                    h-[57px] 
                    px-[54px]

                    duration-300 

                    font-semibold 
                    rounded-md  
                    bg-black 
                    text-white 
                    drop-shadow-md 
                    hover:bg-emerald-100
                    hover:text-black
                    active:duration-30
                    active:bg-white
                    active:text-black
                    "
                type="submit"
            >
                Contact Me
            </button>
        </div>
    );
};

export default ContactMeButton;
