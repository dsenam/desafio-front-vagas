

import './styles.css';
import Typography from '../Typography';

const Header = () => {
  return (
    <header className="header">
    <Typography variant='h1' className="header__title">
      Formulário
      <br />
      para compra de
      <br />
      <span className='header__title--highlight'>Pacote de Stickers</span>
    </Typography>
  </header>
  );
}

export default Header;