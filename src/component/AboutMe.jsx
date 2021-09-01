import { Image, Text, VStack, Box } from "@chakra-ui/react";

import Img from "../sources/icon.jpg";
import { HeadingText } from "./atoms/HeadingText";
import { Icons } from "./Icons";

export const AboutMe = () => {
  return (
    <>
      <HeadingText>About Me</HeadingText>
      <Box align="center">
        <Image
          borderRadius="md"
          src={Img}
          width={200}
          height={200}
          alt="icon"
        />
        <Text mt={-5} mb={0} fontSize={20} fontWeight={"bold"}>
          namekosiru
        </Text>
        <Icons />
      </Box>
    </>
  );
};
