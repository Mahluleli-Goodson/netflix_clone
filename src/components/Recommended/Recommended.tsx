import {FC} from "react";
import CategoriesHeader from "../CategoriesHeader/CategoriesHeader";
import {CatItemProps} from "../CategoriesHeader/CategoryItem";
import {PlusIcon, TrendingUpIcon} from "@heroicons/react/outline";
import {FireIcon, StarIcon} from "@heroicons/react/solid";
import Genres from "../Genres/Genres";
import MoviesTrail from "../MoviesTrail/MoviesTrail";
import useFetchMovieCarouselContent from "../../hooks/FetchMovieCarouselContent";

const recommendedMenu: CatItemProps[] = [
    {Icon: <TrendingUpIcon className="w-5 mx-2 self-start"/>, title: "Trending", isActive: true},
    {Icon: <FireIcon className="w-5 mx-2 self-start"/>, title: "Popular"},
    {Icon: <StarIcon className="w-5 mx-2 self-start"/>, title: "Premier"},
    {Icon: <PlusIcon className="w-5 mx-2 self-start"/>, title: "Recently Added"},
];

const genres: string[] = ["Action", "Comedy", "Crime", "Horror", "Thrillers", "Fantasy", "Science-Fiction", "Drama", "Romance", "Western", "Historical", "Musicals", "Animation", "War"];

const Recommended: FC = (): JSX.Element => {

    const {carouselContent} = useFetchMovieCarouselContent();

    return (
        <>
            <div className="border-b-[0.01rem] border-gray-600 lg:mx-40">
                <CategoriesHeader menuList={recommendedMenu}/>
            </div>
            <div className="lg:mx-40 py-5 flex items-center">
                <Genres list={genres}/>
            </div>
            <div className="w-full px-4">
                <MoviesTrail carousel movieList={carouselContent}/>
            </div>
        </>

    );
};

export default Recommended;
