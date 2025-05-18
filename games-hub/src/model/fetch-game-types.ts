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
        }
    ];
    metacritic: number;
}