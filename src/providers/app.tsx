import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IdentityProvider } from '../context';
import { extendTheme } from '@chakra-ui/react';

type AppProviderProps = {
  children: React.ReactNode;
};

const theme = extendTheme({
  colors: {
    brand: {
      100: '#482eab',
      900: '#1d086d',
    },
  },
});

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <IdentityProvider>
      <ChakraProvider theme={theme}>
        <Router>{children}</Router>
      </ChakraProvider>
    </IdentityProvider>
  );
};
