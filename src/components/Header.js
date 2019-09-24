import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/core";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <Flex justify="center" mt="25px">
        <Heading fontFamily="'Abril Fatface', Cursive" fontSize="35px">
          Tap Search
        </Heading>
      </Flex>
      <Flex justify="center" mt="20px">
        <Text>Search for brewers by name</Text>
      </Flex>
      <SearchBar />
    </>
  );
};

export default Header;
