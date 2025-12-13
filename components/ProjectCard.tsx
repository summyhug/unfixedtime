'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/wordpress';
import { useState } from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={styles.card}>
      <Link href={project.link || `/projects/${project.id}`}>
        <div className={styles.imageContainer}>
          {!imageError ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.placeholderText}>{project.title}</span>
            </div>
          )}
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          {project.tags && project.tags.length > 0 && (
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

