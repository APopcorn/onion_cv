import DocSVG from "../../../assets/svg/DocSVG";

const LinkCV = () => {
    return (
        <button
            className="h-[57px] px-[54px] font-semibold rounded-md  bg-hero-pink text-black drop-shadow-md"
            type="submit"
        >
            <DocSVG />
            CV
        </button>
    );
};

export default LinkCV;
