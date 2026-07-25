import styles from "./Stats.module.css";
import {
  FiUsers,
  FiBookOpen,
  FiAward,
  FiBriefcase,
} from "react-icons/fi";

const stats = [
  {
    id: 1,
    icon: <FiUsers />,
    number: "1000+",
    label: "Students",
  },
  {
    id: 2,
    icon: <FiBookOpen />,
    number: "25+",
    label: "Courses",
  },
  {
    id: 3,
    icon: <FiAward />,
    number: "95%",
    label: "Success Rate",
  },
  {
    id: 4,
    icon: <FiBriefcase />,
    number: "12+",
    label: "Expert Faculty",
  },
];

const Stats = () => {
  return (
    <div className={styles.stats}>
      {stats.map((item) => (
        <div className={styles.card} key={item.id}>
          <div className={styles.icon}>{item.icon}</div>

          <h3>{item.number}</h3>

          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;