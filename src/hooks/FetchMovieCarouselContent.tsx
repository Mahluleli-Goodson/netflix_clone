import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import useFetchTvContent from "./FetchTVContent";
import {environment} from "../config/env";
import {IMovie} from "../interfaces/IMovie";

const useFetchMovieCarouselContent = () => {
    const [carouselContent, setCarouselContent]: [IMovie[] | undefined, Dispatch<SetStateAction<any>>] = useState();
    const [error, setError]: [any, Dispatch<SetStateAction<any>>] = useState();
    const {apiResponse} = useFetchTvContent(environment.MOVIES.TRENDING);

    const fetchContent = () => {
        try {
            if (!apiResponse) {
                console.debug("[useFetchMovieCarouselContent] :: Initial hook load");
                return;
            }
            const {results}: { results: IMovie[] } = apiResponse.data;
            setCarouselContent(results);

        } catch (e) {
            console.error(e);
            setError(e);
        }
    }

    useEffect(fetchContent, [apiResponse])

    return {carouselContent, error};
};

export default useFetchMovieCarouselContent;
