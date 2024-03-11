import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./Footer.module.scss";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__box"]}></div>
      <div className={styles["footer__copyright"]}>
        <h4>©️{year}</h4>
        <h4>Built with</h4>
        <h4>ReactJs/Javascript</h4>
      </div>
      <div>
        <ul className={styles["footer__socials"]}>
          <li>
            <a href="https://github.com/AmandeepMewar">
              <FaGithub className={styles["footer__socials--icon"]} />
            </a>
          </li>
          <li>
            <a href="">
              <SiGmail className={styles["footer__socials--icon"]} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/amandeepmewar/">
              <FaLinkedin className={styles["footer__socials--icon"]} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/AmandeepMewar">
              <FaXTwitter className={styles["footer__socials--icon"]} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
