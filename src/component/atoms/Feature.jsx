import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const Feature = ({ title, desc, date }) => {
  return (
    <Box my={2} w={{ base: 250, md: 800 }} borderBottom="double">
      <Flex pb={2}>
        <Heading fontSize="xl" mr={10} fontSize={{ base: "16px", md: "22px" }}>
          {title}
        </Heading>
        <Text fontSize={{ base: "15px", md: "18px" }}>{date}</Text>
      </Flex>
      <Text fontSize={{ base: "15px", md: "18px" }}>{desc}</Text>
    </Box>
  );
};
