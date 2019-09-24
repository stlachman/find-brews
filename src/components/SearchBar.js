import React, { useState, useEffect } from "react";
import {
  Input,
  Flex,
  Box,
  List,
  ListItem,
  Text,
  Button
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
    <Flex justify="center" mt={4}>
      <Flex position="relative">
        <Box w="370px" maxW="100%">
          <Input
            onChange={e => setQuery(e.target.value)}
            value={query}
            mt="2"
            type="text"
            placeholder="Search Brewery"
          />

          <Box position="absolute">
            <List bg="#eee">
              {results &&
                results.map(brewer => (
                  <ListItem key={brewer.id} padding="12px 10px">
                    <Button onClick={() => setSelectedBrewer(brewer.name)}>
                      {brewer.name}
                    </Button>
                  </ListItem>
                ))}
            </List>
          </Box>
          <Box mt="20px" padding="10px 20px" bg="#eee" rounded="md">
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
