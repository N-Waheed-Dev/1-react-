
import style from "./Nav.module.css";
import logo from "../pages/logo-hostig.png";

const Nav = () => {
  return (
    <nav className={style.navbar}>
      <div className={style["navbar-container"]}>

        {/* قسم اللوجو */}
        <div className={style["navbar-logo"]}>
          <a href="#home">
            <img src={logo} alt="Hostaro Logo" />
          </a>
        </div>

        {/* روابط التنقل */}
        <ul className={style["nav-menu"]}>
          <li className={style["nav-item"]}>
            <a href="#home" className={style["nav-links"]}>
              HOME
            </a>
          </li>

          <li className={`${style["nav-item"]} ${style.dropdown}`}>
            <a
              href="#pages"
              className={`${style["nav-links"]} ${style.active}`}
            >
              PAGES <span className={style.arrow}>⌄</span>
            </a>

            {/* القائمة المنسدلة */}
            <ul className={style["dropdown-menu"]}>
              <li>
                <a href="#about">About Us</a>
              </li>

              <li>
                <a href="#services">Services</a>
              </li>
            </ul>
          </li>

          <li className={style["nav-item"]}>
            <a href="#contact" className={style["nav-links"]}>
              CONTACT
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Nav;
