import { Platform } from "@/hooks/use-games";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaAppStoreIos,
} from "react-icons/fa6";
import { BsNintendoSwitch, BsGlobe } from "react-icons/bs";

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
