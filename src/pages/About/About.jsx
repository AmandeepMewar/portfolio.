import NavBar from "../../components/NavBar/NavBar";
import styles from "./About.module.scss";

import Footer from "../../components/Footer/Footer";
import usePageTitle from "../../hooks/usePageTitle";

const About = () => {
  usePageTitle("About me");
  return (
    <div className={styles["about"]}>
      <header>
        <NavBar path="/about" />
      </header>

      <main>
        <div className={styles["about-content"]}>
          <div className={styles["about-intro"]}>
            <h1>Long story short about me</h1>
            <p>
              Being a computer science Enthusiast, I'm just super passionate
              about all the cool new stuff happening in the tech world. Whether
              it's tackling coding puzzles or checking out the latest trends,
              I'm always excited to learn and grow. Tech is this ever-changing
              adventure, and I love staying on the front lines, trying out new
              things. Each project I work on is like a little journey, where I
              not only get better at the nerdy stuff but also discover how much
              awesome stuff you can do with technology. I'm all about solving
              problems and making a positive impact in the world of computer
              science.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
