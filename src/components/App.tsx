import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Center, Text, Highlight, Button, VStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import IdentityVerifyingPng from '../assets/images/id_v.png';
import { Layout } from './Layout';

const App = () => {
  return (
    <Layout>
      <Box h="full">
        <Link to="/">
          <ArrowBackIcon ml={8} mt={10} boxSize={6} />
        </Link>
        <VStack spacing={16} mt={4} justifyContent="space-around">
          <Box maxW="80%" fontSize="md">
            <Text align="center" fontSize="xl" fontWeight="bold">
              Verify your Identity
            </Text>
            <Text align="center" mt={6}>
              We need some information to help us
            </Text>
            <Text align="center">
              <Highlight query="identity" styles={{ px: '1', rounded: 'full', bg: 'purple.100' }}>
                confirm your identity.
              </Highlight>
            </Text>
          </Box>
          <Center boxSize="sm" h="10rem" w="80%">
            <Image src={IdentityVerifyingPng} alt="Dan Abramov"></Image>
          </Center>

          <VStack w="80%">
            <Link to="/choose-card">
              <Button py={8} px={12} colorScheme="purple" w="full" fontWeight="bold" fontSize="lg">
                Choose document type
              </Button>
            </Link>

            <Text pt={4}>Verifying usually takes a few seconds.</Text>
          </VStack>
        </VStack>
      </Box>
    </Layout>
  );
};

export default App;
