import styles from '../legal.module.css';

export const metadata = {
  title: 'Imprint | Unfixedtime',
};

export default function ImprintPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Imprint (Impressum)</h1>

        <section className={styles.section}>
          <h2>Company</h2>
          <p>
            <strong>Unfixedtime UG</strong>
          </p>
          <p>District Court of Charlottenburg (Berlin)</p>
          <p>HRB 275754 B</p>
        </section>

        <section className={styles.section}>
          <h2>Contact</h2>
          <p>
            Email: <em>[add contact email]</em>
          </p>
          <p>
            Address: <em>[add registered address]</em>
          </p>
        </section>

        <section className={styles.section}>
          <h2>Responsible for content</h2>
          <p>
            <strong>Sumit Mehta</strong> (CEO)
          </p>
        </section>

        <section className={styles.section}>
          <h2>Disclaimer</h2>
          <p>
            The information on this website is provided for general informational purposes only. We make no
            representations or warranties of any kind, express or implied, about the completeness, accuracy,
            reliability, suitability or availability of the website or the information contained on the website.
          </p>
        </section>
      </div>
    </div>
  );
}


