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
import AllAnswers from "routes/AllAnswers/AllAnswers";
import { getAllAnswers } from "routes/AllAnswers/loader";
import "tailwindcss/tailwind.css";

const router = createBrowserRouter([
  {
    path: ROUTES.DASHBOARD,
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    loader: getQuestion,
    children: [
      {
        index: true,
        element: <UserAnswer />,
        action: answerActions,
        loader: getQuestion,
      },
      {
        path: ROUTES.ANSWERS,
        element: <AllAnswers />,
        loader: getAllAnswers,
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
