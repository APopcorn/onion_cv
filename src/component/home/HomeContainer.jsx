import React, { forwardRef } from "react";
import LinkGit from "./linkcomponets/LinkGit";
import LinkCV from "./linkcomponets/LinkCV";
import LinkLinkedIn from "./linkcomponets/LinkLinkedIn";

const HomeContainer = (props, ref) => {
    return (
        <div ref={ref} className="bg-hero-white overflow-hidden">
            <div className="bg-home-all bg-no-repeat bg-fit-hero bg-move-hero w-[100%] h-[100svh]">
                <div className="absolute flex flex-wrap justify-evenly top-[816px] left-[478px] w-[60rem]">
                    <LinkGit />
                    <LinkCV />
                    <LinkLinkedIn />
                </div>

                <div className="select-none relative left-[210px] text-hero-text  whitespace-nowrap font-mono">
                    <div className="
                        absolute top-[146px] left-[678px] text-[4rem]
                        bg-gradient-to-b 
                        from-name-fade-t 
                        to-name-fade-b
                        inline-block 
                        text-transparent 
                        bg-clip-text
                    ">
                        Welcome
                    </div>
                    <div className="
                        absolute top-[200px] left-[632px] text-[6rem]
                        bg-gradient-to-b 
                        from-name-fade-t 
                        to-name-fade-b
                        inline-block 
                        text-transparent 
                        bg-clip-text
                    ">
                        I'm Ernst Padron,
                    </div>
                    <div className="
                        absolute top-[286px] left-[744px] text-[6rem]
                        bg-gradient-to-b 
                        from-name-fade-t 
                        to-name-fade-b
                        inline-block 
                        text-transparent 
                        bg-clip-text
                    ">
                        Programmer
                    </div>
                </div>
            </div>
        </div>
    );
};

export default forwardRef(HomeContainer);
