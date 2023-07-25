import ProjectShowcase from "./ProjectShowcase";
import FliptProjectShowcase from "./FliptProjectShowcase";
import { forwardRef } from "react";

const Projects = (props, ref) => {
    return (
        <div
            ref={ref}
            className="

                bg-no-repeat 
                bg-projects-all 
                bg-move-projects 
                bg-fit-projects 

                w-[100%] h-[340vh] 
                flex flex-col items-center"
        >
            <h1 className="select-none text-[5rem]">Projects</h1>
            <ProjectShowcase projectTitle={"Patch"} img={"src\\assets\\projects\\Patch.svg"} />
            <FliptProjectShowcase projectTitle={"Rumbi"} img={"src\\assets\\projects\\Rumbi.svg"} />
            <ProjectShowcase projectTitle={"Garlic"} img={"src\\assets\\projects\\Garlic.svg"} />
        </div>
    );
};

export default forwardRef(Projects);
