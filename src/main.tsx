import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "helpers/constants";
import ErrorPage from "components/ErrorPage";
import Dashboard from "routes/Dashboard/Dashboard";
import UserAnswer from "routes/UserAnswer/UserAnswer";
import { getQuestion } from "routes/UserAnswer/loader";
import "tailwindcss/tailwind.css";

const router = createBrowserRouter([
  {
    path: ROUTES.DASHBOARD,
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <UserAnswer />,
        loader: getQuestion,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
