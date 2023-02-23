import SmallProjectsContainer from "./SmallProjectsContainer";
import ProjectShowcase from "./ProjectShowcase";

const Projects = () => {
    return (
        <div className="bg-gray w-[100%] flex flex-col items-center">
            <ProjectShowcase />
            <SmallProjectsContainer />
        </div>
    );
};

export default Projects;
