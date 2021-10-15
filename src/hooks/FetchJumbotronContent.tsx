import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import useFetchTvContent from "./FetchTVContent";
import {environment} from "../config/env";
import {IMovie} from "../interfaces/IMovie";

const useFetchJumbotronContent = () => {
    const [sliderContent, setSliderContent]: [IMovie[] | undefined, Dispatch<SetStateAction<any>>] = useState();
    const [error, setError]: [any, Dispatch<SetStateAction<any>>] = useState();
    const {apiResponse} = useFetchTvContent(environment.MOVIES.TRENDING);

    const fetchContent = () => {
        try {
            if (!apiResponse) {
                console.debug("[useFetchJumbotronContent] :: Initial hook load");
                return;
            }

            const {results}: { results: IMovie[] } = apiResponse.data;
            const trimmed: any[] = results.length > 3 ? results.slice(0, 3) : results;
            setSliderContent(trimmed);

        } catch (e) {
            console.error(e);
            setError(e);
        }
    }

    useEffect(fetchContent, [apiResponse])

    return {sliderContent, error};
};

export default useFetchJumbotronContent;
