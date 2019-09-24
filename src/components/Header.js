import React from "react";
import { Flex, Heading } from "@chakra-ui/core";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <Flex justify="center" mt="25px">
        <Heading fontFamily="'Abril Fatface', Cursive" fontSize="35px">
          Tap Search
        </Heading>
      </Flex>
      <SearchBar />
    </>
  );
};

export default Header;
