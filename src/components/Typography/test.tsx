import { render, screen } from "@testing-library/react";
import Typography from ".";

describe("Typography", () => {
  it("should render a Typography component with a valid variant and children", () => {
    const variant = "h1";
    const children = "Hello World";

    render(<Typography variant={variant}>{children}</Typography>);

    expect(screen.getByText(children)).toBeInTheDocument();
    expect(screen.getByText(children).tagName).toBe("H1");
  });
});
