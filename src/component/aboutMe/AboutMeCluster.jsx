import ProgramingLanguages from "./smallAbout/ProgramingLanguages";
import Work from "./smallAbout/Work";
import Academic from "./smallAbout/Academic";
import Other from "./smallAbout/Other";

const AboutMeCluster = () => {
    return (
        <div
            className="
                grid 
                gap-4 
                grid-cols-3 
                grid-rows-1 
                w-[72%]
                h-[30rem]
                "
        >
            <ProgramingLanguages />
            <Work />
            <div>
                <Academic />
                <Other />
            </div>
        </div>
    );
};

export default AboutMeCluster;
