import { Box, Center, Text, Highlight, Button, VStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import IdentityVerifyingPng from '../assets/images/id_v.png';

const App = () => {
  return (
    <VStack py={12} h="full" justifyContent="space-between">
      <Box maxW="70%" fontSize="md">
        <Text align="center" fontSize="lg" fontWeight="bold">
          Verify your identity
        </Text>
        <Text align="center" mt={6}>
          We need some information to help us
        </Text>
        <Text align="center">
          <Highlight query="identity" styles={{ px: '1', rounded: 'full', bg: 'teal.100' }}>
            confirm your identity.
          </Highlight>
        </Text>
      </Box>
      <Center boxSize="sm" py={4}>
        <Image src={IdentityVerifyingPng} alt="Dan Abramov"></Image>
      </Center>

      <VStack w="80%" spacing="24px">
        <Link to="/choose-card">
          <Button py={8} px={12} colorScheme="teal" w="full" fontWeight="bold" fontSize="lg">
            Choose document type
          </Button>
        </Link>

        <Text>Verifying usually takes a few seconds.</Text>
      </VStack>
    </VStack>
  );
};

export default App;
