import Image from 'next/image';
import styles from './PodcastSection.module.css';

export default function PodcastSection() {
  return (
    <section className={styles.section} id="podcast">
      <div className={styles.grid}>
        <div className={styles.left}>
          <div className={styles.leftContent}>
            <p className={styles.listenLabel}>The Freetown Reality</p>
            <h2 className={styles.heading}>
              The Gap Between <br/><span className={styles.highlight}>Circumstance and Potential</span>
            </h2>
            <p>
              In the heart of Freetown, in communities like Kroo Bay and Susan&apos;s Bay, brilliance is often buried under the weight of extreme poverty. Here, 12% of our children have lost their parents, and 82% of households face daily food insecurity.
            </p>
            <p>
              For these children, school is a luxury they cannot afford, and a future is a dream they cannot see. But we believe that a child’s background should never determine their trajectory. <strong>We are here to bridge the gap between their circumstances and their potential.</strong>
            </p>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.imgWrap}>
            <img
              src="/images/Freetown.jpg"
              alt="The Freetown Reality"
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
