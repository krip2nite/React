import { SortOption } from "../components/SortSelector";
import ParentPlatform from "./ParentPlatform";

export default interface GameQuery {
    genreName: string | null;
    platform: ParentPlatform | null;
    searchText: string | null,
    ordering: SortOption | null
}