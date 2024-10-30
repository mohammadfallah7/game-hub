import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

interface INavbarProps {
  onSearch: (search: string) => void;
}

const Navbar: React.FC<INavbarProps> = ({ onSearch }) => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
