import Link from 'next/link';
import { getBlogPosts, getFeaturedImageUrl } from '@/lib/wordpress';
import Image from 'next/image';
import styles from './page.module.css';

export default async function Blog() {
  const posts = await getBlogPosts(20);

  return (
    <div className={styles.travels}>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Travels</h1>
          <p className={styles.subtitle}>Stories and images from places we’ve been fortunate to visit.</p>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.container}>
          {posts.length > 0 ? (
            <div className={styles.list}>
              {posts.map((post) => {
                const featuredImage = getFeaturedImageUrl(post);
                const date = new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                });

                return (
                  <article key={post.id} className={styles.item}>
                    <Link href={`/blog/${post.slug}`} className={styles.itemLink}>
                      <div className={styles.media}>
                        {featuredImage ? (
                          <Image
                            src={featuredImage}
                            alt={post.title.rendered}
                            fill
                            className={styles.image}
                            sizes="(max-width: 768px) 100vw, 1100px"
                            priority={false}
                          />
                        ) : (
                          <div className={styles.imageFallback} aria-hidden="true" />
                        )}
                        <div className={styles.overlay} aria-hidden="true" />
                        <div className={styles.meta}>
                          <div className={styles.metaTop}>
                            <span className={styles.kicker}>Travels</span>
                            <time className={styles.date}>{date}</time>
                          </div>
                          <h2 className={styles.postTitle}>{post.title.rendered}</h2>
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
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


