import { ChakraProvider } from "@chakra-ui/react";
import { AboutMe } from "../component/about/AboutMe";
import { Carrer } from "../component/carrer/Carrer";

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
