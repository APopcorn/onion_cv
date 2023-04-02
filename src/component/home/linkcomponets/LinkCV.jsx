import DocSVG from "../../../assets/svg/icons/DocSVG";

const LinkCV = () => {
    return (
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
            <DocSVG />
            <div>CV</div>
        </button>
    );
};

export default LinkCV;
