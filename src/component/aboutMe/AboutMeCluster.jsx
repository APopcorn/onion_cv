import ProgramingLanguages from "./smallAbout/ProgramingLanguages";
import Work from "./smallAbout/Work";
import Academic from "./smallAbout/Academic";
import Other from "./smallAbout/Other";

const AboutMeCluster = () => {
    return (
        <div className="flex">
            <ProgramingLanguages />
            <Work />
            <Academic />
            <Other />
        </div>
    );
};

export default AboutMeCluster;
