import { render, screen } from "@testing-library/react";
import Header from ".";

it('should render a header element with class \'header\'', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('header');
  });

it('should render a Typography component with variant \'h1\' and class \'header__title\'', () => {
    render(<Header />);
    const typographyElement = screen.getByRole('heading', { level: 1 });
    expect(typographyElement).toHaveClass('header__title');
});

it('should render the correct text inside the Typography component', () => {
    render(<Header />);
    const typographyElement = screen.getByRole('heading', { level: 1 });
    expect(typographyElement).toBeInTheDocument();
  });

  it('should render a span element with class \'header__highlight\' inside the Typography component', () => {
    render(<Header />);
    const spanElement = screen.getByText('Pacote de Stickers');
    expect(spanElement).toHaveClass('header__highlight');
  });