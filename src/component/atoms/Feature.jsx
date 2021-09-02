import { Box, Flex, flexbox, Heading, Text } from "@chakra-ui/react";

export const Feature = ({ title, desc, date, ...rest }) => {
  return (
    <Box
      mt={0}
      pt={0}
      mb={10}
      justify="left"
      shadow="md"
      borderWidth="1px"
      {...rest}
      w={800}
      borderBottom="double"
    >
      <Flex mb={2}>
        <Heading fontSize="xl" mt={0} mr={20} mb={2}>
          {title}
        </Heading>
        <Text mt={8} mb={2}>
          {date}
        </Text>
      </Flex>
      <Text mt={4} mb={4}>
        {desc}
      </Text>
    </Box>
  );
};
