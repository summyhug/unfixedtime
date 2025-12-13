import styles from '../legal.module.css';

export const metadata = {
  title: 'Privacy Policy | Unfixedtime',
};

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: <em>[add date]</em></p>

        <section className={styles.section}>
          <h2>1. Controller</h2>
          <p>
            Controller: <strong>Unfixedtime UG</strong>, District Court of Charlottenburg (Berlin), HRB 275754 B.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. What data we process</h2>
          <p>
            When you visit this website, our hosting provider may process technical data such as IP address, device
            information, browser type, and timestamps to operate and secure the service.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. WordPress as content backend</h2>
          <p>
            Blog posts and media displayed on this website are fetched from WordPress via public APIs. Requests may be
            made to WordPress/WordPress.com endpoints to retrieve publicly available content.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Cookies</h2>
          <p>
            We do not intentionally set tracking cookies. However, third-party services (including WordPress) may set
            cookies depending on how content is delivered. You can control cookies in your browser settings.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Your rights</h2>
          <p>
            Depending on your location, you may have rights to access, rectify, delete, or restrict processing of your
            personal data, and to lodge a complaint with a supervisory authority.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Contact</h2>
          <p>
            For privacy-related requests, contact: <em>[add privacy contact email]</em>
          </p>
        </section>
      </div>
    </div>
  );
}


