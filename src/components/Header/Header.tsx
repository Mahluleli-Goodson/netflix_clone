import {Dispatch, FC, SetStateAction, useState} from "react";
import Controls from "./Controls/Controls";
import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";
import {MenuAlt3Icon, XIcon} from "@heroicons/react/outline";

const Header: FC = (): JSX.Element => {

    const [isMenuOpen, setIsMenuOpen]: [boolean, Dispatch<SetStateAction<any>>] = useState(false);

    return (
        <div className={`transition-all ${isMenuOpen ? "h-[310px] md:h-auto" : "h-[65px] overflow-y-hidden md:h-auto"}`}>
            <header
                className={`
            flex 
            flex-col 
            overflow-y-hidden 
            relative 
            items-start 
            md:flex-row 
            flex-wrap 
            md:items-center 
            lg:px-10 
            border-b-[0.001em] 
            border-gray-600
            lg:absolute 
            w-[100%] 
            z-10 
            bg-gray-900 
            lg:bg-transparent
            `}>
                {
                    !isMenuOpen &&
                    <MenuAlt3Icon
                        className="absolute w-8 md:hidden right-1 top-4"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                }
                {
                    isMenuOpen &&
                    <XIcon
                        className="absolute w-8 md:hidden right-1 top-4"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                }
                <Logo/>
                <Menu/>
                <Controls/>
            </header>
        </div>
    );
};

export default Header;
