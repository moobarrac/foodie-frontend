import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routesConfig from "./routesConfig";

const AppRoutes = () => {
  const routes = useRoutes(routesConfig);

  return <Suspense fallback={<div>Loading....</div>}>{routes}</Suspense>;
};

export default AppRoutes;
