import DocSVG from "../../../assets/svg/icons/DocSVG";

const LinkCV = () => {
    return (
        <button
            className="h-[57px] px-[54px] font-semibold rounded-md  bg-hero-orange text-black drop-shadow-md"
            type="submit"
        >
            <DocSVG />
            CV
        </button>
    );
};

export default LinkCV;
