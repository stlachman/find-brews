import React, { useState, useEffect } from "react";
import { Input, List, ListItem } from "@chakra-ui/core";
import { css } from "@emotion/core";
import useDebounce from "../hooks/useDebounce";

function Autosuggest({ setSelectedBrewer }) {
  const [value, setValue] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const debouncedSearchTerm = useDebounce(value, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      fetchQueries(debouncedSearchTerm).then(res => {
        setIsSearching(false);
        setSuggestions(res);
      });
    } else {
      setSuggestions([]);
    }
  }, [debouncedSearchTerm]);

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

  const handleChange = e => {
    let cv = e.target.value;
    let length = cv.length;
    setValue(cv);
    if (cv.length > 0) {
      setSuggestions(
        suggestions.filter(item => {
          if (
            item.name.toLowerCase().slice(0, length) ===
            cv.toLowerCase().slice(0, length)
          )
            return item.name;
        })
      );
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = e => {
    if (e.key === "ArrowUp" && suggestions.length > 0) {
      if (selectedIndex > -1) {
        setSelectedIndex(selectedIndex - 1);
      } else {
        setSelectedIndex(suggestions.length - 1);
      }
    }

    if (e.key === "ArrowDown" && suggestions.length > 0) {
      if (selectedIndex < suggestions.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      } else {
        setSelectedIndex(-1);
      }
    }

    if (e.key === "Enter" && suggestions.length > 0) {
      setValue(suggestions[selectedIndex].name);
      setSelectedBrewer(suggestions[selectedIndex].name);
    }
  };

  const handleClick = i => {
    console.log(i);
    setValue(suggestions[i].name);
    setSelectedBrewer(suggestions[i].name);
  };

  return (
    <>
      <Input
        css={css`
          max-width: 370px;
        `}
        placeholder="Search for Breweries"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
      />
      {isSearching ? <p>Searching...</p> : null}
      <List className="suggestions">
        {suggestions.length > 0 &&
          suggestions.map((suggestion, i) =>
            selectedIndex === i ? (
              <ListItem
                css={css`
                  background-color: #e2e8f0;
                  padding: 0.5em 1em;

                  &:hover {
                    cursor: pointer;
                    opacity: 0.8;
                  }
                `}
                key={i}
                onClick={() => handleClick(i)}
              >
                {suggestion.name}
              </ListItem>
            ) : (
              <ListItem
                css={css`
                  padding: 0.5em 1em;
                  background-color: #fafafa;

                  &:hover {
                    cursor: pointer;
                    opacity: 0.8;
                  }
                `}
                key={i}
                onClick={() => handleClick(i)}
              >
                {suggestion.name}
              </ListItem>
            )
          )}
      </List>
    </>
  );
}

export default Autosuggest;
