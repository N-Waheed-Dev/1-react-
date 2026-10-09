import './Nav.css';
import logo from "../pages/logo-hostig.png";
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* قسم اللوجو */}
        <div className="navbar-logo">
          <a href="src/assets/pages/logo-hostig.png">
            <img src={logo} alt="Hostaro Logo" />
          </a>
        </div>

        {/* روابط التنقل */}
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-links">
              HOME
            </a>
          </li>
          <li className="nav-item dropdown">
            <a href="#pages" className="nav-links active">
              PAGES <span className="arrow">⌄</span>
            </a>
            {/* قائمة منسدلة إن أردت استخدامها لاحقاً */}
            <ul className="dropdown-menu">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;