import styles from "./HeroContent.module.css";
import { FiArrowRight, FiPlayCircle } from "react-icons/fi";
import Stats from "../Stats/Stats";

const HeroContent = () => {
  return (
    <div className={styles.heroContent}>
      {/* Badge */}
      <div className={styles.badge} id="home">
        🎓 Dindigul's Best Tutorial Academy
      </div>

      {/* Heading */}
      <h1 className={styles.title}>
        Inspiring
        <span> Young Minds.</span>
        <br />
        Building
        <span> Future Leaders.</span>
      </h1>

      {/* Description */}
      <p className={styles.description}>
        Knowledge Nest helps students from <strong>Pre-KG to Grade 12</strong>{" "}
        achieve academic excellence while mastering future-ready skills like{" "}
        <strong>Python</strong>, <strong>Java</strong>,
        <strong> Web Development</strong>, and
        <strong> Artificial Intelligence</strong>.
      </p>

      {/* Buttons */}
      <div className={styles.buttonGroup}>
        <a href="#programs" className={styles.primaryBtn}>
          Explore Programs
          <FiArrowRight />
        </a>

        <button className={styles.secondaryBtn}>
          <FiPlayCircle />
          Watch Video
        </button>
      </div>

      {/* Statistics */}
      <Stats />
    </div>
  );
};

export default HeroContent;