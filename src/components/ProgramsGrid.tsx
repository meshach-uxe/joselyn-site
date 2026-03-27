import Image from 'next/image';
import styles from './ProgramsGrid.module.css';

const programs = [
  {
    title: 'Quality Education',
    desc: 'We cover the \'hidden costs\' that keep children out of the classroom, providing uniforms, textbooks, and quality instruction based on the \'Teaching at the Right Level\' model.',
    img: '/images/Quality%20education.jpg',
    alt: 'Quality Education',
    href: '#',
  },
  {
    title: 'Nutritious Food',
    desc: 'We provide \'Brain Fuel\'—daily meals fortified with essential micronutrients to ensure every child has the cognitive energy to excel.',
    img: '/images/Nutritious%20Food.jpg',
    alt: 'Nutritious Food',
    href: '#',
  },
  {
    title: 'Safe Shelter',
    desc: 'Our family-centered homes provide a sanctuary of love, stability, and emotional care for those who have lost their primary caregivers.',
    img: '/images/maedchenhaus-sierra-leone-334sbt8swxnrvp1.jpg',
    alt: 'Safe Shelter',
    href: '#',
  },
  {
    title: 'Visionary Mentorship',
    desc: 'We pair our youth with leaders and professionals, equipping them with the soft skills and ethical foundation to become the future of Sierra Leone.',
    img: '/images/Visionary%20Mentorship.jpg',
    alt: 'Visionary Mentorship',
    href: '#',
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
              <div className={styles.imgWrap}>
                <img
                  src={p.img}
                  alt={p.alt}
                  className={styles.img}
                />
              </div>
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>{p.title}</h4>
                <p className={styles.cardDesc}>{p.desc}</p>
                <a href={p.href} className={styles.exploreLink}>Explore &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
