import Image from 'next/image';
import styles from './KQSection.module.css';

export default function KQSection() {
  return (
    <section className={styles.section} id="kq">
      <div className="container">
        <div className={styles.border}>
          <h2 className={styles.heading}>
            What&apos;s Your KQ<span className={styles.q}>?</span>
          </h2>
          <h3 className={styles.sub}>
            <span className={styles.brace}>&#123;</span> It&apos;s like an IQ, but Kinder. <span className={styles.brace}>&#125;</span>
          </h3>
          <p className={styles.body}>
            Take our three-minute science-based questionnaire to discover your Kindness Quotient (KQ), how your participation
            can help our science, and how it can help you.
          </p>
          <div className={styles.cta}>
            <a href="/kq/" className="btn btn-dark">Learn More &rarr;</a>
          </div>
          <div className={styles.mosaic}>
            <img
              src="https://picsum.photos/seed/science/1800/400"
              alt="What's your KQ image mosaic"
              className={styles.mosaicImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
