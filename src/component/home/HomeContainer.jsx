import React from "react";
import LinkGit from "./linkcomponets/LinkGit";
import LinkCV from "./linkcomponets/LinkCV";
import LinkLinkedIn from "./linkcomponets/LinkLinkedIn";
import BackgroundWave from "../../assets/svg/background/BackgroundWave";
import BackgroundBubble from "../../assets/svg/background/BackgroundBubble";
import FadingCircleSVG from "../../assets/svg/background/FadingCircleSVG";

const HomeContainer = () => {
    return (
        <div className="bg-hero-white w-[100%] overflow-hidden">
            <div className="bg-hero-pattern bg-no-repeat bg-contain w-[100%] h-[55rem]">
                <div className="absolute top-[103px] left-[807px]">
                    <BackgroundBubble />
                </div>
                <div className="absolute top-[263px]">
                    <BackgroundWave />
                </div>
                <div className="absolute top-[443px] left-[607px]">
                    <FadingCircleSVG />
                </div>

                <div className="absolute flex flex-wrap justify-evenly top-[716px] left-[478px] w-[60rem]">
                    <LinkGit />
                    <LinkCV />
                    <LinkLinkedIn />
                </div>

                <div
                    className="
                    relative 
                    text-hero-text 
                    text-[6rem] 
                    whitespace-nowrap
                    font-mono 
                    "
                >
                    {/* <div className="absolute top-[116px] left-[678px]">
                        Hello World!
                    </div> */}
                    <div className="absolute top-[116px] left-[678px]">
                        Welcome
                    </div>
                    <div className="absolute top-[200px] left-[632px]">
                        I'm Ernst Padron
                    </div>
                    <div className="absolute top-[286px] left-[744px]">
                        Programming
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContainer;
