import {FC} from "react";
import {ChevronDownIcon} from "@heroicons/react/outline";

interface IProps {
    title: string;
    isActive?: boolean;
    isSelect?: boolean;
}

const MenuItem: FC<IProps> = ({title, isActive, isSelect}: IProps): JSX.Element => {
    return (
        <div className="w-full pt-3 px-5 md:mx-5 md:w-auto flex flex-col justify-center items-center cursor-pointer">
            <span className={`${isActive ? "text-white text-[1rem]" : "text-gray-200"} flex`}>
                {title}
                {isSelect && <ChevronDownIcon className="w-4 ml-2"/>}
            </span>
            <span className={`${isActive && "bg-red-500"} w-2 h-2 rounded-full mt-1`}/>
        </div>
    );
}

export default MenuItem;
