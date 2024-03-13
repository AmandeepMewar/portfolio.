import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles["logo"]}>
      <div className={styles["logo__person"]}>
        <h4>AM</h4>
      </div>
      <h4>Amandeep Mewar</h4>
    </div>
  );
};

export default Logo;
