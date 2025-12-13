'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/projects', label: 'Projects' },
    { href: '/photos', label: 'Photos' },
    { href: '/blog', label: 'Travel Blog' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/projects/logo.svg"
            alt="Unfixed Time"
            width={36}
            height={36}
            priority
            className={styles.logoImage}
          />
          <span className={styles.srOnly}>Unfixed Time</span>
        </Link>
        
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}>
            <span className={isMenuOpen ? styles.open : ''}></span>
            <span className={isMenuOpen ? styles.open : ''}></span>
            <span className={isMenuOpen ? styles.open : ''}></span>
          </span>
        </button>

        <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.navLink} ${
                  pathname === item.href ? styles.active : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}


