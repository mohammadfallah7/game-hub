import usePlatforms from "./use-platforms";

const usePlatform = (id: number) => {
  const { data: platforms } = usePlatforms();

  return platforms.find((platform) => platform.id === id);
};

export default usePlatform;
