import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1><img src="./src/assets/rolex.png" alt="logo" /> CoderClock</h1>
      </div>
      <ul className="nav-links">
        <li>INICIO</li>
        <li>ACERCA</li>
        <li>PRODUCTOS</li>
        <li>CONTACTO</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;