import { StrictMode } from "react";
import { render, waitFor } from "@testing-library/react";
import {
  MemoryRouter,
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";
import { ROUTES, TEST_IDS, STRINGS } from "helpers/constants";
import Dashboard from "routes/Dashboard/Dashboard";
import TopBar from "components/TopBar";

describe("TopBar", () => {
  test("renders topbar", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <TopBar />
      </MemoryRouter>
    );

    const topBar = getByTestId(TEST_IDS.TOP_BAR);

    expect(topBar).toBeInTheDocument();
    expect(topBar).toHaveClass(
      "w-screen h-11 items-center",
      "shadow shadow-slate-100",
      "bg-white flex items-center",
      "space-x-2 absolute",
      "top-0 z-10",
      "dark:shadow-zinc-800",
      "bg-gradient-to-r from-amber-300 to-lime-300",
      "dark:from-amber-600 dark:to-lime-600"
    );
  });

  test("renders the back button when outside the index page", async () => {
    const routes = [
      {
        path: "/",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <div>dashboard index</div>,
          },
          {
            path: "/other-route",
            element: <div>different route</div>,
          },
        ],
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/other-route"],
    });

    const { getByTestId } = render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    );

    const backButton = await waitFor(() => getByTestId(TEST_IDS.BACK_BUTTON));

    expect(backButton).toBeInTheDocument();
  });

  test("Render all answers link and doesnt render back butto when inside index page", async () => {
    const routes = [
      {
        path: "/",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <div>dashboard index</div>,
          },
          {
            path: "/other-route",
            element: <div>different route</div>,
          },
        ],
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    const { queryByTestId, getByTestId } = render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    );

    const backButton = await waitFor(() => queryByTestId(TEST_IDS.BACK_BUTTON));
    const allAnswersLink = getByTestId(TEST_IDS.ALL_ANSWERS_LINK);

    expect(backButton).not.toBeInTheDocument();
    expect(allAnswersLink).toBeInTheDocument();
    expect(allAnswersLink).toHaveTextContent(STRINGS.ALL_ANSWERS);
    expect(allAnswersLink).toHaveAttribute("href", ROUTES.ANSWERS);
  });
});
