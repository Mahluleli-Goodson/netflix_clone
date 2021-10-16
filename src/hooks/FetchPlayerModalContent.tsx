import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {IMovieVideo} from "../interfaces/IMovieVideo";
import UIHelper from "../helpers/UIHelper";
import useFetchMovieWithVideos from "./FetchMovieWithVideos";
import useFetchSimilarMovies from "./FetchSimilarMovies";

const useFetchPlayerModalContent = (mediaId: number) => {
    const [videoList, setVideoList]: [IMovieVideo[], Dispatch<SetStateAction<any>>] = useState([]);
    const [videoURL, setVideoURL]: [string | undefined, Dispatch<SetStateAction<any>>] = useState();
    const {movieDetails} = useFetchMovieWithVideos(mediaId);
    const {recommended} = useFetchSimilarMovies(mediaId);

    const handleVideoList = (): void => {
        setVideoList(movieDetails ? movieDetails.videos.results : []);
    }

    const filterYTVideo = (): void => {
        setVideoURL(undefined);

        const desiredList: IMovieVideo[] = videoList?.filter((item, idx) => {
            return (item.type.toLowerCase() === "trailer" && item.size >= 720 && item.site.toLowerCase() === "youtube");
        }).sort((a, b) => b.size - a.size);

        if (desiredList.length > 0) {
            const desiredVideo: IMovieVideo = desiredList[0];
            const ytURL = UIHelper.makeYTEmbedURL(desiredVideo.key);
            setVideoURL(ytURL);
        }
    }

    useEffect(filterYTVideo, [videoList]);
    useEffect(handleVideoList, [movieDetails]);

    return {videoURL, movieDetails, recommended};
};

export default useFetchPlayerModalContent;
