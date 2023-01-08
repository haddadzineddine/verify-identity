import { Box, Text, VStack, Input, Select, Button, border } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { IdentityContext } from '../context';
import { canMoveToUploadImage } from '../utils';
import { Layout } from './Layout';

export const UploadForm = () => {
  const { identityState, identitySetState } = useContext(IdentityContext);
  return (
    <Layout>
      <VStack spacing={16} mt={12} h="full">
        <Box maxW="70%" fontSize="md">
          <Text align="center" mt={2} fontWeight="bold" fontSize="xl">
            Please fill the following fields
          </Text>
        </Box>
        <VStack h="65%" w="80%" justifyContent="space-between">
          <VStack w="full" spacing="6">
            <Input
              focusBorderColor="purple.500"
              placeholder="First name"
              size="lg"
              value={identityState.FIRST_NAME}
              onChange={(e) => {
                identitySetState({
                  ...identityState,
                  FIRST_NAME: e.target.value,
                });
              }}
            />
            <Input
              focusBorderColor="purple.500"
              placeholder="Family name"
              size="lg"
              value={identityState.FAMILY_NAME}
              onChange={(e) => {
                identitySetState({
                  ...identityState,
                  FAMILY_NAME: e.target.value,
                });
              }}
            />
            <Input
              focusBorderColor="purple.500"
              placeholder="ID number"
              size="lg"
              value={identityState.ID_NUMBER}
              onChange={(e) => {
                identitySetState({
                  ...identityState,
                  ID_NUMBER: e.target.value,
                });
              }}
            />
            <Select
              variant="filled"
              focusBorderColor="purple.500"
              placeholder="Select your gender"
              size="lg"
              value={identityState.GENDER}
              onChange={(e) => {
                identitySetState({
                  ...identityState,
                  GENDER: e.target.value.toLowerCase() === 'male' ? 'male' : 'female',
                });
              }}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </VStack>

          <Box w="full">
            <Link to="/app">
              <Button
                py={6}
                colorScheme="purple"
                w="full"
                fontWeight="bold"
                fontSize="lg"
                disabled={!canMoveToUploadImage(identityState)}
              >
                Start
              </Button>
            </Link>
          </Box>
        </VStack>
      </VStack>
    </Layout>
  );
};
