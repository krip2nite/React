import { useQuery } from "@tanstack/react-query";
import { Genre } from "../model/fetch-genre-types";
import apiClient from "../services/api-client"
import { FetchDataResponse } from "../model/fetch-data-response";

export default function useGenre() {
    return useQuery<Genre[], Error>({
        queryKey: ['genres'],
        queryFn: () => apiClient.get<FetchDataResponse<Genre>>("/genres").then(res => res.data.results),
        staleTime: 3600 * 1000 * 24
    })
}