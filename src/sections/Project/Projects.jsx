import styles from "./ProjectsStyles.module.css";
import currency from "../../assets/currency-img (1).png";
import ProjectCard from "../../common/ProjectCard";
import Portfolio from "../../assets/portfolio-img.png";
import todo from "../../assets/todo-img.png";
import Tourism from "../../assets/tour-image.png";

function Project() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={currency}
          link="https://github.com/sadhvi1244/Currency-Converter"
          h3="Currency Converter"
          p=" Exchange rate tool"
        />
        {/* Your app provides a functional utility by fetching and processing data from an API to perform currency conversions. It doesn't involve continuous data flow (like streaming); instead, it fetches data only when a user interacts with it. */}
        <ProjectCard
          src={Portfolio}
          link="https://github.com/sadhvi1244/Currency-Converter"
          h3="Portfolio Website"
          p="Personal work showcase"
        />
        <ProjectCard
          src={todo}
          link="https://github.com/sadhvi1244/Todo"
          h3="To-Do App"
          p="Task management tool"
        />
        <ProjectCard
          src={Tourism}
          link="https://github.com/sadhvi1244/2rism/"
          h3="Tour & Travel Website"
          p="Travel guides, bookings"
        />
      </div>
    </section>
  );
}

export default Project;
