import {FC} from "react";
import MovieTrailItem from "./MovieTrailItem";
import useHorizontalWheeler from "../../hooks/HorizontalWheeler";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/outline";
import "./styles.scss";
import {IMovie} from "../../interfaces/IMovie";
import {environment} from "../../config/env";

interface IMoviesTrailProps {
    carousel?: boolean;
    movieList: IMovie[] | undefined;
    coverOrientation?: string; // portrait [default] | landscape
    chevronBlend?: string; // a tailwindcss gradient class [from-xxx]
}

const MoviesTrail: FC<IMoviesTrailProps> = (
    {carousel, movieList, coverOrientation, chevronBlend = "from-gray-900"}: IMoviesTrailProps
): JSX.Element => {

    const {wheelRef} = useHorizontalWheeler();
    const isLandscape: boolean = (coverOrientation?.toLowerCase() === "landscape");

    const widget: JSX.Element[] | undefined = movieList?.map((movie, idx) => {
        const {title, vote_average: rating, release_date, poster_path, backdrop_path, id} = movie;
        const year = new Date(release_date ?? "2021").getFullYear();
        const cover = `${environment.IMAGE_PATH.W500}/${isLandscape ? backdrop_path : poster_path}`;
        const isLiked = false;
        return <MovieTrailItem
            key={idx}
            cover={cover}
            orientation={coverOrientation}
            title={title}
            rating={rating}
            year={year}
            isLiked={isLiked}
            showId={id}
        />;
    });

    return (
        <section className="relative">
            {
                carousel
                &&
                <>
                    <div
                        className={`absolute top-0 bottom-0 -left-1 flex justify-center items-center bg-gradient-to-r z-[1] ${chevronBlend}`}
                        data-role="left-control">
                        <ChevronLeftIcon className="w-8 self-center"/>
                    </div>
                    <div
                        className={`absolute top-0 bottom-0 right-0 flex justify-center items-center bg-gradient-to-l z-[1] ${chevronBlend}`}
                        data-role="right-control">
                        <ChevronRightIcon className="w-8 self-center"/>
                    </div>
                </>
            }
            <div
                ref={carousel ? wheelRef : null}
                className={`${carousel ? "overflow-x-scroll scrollbar-hidden flex pt-4" : "nc-movies-trail__container-inner"}`}
            >
                {widget ?? ""}
            </div>
        </section>
    );
};

export default MoviesTrail;
