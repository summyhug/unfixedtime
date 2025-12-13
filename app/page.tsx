import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

export default function Home() {
  const projects = getAllProjects().filter((p) => p.featured);

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>Product Studio • Product & AI</div>
            <h1 className={styles.heroTitle}>
              We build the future with
              <span className={styles.highlight}> AI & Sustainability</span>
            </h1>
            <p className={styles.heroSubtitle}>
              We build and scale products that use AI responsibly - designed for real human needs and
              long-term impact on a thriving planet.
            </p>
            <div className={styles.heroActions}>
              <Link href="/projects" className={styles.primaryButton}>
                View Our Work
              </Link>
              <Link href="/about" className={styles.secondaryButton}>
                About Us
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.floatingCard}>
              <div className={styles.cardIcon}>🚀</div>
              <div className={styles.cardText}>AI Products</div>
            </div>
            <div className={styles.floatingCard}>
              <div className={styles.cardIcon}>🌱</div>
              <div className={styles.cardText}>Sustainability</div>
            </div>
            <div className={styles.floatingCard}>
              <div className={styles.cardIcon}>✨</div>
              <div className={styles.cardText}>Innovation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className={styles.expertise}>
        <div className={styles.container}>
          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>🎯</div>
              <h3>Product Strategy</h3>
              <p>We shape product vision from concept to market - grounded in user outcomes, clarity, and sustainable growth.</p>
            </div>
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>🤖</div>
              <h3>AI & Machine Learning</h3>
              <p>We ship AI-powered experiences that solve real problems - reliable, measurable, and built for trust.</p>
            </div>
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>🌍</div>
              <h3>Sustainable Innovation</h3>
              <p>We balance technological progress with environmental responsibility and meaningful social impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Featured Work</div>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <p className={styles.sectionDescription}>
              Products and initiatives we’re building at the intersection of AI and sustainability
            </p>
          </div>
          
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className={styles.cta}>
            <Link href="/projects" className={styles.viewAllButton}>
              Explore All Projects
              <span className={styles.arrow}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className={styles.quickLinksSection}>
        <div className={styles.container}>
          <h2 className={styles.quickLinksTitle}>Explore More</h2>
          <div className={styles.quickLinks}>
            <Link href="/about" className={styles.quickLink}>
              <div className={styles.quickLinkIcon}>👤</div>
              <div className={styles.quickLinkContent}>
                <h3>About Us</h3>
                <p>Our story, values, and how we build products</p>
              </div>
              <div className={styles.quickLinkArrow}>→</div>
            </Link>
            <Link href="/blog" className={styles.quickLink}>
              <div className={styles.quickLinkIcon}>✈️</div>
              <div className={styles.quickLinkContent}>
                <h3>Travels</h3>
                <p>Stories and insights from around the world</p>
              </div>
              <div className={styles.quickLinkArrow}>→</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

