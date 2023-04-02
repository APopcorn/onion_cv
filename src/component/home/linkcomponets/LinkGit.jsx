import GithubSVG from "../../../assets/svg/icons/GithubSVG";

const LinkGit = () => {
    return (
        <a href="https://github.com/APopcorn" target="_blank" rel="noreferrer">
            <button
                className="
                    text-[1.5rem]  
                    text-white 
                    
                    grid 
                    grid-rows-none
                    grid-cols-link-bottom
                    p-2
                    rounded-[0.5rem]
                    
                    bg-hero-orange 
                    drop-shadow-md
                    "
                type="submit"
            >
                <GithubSVG />
                <div>APopcorn</div>
            </button>
        </a>
    );
};

export default LinkGit;
