import NavBar from "../../components/NavBar/NavBar";
import profile from "../../assets/profile.jpeg";
import styles from "./Home.module.scss";
import TechStack from "../../components/TechStack/TechStack";

import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className={styles["home"]}>
      <NavBar />

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

        <div className={styles["arrow-icon"]}></div>
      </div>

      <div className={styles["home__tech-stack"]}>
        <h1>Technologies and Tools I work with</h1>
        <TechStack />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
