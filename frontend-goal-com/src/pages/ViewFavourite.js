import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Heading, Center, Text } from "@chakra-ui/react";
import http from '../http';

export default function ViewFavorite(props) {
    const [inputs, setInputs] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = () => {
        http.get(`/users/${id}/edit`).then((res) => {
            setInputs({
                name: res.data.name,
                description: res.data.description,
            });
        });
    };

    return (
        <Center minH="100vh">
            <Box maxW="400px" mt="4">
                <Heading mb="4" textAlign="center">View User</Heading>
                <Box p="4" borderWidth="1px" borderRadius="md" textAlign="center">
                    <Text fontSize="lg" fontWeight="bold" mb="2">
                        Name
                    </Text>
                    <Text mb="4" fontWeight="bold">{inputs.name}</Text>
                    <Text fontSize="lg" fontWeight="bold" mb="2">
                        Description
                    </Text>
                    <Text>{inputs.description}</Text>
                </Box>
            </Box>
        </Center>
    );
}
