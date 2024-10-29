import { HStack } from "@chakra-ui/react";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <HStack padding={5}>
      <Button>Click Me</Button>
      <Button>Click Me</Button>
    </HStack>
  );
};

export default App;
