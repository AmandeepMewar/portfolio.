import styles from "./Home.module.scss";
import profile from "../../assets/profile.jpeg";

import {
  NavBar,
  TechStack,
  Footer,
  Button,
  Blinker,
} from "../../components/index";

import usePageTitle from "../../hooks/usePageTitle";

import { ScrollRestoration, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  usePageTitle("Amandeep Mewar");

  const handleWork = () => {
    navigate("/work");
  };

  const handleAbout = () => {
    navigate("/about");
  };
  return (
    <div className={styles["home"]}>
      <ScrollRestoration />
      <header>
        <NavBar path="/" />
      </header>

      <main>
        <div className={styles["home__hero"]}>
          <div className={styles["home__intro"]}>
            <div className={styles["home__intro--text"]}>
              <div className={styles["home__intro--heading"]}>
                <h1>Hello everyone!</h1>
                <h1>I&apos;m Amandeep.</h1>
              </div>

              <p className={styles["home__intro--para"]}>
                Welcome on my portfolio page! I&apos;m a Passionate Software
                Developer, currently a CSE undergrad. Living in Dehradun, India.
              </p>
            </div>

            <div className={styles["home__intro--img"]}>
              <img src={profile} alt="Profile Img" />
            </div>
          </div>

          <Blinker />
        </div>

        <div className={styles["home__section"]}>
          <h1>Work history</h1>
          <p>Here you can find out more about the projects I've worked on.</p>
          <Button onClick={handleWork}>Check out my work history</Button>
        </div>

        <div className={styles["home__tech-stack"]}>
          <h1>Technologies and Tools I work with</h1>
          <TechStack />
        </div>

        <div className={styles["home__section"]}>
          <h1>About me</h1>
          <p>
            Here you can find out more about me, my hobbies, and my personal
            projects I&apos;m currently working on.
          </p>
          <Button onClick={handleAbout}>Get to know more about me</Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
