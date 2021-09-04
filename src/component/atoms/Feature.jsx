import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const Feature = ({ title, desc, date }) => {
  return (
    <Box my={2} w={{ base: 400, md: 800 }} borderBottom="double">
      <Flex pb={2}>
        <Heading fontSize="xl" mr={10}>
          {title}
        </Heading>
        <Text>{date}</Text>
      </Flex>
      <Text>{desc}</Text>
    </Box>
  );
};
