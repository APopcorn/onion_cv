import { forwardRef } from "react";
import AboutMeBig from "./AboutMeBig";
import AboutMeCluster from "./AboutMeCluster";

const AboutMe = (props, ref) => {
    return (
        <div
            ref={ref}
            className="
                bg-about-all 
                bg-move-about 
                bg-contain 
                bg-no-repeat 
                bg-white 
                w-[100%] h-[200vh] flex flex-col items-center"
        >
            <h1 className="select-none text-[5rem]">About Me</h1>
            <AboutMeBig />
            <AboutMeCluster />
        </div>
    );
};

export default forwardRef(AboutMe);
