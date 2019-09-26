import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/core";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <Box
      backgroundImage="radial-gradient( circle farthest-corner at 10% 20%,  rgba(216,241,230,0.46) 0.1%, rgba(233,226,226,0.28) 90.1% );"
      pb="40px"
    >
      <Flex justify="center" pt="25px">
        <Heading fontFamily="'Abril Fatface', Cursive" fontSize="35px">
          Tap Search
        </Heading>
      </Flex>
      <SearchBar />
    </Box>
  );
};

export default Header;
