'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const navItems = [
  {
    label: 'Get Involved',
    href: '#',
    children: [
      { label: 'Take the KQ', href: '/kq/' },
      { label: 'Become a Kindmaker', href: '/donate/' },
      { label: 'Build Kinder Classrooms', href: '/learnkind/' },
      { label: 'Become a Corporate Partner', href: '/work-kind/' },
    ],
  },
  {
    label: 'Our Research',
    href: '/our-work/',
    children: [
      { label: 'Kindlab', href: '/kindlab/' },
      { label: 'Published Papers', href: '/kindlab/#papers' },
    ],
  },
  {
    label: 'Resources',
    href: '#',
    children: [
      { label: 'Why Kindness? Podcast', href: '/why-kindness/' },
      { label: 'Kindness Tools', href: '/get-started/#tools-for-action' },
      { label: 'The Choose Kindness Project', href: 'https://thechoosekindnessproject.org/' },
    ],
  },
  {
    label: 'About Us',
    href: '#',
    children: [
      { label: 'Our Mission', href: '/about-us/' },
      { label: 'Our Impact', href: '/about-us/#impact' },
      { label: 'Our Partners', href: '/about-us/#contact-section' },
    ],
  },
];

const KindnessLogo = () => (
  <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.1222 0H8.0353C3.90128 0 0.554688 3.23541 0.554688 7.23209V49.4933H7.64159C11.7756 49.4933 15.1222 46.2579 15.1222 42.2612V0Z" fill="#263345"/>
    <path d="M39.1394 49.4938H29.3512C26.4421 49.4938 23.7954 47.855 22.5705 45.3068L15.9102 31.4136H25.1297C28.3888 31.4136 31.3526 33.2427 32.7306 36.1081L39.1504 49.4938H39.1394Z" fill="#01E8F1"/>
    <path d="M39.1394 11.6943H29.3512C26.4421 11.6943 23.7954 13.3332 22.5705 15.8813L15.9102 29.7746H25.1297C28.3888 29.7746 31.3526 27.9454 32.7306 25.08L39.1504 11.6943H39.1394Z" fill="#FF1486"/>
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"/>
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 25 25" width="22" height="22" fill="currentColor">
    <path d="M9 0C4.03579 0 0 4.03579 0 9C0 13.9642 4.03579 18 9 18C13.9642 18 18 13.9642 18 9C18 4.03579 13.9642 0 9 0ZM9 4.32C10.5347 4.32 11.7664 5.57056 11.7664 7.08638C11.7664 8.62109 10.5158 9.85277 9 9.85277C7.4653 9.85277 6.23362 8.60221 6.23362 7.08638C6.23362 5.57056 7.46526 4.32 9 4.32ZM9 10.7242C11.1221 10.7242 12.96 12.2021 13.7937 14.4189C12.5242 15.5559 10.8379 16.238 9 16.238C7.16207 16.238 5.49474 15.5369 4.20632 14.4189C5.05891 12.2021 6.87793 10.7242 9 10.7242Z"/>
  </svg>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className={styles.headerWrapper}>
      {/* Announcement bar */}
      <div className={styles.announcementBar}>
        <div className={styles.announcementInner}>
          <p>Become a Kindmaker today. <a href="/donate" className={styles.announcementLink}>START NOW &rarr;</a></p>
        </div>
      </div>

      {/* Main header */}
      <div className={styles.mainHeader}>
        <div className={styles.headerInner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Kindness home">
            <KindnessLogo />
          </Link>

          {/* Desktop nav */}
          <nav className={styles.desktopNav} aria-label="Header navigation">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                  {item.children && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12" fill="none" className={styles.chevron}>
                      <path d="M1.5 4L6 8L10.5 4" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  )}
                </a>
                {item.children && openDropdown === item.label && (
                  <ul className={styles.dropdown}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href} className={styles.dropdownLink}>{child.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className={styles.headerActions}>
            <button className={styles.iconBtn} aria-label="Search">
              <SearchIcon />
            </button>
            <a href="/my-account/" className={styles.iconBtn} aria-label="Login">
              <UserIcon />
            </a>
            <a href="/donate/" className="btn btn-sm">Donate</a>

            {/* Hamburger */}
            <button
              className={styles.hamburger}
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className={styles.mobileOverlay}>
          <div className={styles.mobileHeader}>
            <Link href="/" className={styles.logo} onClick={() => setMobileMenuOpen(false)}>
              <KindnessLogo />
            </Link>
            <button
              className={styles.closeBtn}
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="m13.06 12 6.47-6.47-1.06-1.06L12 10.94 5.53 4.47 4.47 5.53 10.94 12l-6.47 6.47 1.06 1.06L12 13.06l6.47 6.47 1.06-1.06L13.06 12Z"/>
              </svg>
            </button>
          </div>
          <nav className={styles.mobileNav}>
            {navItems.map((item) => (
              <div key={item.label} className={styles.mobileNavGroup}>
                <a href={item.href} className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </a>
                {item.children && (
                  <ul className={styles.mobileSubMenu}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href} className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className={styles.mobileCtas}>
              <a href="/donate/" className="btn" onClick={() => setMobileMenuOpen(false)}>Donate</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
