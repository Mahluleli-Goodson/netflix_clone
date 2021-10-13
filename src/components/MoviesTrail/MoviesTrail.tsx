import {FC} from "react";
import MovieTrailItem from "./MovieTrailItem";
import useHorizontalWheeler from "../../hooks/HorizontalWheeler";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/outline";
import "./styles.css";
import {IMovie} from "../../interfaces/IMovie";
import {environment} from "../../config/env";

interface IMoviesTrailProps {
    carousel?: boolean;
    movieList: IMovie[] | undefined
}

const MoviesTrail: FC<IMoviesTrailProps> = ({carousel, movieList}: IMoviesTrailProps): JSX.Element => {

    const {wheelRef} = useHorizontalWheeler();

    const widget: JSX.Element[] | undefined = movieList?.map((movie, idx) => {
        const {title, vote_average: rating, release_date, poster_path} = movie;
        const year = new Date(release_date ?? "2021").getFullYear();
        const cover = `${environment.IMAGE_PATH.W500}/${poster_path}`;
        const isLiked = false;
        return <MovieTrailItem key={idx} cover={cover} title={title} rating={rating} year={year} isLiked={isLiked}/>;
    });

    return (
        <section className="relative">
            {
                carousel
                &&
                <>
                    <div
                        className="absolute top-0 bottom-0 flex justify-center items-center bg-gradient-to-r from-gray-900 z-[1]"
                        data-role="left-control">
                        <ChevronLeftIcon className="w-8"/>
                    </div>
                    <div
                        className="absolute top-0 bottom-0 right-0 flex justify-center items-center bg-gradient-to-l from-gray-900 z-[1]"
                        data-role="right-control">
                        <ChevronRightIcon className="w-8"/>
                    </div>
                </>
            }
            <div
                ref={carousel ? wheelRef : null}
                className={`${carousel ? "overflow-x-scroll scrollbar-hidden flex" : "nc-movies-trail__container-inner"}`}
            >
                {widget ?? ""}
            </div>
        </section>
    );
};

export default MoviesTrail;
