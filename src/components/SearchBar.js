import React, { useState, useEffect } from "react";
import { Input, Flex, Box, Spinner } from "@chakra-ui/core";
import useDebounce from "../hooks/useDebounce";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedQuery = useDebounce(query, 500);

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
      <Flex>
        <Box>
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
          <Box>
            {results &&
              results.map(brewer => <Box key={brewer.id}>{brewer.name}</Box>)}
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default SearchBar;
