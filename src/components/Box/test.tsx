import { render, screen } from "@testing-library/react";
import Box from ".";

it("should render a div with class 'box' and children", () => {
  const children = <span>Test</span>;

  render(<Box>{children}</Box>);

  expect(screen.getByTestId("box")).toBeInTheDocument();
  expect(screen.getByTestId("box")).toHaveClass("box");
  expect(screen.getByTestId("box")).toContainElement(screen.getByText("Test"));
});
