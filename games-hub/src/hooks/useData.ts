import { useEffect, useState } from "react";
import api from '../services/api-client'
import { AxiosError } from "axios";
import { FetchDataResponse } from "../model/fetch-data-response";

export default function useData<T>(endpoint: string): {data: T[] , error: string}{
    const [data, setGenres] = useState<T[]>([])
    const [error, setError] = useState<string>('');
    useEffect(()=>{
       api.get<FetchDataResponse<T>>(endpoint)
       .then(res => setGenres(res.data.results))
       .catch((e: AxiosError) => {
        setError(e.message);
       })
    }, [])
    return {data,error};
}