import {FC} from "react";
import GenreItem from "./GenreItem";
import {ChevronRightIcon} from "@heroicons/react/outline";
import useHorizontalWheeler from "../../hooks/HorizontalWheeler";

interface GenresProps {
    list: string[]
}

const Genres: FC<GenresProps> = ({list}: GenresProps): JSX.Element => {

    const {wheelRef} = useHorizontalWheeler();

    const widget: JSX.Element[] = list.map((title, idx) => {
        return <GenreItem key={idx} title={title} active={[0, 3, 7].includes(idx)}/>;
    });

    return (
        <div className="relative w-full">
            <div className="absolute flex left-0 w-14 h-full justify-center items-center z-[1] bg-gradient-to-r from-gray-900">
            </div>
            <div className="absolute flex right-0 w-14 h-full justify-center items-center z-[1] bg-gradient-to-l from-gray-900 cursor-pointer">
                <ChevronRightIcon className="w-5"/>
            </div>
            <div ref={wheelRef} className="flex overflow-x-scroll scrollbar-hidden relative px-10">
                {widget}
            </div>
        </div>
    );
};

export default Genres;
