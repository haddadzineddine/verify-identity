import { Box, Center, VStack } from "@chakra-ui/react";
import { useCallback, useContext, useRef, useState } from "react";
import Webcam from "react-webcam";
import { ArrowBackIcon, PhoneIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { MdCamera } from "react-icons/md";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { IdentityContext } from "../context/IdentityContext";
import { useNavigate } from "react-router-dom";

export const WebCam = () => {
  let { type } = useParams();
  const { identityState, identitySetState } = useContext(IdentityContext);
  const navigate = useNavigate();

  const cardRef = useRef<Webcam>(null);
  const capture = useCallback(() => {
    const imageSrc = cardRef.current?.getScreenshot();
    identitySetState({
      ...identityState,
      [type ?? ""]: imageSrc,
    });

    navigate("/upload-image");
  }, [cardRef]);

  return (
    <Center w="100vw" h="100vh" backgroundColor="blackAlpha.600">
      <VStack
        h={{
          base: "100%",
          md: "75%",
        }}
        w={{
          base: "100%",
          md: "25%",
        }}
        border="2px solid white"
        borderRadius={36}
        backgroundColor="blackAlpha.700"
        justifyContent="space-around"
      >
        <Box width="full">
          <Link to="/upload-image">
            <ArrowBackIcon ml={8} mt={10} mb={4} boxSize={8} color="white" />
          </Link>
        </Box>

        <Box borderRadius={12} p={4}>
          <Box border="2px solid white">
            <Webcam audio={false} ref={cardRef} screenshotFormat="image/jpeg" />
          </Box>
        </Box>

        <Box>
          <Icon
            onClick={capture}
            cursor="pointer"
            as={MdCamera}
            boxSize={16}
            color="white"
          />
        </Box>
      </VStack>
    </Center>
  );
};
