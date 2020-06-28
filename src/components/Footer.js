import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Flex, Text, Link, Stack } from "@chakra-ui/core";

const Footer = () => {
  return (
    <>
      <Stack mb="30px" />
      <Flex
        justify={["center", "space-between"]}
        flexWrap="wrap"
        as="footer"
        w="100%"
        maxW="980px"
        mx="auto"
        px="20px"
      >
        <Text
          fontFamily={"body"}
          my={["0.25rem", "0"]}
          textAlign={["center", "left"]}
          w={["100%", "auto"]}
          fontWeight="700"
        >
          <Link as={ReactLink} to="/">
            Find Brews{" "}
            <span role="img" aria-label="beer">
              🍺
            </span>
          </Link>
        </Text>
        <Text
          fontFamily={"body"}
          my={["0.25rem", "0"]}
          textAlign={["center", "left"]}
          w={["100%", "auto"]}
        >
          Powered by{" "}
          <Link href="https://www.openbrewerydb.org/">Open Brewery DB</Link>
        </Text>
      </Flex>
      <Stack mb="20px" />
    </>
  );
};

export default Footer;
