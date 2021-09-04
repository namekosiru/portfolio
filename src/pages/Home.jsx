import { ChakraProvider } from "@chakra-ui/react";
import { AboutMe } from "../component/AboutMe";
import { Carrer } from "../component/Carrer";

export const Home = () => {
  return (
    <>
      <ChakraProvider>
        <AboutMe />
        <Carrer />
      </ChakraProvider>
    </>
  );
};
