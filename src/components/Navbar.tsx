import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import { ColorModeButton } from "./ui/color-mode";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <HStack mb={5}>
      <Link to="/">
        <Box width="60px">
          <Image objectFit="cover" src={logo} />
        </Box>
      </Link>
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
