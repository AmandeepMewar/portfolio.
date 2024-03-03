import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaNpm } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

import styles from "./TechStack.module.scss";
const stackR1 = [
  {
    id: 1,
    icon: <FaHtml5 className={styles["icon"]} />,
    name: "HTML",
  },
  {
    id: 2,
    icon: <FaCss3Alt className={styles["icon"]} />,
    name: "CSS",
  },
  {
    id: 3,
    icon: <IoLogoJavascript className={styles["icon"]} />,
    name: "Javascript",
  },
  {
    id: 4,
    icon: <FaReact className={styles["icon"]} />,
    name: "ReactJs",
  },
  {
    id: 5,
    icon: <FaSass className={styles["icon"]} />,
    name: "Sass",
  },
];

const stackR2 = [
  {
    id: 6,
    icon: <FaGitAlt className={styles["icon"]} />,
    name: "Git",
  },
  {
    id: 7,
    icon: <TbBrandVscode className={styles["icon"]} />,
    name: "Visual Studio Code",
  },
  {
    id: 8,
    icon: <FaPython className={styles["icon"]} />,
    name: "Python",
  },
  {
    id: 9,
    icon: <TbBrandCpp className={styles["icon"]} />,
    name: "C++",
  },
];

const stackR3 = [
  {
    id: 10,
    icon: <FaNpm className={styles["icon"]} />,
    name: "Node Package Manager",
  },
  {
    id: 11,
    icon: <SiMysql className={styles["icon"]} />,
    name: "MySQL",
  },
  {
    id: 12,
    icon: <FaNodeJs className={styles["icon"]} />,
    name: "NodeJs",
  },
];

const TechStack = () => {
  return (
    <div className={styles["tech-stack"]}>
      <div>
        {stackR1.map(tool => {
          return tool.icon;
        })}
      </div>
      <div>
        {stackR2.map(tool => {
          return tool.icon;
        })}
      </div>
      <div>
        {stackR3.map(tool => {
          return tool.icon;
        })}
      </div>
    </div>
  );
};

export default TechStack;
