import {
  Box,
  Center,
  Text,
  VStack,
  Image,
  Button,
  HStack,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { MdOutlineImage, MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { IdentityContext, initialData } from "../context/IdentityContext";
import { canSubmitForm } from "../helpers";
import { useNavigate } from "react-router-dom";
import { saveIdentity } from "../services/identity.service";
import IDCard from "../assets/images/id-card.png";

export const UploadImage = () => {
  const { identityState, identitySetState } = useContext(IdentityContext);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const result = await saveIdentity(identityState);
      console.log(result);
      resetAll();
      setLoading(false);
      navigate(`/result/${result.Decision}/${result.Checking ?? ""}`);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const resetAll = () => {
    identitySetState(initialData);
  };

  return (
    <Center w="100vw" h="100vh" backgroundColor="blackAlpha.600">
      <Box h="75%" w="25%" borderRadius={36} backgroundColor="white">
        <Link to="/upload-form">
          <ArrowBackIcon ml={8} mt={10} mb={4} boxSize={6} />
        </Link>

        <VStack spacing={16} h="full">
          <Box maxW="70%" fontSize="md">
            <Text align="center" fontSize="xl" fontWeight="bold">
              Upload Images
            </Text>
            <Text align="center" mt={2}>
              Please upload the following images
            </Text>
          </Box>
          <VStack h="65%" w="80%" justifyContent="space-between">
            <VStack w="full" spacing="8">
              <HStack spacing={8} w="80%">
                <Link to="/web-cam/front_ID">
                  <Button
                    leftIcon={<Icon as={MdOutlineImage} />}
                    colorScheme="green"
                    justifyContent="flex-start"
                    variant="solid"
                    fontSize="sm"
                    w="100%"
                  >
                    Upload Card ID Front
                  </Button>
                </Link>
                <Icon
                  color={identityState.front_ID ? "green" : "red.400"}
                  as={MdVerified}
                />
              </HStack>

              <HStack spacing={8} w="80%">
                <Link to="/web-cam/back_ID">
                  <Button
                    leftIcon={<Icon as={MdOutlineImage} />}
                    colorScheme="green"
                    justifyContent="flex-start"
                    variant="solid"
                    fontSize="sm"
                    w="100%"
                  >
                    Upload Card ID Back
                  </Button>
                </Link>

                <Icon
                  color={identityState.back_ID ? "green" : "red.400"}
                  as={MdVerified}
                />
              </HStack>

              <HStack spacing={8} w="80%">
                <Link to="/web-cam/selfi">
                  <Button
                    leftIcon={<Icon as={MdOutlineImage} />}
                    colorScheme="green"
                    justifyContent="flex-start"
                    variant="solid"
                    fontSize="sm"
                    w="100%"
                  >
                    Upload Selfi
                  </Button>
                </Link>
                <Icon
                  color={identityState.selfi ? "green" : "red.400"}
                  as={MdVerified}
                />
              </HStack>
            </VStack>

            <Box w="full">
              <Button
                py={6}
                colorScheme="teal"
                w="full"
                fontWeight="bold"
                fontSize="lg"
                onClick={handleSubmit}
                disabled={!canSubmitForm(identityState)}
              >
                Submit {isLoading ? " ..." : ""}
              </Button>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </Center>
  );
};
