import { Box, Text, Highlight, Image, VStack, Card, HStack } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import IDCard from '../assets/images/id-card.png';
import { Layout } from './Layout';

export const ChooseCard = () => {
  return (
    <Layout>
      <Box h="full">
        <Link to="/">
          <ArrowBackIcon ml={8} mt={10} boxSize={6} />
        </Link>
        <VStack spacing={16} mt={4} justifyContent="space-around">
          <Box maxW="80%" fontSize="md">
            <Text align="center" fontWeight="bold" mt={6}>
              Choose the document type you would
            </Text>
            <Text align="center" fontWeight="bold">
              <Highlight query="identify" styles={{ px: '1', rounded: 'full', bg: 'purple.100' }}>
                like to identify with.
              </Highlight>
            </Text>
          </Box>
          <VStack w="80%" spacing={8}>
            <Card w="full" p={6} bgColor="white" borderRadius={16} cursor="pointer">
              <Link to="/upload-image">
                <HStack spacing={6}>
                  <Image boxSize={8} src={IDCard} alt="ID Card" />
                  <Box>
                    <Text fontSize="sm" fontWeight="bold">
                      ID Card
                    </Text>
                    <Text fontSize="sm">Gouverment-issued personal ID.</Text>
                  </Box>
                </HStack>
              </Link>
            </Card>

            <Card w="full" p={6} bgColor="gray.100" borderRadius={16}>
              <HStack spacing={6}>
                <Image boxSize={8} src={IDCard} alt="ID Card" />
                <Box>
                  <Text fontSize="sm" fontWeight="bold">
                    Passport
                  </Text>
                  <Text fontSize="sm">Your official travel document.</Text>
                </Box>
              </HStack>
            </Card>
          </VStack>
        </VStack>
      </Box>
    </Layout>
  );
};
