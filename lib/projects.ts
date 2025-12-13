import { Project } from './wordpress';

// Static project data - you can expand this or move to WordPress custom post types
export const projects: Project[] = [
  {
    id: 'velyar',
    title: 'Velyar',
    description: 'A sustainable platform focused on mindful living and environmental consciousness.',
    thumbnail: '/projects/velyar.png',
    link: 'https://velyar.com', // Update with actual link
    tags: ['Sustainability', 'Platform', 'Design'],
  },
  {
    id: 'archium',
    title: 'Archium',
    description: 'An architectural design project exploring harmony between built and natural environments.',
    thumbnail: '/projects/archium.png',
    link: 'https://archium.com', // Update with actual link
    tags: ['Architecture', 'Design', 'Sustainability'],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getAllProjects(): Project[] {
  return projects;
}


