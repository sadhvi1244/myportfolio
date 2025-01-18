import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import sadhviResume from "../../assets/Sadhvi_Resume01.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile image of Sadhvi Kesarwani"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Sadhvi <br /> Kesarwani
        </h1>
        <h2> Frontend Developer</h2>
        <span>
          <a href="https://github.com/sadhvi1244" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/sadhvi-kesarwani-259915268/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>

          <a href="https://x.com/Sadhvi1244" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
        </span>
        <p className={styles.description}>
          Stepping into web development with a focus on creating clean, modern,
          and impactful designs.
        </p>
        <a href={sadhviResume}>
          <button className="hover" download>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}
export default Hero;
