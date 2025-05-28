import { Game } from "../model/fetch-game-types";
// import ParentPlatform from "../model/ParentPlatform";
import GameQuery from "../model/GameQuery"
import useData from "./useData";

// export default function useGame(selectedGenre: string | null, selectedPlatform: ParentPlatform | null): {data: Game[], isLoading: boolean, error: string} {
//     return useData<Game>('/games', {params: {genres: selectedGenre, parent_platforms: selectedPlatform?.id}}, [selectedGenre, selectedPlatform]);
// }

export default function useGame(gameQuery: GameQuery): {data: Game[], isLoading: boolean, error: string} {
    return useData<Game>("/games", {params:{genres: gameQuery.genreName, parent_platforms:gameQuery.platform?.id, ordering: gameQuery.ordering?.value}}, [gameQuery]);
}