import {FC} from "react";

export interface CatItemProps {
    title: string;
    isActive?: boolean;
    Icon: JSX.Element;
}

const CategoryItem: FC<CatItemProps> = ({title, isActive, Icon}: CatItemProps): JSX.Element => {
    return (
        <div className="pt-3 sm:px-5 mx-5 flex flex-col justify-center items-center cursor-pointer">
            <span className={`flex ${isActive ? "scale-150 text-white" : "text-gray-500"}`}>
                {Icon}
                {title}
            </span>
            <span className={`${isActive && "bg-red-500"} w-2 h-2 rounded-full mt-5 ml-5`}/>
        </div>
    );
}

export default CategoryItem;
