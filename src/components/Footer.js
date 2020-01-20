import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Flex, Text, Link } from "@chakra-ui/core";

const Footer = () => {
  return (
    <Flex justify="center" as="footer" mt="30px" px="20px">
      <Text fontFamily={"body"} fontWeight="700">
        <Link as={ReactLink} to="/">
          Find Brews{" "}
          <span role="img" aria-label="beer">
            🍺
          </span>
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
