import { Box, Highlight, Image, Text, VStack } from '@chakra-ui/react';
import { useCallback, useContext, useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import { BsFillCircleFill, IoCameraReverse, BiRepeat, FcOk } from 'react-icons/all';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../assets/styles/camera.css';
import { IdentityContext } from '../context';
import { CameraLayout } from './CameraLayout';

export const WebCam = () => {
  let { type } = useParams();
  const [flipped, setFlipped] = useState(type === 'selfi' ? false : true);
  const [imageSrc, setImageSrc] = useState<string | undefined | null>('');

  const { identityState, identitySetState } = useContext(IdentityContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (type === 'selfi' || type === 'back_ID' || type === 'front_ID') {
      setImageSrc(identityState[type]);
    }
  }, []);

  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return 'tablet';
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua,
      )
    ) {
      return 'mobile';
    }
    return 'desktop';
  };

  const cardRef = useRef<Webcam>(null);
  const capture = useCallback(() => {
    const result = cardRef.current?.getScreenshot();
    setImageSrc(result);
  }, [cardRef]);

  const confirm = () => {
    identitySetState({
      ...identityState,
      [type ?? '']: imageSrc,
    });

    navigate('/upload-image');
  };

  const flipCamera = () => {
    setFlipped(!flipped);
  };

  const reTake = () => {
    setImageSrc('');
  };

  return (
    <CameraLayout>
      <Box
        h="full"
        bgColor="brand.100"
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
            base: '90%',
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
              {imageSrc ? (
                <Image src={imageSrc} />
              ) : getDeviceType() === 'desktop' ? (
                <Webcam
                  className={type === 'selfi' ? 'camera-face' : 'camera'}
                  mirrored={flipped ? false : true}
                  audio={false}
                  ref={cardRef}
                  screenshotFormat="image/jpeg"
                  screenshotQuality={1}
                  videoConstraints={{
                    width: type === 'selfi' ? 600 : 1280,
                    height: type === 'selfi' ? 1280 : 720,
                    facingMode: flipped ? 'environment' : 'user',
                  }}
                />
              ) : (
                <Webcam
                  className={type === 'selfi' ? 'camera-mob-face' : 'camera-mob'}
                  mirrored={flipped ? false : true}
                  audio={false}
                  allowFullScreen={true}
                  ref={cardRef}
                  screenshotFormat="image/jpeg"
                  screenshotQuality={1}
                  videoConstraints={{
                    height: 3800,
                    width: 3000,
                    facingMode: flipped ? 'environment' : 'user',
                  }}
                />
              )}
            </VStack>
          </Box>

          <Box>
            <Text fontWeight="bold" color="white">
              <Highlight
                query="Verifili"
                styles={{ px: '1', rounded: 'full', bg: 'purple.100', fontSize: 'xl' }}
              >
                Powered by Verifili
              </Highlight>
            </Text>
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
              onClick={imageSrc ? confirm : capture}
              border="5px solid"
              borderRadius="50%"
              p={0.5}
              cursor="pointer"
              as={imageSrc ? FcOk : BsFillCircleFill}
              w="4.5rem"
              h="4.5rem"
              color="white"
            />
            <Icon onClick={reTake} cursor="pointer" as={BiRepeat} boxSize={8} color="white" />
          </Box>
        </Box>
      </Box>
    </CameraLayout>
  );
};
