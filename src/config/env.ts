
// todo: types
import {API_TOKEN} from "./local";

const IMAGE_URL: string = "https://image.tmdb.org/t/p";
const MOVIES_URL: string = "https://api.themoviedb.org/3/movie";
export const environment = {
    API_TOKEN: API_TOKEN,
    IMAGE_PATH: {
        BASE: IMAGE_URL,
        ORIGINAL: `${IMAGE_URL}/original`,
        W200: `${IMAGE_URL}/w200`,
        W500: `${IMAGE_URL}/w500`,
    },
    MOVIES: {
        POPULAR: `${MOVIES_URL}/popular`,
        TRENDING: `${MOVIES_URL}/now_playing`,
    }
};
