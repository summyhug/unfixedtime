'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import styles from './CookieConsent.module.css';

const CONSENT_KEY = 'cookie-consent';
const GA_ID = 'G-XQV3GCT24H';

type ConsentStatus = 'pending' | 'accepted' | 'declined';

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentStatus | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentStatus | null;
    if (stored === 'accepted' || stored === 'declined') {
      setConsent(stored);
      if (stored === 'accepted' && typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted',
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
        });
      }
    } else {
      setConsent('pending');
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setConsent('accepted');
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      });
    }
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setConsent('declined');
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
    }
  };

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
          gtag('config', '${GA_ID}', {
            anonymize_ip: true
          });
        `}
      </Script>

      {consent === 'pending' && (
        <div className={styles.banner} role="dialog" aria-label="Cookie consent">
          <div className={styles.content}>
            <p className={styles.text}>
              We use cookies to understand how you use our site and to improve your experience.{' '}
              <Link href="/privacy" className={styles.link}>
                Learn more
              </Link>
            </p>
            <div className={styles.actions}>
              <button
                type="button"
                onClick={decline}
                className={styles.declineBtn}
                aria-label="Decline cookies"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={accept}
                className={styles.acceptBtn}
                aria-label="Accept cookies"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
