import styles from "./FooterStyles.module.css";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import { useTheme } from "../../common/ThemeContext";

function Footer() {
  const { theme, toggleTheme } = useTheme();
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  return (
    <section id="footer" className={styles.container}>
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
      <p>
        &copy; 2025 Sadhvi Kesarwani. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
