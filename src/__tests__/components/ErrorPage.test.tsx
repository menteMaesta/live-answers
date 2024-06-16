import { StrictMode } from "react";
import { render, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "components/ErrorPage";
import { ROUTES, TEST_IDS } from "helpers/constants";

describe("ErrorPage", () => {
  const routes = [
    {
      path: "/",
      element: <p>Home</p>,
      errorElement: <ErrorPage />,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ["/other-route"],
  });

  it("renders the error message correctly", async () => {
    const { getByTestId } = render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    );

    const errorPage = await waitFor(() => getByTestId(TEST_IDS.ERROR.PAGE));
    const icon = getByTestId(TEST_IDS.ERROR.ICON);
    const title = getByTestId(TEST_IDS.ERROR.TITLE);
    const message = getByTestId(TEST_IDS.ERROR.MESSAGE);
    const homeLink = getByTestId(TEST_IDS.ERROR.BACK_BUTTON);

    expect(errorPage).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe("An error occurred");
    expect(message).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
  });

  it("renders a link to the home page", async () => {
    const { getByTestId } = render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    );

    const homeLink = await waitFor(() =>
      getByTestId(TEST_IDS.ERROR.BACK_BUTTON)
    );

    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute("href")).toBe(ROUTES.DASHBOARD);
  });
});
