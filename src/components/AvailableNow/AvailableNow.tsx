import {FC} from "react";
import {CatItemProps} from "../CategoriesHeader/CategoryItem";
import {CheckIcon, FilmIcon, SearchIcon, VideoCameraIcon} from "@heroicons/react/outline";
import CategoriesHeader from "../CategoriesHeader/CategoriesHeader";
import Genres from "../Genres/Genres";
import MoviesTrail from "../MoviesTrail/MoviesTrail";
import Sortable from "../Sortable/Sortable";
import useFetchMovieListContent from "../../hooks/FetchMovieListContent";

const availableNowMenu: CatItemProps[] = [
    {Icon: <FilmIcon className="w-5 mx-2"/>, title: "Movies", isActive: true},
    {Icon: <VideoCameraIcon className="w-5 mx-2"/>, title: "Series"},
    {Icon: <CheckIcon className="w-5 mx-2"/>, title: "Original Series"},
    {Icon: <SearchIcon className="w-5 mx-2"/>, title: "Search"},
];

const genres: string[] = ["Action", "Adventure", "Animation", "Biography", "Thrillers", "Comedy", "Fantasy", "Science-Fiction", "Drama", "Romance", "Western", "Historical", "Musicals", "Crime", "War"];

const AvailableNow: FC = (): JSX.Element => {

    const {listContent} = useFetchMovieListContent();

    return (
        <>
            <div className="border-b-[0.01rem] border-gray-600 xl:mx-40">
                <CategoriesHeader menuList={availableNowMenu}/>
            </div>
            <div className="xl:mx-40 py-5 flex items-center">
                <Genres list={genres}/>
            </div>
            <div className="mx-10 xl:mx-40 py-5 flex items-center">
                <Sortable/>
            </div>
            <div className="w-full md:px-5">
                <MoviesTrail movieList={listContent}/>
            </div>
        </>

    );
};

export default AvailableNow;
