import { Logo } from "../index";
import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const navi = [
  {
    id: 1,
    name: "Home",
    to: "/",
  },
  {
    id: 2,
    name: "Work",
    to: "/work",
  },
  {
    id: 3,
    name: "About",
    to: "/about",
  },
];

const NavBar = ({ path }) => {
  return (
    <nav className={styles["nav"]}>
      <Logo />

      <div className={styles["nav__menu"]}>
        <ul className={styles["nav__menu--list"]}>
          {navi.map(item => {
            return (
              <li
                key={item.id}
                className={`${styles["nav__menu--item"]} ${
                  path === item.to && styles["active"]
                }`}
              >
                <NavLink to={item.to}>{item.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
