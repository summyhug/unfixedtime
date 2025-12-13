import { getBlogPost, getBlogPosts, getFeaturedImageUrl } from '@/lib/wordpress';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

export async function generateStaticParams() {
  const posts = await getBlogPosts(50);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const featuredImage = getFeaturedImageUrl(post);

  return (
    <article className={styles.post}>
      <div className={styles.container}>
        <Link href="/blog" className={styles.backLink}>
          ← Back to Travels
        </Link>

        <header className={styles.header}>
          <h1 className={styles.title}>{post.title.rendered}</h1>
          <time className={styles.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </header>

        {featuredImage && (
          <div className={styles.featuredImage}>
            <Image
              src={featuredImage}
              alt={post.title.rendered}
              width={1200}
              height={600}
              className={styles.image}
              priority
            />
          </div>
        )}

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    </article>
  );
}


