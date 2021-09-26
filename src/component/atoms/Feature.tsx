import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
type Props = {
  title: string;
  desc: string;
  date: string;
};

export const Feature = (props: Props) => {
  const { title, desc, date } = props;
  const flag = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {flag ? (
        <Box my={2} w={"sm"} borderBottom="double">
          <Heading mr={10} fontSize={"16px"}>
            {title}
          </Heading>
          <Text fontSize={"15px"}>{date}</Text>
          <Text fontSize={"15px"}>{desc}</Text>
        </Box>
      ) : (
        <Box my={2} w={"2xl"} borderBottom="double">
          <Flex pb={2}>
            <Heading mr={10} fontSize={"22px"}>
              {title}
            </Heading>
            <Text fontSize={"18px"}>{date}</Text>
          </Flex>
          <Text fontSize={"18px"}>{desc}</Text>
        </Box>
      )}
    </>
  );
};
