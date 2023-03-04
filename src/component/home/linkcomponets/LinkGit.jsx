import GithubSVG from "../../../assets/svg/icons/GithubSVG";

const LinkGit = () => {
    return (
        <button
            className="h-[57px] px-[54px] font-semibold rounded-md bg-hero-orange text-black drop-shadow-md"
            type="submit"
        >
            <GithubSVG />
            APopcorn
        </button>
    );
};

export default LinkGit;
