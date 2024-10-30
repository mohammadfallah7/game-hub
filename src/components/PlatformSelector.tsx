import usePlatforms from "@/hooks/use-platforms";
import { Button } from "./ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { BsChevronDown } from "react-icons/bs";
import { Spinner } from "@chakra-ui/react";

const PlatformSelector = () => {
  const { data: platforms, isLoading } = usePlatforms();

  return (
    <MenuRoot onSelect={({ value }) => console.log(value)}>
      <MenuTrigger>
        <Button size="sm">
          Platforms {isLoading ? <Spinner size="sm" /> : <BsChevronDown />}
        </Button>
      </MenuTrigger>
      <MenuContent>
        {platforms.map((platform) => (
          <MenuItem key={platform.id} value={platform.id.toString()}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
