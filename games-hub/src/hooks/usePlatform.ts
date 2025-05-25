
import ParentPlatform from "../model/ParentPlatform";
import useData from "./useData";

export default function usePlatform(): {data: ParentPlatform[], isLoading: boolean, error: string} {
    return useData<ParentPlatform>("/platforms/lists/parents")
}