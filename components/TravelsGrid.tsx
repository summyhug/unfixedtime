'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { WordPressPost } from '@/lib/wordpress';
import { getFeaturedImageUrl, wpTextToPlainText } from '@/lib/wordpress';
import styles from '@/app/blog/page.module.css';

type ApiResponse = {
  page: number;
  perPage: number;
  posts: WordPressPost[];
  hasMore: boolean;
};

export default function TravelsGrid({ initialPosts }: { initialPosts: WordPressPost[] }) {
  const [posts, setPosts] = useState<WordPressPost[]>(initialPosts);
  const [page, setPage] = useState(1);
  // If we got a full page (12 posts), there might be more. Otherwise, we've reached the end.
  const [hasMore, setHasMore] = useState(initialPosts.length >= 12);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [columns, setColumns] = useState(3);

  const listRef = useRef<HTMLDivElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // “4 rows” means: columns * 4 tiles per fetch.
  // We measure grid columns from CSS on the client and default to 12 (3 cols * 4 rows).
  const perPage = useMemo(() => {
    // Keep mobile lighter: 1 col => 4 items per batch.
    return Math.max(4, Math.min(24, columns * 4));
  }, [columns]);

  const loadingPlaceholders = useMemo(() => {
    // Show ~one row of skeleton tiles while fetching the next batch.
    return Math.max(2, Math.min(6, columns));
  }, [columns]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const update = () => {
      const cols = getComputedStyle(el).gridTemplateColumns.split(' ').filter(Boolean).length || 3;
      setColumns(cols);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  async function loadMore() {
    if (loading || !hasMore) return;
    setLoading(true);
    setError(null);
    try {
      const nextPage = page + 1;
      const res = await fetch(`/api/travels?page=${nextPage}&per_page=${perPage}`, { cache: 'no-store' });
      if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
      const data = (await res.json()) as ApiResponse;

      setPosts((prev) => {
        const existing = new Set(prev.map((p) => p.id));
        const merged = [...prev, ...data.posts.filter((p) => !existing.has(p.id))];
        return merged;
      });
      setPage(nextPage);
      setHasMore(Boolean(data.hasMore));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load more posts');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first?.isIntersecting) loadMore();
      },
      { rootMargin: '600px 0px' } // start loading before you hit the bottom
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentinelRef.current, hasMore, loading, page, perPage]);

  return (
    <>
      <div ref={listRef} className={styles.list}>
        {posts.map((post) => {
          const featuredImage = getFeaturedImageUrl(post);
          const titleText = wpTextToPlainText(post.title.rendered);
          return (
            <article key={post.id} className={styles.item}>
              <Link href={`/blog/${post.slug}`} className={styles.itemLink}>
                <div className={styles.media}>
                  {featuredImage ? (
                    <Image
                      src={featuredImage}
                      alt={titleText}
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />
                  ) : (
                    <div className={styles.imageFallback} aria-hidden="true" />
                  )}
                  <div className={styles.overlay} aria-hidden="true" />
                  <div className={styles.meta}>
                    <h2 className={styles.postTitle}>{titleText}</h2>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}

        {loading &&
          Array.from({ length: loadingPlaceholders }).map((_, idx) => (
            <div key={`skeleton-${page}-${idx}`} className={styles.skeletonItem} aria-hidden="true">
              <div className={styles.skeletonMedia}>
                <div className={styles.skeletonShimmer} />
              </div>
            </div>
          ))}
      </div>

      <div ref={sentinelRef} style={{ height: 1 }} />

      <div className={styles.loadMoreWrap}>
        {error && <p className={styles.loadMoreError}>{error}</p>}
        {hasMore ? (
          <button className="btn btn-secondary" onClick={loadMore} disabled={loading}>
            {loading ? (
              <span className={styles.loadingInline}>
                <span className={styles.loadingIcon} aria-hidden="true">
                  <span className={styles.spinner} />
                </span>
                Loading…
              </span>
            ) : (
              'Load more'
            )}
          </button>
        ) : (
          <p className={styles.loadMoreEnd}>You’ve reached the end.</p>
        )}
      </div>
    </>
  );
}


