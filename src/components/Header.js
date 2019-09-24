import React from "react";
import App from "../App";
import { Flex, Heading, Text } from "@chakra-ui/core";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <Flex justify="center">
        <Heading fontFamily="'Abril Fatface', Cursive" fontSize="35px">
          Breweries
        </Heading>
      </Flex>
      <Flex justify="center">
        <Text>Search below to find a new brewer!</Text>
      </Flex>
      <SearchBar />
    </>
  );
};

export default Header;
