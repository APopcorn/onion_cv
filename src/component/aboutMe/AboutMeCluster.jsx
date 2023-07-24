import ProgrammingLanguages from "./smallAbout/ProgrammingLanguages";
import Work from "./smallAbout/Work";
import Academic from "./smallAbout/Academic";

const AboutMeCluster = () => {
    return (
        <div
            className="
                grid 
                gap-4 
                grid-cols-3
                grid-rows-2 
                w-[72%]
                h-[55rem]
                "
        >
            <Work />
            <ProgrammingLanguages />
            <Academic />
        </div>
    );
};

export default AboutMeCluster;
