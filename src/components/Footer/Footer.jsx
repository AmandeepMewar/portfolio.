import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__box"]}></div>
      <div className={styles["footer__copyright"]}>
        <h4>©️2024</h4>
        <h4>Built with</h4>
        <h4>ReactJs/Javascript</h4>
      </div>
      <div>
        <ul className={styles["footer__socials"]}>
          <li>
            <FaGithub className={styles["footer__socials--icon"]} />
          </li>
          <li>
            <SiGmail className={styles["footer__socials--icon"]} />
          </li>
          <li>
            <FaLinkedin className={styles["footer__socials--icon"]} />
          </li>
          <li>
            <FaXTwitter className={styles["footer__socials--icon"]} />
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
