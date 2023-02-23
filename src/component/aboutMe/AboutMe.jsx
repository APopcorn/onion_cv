import AboutMeBig from "./AboutMeBig";
import AboutMeCluster from "./AboutMeCluster";

const AboutMe = () => {
    return (
        <div className="bg-black w-[100%] flex flex-col items-center">
            <AboutMeBig />
            <AboutMeCluster />
        </div>
    );
};

export default AboutMe;
