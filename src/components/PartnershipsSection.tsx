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
        <div className={styles.header}>
          <h2 className={styles.heading}>Trust Earned Through Data</h2>
          <h3 className={styles.sub}>
            We know that trust is earned through data and radical transparency.
          </h3>
          <p className={styles.introDesc}>
            100% of your donation goes directly to our programs in Freetown. We provide monthly impact reports, so you can see the literacy scores, health metrics, and success stories your generosity makes possible.
          </p>
          <div className={styles.ctaWrap}>
            <a href="#" className="btn btn-dark">View Impact Reports &rarr;</a>
          </div>
        </div>

        <div className={styles.grid}>
          {signals.map((s) => (
            <div key={s.name} className={styles.partner}>
              <h4 className={styles.partnerName}>{s.name}</h4>
              <p className={styles.partnerDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
