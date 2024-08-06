import Header from "@/components/Header";
import BaseLayout from "@/layout/BaseLayout";
import { Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";

const routesConfig = [
  {
    path: "/",
    element: (
      <BaseLayout>
        <Outlet />
      </BaseLayout>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <Header />,
      },
    ],
  },
];

export default routesConfig;
