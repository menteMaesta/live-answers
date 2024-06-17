import { act } from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import SnackbarProvider from "react-simple-snackbar";
import UserAnswer from "routes/UserAnswer/UserAnswer";
import { ROUTES, QUESTION_STUB, TEST_IDS, STRINGS } from "helpers/constants";

describe("UserAnswer component", () => {
  const routes = [
    {
      path: ROUTES.DASHBOARD,
      element: <UserAnswer />,
      loader: () => QUESTION_STUB,
      action: () => true,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: [ROUTES.DASHBOARD],
  });

  it("renders without errors", async () => {
    const { getByTestId } = render(
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
    );

    const page = await waitFor(() => getByTestId(TEST_IDS.USER_ANSWERS.PAGE));
    const title = getByTestId(TEST_IDS.USER_ANSWERS.TITLE);
    const button = getByTestId(TEST_IDS.USER_ANSWERS.BUTTON);

    expect(page).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe(QUESTION_STUB.title);
    expect(button).toBeInTheDocument();
  });

  it("Shows error message if empty", async () => {
    const { getByTestId, queryByTestId } = render(
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
    );

    const textarea = await waitFor(() =>
      getByTestId(TEST_IDS.TEXTAREA.TEXTAREA)
    );
    const button = getByTestId(TEST_IDS.USER_ANSWERS.BUTTON);

    expect(
      queryByTestId(TEST_IDS.TEXTAREA.ERROR_MESSAGE)
    ).not.toBeInTheDocument();
    await act(() => userEvent.type(textarea, "   "));
    await act(() => fireEvent.click(button));

    const errorMessage = queryByTestId(
      TEST_IDS.TEXTAREA.ERROR_MESSAGE
    ) as HTMLElement;

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.textContent).toBe(STRINGS.USER_ANSWERS.EMPTY_ANSWER);
  });

  it("Shows error message if the answer is not allowed", async () => {
    const { getByTestId, queryByTestId } = render(
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
    );

    const textarea = await waitFor(() =>
      getByTestId(TEST_IDS.TEXTAREA.TEXTAREA)
    );
    const button = getByTestId(TEST_IDS.USER_ANSWERS.BUTTON);
    const message = "Yes";

    expect(
      queryByTestId(TEST_IDS.TEXTAREA.ERROR_MESSAGE)
    ).not.toBeInTheDocument();
    await act(() => userEvent.type(textarea, message));
    await act(() => fireEvent.click(button));

    const errorMessage = queryByTestId(
      TEST_IDS.TEXTAREA.ERROR_MESSAGE
    ) as HTMLElement;

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.textContent).toBe(
      STRINGS.USER_ANSWERS.NOT_ALLOWED_ANSWER.replace(
        "_",
        message.toLowerCase()
      )
    );
  });

  it("Cleans itself after submitting", async () => {
    const { getByTestId } = render(
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
    );

    const textarea = await waitFor(() =>
      getByTestId(TEST_IDS.TEXTAREA.TEXTAREA)
    );
    const button = getByTestId(TEST_IDS.USER_ANSWERS.BUTTON);
    const message = "A good answer";

    await act(() => userEvent.type(textarea, message));
    await act(() => fireEvent.click(button));
    expect(textarea).toHaveValue("");
  });
});
