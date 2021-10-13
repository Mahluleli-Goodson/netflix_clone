import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import useFetchTvContent from "./FetchTVContent";
import {environment} from "../config/env";
import {IMovie} from "../interfaces/IMovie";

const useFetchMovieListContent = () => {
    const [listContent, setListContent]: [IMovie[] | undefined, Dispatch<SetStateAction<any>>] = useState();
    const [error, setError]: [any, Dispatch<SetStateAction<any>>] = useState();
    const {apiResponse} = useFetchTvContent(environment.MOVIES.POPULAR);

    const fetchContent = () => {
        try {
            if (!apiResponse) {
                console.error("useFetchMovieListContent::fetchPopular FAILED:", apiResponse);
                return;
            }
            const {results}: { results: IMovie[] } = apiResponse.data;
            setListContent(results);

        } catch (e) {
            console.error(e);
            setError(e);
        }
    }

    useEffect(fetchContent, [apiResponse])

    return {listContent, error};
};

export default useFetchMovieListContent;
