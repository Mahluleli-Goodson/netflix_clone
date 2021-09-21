import {FC} from "react";
import Controls from "./Controls/Controls";
import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";

const Header: FC = (): JSX.Element => {
    return (
        <header className="flex items-center px-20 border-b-[0.01rem] border-gray-500 absolute w-[100%] z-10">
            <Logo/>
            <Menu/>
            <Controls/>
        </header>
    );
};

export default Header;
