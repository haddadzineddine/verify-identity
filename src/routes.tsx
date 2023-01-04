import App from "./components/App";
import { useRoutes } from "react-router-dom";
import { ChooseCard } from "./components/ChooseCard";
import { UploadForm } from "./components/UploadForm";
import { UploadImage } from "./components/UploadImage";
import { WebCam } from "./components/WebCam";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/choose-card",
    element: <ChooseCard />,
  },
  {
    path: "/upload-form",
    element: <UploadForm />,
  },
  {
    path: "/upload-image",
    element: <UploadImage />,
  },
  {
    path: "/web-cam/:type",
    element: <WebCam />,
  },
];

export const AppRoutes = () => {
  const element = useRoutes([...routes]);
  return <>{element}</>;
};
