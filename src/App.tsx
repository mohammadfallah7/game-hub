import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Grid gridColumn={12} px={4}>
      <GridItem colSpan={12}>
        <Navbar />
      </GridItem>

      <GridItem display={{ base: "none", lg: "block" }} colSpan={{ lg: 2 }}>
        Sidebar
      </GridItem>

      <GridItem colSpan={{ base: 12, lg: 10 }}>Main</GridItem>
    </Grid>
  );
};

export default App;
