import {
  Box,
  VStack,
  Text,
  Button,
  List,
  ListItem,
  ListIcon,
  HStack,
  Image,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { MdError, MdCheckCircle, MdSettings } from 'react-icons/md';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IdentityCheckingResultContext, initialResult } from '../context';
import { Layout } from './Layout';
import { Avatar } from '@chakra-ui/react';

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
    <Layout>
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
              <HStack w="80%" justifyContent="space-around">
                <Image
                  borderRadius={16}
                  w={32}
                  h={32}
                  src={`data:image/png;base64,${identityCheckingResult.Images.Card_face}`}
                />
                <Image
                  borderRadius={16}
                  w={32}
                  h={32}
                  src={`data:image/png;base64,${identityCheckingResult.Images.Selfi_face}`}
                />
              </HStack>
              <Text pt={2}>
                <b>Face Similarity:</b> {identityCheckingResult.Face_Similarity.Similarity}
              </Text>
            </VStack>
            <List spacing={1} w="80%">
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                <b>ID NUMBER: </b>
                {getIdentityResultCheckingAsCorrect(identityCheckingResult.Checking).ID_NUMBER}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                <b>FIRST NAME: </b>
                {getIdentityResultCheckingAsCorrect(identityCheckingResult.Checking).FIRST_NAME}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                <b>FAMILY NAME: </b>
                {getIdentityResultCheckingAsCorrect(identityCheckingResult.Checking).FAMILY_NAME}
              </ListItem>

              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                <b>GENDER: </b>
                {getIdentityResultCheckingAsCorrect(identityCheckingResult.Checking).GENDER}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                <b>AGE: </b>
                {getIdentityResultCheckingAsCorrect(identityCheckingResult.Checking).AGE}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                <b>BIRTHDAY: </b>
                {getIdentityResultCheckingAsCorrect(identityCheckingResult.Checking).BIRTHDAY}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                <b>NATIONALITY: </b>
                {getIdentityResultCheckingAsCorrect(identityCheckingResult.Checking).NATIONALITY}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                <b>ISSUING NATIONALITY: </b>
                {
                  getIdentityResultCheckingAsCorrect(identityCheckingResult.Checking)
                    .ISSUING_NATIONALITY
                }
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                <b>EXPIRY DATE: </b>
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
    </Layout>
  );
};
