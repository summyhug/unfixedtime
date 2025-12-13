import { getPhotos } from '@/lib/wordpress';
import Image from 'next/image';
import styles from './page.module.css';

export default async function Photos() {
  const photos = await getPhotos(30);

  return (
    <div className={styles.photos}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Photos</h1>
          <p className={styles.subtitle}>
            A collection of moments captured from our travels and experiences
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          {photos.length > 0 ? (
            <div className={styles.photosGrid}>
              {photos.map((photo) => (
                <div key={photo.id} className={styles.photoItem}>
                  <Image
                    src={photo.media_details?.sizes?.large?.source_url || photo.source_url}
                    alt={photo.alt_text || 'Photo'}
                    width={photo.media_details?.width || 800}
                    height={photo.media_details?.height || 600}
                    className={styles.photo}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <p>No photos available at the moment.</p>
              <p>Check back soon for updates!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}


