import { Box, Text, VStack, Button, HStack } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import { MdOutlineImage, MdVerified } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveIdentity } from '../services/identity.service';
import { canSubmitForm } from '../utils';
import { IdentityCheckingResultContext, IdentityContext, initialData } from '../context';

export const UploadImage = () => {
  const { identityState, identitySetState } = useContext(IdentityContext);
  const { identityCheckingResult, SetIdentityCheckingResult } = useContext(
    IdentityCheckingResultContext,
  );

  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const result = await saveIdentity(identityState);
      SetIdentityCheckingResult(result);
      resetAll();
      setLoading(false);
      navigate('/result');
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const resetAll = () => {
    identitySetState(initialData);
  };

  return (
    <>
      <Link to="/upload-form">
        <ArrowBackIcon ml={8} mt={10} mb={4} boxSize={6} />
      </Link>

      <VStack spacing={16} h="full">
        <Box maxW="70%" fontSize="md">
          <Text align="center" mt={2} fontSize="xl" fontWeight="bold">
            Please upload the following images
          </Text>
        </Box>
        <VStack h="65%" w="80%" justifyContent="space-between">
          <VStack w="full" spacing="8" alignContent="center">
            <HStack spacing={8}>
              <Link to="/web-cam/front_ID">
                <Button
                  leftIcon={<Icon as={MdOutlineImage} />}
                  colorScheme="green"
                  justifyContent="flex-start"
                  variant="solid"
                  fontSize="sm"
                  w="14rem"
                >
                  Upload Card ID Front
                </Button>
              </Link>
              <Icon color={identityState.front_ID ? 'green' : 'red.400'} as={MdVerified} />
            </HStack>

            <HStack spacing={8}>
              <Link to="/web-cam/back_ID">
                <Button
                  leftIcon={<Icon as={MdOutlineImage} />}
                  colorScheme="green"
                  justifyContent="flex-start"
                  variant="solid"
                  fontSize="sm"
                  w="14rem"
                >
                  Upload Card ID Back
                </Button>
              </Link>

              <Icon color={identityState.back_ID ? 'green' : 'red.400'} as={MdVerified} />
            </HStack>

            <HStack spacing={8}>
              <Link to="/web-cam/selfi">
                <Button
                  leftIcon={<Icon as={MdOutlineImage} />}
                  colorScheme="green"
                  justifyContent="flex-start"
                  variant="solid"
                  fontSize="sm"
                  w="14rem"
                >
                  Upload Selfi
                </Button>
              </Link>
              <Icon color={identityState.selfi ? 'green' : 'red.400'} as={MdVerified} />
            </HStack>
          </VStack>

          <Box w="full">
            <Button
              py={6}
              colorScheme="teal"
              w="full"
              fontWeight="bold"
              fontSize="lg"
              onClick={handleSubmit}
              disabled={!canSubmitForm(identityState)}
            >
              Submit
              {isLoading ? (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="teal"
                  size="sm"
                  ml={4}
                />
              ) : (
                ''
              )}
            </Button>
          </Box>
        </VStack>
      </VStack>
    </>
  );
};
