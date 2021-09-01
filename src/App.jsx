import { Box, Heading } from "@chakra-ui/react";
import "./App.css";
import { AboutMe } from "./component/AboutMe";
import { Icons } from "./component/Icons";

function App() {
  return (
    <>
      <Box bg={{ bacolor: "gray.500" }} className="App">
        <Heading color={"teal"}>ABOUT ME</Heading>
      </Box>
      <AboutMe />
      <Icons />
    </>
  );
}

export default App;
