import { useState } from "react";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiArrowRight,
} from "react-icons/hi";

import styles from "./Navbar.module.css";
import logo from "../../assets/logo/logo.png";

const navLinks = [
  { name: "Home", link: "#home" },
  { name: "about", link: "#aboutus" },
  { name: "Programs", link: "#programs" },
  { name: "Results", link: "#results" },
  { name: "Contact", link: "#contact" },
];

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.container}>

          {/* Logo */}
          <a href="#home" className={styles.logo}>
            <img
              src={logo}
              alt="Knowledge Nest"
              className={styles.logoImage}
            />

            <div className={styles.logoContent}>
              <h2>Knowledge Nest</h2>
              <p>Learn • Grow • Achieve</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            {navLinks.map((item) => (
              <a key={item.name} href={item.link}>
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className={styles.rightSection}>

            <a href="#contact" className={styles.demoBtn}>
              Schedule Demo
              <HiArrowRight />
            </a>

            <button
              className={styles.mobileBtn}
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          mobileMenu ? styles.showMenu : ""
        }`}
      >
        {navLinks.map((item) => (
          <a
            key={item.name}
            href={item.link}
            onClick={() => setMobileMenu(false)}
          >
            {item.name}
          </a>
        ))}

        <a
          href="#contact"
          className={styles.mobileDemo}
          onClick={() => setMobileMenu(false)}
        >
          Schedule Free Demo
        </a>
      </div>
    </>
  );
}

export default Navbar;