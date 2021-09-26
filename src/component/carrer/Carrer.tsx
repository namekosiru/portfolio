import { VStack } from "@chakra-ui/react";

import { Feature } from "../atoms/Feature";
import { HeadingText } from "../atoms/HeadingText";
import { CarrerList } from "./CarrerList";

export const Carrer = () => {
  return (
    <>
      <HeadingText>Carrer</HeadingText>
      <VStack spacing="24px">
        {CarrerList.map((data) => (
          <Feature
            title={data["company"]}
            desc={data["content"]}
            date={data["date"]}
          />
        ))}
      </VStack>
    </>
  );
};
