import { useState } from "react";
import emailjs from "@emailjs/browser";

import styles from "./Contact.module.css";

import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

const Contact = () => {

  /* ==========================
      EMAILJS CONFIG
  ========================== */

  const SERVICE_ID = "service_hbxv0af";
  const TEMPLATE_ID = "template_x45dwwm";
  const PUBLIC_KEY = "BHaAN1gw0bNDfE6E4";

  /* ==========================
      STATES
  ========================== */

  const [formData, setFormData] = useState({
    from_name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  /* ==========================
      HANDLE INPUT
  ========================== */

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  /* ==========================
      VALIDATION
  ========================== */

  const validateForm = () => {

    if (!formData.from_name.trim()) {
      alert("Please enter your full name.");
      return false;
    }

    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }

    const emailRegex =
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!formData.message.trim()) {
      alert("Please enter your message.");
      return false;
    }

    return true;

  };

  /* ==========================
      SUBMIT
  ========================== */

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

        try {

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formData,
        PUBLIC_KEY
      );

      alert("Request sent successfully!");

      setFormData({
        from_name: "",
        phone: "",
        email: "",
        message: "",
      });

    } catch (error) {

      console.error(error);

      alert("Something went wrong. Please try again.");

    } finally {

      setLoading(false);

    }

  };

    return (
    <section className={styles.section} id="contact">

      <div className={styles.container}>

        <div className={styles.heading}>

          <span className={styles.badge}>
            Contact Us
          </span>

          <h2>
            We'd Love To
            <span> Hear From You</span>
          </h2>

          <p>
            Have questions or want to enroll your child?
            Get in touch with us and we'll be happy to help.
          </p>

        </div>

        {/* Contact + Map */}

        <div className={styles.topGrid}>

          <div className={styles.infoCard}>

            <div className={styles.info}>

              <div className={styles.icon}>
                <FiPhone />
              </div>

              <div className={styles.infoContent}>
                <h4>Phone</h4>
                <p>+91 9715609441</p>
              </div>

            </div>

            <div className={styles.info}>

              <div className={styles.icon}>
                <FiMail />
              </div>

              <div className={styles.infoContent}>
                <h4>Email</h4>
                <p>knowledgenestacademy@gmail.com</p>
              </div>

            </div>

            <div className={styles.info}>

              <div className={styles.icon}>
                <FiMapPin />
              </div>

              <div className={styles.infoContent}>
                <h4>Location</h4>

                <p>
                  EB Colony,
                  Dindigul,
                  Tamil Nadu,
                  India
                </p>

              </div>

            </div>

          </div>

          <div className={styles.map}>

            <iframe
              title="Knowledge Nest Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1030.4776892371508!2d77.97629605797337!3d10.38544280198023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00aa7dd53e8fc9%3A0xfe626789c1678214!2sEB%20Colony%2C%20Tamil%20Nadu%20624004!5e0!3m2!1sen!2sin!4v1784888038018!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />

          </div>

        </div>

        <div className={styles.formCard}>

          <h3>Request For Tuition Seat</h3>

          <p>
            Fill out the form below and our team
            will contact you shortly.
          </p>

          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="from_name"
              placeholder="Full Name"
              value={formData.from_name}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={loading}
            >

              <FiSend />

              {loading
                ? "Sending..."
                : "Request A Seat"}

            </button>

          </form>

        </div>

      </div>

    </section>
  );

};

export default Contact;