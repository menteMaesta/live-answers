import { StrictMode } from "react";
import { render, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { ROUTES, ANSWER_STUB, TEST_IDS } from "helpers/constants";
import AllAnswers from "routes/AllAnswers/AllAnswers";

describe("AllAnswers", () => {
  test("renders AllAnswers component", async () => {
    const routes = [
      {
        path: ROUTES.ANSWERS,
        element: <AllAnswers />,
        loader: () => [ANSWER_STUB],
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: [ROUTES.ANSWERS],
    });
    const { getByTestId } = render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    );

    const answerList = await waitFor(() => getByTestId(TEST_IDS.ANSWER_LIST));

    expect(answerList).toBeInTheDocument();
    expect(answerList.children).toHaveLength(1);
    expect(answerList).toHaveClass(
      "mt-11 p-4 w-full",
      "grid grid-cols-1 gap-4",
      "sm:grid-cols-2",
      "items-stretch"
    );
  });
});
