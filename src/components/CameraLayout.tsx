import React from 'react';
import { Box, Center, Highlight, Text, VStack } from '@chakra-ui/react';

type CameraLayoutProps = {
  children: React.ReactNode;
};

export const CameraLayout = ({ children }: CameraLayoutProps) => {
  return (
    <Center
      h="100vh"
      style={{
        background: 'linear-gradient(90deg, rgba(72, 46, 171, 1) 0%, rgba(29, 8, 109, 1) 100%)',
      }}
    >
      <VStack
        h={{
          base: '100%',
          md: '85%',
        }}
        w={{
          base: '100%',
          md: '25rem',
          lg: '27rem',
        }}
        borderRadius={{
          base: 0,
          md: 36,
        }}
        justifyContent="space-between"
        backgroundColor="white"
      >
        <Box w="inherit" h="full">
          {children}
        </Box>
      </VStack>
    </Center>
  );
};
