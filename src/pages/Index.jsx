import { Box, Container, Flex, Text, VStack, HStack, Spacer, IconButton } from "@chakra-ui/react";
import { FaHome, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex as="nav" bg="blue.500" color="white" padding={4} alignItems="center">
        <HStack spacing={4}>
          <IconButton aria-label="Home" icon={<FaHome />} />
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        </HStack>
        <Spacer />
        <HStack spacing={4}>
          <IconButton aria-label="About" icon={<FaInfoCircle />} />
        </HStack>
      </Flex>
      <Box as="main" padding={4}>
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a basic structure of a React app with a navigation bar.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;