import { Box, HStack, Image, VStack } from '@chakra-ui/react';
import { useCallback, useContext, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import { IoIosReverseCamera, BiRepeat } from 'react-icons/all';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IdentityContext } from '../context';
import 'react-html5-camera-photo/build/css/index.css';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';

export const WebCam = () => {
  let { type } = useParams();
  const [flipped, setFlipped] = useState(type === 'selfi' ? false : true);
  const [captureUrl, setCaptureUrl] = useState('');

  const { identityState, identitySetState } = useContext(IdentityContext);
  const navigate = useNavigate();

  const handleTakePhoto = (dataUri: string) => {
    setCaptureUrl(dataUri);
  };

  const retake = () => {
    setCaptureUrl('');
  };

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
      pb={6}
    >
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="space-between"
        h={{
          base: '90vh',
          md: 'full',
        }}
        w="full"
      >
        <Box w="full">
          <Link to="/upload-image">
            <ArrowBackIcon ml={6} mt={10} mb={4} boxSize={8} color="white" />
          </Link>
        </Box>
        <Box mx={6}>
          {captureUrl ? (
            <Image src={captureUrl} />
          ) : (
            <Camera
              // idealResolution={{ width: 360, height: 500 }}
              idealResolution={{ height: 640, width: 480 }}
              isFullscreen={false}
              idealFacingMode={flipped ? FACING_MODES.ENVIRONMENT : FACING_MODES.USER}
              imageType={IMAGE_TYPES.JPG}
              imageCompression={0.97}
              onTakePhoto={(dataUri) => {
                handleTakePhoto(dataUri);
              }}
            />
          )}
        </Box>
        <HStack justifyContent="space-between" w="90%">
          <Icon
            onClick={flipCamera}
            cursor="pointer"
            as={IoIosReverseCamera}
            boxSize={12}
            color="white"
          />

          <Icon onClick={retake} cursor="pointer" as={BiRepeat} boxSize={12} color="white" />
        </HStack>
      </Box>
    </Box>
  );
};
