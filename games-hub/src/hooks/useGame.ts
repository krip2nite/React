import useGameQueryStore from "../../state-management/store";
import { Game } from "../model/fetch-game-types";
import useData from "./useData";

export default function useGame(): {data: Game[], isLoading: boolean, error: string} {
    const {genre, search, ordering, platform} = useGameQueryStore();
    return useData<Game>("/games", {params:{genres: genre, parent_platforms:platform?.id,
         ordering: ordering?.value, search: search}}, [genre, search, ordering?.value, platform?.id]);
}