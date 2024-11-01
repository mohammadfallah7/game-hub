import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IDefinitionItemProps {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem: React.FC<IDefinitionItemProps> = ({ term, children }) => {
  return (
    <Box as="dl">
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
