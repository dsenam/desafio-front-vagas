import { render, screen } from "@testing-library/react";
import Typography from ".";

describe("Typography", () => {
  it("should render a Typography component with a valid variant and children", () => {
    const variant = "h1";
    const title = "Hello World";

    render(<Typography title={title} variant={variant} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(title).tagName).toBe("H1");
  });
});
