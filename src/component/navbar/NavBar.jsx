import ContactMeButton from "./ContactMeButton";
import GarlicSVG from "../../assets/svg/icons/GarlicSVG";

const NavBar = () => {
    return (
        <div className="bg-transparent flex flex-row items-center justify-between">
            <div className="p-2">
                <GarlicSVG />
            </div>

            <div className="whitespace-nowrap text-[2rem] font-mono text-black font-semibold">
                Onion Project
            </div>
            <ul className="flex flex-row justify-evenly	w-[100%] text-black">
                <li className="hover:bg-sky-700 ease-out duration-300">Home</li>
                <li className="hover:bg-sky-700 ease-out duration-300">
                    About Me
                </li>
                <li className="hover:bg-sky-700 ease-out duration-300">
                    Projects
                </li>
            </ul>
            <div className="p-2">
                <ContactMeButton />
            </div>
        </div>
    );
};

export default NavBar;
