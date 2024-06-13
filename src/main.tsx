import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "helpers/constants";
import ErrorPage from "components/ErrorPage";
import "tailwindcss/tailwind.css";

const router = createBrowserRouter([
  {
    path: ROUTES.DASHBOARD,
    element: <p className="text-3xl">Dashboard</p>,
    errorElement: <ErrorPage />,
    children: [],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
