import { ordering } from "@/utilities/constants";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Button } from "./ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";

interface ISortSelectorProps {
  sort: string;
  onSort: (sort: string) => void;
}

const SortSelector: React.FC<ISortSelectorProps> = ({ sort, onSort }) => {
  const el = ordering.find((o) => o.value === sort);

  return (
    <MenuRoot onSelect={({ value }) => onSort(value)}>
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
