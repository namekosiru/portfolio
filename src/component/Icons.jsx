import { Box, Flex, Link } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faBloggerB } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Router } from "react-router-dom";

export const Icons = () => {
  return (
    <Flex align="center" justify="center" mt={5}>
      <Box mr={4}>
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
        Email
      </Box>
      <Link href="https://github.com/namekosiru">
        <Box mr={4}>
          <FontAwesomeIcon icon={faGithub} size="lg" />
          GitHub
        </Box>
      </Link>
      <Link href="https://namekosiru.hatenablog.com/">
        <Box mr={4}>
          <FontAwesomeIcon icon={faBloggerB} size="lg" />
          ブログ
        </Box>
      </Link>
    </Flex>
  );
};
