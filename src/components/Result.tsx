import {
  Box,
  VStack,
  Text,
  Button,
  List,
  ListItem,
  ListIcon,
  HStack,
} from '@chakra-ui/react';
import { MdError, MdCheckCircle, MdSettings } from 'react-icons/md';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IdentityCheckingResultContext, initialResult } from '../context';
import { Layout } from './Layout';

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
      <VStack spacing={4} align="stretch" p={12}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Result
          </Text>
        </Box>
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Checking Result
          </Text>
          <List spacing={3}>
            <ListItem>
              <HStack>
                <ListIcon as={identityCheckingResult.decision ? MdCheckCircle : MdError} />
                <Text>
                  {identityCheckingResult.decision
                    ? 'Identity Checking is Correct'
                    : 'Identity Checking is Incorrect'}
                </Text>
              </HStack>
            </ListItem>
            <ListItem>
              <HStack>
                <ListIcon as={MdSettings} />
                <Text>
                  Face Similarity: {identityCheckingResult.face_similarity}{' '}
                </Text>
              </HStack>
            </ListItem>
          </List>
        </Box>

        <Button colorScheme="blue" onClick={goHome}>
          Go Home
        </Button>
      </VStack>
    </Layout>
  );
};
