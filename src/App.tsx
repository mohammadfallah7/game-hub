import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Box px={5}>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default App;
