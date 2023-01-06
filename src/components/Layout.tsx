import React from 'react';
import { Box, Center } from '@chakra-ui/react';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Center
      h={{
        base: '90vh',
        md: '100vh',
      }}
      backgroundColor="blackAlpha.600"
    >
      <Box
        h={{
          base: '100%',
          md: '75%',
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
        backgroundColor="white"
      >
        {children}
      </Box>
    </Center>
  );
};
