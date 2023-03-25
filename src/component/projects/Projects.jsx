import SmallProjectsContainer from "./SmallProjectsContainer";
import ProjectShowcase from "./ProjectShowcase";
import { forwardRef } from "react";

const Projects = (props, ref) => {
    return (
        <div
            ref={ref}
            className="
                bg-projects-end 

                bg-no-repeat 
                bg-projects-all 
                bg-move-projects 
                bg-fit-projects 

                w-[100%] h-[180vh] 
                flex flex-col items-center"
        >
            <h1 className="text-[5rem]">Projects</h1>
            <ProjectShowcase />
            <SmallProjectsContainer />
        </div>
    );
};

export default forwardRef(Projects);
