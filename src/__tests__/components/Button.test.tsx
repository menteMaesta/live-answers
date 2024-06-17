import { render, fireEvent } from "@testing-library/react";
import Button from "components/Button";

describe("Button component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Button>Click me</Button>);
    const buttonElement = getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      "rounded-full",
      "bg-gradient-to-r from-amber-300 to-lime-300",
      "hover:from-amber-400 hover:to-lime-400",
      "dark:text-gray-100",
      "dark:from-amber-600 dark:to-lime-600",
      "dark:hover:from-amber-700 dark:hover:to-lime-700"
    );
  });

  it("calls the onClick handler when clicked", () => {
    const onClickMock = vi.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Click me</Button>
    );
    const buttonElement = getByText("Click me");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  it("applies the provided className", () => {
    const { container } = render(
      <Button className="custom-button">Click me</Button>
    );
    const buttonElement = container.querySelector(".custom-button");
    expect(buttonElement).toBeInTheDocument();
  });
});
