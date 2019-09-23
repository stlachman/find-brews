import React from "react";
import { Input } from "@chakra-ui/core";

const SearchBar = () => {
  return (
    <form>
      <Input focusBorderColor="blue" type="text" placeholder="Search Name" />
    </form>
  );
};

export default SearchBar;
