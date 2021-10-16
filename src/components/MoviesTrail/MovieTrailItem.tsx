import "./styles.scss";
import {FC} from "react";
import {StarIcon} from "@heroicons/react/solid";
import {PlayIcon} from "@heroicons/react/outline";
import usePlayerModalHook from "../../hooks/PlayerModalHook";

interface MovieItemProps {
    showId: number;
    cover: string;
    title: string;
    rating: number;
    year: number;
    isLiked?: boolean;
    orientation?: string; // portrait [default] | landscape
}

/**
 * TODO: implement [isLiked]
 * @param title
 * @param rating
 * @param year
 * @param isLiked
 * @param cover
 * @param orientation
 * @param showId
 * @constructor
 */
const MovieTrailItem: FC<MovieItemProps> = (
    {title, rating, year, isLiked, cover, orientation, showId}: MovieItemProps
): JSX.Element => {

    const isLandscape: boolean = (orientation?.toLowerCase() === "landscape");
    const {openPlayableItem} = usePlayerModalHook();

    const onWatch = (show: number) => {
        openPlayableItem(show);
    }

    return (
        <div className={`group cursor-pointer relative mx-2 ${isLandscape ? "min-w-[13rem] h-auto" : "w-32 md:w-44"}`}>
            <div
                className={`overflow-hidden transition-all rounded-md relative ${isLandscape ? "h-28" : "w-32 h-44 md:w-44 md:h-64 md:group-hover:overflow-visible"}`}
                onClick={() => onWatch(showId)}
            >
                <div
                    className={isLandscape ? "" : "nc-movie-trail-item__cover-container"}>
                    <img
                        className="rounded-md w-full h-full"
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
                        className="text-yellow-500">{(rating).toFixed(1)}</span>
                    </span>
                    <span>{year}</span>
                </span>
                <span className="font-semibold mt-2 block">{title}</span>
            </div>
        </div>
    );
};

export default MovieTrailItem;
