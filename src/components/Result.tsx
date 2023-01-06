import { Box, VStack, Text, Button } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { MdVerified, MdError } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';

export const Result = () => {
  let { decision, message } = useParams();
  return (
    <VStack h="full" w="full" py={24} justifyContent="center" spacing={12}>
      {decision == 'true' ? (
        <VStack>
          <Icon cursor="pointer" as={MdVerified} boxSize={16} color="green.500" />
          <Text fontSize="lg" fontWeight="bold" color="green.500">
            Verified
          </Text>
        </VStack>
      ) : (
        <VStack>
          <Icon cursor="pointer" as={MdError} boxSize={16} color="red.500" />
          <Text fontSize="lg" fontWeight="bold" color="red.500">
            {message}
          </Text>
        </VStack>
      )}

      <Box>
        <Link to="/">
          <Button
            py={4}
            px={12}
            colorScheme="green"
            w="full"
            fontWeight="bold"
            fontSize="sm"
            // disabled={!canMoveToUploadImage(identityState)}
          >
            Go Home
          </Button>
        </Link>
      </Box>
    </VStack>
  );
};
