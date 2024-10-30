import { Platform } from "@/hooks/use-games";
import usePlatforms from "@/hooks/use-platforms";
import { Spinner } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Button } from "./ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";

interface IPlatformSelectorProps {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector: React.FC<IPlatformSelectorProps> = ({
  selectedPlatform,
  onSelectPlatform,
}) => {
  const { data: platforms, isLoading } = usePlatforms();

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button size="sm">
          {selectedPlatform?.name || "Platforms"}{" "}
          {isLoading ? <Spinner size="sm" /> : <BsChevronDown />}
        </Button>
      </MenuTrigger>
      <MenuContent>
        {platforms.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
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
