import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

function Header() {
  return (
    <div className="App">
      <nav className="navbarContainer shadow p-1 mb-2 navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand navbar-title" href="#">
            Croc4Life
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="#">
                Accueil
              </a>
              <a className="nav-link" href="#">
                Nos services
              </a>
              <a className="nav-link" href="#">
                Tarifs
              </a>
              <a className="nav-link" href="#">
                A propos de nous
              </a>
              <a className="nav-link" href="#">
                Contact
              </a>
              {/* <a className="nav-link disabled">Disabled</a> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
