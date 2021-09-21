import {FC} from "react";
import {StarIcon} from "@heroicons/react/solid";

interface MovieItemProps {
    cover: string;
    title: string;
    rating: number;
    year: number;
    isLiked?: boolean;
}

const MovieTrailItem: FC<MovieItemProps> = ({title, rating, year, isLiked, cover}: MovieItemProps): JSX.Element => {
    return (
        <div className="m-4 w-44 group transition-all ease-linear">
            <div className="w-44 h-64 overflow-hidden rounded-md">
                <img
                    className=""
                    src={cover}
                    alt={title}
                />
            </div>
            <div className="flex flex-col py-2">
                <span className="flex justify-between">
                    <span className="flex">
                        <StarIcon className="w-4 text-yellow-500 mr-1" /> <span className="text-yellow-500">{rating}</span>
                    </span>
                    <span>{year}</span>
                </span>
                <span className="font-semibold mt-2 block">{title}</span>
            </div>
        </div>
    );
};

export default MovieTrailItem;
