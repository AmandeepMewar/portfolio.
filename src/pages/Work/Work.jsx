import styles from "./Work.module.scss";

import ProjectsData from "../../utils/projects";
import { Card, NavBar, Footer } from "../../components";

import usePageTitle from "../../hooks/usePageTitle";
import { ScrollRestoration } from "react-router-dom";

const Work = () => {
  usePageTitle("Work history");
  return (
    <div className={styles["work"]}>
      <ScrollRestoration />
      <header>
        <NavBar path="/work" />
      </header>

      <main>
        <div className={styles["work-content"]}>
          <div className={styles["work-intro"]}>
            <h1>My work history</h1>

            <p>
              I started my programming journey back in 2018 during my
              Intermediate studies at Kendriya Vidyalaya IIP Dehradun, where I
              learned the basics of Python and SQL. It was during this time that
              I gained my first experience in learning a programming language.
              In 2020, I joined Graphic Era Hill University in Dehradun to
              pursue my Bachelor's degree in Computer Science and Engineering.
              During this period, I developed a strong understanding of web
              development, which includes HTML, CSS, and Javascript, and learned
              ReactJs. I also have a keen interest in Machine learning and have
              created several projects using Python ML algorithms. Currently,
              I'm building an E-commerce Game Store and learning NodeJs side by
              side.
            </p>
          </div>

          <div className={styles["work-projects"]}>
            <h1>Projects</h1>

            <div className={styles["work-projects__cards"]}>
              {ProjectsData.map(project => (
                <Card key={project.id} data={project} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Work;
