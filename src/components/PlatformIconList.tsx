import { Platform } from "@/types/platforms.model";
import { HStack, Icon } from "@chakra-ui/react";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaAppStoreIos,
  FaGamepad,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa6";
import { SiAtari, SiCommodore, SiSega } from "react-icons/si";

interface IPlatformIconListProps {
  platforms: { platform: Platform }[];
}

const PlatformIconList: React.FC<IPlatformIconListProps> = ({ platforms }) => {
  const iconMap: { [key: string]: JSX.Element } = {
    pc: <FaWindows />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    ios: <FaAppStoreIos />,
    android: <FaAndroid />,
    mac: <FaApple />,
    web: <BsGlobe />,
    linux: <FaLinux />,
    nintendo: <BsNintendoSwitch />,
    atari: <SiAtari />,
    sega: <SiSega />,
    "commodore-amiga": <SiCommodore />,
    "3do": <FaGamepad />,
    "neo-geo": <FaGamepad />,
  };

  return (
    <HStack mt={2}>
      {platforms.map(({ platform }) => (
        <Icon key={platform.id} color="gray.500">
          {iconMap[platform.slug]}
        </Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
