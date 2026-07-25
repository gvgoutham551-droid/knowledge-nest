import styles from "./FloatingCard.module.css";

const FloatingCard = ({ title, subtitle, position }) => {
  return (
    <div className={`${styles.card} ${styles[position]}`}>
      <div className={styles.icon}>
        {title.charAt(0)}
      </div>

      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default FloatingCard;