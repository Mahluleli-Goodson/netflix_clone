import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import useFetchTvContent from "./FetchTVContent";
import {environment} from "../config/env";
import {IMovieDetail} from "../interfaces/IMovieDetail";

const useFetchMovieWithVideos = (mediaId: number) => {
    const [error, setError]: [any, Dispatch<SetStateAction<any>>] = useState();
    const [movieDetails, setMovieDetails]: [IMovieDetail | undefined, Dispatch<SetStateAction<any>>] = useState();
    const {apiResponse} = useFetchTvContent(
        mediaId === 0 ? undefined : `${environment.MOVIES_URL}/${mediaId}?append_to_response=videos`
    );

    const fetchContent = (): void => {
        if (mediaId === 0) {
            setMovieDetails(undefined);
            return;
        }

        try {
            if (!apiResponse) {
                console.debug("[useFetchMovieWithVideos] :: Initial hook load");
                return;
            }
            const response: IMovieDetail = apiResponse.data;
            setMovieDetails(response);

        } catch (e) {
            console.error(e);
            setError(e);
        }
    }


    useEffect(fetchContent, [apiResponse, mediaId]);

    return {movieDetails, error};
};

export default useFetchMovieWithVideos;
