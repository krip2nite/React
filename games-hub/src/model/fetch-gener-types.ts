export interface Genre{
    id: number;
    name: string;
}
export interface FetchGenersResponse{
    count: number;
    results: Genre[];
}