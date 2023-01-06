import { Box, VStack, Text, Button, List, ListItem, ListIcon } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { MdVerified, MdError, MdCheckCircle, MdSettings } from 'react-icons/md';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IdentityCheckingResultContext, initialResult } from '../context';
import { CheckingResult } from '../utils/types';
import {
  getIdentityResultCheckingAsCorrect,
  getIdentityResultCheckingAsInCorrect,
} from '../utils/helpers';

export const Result = () => {
  const navigate = useNavigate();

  const { identityCheckingResult, SetIdentityCheckingResult } = useContext(
    IdentityCheckingResultContext,
  );

  const goHome = () => {
    clearResult();
    navigate('/');
  };

  const clearResult = () => {
    SetIdentityCheckingResult(initialResult);
  };

  return (
    <VStack
      h="full"
      w="full"
      py={4}
      justifyContent={identityCheckingResult.Decision ? 'space-around' : 'center'}
      spacing={identityCheckingResult.Decision ? 0 : 12}
    >
      {identityCheckingResult.Decision ? (
        <>
          <VStack>
            <Icon cursor="pointer" as={MdVerified} boxSize={16} color="green.500" />
            <Text fontSize="lg" fontWeight="bold" color="green.500">
              Verified
            </Text>
          </VStack>
          <List spacing={3} w="60%">
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              ID TYPE :{getIdentityResultCheckingAsCorrect(identityCheckingResult.Checking).ID_TYPE}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              ID NUMBER:{' '}
              {getIdentityResultCheckingAsCorrect(identityCheckingResult.Checking).ID_NUMBER}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              FIRST NAME:{' '}
              {getIdentityResultCheckingAsCorrect(identityCheckingResult.Checking).FIRST_NAME}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              FAMILY NAME:{' '}
              {getIdentityResultCheckingAsCorrect(identityCheckingResult.Checking).FAMILY_NAME}
            </ListItem>

            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              GENDER: {getIdentityResultCheckingAsCorrect(identityCheckingResult.Checking).GENDER}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              BIRTHDAY:{' '}
              {getIdentityResultCheckingAsCorrect(identityCheckingResult.Checking).BIRTHDAY}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              ISSUING NATIONALITY:{' '}
              {
                getIdentityResultCheckingAsCorrect(identityCheckingResult.Checking)
                  .ISSUING_NATIONALITY
              }
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              EXPIRY DATE:{' '}
              {getIdentityResultCheckingAsCorrect(identityCheckingResult.Checking).EXPIRY_DATE}
            </ListItem>
          </List>
        </>
      ) : (
        <VStack>
          <Icon cursor="pointer" as={MdError} boxSize={16} color="red.500" />
          <Text fontSize="lg" fontWeight="bold" color="red.500">
            {getIdentityResultCheckingAsInCorrect(identityCheckingResult.Checking)}
          </Text>
        </VStack>
      )}

      <Box>
        <Button
          onClick={goHome}
          py={4}
          px={12}
          colorScheme="green"
          w="full"
          fontWeight="bold"
          fontSize="sm"
        >
          Go Home
        </Button>
      </Box>
    </VStack>
  );
};
