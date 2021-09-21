import {FC} from "react";
import MovieTrailItem from "./MovieTrailItem";

interface MoviesTrailProps {
    carousel?: boolean;
}

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

const MoviesTrail: FC<MoviesTrailProps> = ({carousel}: MoviesTrailProps): JSX.Element => {

    const widget: JSX.Element[] = movieList.map((movie, idx) => {
        const {title, rating, year, isLiked, cover} = movie;
        return <MovieTrailItem key={idx} cover={cover} title={title} rating={rating} year={year} isLiked={isLiked}/>;
    });

    return (
        <div
            className={`${carousel ? "overflow-x-scroll scrollbar-hidden flex" : "grid"}`}
            style={!carousel ? { gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"} : {}}
        >
            {widget}
        </div>
    );
};

export default MoviesTrail;
