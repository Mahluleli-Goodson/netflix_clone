import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import axios, {AxiosResponse} from "axios";

const useJumbotronData = () => {
    const [sliderContent, setSliderContent]: [any[] | undefined, Dispatch<SetStateAction<any>>] = useState();
    const [error, setError]: [any, Dispatch<SetStateAction<any>>] = useState();

    const fetchPopular = async () => {
        try {
            const url: string = "https://api.themoviedb.org/3/movie/popular?api_key=2683bad88954e093649e3ed53acfe44f&language=en-US&page=1";
            const resp: AxiosResponse<never> = await axios.get(url, {headers: {"Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjgzYmFkODg5NTRlMDkzNjQ5ZTNlZDUzYWNmZTQ0ZiIsInN1YiI6IjYxNWIxYzgzNjllYjkwMDA4YTNlYzg5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5K4eLdmTAH5e1jCpsbKBf7-8U8XWxJIqF__hzrAzXQY`}});
            const {results}: { results: [] } = resp.data;
            const trimmed: any[] = results.length > 3 ? results.slice(0, 3) : results;
            setSliderContent(trimmed);

        } catch (e) {
            console.error(e);
            setError(e);
        }
    }

    useEffect(() => {
        fetchPopular().catch(e => console.error(e));
    }, []);

    return {sliderContent, error};
};

export default useJumbotronData;
