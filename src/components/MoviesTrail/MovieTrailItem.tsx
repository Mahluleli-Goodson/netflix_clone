import {FC} from "react";
import {StarIcon} from "@heroicons/react/solid";
import {PlayIcon} from "@heroicons/react/outline";

interface MovieItemProps {
    cover: string;
    title: string;
    rating: number;
    year: number;
    isLiked?: boolean;
}

/**
 * TODO: implement [isLiked]
 * @param title
 * @param rating
 * @param year
 * @param isLiked
 * @param cover
 * @constructor
 */
const MovieTrailItem: FC<MovieItemProps> = ({title, rating, year, isLiked, cover}: MovieItemProps): JSX.Element => {
    return (
        <div className="mx-2 w-32 md:w-44 group cursor-pointer relative">
            <div
                className="w-32 h-44 md:w-44 md:h-64 overflow-hidden transition-all rounded-md relative md:group-hover:overflow-visible">
                <div
                    className="md:h-64 md:w-44 relative rounded-md overflow-hidden transition-all delay-75 left-0 top-0 md:group-hover:shadow-lg md:group-hover:h-80 md:group-hover:w-56 md:group-hover:z-10 md:group-hover:top-[-5%] md:group-hover:left-[-13%]">
                    <img
                        className="rounded-md"
                        src={cover}
                        alt={title}
                    />
                    <PlayIcon
                        className="w-20 transition-all delay-200 absolute shadow-2xl text-red-600 opacity-0 top-[calc(50%-3rem)] right-[calc(50%-2rem)] md:group-hover:opacity-100"/>
                </div>
            </div>
            <div className="flex flex-col py-2">
                <span className="flex justify-between">
                    <span className="flex">
                        <StarIcon className="w-4 text-yellow-500 mr-1"/> <span
                        className="text-yellow-500">{rating}</span>
                    </span>
                    <span>{year}</span>
                </span>
                <span className="font-semibold mt-2 block">{title}</span>
            </div>
        </div>
    );
};

export default MovieTrailItem;
