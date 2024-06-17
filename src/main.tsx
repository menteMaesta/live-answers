import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SnackbarProvider from "react-simple-snackbar";
import { ROUTES } from "helpers/constants";
import ErrorPage from "components/ErrorPage";
import Dashboard from "routes/Dashboard/Dashboard";
import UserAnswer from "routes/UserAnswer/UserAnswer";
import { getQuestion } from "routes/UserAnswer/loader";
import { answerActions } from "routes/UserAnswer/actions";
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
        action: answerActions,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SnackbarProvider>
      <RouterProvider router={router} />
    </SnackbarProvider>
  </React.StrictMode>
);
