import React, { useState, useEffect } from "react";
import { Flex, Box } from "@chakra-ui/core";
import BrewerDetails from "./BrewerDetails";
import Autosuggest from "./Autosuggest";

const SearchBar = () => {
  const [selectedBrewer, setSelectedBrewer] = useState(null);
  const [currentBrewer, setCurrentBrewer] = useState(null);

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries?by_name=${selectedBrewer}`, {
      method: "GET"
    })
      .then(r => r.json())
      .then(r => {
        setCurrentBrewer(...r);
      })
      .catch(error => {
        console.error(error);
        return [];
      });
  }, [selectedBrewer]);

  return (
    <Flex justify="center" mt={4}>
      <Flex position="relative">
        <Box w="370px" maxW="100%">
          <Autosuggest setSelectedBrewer={setSelectedBrewer} />
          <Box mt="20px" padding="10px 20px" bg="#eee" rounded="md">
            <BrewerDetails currentBrewer={currentBrewer} />
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default SearchBar;
