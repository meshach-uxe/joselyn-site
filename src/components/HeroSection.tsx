'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './HeroSection.module.css';

const slides = [
  {
    poster: 'https://picsum.photos/seed/hero-1/1920/1080',
    videoMobileAv1: 'https://videos.files.wordpress.com/uBKGxmO8/scrollytelling-1-mobile-av1.mp4',
    videoMobileH264: 'https://videos.files.wordpress.com/CiOYqH2X/scrollytelling-1-mobile-h264.mp4',
    videoAv1: 'https://videos.files.wordpress.com/rs1DzHrC/scrollytelling-1-full-av1.mp4',
    videoH264: 'https://videos.files.wordpress.com/TNHHvuya/scrollytelling-1-full-h264.mp4',
    heading: (
      <>
        Beyond Survival<span className={styles.dot}>.</span>
      </>
    ),
    sub: 'The Joslyn Divine Foundation is breaking the cycle of poverty for Freetown’s most vulnerable children.',
    ctas: null,
  },
  {
    poster: 'https://picsum.photos/seed/hero-2/1920/1080',
    videoMobileAv1: 'https://videos.files.wordpress.com/Q5M3Wezs/scrollytelling-2-mobile-av1.mp4',
    videoMobileH264: 'https://videos.files.wordpress.com/3bRSAYuy/scrollytelling-2-mobile-h264.mp4',
    videoAv1: 'https://videos.files.wordpress.com/AtWbdizi/scrollytelling-2-full-av1.mp4',
    videoH264: 'https://videos.files.wordpress.com/xuqhfbhx/scrollytelling-2-full-h264.mp4',
    heading: (
      <>
        Radical Commitment<span className={styles.dot}>.</span>
      </>
    ),
    sub: 'Through holistic care and consistent mentorship, we are redefining what’s possible.',
    ctas: null,
  },
  {
    poster: 'https://picsum.photos/seed/hero-3/1920/1080',
    videoMobileAv1: 'https://videos.files.wordpress.com/TxtNTd1l/scrollytelling-3-mobile-av1.mp4',
    videoMobileH264: 'https://videos.files.wordpress.com/4qaSIqsO/scrollytelling-3-mobile-h264.mp4',
    videoAv1: 'https://videos.files.wordpress.com/IwzOJ0Nx/scrollytelling-3-full-av1.mp4',
    videoH264: 'https://videos.files.wordpress.com/LQOERNBv/scrollytelling-3-full-h264.mp4',
    heading: (
      <>
        Built for Leadership<span className={styles.dot}>.</span>
      </>
    ),
    sub: 'Join our commitment to their future today.',
    ctas: [
      { label: 'Invest in a Leader \u2192', href: '/donate/', outline: false },
      { label: 'Explore Our Model \u2192', href: '#what-we-do', outline: true }
    ],
  }
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const winHeight = window.innerHeight;

      // Calculate how far we've scrolled past the top of the container
      const scrolled = -rect.top;
      
      // 1. Scale Down Progress
      // Scale over the first 80vh of scrolling
      const pxForScaleDown = winHeight * 0.8; 
      let scaleProgress = 0;
      if (scrolled > 0) {
         scaleProgress = Math.min(1, scrolled / pxForScaleDown);
      } else {
         scaleProgress = 0;
      }
      setProgress(scaleProgress);

      // 2. Active Slide Calculation
      // Find which slideContent is closest to the middle of the viewport
      const slideNodes = containerRef.current.querySelectorAll(`.${styles.slideContent}`);
      let currentActiveIndex = 0;
      let minDistance = Infinity;

      slideNodes.forEach((node, i) => {
        const slideRect = node.getBoundingClientRect();
        const centerDist = Math.abs(slideRect.top + slideRect.height / 2 - winHeight / 2);
        if (centerDist < minDistance) {
          minDistance = centerDist;
          currentActiveIndex = i;
        }
      });
      
      setActiveSlide(currentActiveIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Derived styles for the sticky video mask
  const scale = 1 - (progress * 0.05);
  const radius = progress * 24;

  return (
    <section className={styles.heroSection} ref={containerRef} aria-label="Hero scrollytelling">
      {/* Sticky Background Layer */}
      <div className={styles.stickyBackground}>
        <div 
          className={styles.videoMask}
          style={{
            transform: `scale(${scale})`,
            borderRadius: `${radius}px`
          }}
        >
          {slides.map((slide, i) => (
            <div 
              key={i} 
              className={styles.videoLayer}
              style={{
                opacity: activeSlide === i ? 1 : 0,
                transition: 'opacity 0.6s ease-in-out',
                zIndex: activeSlide === i ? 2 : 1
              }}
            >
              <video
                className={styles.videoBg}
                poster={slide.poster}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={slide.videoMobileAv1} type="video/webm" media="(max-width:600px)" />
                <source src={slide.videoMobileH264} type="video/mp4" media="(max-width:600px)" />
                <source src={slide.videoAv1} type="video/webm" />
                <source src={slide.videoH264} type="video/mp4" />
              </video>
              <div className={styles.overlay} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Text Content Layer */}
      <div className={styles.scrollContent}>
        {slides.map((slide, i) => (
          <div key={i} className={styles.slideContent}>
            <div className={`${styles.textBox} ${activeSlide === i ? styles.textActive : ''}`}>
              <h2 className={styles.heading}>{slide.heading}</h2>
              <p className={styles.sub}>{slide.sub}</p>
              {slide.ctas && (
                <div className={styles.ctaRow}>
                  {slide.ctas.map((cta, cIdx) => (
                    <a key={cIdx} href={cta.href} className={`btn ${cta.outline ? 'btn-outline ' : ''}${styles.ctaBtn}`}>
                      {cta.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
