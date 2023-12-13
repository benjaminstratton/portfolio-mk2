import styles from "@styles/About.module.css";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h1 className={styles.heading}>About<br />Me</h1>
        </div>
        <div className={styles.text}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className={styles.linkContainer}>
                <Link className={styles.link} href="#">Resume</Link>
            </div>
        </div>
    </div>
  )
}

export default About;