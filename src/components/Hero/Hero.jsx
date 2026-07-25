import styles from "./Hero.module.css";

import HeroContent from "./HeroContent/HeroContent";
import HeroIllustration from "./HeroIllustration/HeroIllustration";
import Dashboard from "./Dashboard/Dashboard";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        <HeroContent />

    

        <Dashboard />

      </div>
    </section>
  );
};

export default Hero;