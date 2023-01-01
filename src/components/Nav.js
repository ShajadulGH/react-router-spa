import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
const Nav = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/welcome"
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/products"
            >
              Producs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Nav;
