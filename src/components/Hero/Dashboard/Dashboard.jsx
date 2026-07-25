import styles from "./Dashboard.module.css";
import {
  FiBookOpen,
  FiCode,
  FiCpu,
  FiGlobe,
  FiArrowRight,
} from "react-icons/fi";

import FloatingCard from "../FloatingCard/FloatingCard";

const programs = [
  {
    icon: <FiBookOpen />,
    title: "Academic",
    subtitle: "Pre-KG → Grade 12",
  },
  {
    icon: <FiCode />,
    title: "Python",
    subtitle: "Programming",
  },
  {
    icon: <FiCpu />,
    title: "Java",
    subtitle: "Core + OOP",
  },
  {
    icon: <FiGlobe />,
    title: "Web Dev",
    subtitle: "HTML • CSS • React",
  },
];

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <FloatingCard
        title="Admissions"
        subtitle="Open Now"
        position="topLeft"
      />

      <FloatingCard
        title="Expert"
        subtitle="Faculty"
        position="topRight"
      />

      <FloatingCard
        title="1000+"
        subtitle="Students"
        position="bottomLeft"
      />

      <div className={styles.dashboard}>
        <div className={styles.header}>
          <span>Programs We Offer</span>
          <h2>Knowledge Nest</h2>
        </div>

        <div className={styles.grid}>
          {programs.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.icon}>
                {item.icon}
              </div>

              <h4>{item.title}</h4>

              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>

        <div className={styles.bottomCard}>
          <div>
            <h3>Admissions Open</h3>
            <p>Join the next batch today.</p>
          </div>

          <a href="#contact" className={styles.applyBtn}>
            Apply Now
            <FiArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;