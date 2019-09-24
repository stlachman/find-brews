import React, { useState, useEffect } from "react";
import {
  Input,
  Flex,
  Box,
  Spinner,
  List,
  ListItem,
  Text
} from "@chakra-ui/core";
import useDebounce from "../hooks/useDebounce";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedBrewer, setSelectedBrewer] = useState(null);
  const [currentBrewer, setCurrentBrewer] = useState(null);

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries?by_name=${selectedBrewer}`, {
      method: "GET"
    })
      .then(r => r.json())
      .then(r => {
        setCurrentBrewer(...r);
        setQuery("");
      })
      .catch(error => {
        console.error(error);
        return [];
      });
  }, [selectedBrewer]);

  useEffect(() => {
    if (debouncedQuery) {
      setIsSearching(true);
      fetchQueries(debouncedQuery).then(res => {
        setIsSearching(false);
        setResults(res);
      });
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);

  function fetchQueries(query) {
    return fetch(
      `https://api.openbrewerydb.org/breweries/autocomplete?query=${query}`,
      {
        method: "GET"
      }
    )
      .then(r => r.json())
      .then(r => r)
      .catch(error => {
        console.error(error);
        return [];
      });
  }

  return (
    <Flex justify="center">
      <Flex position="relative">
        <Box w="240px" maxW="100%">
          <Input
            onChange={e => setQuery(e.target.value)}
            value={query}
            mt="2"
            type="text"
            placeholder="Search Brewery"
          />
          {isSearching && (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          )}
          <Box position="absolute">
            <List bg="#eee">
              {results &&
                results.map(brewer => (
                  <ListItem
                    key={brewer.id}
                    padding="12px 10px"
                    onClick={() => setSelectedBrewer(brewer.name)}
                  >
                    {brewer.name}
                  </ListItem>
                ))}
            </List>
          </Box>
          <Box>
            <Text>
              {currentBrewer ? currentBrewer.name : "No Brewer Selected"}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default SearchBar;
