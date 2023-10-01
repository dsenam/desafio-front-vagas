import React from 'react';
import "./styles.css";
import Typography from "../Typography";

const Header = React.memo(() => {
  return (
    <header className="header">
      <Typography
        title="Formulário para compra de"
        variant="h1"
        className="header__title"
      />

      <Typography
        title="Pacote de Stickers"
        variant="p"
        className="header__highlight"
      />
    </header>
  );
});

export default Header;
