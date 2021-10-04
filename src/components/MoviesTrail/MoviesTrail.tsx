import {FC} from "react";
import MovieTrailItem from "./MovieTrailItem";
import useHorizontalWheeler from "../../hooks/HorizontalWheeler";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/outline";

const movieList: Array<{ title: string, rating: number, year: number, isLiked?: boolean, cover: string }> = [
    {
        title: "Jurassic World: Fallen Kingdom",
        year: 2018,
        rating: 8.9,
        isLiked: true,
        cover: "https://i.pinimg.com/originals/f1/70/cf/f170cf885a6373070db4a8eeb7c1f036.jpg"
    },
    {
        title: "Jurassic World: Fallen Kingdom",
        year: 2018,
        rating: 8.9,
        cover: "https://i.pinimg.com/originals/f1/70/cf/f170cf885a6373070db4a8eeb7c1f036.jpg"
    },
    {
        title: "Jurassic World: Fallen Kingdom",
        year: 2018,
        rating: 8.9,
        isLiked: true,
        cover: "https://i.pinimg.com/originals/f1/70/cf/f170cf885a6373070db4a8eeb7c1f036.jpg"
    },
    {
        title: "Jurassic World: Fallen Kingdom",
        year: 2018,
        rating: 8.9,
        cover: "https://i.pinimg.com/originals/f1/70/cf/f170cf885a6373070db4a8eeb7c1f036.jpg"
    },
    {
        title: "Jurassic World: Fallen Kingdom",
        year: 2018,
        rating: 8.9,
        isLiked: true,
        cover: "https://i.pinimg.com/originals/f1/70/cf/f170cf885a6373070db4a8eeb7c1f036.jpg"
    },
    {
        title: "Jurassic World: Fallen Kingdom",
        year: 2018,
        rating: 8.9,
        isLiked: true,
        cover: "https://i.pinimg.com/originals/f1/70/cf/f170cf885a6373070db4a8eeb7c1f036.jpg"
    },
    {
        title: "Jurassic World: Fallen Kingdom",
        year: 2018,
        rating: 8.9,
        cover: "https://i.pinimg.com/originals/f1/70/cf/f170cf885a6373070db4a8eeb7c1f036.jpg"
    },
    {
        title: "Jurassic World: Fallen Kingdom",
        year: 2018,
        rating: 8.9,
        isLiked: true,
        cover: "https://i.pinimg.com/originals/f1/70/cf/f170cf885a6373070db4a8eeb7c1f036.jpg"
    },
    {
        title: "Jurassic World: Fallen Kingdom",
        year: 2018,
        rating: 8.9,
        cover: "https://i.pinimg.com/originals/f1/70/cf/f170cf885a6373070db4a8eeb7c1f036.jpg"
    },
    {
        title: "Jurassic World: Fallen Kingdom",
        year: 2018,
        rating: 8.9,
        isLiked: true,
        cover: "https://i.pinimg.com/originals/f1/70/cf/f170cf885a6373070db4a8eeb7c1f036.jpg"
    },
];

interface MoviesTrailProps {
    carousel?: boolean;
}

const MoviesTrail: FC<MoviesTrailProps> = ({carousel}: MoviesTrailProps): JSX.Element => {

    const {wheelRef} = useHorizontalWheeler();

    const widget: JSX.Element[] = movieList.map((movie, idx) => {
        const {title, rating, year, isLiked, cover} = movie;
        return <MovieTrailItem key={idx} cover={cover} title={title} rating={rating} year={year} isLiked={isLiked}/>;
    });

    return (
        <section className="relative">
            {
                carousel
                &&
                <>
                    <div
                        className="absolute top-0 bottom-0 flex justify-center items-center bg-gradient-to-r from-gray-900"
                        data-role="left-control">
                        <ChevronLeftIcon className="w-8"/>
                    </div>
                    <div
                        className="absolute top-0 bottom-0 right-0 flex justify-center items-center bg-gradient-to-l from-gray-900"
                        data-role="right-control">
                        <ChevronRightIcon className="w-8"/>
                    </div>
                </>
            }
            <div
                ref={carousel ? wheelRef : null}
                className={`${carousel ? "overflow-x-scroll scrollbar-hidden flex" : "grid"}`}
                style={!carousel ? {gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"} : {}}
            >
                {widget}
            </div>
        </section>
    );
};

export default MoviesTrail;
