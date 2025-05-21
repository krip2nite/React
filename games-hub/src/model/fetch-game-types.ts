export interface Platform {
    platform: {
        name: string
        slug: string
    }

}
export interface Game {
    id: number;
    name: string;
    background_image: string,
    metacritic: number,
    parent_platforms: Platform[]
    genres : string;
}