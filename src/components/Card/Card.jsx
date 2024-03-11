import styles from "./Card.module.scss";

import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const stackIcon = {
  ReactJs: <FaReact className={styles["card-icon"]} />,

  Javascript: <IoLogoJavascript className={styles["card-icon"]} />,

  Python: <FaPython className={styles["card-icon"]} />,

  CSS: <FaCss3Alt className={styles["card-icon"]} />,
};

const Card = props => {
  const { title, description, stack, code, demo } = props.data;

  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-detail"]}>
        <h2>{title}</h2>
        <p>{description}</p>

        <div className={styles["card-icons"]}>
          {stack.map(slug => stackIcon[slug])}
        </div>
      </div>

      <div className={styles["card-btns"]}>
        <a href={code} target="_blank" className={styles["card-btn"]}>
          Code <FaGithub />
        </a>
        {demo && (
          <a href={demo} target="_blank" className={styles["card-btn"]}>
            Demo <FaArrowRight />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
