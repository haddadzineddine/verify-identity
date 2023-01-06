import { Box, Text, Highlight, Image, VStack, Card, HStack } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import IDCard from '../assets/images/id-card.png';

export const ChooseCard = () => {
  return (
    <>
      <Link to="/">
        <ArrowBackIcon ml={8} mt={10} mb={4} boxSize={6} />
      </Link>

      <VStack spacing={16} h="full">
        <Box maxW="70%" fontSize="md">
          <Text align="center" fontSize="xl" fontWeight="bold">
            Upload ID
          </Text>
          <Text align="center" mt={6}>
            Choose the document type you would
          </Text>
          <Text align="center">
            <Highlight query="identity" styles={{ px: '1', rounded: 'full', bg: 'teal.100' }}>
              like to identify with.
            </Highlight>
          </Text>
        </Box>
        <VStack w="70%" spacing={8}>
          <Card w="full" p={4} bgColor="white" borderRadius={16} cursor="pointer">
            <Link to="/upload-form">
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

          <Card w="full" p={4} bgColor="gray.100" borderRadius={16}>
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
    </>
  );
};
