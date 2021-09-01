import { Heading } from "@chakra-ui/react";

export const HeadingText = (props) => {
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
