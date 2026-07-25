import styles from "./Footer.module.css";

import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        <div className={styles.grid}>

          {/* Brand */}

          <div>

            <h2>Knowledge Nest</h2>

            <p>
              Dindigul's Premier Learning Academy helping
              students from Pre-KG to Grade 12 achieve
              academic excellence while mastering
              future-ready skills.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3>Quick Links</h3>

            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#aboutus">Why Choose</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#results">Results</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

          </div>

          {/* Courses */}

          <div>

            <h3>Courses</h3>

            <ul>
              <li>Pre-KG to Grade 12</li>
              <li>Python</li>
              <li>Java</li>
              <li>Web Development</li>
              <li>Artificial Intelligence</li>
            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3>Contact</h3>

            <div className={styles.contactItem}>
              <FiPhone />
              <span>+91 XXXXXXXXXX</span>
            </div>

            <div className={styles.contactItem}>
              <FiMail />
              <span>knowledgenestacademy@gmail.com</span>
            </div>

            <div className={styles.contactItem}>
              <FiMapPin />
              <span>Dindigul, Tamil Nadu</span>
            </div>

            <div className={styles.socials}>

              <a href="#">
                <FiInstagram />
              </a>

              <a href="#">
                <FiFacebook />
              </a>

              <a href="#">
                <FiLinkedin />
              </a>

            </div>

          </div>

        </div>

        <div className={styles.bottom}>

          <p>
            © 2026 Knowledge Nest. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className={styles.topBtn}
          >
            <FiArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;