import Image from 'next/image';
import styles from './KindlabSection.module.css';

export default function KindlabSection() {
  return (
    <section className={styles.section} id="impact-story">
      <div className="container">
        <div className={styles.inner}>
          {/* Left: text */}
          <div className={styles.left}>
            <div className={styles.textBlock}>
              <h2 className={styles.heading}>From the Shadows to the Spotlight</h2>
              <p>
                Meet Aminata. A year ago, Aminata was one of the &apos;hidden children&apos; of Kroo Bay. After losing her mother to illness, she dropped out of school to help her aunt sell vegetables in the market. Her dream of being a nurse felt like a fantasy. 
              </p>
              <p>
                Today, through the Joslyn Divine Foundation, Aminata is back in the classroom. She has a mentor, a safe home, and a stomach full of nutritious food. 
              </p>
              <p>
                <strong>Aminata isn&apos;t just a student anymore; she is the president of her school&apos;s Climate Club. She isn&apos;t waiting for the future; she is building it.</strong>
              </p>
              <a href="#" className="btn btn-dark">Read More Stories &rarr;</a>
            </div>
          </div>

          {/* Right: image */}
          <div className={styles.right}>
            <div className={styles.imgBlock}>
              <img
                src="https://picsum.photos/seed/smilinggirl/600/800"
                alt="Portrait of Aminata"
                className={styles.portrait}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
