import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>About Us</h1>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h2>We build products with purpose</h2>
              <p>
                Unfixedtime is our product studio - a space where we build, learn, and share.
                We work at the intersection of product strategy, AI, and sustainability, with a belief
                that good products should improve lives and respect the planet.
              </p>
              <p>
                The travel journal began during Sumit's time in Germany and grew into a broader story:
                how we explore the world, how we think about impact, and how we choose what to build.
                With a passion for sustainable travel and interest understanding how the world works,
                Unfixedtime became a home for AI created projects in the sustainability space.
              </p>
              <p>
                Through projects like Velyar and Archium, we’re exploring how to build a more sustainable future
                while maintaining harmony with our natural environment. Sustainability spreads across both 
                environmental and social sustainability, along with products that can nudge us towards a more 
                sustainable future. Each project is an opportunity to learn, iterate, and contribute to a better world.
              </p>

              <h3>Leadership</h3>
              <div className={styles.leaderCard}>
                <div className={styles.leaderHeader}>
                  <div className={styles.leaderName}>Sumit Hug</div>
                  <div className={styles.leaderTitle}>CEO</div>
                </div>
                <p className={styles.leaderBlurb}>
                  Sumit leads Unfixedtime as CEO. He’s a product leader with deep experience building and scaling
                  AI-powered products - bringing together strategy, design, and execution to ship work that stands out.
                </p>
              </div>

              <h3>Values & Philosophy</h3>
              <ul className={styles.valuesList}>
                <li>
                  <strong>Sustainability:</strong> Making mindful choices that respect our planet 
                  and future generations
                </li>
                <li>
                  <strong>Harmony:</strong> Finding balance between innovation and tradition, 
                  digital and natural, built and organic
                </li>
                <li>
                  <strong>Authenticity:</strong> Sharing genuine stories and real experiences, 
                  not curated perfection
                </li>
                <li>
                  <strong>Thoughtfulness:</strong> Approaching design and life with intention 
                  and careful consideration
                </li>
              </ul>
              <p>
                Thanks for visiting - welcome to what we’re building.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


