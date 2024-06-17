import { act } from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextArea from "components/TextArea";
import { TEST_IDS } from "helpers/constants";

describe("TextArea", () => {
  test("renders without errors", () => {
    const { getByTestId, queryByTestId } = render(<TextArea />);

    const container = getByTestId(TEST_IDS.TEXTAREA.CONTAINER);
    const textareaElement = getByTestId(TEST_IDS.TEXTAREA.TEXTAREA);
    const errorMessageElement = queryByTestId(TEST_IDS.TEXTAREA.ERROR_MESSAGE);

    expect(container).toBeInTheDocument();
    expect(textareaElement).toBeInTheDocument();
    expect(errorMessageElement).not.toBeInTheDocument();
    expect(textareaElement).toHaveClass(
      "border border-transparent",
      "rounded-md resize-none",
      "focus-visible:outline-0",
      "tracking-wide text-md sm:text-xl",
      "dark:bg-zinc-800 dark:text-zinc-50",
      "w-full h-full"
    );
    expect(textareaElement).toHaveClass(
      "active:border-amber-300 focus:border-amber-300",
      "hover:border-amber-300",
      "dark:active:border-zinc-500 dark:focus:border-zinc-500",
      "dark:hover:border-zinc-500"
    );
  });

  test("applies custom class name", () => {
    const { getByTestId } = render(<TextArea className="custom-textarea" />);

    const textareaElement = getByTestId(TEST_IDS.TEXTAREA.TEXTAREA);
    expect(textareaElement).toHaveClass("custom-textarea");
  });

  test("displays error message when hasError is true", () => {
    const { getByTestId } = render(
      <TextArea hasError errorMessage="Invalid input" />
    );

    const errorMessageElement = getByTestId(TEST_IDS.TEXTAREA.ERROR_MESSAGE);
    expect(errorMessageElement).toBeInTheDocument();
  });

  test("triggers onChange event", async () => {
    const handleChange = vi.fn();
    const { getByTestId } = render(<TextArea onChange={handleChange} />);

    const textareaElement = getByTestId(TEST_IDS.TEXTAREA.TEXTAREA);
    await act(() => userEvent.type(textareaElement, "Hello"));
    expect(handleChange).toHaveBeenCalledTimes(5); // Assuming 5 characters are typed
  });
});
