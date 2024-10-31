import { ordering } from "@/utilities/constants";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Button } from "./ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import useGameQuery from "@/stores/use-game-query";

const SortSelector: React.FC = () => {
  const sort = useGameQuery((state) => state.gameQuery.sort);
  const setSort = useGameQuery((state) => state.setSort);
  const el = ordering.find((o) => o.value === sort);

  return (
    <MenuRoot onSelect={({ value }) => setSort(value)}>
      <MenuTrigger asChild>
        <Button size="sm">
          Ordered by: {el?.label || "Relevance"} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {ordering.map((order) => (
          <MenuItem key={order.label} value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
