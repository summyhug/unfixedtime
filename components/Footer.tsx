import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link className={styles.logoLink} href="/" aria-label="Unfixedtime home">
          <Image
            src="/projects/logo.svg"
            alt="Unfixedtime"
            width={220}
            height={56}
            className={styles.footerLogo}
            priority
          />
        </Link>
        <nav className={styles.links} aria-label="Legal">
          <Link className={styles.link} href="/imprint">Imprint</Link>
          <Link className={styles.link} href="/terms">Terms</Link>
          <Link className={styles.link} href="/privacy">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}


