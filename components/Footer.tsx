import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {currentYear} Unfixed Time. Built with sustainability in mind.
        </p>
        <p className={styles.subtext}>
          Powered by WordPress & Next.js
        </p>
      </div>
    </footer>
  );
}


