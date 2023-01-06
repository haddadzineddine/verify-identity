import { Box, VStack } from '@chakra-ui/react';
import { useCallback, useContext, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import { FaCameraRetro } from 'react-icons/fa';
import { BsFillCircleFill, IoCameraReverse } from 'react-icons/all';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/camera.css';
import { IdentityContext } from '../context';

export const WebCam = () => {
  let { type } = useParams();
  const [flipped, setFlipped] = useState(type === 'selfi' ? false : true);

  const { identityState, identitySetState } = useContext(IdentityContext);
  const navigate = useNavigate();

  const cardRef = useRef<Webcam>(null);
  const capture = useCallback(() => {
    const imageSrc = cardRef.current?.getScreenshot();
    identitySetState({
      ...identityState,
      [type ?? '']: imageSrc,
    });

    navigate('/upload-image');
  }, [cardRef]);

  const flipCamera = () => {
    setFlipped(!flipped);
  };

  return (
    <Box
      h={{
        base: '100vh',
        md: 'full',
      }}
      bgColor="blackAlpha.800"
      borderRadius={{
        base: 0,
        md: 36,
      }}
    >
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="space-around"
        h={{
          base: '90vh',
          md: 'full',
        }}
        w="full"
      >
        <Box w="full">
          <Link to="/upload-image">
            <ArrowBackIcon ml={8} mt={10} mb={4} boxSize={8} color="white" />
          </Link>
        </Box>

        <Box mx={8}>
          <VStack>
            <Webcam
              className={type === 'selfi' ? 'camera-face' : 'camera'}
              mirrored={flipped ? false : true}
              audio={false}
              ref={cardRef}
              screenshotFormat="image/jpeg"
              screenshotQuality={1}
              videoConstraints={{
                width: type === 'selfi' ? 360 : 720,
                height: type === 'selfi' ? 330 : 1280,
                facingMode: flipped ? 'environment' : 'user',
              }}
            />
          </VStack>
        </Box>

        <Box display="flex" justifyContent="space-between" w="80%" alignItems="end" my={4}>
          <Icon
            onClick={flipCamera}
            cursor="pointer"
            as={IoCameraReverse}
            boxSize={8}
            color="white"
          />

          <Icon
            onClick={capture}
            border="5px solid"
            borderRadius="50%"
            p={0.5}
            cursor="pointer"
            as={BsFillCircleFill}
            w="4.5rem"
            h="4.5rem"
            color="white"
          />
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
};
