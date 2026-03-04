import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand-wrap">
          <img className="brand-logo-image" src="/images/dressing-hollywood.png" alt="Ashwi Furniture Logo" />
          <div>
            <h1>Ashwi Furniture</h1>
            <p>Factory Direct Furniture</p>
          </div>
        </div>
        <nav className="main-nav" aria-label="Primary">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Collections</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/about">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
