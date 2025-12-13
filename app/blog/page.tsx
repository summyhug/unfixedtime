import { getBlogPosts } from '@/lib/wordpress';
import TravelsGrid from '@/components/TravelsGrid';
import styles from './page.module.css';

export default async function Blog({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  // Initial load: “4 rows” on desktop ~= 12 tiles. More is loaded as you scroll.
  const posts = await getBlogPosts(12, 1);

  return (
    <div className={styles.travels}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <p className={styles.headerBlurb}>
              Unfixedtime started as a photo blog - a way to share Sumit’s travels with friends and family back home.
              Along the way, those journeys sparked a deeper focus on sustainability, and Unfixedtime evolved into a
              product studio where we build at the intersection of product, AI, and long-term impact.
            </p>
          </div>
        </div>
      </header>
      <section className={styles.section}>
        <div className={styles.container}>
          {posts.length > 0 ? (
            <TravelsGrid initialPosts={posts} />
          ) : (
            <div className={styles.empty}>
              <p>No travel stories available at the moment.</p>
              <p>Check back soon for updates.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}


