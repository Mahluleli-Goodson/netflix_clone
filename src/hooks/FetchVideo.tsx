import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import useFetchTvContent from "./FetchTVContent";
import {environment} from "../config/env";
import {IMovieVideo} from "../interfaces/IMovieVideo";
import UIHelper from "../helpers/UIHelper";

const useFetchVideo = (mediaId: number) => {
    const [error, setError]: [any, Dispatch<SetStateAction<any>>] = useState();
    const [videoList, setVideoList]: [IMovieVideo[], Dispatch<SetStateAction<any>>] = useState([]);
    const [videoURL, setVideoURL]: [string | undefined, Dispatch<SetStateAction<any>>] = useState();
    const {apiResponse} = useFetchTvContent(mediaId === 0 ? undefined : `${environment.MOVIES_URL}/${mediaId}/videos`);

    const fetchContent = (): void => {
        try {
            setVideoList([]);
            if (!apiResponse) {
                console.debug("[useFetchVideo] :: Initial hook load");
                return;
            }
            const {results}: { results: IMovieVideo[] } = apiResponse.data;
            setVideoList(results);

        } catch (e) {
            console.error(e);
            setError(e);
        }
    }

    const filterYTVideo = (): void => {
        setVideoURL(undefined);

        const desiredList: IMovieVideo[] = videoList.filter((item, idx) => {
            return (item.type.toLowerCase() === "trailer" && item.size >= 720 && item.site.toLowerCase() === "youtube");
        }).sort((a, b) => b.size - a.size);

        if (desiredList.length > 0) {
            const desiredVideo: IMovieVideo = desiredList[0];
            const ytURL = UIHelper.makeYTEmbedURL(desiredVideo.key);
            setVideoURL(ytURL);
        }
    }

    useEffect(fetchContent, [apiResponse, mediaId])
    useEffect(filterYTVideo, [videoList])

    return {videoURL, error};
};

export default useFetchVideo;
