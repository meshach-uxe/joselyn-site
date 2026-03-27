import Image from 'next/image';
import styles from './NasdaqSection.module.css';

export default function NasdaqSection() {
  return (
    <section className={styles.section} id="nasdaq">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.videoCol}>
            <div className={styles.iframeWrap}>
              <iframe
                title="Kindness at NASDAQ – VideoPress"
                src="https://video.wordpress.com/embed/lhgUEB2C"
                frameBorder="0"
                allowFullScreen
                allow="clipboard-write"
                className={styles.iframe}
              />
            </div>
          </div>

          <div className={styles.textCol}>
            <h2 className={styles.heading}>Bringing Kindness Public</h2>
            <p>
              To mark World Kindness Week 2025, we rang the NASDAQ closing bell – sending a clear message
              that kindness belongs at the center of our markets, our institutions, and our shared future.
              Because when kindness is valued publicly, it becomes expected everywhere.
            </p>
            <div className={styles.bannerWrap}>
              <img
                src="https://picsum.photos/seed/nasdaq/1024/200"
                alt="NASDAQ Banner"
                className={styles.banner}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
