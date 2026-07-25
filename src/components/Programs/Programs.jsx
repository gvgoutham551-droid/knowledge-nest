import styles from "./Programs.module.css";
import programImage from "../../assets/images/class.png";

import {
  FiBookOpen,
  FiCode,
  FiCpu,
  FiGlobe,
  FiBarChart2,
  FiPenTool,
} from "react-icons/fi";

const academicPrograms = [
  {
    title: "Pre-KG to UKG",
    description:
      "Activity-based learning that builds a strong educational foundation for young learners.",
  },
  {
    title: "Grade 1 – 5",
    description:
      "Strengthen Mathematics, Science, English and communication through interactive learning.",
  },
  {
    title: "Grade 6 – 8",
    description:
      "Develop analytical thinking, creativity and strong subject knowledge.",
  },
  {
    title: "Grade 9 – 10",
    description:
      "Focused coaching with regular assessments and board exam preparation.",
  },
  {
    title: "Grade 11 – 12",
    description:
      "Stream-specific guidance for higher education and competitive examinations.",
  },
];

const futureSkills = [
  {
    icon: <FiCode />,
    title: "Python Programming",
    description:
      "Learn Python from beginner to advanced with automation, projects and problem-solving.",
  },
  {
    icon: <FiBookOpen />,
    title: "Java Programming",
    description:
      "Master object-oriented programming and build strong software development fundamentals.",
  },
  {
    icon: <FiGlobe />,
    title: "Web Development",
    description:
      "Create responsive websites using HTML, CSS, JavaScript, React and modern web technologies.",
  },
  {
    icon: <FiCpu />,
    title: "Artificial Intelligence",
    description:
      "Explore AI, Machine Learning fundamentals and build intelligent applications.",
  },
 ,
  {
    icon: <FiPenTool />,
    title: "UI / UX Design",
    description:
      "Design beautiful digital experiences using Figma, wireframing and modern UI principles.",
  },
];

const Programs = () => {
  return (
    <section className={styles.section} id="programs">
      <div className={styles.container}>

        <div className={styles.heading}>
          <span className={styles.badge}>
            Programs We Offer
          </span>

          <h2>
            Learn Today.
            <span> Lead Tomorrow.</span>
          </h2>

          <p>
            We provide a perfect blend of academic excellence and future-ready
            technology education, helping every student succeed in school,
            college and beyond.
          </p>
        </div>

        {/* Banner Image */}

        <div className={styles.banner}>
          <img
            src={programImage}
            alt="Knowledge Nest Programs"
          />
        </div>

        <div className={styles.grid}>

          {/* Academic Programs */}

          <div className={styles.programCard}>

            <h3>Academic Programs</h3>

            {academicPrograms.map((program, index) => (

              <div
                className={styles.item}
                key={index}
              >

                <div>

                  <h4>{program.title}</h4>

                  <p>{program.description}</p>

                </div>

              </div>

            ))}

          </div>

          {/* Technology */}

          <div className={styles.programCard}>

            <h3>Technology & Future Skills</h3>

            {futureSkills.map((skill, index) => (

              <div
                className={styles.item}
                key={index}
              >

                <div className={styles.icon}>
                  {skill.icon}
                </div>

                <div>

                  <h4>{skill.title}</h4>

                  <p>{skill.description}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Programs;