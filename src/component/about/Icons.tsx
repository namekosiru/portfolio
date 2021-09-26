import { Box, Flex, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faBloggerB } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Icons = () => {
  return (
    <Flex align="center" justify="center" mt={0} mb={5}>
      <Box mr={4}>
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
        Email
      </Box>
      <Link
        href="https://github.com/namekosiru"
        textDecoration="none"
        color="black"
        _hover={{ opacity: 0.8 }}
      >
        <Box mr={4}>
          <FontAwesomeIcon icon={faGithub} size="lg" />
          GitHub
        </Box>
      </Link>
      <Link
        href="https://namekosiru.hatenablog.com/"
        textDecoration="none"
        color="black"
        _hover={{ opacity: 0.8 }}
      >
        <Box mr={4}>
          <FontAwesomeIcon icon={faBloggerB} size="lg" />
          ブログ
        </Box>
      </Link>
    </Flex>
  );
};
