import { ChakraProvider } from "@chakra-ui/react";

import { AboutMe } from "../component/about/AboutMe";
import { Carrer } from "../component/carrer/Carrer";
import { Topnav } from "../component/top/Topnav";

export const Home = () => {
  return (
    <>
      <ChakraProvider>
        <Topnav />
        <AboutMe />
        <Carrer />
      </ChakraProvider>
    </>
  );
};
