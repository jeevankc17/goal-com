// SearchBar.js
import React, { useState } from "react";
import { Input, Button, Flex } from "@chakra-ui/react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Flex mb={4} justify="center" align="center">
      <Input
        type="text"
        placeholder="Search for a team"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mr={2}
      />
      <Button colorScheme="blue" onClick={handleSearch}>
        Search
      </Button>
    </Flex>
  );
};

export default SearchBar;
