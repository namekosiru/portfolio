import React from "react";
import { Heading } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
};

export const HeadingText = (props: Props) => {
  const { children } = props;
  return (
    <Heading
      mt={0}
      mb={0}
      align="center"
      size="lg"
      fontSize="40px"
      color={"teal"}
    >
      {children}
    </Heading>
  );
};
