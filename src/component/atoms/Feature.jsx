import { Box, Heading, Text } from "@chakra-ui/react";

export const Feature = ({ title, desc, ...rest }) => {
  return (
    <Box
      p={5}
      mt={0}
      pt={0}
      justify="left"
      shadow="md"
      borderWidth="1px"
      {...rest}
    >
      <Heading fontSize="xl" mt={0}>
        {title}
      </Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
};
