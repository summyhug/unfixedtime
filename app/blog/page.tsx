import Link from 'next/link';
import { getBlogPosts, getFeaturedImageUrl } from '@/lib/wordpress';
import Image from 'next/image';
import styles from './page.module.css';

export default async function Blog() {
  const posts = await getBlogPosts(20);

  return (
    <div className={styles.blog}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Travel Blog</h1>
          <p className={styles.subtitle}>
            Stories and experiences from places we’ve been fortunate to visit
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          {posts.length > 0 ? (
            <div className={styles.postsGrid}>
              {posts.map((post) => {
                const featuredImage = getFeaturedImageUrl(post);
                const excerpt = post.excerpt.rendered
                  .replace(/<[^>]*>/g, '')
                  .substring(0, 150) + '...';

                return (
                  <article key={post.id} className={styles.postCard}>
                    <Link href={`/blog/${post.slug}`}>
                      {featuredImage && (
                        <div className={styles.imageContainer}>
                          <Image
                            src={featuredImage}
                            alt={post.title.rendered}
                            fill
                            className={styles.image}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      )}
                      <div className={styles.content}>
                        <h2 className={styles.postTitle}>{post.title.rendered}</h2>
                        <time className={styles.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        <p className={styles.excerpt}>{excerpt}</p>
                        <span className={styles.readMore}>Read more →</span>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className={styles.empty}>
              <p>No blog posts available at the moment.</p>
              <p>Check back soon for updates!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}


