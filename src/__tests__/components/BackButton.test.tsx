import { StrictMode, act } from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import {
  MemoryRouter,
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";
import BackButton from "components/BackButton";

describe("BackButton", () => {
  it("should render the button with the provided className", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <BackButton className="custom-class" />
      </MemoryRouter>
    );

    const button = getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  it("should navigate back when the button is clicked", async () => {
    const routes = [
      {
        path: "/",
        element: <p data-testid="dashboard">Dashboard</p>,
      },
      {
        path: "/other-route",
        element: (
          <div>
            <p data-testid="all-answers">All answers</p>
            <BackButton className="custom-class" />
          </div>
        ),
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/other-route"],
    });

    const { getByRole, getByTestId, queryByTestId } = render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    );

    const button = await waitFor(() => getByRole("button"));

    expect(getByTestId("all-answers")).toBeInTheDocument();
    await act(() => fireEvent.click(button));
    expect(getByTestId("dashboard")).toBeInTheDocument();
    expect(queryByTestId("all-answers")).not.toBeInTheDocument();
  });
});
