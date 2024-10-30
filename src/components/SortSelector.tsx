import { ordering } from "@/utilities/constants";
import { Button } from "./ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { BsChevronDown } from "react-icons/bs";
import React from "react";

interface ISortSelectorProps {
  sort: string;
  onSort: (sort: string) => void;
}

const SortSelector: React.FC<ISortSelectorProps> = ({ sort, onSort }) => {
  const el = ordering.find((o) => o.value === sort);

  return (
    <MenuRoot onSelect={({ value }) => onSort(value)}>
      <MenuTrigger>
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
