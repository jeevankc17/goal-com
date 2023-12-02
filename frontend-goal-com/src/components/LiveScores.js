// LiveScores.js
import React, { useState, useEffect } from "react";
import { Spinner, Box, Input, Text, Flex, Image } from "@chakra-ui/react";
import SearchBar from "./SearchBar";

const LiveScores = () => {
  const [liveScores, setLiveScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [filteredLiveScores, setFilteredLiveScores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/live-scores?date=${selectedDate}`
        );

        if (!response.ok) {
          throw new Error("Error fetching live scores");
        }

        const data = await response.json();

        if (data && data.data && data.data.liveScores) {
          setLiveScores(data.data.liveScores);
          setFilteredLiveScores(data.data.liveScores);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching live scores:", error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedDate]);

  const handleSearch = (searchTerm) => {
    // Filter matches based on the search term
    const filteredResults = liveScores.reduce((accumulator, competition) => {
      const filteredMatches = competition.matches.filter((match) =>
        match.teamA.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        match.teamB.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      if (filteredMatches.length > 0) {
        accumulator.push({
          ...competition,
          matches: filteredMatches,
        });
      }
  
      return accumulator;
    }, []);
  
    setFilteredLiveScores(filteredResults);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <Box className="container mt-5 text-dark pt-5">
      {/* SearchBar and Date Input */}
      <SearchBar onSearch={handleSearch} />
      <Text htmlFor="datePicker" fontSize="xl" mb={3}>
        Select Date:
      </Text>
      <Input
        type="date"
        id="datePicker"
        value={selectedDate}
        onChange={handleDateChange}
        className="form-control mb-3"
      />

      {/* Render Results */}
      {loading ? (
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
      ) : filteredLiveScores.length === 0 ? (
        <Text>No matches available</Text>
      ) : (
        filteredLiveScores.map((competition) => (
          <Box
            key={competition.competition.id}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            mb={4}
            maxW="700px"
            mx="auto"
          >
            {/* Competition Name */}
            <Text fontSize="2xl" mb={3} textAlign="center">
              {competition.competition.name}
            </Text>

            {/* Match Details */}
            {Array.isArray(competition.matches) &&
            competition.matches.length > 0 ? (
              competition.matches.map((match) => (
                <Box key={match.id} mb={3}>
                  {/* First Row: Upcoming or Finished Text */}
                  <Box textAlign="center">
                    <Text fontSize="sm" fontWeight="bold">
                      {match.status === "FIXTURE" ? "Upcoming" : "Finished"}
                    </Text>
                  </Box>

                  {/* Second Row: Team Details and Score */}
                  <Flex
                    justify="space-between"
                    align="center"
                    textAlign="center"
                    mt={2}
                  >
                    {/* Left Team Details */}
                    <Box flex="1" textAlign="left">
                      <Flex align="center" justify="flex-start">
                        <Image
                          src={match.teamA.image.url}
                          alt={match.teamA.name}
                          mr={2}
                        />
                        <Text fontWeight="bold">{match.teamA.name}</Text>
                      </Flex>
                    </Box>

                    {/* Score */}
                    <Box flex="1" textAlign="center">
                      {match.score ? (
                        <Flex align="center" justify="center">
                          <Text fontWeight="bold">{match.score.teamA}</Text>
                          <Text
                            mx={2}
                            fontWeight="bold"
                            fontSize="lg"
                          >
                            -
                          </Text>
                          <Text fontWeight="bold">{match.score.teamB}</Text>
                        </Flex>
                      ) : (
                        <Text fontWeight="bold" fontSize="lg">
                          vs
                        </Text>
                      )}
                    </Box>

                    {/* Right Team Details */}
                    <Box flex="1" textAlign="right">
                      <Flex align="center" justify="flex-end">
                        <Text fontWeight="bold">{match.teamB.name}</Text>
                        <Image
                          src={match.teamB.image.url}
                          alt={match.teamB.name}
                          ml={2}
                        />
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              ))
            ) : (
              <Text>No matches available</Text>
            )}
          </Box>
        ))
      )}
    </Box>
  );
};

export default LiveScores;
