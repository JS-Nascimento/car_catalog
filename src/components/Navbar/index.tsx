import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-warning nav-container">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <h3>Extreme Cars</h3>
        </a>
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
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="/catalogo">
              Catálogo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
