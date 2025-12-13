import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {currentYear} Unfixedtime UG. Built with sustainability in mind.
        </p>
        <p className={styles.text}>
          District Court of Charlottenburg (Berlin) • HRB 275754 B
        </p>
        <nav className={styles.links} aria-label="Legal">
          <Link className={styles.link} href="/imprint">Imprint</Link>
          <Link className={styles.link} href="/terms">Terms</Link>
          <Link className={styles.link} href="/privacy">Privacy</Link>
        </nav>
        <p className={styles.subtext}>
          Powered by WordPress & Next.js
        </p>
      </div>
    </footer>
  );
}


