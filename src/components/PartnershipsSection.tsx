import styles from './PartnershipsSection.module.css';
import Image from 'next/image';

const signals = [
  {
    name: 'Literacy Scores',
    desc: 'Transparent reporting on student reading and writing progress, tracked rigorously to ensure our educational interventions are working.'
  },
  {
    name: 'Health Metrics',
    desc: 'Monthly updates on the nutritional and medical well-being of the children in our care, proving the efficacy of our Brain Fuel program.'
  },
  {
    name: 'Success Stories',
    desc: 'Real, unmodified stories from the youth we mentor, charting their growth from vulnerability to leadership.'
  }
];

export default function PartnershipsSection() {
  return (
    <section className={styles.section} id="trust-signals">
      <div className="container">
        <div className={styles.inner}>
          {/* Left: text */}
          <div className={styles.left}>
            <div className={styles.sticky}>
              <div className={styles.textBlock}>
                <h2 className={styles.heading}>Trust Earned Through Data</h2>
                <h3 className={styles.sub}>
                  We know that trust is earned through data and radical transparency.
                </h3>
                <p>
                  100% of your donation goes directly to our programs in Freetown. We provide monthly impact reports, so you can see the literacy scores, health metrics, and success stories your generosity makes possible.
                </p>
                <a href="#" className="btn btn-dark">View Impact Reports &rarr;</a>
              </div>
            </div>
          </div>

          {/* Right: signal list */}
          <div className={styles.right}>
            {signals.map((s) => (
              <div key={s.name} className={styles.partner}>
                <h4 className={styles.partnerName}>{s.name}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
