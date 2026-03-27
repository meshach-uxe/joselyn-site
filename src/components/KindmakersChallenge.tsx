import styles from './KindmakersChallenge.module.css';

export default function KindmakersChallenge() {
  const tiers = [
    { title: 'The Scholar’s Circle', price: '$25/month', desc: 'Covers the hidden costs of education for one child, including uniforms and materials.' },
    { title: 'The Leader’s Circle', price: '$50/month', desc: 'Provides full nutritional support and healthcare access, ensuring a child is physically ready to lead.' },
    { title: 'The Visionary’s Circle', price: '$100/month', desc: 'Funds a child’s complete holistic care, including safe shelter and one-on-one leadership mentorship.' }
  ];

  return (
    <section className={styles.section} id="get-involved">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className={styles.heading}>
          Your Role in the Story
        </h2>
        <p className={styles.introDesc}>
          Your support is the fuel for our mission. Whether you give once or join our circle of recurring sponsors, you are making a measurable difference in the life of a child in Freetown.
        </p>

        <div className={styles.grid}>
          {tiers.map((t, i) => (
            <div key={i} className={styles.tierCard}>
              <h3 className={styles.tierTitle}>{t.title}</h3>
              <p className={styles.tierPrice}>{t.price}</p>
              <p className={styles.tierDesc}>{t.desc}</p>
              <a href="#" className="btn btn-outline" style={{ textAlign: 'center' }}>Sponsor a Child &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
