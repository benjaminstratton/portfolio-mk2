import styles from "@styles/Hero.module.css";

const Hero = () => {
  return <div className={styles.hero}>
    <h1 className={styles.companyName}>Stratton<br/>Soultions</h1>
    <h3 className={styles.jobTitle}>Benjamin Stratton | Freelance Web Developer</h3>
  </div>;
};

export default Hero;
