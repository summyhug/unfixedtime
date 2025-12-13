import styles from '../legal.module.css';

export const metadata = {
  title: 'Terms & Conditions | Unfixedtime',
};

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms & Conditions</h1>

        <p className={styles.updated}>Last updated: <em>[add date]</em></p>

        <section className={styles.section}>
          <h2>1. Operator</h2>
          <p>
            This website is operated by <strong>Unfixedtime UG</strong>, District Court of Charlottenburg (Berlin),
            HRB 275754 B.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Use of the website</h2>
          <p>
            By accessing or using this website, you agree to be bound by these Terms. If you do not agree, please do
            not use the website.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Intellectual property</h2>
          <p>
            Unless stated otherwise, all content on this website (including text, images, graphics, and code) is owned
            by or licensed to Unfixedtime UG and is protected by applicable intellectual property laws. Any reproduction
            or distribution requires prior written permission.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Links to third-party sites</h2>
          <p>
            This website may contain links to third-party websites. We do not control those sites and are not
            responsible for their content or practices.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, Unfixedtime UG shall not be liable for any direct, indirect,
            incidental, consequential, or special damages arising out of or in connection with your use of this website.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Changes</h2>
          <p>
            We may update these Terms from time to time. The updated version will be posted on this page.
          </p>
        </section>
      </div>
    </div>
  );
}


