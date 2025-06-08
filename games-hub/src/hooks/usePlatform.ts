
import { useQuery } from "@tanstack/react-query";
import ParentPlatform from "../model/ParentPlatform";
import apiClient from "../services/api-client";
import { FetchDataResponse } from "../model/fetch-data-response";

export default function usePlatform(){
    return useQuery<ParentPlatform[], Error>({
        queryKey: ['platforms'],
        queryFn: () => apiClient.get<FetchDataResponse<ParentPlatform>>("/platforms/lists/parents").then(res => res.data.results),
        staleTime: 3600 * 1000 * 24
    })
}