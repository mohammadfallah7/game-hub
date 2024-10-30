import useData from "./use-data";
import { Platform } from "./use-games";

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
