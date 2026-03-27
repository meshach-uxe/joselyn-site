'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const navItems: Array<{ label: string; href: string; children?: Array<{ label: string; href: string }> }> = [];

const KindnessLogo = () => (
  <img 
    src="/Logo/Full%20Logo/Orange.png" 
    alt="Joselyn Logo" 
    style={{ height: '40px', width: 'auto' }} 
  />
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
      {/* Main header */}
      <div className={styles.mainHeader}>
        <div className={styles.headerInner}>
          {/* Logo */}
          <Link href="#" className={styles.logo} aria-label="Kindness home">
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
            <a href="#" className={styles.iconBtn} aria-label="Login">
              <UserIcon />
            </a>
            <a href="#" className="btn btn-sm">Donate</a>

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
            <Link href="#" className={styles.logo} onClick={() => setMobileMenuOpen(false)}>
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
              <a href="#" className="btn" onClick={() => setMobileMenuOpen(false)}>Donate</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
