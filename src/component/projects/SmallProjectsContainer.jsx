import SmallProject from "./SmallProject";

const SmallProjectsContainer = () => {
    return (
        <div className="grid gap-8 grid-cols-2 grid-rows-2">
            <SmallProject />
            <SmallProject />
            <SmallProject />
            <SmallProject />
        </div>
    );
};

export default SmallProjectsContainer;
