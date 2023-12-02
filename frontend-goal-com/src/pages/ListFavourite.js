import React, { useState, useEffect } from "react";
import http from "../http";
import {
  Box,
  Button,
  Heading,
  Center,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function ListFavourite() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    setIsLoading(true); // Set loading to true when starting the fetch

    http.get("/users").then((res) => {
      const sortedUsers = res.data.sort((a, b) => a.id - b.id);
      setUsers(sortedUsers);
      setIsLoading(false); // Set loading to false after getting the result
    });
  };

  const deleteUser = (id) => {
    setIsLoading(true); // Set loading to true when starting the delete operation

    http.delete("/users/" + id).then((res) => {
      fetchAllUsers();
    });
  };

  const arrangeBoxesInRows = () => {
    const rows = [];
    for (let i = 0; i < users.length; i += 3) {
      const row = (
        <Center key={i}>
          <Box display="flex" flexDirection="row">
            {users[i] && renderBox(users[i])}
            {users[i + 1] && renderBox(users[i + 1])}
            {users[i + 2] && renderBox(users[i + 2])}
          </Box>
        </Center>
      );
      rows.push(row);
    }
    return rows;
  };

  const renderBox = (user) => {
    // Set the maximum number of characters for the description
    const maxDescriptionLength = 150;

    // Debug statement
    console.log("Actual description length:", user.description.length);

    return (
      <Box
        key={user.id}
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        p={3}
        mb={3}
        mx={1} // Adjust the margin between boxes as needed
        flex="1"
        minWidth="180px" // Adjust the minimum width of each box as needed
      >
        <Text fontWeight="bold" mb={2}>
          Sno. {user.id}
        </Text>
        <Text fontWeight="bold" mb={2}>{user.name}</Text>

        {/* Truncate the description to the specified character limit */}
        <Text mb={2} overflow="hidden" textOverflow="ellipsis">
          {user.description.length > maxDescriptionLength
            ? user.description.substring(0, maxDescriptionLength) + "..."
            : user.description}
        </Text>

        <Button
          colorScheme="teal"
          mr={1}
          as={RouterLink}
          to={`/editfavourite/${user.id}`}
        >
          Change?
        </Button>
        <Button
          colorScheme="blue"
          mr={1}
          as={RouterLink}
          to={`/viewfavourite/${user.id}`}
        >
          Show more..
        </Button>
        <Button colorScheme="red" mr={1} onClick={() => deleteUser(user.id)}>
          Remove*
        </Button>
      </Box>
    );
  };

  return (
    <Center py={100}>
      <Box maxW="1200px">
        <Heading mb={4} textAlign="center">Favourite Teams</Heading>
        {isLoading ? (
        <Box textAlign="center" mt={5} pt={5} color="black">
          <Text fontSize="xl" mb={3}>
            Loading
          </Text>
          <Spinner
            thickness="8px"
            speed="0.65s"
            emptyColor="yellow.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      )  : (
          arrangeBoxesInRows()
        )}
      </Box>
    </Center>
  );
}
