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
