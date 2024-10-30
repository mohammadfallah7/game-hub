import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";

interface ISearchInputProps {
  onSearch: (search: string) => void;
}

const SearchInput: React.FC<ISearchInputProps> = ({ onSearch }) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current && ref.current.value) onSearch(ref.current.value);
      }}
    >
      <InputGroup startElement={<FaSearch />} width="full">
        <Input
          ref={ref}
          placeholder="Search the game"
          borderRadius={20}
          variant="subtle"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
