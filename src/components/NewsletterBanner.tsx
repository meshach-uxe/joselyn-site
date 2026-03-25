'use client';
import styles from './NewsletterBanner.module.css';

export default function NewsletterBanner() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <h4 className={styles.heading}>Signup for our Newsletter</h4>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.input}
              required
              aria-label="Email address"
            />
            <button type="submit" className={`btn ${styles.submitBtn}`}>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
