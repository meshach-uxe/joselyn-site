'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './WhatWeDo.module.css';

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const startTime = performance.now();
        const animate = (now: number) => {
          const pct = Math.min((now - startTime) / duration, 1);
          const ease = 1 - Math.pow(1 - pct, 3);
          setCount(Math.floor(ease * target));
          if (pct < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <p ref={ref} className={styles.counter}>
      {count.toLocaleString()}
    </p>
  );
}

export default function WhatWeDo() {
  return (
    <section className={styles.section} id="what-we-do">
      <div className={styles.intro}>
        <div className="container">
          <h2 className={styles.eyebrow}>What We Do</h2>
          <h3 className={styles.subtitle}>
            We conduct research and develop programs<br className="hide-mobile" /> and products which lead to better outcomes in
            people's personal lives, at work, and in society at large.
          </h3>
        </div>
      </div>

      <div className={styles.counterBar}>
        <div className="container">
          <div className={styles.counterInner}>
            <p className={styles.counterLabel}>Global Kindmaker Tracker</p>
            <AnimatedCounter target={811677} />
          </div>
        </div>
      </div>
    </section>
  );
}
