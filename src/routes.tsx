import App from './components/App';
import { useRoutes } from 'react-router-dom';
import { ChooseCard } from './components/ChooseCard';
import { UploadForm } from './components/UploadForm';
import { UploadImage } from './components/UploadImage';
import { WebCam } from './components/WebCam';
import { Result } from './components/Result';

export const routes = [
  {
    path: '/',
    element: <UploadForm />,
  },
  {
    path: '/choose-card',
    element: <ChooseCard />,
  },
  {
    path: '/app',
    element: <App />,
  },
  {
    path: '/upload-image',
    element: <UploadImage />,
  },
  {
    path: '/web-cam/:type',
    element: <WebCam />,
  },
  {
    path: '/result',
    element: <Result />,
  },
];

export const AppRoutes = () => {
  return useRoutes([...routes]);
};
