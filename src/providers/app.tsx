import { ChakraProvider } from "@chakra-ui/react";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
