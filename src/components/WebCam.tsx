import { Box } from '@chakra-ui/react';
import { useCallback, useContext, useRef } from 'react';
import Webcam from 'react-webcam';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import { MdCamera } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { IdentityContext } from '../context/IdentityContext';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/camera.css';

export const WebCam = () => {
  let { type } = useParams();
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

        <Box m={8}>
          <Webcam
            className={type === 'selfi' ? 'camera-face' : 'camera'}
            mirrored={true}
            audio={false}
            ref={cardRef}
            screenshotFormat="image/jpeg"
            screenshotQuality={1}
          />
        </Box>

        <Box>
          <Icon onClick={capture} cursor="pointer" as={MdCamera} boxSize={16} color="white" />
        </Box>
      </Box>
    </Box>
  );
};
