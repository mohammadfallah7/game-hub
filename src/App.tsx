import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Grid gridColumn={12}>
      <GridItem colSpan={12}>
        <Navbar />
      </GridItem>

      <GridItem
        display={{ base: "none", lg: "block" }}
        colSpan={{ lg: 2 }}
        bg="gold"
      >
        Sidebar
      </GridItem>

      <GridItem colSpan={{ base: 12, lg: 10 }} bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
