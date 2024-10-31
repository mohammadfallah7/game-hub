import usePlatform from "@/hooks/use-platform";
import usePlatforms from "@/hooks/use-platforms";
import { Spinner } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Button } from "./ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import useGameQuery from "@/stores/use-game-query";

const PlatformSelector: React.FC = () => {
  const { data: platforms, isLoading } = usePlatforms();
  const selectedPlatform = useGameQuery((state) => state.gameQuery.platform);
  const setPlatform = useGameQuery((state) => state.setPlatform);
  const platform = usePlatform(selectedPlatform!);

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button size="sm">
          {platform?.name || "Platforms"}
          {isLoading ? <Spinner size="sm" /> : <BsChevronDown />}
        </Button>
      </MenuTrigger>
      <MenuContent>
        {platforms?.map((platform) => (
          <MenuItem
            onClick={() => setPlatform(platform.id)}
            key={platform.id}
            value={platform.id.toString()}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
