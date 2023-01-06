import { Box, Text, VStack, Input, Select, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { IdentityContext } from '../context';
import { canMoveToUploadImage } from '../utils';

export const UploadForm = () => {
  const { identityState, identitySetState } = useContext(IdentityContext);
  return (
    <>
      <Link to="/choose-card">
        <ArrowBackIcon ml={8} mt={10} mb={4} boxSize={6} />
      </Link>

      <VStack spacing={16} h="full">
        <Box maxW="70%" fontSize="md">
          <Text align="center" fontSize="xl" fontWeight="bold">
            Upload ID
          </Text>
          <Text align="center" mt={2}>
            Please fill the following fields
          </Text>
        </Box>
        <VStack h="65%" w="80%" justifyContent="space-between">
          <VStack w="full" spacing="6">
            <Input
              focusBorderColor="teal.500"
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
              focusBorderColor="teal.500"
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
              focusBorderColor="teal.500"
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
              focusBorderColor="teal.500"
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
            <Link to="/upload-image">
              <Button
                py={6}
                colorScheme="teal"
                w="full"
                fontWeight="bold"
                fontSize="lg"
                disabled={!canMoveToUploadImage(identityState)}
              >
                Next
              </Button>
            </Link>
          </Box>
        </VStack>
      </VStack>
    </>
  );
};
