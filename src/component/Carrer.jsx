import { Stack } from "@chakra-ui/react";

import { Feature } from "./atoms/Feature";
import { HeadingText } from "./atoms/HeadingText";
import { CarrerList } from "./CarrerList";

export const Carrer = () => {
  return (
    <>
      <HeadingText>Carrer</HeadingText>
      <Stack align="center">
        {CarrerList.map((data) => (
          <Feature title={data["company"]} desc={data["content"]} />
        ))}
      </Stack>
    </>
  );
};
