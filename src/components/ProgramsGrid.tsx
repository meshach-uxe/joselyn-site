import Image from 'next/image';
import styles from './ProgramsGrid.module.css';

const programs = [
  {
    title: 'Quality Education',
    desc: 'We cover the \'hidden costs\' that keep children out of the classroom, providing uniforms, textbooks, and quality instruction based on the \'Teaching at the Right Level\' model.',
    img: '/be-kind-book.webp',
    alt: 'Quality Education',
    href: '/education',
  },
  {
    title: 'Nutritious Food',
    desc: 'We provide \'Brain Fuel\'—daily meals fortified with essential micronutrients to ensure every child has the cognitive energy to excel.',
    img: '/Handing-kindness-note-3@2x.webp',
    alt: 'Nutritious Food',
    href: '/food',
  },
  {
    title: 'Safe Shelter',
    desc: 'Our family-centered homes provide a sanctuary of love, stability, and emotional care for those who have lost their primary caregivers.',
    img: '/Hugging-3@2x.webp',
    alt: 'Safe Shelter',
    href: '/shelter',
  },
  {
    title: 'Visionary Mentorship',
    desc: 'We pair our youth with leaders and professionals, equipping them with the soft skills and ethical foundation to become the future of Sierra Leone.',
    img: '/Discussing-4@2x.webp',
    alt: 'Visionary Mentorship',
    href: '/mentorship',
  },
];

export default function ProgramsGrid() {
  return (
    <section className={styles.section} id="programs">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Our Pillars of Power</h2>
          <p className={styles.desc}>
            <strong>The Mechanics of Impact</strong> <br/>
            Our holistic approach is designed to transform potential into leadership.
          </p>
        </div>

        <div className={styles.grid}>
          {programs.map((p) => (
            <div key={p.title} className={styles.card}>
              <div className={styles.cardTop}>
                <h4 className={styles.cardTitle}>
                  <strong>{p.title}</strong>
                </h4>
                <p className={styles.cardDesc}>{p.desc}</p>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.imgWrap}>
                  <Image
                    src={p.img}
                    alt={p.alt}
                    width={570}
                    height={318}
                    className={styles.img}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.cardCta}>
                  <a href={p.href} className="btn btn-sm">Learn More &rarr;</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
