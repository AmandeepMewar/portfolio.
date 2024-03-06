import styles from "./NavBar.module.scss";

const navi = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Work",
  },
  {
    id: 3,
    name: "About",
  },
];
const NavBar = () => {
  return (
    <nav className={styles["nav"]}>
      <div className={styles["nav__person"]}>
        <div className={styles["nav__person--logo"]}>
          <h4>AM</h4>
        </div>
        <h4>Amandeep Mewar</h4>
      </div>
      <div className={styles["nav__menu"]}>
        <ul className={styles["nav__menu--list"]}>
          {navi.map(item => {
            return (
              <li key={item.id} className={styles["nav__menu--item"]}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
