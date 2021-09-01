import { Image, Text, VStack } from "@chakra-ui/react";

import Img from "../sources/icon.jpg";

export const AboutMe = () => {
  return (
    <VStack>
      <Image borderRadius="md" src={Img} width={200} height={200} alt="icon" />
      <Text fontSize={16} fontWeight={"bold"} mb={10}>
        namekosiru
      </Text>
    </VStack>
  );
};
