import React from "react";
import LinkGit from "./linkcomponets/LinkGit";
import LinkCV from "./linkcomponets/LinkCV";
import LinkLinkedIn from "./linkcomponets/LinkLinkedIn";
import BackgroundWave from "../../assets/svg/BackgroundWave";
import BackgroundBubble from "../../assets/svg/BackgroundBubble";

const HomeContainer = () => {
    return (
        <div className="bg-hero-white w-[100%] overflow-hidden">
            <div className="bg-hero-pattern bg-no-repeat bg-contain w-[100%] h-[55rem]">
                <BackgroundWave />
                <BackgroundBubble />

                <div className="absolute flex flex-wrap justify-evenly top-[716px] left-[478px] w-[60rem]">
                    <LinkGit />
                    <LinkCV />
                    <LinkLinkedIn />
                </div>

                <div className="relative text-hero-text text-[6rem]">
                    <div className="absolute top-[116px] left-[678px]">
                        Hello World!
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
