import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import axios, {AxiosResponse} from "axios";
import {environment} from "../config/env";

const useFetchTvContent = (url: string | undefined) => {
    const [apiResponse, setApiResponse]: [AxiosResponse<never> | undefined, Dispatch<SetStateAction<any>>] = useState();

    const apiCall = async () => {

        if (url === undefined) {
            console.log("[undefined] URL rejected");
            return;
        }

        const resp: AxiosResponse<never> = await axios.get(
            url,
            {
                headers: {
                    "Authorization": `Bearer ${environment.API_TOKEN}`
                }
            }
        );
        setApiResponse(resp);
    };

    useEffect(() => {
        apiCall().catch((e) => console.error(e))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return {apiResponse};
};

export default useFetchTvContent;
