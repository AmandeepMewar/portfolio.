import NavBar from "../../components/NavBar/NavBar";
import profile from "../../assets/profile.jpeg";
import styles from "./Home.module.scss";
import TechStack from "../../components/TechStack/TechStack";

import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Blinker from "../../components/Blinker/Blinker";
import usePageTitle from "../../hooks/usePageTitle";

const Home = () => {
  usePageTitle("Amandeep Mewar");
  return (
    <div className={styles["home"]}>
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
          <Button>Check out my work history</Button>
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
          <Button>Get to know more about me</Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
