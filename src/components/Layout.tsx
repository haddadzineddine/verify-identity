import React from 'react';
import { Box, Center, Highlight, Text, VStack } from '@chakra-ui/react';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  return (
    <Center h={getWindowDimensions().height}>
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

        <Box py={8}>
          <Text fontWeight="bold">
            <Highlight
              query="Verifili"
              styles={{ px: '1', rounded: 'full', bg: 'purple.100', fontSize: 'xl' }}
            >
              Powered by Verifili
            </Highlight>
          </Text>
        </Box>
      </VStack>
    </Center>
  );
};
