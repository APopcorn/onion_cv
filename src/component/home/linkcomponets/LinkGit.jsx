import GithubSVG from "../../../assets/svg/icons/GithubSVG";

const LinkGit = () => {
    return (
        <button
            className="text-[1.5rem] flex items-center gap-x-4 h-[57px] px-[54px] font-semibold rounded-md bg-hero-orange text-black drop-shadow-md"
            type="submit"
        >
            <GithubSVG />
            APopcorn
        </button>
    );
};

export default LinkGit;
