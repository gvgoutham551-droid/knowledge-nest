import styles from "./Results.module.css";
import {
  FiUsers,
  FiTrendingUp,
  FiBookOpen,
  FiAward,
} from "react-icons/fi";

const stats = [
  {
    icon: <FiUsers />,
    number: "1000+",
    title: "Students",
    description:
      "Students guided through quality education and personalized learning.",
  },
  {
    icon: <FiTrendingUp />,
    number: "95%",
    title: "Success Rate",
    description:
      "Consistent academic performance with excellent student outcomes.",
  },
  {
    icon: <FiBookOpen />,
    number: "25+",
    title: "Courses Offered",
    description:
      "Academic and future skill programs designed for every learner.",
  },
  {
    icon: <FiAward />,
    number: "12+",
    title: "Expert Faculty",
    description:
      "Experienced educators dedicated to inspiring student success.",
  },
];

const Results = () => {
  return (
    <section className={styles.section} id="results">
      <div className={styles.container}>

        <div className={styles.heading}>
          <span className={styles.badge}>Results</span>

          <h2>
            Empowering Students
            <span> For Academic Success</span>
          </h2>

          <p>
            Our commitment to quality education, expert guidance,
            and personalized learning has helped students build
            confidence, achieve academic excellence, and prepare
            for a brighter future.
          </p>
        </div>

        <div className={styles.grid}>
          {stats.map((item, index) => (
            <div className={styles.card} key={index}>

              <div className={styles.icon}>
                {item.icon}
              </div>

              <h3>{item.number}</h3>

              <h4>{item.title}</h4>

              <p>{item.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Results;