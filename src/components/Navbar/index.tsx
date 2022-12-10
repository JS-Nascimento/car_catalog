import { Link, NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-warning nav-container">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand p-3" >
          <h3>Extreme Cars</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

          <div className="navbar-nav nav-menu-container ">
          <NavLink
                to="/"
                className={({ isActive }) =>
                  (isActive ? 'active' : '')
                }
                end 
              >
                Home
              </NavLink>
            <NavLink
                to="/catalogo"
                className={({ isActive }) =>
                  (isActive ? 'active px-5' : 'px-5')
                }>
              Catálogo
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
