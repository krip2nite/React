import { Game } from "../model/fetch-game-types";
import ParentPlatform from "../model/ParentPlatform";
import useData from "./useData";

export default function useGame(selectedGenre: string | null, selectedPlatform: ParentPlatform | null): {data: Game[], isLoading: boolean, error: string} {
    return useData<Game>('/games', {params: {genres: selectedGenre, parent_platforms: selectedPlatform?.id}}, [selectedGenre, selectedPlatform]);
}