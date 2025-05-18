export interface Game{
    id: number;
    name: string;
    background_image: string;
    platforms: [
        {
            platform: {
                id: number,
                slug: string,
                name: string
            },
            released_at: string,
            requirements: {
                minimum: string,
                recomnded: string
            }
        }
    ];
    metacritic: number;
}
export interface FetchGamesResponse{
    count: number;
    results: Game[];
}