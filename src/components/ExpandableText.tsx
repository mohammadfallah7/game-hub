import { Text } from "@chakra-ui/react";
import { Button } from "./ui/button";
import { useState } from "react";

interface IExpandableTextProps {
  children: string;
}

const ExpandableText: React.FC<IExpandableTextProps> = ({ children }) => {
  const [isExpand, setExpand] = useState(false);
  const limit = 300;

  if (children.length <= limit) return <Text>{children}</Text>;

  const content = isExpand ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {content}
      <Button
        ml={2}
        size="xs"
        colorPalette="yellow"
        onClick={() => setExpand(!isExpand)}
      >
        {isExpand ? "Show less" : "Read more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
