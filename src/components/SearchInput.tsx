import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <InputGroup startElement={<FaSearch />} width="full">
      <Input placeholder="Search the game" borderRadius={20} variant="subtle" />
    </InputGroup>
  );
};

export default SearchInput;
