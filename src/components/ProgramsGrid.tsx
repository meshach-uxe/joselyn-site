import Image from 'next/image';
import styles from './ProgramsGrid.module.css';

const programs = [
  {
    title: 'Quality Education',
    desc: 'We cover the \'hidden costs\' that keep children out of the classroom, providing uniforms, textbooks, and quality instruction based on the \'Teaching at the Right Level\' model.',
    img: 'https://picsum.photos/seed/education/800/600',
    alt: 'Quality Education',
    href: '/education',
  },
  {
    title: 'Nutritious Food',
    desc: 'We provide \'Brain Fuel\'—daily meals fortified with essential micronutrients to ensure every child has the cognitive energy to excel.',
    img: 'https://picsum.photos/seed/nutrition/800/600',
    alt: 'Nutritious Food',
    href: '/food',
  },
  {
    title: 'Safe Shelter',
    desc: 'Our family-centered homes provide a sanctuary of love, stability, and emotional care for those who have lost their primary caregivers.',
    img: 'https://picsum.photos/seed/shelterhome/800/600',
    alt: 'Safe Shelter',
    href: '/shelter',
  },
  {
    title: 'Visionary Mentorship',
    desc: 'We pair our youth with leaders and professionals, equipping them with the soft skills and ethical foundation to become the future of Sierra Leone.',
    img: 'https://picsum.photos/seed/mentoring/800/600',
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
