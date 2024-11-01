import useGameQuery from "@/stores/use-game-query";
import { Input } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { InputGroup } from "./ui/input-group";

const SearchInput: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearch = useGameQuery((state) => state.setSearch);
  const navigate = useNavigate();

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearch(ref.current.value);
          navigate("/");
        }
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
