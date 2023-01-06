import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IdentityProvider } from '../context/IdentityContext';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <IdentityProvider>
      <ChakraProvider>
        <Router>{children}</Router>
      </ChakraProvider>
    </IdentityProvider>
  );
};
