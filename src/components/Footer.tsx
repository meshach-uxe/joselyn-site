'use client';
import Image from 'next/image';
import styles from './Footer.module.css';

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/kindnessorg', icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"/></svg>
  )},
  { label: 'Twitter/X', href: 'https://twitter.com/kindness_org', icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.23 5.924c-.736.326-1.527.547-2.357.646.847-.508 1.498-1.312 1.804-2.27-.793.47-1.671.812-2.606.996C18.324 4.498 17.257 4 16.077 4c-2.266 0-4.103 1.837-4.103 4.103 0 .322.036.635.106.935C8.67 8.867 5.647 7.234 3.623 4.751c-.353.606-.556 1.311-.556 2.063 0 1.424.724 2.679 1.825 3.415-.673-.021-1.305-.206-1.859-.513 0 .017 0 .034 0 .052 0 1.988 1.414 3.647 3.292 4.023-.344.094-.707.144-1.081.144-.264 0-.521-.026-.772-.074.522 1.63 2.038 2.816 3.833 2.85-1.404 1.1-3.174 1.756-5.096 1.756-.331 0-.658-.019-.979-.057 1.816 1.164 3.973 1.843 6.29 1.843 7.547 0 11.675-6.252 11.675-11.675 0-.178-.004-.355-.012-.531C20.985 7.47 21.68 6.747 22.23 5.924z"/></svg>
  )},
  { label: 'Instagram', href: 'https://www.instagram.com/kindnessorg/', icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.671.31.42.163.72.358 1.035.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.949.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.671-.163.42-.358.72-.673 1.035-.315.315-.615.51-1.035.673-.317.123-.794.27-1.671.31-.949.043-1.233.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.671-.31-.42-.163-.72-.358-1.035-.673-.315-.315-.51-.615-.673-1.035-.123-.317-.27-.794-.31-1.671C4.631 14.688 4.622 14.403 4.622 12s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.671.163-.42.358-.72.673-1.035.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31C9.312 4.631 9.597 4.622 12 4.622M12 3C9.556 3 9.249 3.01 8.289 3.054 7.331 3.098 6.677 3.25 6.105 3.472 5.513 3.702 5.011 4.01 4.511 4.511c-.5.5-.808 1.002-1.038 1.594C3.25 6.677 3.098 7.331 3.054 8.289 3.01 9.249 3 9.556 3 12c0 2.444.01 2.751.054 3.711.044.958.196 1.612.418 2.185.23.592.538 1.094 1.038 1.594.5.5 1.002.808 1.594 1.038.572.222 1.227.375 2.185.418C9.249 20.99 9.556 21 12 21s2.751-.01 3.711-.054c.958-.044 1.612-.196 2.185-.418.592-.23 1.094-.538 1.594-1.038.5-.5.808-1.002 1.038-1.594.222-.572.375-1.227.418-2.185C20.99 14.751 21 14.444 21 12s-.01-2.751-.054-3.711c-.044-.958-.196-1.612-.418-2.185-.23-.592-.538-1.094-1.038-1.594-.5-.5-1.002-.808-1.594-1.038-.572-.222-1.227-.375-2.185-.418C14.751 3.01 14.444 3 12 3zm0 4.378c-2.552 0-4.622 2.069-4.622 4.622S9.448 16.622 12 16.622s4.622-2.069 4.622-4.622S14.552 7.378 12 7.378zM12 15c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
  )},
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/kindnessorg/', icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4C3 20.418 3.582 21 4.3 21h15.4c.718 0 1.3-.582 1.3-1.3V4.3C21 3.582 20.418 3 19.7 3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574c-.857 0-1.549-.694-1.549-1.548 0-.855.691-1.548 1.549-1.548.854 0 1.547.694 1.547 1.548C8.551 7.881 7.858 8.574 7.004 8.574zm11.335 9.764h-2.669v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z"/></svg>
  )},
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand + social */}
            <div className={styles.brand}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Logo/Full%20Logo/White.png"
                alt="Joselyn Logo"
                style={{ height: '38px', width: 'auto' }}
                className={styles.logo}
              />
              <ul className={styles.social}>
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} className={styles.socialLink} aria-label={s.label} target="_blank" rel="noreferrer noopener">
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nav */}
            <nav className={styles.footerNav} aria-label="Footer navigation">
              <a href="/our-work/#contact-section" className={styles.navLink}>Contact Us</a>
              <a href="/privacy-policy/" className={styles.navLink}>Privacy Policy</a>
              <a href="/terms-conditions/" className={styles.navLink}>Terms and Conditions</a>
            </nav>

            {/* Book promo */}
            <div className={styles.bookPromo}>
              <p className={styles.bookLabel}>Discover Our CEO Jaclyn Lindsey&apos;s Latest Book!</p>
              <Image
                src="/be-kind-book.webp"
                alt="Be Kind book by Jaclyn Lindsey"
                width={180}
                height={200}
                className={styles.book}
              />
            </div>

            {/* Newsletter */}
            <div className={styles.newsletter}>
              <h3 className={styles.newsletterTitle}>Stay Informed</h3>
              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Email"
                  aria-label="Email address"
                  required
                  className={styles.input}
                />
                <button type="submit" className={`btn btn-sm ${styles.submitBtn}`}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.colophon}>
        <div className="container">
          <p>
            <a href="https://wordpress.com/" className={styles.colophonLink} target="_blank" rel="nofollow noopener noreferrer">
              Proudly powered by WordPress.
            </a>{' '}
            <a href="https://pressable.com/" className={styles.colophonLink} target="_blank" rel="nofollow noopener noreferrer">
              Hosted by Pressable.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
