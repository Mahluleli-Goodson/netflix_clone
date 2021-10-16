import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {IMovie} from "../interfaces/IMovie";
import useFetchTvContent from "./FetchTVContent";
import {environment} from "../config/env";

const useFetchSimilarMovies = (mediaId: number) => {
    const [recommended, setRecommended]: [IMovie[], Dispatch<SetStateAction<any>>] = useState([]);
    const [error, setError]: [any, Dispatch<SetStateAction<any>>] = useState();
    const {apiResponse} = useFetchTvContent(
        mediaId === 0 ? undefined : `${environment.MOVIES_URL}/${mediaId}/recommendations`
    );

    const fetchContent = () => {
        if (mediaId === 0) {
            setRecommended([]);
            return;
        }

        try {
            if (!apiResponse) {
                console.debug("[useFetchSimilarMovies] :: Initial hook load");
                return;
            }
            const {results}: { results: IMovie[] } = apiResponse.data;
            setRecommended(results);

        } catch (e) {
            console.error(e);
            setError(e);
        }
    }

    useEffect(fetchContent, [apiResponse, mediaId])

    return {recommended, error};
};

export default useFetchSimilarMovies;
