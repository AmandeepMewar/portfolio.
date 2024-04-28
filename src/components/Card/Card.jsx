import styles from "./Card.module.scss";

import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaGithub, FaPython, FaCss3Alt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaSass } from "react-icons/fa";

const stackIcon = {
  ReactJs: <FaReact className={styles["card-icon"]} />,

  JavaScript: <IoLogoJavascript className={styles["card-icon"]} />,

  Python: <FaPython className={styles["card-icon"]} />,

  CSS: <FaCss3Alt className={styles["card-icon"]} />,

  TailwindCSS: <SiTailwindcss className={styles["card-icon"]} />,

  TypeScript: <SiTypescript className={styles["card-icon"]} />,

  NodeJs: <FaNodeJs className={styles["card-icon"]} />,

  Redux: <SiRedux className={styles["card-icon"]} />,

  Sass: <FaSass className={styles["card-icon"]} />,
};

const Card = props => {
  const { title, description, stack, code, demo } = props.data;

  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-detail"]}>
        <h2>{title}</h2>
        <p>{description}</p>

        <div className={styles["card-icons"]}>
          {stack.map((slug, index) => (
            <div key={index}>{stackIcon[slug]}</div>
          ))}
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
