import ProjectShowcase from "./ProjectShowcase";
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
            <ProjectShowcase />
            <ProjectShowcase />
            <ProjectShowcase />
        </div>
    );
};

export default forwardRef(Projects);
