import { getAllProjects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

export default function Projects() {
  const projects = getAllProjects();

  return (
    <div className={styles.projects}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.subtitle}>
            Sustainable initiatives and design projects we’re building
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


