import styles from "./WhyChoose.module.css";
import illustration from "../../assets/images/hero-illustration.png";

import {
  FiBookOpen,
  FiCode,
  FiUsers,
  FiAward,
  FiArrowRight,
} from "react-icons/fi";

const features = [
  {
    icon: <FiBookOpen />,
    title: "Academic Excellence",
    description:
      "Structured coaching from Pre-KG to Grade 12 with personalized learning.",
  },
  {
    icon: <FiCode />,
    title: "Future Skills",
    description:
      "Python, Java, Web Development and Artificial Intelligence.",
  },
  {
    icon: <FiUsers />,
    title: "Expert Faculty",
    description:
      "Experienced mentors focused on every student's success.",
  },
  {
    icon: <FiAward />,
    title: "Proven Results",
    description:
      "Consistent academic achievements with practical skill development.",
  },
];

const WhyChoose = () => {
  return (
    <section className={styles.section} id="aboutus">
      <div className={styles.container}>

        {/* Desktop Image */}
        <div className={styles.imageSection}>
          <img
            src={illustration}
            alt="Knowledge Nest Students"
          />
        </div>

        {/* Content */}
        <div className={styles.content}>

          <span className={styles.badge}>
            Why Choose Knowledge Nest
          </span>

          <h2>
            Empowering Students To
            <span> Learn, Grow & Achieve.</span>
          </h2>

          <p>
            At Knowledge Nest, we combine strong academic coaching with
            practical future-ready skills, helping students build confidence,
            creativity, and lifelong success.
          </p>

          {/* Mobile Image */}
          <div className={styles.mobileImage}>
            <img
              src={illustration}
              alt="Knowledge Nest Students"
            />
          </div>

          {/* Features */}
          <div className={styles.grid}>
            {features.map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.icon}>
                  {item.icon}
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className={styles.joinBtn}>
            Join Knowledge Nest
            <FiArrowRight />
          </a>

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;