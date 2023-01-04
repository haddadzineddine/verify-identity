import {
  Box,
  Center,
  Text,
  Highlight,
  Button,
  VStack,
  Image,
} from "@chakra-ui/react";
import IdentityVerifyingPng from "../assets/images/id_v.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { IdentityContext } from "../context/IdentityContext";

const App = () => {
  const { identityState, identitySetState } = useContext(IdentityContext);
  return (
    <Center w="100vw" h="100vh" backgroundColor="blackAlpha.600">
      <Box
        h={{
          base: "100%",
          md: "75%",
        }}
        w={{
          base: "100%",
          md: "25%",
        }}
        borderRadius={36}
        // backgroundColor="white"
        bgGradient="linear(to-t, teal.50,white)"
        boxShadow="lg"
      >
        <VStack
          py={12}
          // border="2px solid"
          h="full"
          justifyContent="space-between"
        >
          <Box maxW="70%" fontSize="md">
            <Text align="center" fontSize="lg" fontWeight="bold">
              Verify your identity
            </Text>
            <Text align="center" mt={6}>
              We need some information to help us
            </Text>
            <Text align="center">
              <Highlight
                query="identity"
                styles={{ px: "1", rounded: "full", bg: "teal.100" }}
              >
                confirm your identity.
              </Highlight>
            </Text>
          </Box>
          <Center boxSize="sm" py={4}>
            <Image src={IdentityVerifyingPng} alt="Dan Abramov"></Image>
          </Center>

          <VStack w="80%" spacing="24px">
            <Link to="/choose-card">
              <Button
                py={8}
                px={12}
                colorScheme="teal"
                w="full"
                fontWeight="bold"
                fontSize="lg"
              >
                Choose document type
              </Button>
            </Link>

            <Text>Verifying usually takes a few seconds.</Text>
          </VStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default App;
