import styles from "./HeroIllustration.module.css";

import heroImage from "../../../assets/images/hero-illustration.png";

const HeroIllustration = () => {
  return (
    <div className={styles.container}>
      <div className={styles.glow}></div>

      <img
        src={heroImage}
        alt="Knowledge Nest Learning Illustration"
        className={styles.image}
      />
    </div>
  );
};

export default HeroIllustration;