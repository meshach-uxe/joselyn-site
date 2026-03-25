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
        <h2 className={styles.heading} style={{ marginBottom: '1rem' }}>
          Your Role in the Story
        </h2>
        <p style={{ maxWidth: 700, margin: '0 auto 3rem' }}>
          Your support is the fuel for our mission. Whether you give once or join our circle of recurring sponsors, you are making a measurable difference in the life of a child in Freetown.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', textAlign: 'left' }}>
          {tiers.map((t, i) => (
            <div key={i} style={{ border: '1px solid var(--color-light-gray)', borderRadius: 12, padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{t.title}</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'var(--font-heading)', marginBottom: '1rem', color: 'var(--color-contrast)' }}>{t.price}</p>
              <p style={{ flex: 1, marginBottom: '2rem', color: 'var(--color-gray)' }}>{t.desc}</p>
              <a href="/donate/" className="btn btn-outline" style={{ textAlign: 'center' }}>Sponsor a Child &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
